import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";


export class HttpService {

  constructor(protected axios: AxiosInstance) {}

  public get(url: string, params?: AxiosRequestConfig): AxiosPromise {
    return this.axios.get(url, params);
  }

  // fetchRepport() {
  //   return new Promise(function (resolve, reject) {
  //           fetch(URL, {
  //             method: 'GET',
  //             headers: {
  //               'Accept': 'application/json',
  //               'Authorization': 'Basic ' + new Buffer('3899040b-2547-48bb-ba24-50203b507658:').toString('base64'),
  //             }
  //           })
  //           .then((resp) => resp.json())
  //           .then(function(data) {
  //             let myArray = new Array(data);
  //             let result = myArray.filter((disrup) => new Date(new Array(disrup.application_periods).begin).getDate() >= new Date().getDate()  && new Date(new Array(disrup.application_periods).begin).getMonth() >= new Date().getYear()  && new Date(new Array(disrup.application_periods).begin).getMonth() >= new Date().getYear());
  //             resolve(myArray[0]);
  //           }).catch(function(error) {
  //             reject(error.message);
  //           });
  //       });
  // }
}
