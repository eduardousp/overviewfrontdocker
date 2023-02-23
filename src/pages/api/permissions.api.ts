import { firestore } from '@lib/firebase-admin';

import { apiHandler, ApiHandler } from '@utils/apiHandler';

const routes: ApiHandler = {
  get: {
    authenticated: true,
    permissions: [],
    handler: async (_, res) => {
      const permissionsRef = await firestore.collection('permissions').get();

      const permissions = permissionsRef.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return res.json(permissions);
    },
  },
};

export default apiHandler(routes);
