import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/future/image';
import { CaretDown } from 'phosphor-react';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

import DownloadSvg from '@assets/svg/download.svg';

export function HostedContent() {
  const { acceptedFiles, getRootProps, getInputProps, open } = useDropzone({
    accept: { 'image/jpeg': [], 'image/png': [] },
    multiple: true,
  });

  const [showAllFiles, setShowAllFiles] = useState(false);

  return (
    <Tabs.Content value="hosted" className="w-full">
      <div className="w-full flex flex-col items-center pt-24">
        <div className="max-w-[1080px] w-full">
          <div
            className="max-w-[1080px] w-full h-[320px] bg-creative-preview flex justify-center items-center py-16 bg-gray-50 cursor-pointer relative"
            {...getRootProps()}
          >
            <input {...getInputProps()} />

            <div className="flex flex-col gap-4 items-center">
              <span className="text-purple-900 text-xl font-medium">
                Arraste o arquivo aqui
              </span>

              <span className="text-purple-900 text-2xl font-medium">ou</span>

              <span className="bg-orange-600 rounded w-[280px] text-white h-8 font-medium text-xl hover:opacity-70 transition-opacity flex items-center justify-center">
                Escolher arquivo
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-blue-900 text-xl font-medium">
              {acceptedFiles.length ? acceptedFiles.length : 'X'} Criativos selecionados
            </span>
            <button type="button" className="text-orange-600 text-xl font-medium">
              Veja todos os formatos de arquivos aceitos
            </button>
          </div>

          <div className="mt-2 flex flex-col gap-1">
            {showAllFiles
              ? acceptedFiles.map((file) => (
                  <span key={file.name} className="text-blue-900 text-xl">
                    {file.name}
                  </span>
                ))
              : acceptedFiles.slice(0, 2).map((file) => (
                  <span key={file.name} className="text-blue-900 text-xl">
                    {file.name}
                  </span>
                ))}
            <div className="flex justify-between">
              {acceptedFiles.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowAllFiles((prev) => !prev)}
                  className="text-orange-600 text-base font-medium w-fit mt-1 flex items-center gap-1"
                >
                  <CaretDown
                    size={24}
                    weight="bold"
                    className={
                      showAllFiles
                        ? 'rotate-180 transition-transform'
                        : 'transition-transform'
                    }
                  />
                  {showAllFiles
                    ? 'Ocultar'
                    : `Mostrar todos os ${acceptedFiles.length} criativos`}
                </button>
              )}

              {acceptedFiles.length > 0 && (
                <button
                  type="button"
                  onClick={() => open()}
                  className="text-orange-600 border border-orange-600 rounded-lg px-4 h-7"
                >
                  Remover todos os arquivos
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-[1232px] w-full mt-9">
          <h2 className="text-blue-900 text-3xl font-medium ml-6 whitespace-nowrap">
            Planilha de Criativos
          </h2>

          <div className="py-5 border-y border-purple-900 flex flex-col items-center px-6 mt-6 gap-16 xl:flex-row">
            <span className="text-orange-600 text-2xl border border-orange-600 rounded-lg px-4 py-1 cursor-pointer">
              Selecionar Arquivo (xls, xlsx, texto usando formatação Sizmek)
            </span>

            <button type="button" className="flex items-center gap-2">
              <Image
                src={DownloadSvg}
                alt=""
                width={24}
                height={24}
                className="h-[24px] w-[24px]"
              />
              <span className="text-blue-900 text-xl font-medium whitespace-nowrap">
                Baixar Template
              </span>
            </button>
          </div>
        </div>
      </div>
    </Tabs.Content>
  );
}
