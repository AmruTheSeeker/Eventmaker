"use client"

import { useState } from "react"

export const AuthRegister = () => {
  const [registerData, setRegisterData] = useState({})
  
  const handleChange =(e) => {
    const {name,value} =e.target;
    setRegisterData({ ...registerData, [name]: value})
  }

  const handleSubmitRegister = async () => {
    const {name, username, email, password} = registerData;
    const res = await fetch (`https://devscale-mockapi.fly.dev/api/collections/users/records`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body : JSON.stringify({ name, username, email, password, passwordConfirm: password})
    })
    const data = await res.json()
    console.log(data)
  }

  return (
    <main className="h-screen flex justify-center items-center">
        <div className="w-[340px] space-x-2">
            <div className="pb-10">
            <h1 className="text-2xl font-bold text-center">Registration</h1>
            </div>

            <input name="name" placeholder="Full name" onChange={handleChange}/>
            <input name="username" placeholder="username" onChange={handleChange}/>
            <input name="email" placeholder="email" onChange={handleChange}/>
            <input name="password" placeholder="password" type="password" onChange={handleChange}/>
            <button onClick={handleSubmitRegister}>Register</button> 

        </div>
    </main>
  )

 
  
}
