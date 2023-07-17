import weiw from '../Images/weiwprj.png';
import nebula from '../Images/nebula.png';
import git from '../Images/code.png';
import link from '../Images/link.png';

export default function Projec(){
    return(
        <container className="">
            <div className='bg-green-300 p-5'>
                <p className="text-4xl font-bold text-center">Projects</p>
                <div className="flex justify-center flex-wrap p-5">
                    <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                      <img src={weiw} alt="profile-picture" />
                    </div>
                    <div class="p-6 text-center">
                      <p class="mb-2 block font-sans text-md leading-snug tracking-normal text-blue-gray-900 antialiased">
                      Weiw(view) is a new age entertainment platform, where it serves multiple differnet OTT platforms under one roof on a pay-as-you-go model.
                      </p>
                      <p class="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                        React Js, Email Js, Bootstrap,Netlify
                      </p>
                    </div>
                    <div class="flex justify-center gap-7 p-6 pt-2">
                    <a
                      href="https://weiw.in/" target='_blank'
                      class="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                    >
                      <img src={link} style={{width:"2rem"}}/>
                    </a>
                    <a
                      href="https://github.com/Harshakoliki/weiw-deploy" target='_blank'
                      class="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                    >
                      <img src={git} style={{width:"2rem"}}/>
                    </a>
                    </div>
                    </div>
    
                    <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                      <img src={nebula} alt="profile-picture" />
                    </div>
                    <div class="p-6 text-center">
                      <p class="mb-2 block font-sans text-md leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Nebula is a 48-hours hackathon organised by Jain University.
                      </p>
                      <p class="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                        Next Js, Tailwind CSS, Vercel
                      </p>
                    </div>
                    <div class="flex justify-center gap-7 p-6 pt-2">
                      <a
                        href="https://www.nebulahackathon.com//" target='_blank'
                        class="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                      >
                        <img src={link} style={{width:"2rem"}}/>
                      </a>
                      <a
                        href="https://github.com/NebulaHackathon/NebulaWebsite" target='_blank'
                        class="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                      >
                        <img src={git} style={{width:"2rem"}}/>
                      </a>
                    </div>
                    </div>
    
                </div>
            </div>


        </container>
    );
}