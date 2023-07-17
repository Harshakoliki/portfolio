import open from '../Images/share.png';
import menu from '../Images/menu.png';
import Button from './Button';
import { useState } from 'react';

function Nav(){
    let Links = [
        {name:'About Me', link:"/"},
        {name:'Experince', link:"/"},
        {name:'Skills', link:"/"},
        {name:'Projects', link:"/"},
        {name:'Education', link:"/"},
        {name:'Contact', link:"/"}
    ];
    let [open,setOpen]=useState(false);
    return(
        <>

        <div className="shadow-xl w-full top-0 left-0">
            <div className='md:flex bg-white items-center justify-between py-4 md:px-10 px-7'>
                <div className="py-2 px-8 text-3xl font-bold">Portfolio.</div>

                <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden'>
                    <img src={menu} className='w-8'></img>
                </div>

                <div>
                    <ul className= "md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white w-full md:z-auto left-0 md:w-auto md:pl-0 px-8 transition-all duration-500 ease-in">
 
                        {
                            Links.map((link) =>( 
                                <li key={link.name} className='md:ml-8 text-md md:my-0 my-5'>
                                     <a href={link.link} className='md:border md:border-black p-3 rounded-md hover:bg-red-500 hover:text-white'>{link.name}</a>
                                </li>
                            ))
                        }
                        <li className="md:flex md:ml-8 border bg-red-500 text-white p-3 hover:bg-black hover:p-4 border-black rounded-md"><a href="" className='flex'>Resume<img className="ml-1" src={open} style={{width:'1.2rem',height:'1.2rem'}}/></a></li>


                    </ul>
                </div>
            </div>
        </div>
        
        </>

    );
}

export default Nav;


// style={{width:"2.5rem"}} 