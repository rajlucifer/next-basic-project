'use client'
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";



const Destination = ()=>{
    const destination = ['Paris','Tokyo','NewYork']
   
    return(
        <div className="w-full h-screen flex items-center justify-center text-black">
            <div  className="w-50% h-50%  gap-2">
                <h1 className=" text-white text-2xl ">Choose Destination</h1>
                <div className="flex flex-col items-center justify-center gap-2">
                     {
                        destination.map((country,index)=>(
                            <div key={index}>
                                <Link href={`/destination/${country}`}><div className="w-40 h-15 p-3 flex items-center justify-center border-2 border-gray-700 bg-white rounded-2xl font-semibold text-xl cursor-pointer hover:bg-gray-400">{country}</div>
                                </Link>
                                 

                            </div>
                        ))
                     }
                </div>
            </div>

        </div>
    )
};

export default Destination;