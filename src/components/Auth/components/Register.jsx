"use client"

import { Button, Input } from "@nextui-org/react";
import { useRegister } from "../hooks/useRegister";
//import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

export const Register = () => {
  const { registerData, handleEventChange, registerUser , resetRegisterData} = useRegister();

  const handleRegister = async () => {
    const data = await registerUser();
    if (data) {
      console.log(data);
      resetRegisterData()
    }
  };

  return (
    <main className="h-screen flex justify-center items-center">

    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    
    <div className="p-6 space-y-4 md:space-y-1 sm:p-15">
        <h1 className="text-3xl font-bold">Signup</h1>
        
        <div>
        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
        <Input className=" bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

        value={registerData.name} name="name" placeholder="full name" onChange={handleEventChange} />
        </div>
        
        <div>
        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>

        <Input className="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        
        value={registerData.email} name="email" placeholder="email@something.com" onChange={handleEventChange} />
        </div>

        <div>
        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        
        <Input className="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        
        value={registerData.password} name="password" type="password" placeholder="password" onChange={handleEventChange} />
        </div>

        <Button color="primary" className="text-sm font-bold" onClick={handleRegister}>
          Signup
        </Button>

      </div>
      </div>
    </main> 
   
  );
};