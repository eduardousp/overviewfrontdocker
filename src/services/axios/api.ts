/* eslint-disable no-param-reassign */
import axios from 'axios';

// TODO: import { getToken } from 'datastore/configurations';
import parseResponseData from './parsers/ParsedResponse';
import parseResponseError from './parsers/ParsedResponseError';

const publicUrls = ['api/auth/', '/api/auth/local', '/api/token/refresh'];

const getCurrentToken = async (url: string) => {
  if (!url || publicUrls.includes(url)) {
    return '';
  }
  const token = process.env.NEXT_PUBLIC_API_TOKEN;
  // TODO: const token = await getToken();
  return token;
};

const baseURL = process.env.NEXT_PUBLIC_API_URL;
/**
 * axios instance
 */
const api = axios.create({
  baseURL,
  // baseURL: 'http://localhost:1337/',
});

// request header
api.interceptors.request.use(
  async (config: any) => {
    const token = await getCurrentToken(config.url);

    if (token) {
      config.headers.Authorization = token;
    }

    // console.log('>>>>> interceptor: ', {
    //   url: config.url,
    //   params: config.data,
    //   token: config.headers.Authorization,
    // });

    return config;
  },
  (e: any) => {
    return parseResponseError(e);
  }
);

// response parse
api.interceptors.response.use(
  (response) => {
    return parseResponseData(response);
  },
  (err: any) => {
    return parseResponseError(err);
  }
);

export default api;
