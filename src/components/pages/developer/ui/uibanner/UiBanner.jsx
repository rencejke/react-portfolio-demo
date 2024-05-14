import React from 'react'
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching';
import useQueryData from '../../../../custom-hook/useQueryData';
import { StoreContext } from '../../../../../store/StoreContext';
import { setIsShow } from '../../../../../store/StoreAction';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { BiLogoGmail } from 'react-icons/bi';
import { devBaseImgUrl } from '../../../../helpers/functions-general';

const UiBanner = () => {


  const {store, dispatch} = React.useContext(StoreContext) 
  const [info, setInfo] = React.useState(null)
   
  const {
    isLoading,
    isFetching,
    error,
    data: banner,
  } = useQueryData(
    "/v1/banner",
    "get", // method
    "banner", // key
  );




  return (

    <>
     {isLoading ? <SpinnerFetching /> : ( 
   <div>
          
          {banner?.data.map((item, key) => (
             item.banner_is_active === 1 && (
           <div className="container grid md:grid-cols-2 grid-cols-1 gap-5 font-regular"  key={key}>
          <div className='text self-center' key={key}>
            <h1 className='font-regular text-[25px]' data-aos="fade-right" data-aos-duration="1000">{item.banner_title_1}</h1>
            <h1 className='font-bold font-thicker' data-aos="fade-right" data-aos-delay="700" data-aos-duration="1000">{item.banner_title_2}</h1>
            <p className='w-[80%] text-[18px]' data-aos="fade-right" data-aos-delay="1400" data-aos-duration="1000">{item.banner_description}
            </p>
            <button className='btn mt-5' data-aos="fade-right" data-aos-delay="2100" data-aos-duration="1000"><HashLink smooth to="#portfolio">{item.banner_btn_title}</HashLink></button>
           </div>
        
           <div className='image self-center' data-aos="fade-left"  data-aos-duration="1000">
            <img src={`${devBaseImgUrl}/${item.banner_image}`} alt="" className='size-[86%] object-contain hidden md:block '/>
           </div>

           <div className='absolute  md:right-[31vh] md:bottom-[30vh] top-[50vh]'>
            <ul className='mt-3 flex md:flex-col flex-row gap-5'>
               
               <li><Link className='flex flex-row items-center gap-2 text-[30px] 
               transition-all ease-in hover:text-[#76ABAE]'data-aos="fade-up"
                data-aos-delay="2700" data-aos-duration="1000"><FaFacebook /></Link></li>
               <li><Link className='flex flex-row items-center gap-2 text-[30px]
                transition-all ease-in hover:text-[#76ABAE]' data-aos="fade-up"
                data-aos-delay="2000" data-aos-duration="1000"><FaTwitter /></Link></li>
               <li><Link className='flex flex-row items-center gap-2 text-[30px]
                transition-all ease-in hover:text-[#76ABAE]'data-aos="fade-up"
                data-aos-delay="1300" data-aos-duration="1000"><BiLogoGmail /></Link></li>
               <li><Link className='flex flex-row items-center gap-2 text-[30px]
                transition-all ease-in hover:text-[#76ABAE]' data-aos="fade-up"
                data-aos-delay="700" data-aos-duration="1000"><FaInstagram /></Link></li>
               <li><Link className='flex flex-row items-center gap-2 text-[30px]
                transition-all ease-in hover:text-[#76ABAE]' data-aos="fade-up"
                data-aos-delay="100" data-aos-duration="1000"><FaGithub /></Link></li>
            </ul>
            </div>
            </div>)
          
          ))}
  
        </div>)}
  {/* {store.isShow &&  <ModalProject position="center" info={info}/>} */}
   </>
  )
}

export default UiBanner