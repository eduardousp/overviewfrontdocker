import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/future/image';

import DownloadSvg from '@assets/svg/download.svg';

export function ThirdPartyContent() {
  return (
    <Tabs.Content value="third-party" className="w-full">
      <div className="w-full flex flex-col items-center pt-24">
        <div className="max-w-[1232px] w-full mt-24">
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
