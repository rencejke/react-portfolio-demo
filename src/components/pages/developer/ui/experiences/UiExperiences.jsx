import React from 'react'
import AOS from 'aos';
import { StoreContext } from '../../../../../store/StoreContext';
import useQueryData from '../../../../custom-hook/useQueryData';

// ..
AOS.init();




const UiExperiences = () => {
 
const {store, dispatch} = React.useContext(StoreContext) 
const [info, setInfo] = React.useState(null)
 
const {
  isLoading,
  isFetching,
  error,
  data: exp,
} = useQueryData(
  "/v1/exp",
  "get", // method
  "exp", // key
);

  return (

    <section id='experiences' className='experiences pb-12 '>
    <div className="max-w-[700px] w-full mx-auto px-4 py-1">
      <h4 className='text-center font-thicker text-[2rem] mb-12'>Experiences</h4>
      <div className="wrapper grid grid-cols-3 gap-6">
        
      {exp?.data.map((item, key) => (
        item.exp_is_active === 1 && (
        <div className="item bg-[#31363F]/50 transition-all hover:bg-[#76ABAE]  mx-auto p-12 rounded-md mb-3"
         data-aos={item.exp_image_animation} data-aos-duration="1000">
          <img src={item.exp_image} alt="" className='size-[90px]'/>
        </div>)
        ))}

        </div>
    </div>
  </section>
  )
}

export default UiExperiences