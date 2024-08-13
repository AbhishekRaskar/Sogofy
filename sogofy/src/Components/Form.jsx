import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      setMessage("Please enter all fields correctly.");
    } else if (!email.includes("@")) {
      setMessage("Please enter a valid email address.");
    } else {
      setMessage("All Good...!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
      {message && (
        <p style={{ color: message === "All Good...!" ? "green" : "red" }}>
          {message}
        </p>
      )}
    </form>
  );
};

export default Form;
