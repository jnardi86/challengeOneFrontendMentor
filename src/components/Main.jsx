import imgMobile from '../assets/mobile/image-header.jpg'
import imgDesktop from '../assets/desktop/image-header.jpg'
import arrow from '../assets/icon-arrow-down.svg'

const Main = () => {
  return (
    <main className=''>
        <picture>
            <source media='(max-width:640px)' srcSet={imgMobile}/>
            <source media='(min-width:641px)' srcSet={imgDesktop}/>
            <img src={imgMobile} alt='bg-header'/>
        </picture>
        <p className='absolute top-[144px] w-[327px] left-0 right-0 mx-auto font-Fraunces text-[40px] uppercase tracking-[6.25px] text-White text-center sm:w-[600px]'>We are creatives</p>
        <img className='absolute top-[294px] left-0 right-0 mx-auto sm:top-[220px]' src={arrow} alt="Arrow Down" />
    </main>
  )
}

export default Main