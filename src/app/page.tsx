'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function Home() {

  const {data: session} = authClient.useSession()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = () => {
    authClient.signUp.email({
      email,
      name,
      password
    },
    {
      onError: () => {
        window.alert("Something went wrong")
      },

      onSuccess: () => {
        window.alert("Success")
      }
    }
    )
  }

  if(session){
    return(
      <div>
        Logged In
      </div>
    )
  }


  return (

    <div className="flex flex-col gap-y-5 w-1/2">
      <Input 
      type="text"
      placeholder="Enter name"
      onChange={(e) => {
        setName(e.target.value)
      }}
      />

      <Input 
      type="text"
      placeholder="Enter email"
      onChange={(e) => {
        setEmail(e.target.value)
      }}
      />

      <Input 
      type="text"
      placeholder="Enter password"
      onChange={(e) => {
        setPassword(e.target.value)
      }}
      />

      <Button variant="default" onClick={onSubmit}>
        Create User
      </Button>

    </div>
  )
}
