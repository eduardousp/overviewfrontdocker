import Image from 'next/future/image';
import { useDropzone } from 'react-dropzone';

export function CreativeUploadSidebar() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: { 'image/jpeg': [], 'image/png': [] },
    maxFiles: 1,
    multiple: false,
  });

  return (
    <div className="min-w-[400px] max-w-[400px] shadow-xl h-full px-6 py-8 flex flex-col items-center gap-8">
      <div className="flex w-full justify-between items-center">
        <span className="text-purple-900 text-xl font-medium">Preview do criativo</span>
        <button
          type="button"
          className="text-orange-600 font-medium text-xl hover:opacity-70 transition-opacity"
        >
          Preview
        </button>
      </div>

      <div
        className="w-[300px] h-[250px] bg-creative-preview flex flex-col justify-between items-center py-16 bg-gray-50 cursor-pointer relative"
        {...getRootProps()}
      >
        <input {...getInputProps()} />

        {acceptedFiles.length > 0 ? (
          <Image
            alt={acceptedFiles.at(0)?.name!}
            fill
            src={URL.createObjectURL(acceptedFiles.at(0)!)}
            className="w-full h-full object-contain p-1"
          />
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

      <div className="flex flex-col w-full border-t-2 border-purple-900">
        <span className="text-blue-900 font-medium text-xl mt-4">Template</span>
        <span className="text-blue-900 text-base ml-3">Imagem (Overview Created)</span>
        <span className="text-blue-900 text-base ml-3">
          Formato: Imagem, Subtipo de mídia: Banner Padrão
        </span>
      </div>

      <div className="flex flex-col w-full border-t-2 border-purple-900">
        <span className="text-blue-900 font-medium text-xl mt-4">Nome do arquivo</span>
        <span className="text-blue-900 text-base ml-3">
          {acceptedFiles.at(0)?.name || 'NomedoArquivo.extensão'}
        </span>
      </div>

      <div className="flex flex-col w-full border-t-2 border-purple-900">
        <span className="text-blue-900 font-medium text-xl mt-4">Tamanho do Arquivo</span>
        <span className="text-blue-900 text-base ml-3">
          {acceptedFiles.at(0)?.size
            ? `${Number(acceptedFiles.at(0)?.size) / 1000} Kb`
            : '000.000 Kb'}
        </span>
      </div>
    </div>
  );
}
