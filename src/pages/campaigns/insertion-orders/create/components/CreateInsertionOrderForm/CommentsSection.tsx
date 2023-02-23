import { Input } from '@components/Form/Input';
import { Accordion } from '@components/Form/Section';
import { HelpTooltip } from '@components/HelpTooltip';

export function CommentsSection() {
  return (
    <Accordion.Item value="comments">
      <Accordion.Header className="border-t">
        <Accordion.Trigger>Comentários</Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content>
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
