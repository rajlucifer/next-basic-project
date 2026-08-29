import React from "react";
import Image from "next/image";
import parisImg from  "@/src/assets/paris.jpg"
import tokyoImg from "@/src/assets/tokyo.webp"
import nyImg from "@/src/assets/ny.jpg"

type props ={
    params:Promise<{countryName:string}>
    
}
const Country = async({params}:props)=>{
    const {countryName} =  await params ;
    console.log(countryName);
    return(
        <div className="text-white  mt-20   ">
            Welcome to {countryName} Discover Amazing Sights and culture here
            {
                 countryName == "Paris" &&  <div className="  border-2 border-white rounded-3xl object-cover overflow-hidden"><Image src={parisImg} width={500} height={500} alt="paris"></Image></div>
            }
            {
                countryName == "Tokyo" && <div className="  border-2 border-white rounded-3xl object-cover overflow-hidden"><Image src={tokyoImg} width={500} height={500} alt="tokyo"></Image></div>
            }
            {
                countryName == "NewYork" && <div className="  border-2 border-white rounded-3xl object-cover overflow-hidden"><Image src={nyImg} width={500} height={500} alt="new york"></Image></div>
            }

        </div>
    )
};

export default Country;