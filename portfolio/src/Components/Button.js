import React from "react";
import open from '../Images/share.png';

const Button = () => {
    return(
        <button className="md:flex md:ml-8 border bg-red-500 text-white p-3 hover:bg-black hover:p-4 border-black rounded-md">
            Resume <span><img className="ml-1" src={open} style={{width:'1.2rem',height:'1.2rem'}}/></span>
        </button>

    )
}

export default Button;