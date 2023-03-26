import React from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";

function Authentication() {
    
  const [authData, setAuthData] = React.useState({
    registerEmail: "",
    registerPassword: "",
  });

  const [loginData, setLoginData] = React.useState({
    loginEmail: "",
    loginPassword: "",
  });

  const [user, setUser] = React.useState('');

//   onAuthStateChanged(auth, (currentUser) => {
//     // setUser(currentUser);
//     setUser(currentUser.email)
//     console.log(currentUser);
//   });

  const register = async () => {
    // console.log(authData.registerEmail,authData.registerPassword);

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        authData.registerEmail,
        authData.registerPassword
      );
      console.log(user);

      setTimeout(()=>{
        setUser(auth.currentUser.email)
        },700)

    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginData.loginEmail,
        loginData.loginPassword
      );

      setTimeout(()=>{
        setUser(auth.currentUser.email)
        },700)
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    console.log(auth.currentUser);
    setUser('')
  };

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
    <div className="App">
      <div>
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          name="registerEmail"
          value={authData.registerEmail}
          onChange={handleAuthChange}
        />
        <input
          placeholder="Password..."
          value={authData.registerPassword}
          name="registerPassword"
          onChange={handleAuthChange}
        />

        <button onClick={register}> Create User</button>
      </div>

      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          name="loginEmail"
          value={loginData.loginEmail}
          onChange={handleLoginChange}
        />
        <input
          placeholder="Password..."
          name="loginPassword"
          value={loginData.loginPassword}
          onChange={handleLoginChange}
        />

        <button onClick={login}> Login</button>
      </div>
        <h1>{user}</h1>
      <h4> User Logged In: </h4>
      <button onClick={logout}> Sign Out </button>
    </div>
  );
}

export default Authentication;
