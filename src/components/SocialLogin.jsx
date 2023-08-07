import React from "react";
import { FaGoogle } from 'react-icons/fa';
import useAuth from "../Hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const googleHandleLogin = () => {
    googleLogin()
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        const user = { name: loginUser.displayName, email: loginUser.email, photo: loginUser.photoURL};
        fetch("https://academy-camp.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from);
          });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="my-6 space-y-4">
        <button
          onClick={googleHandleLogin}
          type="button"
          className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
        > <FaGoogle></FaGoogle>
         <p>Login with Google</p>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
