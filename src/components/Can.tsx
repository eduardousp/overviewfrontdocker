import { ReactElement } from 'react';

import { useCan } from '@hooks/useCan';

type CanProps = {
  children: ReactElement;
  permissions: string[];
};

export function Can({ children, permissions }: CanProps): ReactElement | null {
  const { can } = useCan();

  if (!can(permissions)) return null;

  return children;
}
