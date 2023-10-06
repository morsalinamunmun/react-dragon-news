import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signIn(email, password)
        .then(result=>{
          console.log(result.user);
          //navigate after login
          navigate(location?.state? location.state: '/')
        })
        .catch(error=>{
          console.error(error);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h2 className="text-center pt-5 text-xl font-semibold">Login your Account</h2>
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center text-sm pb-5">Do not have an account? <Link to='/register' className="text-red-500 ml-2">Register</Link></p>
    </div>
</div>
        </div>
    );
};

export default Login;