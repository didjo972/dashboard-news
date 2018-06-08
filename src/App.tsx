import * as React from 'react';
import './App.css';

import { ClockComponent } from './components/ClockComponent';
import { HoraireTransportComponent } from './components/HoraireTransportComponent';
import { TrafficComponent } from './components/TrafficComponent';

export class App extends React.Component {

  public render() {
    return (
      <div>
        <ClockComponent />
        <TrafficComponent />
        <HoraireTransportComponent />
      </div>
    );
  }
}
