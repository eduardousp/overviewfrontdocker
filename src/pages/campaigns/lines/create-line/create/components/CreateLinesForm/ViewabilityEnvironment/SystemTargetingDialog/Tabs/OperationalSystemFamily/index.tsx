import Image from 'next/image';
import { ArrowUp, CaretDown, CaretLeft, CaretRight } from 'phosphor-react';
import { useState } from 'react';

import CircleButton from '@components/CircleButton';
import { Input } from '@components/Form/Input';

import { createListOperationalSystem } from '@utils/mocks';

const listOperationalSystemFamilies = createListOperationalSystem(20);
listOperationalSystemFamilies.sort((a, b) => Number(a.id) - Number(b.id));

const OperationalSystemFamily = () => {
  const [operationalSystemFamilies] = useState(listOperationalSystemFamilies);
  const [operationalSystems] = useState(listOperationalSystemFamilies);
  const [tabSelected, setTabSelected] = useState('os_family');

  return (
    <div>
      <header className="flex">
        <button
          type="button"
          className="flex items-center pl-1 border-b border-purple-900 ml-2 w-[280px] h-[40px] mr-5"
          onClick={() => setTabSelected('os_family')}
        >
          <span className={tabSelected === 'os_family' ? 'font-base' : 'opacity-30'}>
            Família de Sistemas Operacionais
          </span>
        </button>
        <button
          type="button"
          className="flex items-center pl-1 border-b border-orange-500 ml-2 w-[280px] h-[40px]"
          onClick={() => setTabSelected('os')}
        >
          <span className={tabSelected === 'os' ? 'font-base' : 'opacity-30'}>
            Sistema Operacional
          </span>
        </button>
      </header>

      {tabSelected === 'os_family' ? (
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
            <div className="mt-3 h-[250px] overflow-auto scrollbar-thin scrollbar-track-[#F1F1F1] scrollbar-thumb-[#C6C6C5]">
              <table className="w-full">
                <thead className="sticky top-0 z-10">
                  <tr className="bg-white border-b border-purple-900">
                    <th className="bg-white pl-10">
                      <button
                        type="button"
                        className="flex flex-row items-center font-normal"
                      >
                        Família de sistemas operacionais
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
                  {operationalSystemFamilies.map((osFamily) => {
                    return (
                      <tr
                        key={osFamily.id}
                        className="border-b border-purple-900 text-purple-900 h-[32px]"
                      >
                        <td>
                          <CircleButton valid />
                          <CircleButton valid={false} />

                          {osFamily.name}
                        </td>
                        <td>{osFamily.id}</td>
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
      ) : (
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
            <div className="mt-3 h-[250px] overflow-auto scrollbar-thin scrollbar-track-[#F1F1F1] scrollbar-thumb-[#C6C6C5]">
              <table className="w-full">
                <thead className="sticky top-0 z-10">
                  <tr className="bg-white border-b border-purple-900">
                    <th className="bg-white pl-10">
                      <button
                        type="button"
                        className="flex flex-row items-center font-normal"
                      >
                        Sistemas operacionais
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
                    <th>
                      <button
                        type="button"
                        className="flex flex-row items-center font-normal"
                      >
                        Famílias de OS
                        <ArrowUp size={16} weight="bold" className="text-orange-600" />
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {operationalSystems.map((os) => {
                    return (
                      <tr
                        key={os.id}
                        className="border-b border-purple-900 text-purple-900 h-[32px]"
                      >
                        <td>
                          <CircleButton valid />
                          <CircleButton valid={false} />

                          {os.name}
                        </td>
                        <td>{os.id}</td>
                        <td>{os.name}</td>
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
      )}
    </div>
  );
};

export default OperationalSystemFamily;
