import Image from 'next/future/image';
import { ChangeEvent, useState } from 'react';

import CloseGray from '@assets/svg/close_gray.svg';

import { Box } from '@components/Box';

type FileWithUrl = File & {
  url: string;
};

export function CreateNativeSidebar() {
  const [files, setFiles] = useState<FileWithUrl[]>([]);

  function handleFileUpload(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;

    const newFiles = Array.from(event.target.files).map((file) => {
      return Object.assign(file, { url: URL.createObjectURL(file) });
    });

    setFiles((prevState) => [...prevState, ...newFiles]);
  }

  function handleRemoveFile(file: File) {
    setFiles((prevState) => prevState.filter((prevFile) => prevFile.name !== file.name));
  }

  return (
    <div className="min-w-[400px] max-w-[400px] shadow-xl h-full py-8 flex flex-col gap-8">
      <span className="text-purple-900 text-xl font-medium ml-6">
        Preview do criativo
      </span>

      <div className="bg-gray-50 h-[250px] flex items-center justify-center">
        <div className="w-[200px] border-t-[16px] border-purple-900 flex items-center bg-white drop-shadow-lg pb-5 gap-2 flex-col">
          <span className="text-blue-900 text-base font-medium mt-1">
            Preview Incompleta
          </span>
          <span className="text-center text-xs text-blue-900 max-w-[148px]">
            Finalize a seção de composição a direita.
          </span>
        </div>
      </div>

      <div className="flex flex-col border-purple-900">
        <Box.Divider className="border-b-2 mx-5" />

        <span className="text-blue-900 font-medium text-xl mt-4 ml-4">Assets</span>

        <div className="flex gap-4 flex-col px-6">
          {files.map((file) => (
            <div
              key={file.name}
              className="border border-success h-12 flex items-center px-4"
            >
              <Image
                src={file.url}
                alt={file.name}
                width={56}
                height={40}
                className="w-[56px] h-[40px] object-cover mr-2"
              />

              <span>{file.name}</span>

              <button
                type="button"
                className="ml-auto hover:opacity-70 transition-opacity"
                onClick={() => handleRemoveFile(file)}
              >
                <Image src={CloseGray} alt="remove" width={16} height={16} />
              </button>
            </div>
          ))}
        </div>

        <label className="bg-orange-600 w-fit h-7 flex items-center px-2 rounded cursor-pointer hover:opacity-70 transition-opacity ml-6 mt-4">
          <span className="text-white text-base font-medium">Upload de arquivos</span>
          <input
            accept="image/png, image/jpeg"
            onChange={handleFileUpload}
            multiple
            type="file"
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
}
