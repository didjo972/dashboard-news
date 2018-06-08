import { AxiosRequestConfig } from "axios";
import * as fileSystem from "fs";
import { HttpService } from "../shared/HttpService";

const url: string = "https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:OCE:SA:87682005/departures";

export class SncfFetch {

    constructor(protected httpService: HttpService) {}

    public async loadInformationAbout(): Promise<any> {
        const params: AxiosRequestConfig = {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Basic ' + new Buffer('').toString('base64')
            }
        }

        const rep = await this.httpService.get(url, params);
        return rep.data;
    }

    public async loadApiKey() {
        let obj;
        fileSystem.readFile('../../conf-dev.json', 'utf8', (err, dataFile) => {
            if (err) {
                throw err;
            }
            obj = JSON.parse(dataFile);
        });
        console.log(obj);
        // const data = await JSON.parse(fileSystem.readFileSync("../../conf-dev.json", "UTF-8"));
        // console.log(data);
    }

}