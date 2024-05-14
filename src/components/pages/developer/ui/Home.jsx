import React, { useEffect, useState } from 'react'
import UiBanner from './uibanner/UiBanner';
import UiHeader from './header/UiHeader';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import UiAbout from './about/UiAbout';
import UiExperiences from './experiences/UiExperiences';
import UiProjects from './project/UiProjects';
import UiCta from './cta/UiCta';
import UiFooter from './footer/UiFooter';

AOS.init();

const Home = () => {
  
  const [home, setHome] = useState('')
    const [showImg, setShowImg] = useState(true);
    useEffect (() => {

        setTimeout(() => {
            setShowImg(false);
            setHome(
               <Home />
            )
            }, 3000)

        })

  return (
<>
   

           <div className='bg-[#222831] h-[100dvh] relative'>
            {
                showImg ? (<div className='flex justify-center items-center mx-auto pt-[23rem]'>
                
                <img src="../../loading2.svg" className='size-[130px]' alt="" /> 

                </div> ) : (   <div className='bg-[#222831] text-white'>
    <div className={`banner h-[100dvh] relative isolate`}>
       
       <div className="backdrop absolute top-0 legft-0 h-full w-full -z-10"></div>
        
        <UiHeader />
        <UiBanner />
        </div>
        <UiAbout />
        <UiExperiences/>
        <UiProjects/>
        <UiCta/>
        <UiFooter/>
    </div> )
     }
         
      
    

 
    </div>
</>
  )
}

export default Home