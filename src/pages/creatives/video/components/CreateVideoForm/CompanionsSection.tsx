import { Input } from '@components/Form/Input';
import { SearchInput } from '@components/Form/SearchInput';
import { Accordion } from '@components/Form/Section';
import { SelectItem, SelectRoot } from '@components/Form/Select';

export function CompanionsSection() {
  return (
    <Accordion.Item value="companions">
      <Accordion.Header className="border-t">
        <Accordion.Trigger>
          Companheiros <span className="font-normal">(opcional)</span>
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content>
        <Accordion.Row className="h-fit pt-7 pb-6 gap-6 items-baseline">
          <Input.Label className="text-blue-900 font-medium text-xl whitespace-nowrap">
            Criativos Banner
          </Input.Label>

          <div className="max-w-[800px] w-full">
            <SearchInput />

            <div className="bg-gray-50 mt-4 pb-4">
              <span className="text-blue-900 text-base font-medium mt-1 ml-2">
                Adicionar Banners
              </span>

              <div className="bg-white mx-10 px-2 py-4 mt-4 flex justify-between flex-col gap-2 xl:flex-row xl:gap-0">
                <span className="text-blue-900 text-base">
                  Nome_do_Banner.extensão (NºID)
                </span>

                <div className="flex gap-4">
                  <span>px X px</span>

                  <div className="w-[1px] bg-blue-900" />

                  <span className="text-success">Audit aprovada</span>

                  <div className="w-[1px] bg-blue-900" />

                  <SelectRoot defaultValue="default">
                    <SelectItem className="text-blue-900 font-xl" value="default">
                      Padrão
                    </SelectItem>

                    <SelectItem className="text-blue-900 font-xl" value="end_card">
                      End-Card
                    </SelectItem>

                    <SelectItem className="text-blue-900 font-xl" value="competitor">
                      Concorrente
                    </SelectItem>
                  </SelectRoot>
                </div>
              </div>
            </div>
          </div>
        </Accordion.Row>
      </Accordion.Content>
    </Accordion.Item>
  );
}
