import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/future/image';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

import CircleValidNeutral from '@assets/svg/circle_valid_neutral.svg';
import CircleValidOn from '@assets/svg/circle_valid_on.svg';

import { Box } from '@components/Box';
import { Input } from '@components/Form/Input';
import { HelpTooltip } from '@components/HelpTooltip';

import { getVideoInfos, VideoInfo } from '@utils/getVideoInfos';

export function CreateVideoSidebar() {
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'video/*': [] },
    maxFiles: 1,
    multiple: false,
    onDrop: async (files) => {
      try {
        const videoInfoResponse = await getVideoInfos(files[0]);
        setVideoInfo(videoInfoResponse);
      } catch (error) {
        alert('Error while getting video duration');
        console.error(error);
      }
    },
  });

  function handleCheckVideoMacros() {
    // should validate video macros with video url
  }

  return (
    <Tabs.Root
      className="flex flex-col h-full min-w-[400px] max-w-[400px] shadow-xl"
      defaultValue="file"
    >
      <Tabs.List className="px-6 mt-8">
        <div className="flex w-full justify-between items-center">
          <span className="text-purple-900 text-xl font-medium">Preview do criativo</span>
          <button
            type="button"
            className="text-orange-600 font-medium text-xl hover:opacity-70 transition-opacity"
          >
            Preview
          </button>
        </div>

        <div className="mt-6 flex justify-between">
          <Tabs.Trigger
            className="border border-orange-600 h-7 w-40 rounded text-base state-active:bg-orange-600 state-active:text-white state-active:font-medium transition-colors"
            value="file"
          >
            Arquivo Hospedado
          </Tabs.Trigger>

          <Tabs.Trigger
            className="border border-orange-600 h-7 w-40 rounded text-base state-active:bg-orange-600 state-active:text-white state-active:font-medium transition-colors"
            value="url"
          >
            URL Third-Party
          </Tabs.Trigger>
        </div>
      </Tabs.List>

      <Tabs.Content value="file" asChild>
        <div
          className="min-w-[300px] min-h-[250px] max-w-[300px] mx-auto mt-7 bg-creative-preview flex flex-col justify-between items-center py-16 px-4 bg-gray-50 cursor-pointer"
          {...getRootProps()}
        >
          <input {...getInputProps()} />

          {videoInfo ? (
            <span className="text-center my-auto">{videoInfo.name}</span>
          ) : (
            <>
              <span className="text-purple-900 text-xl font-medium">
                Arraste o arquivo aqui
              </span>

              <span className="text-purple-900 text-2xl font-medium">ou</span>

              <span className="bg-orange-600 rounded text-white px-2 h-8 font-medium text-xl hover:opacity-70 transition-opacity">
                Escolher arquivo
              </span>
            </>
          )}
        </div>
      </Tabs.Content>

      <Tabs.Content value="url" className="flex flex-col items-center w-fit mx-auto mt-8">
        <Input.Label className="text-blue-900 text-base font-normal flex flex-col gap-2 relative before:absolute before:h-[82px] before:-left-10 before:top-[43px] before:w-10 before:border-b before:border-l before:border-t before:border-purple-900">
          Seguro
          <input
            type="text"
            className="w-[240px] border border-purple-900 outline-none px-2 h-6"
          />
        </Input.Label>

        <Input.Label className="text-blue-900 text-base font-normal flex flex-col gap-2 mt-6 relative before:absolute before:w-5 before:h-5 before:bg-white before:-top-2 before:left-[-3rem] before:bg-[url('/svg/connect.svg')] before:bg-no-repeat before:bg-center">
          <span>
            Não Seguro <Input.Required>*</Input.Required>
          </span>

          <input
            type="text"
            className="w-[240px] border border-purple-900 outline-none px-2 h-6"
          />
        </Input.Label>

        <footer className="mt-4 w-full flex justify-end gap-6">
          <button
            className="h-7 text-orange-600 text-base font-medium hover:opacity-75 transition-opacity"
            onClick={handleCheckVideoMacros}
            type="button"
          >
            Checar Macros
          </button>

          <button
            className="h-7 bg-orange-600 px-4 rounded text-white font-medium text-base hover:opacity-75 transition-opacity"
            type="button"
          >
            Continuar
          </button>
        </footer>
      </Tabs.Content>

      <div className="px-6 pb-8 mt-6 flex flex-col items-center gap-8 overflow-auto">
        <div className="flex flex-col w-full border-t-2 border-purple-900">
          <span className="text-blue-900 font-medium text-xl mt-4">Nome do arquivo</span>
          <span className="text-blue-900 text-base ml-3">
            {videoInfo?.name || 'nome_do_arquivo.extensão'}
          </span>
        </div>

        <div className="flex flex-col w-full border-t-2 border-purple-900 gap-4">
          <span className="text-blue-900 font-medium text-xl mt-4">Especificações</span>

          <div className="flex justify-start items-baseline gap-2">
            <Image
              src={videoInfo ? CircleValidOn : CircleValidNeutral}
              alt=""
              width={16}
              height={16}
            />

            <Box.Column>
              <Box.Label className="flex items-center gap-2">
                Formatos detectados
                <HelpTooltip className="text-gray-300">
                  Informação sobre o tópico que aparece ao se passar o mouse.
                </HelpTooltip>
              </Box.Label>

              <Box.Value className="font-normal">
                {videoInfo ? videoInfo.name.split('.').pop() : 'NomeFormato'}
              </Box.Value>
            </Box.Column>
          </div>

          <div className="flex justify-start items-baseline gap-2">
            <Image
              src={videoInfo ? CircleValidOn : CircleValidNeutral}
              alt=""
              width={16}
              height={16}
            />

            <Box.Column>
              <Box.Label className="flex items-center gap-2">Tipos de arquivo</Box.Label>

              <Box.Value className="font-normal">
                {videoInfo?.type || 'nenhum tipo de arquivo encontrado'}
              </Box.Value>
            </Box.Column>
          </div>

          <div className="flex justify-start items-baseline gap-2">
            <Image
              src={videoInfo ? CircleValidOn : CircleValidNeutral}
              alt=""
              width={16}
              height={16}
            />

            <Box.Column>
              <Box.Label className="flex items-center gap-2">Duração</Box.Label>

              <Box.Value className="font-normal">
                {videoInfo ? `${videoInfo.duration} segundos` : 'duração_em_segundos'}
              </Box.Value>
            </Box.Column>
          </div>

          <div className="flex justify-start items-baseline gap-2">
            <Image
              src={videoInfo ? CircleValidOn : CircleValidNeutral}
              alt=""
              width={16}
              height={16}
            />

            <Box.Column>
              <Box.Label className="flex items-center gap-2">Dimensões</Box.Label>

              <Box.Value className="font-normal">
                {videoInfo
                  ? `${videoInfo.width} x ${videoInfo.height}`
                  : 'medidas em px X px'}
              </Box.Value>
            </Box.Column>
          </div>

          <div className="flex justify-start items-baseline gap-2">
            <Image
              src={videoInfo ? CircleValidOn : CircleValidNeutral}
              alt=""
              width={16}
              height={16}
            />

            <Box.Column>
              <Box.Label className="flex items-center gap-2">Bitrate</Box.Label>

              <Box.Value className="font-normal">
                {videoInfo ? `${videoInfo.size / 1000} Kbps` : 'tamanho em Kbps'}
              </Box.Value>
            </Box.Column>
          </div>
        </div>

        <div className="flex flex-col w-full border-t-2 border-purple-900 gap-4">
          <span className="text-blue-900 font-medium text-xl mt-4">
            Ver Eligibilidade com CTV
          </span>

          <div className="flex justify-start items-baseline gap-2">
            <Image
              alt=""
              src={CircleValidNeutral}
              className="min-w-[16px] min-h-[16px]"
            />

            <Box.Column>
              <Box.Label className="flex items-center gap-2">
                Eligibilidade CTV
                <HelpTooltip className="text-gray-300">
                  Informação sobre o tópico que aparece ao se passar o mouse.
                </HelpTooltip>
              </Box.Label>

              <Box.Value className="font-normal">
                Verifica se o vídeo cumpre com especificações de inventário
              </Box.Value>
            </Box.Column>
          </div>
        </div>
      </div>
    </Tabs.Root>
  );
}
