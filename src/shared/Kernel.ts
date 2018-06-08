import Axios, { AxiosInstance } from "axios";
import { SncfFetch } from "../services/SncfFetch";
import { HttpService } from "./HttpService";

class Kernel {

    constructor(
        public axios: AxiosInstance = Axios.create(),
        public httpService: HttpService = new HttpService(axios),
        public sncfFetch: SncfFetch = new SncfFetch(httpService),
    ) {}

}

export const k = new Kernel();
