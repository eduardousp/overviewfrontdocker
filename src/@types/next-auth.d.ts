import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      permissions: string[];
      isAccountComplete: boolean;
      hasExperience?: boolean;
      phone?: string;
      company?: {
        name?: string;
        email?: string;
        url?: string;
        cnpj?: string;
        isDigitalMediaAgency?: boolean;
      };
    } & DefaultSession['user'];
  }
}
