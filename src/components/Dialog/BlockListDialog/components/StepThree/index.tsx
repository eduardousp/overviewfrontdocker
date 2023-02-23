import { Domain } from '@model/Domain';
import React, { useCallback, useMemo, useState } from 'react';

// import { Container } from './styles';
import { Box } from '@components/Box';
import ButtonOrange from '@components/ButtonOrange';
import { StepProps } from '@components/Dialog/BlockListDialog/components/types';
import { SearchInput } from '@components/Form/SearchInput';
import { HelpTooltip } from '@components/HelpTooltip';
import { Switch } from '@components/Switch';

const StepThree = ({ form }: StepProps) => {
  const { getValues } = form;
  const [listDomains, setListDomains] = useState<Domain[]>(getValues().listDomains);
  const [search, setSearch] = useState<string>('');

  const handleRemoveDomain = useCallback(
    (id: number) => {
      setListDomains(listDomains.filter((item) => item.id !== id));
    },
    [listDomains]
  );

  const domainsList = useMemo(() => {
    if (!search) return listDomains;

    return listDomains.filter((item) =>
      item.domain.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [listDomains, search]);

  return (
    <Box.Root className="flex items-center w-full">
      <Box.Column className="flex justify-start w-[70%] -mt-4">
        <Box.Title>{`${
          getValues().listDomains.length
        } Domínio(s) validado(s)`}</Box.Title>
        <Box.Row className="mt-1">
          <Box.Column className="w-[60%] ">
            <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
          </Box.Column>

          <Box.Row className="flex items-center">
            <div className="flex">
              <Switch.Root className="w-12 h-6 px-1">
                <Switch.Thumb className="w-[1.125rem]" />
              </Switch.Root>
            </div>
            <Box.Label className="text-blue-900">Dados de engajamento</Box.Label>
          </Box.Row>
        </Box.Row>
      </Box.Column>
      <Box.Column className="flex w-full mt-4">
        <tr className="flex justify-between w-full px-3">
          <td className="w-[30%]">
            <Box.Label className="text-blue-900">Domínio ou App</Box.Label>
          </td>
          <td className="flex flex-row w-[30%]">
            <Box.Label className="mr-1 text-blue-900">Flags</Box.Label>
            <HelpTooltip className="text-gray-300">
              Informação sobre o tópico que aparece ao se passar o mouse.
            </HelpTooltip>
          </td>
          <td className="flex flex-row w-[30%]">
            <Box.Label className="mr-1 text-blue-900">Visitas totais</Box.Label>
            <HelpTooltip className="text-gray-300">
              Informação sobre o tópico que aparece ao se passar o mouse.
            </HelpTooltip>
          </td>
          <td className="w-[10%]" />
        </tr>
        {domainsList.map((domain, index) => (
          <tr
            key={domain.id.toString()}
            className={`flex justify-between w-full px-3 pt-2 pb-1 bg-gray-50 border-blue-900 border-l-[1px] border-r-[1px] border-b-[1px] ${
              index === 0 && 'border-t-[1px]'
            } -mb-1`}
          >
            <td className="w-[30%]">
              <Box.Value className="text-blue-900">{domain.domain}</Box.Value>
            </td>
            <td className="w-[30%]">
              <Box.Value className="mr-1 text-blue-900">{domain.flag}</Box.Value>
            </td>
            <td className="w-[30%]">
              <Box.Value className="mr-1 text-blue-900">{domain.visit_total}</Box.Value>
            </td>
            <td className="w-[10%]">
              <ButtonOrange
                title="Remover"
                border={false}
                background={false}
                onClick={() => handleRemoveDomain(domain.id)}
              />
            </td>
          </tr>
        ))}
      </Box.Column>
    </Box.Root>
  );
};

export default StepThree;
