import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";


export class HttpService {

  constructor(protected axios: AxiosInstance) {}

  public get(url: string, params?: AxiosRequestConfig): AxiosPromise {
    return this.axios.get(url, params);
  }

}
