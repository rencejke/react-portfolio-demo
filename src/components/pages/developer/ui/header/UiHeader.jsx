import React from 'react'
import useQueryData from '../../../../custom-hook/useQueryData';
import { StoreContext } from '../../../../../store/StoreContext';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


const UiHeader = () => {


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
  <header className='header bg-[#31363F] py-6 font-regular'>
    <div className="max-w-[1500px] w-full mx-auto px-4 py-1">
    <div className="flex justify-between items-center ">
        <span className='text-[1.4rem]'>Cla<span>rence</span></span>
        
        <ul className='flex items-center gap-7 text-white uppercase font-bold text-[15px]'>
                        <li><Link to="/home">Home</Link></li>
                        <li><HashLink  smooth to="#about">About</HashLink></li>
                        <li><HashLink  smooth to="#experiences">Experiences</HashLink></li>
                        <li><HashLink  smooth to="#portfolio">Portfolio</HashLink></li>
                        <li><HashLink  smooth to="#services">Services</HashLink></li>
                        <li><Link to="/contacts">Contact</Link></li>
        </ul>
        <button className='btn px-4'><Link to="">Let's Talk</Link></button>
    </div>
    </div>
    </header>
   </>
  )
}

export default UiHeader