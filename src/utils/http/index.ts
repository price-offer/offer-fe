import axios from 'axios'

import type { AxiosResponse } from 'axios'

const BASE_URL = 'https://offer-be.kro.kr'

const Axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json'
  }
})

type CommonResponse<T> = {
  code: number
  data: T
  message: string
}

const getResult = <T>(response: AxiosResponse<T>): T => response.data

export const http = {
  get: <Request = unknown, Response = unknown>(
    url: string,
    params?: Request
  ): Promise<CommonResponse<Response>> =>
    Axios.get<
      CommonResponse<Response>,
      AxiosResponse<CommonResponse<Response>>,
      Request
    >(url, { params }).then(getResult),
  post: <Request = unknown, Response = unknown>(
    url: string,
    payload?: Request
  ): Promise<CommonResponse<Response>> =>
    Axios.post<CommonResponse<Response>>(url, payload).then(getResult),
  put: <Request = unknown, Response = unknown>(
    url: string,
    payload?: Request
  ): Promise<CommonResponse<Response>> =>
    Axios.put<CommonResponse<Response>>(url, payload).then(getResult),
  patch: <Request = unknown, Response = unknown>(
    url: string,
    payload?: Request
  ) => Axios.patch<Response>(url, payload).then(getResult),
  delete: <Response = unknown>(
    url: string
  ): Promise<CommonResponse<Response>> =>
    Axios.delete<CommonResponse<Response>>(url).then(getResult)
}
