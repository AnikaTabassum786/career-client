import Lottie from 'lottie-react';
import React, { use } from 'react';
import registerLottie from '../../assets/lottie/Animation - 1748244310739.json'
import { AuthContext } from '../../context/AuthContext/AuthContext';
// import { AuthContext } from '../../contexts/AuthContext';
// import SocialLogin from '../../shared/SocialLogin';

const Register = () => {

   const {createUser} = use(AuthContext)

  const handleSubmit=(e)=>{
    e.preventDefault()
    const  email = e.target.email.value;
    const password =e.target.password.value

    console.log(email,password)

    createUser(email,password)
    .then(result=>{
      console.log(result.user,'registration done')
    })
    .catch((error)=>{
      console.log(error.message,error.code)
    })
  }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">

      <div>
        <Lottie style={{width:'300px'}} animationData={registerLottie} loop={true}></Lottie>
      </div>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form 
        onSubmit={handleSubmit}
         className="fieldset">
             <h1 className="text-5xl font-bold">Register now!</h1>
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
          {/* <SocialLogin></SocialLogin> */}
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;