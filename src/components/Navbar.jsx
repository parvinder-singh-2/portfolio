import React from 'react';
import logo from '../assets/logo.png';
import { FaLinkedin} from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa';
import { FaSquareXTwitter} from 'react-icons/fa6';
import { FaInstagram} from 'react-icons/fa';



const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-20' src={logo} alt='' />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href= 'https://www.linkedin.com/in/itzparvinder/' ><FaLinkedin /></a>
            <a href= 'https://github.com/parvinder-singh-2' ><FaGithub /></a>
            <a href= 'https://x.com/itzParvinder_' ><FaSquareXTwitter /></a>
            <a href= 'https://www.instagram.com/parvinder_singh_2/' ><FaInstagram /></a>
        </div>
    </nav>
  )
}

export default Navbar