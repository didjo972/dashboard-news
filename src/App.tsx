import * as React from 'react';
import './App.css';

import { ClockComponent } from './components/ClockComponent';
// import logo from './logo.svg';

export class App extends React.Component {
  public render() {
    return (
      <ClockComponent />
    );
  }
}
