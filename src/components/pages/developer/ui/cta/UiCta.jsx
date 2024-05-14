import React from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../../../../store/StoreContext'
import useQueryData from '../../../../custom-hook/useQueryData'

const UiCta = () => {

    const {store, dispatch} = React.useContext(StoreContext) 
    const [info, setInfo] = React.useState(null)
     
    const {
      isLoading,
      isFetching,
      error,
      data: cta,
    } = useQueryData(
      "/v1/cta",
      "get", // method
      "cta", // key
    );
  

  return (
    <section className='cta'>
    
    {cta?.data.map((item, key) => (
      item.cta_is_active === 1 && (
    <div className='text-center bg-[#76ABAE] py-12'>
    <h2 className='font-thick text-3xl'>{item.cta_title}</h2>
    <p className='text-[22px] text-white'>{item.cta_msg}</p>
  <div className='text-center mx-auto'>
  <button className='btn bg-black mt-4 
     hover:bg-transparent border border-black hover:text-black
    
    '><Link>{item.cta_btn_title}</Link></button>
  </div>
    </div>)
        ))}
   </section>
  )
}

export default UiCta