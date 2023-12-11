import React from 'react'
import Signup from '../Components/Signup'
import Signin from '../Components/Signin'

function Login() {
  return (
    <div className='login' >
    <div className='LoginBox'>
    {/*<Signup/>*/}
    <Signin/>
    </div>
    </div>
  )
}

export default Login