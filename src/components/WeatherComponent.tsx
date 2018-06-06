import * as React from 'react';
import { Component } from 'react';

export interface IWeatherPageState {
    content?: any;
    timerID?: any;
}

export class WeatherComponent extends Component<any, IWeatherPageState> {
    private timerID: NodeJS.Timer;

    constructor( props: any ) {
        super( props );
        this.state = {
            content: (
                <div
                    id="cont_71bb8b0676a263d51918bb6ef59698f0"
                    style={{
                        backgroundColor: '#000000',
                        border: '0px solid #D6D6D6',
                        color: '#FFFFFF',
                        fontFamily: 'Roboto',
                        margin: '0 auto',
                        width: '554px',
                    }}
                >
                    <iframe
                        id="71bb8b0676a263d51918bb6ef59698f0"
                        style={{ width: '554px', color: '#FFFFFF', height: '195px' }}
                        src="https://www.tameteo.com/getwid/71bb8b0676a263d51918bb6ef59698f0"
                        frameBorder="0"
                        scrolling="no"
                        name="flipe"
                    />
                    <script
                        type="text/javascript"
                        async={true}
                        src="https://www.tameteo.com/wid_loader/71bb8b0676a263d51918bb6ef59698f0"
                    />
                </div>
            ),
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 3600000 );
    }

    componentWillUnmount() {
        clearInterval( this.timerID );
    }

    tick() {
        this.setState( prevState => {
            return {
                ...prevState,
            };
        } );
    }

    public render() {
        return (<div id='meteo'>{this.state.content}<div id="meteo_black"/></div>);
    }
}
