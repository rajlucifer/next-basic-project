import React, { Children } from "react";
type props = {
  children: React.ReactNode;
  info: React.ReactNode;
};

const countryLayout = ({children,info}:  props)=>{
    return(
        <div className="flex justify-between p-5">
            {children}
            {info}
        </div>

    )
}
export default countryLayout;