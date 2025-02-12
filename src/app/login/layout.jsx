'use client'
import Image from "next/image";

const Layout = ({children}) => {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute inset-0 flex">
        <div className="relative w-1/2 h-full">
          <Image src="/login-bg.webp" alt="Login background" fill className="w-[50%] object-cover object-center"/>
        </div>
        <div className="bg-slate-200 text-slate-900 py-10 w-1/2 ">
          <div className="m-auto w-full max-w-3xl h-full px-20 flex flex-col justify-between">
            {children}
            {/*<div>*/}
            {/*  &copy; {new Date().getFullYear()} dimnyan - All Rights Reserved.*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;