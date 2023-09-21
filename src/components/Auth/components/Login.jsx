"use client";

import { Input, Button } from "@nextui-org/react";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const { isLoading, loginData, handleEventChange, handleLogin } = useLogin();

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
        <Button isLoading={isLoading} color="primary" onClick={handleLogin}>
          Login
        </Button>
      </div>
      </div>
    </main>
  );
};