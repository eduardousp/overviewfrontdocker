import { AxiosError, AxiosResponse } from 'axios';

interface Error extends AxiosResponse {
  data: {
    data: any;
    error: {
      status: number;
      name: string;
      message: string;
      details: any;
    };
  };
}
interface RequestErrorResponse extends AxiosError {
  response: Error;
}

export default async function parseResponseError<T>(
  error: RequestErrorResponse
): Promise<Awaited<T>> {
  throw error.message;
}
