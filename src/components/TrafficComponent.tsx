import * as React from "react";
import { Component } from "react";

export interface ITrafficComponentState {
    src: string;
}

export class TrafficComponent extends Component<any, ITrafficComponentState> {

    timerID: NodeJS.Timer;

    state: ITrafficComponentState = { src: "https://embed.waze.com/fr/iframe?zoom=11&lat=48.5808594&lon=2.475608" };

    tick() {
        this.setState(() => ({
            src: "https://embed.waze.com/fr/iframe?zoom=11&lat=48.5808594&lon=2.475608"
        }));
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            30000
        );

    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (<iframe src={this.state.src} width="600px" height="395px" />)
    }

}
