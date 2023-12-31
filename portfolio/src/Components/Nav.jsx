import React from 'react';
import resume from '../Images/open.png'
import menu from '../Images/menu.png';
import { useState } from 'react';



function Nav(){
    return(
        <div className='nav_bar lg:flex lg:justify-between lg:items-center lg:py-4 lg:px-10 py-3 px-10 flex justify-center items-center w-full'>
            <div className='font-bold py-2 text-center md:text-center md:text-3xl text-2xl'>
                <a href='#id_about'> Portfolio.</a>
            </div>
            <div className='lg:hidden border border-black p-2 ml-3 rounded-md text-white bg-red-500 hover:bg-black hover:text-white'><a href='https://drive.google.com/file/d/15oODBF4ppK3552JJk00OJg9KLmKfqjgj/view?usp=sharing' target="_blank" className='flex items-center'>Resume<img src={resume} className='w-5 h-5 ml-1'/></a>
            </div>
            <div>
                <ul className='lg:flex lg:justify-end hidden'>
                    <a href='#id_about'className='pop_up shadow-lg border border-black md:p-3 md:ml-3 rounded-md hover:bg-red-500 hover:text-white'><li className=''>About</li></a>
                    <a href='#id_experience' className='pop_up shadow-lg border border-black md:p-3 md:ml-3 rounded-md hover:bg-red-500 hover:text-white'><li className=''>Experience</li></a>
                    <a href='#id_skills' className='pop_up shadow-lg border border-black md:p-3 md:ml-3 rounded-md hover:bg-red-500 hover:text-white'><li className=''>Skills</li></a>
                    <a href='#id_projects' className='pop_up shadow-lg border border-black md:p-3 md:ml-3 rounded-md hover:bg-red-500 hover:text-white'><li className=''>Projects</li></a>
                    <a href='#id_education' className='pop_up shadow-lg border border-black md:p-3 md:ml-3 rounded-md hover:bg-red-500 hover:text-white'><li className=''>Education</li></a>
                    <a href='#id_contacts' className='pop_up shadow-lg border border-black md:p-3 md:ml-3 rounded-md hover:bg-red-500 hover:text-white'><li className=''>Contact</li></a>
                    <a href ='https://drive.google.com/file/d/15oODBF4ppK3552JJk00OJg9KLmKfqjgj/view?usp=sharing' target="_blank" className='pop_up shadow-lg border border-black md:p-3 md:ml-3 rounded-md text-white bg-red-500 hover:bg-black hover:text-white'><li className='flex items-center'> Resume <img src ={resume} className='w-6 ml-1'/></li></a>

                </ul>
            </div>
        </div>
    );
}

// function Nav(){
//     let Links = [
//         {name:'About Me', link:"/"},
//         {name:'Experince', link:"/"},
//         {name:'Skills', link:"/"},
//         {name:'Projects', link:"/"},
//         {name:'Education', link:"/"},
//         {name:'Contact', link:"/"}
//     ];
//     let [open,setOpen]=useState(false);
//     return(
//         <>

//             <div className='md:flex md:flex-nowrap items-center md:justify-between py-4 md:px-10 bg-white shadow-lg'>
//                  <div className="md:py-2 md:px-8 text-center text-3xl font-bold">Portfolio.</div>
                
//                  <div className=''> 
//                     <ul className= "md:flex md:flex-nowrap md:items-center md:pb-0 pb-12 md:pl-0 px-8 hidden">
 
//                         {
//                             Links.map((link) =>( 
//                                 <li key={link.name} className='md:ml-8 text-md md:my-0 my-5'>
//                                      <a href={link.link} className='md:border  md:block md:border-black p-3 rounded-md hover:bg-red-500 hover:text-white'>{link.name}</a>
//                                 </li>
//                             ))
//                         }
//                         <li className="md:ml-8 border bg-red-500 text-white p-3 hover:bg-black border-black rounded-md"><a href="" className='md:flex md:flex-wrap'>Resume <img className="ml-1" src={resume} style={{width:'1.2rem',height:'1.2rem'}}/></a></li>


//                     </ul>
//                 </div>

             
//             </div>
        
//         </>

//     );
// }

export default Nav;

