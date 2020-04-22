import React from 'react';
import LandingPage from './containers/landingPage.jsx'; 
//import Connected from './containers/mapContainer.jsx';
// import MapContainer from './containers/mapContainer.jsx';
// import Park from './components/park.jsx';
// import Login from './components/login.jsx';
// import { connect } from 'react-redux';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// (Optional) import stylesheet here.
import './stylesheets/styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
// will render nav bar later

render() {
  return (
    <div>
      <LandingPage/>
    </div>
  );
}
}




export default App;
