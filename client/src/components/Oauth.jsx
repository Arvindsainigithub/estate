import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { singInSuccess } from "../redux/userSlice.js";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleBtn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(singInSuccess(data));
      navigate("/");
      console.log("Google OAuth successful:", data);
    } catch (err) {
      console.error("Error during Google OAuth:", err);
    }
  };
  return (
    <button
      onClick={handleGoogleBtn}
      type="button"
      className="bg-red-500 hover:opacity-90 text-white p-2 rounded-lg uppercase"
    >
      continue with google
    </button>
  );
}
