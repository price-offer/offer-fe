import axios from 'axios'

import type { AxiosResponse } from 'axios'

const BASE_URL = 'https://offer-be.kro.kr'

const Axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json'
  }
})

const getResult = <T>(response: AxiosResponse<T>): T => response.data

export const http = {
  get: <Request = unknown, Response = unknown>(
    url: string,
    params?: Request
  ): Promise<Response> =>
    Axios.get<Response, AxiosResponse<Response>, Request>(url, { params }).then(
      getResult
    ),
  post: <Request = unknown, Response = unknown>(
    url: string,
    payload?: Request
  ): Promise<Response> => Axios.post<Response>(url, payload).then(getResult),
  put: <Request = unknown, Response = unknown>(
    url: string,
    payload?: Request
  ): Promise<Response> => Axios.put<Response>(url, payload).then(getResult),
  patch: <Request = unknown, Response = unknown>(
    url: string,
    payload?: Request
  ) => Axios.patch<Response>(url, payload).then(getResult),
  delete: <Response = unknown>(url: string): Promise<Response> =>
    Axios.delete<Response>(url).then(getResult)
}
