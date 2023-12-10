import axios from 'axios'
import type { AxiosResponse, RawAxiosRequestHeaders } from 'axios'

type CommonResponse<T> = {
  code: number
  data: T
  message: string
}

const BASE_URL = 'https://offer-be.kro.kr/api'

const getResult = <T>(response: AxiosResponse<T>): T => response.data

const Axios = axios.create({
  baseURL: BASE_URL
})

export const http = {
  get: <Request = unknown, Response = unknown>(
    url: string,
    params?: Request,
    headers?: RawAxiosRequestHeaders
  ): Promise<CommonResponse<Response>> =>
    Axios.get<
      CommonResponse<Response>,
      AxiosResponse<CommonResponse<Response>>,
      Request
    >(url, { params, headers }).then(getResult),
  post: <Request = unknown, Response = unknown>(
    url: string,
    payload?: Request,
    headers?: RawAxiosRequestHeaders
  ): Promise<CommonResponse<Response>> =>
    Axios.post<CommonResponse<Response>>(url, payload, { headers }).then(
      getResult
    ),
  put: <Request = unknown, Response = unknown>(
    url: string,
    payload?: Request,
    headers?: RawAxiosRequestHeaders
  ): Promise<CommonResponse<Response>> =>
    Axios.put<CommonResponse<Response>>(url, payload, { headers }).then(
      getResult
    ),
  patch: <Request = unknown, Response = unknown>(
    url: string,
    payload?: Request,
    headers?: RawAxiosRequestHeaders
  ) => Axios.patch<Response>(url, payload, { headers }).then(getResult),
  delete: <Response = unknown>(
    url: string,
    headers?: RawAxiosRequestHeaders
  ): Promise<CommonResponse<Response>> =>
    Axios.delete<CommonResponse<Response>>(url, { headers }).then(getResult)
}
