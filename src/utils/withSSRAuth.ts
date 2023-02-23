import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';

import { getServerSession } from '@utils/getServerSession';
import { validateUserPermissions } from '@utils/validateUserPermissions';

type ReturnType<T> = GetServerSidePropsResult<T | {}>;

type WithSSRAuthOptions = {
  permissions: string[];
};

export function withSSRAuth<T extends {}>(
  fn?: GetServerSideProps<T>,
  options?: WithSSRAuthOptions
) {
  return async (ctx: GetServerSidePropsContext): Promise<ReturnType<T>> => {
    const session = await getServerSession(ctx);

    if (!session) {
      return {
        redirect: {
          destination: '/signin',
          permanent: false,
        },
      };
    }

    if (options) {
      const userHasValidPermissions = validateUserPermissions({
        user: session.user,
        permissions: options.permissions,
      });

      if (!userHasValidPermissions) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        };
      }
    }

    try {
      if (fn) {
        return await fn(ctx);
      }

      return { props: {} };
    } catch (err) {
      return {
        props: {},
      };
    }
  };
}
