import { zodResolver } from '@hookform/resolvers/zod';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { useSession } from 'next-auth/react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as zod from 'zod';

import { BreadcrumbRoute, Breadcrumbs } from '@components/Breadcrumb';
import { Button } from '@components/Button';
import { Input } from '@components/Form/Input';
import { RadioItem } from '@components/Form/RadioItem';

import { api } from '@lib/api';

import { RegisterCompletedModal } from '@pages/profile/components/RegisterCompletedModal';

import { withSSRAuth } from '@utils/withSSRAuth';

const updateProfileSchema = zod.object({
  name: zod.string().min(1, 'Nome é obrigatório'),
  phone: zod.string().min(1, 'Telefone é obrigatório'),
  hasExperience: zod.string({ required_error: 'Escolha uma opção' }),
  company: zod.object({
    name: zod.string().min(1, 'Nome da empresa é obrigatório'),
    email: zod
      .string()
      .min(1, 'E-mail da empresa é obrigatório')
      .email('E-mail inválido'),
    url: zod.string().min(1, 'Site é obrigatório').url('Site inválido'),
    cnpj: zod.string().min(1, 'CNPJ é obrigatório'),
    isDigitalMediaAgency: zod.string({ required_error: 'Escolha uma opção' }),
  }),
});

const breadcrumbsConfig: BreadcrumbRoute[] = [
  { id: '1', path: '/profile', title: 'Configurações do perfil', active: true },
];

type UpdateProfileFormData = zod.infer<typeof updateProfileSchema>;

