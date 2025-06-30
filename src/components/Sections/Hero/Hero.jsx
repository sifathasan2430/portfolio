import { Download, Github, Linkedin, Locate, LocateFixed, LocateIcon, Mail } from 'lucide-react';
import React from 'react';
import { Button } from "@/components/ui/button"
import { BiLocationPlus } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';

const Hero = () => {
    
    return (
        <div className='max-w-6xl mx-auto py-10 px-4 sm:px-6 md:px-8'>
              <div className='py-6 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-10  '>
                    <div className='space-y-6 font-inter md:col-span-2'>
                         <div>
                             <h1 className='font-inter font-bold text-4xl'>Sifat Hasan</h1>
                          <h3 className='text-xl py-2 text-[#71717a]'>Full Stack Junior Developer</h3> 
                         </div>
                         
                              
                               <div className='flex flex-col gap-2 sm:flex-row'  >
                                <div className='flex gap-2 '>
                                 <Mail/> <span className='text-sm text-[#71717a]'>sifatshasan@gmail.com</span>
                               </div>
                              
                    
                               <div className='flex gap-2 '>
                                  <LocateIcon></LocateIcon>
                                <span className='text-sm text-[#71717a]'>Sirajgonj,Bangladesh</span>
                               </div>
                               </div>
                             
                          
                          <div>
                            <p className='text-sm text-[#71717a]'>Passionate Web Developer skilled in React.js, Tailwind CSS, Express.js, and MongoDB. I build responsive, user-friendly full-stack applications and love turning ideas into clean, functional designs. Actively learning and seeking real-world projects to grow and collaborate</p>
                          </div>
                          
                          <div className='flex gap-4'>
                            <Button ><Download/><a href='/dummy.pdf 'download>resume</a></Button>
                            <Button  variant='outline'><Github/></Button>
                            <Button variant='outline'><Linkedin></Linkedin></Button>
                            <Button variant='outline'><MdEmail></MdEmail></Button>
                          </div>
                    
                </div>
                    <div className='p-4'>
                       <img className='h-60'  src="https://scontent.fdac198-1.fna.fbcdn.net/v/t39.30808-1/343098875_6094255477317500_6187422470674110549_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE7sWvnH0Vi3FtjcSNKj8XUic6ckIXmWAaJzpyQheZYBp5sDDbrU8azllUief6qqRX13M7wwyL-4z86nCUXy2Fq&_nc_ohc=vCx5aww27z4Q7kNvwHHwbyx&_nc_oc=AdnUjZcnfk41dRKSaolDuvpbFVWuLMav7asDpfyNaTfS4xmPUI3IQY5tgY45bs0E2lc&_nc_zt=24&_nc_ht=scontent.fdac198-1.fna&_nc_gid=-auiQ4Khaft8l3hHUA7RgQ&oh=00_AfO2QZ6OmoU4Bqr_PnWCiaI_lbAESPCcCs07Z3iSECj2Jg&oe=6865706E" alt="" />
                    </div>
              </div>
        </div>
    );
};

export default Hero;