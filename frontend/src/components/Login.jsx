import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setCredentials } from "../Features/AppSlice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../Features/api/authApiSlice";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("password");  
  
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if(userInfo){
      navigate('/');
    }
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, data } = await login({ username, password });
    if (!error) {
      dispatch(setCredentials({...data}))
      navigate('/')
    } else {
      toast.error(error.data);
    }
  };

  return (
    <div className="fixed top-0 h-full left-0 right-0 bg-[#F3F4F6]">
      <div className="flex justify-center items-center px-8 :py-32 lg:py-28">
        <div className="bg-white shadow-lg rounded-lg w-90 h-auto p-10">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="" className="font-bold">
                Username 
              </label>

              <input
                value={username}
                onChange={(event) => setUserName(event.target.value)}
                type="text"
                placeholder="enter your name"
                className="w-full bg-white shadow p-3 rounded-md outline-none mt-2 focus:bg-slate-100"
              />
            </div>
            <div className="relative form-group mt-4">
              <label htmlFor="" className="font-bold">
                Password  
              </label>

              <input
                type={showPassword ? "text" : "password"} // Ternary operator to conditionally set input type
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="enter your password"
                className="w-full bg-white shadow p-3 rounded-md outline-none mt-2 focus:bg-slate-100"
              />
              {showPassword ? (
                <AiFillEye
                  onClick={() => setShowPassword(false)}
                  className="absolute top-11 right-5 text-xl cursor-pointer"
                />
              ) : (
                <AiFillEyeInvisible
                  onClick={() => setShowPassword(true)}
                  className="absolute top-11 right-5 text-xl cursor-pointer"
                />
              )}
            </div>
            <div className="form-group mt-6">
              <button
                type="submit"
                className="bg-green-900 w-full p-3 rounded-md text-center text-white hover:bg-green-800"
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex flex-col items-center mt-4">
            <p>
              I don't have an account {" "}
              <Link to="/singUp" className="text-green-600 font-bold text-center">
                Sign Up
              </Link>
            </p>
            <Link to="/forget-password" className="text-green-600 font-bold">
              Forgot Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
