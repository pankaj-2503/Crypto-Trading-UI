import React from 'react';

//importing
import Logo from '../assets/img/logo.svg';
// import Density Logo from '../assets/img/MainLogo.png'
import Nav from './Nav';
import AccountBtn from './AccountBtns';

//import icons
import {CgMenuRight} from 'react-icons/cg';


const Header = ({setnavMobile}) => {
  return (
    <header className='py-[30px] lg:pt-[60px]'  data-aos='fade-down' data-aos-delay='900' data-aos-duration='2000'>
      <div className='container mx-auto flex items-center justify-between'>
        {/* {logo} */}
        <a href='#'><img src={Logo} alt=''></img></a>
        {/* {nav and buttons} */}
        <div className='hidden lg:flex gap-x-[55px]'>
          <Nav/>
          <AccountBtn/>
        </div>
        {/* {open nav btn} */}
        <div onClick={()=>setnavMobile(true)} className='lg:hidden cursor-pointer'>
          <CgMenuRight className='text-2xl'/>
        </div>

      </div>
    </header>

  );
};

export default Header;
