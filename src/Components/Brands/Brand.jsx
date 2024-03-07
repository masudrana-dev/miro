import img1 from '../../../public/images/Walmart_Index_Only.svg.png'
import img2 from '../../../public/images/cisco.png'
import img3 from '../../../public/images/Volvo_Index_Only.svg.png'
import img4 from '../../../public/images/Dilo.png'
import img5 from '../../../public/images/okta.svg.png'

const Brand = () => {
    return (
        <section className='max-w-container mx-auto px-10 sm:px-20 md:px-32'>
            <h3 className='text-center pb-10'>Trusted by 45M+ users</h3>
            <div className=' grid grid-cols-1 sm:grid-cols-2  text-center mx-auto md:mx-0 md:flex md:justify-between md:items-center '>
                <img className=' h-18 w-18 md:h-16 md:w-18 mx-auto' src={img1} alt="" />
                <img className=' h-16 w-16 md:h-16 md:w-18 mx-auto' src={img2} alt="" />
                <img className=' h-18 w-18 md:h-16 md:w-18 mx-auto' src={img3} alt="" />
                <img className=' h-18 w-18 md:h-10 md:w-16 mx-auto' src={img4} alt="" />
                <img className=' h-18 w-18 md:h-16 md:w-18 mx-auto' src={img5} alt="" />
            </div>
        </section>
    )
}

export default Brand