/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Segment } from '@model/Segment';
import Image from 'next/image';
import { XCircle } from 'phosphor-react';
import { useState } from 'react';

import { Button } from '@components/Button';
import CircleButton from '@components/CircleButton';
import { Input } from '@components/Form/Input';
import { SelectItem, SelectRoot } from '@components/Form/Select';

type ExpandableButtonProps = {
  segment: Segment;
  itemType?: string;
};

const ExpandableButton = ({ segment, itemType }: ExpandableButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {itemType !== undefined ? (
        <span className="ml-8">{itemType === 'and' ? 'E' : 'Ou'}</span>
      ) : (
        <span />
      )}
      {isOpen === true ? (
        <div
          key={segment.id}
          className=" border border-purple-900 h-64 mx-6 py-1 rounded w-full"
        >
          <div className="flex self-center relative items-center border-b border-purple-900 px-1 pb-1">
            <CircleButton valid />
            <CircleButton valid={false} />
            <span className="font-normal">{segment.name}</span>
            <span className="font-normal ml-2">({segment.id})</span>
            <button
              type="button"
              className="cursor-pointer ml-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Image src="/svg/pencil.svg" width={18} height={20} alt="" />
            </button>
            <span className="absolute text-2xl right-10 text-orange-500">- -</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-gray-300 absolute right-2"
            >
              <XCircle size={22} weight="fill" />
            </button>
          </div>

          <div className="mt-2 relative">
            <Input.Root className="flex flex-row items-center">
              <Input.Label className="text-blue-900 font-medium text-base ml-4">
                Disparado
              </Input.Label>

              <SelectRoot defaultValue="enable" className="pl-2 pr-0 w-28 h-7 text-sm">
                <SelectItem value="enable" className="ml-2">
                  Entre
                </SelectItem>
                <SelectItem value="disable">Exemplo</SelectItem>
              </SelectRoot>

              <input
                type="number"
                className="border border-orange-500 h-7 w-12 rounded"
                id="frequency-1"
              />

              <SelectRoot defaultValue="minutes" className="pl-2 pr-0 w-28 h-7 text-sm">
                <SelectItem value="minutes" className="ml-2">
                  Minutos
                </SelectItem>
                <SelectItem value="hours">Horas</SelectItem>
              </SelectRoot>
              <span className="text-blue-900 font-medium text-base">e</span>
            </Input.Root>

            <div className="flex border-b border-purple-900 h-10 mt-2 relative items-center">
              <input
                type="number"
                className="ml-[222px] border border-orange-500 h-7 w-12 rounded"
                id="frequency-1"
              />

              <SelectRoot
                defaultValue="minutes"
                className="pl-2 pr-0 w-28 h-7 text-sm ml-3"
              >
                <SelectItem value="minutes" className="ml-2">
                  Minutos
                </SelectItem>
                <SelectItem value="hours">Horas</SelectItem>
              </SelectRoot>
              <span className="text-blue-900 font-medium text-base ml-3">atrás</span>
            </div>

            <Input.Root className="flex flex-row items-center mt-2">
              <Input.Label className="text-blue-900 font-medium text-base ml-4">
                Valor
              </Input.Label>
              <SelectRoot
                defaultValue="enable"
                className="pl-2 pr-0 w-28 h-7 text-sm ml-8"
              >
                <SelectItem value="enable" className="ml-2">
                  Entre
                </SelectItem>
                <SelectItem value="disable">Exemplo</SelectItem>
              </SelectRoot>

              <span>Maior que:</span>
              <input
                type="text"
                className="border border-orange-500 h-7 w-40 rounded"
                id="frequency-1"
              />
            </Input.Root>

            <div className="flex border-b border-purple-900 h-10 mt-2 relative items-center">
              <span className="ml-[220px]">Menor que:</span>
              <input
                type="text"
                className="border border-orange-500 h-7 w-40 rounded ml-1.5"
                id="frequency-1"
              />
            </div>

            <div className="flex absolute right-6 mt-2.5">
              <button
                type="button"
                className="hover:opacity-60 text-base font-medium text-orange-600 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                Cancelar
              </button>

              <Button type="submit" className="text-base h-8 ml-4">
                <span>Adicionar Configuração</span>
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div
          key={segment.id}
          className="flex border border-purple-900 self-center p-1 rounded relative items-center w-full ml-6 mr-6"
        >
          <CircleButton valid />
          <CircleButton valid={false} />
          <span className="font-normal">{segment.name}</span>
          <span className="font-normal ml-2">({segment.id})</span>
          <button
            type="button"
            className="cursor-pointer ml-1"
            onClick={() => setIsOpen(true)}
          >
            <Image src="/svg/pencil.svg" width={18} height={20} alt="" />
          </button>
          <span className="absolute text-2xl right-10 text-orange-500">- -</span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 absolute right-2"
          >
            <XCircle size={22} weight="fill" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ExpandableButton;
