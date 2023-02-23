import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const GOOGLE_APPLICATION_CREDENTIALS = JSON.parse(
  process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON || '{}'
);

if (!getApps().length) {
  initializeApp({
    credential: cert({
      clientEmail: GOOGLE_APPLICATION_CREDENTIALS.client_email,
      privateKey: GOOGLE_APPLICATION_CREDENTIALS.private_key,
      projectId: GOOGLE_APPLICATION_CREDENTIALS.project_id,
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: GOOGLE_APPLICATION_CREDENTIALS.project_id,
    serviceAccountId: GOOGLE_APPLICATION_CREDENTIALS.client_email,
  });
}

export const firestore = getFirestore();
