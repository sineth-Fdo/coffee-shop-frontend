"use client";

import { useEffect, useState } from "react";

import Cookies from "js-cookie";
import { loginUser } from "@/src/api/auth/authApi";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e: any) => {
    e.preventDefault();

  const res = await loginUser(email, password);

    if (res.ok) {
      const data = await res.json();
      console.log(data);
      Cookies.set("token", data, { expires: 10 });
      alert("Login successful");
    } else {
      alert("Login failed");
    }
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      alert("Not authenticated");
    } else {
    }
  }, []);

  return (
    <div className="pt-40">
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <br />
    </div>
  );
};

export default Page;
