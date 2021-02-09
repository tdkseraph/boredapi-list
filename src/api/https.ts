import axios from 'axios';

export enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface IHttpConfig {
  url: string;
  method?: HttpMethods;
  header?: any;
  queryParameter?: Record<string, any>;
  body?: any;
}

const httpRequest = async ({
  url,
  method,
  header,
  queryParameter,
  body,
}: IHttpConfig) => {
  const extUrl = Object.keys(queryParameter ?? {})
    ? Object.keys(queryParameter ?? {})
        .reduce((acc, crr) => {
          acc += `${crr}=${(queryParameter ?? {})[crr]}&`;
          return acc;
        }, '')
        .slice(0, -1)
    : '';

  let config = {
    url: extUrl ? `${url}?${extUrl}` : url,
    method: method,
    ...(header ? {} : { header: header }),
    data: { ...body },
  };

  const response = await axios(config);
  //TODO - try catch here to create a middleware to handle all error message and action related to each errorCode
  return response?.data;
};

export const post = async (request: IHttpConfig): Promise<any> =>
  httpRequest({ ...request, method: HttpMethods.POST });

export const del = async (request: IHttpConfig): Promise<any> =>
  httpRequest({ ...request, method: HttpMethods.DELETE });

export const put = async (request: IHttpConfig): Promise<any> =>
  httpRequest({ ...request, method: HttpMethods.PUT });

export const get = async (request: IHttpConfig): Promise<any> =>
  httpRequest({ ...request, method: HttpMethods.GET });
