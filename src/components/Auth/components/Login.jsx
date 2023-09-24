"use client";

import { Input, Button } from "@nextui-org/react";
import { useLogin } from "../hooks/useLogin";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const Login = () => {
  const router = useRouter();
  const { loginData, handleEventChange} = useLogin();
  const handleLogin = async () => {
    toast.loading("try to log in...");
    const { email, password } = loginData;
    const res = await fetch(
      "https://eventmakers-api.vercel.app/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const data = await res.json();
    toast.remove();
    if (res.ok) {
      // Login successful, set the token and redirect to /dashboard
      Cookies.set("token", data.token);
      router.push("/dashboard");
    } else {
      // Handle login failure here (e.g., display an error message)
      toast.error("Login failed. Please check your credentials.");
    }
    // toast.success("You are successfully login")
    // Cookies.set("token", data.token);
    // router.push("/dashboard")
  }

  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-3xl font-bold">Login</h1>
        
        <Input
          value={loginData.email}
          name="email"
          placeholder="email@something.com"
          onChange={handleEventChange}
        />
        <Input
          value={loginData.password}
          name="password"
          type="password"
          placeholder="password"
          onChange={handleEventChange}
        />
        <Button color="primary" onClick={handleLogin}>
          Login
        </Button>
      </div>
      </div>
    </main>
  );
};