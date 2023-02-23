import { FirestoreAdapter } from '@next-auth/firebase-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import * as zod from 'zod';

const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG || '{}');

const userAccountCompleteSchema = zod.object({
  phone: zod.string().min(1),
  hasExperience: zod.boolean(),
  company: zod.object({
    name: zod.string().min(1),
    email: zod.string().email(),
    url: zod.string().min(1).url(),
    cnpj: zod.string().min(1),
    isDigitalMediaAgency: zod.boolean(),
  }),
});

export const firestoreAdapter = FirestoreAdapter(firebaseConfig);

export const nextAuthOptions: NextAuthOptions = {
  pages: {
    signIn: '/signin',
  },
  providers: [
    GoogleProvider({
      clientId: String(process.env.GOOGLE_ID),
      clientSecret: String(process.env.GOOGLE_SECRET),
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  adapter: firestoreAdapter,
  callbacks: {
    session: ({ session, user }) => {
      const isAccountComplete = userAccountCompleteSchema.safeParse(user).success;

      return {
        expires: session.expires,
        user: {
          ...user,
          permissions: (user.permissions as string[]) || [],
          isAccountComplete,
        },
      };
    },
  },
};

export default NextAuth(nextAuthOptions);
