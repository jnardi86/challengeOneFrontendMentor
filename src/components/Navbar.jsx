import { useState } from 'react'
import burgerMenu from '../assets/icon-hamburger.svg'

const Navbar = () => {

    const [menuClicked, setMenuClicked] = useState(false);

    const handleClick = () => {
        setMenuClicked(!menuClicked);
    }



  return (

    <nav className='sm:h-[24px]'>
        <ul className={` ${menuClicked ? 'flex' : 'hidden'} bg-white w-[329px] h-[305px] py-[39px] absolute left-0 right-0 mx-auto top-[106px] flex-col items-center place-content-around after:content-[""] after:absolute after:top-[-24px] after:right-0 after:border-[12px] after:border-t-transparent after:border-b-white after:border-r-white after:border-l-transparent text-dark-grayish-blue text-xl z-10
        
        sm:flex sm:after:hidden sm:bg-transparent sm:flex-row sm:top-0 sm:w-[400px] sm:h-full sm:py-0 sm:mt-0 sm:relative sm:text-white sm:text-sm
        `}>
            <li className='mt-5 cursor-pointer sm:mt-0 sm:ml-4'>About</li>  
            <li className='mt-5 cursor-pointer sm:mt-0 sm:ml-4'>Services</li>
            <li className='mt-5 cursor-pointer sm:mt-0 sm:ml-4'>Projects</li>
            <li className='mt-5 cursor-pointer bg-Yellow w-[140px] h-[56px] grid place-content-center rounded-full font-Fraunces text-very-dark-desaturated-blue sm:h-[24px] sm:mt-0 sm:ml-4 sm:w-[100px] sm:py-2 uppercase sm:bg-White sm:hover:bg-opacity-30 sm:hover:text-White'>Contact</li>
        </ul>
        <div className='cursor-pointer sm:hidden' onClick={handleClick}>
            <img src={burgerMenu} alt="Menu Hamburguer"/>
        </div>
    </nav>
  )
}

export default Navbar