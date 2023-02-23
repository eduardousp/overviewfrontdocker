import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Input } from '@components/Form/Input';

type SummaryProps = {
  selected: string;
};

export function Summary({ selected }: SummaryProps) {
  const [title, setTitle] = useState('');

  useEffect(() => {
    switch (selected) {
      case 'os':
        setTitle('Sistemas Operacionais Selecionados');
        break;
      case 'browser':
        setTitle('Navegadores Selecionados');
        break;
      case 'language':
        setTitle('Idiomas Selecionados');
        break;
      case 'device_model':
        setTitle('Modelos dos Dispositivos Selecionados');
        break;
      case 'carrier':
        setTitle('Operadoras Selecionadas');
        break;
      default:
        setTitle('Resumo');
    }
  }, [selected]);

  return (
    <section
      className={
        selected === 'summary'
          ? 'flex flex-1 flex-col items-start ml-6'
          : 'flex flex-1 flex-col items-center'
      }
    >
      <div className="my-3">
        <span className="font-medium">{title}</span>
        <button type="button" className=" text-xs text-orange-600 ml-4">
          Remover Todos
        </button>
      </div>

      <Input.Root
        className={selected === 'summary' ? 'flex items-start' : 'flex items-center'}
      >
        <Input.Box className="w-[360px] h-8 bg-[#F9F9F9] rounded-xl border-green-500 focus-within:ring-green-500 rounded-[8px]">
          <Input.TextInput
            placeholder="Nome/ID"
            className="text-base text-sm text-black"
          />
          <Image src="/svg/search.svg" width={24} height={24} alt="" />
        </Input.Box>
      </Input.Root>
    </section>
  );
}
