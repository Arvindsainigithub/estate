import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  singInSuccess,
  signInFailure,
} from "../redux/userSlice.js";
import OAuth from "../components/OAuth.jsx";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { error, loading } = useSelector((state) => state.user);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(signInStart());
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success === false) {
        return signInFailure(data.message);
      }
      dispatch(singInSuccess(data));
      toast.success("Invalid Credentials");
      navigate("/");
    } catch (err) {
      signInFailure(err.message);
    }
  };
  console.log(error);
  return (
    <div className="max-w-lg mx-auto p-5">
      <h1 className="font-bold text-3xl text-center my-7">Sign In</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          id="email"
          className="border rounded-lg p-2 bg-transparent"
          onChange={changeHandler}
        />
        <div className="w-full flex justify-between items-center relative rounded-lg p-2 bg-transparent border">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            id="password"
            className="outline-none w-full bg-transparent"
            onChange={changeHandler}
          />
          {showPassword ? (
            <IoEyeOutline
              className="cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <IoEyeOffOutline
              className="cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>
        <button
          disabled={loading}
          className="bg-slate-600 text-white rounded-lg p-2 hover:opacity-90 disabled:opacity-80 transition-all duration-200"
        >
          {loading ? "Loadding..." : "Sign Up"}
        </button>
        <OAuth />
      </form>
      <div className="flex items-center mt-4 gap-2">
        <p>Dont have an account ?</p>
        <Link to={"/sign-up"} className="text-blue-500 hover:underline">
          Sign Up
        </Link>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
