import { Domain } from '@model/Domain';

export interface BlockList {
  id: number;
  name: string;
  description?: string;
  listDomains: Domain[];
}
