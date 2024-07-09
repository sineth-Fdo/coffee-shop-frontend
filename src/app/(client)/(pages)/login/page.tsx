"use client";

import { useEffect, useState } from "react";

import Cookies from "js-cookie";
import { loginUser } from "@/src/api/auth/authApi";
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

  const res = await loginUser(email, password);

    if (res.ok) {
      const data = await res.json();
      Cookies.set("token", data.token, { expires: 10 });
      Cookies.set("role", data.user.role, { expires: 10 });
      console.log("Login successful");

      if (data.user.role === "admin") {
        router.push("/dashboard");
      }else if (data.user.role === "customer") {
        router.push("/home");
      }

    } else {
      alert("Login failed");
    }
  };

  

  useEffect(() => {
    const token = Cookies.get("token");
    const role = Cookies.get("role");
    if (!token) {
      console.log("Not authenticated");
      router.push("/login");
    } else {

      if (role === "admin") {
        router.push("/dashboard");
      } else if (role === "customer") {
        router.push("/home");
      }
    }
  },[]);

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
