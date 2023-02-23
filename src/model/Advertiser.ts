export interface Advertisers {
  id: number;
  name: string;
  timezone: string;
  time_format: string;
  default_currency: string;
  is_running_political_ads: boolean;
}
export interface Advertiser {
  status: string;
  start_element: number;
  num_elements: number;
  count: number;
  advertisers: [Advertisers];
}
