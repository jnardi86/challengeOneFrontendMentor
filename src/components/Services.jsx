import ServicesImg from "./ServicesImg"
import transformMobile from "../assets/mobile/image-transform.jpg"
import transformDesktop from "../assets/desktop/image-transform.jpg"
import standOutMobile from "../assets/mobile/image-stand-out.jpg"
import standOutDesktop from "../assets/desktop/image-stand-out.jpg"
import ServicesText from "./ServicesText"



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
        </section>
    )
}

export default Services