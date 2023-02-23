import Image from 'next/image';

import bellSvg from '@assets/svg/bell.svg';

import { HeaderProfile } from '@components/Header/HeaderProfile';

export function Header() {
  return (
    <header className="bg-white h-[72px] px-8 drop-shadow-md flex justify-between items-end pb-2">
      <div id="app-header-breadcrumbs" />

      <div className="flex gap-7">
        <button type="button">
          <Image src={bellSvg} height={32} />
        </button>

        <HeaderProfile />
      </div>
    </header>
  );
}
