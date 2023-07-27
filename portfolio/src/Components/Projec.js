import weiw from '../Images/weiwprj.png';
import nebula from '../Images/nebula.png';
import editor from '../Images/editor.png';
import foodApp from '../Images/foodOrder.png';
import git from '../Images/code.png';
import link from '../Images/link.png';
import rocket from '../Images/icons/rocket1.png'

export default function Projec(){
    return(
        <div className='my-10' id="id_projects">
            <div className='text-3xl md:text-5xl font-bold text-center items-center my-10 flex justify-center'>
                <p>Projects</p>
                <img src={rocket} className=' w-24 rocket'/>
            </div>
            <div className='flex flex-wrap justify-center items-center'>
                <div className='pop_up h-96 w-80 p-1 bg-gray-100 text-gray-700 rounded-lg shadow-lg mx-4 mb-3'>
                    <img src={weiw} className='rounded-md'/>
                    <div className=''>
                        <p className='text-sm px-3 py-2 text-center border border-black rounded-md mt-1 mx-2'>Weiw(view) is a new age entertainment platform, where it serves multiple differnet OTT platforms under one roof on a pay-as-you-go model.</p>
                        <p className='text-md px-3 py-2 mb-2 text-red-500 text-center'>React Js, Email Js, Bootstrap, Netlify</p>
                        <div className='flex justify-center items-center'>
                            <a href="https://weiw.in/" target='_blank' className='mr-5  bg-yellow-300 p-3 rounded-full'><img src={link} className='w-6'/></a>
                        </div>
                    </div>

                </div>

                <div className='pop_up h-96 w-80 p-1 bg-gray-100 text-gray-700 rounded-lg shadow-lg mx-4 my-3'>
                    <img src={nebula} className='rounded-md'/>
                    <div className=''>
                        <p className='text-sm px-3 py-2 text-center border border-black rounded-md mt-3 mx-2'>Nebula is a 48-hours hackathon organised by Jain University.</p>
                        <p className='text-md px-3 py-2 mb-2 text-red-500 text-center'> Next Js, Tailwind CSS, Vercel</p>
                        <div className='flex justify-center items-center'>
                            <a href="https://www.nebulahackathon.com//" target='_blank' className='mr-5 bg-yellow-300 p-3 rounded-full'><img src={link} className='w-6'/></a>
                        </div>
                    </div>


                </div>

                <div className='pop_up h-96 w-80 p-1 bg-gray-100 text-gray-700 rounded-lg shadow-lg mx-4 my-3'>
                    <img src={foodApp} className='rounded-md'/>
                    <div className=''>
                        <p className='text-sm px-3 py-2 text-center border border-black rounded-md mt-3 mx-2'>Food Ordering App which collects and stores order details in the database</p>
                        <p className='text-md px-3 py-2 mb-2 text-red-500 text-center'>XML, Java, SQL</p>
                        <div className='flex justify-center items-center'>
                            <a href="https://github.com/Harshakoliki/Food-Ordering-App" target='_blank' className='mr-5  bg-yellow-300 p-3 rounded-full'><img src={git} className='w-6'/></a>
                        </div>
                    </div>


                </div>


                <div className='pop_up h-96 w-80 p-1 bg-gray-100 text-gray-700 rounded-lg shadow-lg mx-4 my-3'>
                    <img src={editor} className='rounded-md'/>
                    <div className=''>
                        <p className='text-sm px-3 py-2 text-center border border-black rounded-md mt-3 mx-2'>Photo Editing Application built using "Image picker dhaval" library.</p>
                        <p className='text-md px-3 py-2 mb-2 text-red-500 text-center'> XML, Java</p>
                        <div className='flex justify-center items-center'>
                            <a href="https://github.com/Harshakoliki/Photo-Editor-App" target='_blank' className='mr-5  bg-yellow-300 p-3 rounded-full'><img src={git} className='w-6'/></a>
                        </div>
                    </div>


                </div>
            </div>
        </div>



    );
}

          