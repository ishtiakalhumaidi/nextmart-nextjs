"use client"
import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "./components/Button";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";


export default function LoginPage() {
   const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const hasShownToast = useRef(false);

  useEffect(() => {
    if (error === "auth-required" && !hasShownToast.current) {
      toast.error("You must be logged in to access that page.");
      hasShownToast.current = true;
    }
  }, [error]);

  return (
      <div className="flex">
        <div className="flex-1 flex flex-col items-center justify-center gap-4"> 
            <h1 className="text-3xl font-bold">Please Login With</h1>
            <Button/></div>
        <div className="overflow-hidden bg-primary lg:h-159 flex-1">
            <Image 
            width={1080}
            height={1080}
            src={'/16191.jpg'}
            alt="auth"
            className="object-cover w-full h-full"/>
        </div>
    </div>
  );
}
