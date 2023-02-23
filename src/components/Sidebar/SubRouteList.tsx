import { RouteProps, SubRoute } from 'config/routesConfig';
import Link from 'next/link';

import { Can } from '@components/Can';
import { SidebarItem } from '@components/Sidebar/SidebarItem';

type SubRouteProps = {
  route: RouteProps;
  routes: SubRoute[];
};

export function SubRouteList({ route, routes }: SubRouteProps) {
  return (
    <div>
      <SidebarItem route={route} />

      {routes.map((subRoute) => {
        return (
          <Can key={subRoute.id} permissions={subRoute.permissions}>
            <div key={subRoute.id}>
              <Link href={subRoute.path}>
                <SidebarItem route={subRoute} className="ml-10 mt-4 !text-xl" />
              </Link>
            </div>
          </Can>
        );
      })}
    </div>
  );
}
