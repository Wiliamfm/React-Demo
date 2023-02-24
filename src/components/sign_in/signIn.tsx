import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
   const [password, setPassword] = React.useState("");

   return <>
      <main className="sign-in-page">
         <h1 className="visually-hidden">Travel App</h1>
         <form className="sign-in-form" autoComplete="off" onSubmit={handleSubmit}>
            <h2 className="sign-in-form__title">Sign In</h2>
            <label className="input">
               <span className="input__heading">Email</span>
               <input data-test-id="auth-email" name="email" type="email" required />
            </label>
            <label className="input">
               <span className="input__heading">Password</span>
               <input data-test-id="auth-password" name="password" type="password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <button data-test-id="auth-submit" className="button" type="submit">
               Sign In
            </button>
         </form>
         <span>
            Don't have an account?
            <Link data-test-id="auth-sign-up-link" to={"/sign-up"} className="sign-in-form__link">
               Sign Up
            </Link>
         </span>
      </main>
   </>

   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      if (!(password.length >= 3 && password.length <= 20)) {
         alert("Password must be between 3 and 20 characters")
         return;
      }
      window.location.href = "/";
   }
}

export default SignIn;