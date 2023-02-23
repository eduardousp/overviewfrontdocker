import * as Portal from '@radix-ui/react-portal';
import { useEffect, useState } from 'react';

import { Crumb } from '@components/Breadcrumb/Crumb';

export type BreadcrumbRoute = {
  id: string;
  title: string;
  path: string;
  active?: boolean;
};

type BreadcrumbProps = {
  routes: BreadcrumbRoute[];
};

export function Breadcrumbs({ routes }: BreadcrumbProps) {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsShowing(true);
  }, []);

  if (!isShowing) {
    return null;
  }

  if (typeof window === 'undefined') {
    return null;
  }

  const containerElement = window.document.getElementById('app-header-breadcrumbs');

  if (!containerElement) return null;

  return (
    <Portal.Root asChild container={containerElement}>
      <nav className="flex gap-3">
        {routes.map((route) => {
          return (
            <Crumb
              key={route.id}
              title={route.title}
              path={route.path}
              active={route.active}
            />
          );
        })}
      </nav>
    </Portal.Root>
  );
}
