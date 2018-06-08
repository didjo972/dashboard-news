import * as React from "react";
import { Component } from "react";
import { Table } from "react-bootstrap";
import { k } from "../shared/Kernel";

export interface IHoraireTransportComponentState {
    data?: any;
}

export class HoraireTransportComponent extends Component<{}, IHoraireTransportComponentState> {

    timerID: NodeJS.Timer;
    state: IHoraireTransportComponentState = {
        data: undefined,
    };

    loadData(): void {
        k.sncfFetch.loadInformationAbout()
            .then(data => {
                if (data) {
                    this.setState({ data });
                    localStorage.setItem('lastAccessHoraire', new Date().toLocaleDateString());
                }
            })
            .catch(error => console.error(error));
    }

    componentDidMount() {
        this.loadData();
        this.timerID = setInterval(
            () => this.tick(),
            5000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    componentDidCatch(error: any, info: any) {
        console.error(error);
        console.info(info);
    }

    formatDateTime(dateToFormat: string) {
        const hour = dateToFormat.substring(9, 11);
        const min = dateToFormat.substring(11, 13);
        return hour + ":" + min;
    }

    classForIconDisplay(code: string) {
        return "ligne" + code;
    }

    replaceLigneN(code: string) {
        if (code) {
            if (code === 'N') {
                return 'R';
            }
            return code;
        }
        return '';
    }

    tick() {
        const lastAccess = localStorage.getItem('lastAccessHoraire');
        if (!lastAccess || new Date(lastAccess).getTime() + 120000 < new Date().getTime()) {
           this.loadData();
        } else {
            this.setState((prevState, props) => {
                console.log(prevState.data);
                return { ...prevState };
            });
        }
    }

    render() {
        return (
            <div id="transport">
                {this.renderHoraire(this.state.data)}
            </div>
        );
    }

    private renderHoraire(data?: any) {
        if (data && data.departures) {
            const listItem = data.departures.map((item: any, index: any) =>
                <tr key={index}>
                    <td><div className={this.classForIconDisplay(item.display_informations.code)}>{this.replaceLigneN(item.display_informations.code)}</div></td>
                    <td>{item.display_informations.direction}</td>
                    <td>{this.formatDateTime(item.stop_date_time.base_departure_date_time)}</td>
                </tr>);
            return (
                <Table responsive={true}>
                    <thead>
                        <tr>
                            <th>Ligne</th>
                            <th>Direction</th>
                            <th>Heure Départ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItem}
                    </tbody>
                </Table>
            );
        }
        return (
            <Table responsive={true}>
                <thead>
                    <tr>
                        <th>Ligne</th>
                        <th>Direction</th>
                        <th>Heure Départ</th>
                    </tr>
                </thead>
            </Table>
        );
    }

}