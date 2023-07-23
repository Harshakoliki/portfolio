import React from 'react';
import person from '../Images/icons/rocket.png'
import exp from '../Images/icons/exp.png'
import lap from '../Images/icons/lap.png'

function About(){
    return(
        
        <div className= "about md:h-screen md:pt-20 pt-10 md:w-full flex flex-wrap justify-between items-center" id="id_about" style={{}}>

            <div className='flex flex-wrap p-10 md:w-2/3'>
                <div className='border rounded-xl md:p-5 p-3'>
                    <div className='font-bold text-3xl md:text-6xl'>Hello, I'm Harsha Koliki</div>
                    <div className='md:text-2xl text-md md:m-5'>
                    I am a <span className='text-red-500 md:text-3xl hover:text-yellow-300 hover:p-1 hover:font-bold cursor-pointer'>UI/UX designer </span>& a<span className='text-red-500 md:text-3xl hover:text-yellow-300 hover:p-1 hover:font-bold cursor-pointer'> Developer</span>, 
                    experienced in developing Front-End Web Applications using React js and Mobile Applications using Java and Android Studios IDE.
                     I am very interested in <span className='text-red-500 md:text-3xl hover:text-yellow-300 hover:p-1 hover:font-bold cursor-wait'>Entrepreneurship</span>, and following that, I am currently working on my second start-up idea.

                    </div>
                </div>


            </div>
            <img src={person} className='rocket absolute w-0 right-4 bottom-4 md:w-1/3'/>

        </div>

    );
}

export default About;