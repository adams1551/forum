import React from 'react'

const Register = () => {
  
  return (
    <div className='root'>

      <div className='form-container'>
        <div className="logo">MEDICAL FORUM</div>
        <div className="header">REGISTER</div>
        <form>
          <input type="text" 
          placeholder='username'
          name='username'
          id='username'
           />
           <br />
          <input type="text"
          placeholder='Enter Email' 
          name='email'
          id='email'
           />
           <br />
          <input type="password"
          placeholder='Enter Password' 
          name='password'
          id='password'
           />
           <br />
          <label htmlFor='file'>Upload a File</label>
          <br />
          <input type="file"
          placeholder='Upload a file' 
          name='file'
          id='file'
           />
           <br />
           <button className="btn btn-info btn-lg">Sign Up</button>
        </form>
        <p> Already have an account? Log in</p>
      </div>
    </div>
  )
}

export default Register