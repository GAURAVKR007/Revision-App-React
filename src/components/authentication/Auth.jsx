import React from 'react'
import './auth.css'

function Auth() {
  return (
    <div>
        <div className="main"> 
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
            <form>
                <label for="chk" aria-hidden="true">Sign up</label>
                <input type="text" name="name" placeholder="UserName" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <button>Sign up</button>
            </form>

            <div className="login">
                <form>
                    <label for="chk" aria-hidden="true">Login</label>
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button>Login</button>
                </form>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Auth;