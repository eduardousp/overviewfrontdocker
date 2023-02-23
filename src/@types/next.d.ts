import 'next';
import { Session } from 'next-auth';

declare module 'next' {
  export interface NextApiRequest {
    user?: Session['user'];
  }
}
