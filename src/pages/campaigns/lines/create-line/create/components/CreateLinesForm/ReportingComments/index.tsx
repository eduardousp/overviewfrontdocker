import { Input } from '@components/Form/Input';
import { Accordion } from '@components/Form/Section';
import { HelpTooltip } from '@components/HelpTooltip';

export function ReportingComments() {
  return (
    <Accordion.Item value="comments">
      <Accordion.Header className="border-t">
        <Accordion.Trigger>Relatórios e Comentários</Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content>
        <Accordion.Row className="py-6 h-fit block">
          <Input.Root>
            <Input.Label
              htmlFor="comment"
              className="text-blue-900 flex items-center gap-1"
            >
              Etiquetas de relatórios
              <HelpTooltip className="text-gray-300">
                Informação sobre o tópico que aparece ao se passar o mouse.
              </HelpTooltip>
            </Input.Label>
          </Input.Root>

          <div className="flex flex-row mt-4">
            <Input.Root className="mx-4 w-[320px]">
              <Input.Label
                htmlFor="comment"
                className="text-blue-900 flex items-center gap-1 text-xl"
              >
                Tráfego
              </Input.Label>
              <Input.Box>
                <Input.TextInput className="text-xl" placeholder="" />
              </Input.Box>
            </Input.Root>

            <Input.Root className="mx-4 w-[320px]">
              <Input.Label
                htmlFor="comment"
                className="text-blue-900 flex items-center gap-1 text-xl"
              >
                Representante de vendas
              </Input.Label>
              <Input.Box>
                <Input.TextInput className="text-xl" placeholder="" />
              </Input.Box>
            </Input.Root>

            <Input.Root className="mx-4 w-[320px]">
              <Input.Label
                htmlFor="comment"
                className="text-blue-900 flex items-center gap-1 text-xl"
              >
                Tipo de Linha
              </Input.Label>
              <Input.Box>
                <Input.TextInput className="text-xl" placeholder="" />
              </Input.Box>
            </Input.Root>
          </div>
        </Accordion.Row>

        <Accordion.Row className="py-6 h-fit block">
          <Input.Root>
            <Input.Label
              htmlFor="comment"
              className="text-blue-900 flex items-center gap-1"
            >
              Comentar
              <HelpTooltip className="text-gray-300">
                Informação sobre o tópico que aparece ao se passar o mouse.
              </HelpTooltip>
            </Input.Label>

            <textarea
              id="comment"
              className="outline-none w-full max-w-[45rem] h-52 rounded-lg border-2 border-purple-900 resize-none p-2 text-purple-900"
            />
          </Input.Root>
        </Accordion.Row>
      </Accordion.Content>
    </Accordion.Item>
  );
}
