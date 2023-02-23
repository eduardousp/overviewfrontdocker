import { Domain } from '@model/Domain';
import Image from 'next/image';
import React, { useCallback, useState } from 'react';

import check from '@assets/svg/check.svg';
import error from '@assets/svg/error.svg';

import { Box } from '@components/Box';
import ButtonOrange from '@components/ButtonOrange';
import { StepProps } from '@components/Dialog/BlockListDialog/components/types';
import { Loading } from '@components/Loading';

import { getRandomNumber } from '@utils';

const StepTwo = ({ form }: StepProps) => {
  const { setValue } = form;
  const [values, setValues] = useState<string>('');
  const [listDomains, setListDomains] = useState<Domain[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleValidate = useCallback(() => {
    if (!values) return;

    setLoading(true);

    const domains = values.split('\n');
    const list: Domain[] = [];

    domains.forEach((domain, index) => {
      list.push({
        id: getRandomNumber({}),
        domain,
        visit_total: getRandomNumber({}),
        flag: `flag ${domain}`,
        validated: index + 1 !== domains.length,
      });
    });

    setListDomains(list);
    setValue('listDomains', list);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [setValue, values]);

  return (
    <Box.Root className=" flex items-center">
      <Box.Column className="relative">
        <Box.Label>Digite os domínios e Apps separados por quebra de linha.</Box.Label>
        <textarea
          id="comment"
          value={values}
          onChange={(e) => setValues(e.target.value)}
          className="h-52 w-[720px] p-2 text-purple-900 border-2 border-purple-900 rounded-lg outline-none resize-none"
        />
        <Box.Row>
          <Box.Column className="w-[50%] flex justify-start">
            {listDomains.length !== 0 &&
              listDomains.map((domain) => (
                <Box.Row className="flex items-center justify-start">
                  <Image src={domain.validated ? check : error} />
                  <Box.Value className="-ml-1">{`${domain.domain}`}</Box.Value>
                </Box.Row>
              ))}
          </Box.Column>
          <Box.Column className="pt-3">
            <ButtonOrange title="Validar Domínios & App" onClick={handleValidate} />
          </Box.Column>
        </Box.Row>
        {loading && (
          <div className="opacity-70 absolute flex items-center justify-center w-full h-full bg-white">
            <Loading className="w-6" />
          </div>
        )}
      </Box.Column>
    </Box.Root>
  );
};

export default StepTwo;
