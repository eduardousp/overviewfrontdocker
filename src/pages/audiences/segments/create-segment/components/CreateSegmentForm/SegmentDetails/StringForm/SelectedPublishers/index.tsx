import { ArrowUp, CaretDown, CaretLeft, CaretRight } from 'phosphor-react';
import { useState } from 'react';

import CircleButton from '@components/CircleButton';
import { SearchInput } from '@components/Form/SearchInput';

import { createListAdvertiser } from '@utils/mocks';

const listAdvertiser = createListAdvertiser(10);
listAdvertiser.sort((a, b) => Number(a.id) - Number(b.id));

export default function SelectedPublishers() {
  const [advertisers] = useState(listAdvertiser);

  return (
    <div className="flex flex-row w-[680px] border border-purple-900 mt-3 mx-auto">
      <div className="w-[440px] border-r border-purple-900">
        <div className="my-2 ml-4 mr-20 h-10">
          <SearchInput />
        </div>
        <table className="w-full">
          <thead className="sticky top-0 z-10">
            <tr>
              <th className="pl-10 pb-1 border-b border-purple-900">
                <button type="button" className="flex flex-row items-center font-normal ">
                  Nome da publisher
                  <ArrowUp size={16} weight="bold" className="text-orange-600" />
                </button>
              </th>
              <th>
                <button type="button" className="flex flex-row items-center font-normal">
                  ID
                  <ArrowUp size={16} weight="bold" className="text-orange-600" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {advertisers.map((advertiser) => {
              return (
                <tr
                  key={advertiser.id}
                  className="border-t border-purple-900 text-blue-900 h-[32px]"
                >
                  <td className="pl-4">
                    <CircleButton valid />
                    {advertiser.name}
                  </td>
                  <td>{advertiser.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <footer className="flex items-center relative h-10 border-t border-purple-900">
          <div>
            <span className="flex items-center ml-6">
              Fileiras por página: 10
              <button type="button">
                <CaretDown className="text-orange-500" />
              </button>
            </span>
          </div>
          <div className="flex items-center absolute right-6">
            Página{' '}
            <button type="button">
              <CaretLeft className="text-orange-500" />
            </button>{' '}
            01 de 01{' '}
            <button type="button">
              <CaretRight className="text-orange-500" />
            </button>
          </div>
        </footer>
      </div>
      <div className="relative w-[240px] flex flex-col">
        <span className="text-center font-medium mt-4">Publishers Selecionadas</span>
        <button
          type="button"
          className="text-orange-500 font-medium absolute bottom-2 right-6"
        >
          Remover Todos
        </button>
      </div>
    </div>
  );
}
