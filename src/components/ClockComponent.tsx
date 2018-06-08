import * as React from "react";
import { Component } from "react";
import { WeatherComponent } from "./WeatherComponent";

/* Jours de la semaine */
const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

/* Mois de l'année */
const months = ["Janvier", "Février", "Mars", "Avril",
    "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

export interface IClockComponentState {
    hour: string;
    day: string;
    date: number;
    month: string;
    year: number;
}

/**
 * Classe de gestion de l'horloge
 */
export class ClockComponent extends Component<any, IClockComponentState> {
    timerID: NodeJS.Timer;
    state: IClockComponentState = {
        date: new Date().getDate(),
        day: days[new Date().getDay()],
        hour: new Date().toLocaleTimeString(),
        month: months[new Date().getMonth()],
        year: new Date().getFullYear()
    };

    componentDidMount() {
            this.timerID = setInterval(
                () => this.tick(),
                1000
            );
        }

    componentWillUnmount() {
            clearInterval(this.timerID);
        }

    tick() {
            const myDate = new Date();
            this.setState((prevState, props) => ({
                date: myDate.getDate(),
                day: days[myDate.getDay()],
                hour: myDate.toLocaleTimeString(),
                month: months[myDate.getMonth()],
                year: myDate.getFullYear()
            }));
        }

    render() {
            return (
                <div>
                    <div id="horloge">
                        <div className="horloge_heure">{this.state.hour}</div>
                        <div className="horloge_date">
                            <span className="horloge_grey">{this.state.day}</span>
                            {" " + this.state.date + " " + this.state.month + " "}
                            <span className="horloge_grey">{this.state.year}</span>
                        </div>
                    </div>
                    <WeatherComponent />
                </div>
            );
        }
    }
