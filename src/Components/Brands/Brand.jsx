import img1 from '../../../public/images/Walmart_Index_Only.svg.png'
import img2 from '../../../public/images/cisco.png'
import img3 from '../../../public/images/Volvo_Index_Only.svg.png'
import img4 from '../../../public/images/Dilo.png'
import img5 from '../../../public/images/okta.svg.png'

const Brand = () => {
    return (
        <section className='max-w-container mx-auto px-32'>
            <h3 className='text-center pb-10'>Trusted by 45M+ users</h3>
            <div className='flex justify-between items-center '>
                <img className='h-16 w-18' src={img1} alt="" />
                <img className='h-16 w-18' src={img2} alt="" />
                <img className='h-16 w-18' src={img3} alt="" />
                <img className='h-10 w-16' src={img4} alt="" />
                <img className='h-16 w-18' src={img5} alt="" />
            </div>
        </section>
    )
}

export default Brand