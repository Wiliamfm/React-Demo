import React from "react";
import { Link } from "react-router-dom";


function SingUp() {
   const [password, setPassword] = React.useState("");

   return (
      <main className="sign-up-page">
         <h1 className="visually-hidden">Travel App</h1>
         <form className="sign-up-form" autoComplete="off" onSubmit={handleSubmit}>
            <h2 className="sign-up-form__title">Sign Up</h2>
            <label className="input">
               <span className="input__heading">Full name</span>
               <input data-test-id="auth-full-name" name="full-name" type="text" required />
            </label>
            <label className="input">
               <span className="input__heading">Email</span>
               <input data-test-id="auth-email" name="email" type="email" required />
            </label>
            <label className="input">
               <span className="input__heading">Password</span>
               <input data-test-id="auth-password" name="password" type="password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <button data-test-id="auth-submit" className="button" type="submit">
               Sign Up
            </button>
         </form>
         <span>
            Already have an account?
            <Link data-test-id="auth-sign-in-link" to={"/sign-in"} className="sign-up-form__link">Sign In</Link>
         </span>
      </main>
   );

   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      if (!(password.length >= 3 && password.length <= 20)) {
         alert("Password must be between 3 and 20 characters");
         return;
      }
      window.location.href = "/";
   }
}


export default SingUp;