import React from "react";

export default function loading() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className=" w-20 h-20 border-2 border-dotted rounded-full animate-ping border-primary"></div>
    </div>
  );
}
