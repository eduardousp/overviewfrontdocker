import api from '@services/axios/api';

export async function getAdvertisers(start: number, limit: number) {
  const response = await api.get(`/advertiser?start=${start}&limit=${limit}`);
  return response;
}
