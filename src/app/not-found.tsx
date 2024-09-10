"use client";
import React from "react";
import { useRouter } from "next/navigation";
function Notfound() {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="text-center flex flex-col w-full justify-center items-center">
        <h1>Cannot Found This Page !</h1>
        <p className="mt-2 para">your request page is not found</p>
        <button
          className="btn-grd md:w-[300px] b-btn w-[70%] py-3 rounded-3xl font-semibold text-white drop-shadow mt-4"
          onClick={(ev) => router.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Notfound;
