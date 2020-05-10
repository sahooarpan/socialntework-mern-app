import React,{Fragment} from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing'
import './App.css';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Alert from './components/layout/Alert'
const App=()=> 
   (
     <Provider store={store}>
     <Router>
     <Fragment>
      <Navbar/>
      >
      <Route exact path='/' component={Landing} />
      <section className="container">
      <Alert/>
      <Switch>
          
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={SignUp} />

        </Switch>

      </section>


     </Fragment>
     </Router>
     </Provider>
  );


export default App;
