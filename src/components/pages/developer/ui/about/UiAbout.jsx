import React from 'react'
import { Link } from 'react-router-dom';
import useQueryData from '../../../../custom-hook/useQueryData';
import { StoreContext } from '../../../../../store/StoreContext';

const UiAbout = () => {
   
    //download resume
    const handleDownloadResume = () => {
      const link = document.createElement('a');
      link.href = '../../resume/resume_clarence.pdf';
      link.download = 'resume_clarence.pdf';
      link.click();
    };

  
  const {store, dispatch} = React.useContext(StoreContext) 
  const [info, setInfo] = React.useState(null)
   
  const {
    isLoading,
    isFetching,
    error,
    data: about,
  } = useQueryData(
    "/v1/about",
    "get", // method
    "about", // key
  );


  return (

    <>
       
       {about?.data.map((item, key) => (
      item.about_is_active === 1 && (
    <div id='about' className='bg-[#222831]  md:pt-[12rem] pt-12' key={key}>
    <div className="container">
    <div className='wrapper grid grid-cols-2 gap-5'>

      <div className='image'>
      <img src={item.about_image} alt="" className='size-[80%] object-contain' data-aos="fade-right" data-aos-duration="1000"/>
      </div>

      <div className='text  text-justify'>
      <h4 className='text-[2rem] font-thicker mb-8' data-aos="fade-left" data-aos-duration="1000">{item.about_title}</h4>
      <p className='w-[70%] text-[18px] font-regular mb-3' data-aos="fade-left" data-aos-delay="700" data-aos-duration="1000">{item.about_description_1}</p>
      <p className='w-[70%] text-[18px] font-regular' data-aos="fade-left" data-aos-delay="1400" data-aos-duration="1000">{item.about_description_2}</p>
       <button className='btn mt-4' data-aos="fade-left" data-aos-delay="2100" data-aos-duration="1000" onClick={handleDownloadResume} ><Link>{item.about_btn_title}</Link></button>
      </div>
    </div>
    </div>
    </div>)
        ))}
    
    </>
  )
}

export default UiAbout