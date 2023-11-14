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
  get: <Response = unknown>(url: string): Promise<Response> =>
    Axios.get<Response>(url).then(getResult),
  post: <Response = unknown, Request = unknown>(
    url: string,
    payload?: Request
  ): Promise<Response> => Axios.post<Response>(url, payload).then(getResult),
  put: <Response = unknown, Request = unknown>(
    url: string,
    payload?: Request
  ): Promise<Response> => Axios.put<Response>(url, payload).then(getResult),
  patch: <Response = unknown, Request = unknown>(
    url: string,
    payload?: Request
  ) => Axios.patch<Response>(url, payload).then(getResult),
  delete: <Response = unknown, Request = unknown>(
    url: string,
    payload?: Request
  ): Promise<Response> =>
    Axios.delete<Response>(url, { data: payload }).then(getResult)
}
