import React,{Fragment,useEffect} from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing'
import './App.css';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Alert from './components/layout/Alert'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './components/routing/PrivateRoute'
import CreateProfile from './components/profile-forms/CreateProfile';
import AddEducation from './components/profile-forms/AddEducation';
import AddExperience from './components/profile-forms/AddExperience';
import EditProfile from './components/profile-forms/EditProfile'
import Profiles from './components/profiles/Profiles'
import Profile from './components/profile/Profile'


if(localStorage.token){
  setAuthToken(localStorage.token);
}
const App=()=>{
useEffect(()=>{
  store.dispatch(loadUser())
},[]);


return(
     <Provider store={store}>
     <Router>
     <Fragment>
      <Navbar/>
      
      <Route exact path='/' component={Landing} />
      <section className="container">
      <Alert/>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/developers' component={Profiles} />
        <Route exact path='/profile/:id' component={Profile} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/create-profile' component={CreateProfile} />
        <PrivateRoute exact path='/edit-profile' component={EditProfile} />
        <PrivateRoute exact path='/add-education' component={AddEducation} />
        <PrivateRoute exact path='/add-experience' component={AddExperience} />
      </Switch>

      </section>


     </Fragment>
     </Router>
     </Provider>
  )};


export default App
