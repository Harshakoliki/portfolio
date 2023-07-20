import send from "../Images/send.png"


function Contacts(){
    return(

            <div className="p-5">
                <p className="md:text-4xl text-3xl font-bold text-center">Contact </p>
                <p className="md:text-lg text-md text-center">Please fill your details for any type of quires</p>
                <div className="text-center">
                    <div className="flex-horizontal flex-wrap justify-center items-center">
                        <div className="">
                            <input type="text" placeholder="Name" className="md:p-4 p-3 m-2 border md:w-80 border-black rounded-lg bg-red-100"/>
                            <input type="Email" placeholder="Email Address" className="md:p-4 p-3 m-2 md:w-80 border border-black rounded-lg bg-yellow-100"/>
                        </div>
                        <textarea type="text" placeholder="Message" className="p-4 m-2 border h-52 md:w-3/6 border-black rounded-lg bg-green-100"></textarea>
                        </div>
                  <div className="flex justify-center">
                    <button className="border border-black p-3 rounded-md text-center my-3 hover:text-white hover:bg-red-500 hover:px-5"><a href="" className="flex">Send <img className="ml-2" src={send} style={{width:"1.4rem"}}/></a></button>
                  </div>
                </div>
            </div>
            
    );
}

export default Contacts;