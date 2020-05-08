import React,{Fragment} from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing'
import './App.css';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'


const App=()=> 
   (
     <Router>
     <Fragment>
      <Navbar/>
      <Route exact path='/' component={Landing} />
      <section className="container">
      <Switch>
          
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={SignUp} />

        </Switch>

      </section>


     </Fragment>
     </Router>
  );


export default App;
