import React from "react";
import "./auth.css";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Toast from "./Toast";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { toast } from "react-toastify";

// const navigate = useNavigate();

function Auth() {

    const navigate = useNavigate();
  const [authData, setAuthData] = React.useState({
    registerEmail: "",
    registerPassword: "",
  });

  const [loginData, setLoginData] = React.useState({
    loginEmail: "",
    loginPassword: "",
  });

  const [user, setUser] = React.useState("");


   const [authenticated, setauthenticated] = React.useState(false);

  const register = async (event) => {
    // console.log(authData.registerEmail,authData.registerPassword);
    event.preventDefault()
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        authData.registerEmail,
        authData.registerPassword
      );
      console.log(user);

      setauthenticated(true)
      localStorage.setItem('login',true)
      localStorage.setItem('username',authData.registerEmail)
      toast.success("Logged in", { autoClose: 3000 });
      setTimeout(() => {
        console.log(auth.currentUser.email);
        setUser(auth.currentUser.email);
      }, 700);

    //   if(authenticated){
        navigate('/home')
    //   }

      
    } catch (error) {
      console.log(error.message);
      setauthenticated(false)
      toast.error("Something went wrong", { autoClose: 3000 });
      
    }
  };

  const login = async (event) => {

    event.preventDefault()
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginData.loginEmail,
        loginData.loginPassword
      );

      localStorage.setItem('username',loginData.loginEmail)
      localStorage.setItem('login',true)
      setauthenticated(true)
      toast.success("Logged in", { autoClose: 3000 });
      setTimeout(() => {
        console.log(auth.currentUser.email);
        setUser(auth.currentUser.email);
       
      }, 700);

    //   if(authenticated){
        navigate('/home')
    //   }

      
      
      console.log(user);

      
    
    } catch (error) {
      console.log(error.message);
      setauthenticated(false)
      toast.error("Something went wrong", { autoClose: 3000 });
    }
  };

//   const logout = async () => {
//     await signOut(auth);
//     console.log(auth.currentUser);
//     setUser("");
//   };

  const handleAuthChange = (event) => {
    const { name, value } = event.target;

    console.log("cLicked");

    setAuthData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleLoginChange = (event) => {
    const { name, value } = event.target;

    setLoginData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  return (
    <div className="auth">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form onSubmit={register}>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              placeholder="Email..."
              name="registerEmail"
              value={authData.registerEmail}
              onChange={handleAuthChange}
              required
            />
            <input
              placeholder="Password..."
              value={authData.registerPassword}
              name="registerPassword"
              onChange={handleAuthChange}
              type="password"
              required
            />

            <button type="submit">Signup</button>
          </form>

          <div className="login">
            <form onSubmit={login}>
              <label htmlFor="chk" aria-hidden="true">
                Login
              </label>
              <input
                placeholder="Email..."
                name="loginEmail"
                value={loginData.loginEmail}
                onChange={handleLoginChange}
                required
              />
              <input
                placeholder="Password..."
                name="loginPassword"
                value={loginData.loginPassword}
                onChange={handleLoginChange}
                type="password"
                required
              />
              <button type="submit"> Login </button>

              <h4> User Logged In: {user}</h4>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Auth;
