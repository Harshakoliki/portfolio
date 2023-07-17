
import linkedin from "../Images/linkedin.png"
import instagram from "../Images/instagram.png"
import github from "../Images/github.png"
export default function Footer(){
    return(
        <container className="flex justify-center">

        <div className="flex justify-center border border-black bg-green-50 my-5 p-3 rounded-lg text-center">
                <a className="m-2" href="https://www.linkedin.com/in/harsha-vardhan-koliki-6695001b8" target="_blank"><img src={linkedin} alt="Linkedin" style={{width:"3rem"}}/></a>
                <a className="m-2" href=""><img src={instagram} style={{width:"3rem"}}/></a>
                <a className="m-2" href=""><img src={github} style={{width:"3rem"}}/></a>
            </div>
        </container>
    );

}