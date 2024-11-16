import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser, setUser,passwordReset } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const emailInfo = useRef()
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    setErrorMessage("");
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(`${location?.state ? location.state : "/"}`);
        toast.success("Login Succesfull");
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  const handleForgetPassword = ()=>{
    const email = emailInfo.current.value

    if (!email) {
      setErrorMessage("Please provide valid email")
      
    } else {
      
      passwordReset(email)
      .then(()=>toast.success("Verification email send please check your email"))
      .catch(err=>toast.error(err.message))
    }
}

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="card w-full bg-base-100 max-w-lg shrink-0 shadow-2xl rounded-none">
        <h2 className="font-semibold text-2xl mt-10 text-center">
          Login your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              ref={emailInfo}
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <button onClick={handleForgetPassword} className="label-text-alt link link-hover">
                Forgot password?
              </button>
            </label>
            {errorMessage && (
              <label className="label">
                <span className="label-text text-xs text-red-600">
                  {errorMessage}
                </span>
              </label>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Login</button>
          </div>
        </form>
        <p className="text-center mb-6">
          Don"t have an account?{" "}
          <Link to={"/auth/register"} className="text-cyan-500">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
