import { useState } from "react";
import axios from 'axios';

const Login = () => {
  const [email,setemail]=useState();
  const [password,setpassword]=useState();


  const handleSubmit=(e)=>{
      e.preventDefault()
      axios.post('http://localhost:8080/echo',{email,password})
      .then(result=> console.log(result))
      .catch(err=> console.log((err)))
  }
  return (
    <section>
      <div className="flex flex-col items-center px-6 py-8 lg:my-10 my-5 mx-auto lg:py-0 ">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-white"
        ></a>
        <div className="w-full rounded-lg  md:mt-0 sm:max-w-md xl:p-0 sec-card">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
              Welcome Back, Sign in ✨
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="sec-card  sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-100 text-black focus:ring-blue-500 focus:border-blue-500"
                  placeholder="name@company.com"
                  required={true}
               onChange={(e)=>{setemail(e.target.value)}} ></input>
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="sec-card  sm:text-sm rounded-lg block w-full p-2.5 placeholder-gray-100 text-black focus:ring-blue-500 focus:border-blue-500"
                  required={true}
                onChange={(e)=>{setpassword(e.target.value)}}  ></input>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    ></input>
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      for="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium  hover:underline text-gray-300"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  className="font-medium  hover:underline text-primary-500"
                  href="/SignUp"
                >
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
