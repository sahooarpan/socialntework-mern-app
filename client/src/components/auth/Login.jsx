import React,{ Fragment,useState } from 'react'
import {Link } from 'react-router-dom'



const Login = () => {

    const [formData,setFormData] = useState({
        
        email:'',
        password:''
    })

    const { email,password  } = formData;
    const onChange = e=>setFormData({
        ...formData,
        [e.target.name]:e.target.value
    })

    const onSubmit=e=>{
        e.preventDefault();
       
            console.log(formData)
        
    }
    return (
    <Fragment>
      <h1 className="large text-primary">Login</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={e=>onSubmit(e)}>
        
        <div className="form-group">
          <input type="email" placeholder="Email Address" value={email} name="email" onChange={e=>onChange(e)} />
         </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password" value={password}
            minLength="6" onChange={e=>onChange(e)}
          />
        </div>
        
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Do not have an account? <Link to="/signup">Register</Link>
      </p>
    </Fragment>
    )
}

export default Login;
