import { NextApiRequest, NextApiResponse } from 'next';

import { getServerSession } from '@utils/getServerSession';
import { validateUserPermissions } from '@utils/validateUserPermissions';

export type ApiHandler = {
  [key: string]: {
    handler: (
      req: NextApiRequest,
      res: NextApiResponse
    ) => Promise<void | NextApiResponse<any>>;
  } & (
    | { authenticated: true; permissions: string[] }
    | { authenticated: false; permissions?: undefined }
  );
};

export function apiHandler(handler: ApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const route = handler[req.method?.toLowerCase() ?? ''];

    if (!route) {
      return res
        .status(404)
        .send(`Cannot ${req.method?.toUpperCase()} ${req.url?.replace('/api', '')}`);
    }

    if (route.authenticated) {
      const session = await getServerSession({ req, res });

      if (!session) {
        return res.status(401).end();
      }

      const userHasPermissions = validateUserPermissions({
        user: session.user,
        permissions: route.permissions,
      });

      if (!userHasPermissions) {
        return res.status(403).end();
      }

      req.user = session.user;
    }

    return route.handler(req, res);
  };
}
