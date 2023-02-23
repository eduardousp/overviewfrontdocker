import { useSession } from 'next-auth/react';

import { validateUserPermissions } from '@utils/validateUserPermissions';

export function useCan() {
  const session = useSession();

  function can(permissions: string[]): boolean {
    if (!session.data) return false;

    const userHasValidPermissions = validateUserPermissions({
      permissions,
      user: {
        permissions: session.data.user.permissions,
      },
    });

    return userHasValidPermissions;
  }

  return { can };
}
