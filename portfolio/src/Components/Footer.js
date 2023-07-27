
import linkedin from "../Images/linkedin.png"
import instagram from "../Images/instagram.png"
import github from "../Images/github.png"
export default function Footer(){
    return(
        <container className="flex justify-center">

        <div className="flex justify-center items-center border border-white bg-black my-10 p-3 rounded-lg">
                <a className="m-2 pop_up bg-white p-1 rounded-full" href="https://www.linkedin.com/in/harsha-vardhan-koliki-6695001b8" target="_blank"><img src={linkedin} alt="Linkedin" style={{width:"3rem"}}/></a>
                <a className="m-2 pop_up bg-white p-1 rounded-full" href="https://github.com/Harshakoliki" target="_blank"><img src={github} style={{width:"3rem"}}/></a>
                <a className="m-2 pop_up bg-white p-1 rounded-full" href="https://www.instagram.com/__harsha_koliki__/" target="_blank"><img src={instagram} style={{width:"3rem"}}/></a>
            </div>
        </container>
    );

}