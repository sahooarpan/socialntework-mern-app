import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import { getProfile,deleteAccount } from '../../actions/profile'
import DashboardActions from './DashboardActions'
import Experience from './Experience'
import Education from './Education'


const Dashboard = ({getProfile,auth:{user},profile:{profile,loading},deleteAccount}) => {
    useEffect(()=>{
        getProfile()
    },[])
    return loading && profile===null?<Spinner/>:(<Fragment>
        <h1 className="large text-primary">
            Dashboard
        </h1>
        <p className="lead">
            Welcome {user && user.name}
        </p>
        {profile!==null?(
            <Fragment>
                <DashboardActions/>
                <Experience experience={profile.experience} />
                <Education education={profile.education}/>
                <div className="my-2">
                    <button className="btn btn-danger" onClick={()=> deleteAccount() }>
                        <i className="fas fas-user-minus">Delete my Account</i>
                    </button>
                </div>
            </Fragment>
        ):(<Fragment>
            <p>You have no setup profile.Please add some info</p>
            <Link to='/create-profile' className="btn btn-primary my-1">
                Create Profile</Link>
            </Fragment>)}

</Fragment>)
}
    
     
Dashboard.propTypes = {
    getProfile:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    profile:PropTypes.object.isRequired
}

const mapStateToProps =state=>({
    auth:state.auth,
    profile:state.profile
})

export default connect(mapStateToProps,{getProfile,deleteAccount})(Dashboard)

