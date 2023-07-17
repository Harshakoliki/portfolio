import send from "../Images/send.png"


function Contacts(){
    return(

        <container className="">
            <div className="bg-gray-500 p-5">
                <p className="text-4xl font-bold text-center">Contact </p>
                <p className="text-lg text-center">Please fill your details for any type of quires</p>
                <div className="text-center">
                    <div className="">
                        <input type="text" placeholder="Name" className="p-4 m-2 border-2 border-black rounded-lg bg-red-100" style={{width:"20%"}}/>
                        <input type="text" placeholder="Email Address" className="p-4 m-2 border-2 border-black rounded-lg bg-yellow-100" style={{width:"30%"}}/>
                        <textarea type="text" placeholder="Message" className="p-4 m-2 border-2 border-black rounded-lg bg-green-100" style={{width:"50%", height:"10rem"}}></textarea>
                    </div>
                  <div>
                    <button className="border border-black p-3 rounded-md text-center my-4"><a href="" className="flex">Send <img className="ml-2" src={send} style={{width:"1.4rem"}}/></a></button>
                  </div>
                </div>
            </div>
            
        </container>
    );
}

export default Contacts;