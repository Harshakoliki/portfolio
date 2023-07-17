import html from '../Images/html.png';
import css from '../Images/css.png';
import bootstrap from '../Images/bootstrap.png';
import tailwind from '../Images/tailwind.png';
import java from '../Images/java.png';
import php from '../Images/php.png';
import reactjs from '../Images/react.png';
import next from '../Images/Next.webp';
import as from '../Images/as.png';
import vscode from '../Images/vscode.svg';
import figma from '../Images/figma.png';
import sql from '../Images/sql.png';

export default function Skills(){
    return(
        <container className="flex justify-center text-black bg-gray-500">
            <div className="border border-black rounded-xl p-4 bg-red-50 shadow-lg" style={{width:"50vw"}}>

                <p className='text-4xl font-bold text-center'>Skills</p>

                <div>
                    <p className='text-lg font-bold text-center mt-5'>Languages</p>
                    <div className='flex justify-center p-0'>

                        <section className='m-3 text-center p-2'>
                            <img src={html} style={{width:"5rem"}}/>
                            <p className='mt-2'>HTML</p>
                        </section>
                        <section className='m-3 text-center p-2'>
                            <img src={css} style={{width:"5rem"}}/>
                            <p className='mt-2'>CSS</p>
                        </section>
                        <section className='m-3 text-center p-2'>
                            <img src={java} style={{width:"5rem"}}/>
                            <p className='mt-2'>JAVA</p>
                        </section>
                        <section className='m-3 text-center p-2'>
                            <img src={php} style={{width:"5rem"}}/>
                            <p className='mt-2'>PHP</p>
                        </section>
                        
                    </div>
                    
                </div>

                <div>
                    <p className='text-lg font-bold text-center mt-5'>Web Technologies</p>
                    <div className='flex justify-center p-0'>

                        <section className='m-3 text-center p-2'>
                            <img src={reactjs} style={{width:"5rem"}}/>
                            <p className='mt-2'>React Js</p>
                        </section>
                        <section className='m-3 text-center p-2'>
                            <img src={next} style={{width:"5rem"}}/>
                            <p className='mt-2'>Next Js</p>
                        </section>
                        <section className='m-3 text-center p-2'>
                            <img src={bootstrap} style={{width:"5rem"}}/>
                            <p className='mt-2'>Bootstrap</p>
                        </section>
                        <section className='m-3 text-center p-2'>
                            <img src={tailwind} style={{width:"5rem"}}/>
                            <p className='mt-2'>Tailwind CSS</p>
                        </section>
                        
                    </div>
                    
                </div>



                <div>
                    <p className='text-lg font-bold text-center mt-5'>DataBase</p>
                    <div className='flex justify-center p-0'>

                        <section className='m-3 text-center p-2'>
                            <img src={sql} style={{width:"5rem"}}/>
                            <p className='mt-2'>SQL</p>
                        </section>
                        
                    </div>
                    
                </div>



                <div>
                    <p className='text-lg font-bold text-center mt-5'>Tools</p>
                    <div className='flex justify-center p-0'>

                    <section className='m-3 text-center p-2'>
                            <img src={vscode} style={{width:"5rem"}}/>
                            <p className='mt-2'>VS Code</p>
                        </section>
                        <section className='m-3 text-center p-2'>
                            <img src={as} style={{width:"5rem"}}/>
                            <p className='mt-2'>Android <br/>Studios</p>
                        </section>
                        <section className='m-3 text-center p-2'>
                            <img src={figma} style={{width:"5rem"}}/>
                            <p className='mt-2'>Figma</p>
                        </section>
                        
                        
                    </div>
                    
                </div>

            </div>
            
        </container>
    );
}