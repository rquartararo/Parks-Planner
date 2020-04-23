// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../actions/actions';
// import { Link } from 'react-router-dom';

import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  // const onSubmit = async e => {
  //   e.preventDefault();
  //   const newUser = {
  //     email,
  //     password
  //   }

  //   try {
  //     const config = {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }
  //     const body = JSON.stringify(newUser);
  //     const res = await axios.post('http://localhost:3000/validateUser', body, config);
  //     props.updateState(res.data.id)
  //   } catch (err) {
  //     console.log('error')
  //   }
  // }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password} onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
        <Link to='/register' className="btn btn-primary">Sign Up</Link>
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  )
};

export default Login;



// const mapDispatchToProps = dispatch => ({
//   signUp: ([username, password]) => dispatch(actions.signUp([username, password])),
//   logIn: ([username, password]) => dispatch(actions.logIn([username, password]))
// })

// const Login = props => {
//   return (
//     <div>
//       <form onSubmit={(e) => {
//         e.preventDefault();
//         props.logIn([e.target.childNodes[2].value,
//         e.target.childNodes[4].value])
//       }}>
//         <h4>If you already have an account, login below:</h4>
//         <label>
//           Username:
//         </label>
//         <input type="text" name="name" />
//         <label>
//           Password:
//         </label>
//         <input type="text" password="password"/>
//         <button type="submit">Submit</button>
//       </form>

//       <form onSubmit={(e)=>{
//         e.preventDefault();
//         props.signUp([e.target.childNodes[2].value,
//           e.target.childNodes[4].value]
//       )}}>
//         <h4>Get yourself an account by signing up below:</h4>
//         <label>
//           Username:
//         </label>
//         <input type="text" name="name" />
//         <label>
//           Password:
//         </label>
//         <input type="text" password="password" />
//         <button type="submit">Submit</button>
//       </form>


//       <Link to="/">Back to the Map</Link>
//     </div>

//   )
// }

// export default connect(null, mapDispatchToProps)(Login);