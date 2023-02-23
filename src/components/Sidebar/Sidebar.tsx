import * as Collapsible from '@radix-ui/react-collapsible';
import Image from 'next/image';
import Link from 'next/link';

import ChevronLeft from '@assets/svg/sidebar-chevron-left.svg';

import { SidebarItem } from '@components/Sidebar/SidebarItem';
import { SubRouteList } from '@components/Sidebar/SubRouteList';

import { RouteProps } from '@config/routesConfig';

import { useCan } from '@hooks/useCan';
import { useLocalStorage } from '@hooks/useLocalStorage';

type SidebarProps = {
  routes: RouteProps[];
  logoUrl?: string;
  background?: 'bg-purple-900' | 'bg-white';
  border?: 'border-orange-600' | 'border-purple-900';
  itemClassName?: string;
};

export function Sidebar({
  routes,
  logoUrl,
  background = 'bg-purple-900',
  border = 'border-orange-600',
  itemClassName,
}: SidebarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useLocalStorage(
    '@overview:is_sidebar_open',
    false
  );

  const { can } = useCan();

  return (
    <Collapsible.Root
      className="relative h-screen"
      onOpenChange={setIsSidebarOpen}
      open={isSidebarOpen}
    >
      <Collapsible.Trigger className="h-[64px] w-[64px] bg-purple-900 rounded-r-lg absolute -right-[52px] bottom-0 flex items-center justify-center">
        <Image src={ChevronLeft} />
      </Collapsible.Trigger>

      <Collapsible.Content asChild>
        <aside
          className={`${background} h-screen min-w-[21rem] pt-12 px-6 flex flex-col border-r-[12px] ${border}`}
        >
          <Link href="/" className="flex justify-center">
            <Image src={logoUrl || '/svg/logo-white.svg'} height={32} width={232} />
          </Link>

          <nav className="mt-12 flex flex-col gap-10">
            {routes.map((route) => {
              const routeHasPermissions = !!route.permissions.length;
              if (routeHasPermissions && !can(route.permissions)) return null;

              if (route.subRoutes) {
                return (
                  <SubRouteList key={route.id} route={route} routes={route.subRoutes} />
                );
              }

              return (
                <Link key={route.id} href={route.path}>
                  <SidebarItem route={route} className={itemClassName} />
                </Link>
              );
            })}
          </nav>
        </aside>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
