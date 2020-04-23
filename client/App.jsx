import React, { Fragment } from 'react';
import LandingPage from './containers/landingPage.jsx'; 
import Navbar from './Navbar';
import Register from './components/Register';
import Login from './components/Login';
//import Connected from './containers/mapContainer.jsx';
// import MapContainer from './containers/mapContainer.jsx';
// import Park from './components/park.jsx';
// import Login from './components/login.jsx';
// import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// (Optional) import stylesheet here.
// import './stylesheets/styles.scss';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
// will render nav bar later

render() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={LandingPage} />
        
        {/* push everything to the middle */}
        <section className="container">
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
}
}




export default App;
