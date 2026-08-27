import React from "react";

type props ={
    params:Promise<{countryName:string}>
    
}
const Country = async({params}:props)=>{
    const {countryName} =  await params ;
    console.log(countryName);
    return(
        <div>
            Welcome to {countryName} Discover Amazing Sights and culture here

        </div>
    )
};

export default Country;