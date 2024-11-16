import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const terms = e.target.terms.checked
    if (password.length < 6) {
      setErrorMessage({
        ...errorMessage,
        password: "Password must be at least 6 characters long.",
      });
      return;
    }
    if (!terms) {
      setErrorMessage({
        ...errorMessage,
        terms: "Please accept our terms and condition.",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            const errorCode = err.code;
            const errorMessage = err.message;
            toast.error(errorMessage, errorCode);
          });
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        toast.error(errorMessage, errorCode);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-10">
      <div className="card w-full bg-base-100 max-w-lg shrink-0 shadow-2xl rounded-none">
        <h2 className="font-semibold text-2xl mt-10 text-center">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo url"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email address</span>
            </label>
            <input
              type="email"
              name="email"
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
            {errorMessage.password && (
              <label className="label">
                <span className="label-text text-xs text-red-600">
                  {errorMessage.password}
                </span>
              </label>
            )}
            <div className="form-control flex-row items-center justify-start ">
              <label className="label cursor-pointer">
                <input type="checkbox" name="terms" className="checkbox" />
              </label>
              <span className="label-text">Accept Term & Conditions</span>
            </div>
            {errorMessage.terms && (
              <label className="label">
                <span className="label-text text-xs text-red-600">
                  {errorMessage.terms}
                </span>
              </label>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Register</button>
          </div>
        </form>
        <p className="text-center mb-6">
          Already have an account?{" "}
          <Link to={"/auth/login"} className="text-cyan-500">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
