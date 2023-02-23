/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { CheckCircle, XCircle, CaretDown } from 'phosphor-react';
import React, { useCallback, useState } from 'react';

import { Box } from '@components/Box';

interface Item {
  value: string;
}
interface ExpandableListProps {
  type: 'positive' | 'negative';
  showOr?: boolean;
  data: Item[];
}

const ExpandableList = ({ data, type, showOr = false }: ExpandableListProps) => {
  const [expandable, setExpandable] = useState<boolean>(false);

  const handleExpandable = useCallback(() => {
    setExpandable((prev) => !prev);
  }, []);

  return (
    <div className="flex flex-col ml-2">
      {data.map((item, index) => {
        if (!expandable && index > 4) {
          return undefined;
        }
        return (
          <div className="flex items-center font-light">
            <div className="h-7 flex items-center justify-center w-6">
              {index !== 0 && (
                <div
                  className={`w-[0.9px] h-8 mb-2 ${
                    type === 'positive' ? 'bg-success' : 'bg-danger'
                  }`}
                />
              )}
              {index === 0 && (
                <div className="flex flex-col items-center justify-center">
                  {type === 'positive' ? (
                    <CheckCircle size={20} weight="fill" className="text-success" />
                  ) : (
                    <XCircle size={20} weight="fill" className="text-danger" />
                  )}
                </div>
              )}
            </div>

            <Box.Value>
              {item.value} {showOr && <span className="text-gray-300">ou</span>}
            </Box.Value>
          </div>
        );
      })}

      {data.length > 5 && (
        <div className="flex flex-row cursor-pointer" onClick={handleExpandable}>
          <CaretDown
            weight="bold"
            size={25}
            className={`text-orange-600 ${expandable ? 'rotate-180' : 'rotate-0'}`}
          />
          <Box.Value>{`Mostrar todos os ${data.length}`}</Box.Value>
        </div>
      )}
    </div>
  );
};

export default ExpandableList;
