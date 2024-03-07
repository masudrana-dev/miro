import img from '../../../public/images/section.png'
import { MdArrowRightAlt } from 'react-icons/md'
const WorkWay = () => {
    return (
        <section className="max-w-container mx-auto pb-20 px-10 sm:md:px-48">
            <div className='relative'>
                <img src={img} alt="" />
            </div>
            <div className='absolute md:top-[325%] md:left-[55%] text-center '>
                <h2 className=' text-[12px] md:text-[18px] lg:text-[18px] font-bold mb-2'>The Ways We Work</h2>
                <p className=''>How has our relationship with work changed?</p>
                <div className="btn flex justify-center mt-2">
                    <button className="border border-[#4262FF] rounded-[100px] px-2 py-2 sm:px-5 sm:py-2  md:px-7 md:py-3  bg-[#4262FF] transition hover:bg-white hover:text-black text-white flex items-center ">View the report<i className="ml-1"><MdArrowRightAlt /></i></button>
                </div>
            </div>
        </section>
    )
}

export default WorkWay