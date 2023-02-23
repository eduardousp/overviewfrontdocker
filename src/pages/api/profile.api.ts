import * as zod from 'zod';

import { firestoreAdapter } from '@pages/api/auth/[...nextauth].api';

import { ApiHandler, apiHandler } from '@utils/apiHandler';

export const updateUserProfileSchema = zod
  .object({
    name: zod.string().min(1),
    phone: zod.string().min(1),
    hasExperience: zod.boolean(),
    company: zod
      .object({
        name: zod.string().min(1),
        email: zod.string().email(),
        url: zod.string().min(1).url(),
        cnpj: zod.string().min(1),
        isDigitalMediaAgency: zod.boolean(),
      })
      .strict(),
  })
  .strict();

const handlers: ApiHandler = {
  post: {
    authenticated: true,
    permissions: [],
    handler: async (req, res) => {
      const result = updateUserProfileSchema.safeParse(req.body);

      if (!result.success) {
        return res.status(400).json({ errors: result.error.errors });
      }

      try {
        await firestoreAdapter.updateUser({ ...req.user, ...req.body });

        return res.status(200).end();
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('post: ~ error', error);

        return res.status(500).json({ error: 'Failed to update user profile' });
      }
    },
  },
};

export default apiHandler(handlers);
