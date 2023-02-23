import Image from 'next/future/image';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { RouteProps } from '@config/routesConfig';

type LinkProps = {
  route: RouteProps;
  className?: string;
};

export function SidebarItem({ route, className, ...rest }: LinkProps) {
  const [dynamicIcon, setDynamicIcon] = useState(route.inactiveIconUrl);

  return (
    <span
      {...rest}
      onMouseEnter={() => setDynamicIcon(route.activeIconUrl)}
      onMouseLeave={() => setDynamicIcon(route.inactiveIconUrl)}
      className={twMerge(
        'text-2xl text-white font-medium px-4 py-2 gap-2 rounded-2xl flex items-center hover:bg-orange-600 transition-colors',
        className
      )}
    >
      <Image
        src={dynamicIcon}
        height={32}
        width={32}
        alt=""
        className="min-w-[32px] min-h-[32px]"
      />
      {route.title}
    </span>
  );
}
