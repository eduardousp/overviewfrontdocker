import type { GetServerSidePropsContext } from 'next';
import { unstable_getServerSession } from 'next-auth';

import { nextAuthOptions } from '@pages/api/auth/[...nextauth].api';

type getServerSessionParam = {
  req: GetServerSidePropsContext['req'];
  res: GetServerSidePropsContext['res'];
};

export function getServerSession({ req, res }: getServerSessionParam) {
  return unstable_getServerSession(req, res, nextAuthOptions);
}
