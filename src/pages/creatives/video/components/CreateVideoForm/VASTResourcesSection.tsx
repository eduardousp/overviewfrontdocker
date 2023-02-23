import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { Input } from '@components/Form/Input';
import { Accordion } from '@components/Form/Section';
import { Switch } from '@components/Switch';

export function VASTResourcesSection() {
  return (
    <Accordion.Item value="vast_resources">
      <Accordion.Header className="border-t">
        <Accordion.Trigger>
          Recursos VAST <span className="font-normal">(opcional)</span>
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content>
        <Accordion.Row className="h-fit pt-5 pb-7 flex-col items-start gap-4">
          <span className="text-blue-900 font-medium text-xl">
            Selecione recursos adicionais do player de vídeo VAST:
          </span>

          <div className="flex w-full items-baseline gap-2">
            <Switch.Root className="w-12 h-6 px-1">
              <Switch.Thumb className="w-[1.125rem]" />
            </Switch.Root>

            <Input.Root className="max-w-[600px] w-full">
              <Input.Label className="text-blue-900 font-medium text-xl">
                Skip Offset
              </Input.Label>

              <Input.Box className="w-full h-6 rounded-lg px-4">
                <Input.TextInput
                  className="text-base"
                  placeholder="Insira um valor inteiro"
                />
              </Input.Box>
            </Input.Root>
          </div>
        </Accordion.Row>

        <Accordion.Row className="h-fit pt-4 pb-5 flex-col items-start gap-4">
          <label className="flex items-center gap-2 text-blue-900 font-medium text-xl">
            <Switch.Root className="w-12 h-6 px-1">
              <Switch.Thumb className="w-[1.125rem]" />
            </Switch.Root>
            ID Universal de Ad
          </label>

          <Input.Root className="w-full flex-row items-center">
            <Input.Label className="text-blue-900 font-medium text-base w-[90px]">
              Registro
            </Input.Label>

            <Input.Box className="max-w-[560px] w-full h-6 rounded-lg px-4">
              <Input.TextInput
                className="text-base"
                placeholder="Insira uma string customizada"
              />
            </Input.Box>
          </Input.Root>

          <Input.Root className="w-full flex-row items-center">
            <Input.Label className="text-blue-900 font-medium text-base w-[90px]">
              Valor do ID
            </Input.Label>

            <Input.Box className="max-w-[560px] w-full h-6 rounded-lg px-4">
              <Input.TextInput
                className="text-base"
                placeholder="Insira uma string customizada"
              />
            </Input.Box>
          </Input.Root>

          <button
            type="button"
            className="text-orange-600 text-base font-medium hover:opacity-70 transition-opacity"
          >
            + Add Outro
          </button>
        </Accordion.Row>

        <Accordion.Row className="h-fit pt-4 pb-5 flex-col items-start gap-4">
          <label className="flex items-center gap-2 text-blue-900 font-medium text-xl">
            <Switch.Root className="w-12 h-6 px-1">
              <Switch.Thumb className="w-[1.125rem]" />
            </Switch.Root>
            Verificações de Anúncios
          </label>

          <Input.Root className="w-full flex-row items-center">
            <Input.Label className="text-blue-900 font-medium text-base whitespace-nowrap w-[200px]">
              Domínio do fornecedor
            </Input.Label>

            <Input.Box className="max-w-[456px] w-full h-6 rounded-lg px-4">
              <Input.TextInput
                className="text-base"
                placeholder="Insira uma string customizada"
              />
            </Input.Box>
          </Input.Root>

          <Input.Root className="w-full flex-row items-center">
            <Input.Label className="text-blue-900 font-medium text-base whitespace-nowrap w-[200px]">
              Caso de uso do fornecedor
            </Input.Label>

            <Input.Box className="max-w-[456px] w-full h-6 rounded-lg px-4">
              <Input.TextInput
                className="text-base"
                placeholder="Insira uma string customizada"
              />
            </Input.Box>
          </Input.Root>

          <Input.Root className="w-full flex-row">
            <Input.Label className="text-blue-900 font-medium text-base whitespace-nowrap w-[200px]">
              Parâmetros de Verificação
            </Input.Label>

            <textarea
              className="px-3 max-w-[456px] w-full rounded-lg h-16 resize-none border border-purple-900 text-purple-900 placeholder:text-purple-900"
              placeholder="Insira o texto"
            />
          </Input.Root>

          <span className="text-blue-900 text-xl font-medium mt-2">
            Recursos Javascript
          </span>

          <Input.Root className="w-full flex-row">
            <Input.Label className="text-blue-900 font-medium text-base whitespace-nowrap w-[200px]">
              URL Segura
            </Input.Label>

            <textarea
              className="px-3 max-w-[456px] w-full rounded-lg h-16 resize-none border border-purple-900 text-purple-900 placeholder:text-purple-900"
              placeholder="Insira o texto"
            />
          </Input.Root>

          <Input.Root className="w-full flex-row items-center">
            <Input.Label className="text-blue-900 font-medium text-base whitespace-nowrap w-[200px]">
              API Framework
            </Input.Label>

            <Input.Box className="max-w-[456px] w-full h-6 rounded-lg px-4">
              <Input.TextInput
                className="text-base"
                placeholder="Insira uma string customizada"
              />
            </Input.Box>
          </Input.Root>

          <div className="flex gap-3">
            <Input.Label className="text-blue-900 font-medium text-base whitespace-nowrap w-[200px]">
              Navegador opcional
            </Input.Label>

            <ToggleGroup.Root type="single" defaultValue="false" className="flex gap-6">
              <ToggleGroup.Item
                value="true"
                className="text-orange-600 border-orange-600 text-base border rounded-md px-2 h-7 state-on:bg-orange-600 state-on:text-white state-on:font-medium transition-colors"
              >
                Verdadeiro
              </ToggleGroup.Item>
              <ToggleGroup.Item
                value="false"
                className="text-orange-600 border-orange-600 text-base border rounded-md px-2 h-7 state-on:bg-orange-600 state-on:text-white state-on:font-medium transition-colors"
              >
                Falso
              </ToggleGroup.Item>
            </ToggleGroup.Root>
          </div>

          <span className="text-blue-900 text-xl font-medium mt-2">
            Recursos Executáveis
          </span>

          <Input.Root className="w-full flex-row">
            <Input.Label className="text-blue-900 font-medium text-base whitespace-nowrap w-[200px]">
              Referência de Recurso
            </Input.Label>

            <textarea
              className="px-3 max-w-[456px] w-full rounded-lg h-16 resize-none border border-purple-900 text-purple-900 placeholder:text-purple-900"
              placeholder="Insira uma URL segura"
            />
          </Input.Root>

          <Input.Root className="w-full flex-row items-center">
            <Input.Label className="text-blue-900 font-medium text-base whitespace-nowrap w-[200px]">
              API Framework
            </Input.Label>

            <Input.Box className="max-w-[456px] w-full h-6 rounded-lg px-4">
              <Input.TextInput
                className="text-base"
                placeholder="Insira uma string customizada"
              />
            </Input.Box>
          </Input.Root>

          <Input.Root className="w-full flex-row items-center">
            <Input.Label className="text-blue-900 font-medium text-base whitespace-nowrap w-[200px]">
              Tipo
            </Input.Label>

            <Input.Box className="max-w-[456px] w-full h-6 rounded-lg px-4">
              <Input.TextInput
                className="text-base"
                placeholder="Insira uma string customizada"
              />
            </Input.Box>
          </Input.Root>

          <span className="text-blue-900 text-xl font-medium mt-2">
            Rastreador (Verificação Não Executada)
          </span>

          <Input.Root className="w-full flex-row">
            <Input.Label className="text-blue-900 font-medium text-base whitespace-nowrap w-[200px]">
              URL Segura
            </Input.Label>

            <textarea
              className="px-3 max-w-[456px] w-full rounded-lg h-16 resize-none border border-purple-900 text-purple-900 placeholder:text-purple-900"
              placeholder="Insira uma URL segura"
            />
          </Input.Root>
        </Accordion.Row>

        <Accordion.Row className="h-fit pt-4 pb-5 flex-col items-start gap-4">
          <label className="flex items-center gap-2 text-blue-900 font-medium text-xl">
            <Switch.Root className="w-12 h-6 px-1">
              <Switch.Thumb className="w-[1.125rem]" />
            </Switch.Root>
            Impressões Visíveis
          </label>

          <Input.Root className="w-full flex-row">
            <Input.Label className="text-blue-900 font-medium text-base whitespace-nowrap w-[200px]">
              Visível
            </Input.Label>

            <textarea
              className="px-3 max-w-[456px] w-full rounded-lg h-16 resize-none border border-purple-900 text-purple-900 placeholder:text-purple-900"
              placeholder="Insira uma URL segura"
            />
          </Input.Root>

          <Input.Root className="w-full flex-row">
            <Input.Label className="text-blue-900 font-medium text-base whitespace-nowrap w-[200px]">
              Não Visível
            </Input.Label>

            <textarea
              className="px-3 max-w-[456px] w-full rounded-lg h-16 resize-none border border-purple-900 text-purple-900 placeholder:text-purple-900"
              placeholder="Insira uma URL segura"
            />
          </Input.Root>

          <Input.Root className="w-full flex-row">
            <Input.Label className="text-blue-900 font-medium text-base whitespace-nowrap w-[200px]">
              Visibilidade Indeterminada
            </Input.Label>

            <textarea
              className="px-3 max-w-[456px] w-full rounded-lg h-16 resize-none border border-purple-900 text-purple-900 placeholder:text-purple-900"
              placeholder="Insira uma URL segura"
            />
          </Input.Root>
        </Accordion.Row>
      </Accordion.Content>
    </Accordion.Item>
  );
}
