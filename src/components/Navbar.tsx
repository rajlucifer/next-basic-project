import React from "react";
import Image from "next/image";
import img from "../../public/tour-guide.png"
import Link from "next/link";

const Navbar = ()=>{
    return(
        <nav className="bg-white w-full h-15 p-3 flex items-center justify-between text-black">
            <div className="flex items-center gap-2">
                <Link href={"/"}> <Image src={img} height={50} alt="tour" width={50}/></Link>
                <h1 className="font-semibold">Travel Guide</h1>
            </div>
            <div className="flex gap-3 ">
                <Link href={"/"}> <div className="cursor-pointer">Home</div></Link>
                <Link href={"/destination"}><div className="cursor-pointer">Destination</div></Link>
                <Link href={"/contact"}><div className="cursor-pointer">Contact Us</div></Link> 


            </div>

        </nav>
    )
}

export default Navbar;