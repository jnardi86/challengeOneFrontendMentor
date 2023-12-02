import ServicesImg from "./ServicesImg"

import milkBottlesMobile from "../assets/mobile/image-gallery-milkbottles.jpg"
import milkBottlesDesktop from "../assets/desktop/image-gallery-milkbottles.jpg"
import orangeMobile from "../assets/mobile/image-gallery-orange.jpg"
import orangeDesktop from "../assets/desktop/image-gallery-orange.jpg"
import coneMobile from "../assets/mobile/image-gallery-cone.jpg"
import coneDesktop from "../assets/desktop/image-gallery-cone.jpg"
import sugarCubesMobile from "../assets/mobile/image-gallery-sugar-cubes.jpg"
import sugarCubesDesktop from "../assets/desktop/image-gallery-sugar-cubes.jpg"



const Gallery = () => {
    return (
        <div className="grid grid-cols-2 sm:flex">
            <ServicesImg
                imgMobile={milkBottlesMobile}
                imgDesktop={milkBottlesDesktop}
            />
            <ServicesImg
                imgMobile={orangeMobile}
                imgDesktop={orangeDesktop}
            />
            <ServicesImg
                imgMobile={coneMobile}
                imgDesktop={coneDesktop}
            />
            <ServicesImg
                imgMobile={sugarCubesMobile}
                imgDesktop={sugarCubesDesktop}
            />
        </div>
    )
}

export default Gallery