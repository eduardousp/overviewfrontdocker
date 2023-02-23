import Image from 'next/image';
import { ArrowUp, CaretDown, CaretLeft, CaretRight } from 'phosphor-react';
import { useState } from 'react';

import CircleButton from '@components/CircleButton';
import { Input } from '@components/Form/Input';

import { createListOperationalSystem } from '@utils/mocks';

const listLanguages = createListOperationalSystem(20);
listLanguages.sort((a, b) => Number(a.id) - Number(b.id));

const Language = () => {
  const [languages] = useState(listLanguages);

  return (
    <>
      <section>
        <Input.Root className="items-center mt-5">
          <Input.Box className="w-[480px] h-10 bg-[#F9F9F9] rounded-xl">
            <Input.TextInput placeholder="Nome/ID" className="text-base" />
            <Image src="/svg/search.svg" width={24} height={24} alt="" />
          </Input.Box>
        </Input.Root>
      </section>

      <section>
        <div className="mt-3 h-[290px] overflow-auto scrollbar-thin scrollbar-track-[#F1F1F1] scrollbar-thumb-[#C6C6C5]">
          <table className="w-full">
            <thead className="sticky top-0 z-10">
              <tr className="bg-white border-b border-purple-900">
                <th className="bg-white pl-10">
                  <button
                    type="button"
                    className="flex flex-row items-center font-normal"
                  >
                    Nome do Idioma
                    <ArrowUp size={16} weight="bold" className="text-orange-600" />
                  </button>
                </th>
                <th>
                  <button
                    type="button"
                    className="flex flex-row items-center font-normal"
                  >
                    ID
                    <ArrowUp size={16} weight="bold" className="text-orange-600" />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {languages.map((language) => {
                return (
                  <tr
                    key={language.id}
                    className="border-b border-purple-900 text-purple-900 h-[32px]"
                  >
                    <td>
                      <CircleButton valid />
                      <CircleButton valid={false} />

                      {language.name}
                    </td>
                    <td>{language.id}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <footer>
        <div className="flex h-[38px] items-center justify-between border-t border-purple-900">
          <span className="ml-6">
            Fileiras por página: 10
            <button type="button">
              <CaretDown weight="bold" size={12} className="text-orange-600" />
            </button>
          </span>

          <span className="mr-6 flex items-center">
            Página{' '}
            <button type="button">
              <CaretLeft size={20} className="text-gray-300" />
            </button>
            1 de 1
            <button type="button">
              <CaretRight size={20} className="text-orange-300" />
            </button>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Language;
