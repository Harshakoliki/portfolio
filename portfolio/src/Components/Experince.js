import lap from '../Images/icons/lap.png'

export default function Experince(){
    return(
            <div className="Experience px-6 py-8 md:px-16 md:flex justify-center md:justify-start md:items-center" id="id_experience" style={{height:""}}>
                 <img src={lap} className='rocket md:w-96 w-0 md:ml-10'/>
                 <div>
                     <p className="text-3xl md:text-5xl font-bold text-end">Experince</p>
                    <div className="my-10 md:mr-5 lg:ml-48 md:ml-28 text-end">
                        <p className="md:text-4xl text-2xl font-bold"><a href="https://weiw.in/" target="_blank">Weiw <span className="text-lg font-medium"> [ Founder ] </span></a> </p>
                        <p className="text-lg font-medium text-stone-400">August 2022 - May 2023</p>
                        <ul className="p-4 mt-3 md:text-xl text-md text-white ">
                            <li className="mb-3"><span className='font-bold text-red-600 text-xl md:text-2xl mr-1'>| </span> Weiw(view) is a new age entertainment platform, where it serves multiple differnet OTT platforms under one roof on a pay-as-you-go model.</li>
                            <li className="mb-3"><span className='font-bold text-red-600 text-xl md:text-2xl mr-1'>| </span> With the team of 3, we have designed and developed a user friendly website for serving the servies in the initial stage of the business.</li>
                            <li className="mb-3"><span className='font-bold text-red-600 text-xl md:text-2xl mr-1'>| </span> We have used React Js framework, Email Js for auto response email and Netlify for hosting the website.</li>
                        </ul>
                    </div>
    
    
    
    
                    <div className="my-10 md:mr-5 lg:ml-48 md:ml-28  text-end">
                        <p className="md:text-4xl text-2xl font-bold"><a href="https://weiw.in/" target="_blank">Academy Box <span className="text-lg font-medium"> [ Founder ] </span></a> </p>
                        <p className="text-lg font-medium text-stone-400">April 2023 - Present</p>
    
                        <ul className="p-4 mt-3 md:text-xl text-md text-white">
                        <li className="mb-3"><span className='font-bold text-red-600 text-xl md:text-2xl mr-1'>| </span> Academy box(Tentative name) is a social media application which allows users to track all type of community activities.</li>
                        <li className="mb-3"><span className='font-bold text-red-600 text-xl md:text-2xl mr-1'>| </span> We are team of 3, building the application using Java in Android Studios IDE for Android devices and using Swift in XCode for IOS users.</li>
                        </ul>
                    </div>
                 </div>




            </div>
    );
}