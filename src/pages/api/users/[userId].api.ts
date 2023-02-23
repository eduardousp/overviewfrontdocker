import { firestore } from '@lib/firebase-admin';

import { apiHandler, ApiHandler } from '@utils/apiHandler';

const routes: ApiHandler = {
  get: {
    authenticated: true,
    permissions: ['list:users'],
    handler: async (req, res) => {
      const { userId } = req.query;

      if (!userId || Array.isArray(userId)) {
        return res
          .status(404)
          .send(`Cannot ${req.method?.toUpperCase()} ${req.url?.replace('/api', '')}`);
      }

      const doc = await firestore.collection('users').doc(userId).get();

      if (!doc.exists) {
        return res.status(404).json({ error: 'User not found' });
      }

      return res.json({ id: doc.id, ...doc.data() });
    },
  },
};

export default apiHandler(routes);
