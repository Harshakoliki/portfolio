import send from "../Images/send.png"
import mail from '../Images/icons/mail.png'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


function Contacts(props){

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm("service_habktqo","template_jwiembl", e.target, 'GD3bavtfvixbbC8MB')
        .then((result) => {
            console.log(result.text);
            alert("Message Sent Successfully");
        }, (error) => {
            console.log(error.text);
            alert("Message failed to send, Retry!");
        });
         e.target.reset()
    };

    return(
        

        <div className="p-5 flex flex-col justify-center items-center" id="id_contacts">
            <img src={mail} className="w-56 rocket"/>
            <p className="md:text-5xl text-3xl font-bold text-center">Contact </p>
            <p className="md:text-lg text-md text-center mb-5">Please fill your details for any type of quires</p>


            <form className="flex flex-col w-3/4 md:w-2/5 gap-2.5" action="" onSubmit={sendEmail}>
                <input type="text" name="name" required placeholder="Name" className="text-black p-4 rounded-lg bg-yellow-100"/>
                 <input type="Email" name="email" required placeholder="Email Address" className="text-black p-4 rounded-lg bg-yellow-100"/>
                 <textarea type="text" name="msg" required placeholder="Message" className="text-black p-4 h-40 rounded-lg  bg-yellow-100"></textarea>
                 <button type="submit" className="border-2 md:p-4 p-3 rounded-md bg-red-500 mb-10 flex justify-center items-center mx-auto hover:px-5 hover:bg-black hover:text-xl duration-5">Send<img className="ml-2" src={send} style={{width:"1.8rem"}}/></button>
            </form>

            
            
        </div>


            
    );
}

export default Contacts;