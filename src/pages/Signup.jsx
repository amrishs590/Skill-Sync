import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "./Login.css";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Create an Account</h2>
        <p>Join SkillSync and start exchanging skills</p>
        <form className="login-form" onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password (6+ chars)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        {errorMsg && <p style={{ color: "red", marginTop: "1rem" }}>{errorMsg}</p>}
        <p className="signup-link">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
