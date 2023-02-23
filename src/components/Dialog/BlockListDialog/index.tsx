import { BlockList } from '@model/Blocklist';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import React, { useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

import check from '@assets/svg/check.svg';
import close from '@assets/svg/close_gray.svg';

import 'resize-observer-polyfill/dist/ResizeObserver.global';

import '@remotelock/react-week-scheduler/index.css';
import { Box } from '@components/Box';
import ButtonOrange from '@components/ButtonOrange';
import StepOne from '@components/Dialog/BlockListDialog/components/StepOne';
import StepThree from '@components/Dialog/BlockListDialog/components/StepThree';
import StepTwo from '@components/Dialog/BlockListDialog/components/StepTwo';

import { getRandomNumber } from '@utils';

const totalSteps = 3;

interface Props {
  closeModal: (result: BlockList) => void;
}

export default function BlockListDialog({ closeModal }: Props) {
  const [step, setStep] = useState<number>(0);
  const form = useForm<BlockList>();
  const { getValues, setValue } = form;
  const handleNextStep = useCallback(() => {
    if (!getValues().name && step === 0) return;
    if (getValues().listDomains?.length === 0 && step === 1) return;

    setStep((prev) => prev + 1);
  }, [getValues, step]);

  const handlePreviousStep = useCallback(() => {
    setStep((prev) => prev - 1);
  }, []);

  const getStep = useMemo(() => {
    switch (step) {
      case 0:
        return <StepOne form={form} />;

      case 1:
        return <StepTwo form={form} />;

      case 2:
        return <StepThree form={form} />;

      default:
        return null;
    }
  }, [step, form]);

  const handleFinish = useCallback(() => {
    closeModal({
      ...getValues(),
      id: getRandomNumber({}),
    });
  }, [closeModal, getValues]);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="first-line:fixed inset-0 flex" />

      <Dialog.Content className="state-open:animate-fade-in state-closed:animate-fade-out bg-black/60 absolute bottom-0 right-0 flex items-center justify-center w-full h-full outline-none">
        <Box.Column className="relative w-screen mx-40 bg-white">
          <Dialog.Close asChild className="top-2 right-2 absolute">
            <button type="button">
              <Image src={close} />
            </button>
          </Dialog.Close>
          <Box.Title className="justify-start w-auto gap-2 pl-4 mt-4 mb-4 text-blue-900">
            Criar Lista
          </Box.Title>
          <Box.Divider />
          <Box.Row className="flex items-center justify-center mt-2">
            <Box.Row className="flex items-center">
              {step === 0 ? (
                <div className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full">
                  <Box.Value className="text-xl font-semibold text-white">1</Box.Value>
                </div>
              ) : (
                <Image src={check} width={45} height={45} />
              )}
              <Box.Label className="text-xl">Definir detalhes</Box.Label>
            </Box.Row>

            <hr className="w-7 h-[3px] bg-purple-900" />

            <Box.Row className="flex items-center">
              {step <= 1 ? (
                <div
                  className={`flex items-center justify-center w-10 h-10
                  ${step === 1 ? 'bg-orange-500' : 'bg-gray-300'}
                rounded-full`}
                >
                  <Box.Value className="text-xl font-semibold text-white">2</Box.Value>
                </div>
              ) : (
                <Image src={check} width={45} height={45} />
              )}
              <Box.Label className="text-xl">Add Domínios e Apps</Box.Label>
            </Box.Row>

            <hr className="w-7 h-[3px] bg-purple-900" />

            <Box.Row className="flex items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 ${
                  step === 2 ? 'bg-orange-500' : 'bg-gray-300'
                } rounded-full`}
              >
                <Box.Value className="text-xl font-semibold text-white">3</Box.Value>
              </div>
              <Box.Label className="text-xl">Revistar Lista</Box.Label>
            </Box.Row>
          </Box.Row>
          <Box.Column className="flex items-center justify-center my-10">
            {getStep}
          </Box.Column>

          <Box.Divider />
          <Box.Row className=" flex mt-2 mr-10">
            {step !== 0 && (
              <Box.Column className="flex-row items-start mr-5">
                <ButtonOrange
                  title="Voltar"
                  background={false}
                  border={false}
                  onClick={handlePreviousStep}
                />
              </Box.Column>
            )}
            <Box.Row className="flex justify-end flex-1">
              <Box.Column className="flex-row items-start mr-5">
                <Dialog.Close>
                  <ButtonOrange
                    title="Cancelar"
                    background={false}
                    border={false}
                    onClick={() => {
                      setValue('name', '');
                      setValue('description', '');
                      setValue('listDomains', []);
                      setStep(0);
                    }}
                  />
                </Dialog.Close>
              </Box.Column>
              <Box.Column className="flex-row items-start mb-5">
                <ButtonOrange
                  title={step + 1 === totalSteps ? 'Criar Lista' : 'Próximo'}
                  onClick={step + 1 === totalSteps ? handleFinish : handleNextStep}
                />
              </Box.Column>
            </Box.Row>
          </Box.Row>
        </Box.Column>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
