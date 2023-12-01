

const ServicesText = ({ title, text, color, order }) => {
  return (
    <div className={`flex flex-col place-content-around text-center h-[437px] py-6 tablet:h-auto ${order} lg:px-[65px] desktop:text-left desktop:pl-[165px] desktop:py-[140px] desktop:pr-[]105px`}>
      <h2 className="font-Fraunces text-[2rem] font-black tablet:text-[1.25rem] lg:text-[2.5rem] desktop:leading-tight">{title}</h2>
      <p className="font-Barlow text-very-dark-grayish-blue text-[1.125rem] leading-[1.875rem] px-[24px] tablet:text-[0.8rem] tablet:leading-[1.5rem] lg:text-[18px] ">{text}</p>
      <div className="relative">
        <button className="uppercase font-Fraunces">Learn more</button>
        <div className={`w-[137px] h-[10px] ${color} rounded-full absolute left-0 right-0 mx-auto bottom-0 -z-10 bg-opacity-25 desktop:mx-0 desktop:left-[-10px]  `} ></div>
      </div>

    </div>
  )
}

export default ServicesText