"use client"
import { signIn } from 'next-auth/react'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'

export default function Button() {
  return ( 
   <button onClick={() => signIn('google')}  className="btn btn-xl rounded-2xl hover:bg-primary bg-white text-black border-[#e5e5e5]">
  <FcGoogle />
  Login with Google
</button>
  )
}
