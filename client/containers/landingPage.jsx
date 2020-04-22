import React from 'react';
//import Connected from './containers/mapContainer.jsx';
import MapContainer from './mapContainer.jsx';
// import Park from './components/park.jsx';
// import Login from './components/login.jsx';
 import { connect } from 'react-redux';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// (Optional) import stylesheet here.
import '../stylesheets/styles.scss';

const mapStateToProps = state => ({
    loggedInUser: state.park.loggedInUser,
    showPark: state.park.showPark,
  });

class landingPage extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
    return (
        <div id='main'>
          <h1>🌲  Parks Planner  🌲</h1>
                <MapContainer/>
        </div>
    )
  
}
}
export default connect(mapStateToProps, null)(landingPage)