import React from 'react'

const Login = () => {
  return (
     <div className='root'>

    <div className='form-container'>
      <div className="logo">MEDICAL FORUM</div>
      <div className="header">LOG IN</div>
      <form>
        <input type="text" 
        placeholder='username'
        name='username'
        id='username'
         />
         <br />
        
        <input type="password"
        placeholder='Enter Password' 
        name='password'
        id='password'
         />
         <button className="btn btn-info btn-lg">Log In</button>
      <p> Don't have an account? Sign Up here</p>
      </form>
    </div>
  </div>
  )
}

export default Login