import { ReactNode } from 'react';

export interface InsertionOrder {
  id: string;
  name: string;
  selected: boolean;
  advertiser_id: number;
  budget_type: 'revenue' | string;
  timezone: ReactNode;
}
