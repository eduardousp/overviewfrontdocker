import api from '@services/axios/api';

export async function getInsertionOrders(start: number, limit: number) {
  const response = await api.get(`/insertion-order?start=${start}&limit=${limit}`);
  return response;
}
