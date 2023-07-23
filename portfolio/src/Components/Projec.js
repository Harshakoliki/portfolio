import weiw from '../Images/weiwprj.png';
import nebula from '../Images/nebula.png';
import git from '../Images/code.png';
import link from '../Images/link.png';
import rocket from '../Images/icons/rocket1.png'

export default function Projec(){
    return(
        <div className='my-10' id="id_projects">
            <div className='text-3xl md:text-4xl font-bold text-center items-center my-10'> Projects</div>
            <div className='flex flex-wrap justify-center items-center'>
                <div className='pop_up h-96 w-80 p-1 bg-gray-100 text-gray-700 rounded-lg shadow-lg m-2'>
                    <img src={weiw} className='rounded-md'/>
                    <div className=''>
                        <p className='text-sm px-3 py-2 text-center border border-black rounded-md mt-3'>Weiw(view) is a new age entertainment platform, where it serves multiple differnet OTT platforms under one roof on a pay-as-you-go model.</p>
                        <p className='text-md px-3 py-2 mb-2 text-red-500 text-center'>React Js, Email Js, Bootstrap, Netlify</p>
                        <div className='flex justify-center'>
                            <a href="https://weiw.in/" target='_blank' className='mr-5'><img src={link} className='w-6'/></a>
                            <a href="https://github.com/Harshakoliki/weiw-deploy" target='_blank' className='mr-0'><img src={git} className='w-6'/></a>
                        </div>
                    </div>

                </div>

                <div className='pop_up h-96 w-80 p-1 bg-gray-100 text-gray-700 rounded-lg shadow-lg m-2 '>
                    <img src={nebula} className='rounded-md'/>
                    <div className=''>
                        <p className='text-sm px-3 py-2 text-center border border-black rounded-md mt-3'>Nebula is a 48-hours hackathon organised by Jain University.</p>
                        <p className='text-md px-3 py-2 mb-2 text-red-500 text-center'> Next Js, Tailwind CSS, Vercel</p>
                        <div className='flex justify-center'>
                            <a href="https://www.nebulahackathon.com//" target='_blank' className='mr-5'><img src={link} className='w-6'/></a>
                            <a href="https://github.com/NebulaHackathon/NebulaWebsite" target='_blank' className='mr-0'><img src={git} className='w-6'/></a>
                        </div>
                    </div>


                </div>

                <img src={rocket} className='lg:w-1/4 w-0 absolute right-0 rocket'/>
            </div>
        </div>



    );
}

          