export default function Profile() {
  const router = useRouter();
  const session = useSession();
  const [showRegisterCompletedModal, setSetShowRegisterCompletedModal] = useState(false);

  const form = useForm<UpdateProfileFormData>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: session.data?.user.name || '',
      phone: session.data?.user.phone || '',
      hasExperience:
        session.data?.user.hasExperience === undefined
          ? undefined
          : String(Number(session.data.user.hasExperience)),
      company: {
        name: session.data?.user.company?.name || '',
        email: session.data?.user.company?.email || '',
        url: session.data?.user.company?.url || '',
        cnpj: session.data?.user.company?.cnpj || '',
        isDigitalMediaAgency:
          session.data?.user.company?.isDigitalMediaAgency === undefined
            ? undefined
            : String(Number(session.data?.user.company?.isDigitalMediaAgency)),
      },
    },
  });

  async function handleUpdateProfile(formData: UpdateProfileFormData) {
    await api.post('profile', {
      ...formData,
      hasExperience: Boolean(formData.hasExperience),
      company: {
        ...formData.company,
        isDigitalMediaAgency: Boolean(formData.company.isDigitalMediaAgency),
      },
    });

    if (!session.data?.user.isAccountComplete) {
      setSetShowRegisterCompletedModal(true);
    }

    // This is a hack to force the session to be fetched
    const event = new Event('visibilitychange');
    document.dispatchEvent(event);

    router.push('/');
  }

  return (
    <div className="py-6 px-12 lg:py-12 lg:px-24">
      <NextSeo title="Perfil | Overview" />

      <Breadcrumbs routes={breadcrumbsConfig} />
      <RegisterCompletedModal
        open={showRegisterCompletedModal}
        onOpenChange={setSetShowRegisterCompletedModal}
      />

      <form
        className="flex gap-12 flex-col items-center lg:flex-row lg:justify-center lg:items-start"
        onSubmit={form.handleSubmit(handleUpdateProfile)}
      >
        <section className="bg-zinc-100 max-w-[680px] w-full pt-4 pb-16 rounded-xl h-fit">
          <span className="text-purple-900 font-medium text-2xl block ml-4 mb-5">
            Informações da conta
          </span>

          <div className="flex flex-col gap-6 px-10">
            <Input.Root>
              <Input.Label required htmlFor="name">
                NOME
              </Input.Label>

              <Input.Box>
                <Input.TextInput {...form.register('name')} />
              </Input.Box>

              <Input.Error>{form.formState.errors.name?.message}</Input.Error>
            </Input.Root>

            <Input.Root>
              <Input.Label required htmlFor="phone">
                TELEFONE
              </Input.Label>

              <Input.Box>
                <Controller
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <Input.Mask
                      value={field.value}
                      id="phone"
                      format="(##) #####-####"
                      placeholder="(00) 00000-0000"
                      onValueChange={(values) => field.onChange(values.value)}
                    />
                  )}
                />
              </Input.Box>
            </Input.Root>

            <Input.Root className="opacity-60">
              <Input.Label>EMAIL</Input.Label>
              <Input.Box className="cursor-not-allowed">
                <Input.TextInput
                  disabled
                  defaultValue={session.data?.user.email || undefined}
                />
              </Input.Box>
            </Input.Root>
          </div>
        </section>

        <div className="max-w-[680px] w-full">
          <section className="bg-zinc-100 pt-4 pb-16 rounded-xl h-fit">
            <span className="text-purple-900 font-medium text-2xl block ml-4 mb-5">
              Informações da empresa
            </span>

            <div className="flex flex-col gap-6 px-10">
              <Input.Root>
                <Input.Label required htmlFor="company.name">
                  NOME DA EMPRESA
                </Input.Label>

                <Input.Box>
                  <Input.TextInput {...form.register('company.name')} />
                </Input.Box>

                <Input.Error>{form.formState.errors.company?.name?.message}</Input.Error>
              </Input.Root>

              <Input.Root>
                <Input.Label required htmlFor="company.email">
                  EMAIL DA EMPRESA
                </Input.Label>

                <Input.Box>
                  <Input.TextInput type="email" {...form.register('company.email')} />
                </Input.Box>

                <Input.Error>{form.formState.errors.company?.email?.message}</Input.Error>
              </Input.Root>

              <section>
                <span className="text-purple-900 text-2xl font-medium mb-4 block">
                  Já possui experiência com compra de mídia?
                  <span className="text-red-600">*</span>
                  {!!form.formState.errors.hasExperience && (
                    <span className="block text-red-600 text-base font-normal">
                      {form.formState.errors.hasExperience?.message}
                    </span>
                  )}
                </span>

                <Controller
                  name="hasExperience"
                  control={form.control}
                  render={({ field }) => (
                    <RadioGroup.Root
                      className="flex items-center gap-12"
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <RadioItem label="Sim" value="1" />
                      <RadioItem label="Não" value="0" />
                    </RadioGroup.Root>
                  )}
                />
              </section>

              <section>
                <span className="text-purple-900 text-2xl font-medium mb-4 block">
                  Sua empresa é uma agência de mídia digital?
                  <span className="text-red-600">*</span>
                  {!!form.formState.errors.company?.isDigitalMediaAgency && (
                    <span className="block text-red-600 text-base font-normal">
                      {form.formState.errors.company.isDigitalMediaAgency.message}
                    </span>
                  )}
                </span>

                <Controller
                  name="company.isDigitalMediaAgency"
                  control={form.control}
                  render={({ field }) => (
                    <RadioGroup.Root
                      className="flex items-center gap-12"
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <RadioItem label="Sim" value="1" />
                      <RadioItem label="Não" value="0" />
                    </RadioGroup.Root>
                  )}
                />
              </section>

              <Input.Root>
                <Input.Label required htmlFor="company.url">
                  SITE DA EMPRESA
                </Input.Label>

                <Input.Box>
                  <Input.TextInput {...form.register('company.url')} />
                </Input.Box>

                <Input.Error>{form.formState.errors.company?.url?.message}</Input.Error>
              </Input.Root>

              <Input.Root>
                <Input.Label required htmlFor="company.cnpj">
                  CNPJ DA EMPRESA
                </Input.Label>

                <Input.Box>
                  <Controller
                    control={form.control}
                    name="company.cnpj"
                    render={({ field }) => (
                      <Input.Mask
                        value={field.value}
                        id="company.cnpj"
                        placeholder="00.000.000/0001-00"
                        onValueChange={(values) => field.onChange(values.value)}
                        format="##.###.###/####-##"
                      />
                    )}
                  />
                </Input.Box>
              </Input.Root>
            </div>
          </section>

          <Button
            disabled={form.formState.isSubmitting}
            type="submit"
            className="mt-8 ml-auto"
          >
            <span>Salvar Alterações</span>
          </Button>
        </div>
      </form>
    </div>
  );
}

export const getServerSideProps = withSSRAuth();
