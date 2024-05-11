import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import Logo from './svg/Logo';
import { NavLink } from 'react-router-dom';


const Navigation = () => {

  const [activeLink, setActiveLink] = React.useState('');
  

  const handleLinkClick = (link) => {
    setActiveLink(() => link);
  };

  return (
    <aside className='px-4 py-6 w-[250px] text-primary h-screen border-r border-line'>
      <div className='flex items-center gap-4'>
        <Logo/>
        <h1 className='mb-0'>School</h1>
      </div>
      
  
      <ul className='nav'>
      <li className={`nav-link ${activeLink === '/portfolio' ? 'active' : ''}`}>
          <Link to="/portfolio" onClick={() => handleLinkClick('/portfolio')}><MdOutlineDashboard />Portfolio</Link>
        </li>
        <li className={`nav-link ${activeLink === '/banner' ? 'active' : ''}`}>
          <Link to="/banner" onClick={() => handleLinkClick('/banner')}><MdOutlineDashboard />Banner</Link>
        </li>
        <li className={`nav-link ${activeLink === '/about' ? 'active' : ''}`}>
          <Link to="/about" onClick={() => handleLinkClick('/about')}><MdOutlineDashboard />About</Link>
        </li>

        <li className={`nav-link ${activeLink === '/experience' ? 'active' : ''}`}>
          <Link to="/experience" onClick={() => handleLinkClick('/experience')}><MdOutlineDashboard />Experience</Link>
        </li>

     
        <li className='nav-link'><Link to="#"><MdOutlineDashboard />Attendance</Link></li>
        <li className='nav-link'><Link to="#"><MdOutlineDashboard />Settings</Link></li>
      </ul>
    </aside>
  )
}

export default Navigation
