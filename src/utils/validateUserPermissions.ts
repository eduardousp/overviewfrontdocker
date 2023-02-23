type User = {
  permissions: string[];
};

type ValidateUserPermissionsParams = {
  user: User;
  permissions: string[];
};

export function validateUserPermissions({
  user,
  permissions,
}: ValidateUserPermissionsParams): boolean {
  if (permissions.length === 0) return true;

  const hasAllPermissions = permissions.every((permission) => {
    return user.permissions.includes(permission);
  });

  if (!hasAllPermissions) return false;

  return true;
}
