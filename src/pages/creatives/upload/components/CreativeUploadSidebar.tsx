import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/future/image';

import HostedSvg from '@assets/svg/hosted.svg';
import ThirdPartySvg from '@assets/svg/third-party.svg';

export function CreativeUploadSidebar() {
  return (
    <Tabs.List className="min-w-[400px] max-w-[400px] shadow-xl h-full flex flex-col items-center justify-center">
      <div>
        <span className="text-purple-900 text-xl font-medium">Criativos</span>

        <div className="flex flex-col gap-20 ml-3 mt-2">
          <Tabs.Trigger
            value="third-party"
            className="w-[160px] h-[160px] border-2 border-purple-900 rounded-lg flex flex-col items-center justify-center gap-2 state-active:border-4 state-active:border-orange-600"
          >
            <Image src={ThirdPartySvg} alt="" width={80} height={80} />
            <span className="text-blue-900 text-xl font-medium">Third Party</span>
          </Tabs.Trigger>

          <Tabs.Trigger
            value="hosted"
            className="w-[160px] h-[160px] border-2 border-purple-900 rounded-lg flex flex-col items-center justify-center gap-2 state-active:border-4 state-active:border-orange-600"
          >
            <Image src={HostedSvg} alt="" width={80} height={80} />
            <span className="text-blue-900 text-xl font-medium">Third Party</span>
          </Tabs.Trigger>
        </div>
      </div>
    </Tabs.List>
  );
}
