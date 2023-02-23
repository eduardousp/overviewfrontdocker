import { firestore } from '@lib/firebase-admin';

import { apiHandler, ApiHandler } from '@utils/apiHandler';

const routes: ApiHandler = {
  get: {
    authenticated: true,
    permissions: ['list:users'],
    handler: async (_, res) => {
      const usersRef = await firestore.collection('users').get();

      const users = usersRef.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      return res.json(users);
    },
  },
};

export default apiHandler(routes);
