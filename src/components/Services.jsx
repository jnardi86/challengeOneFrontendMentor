import ServicesImg from "./ServicesImg"
import ServicesText from "./ServicesText"
import ServicesImgText from "./ServicesImgText"

import transformMobile from "../assets/mobile/image-transform.jpg"
import transformDesktop from "../assets/desktop/image-transform.jpg"
import standOutMobile from "../assets/mobile/image-stand-out.jpg"
import standOutDesktop from "../assets/desktop/image-stand-out.jpg"
import graphicDesingMobile from "../assets/mobile/image-graphic-design.jpg"
import graphicDesingDesktop from "../assets/desktop/image-graphic-design.jpg"
import photographyMobile from "../assets/mobile/image-photography.jpg"
import photographyDesktop from "../assets/desktop/image-photography.jpg"




const Services = () => {
    return (
        <section className="tablet:grid tablet:grid-cols-2">
            <ServicesImg
                order='order-2'
                imgMobile={transformMobile}
                imgDesktop={transformDesktop}
            />
            <ServicesText
                order='order-1'
                title='Transform your brand'
                text='We are a full-service creative agency specializing in helping brands grow fast. 
                Engage your clients through compelling visuals that do most of the marketing for you.'
                color='bg-Yellow'
            />
            <ServicesImg
                order='order-3'
                imgMobile={standOutMobile}
                imgDesktop={standOutDesktop}
            />
            <ServicesText
                order='order-4'
                title='Stand out to the right audience'
                text='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
                color='bg-Soft-red'
            />
            <ServicesImgText
                order='order-5'
                imgMobile={graphicDesingMobile}
                imgDesktop={graphicDesingDesktop}
                title='Graphic design '
                text='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'

            />
            <ServicesImgText
                order='order-6'
                imgMobile={photographyMobile}
                imgDesktop={photographyDesktop}
                title='Photography'
                text='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
            />
        </section>
    )
}

export default Services