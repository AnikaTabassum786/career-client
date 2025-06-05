import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router';
import loginAnimation from '../../assets/lottie/login.json'
import Lottie from 'lottie-react';

const Login = () => {
     const { signInUser } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state || '/';

  const handleSubmit = (e) => {
    e.preventDefault()

    const email = e.target.email.value;
    const password = e.target.password.value
    console.log('Log in', email, password)

    signInUser(email, password)
      .then(result => {
        console.log(result.user,'Log in done')
        navigate(from)
      })
      .catch((error) => {
        console.log(error.message, error.code)
      })
  }

    return (
        <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">

          <div>
            <Lottie style={{ width: '300px' }} animationData={loginAnimation} loop={true}></Lottie>
          </div>

        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="fieldset">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <label className="label">Email</label>
              <input name='email' type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input name='password' type="password" className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4">Login</button>
              {/* <SocialLogin from={from}></SocialLogin> */}
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;