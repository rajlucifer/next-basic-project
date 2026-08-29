'use client'
import { useParams } from "next/navigation";
import React from "react";

const info = ()=>{
    const {countryName} = useParams();
    return(
        <div className="mt-20 text-white">
            {countryName} this very nice country hope you visit one day ......
        </div>
    )
};

export default info;