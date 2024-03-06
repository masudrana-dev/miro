import img from '../../../public/images/Together.png'
import { MdArrowRightAlt } from "react-icons/md";

const WorkTogether = () => {
    return (
        <section className="max-w-container mx-auto px-10 sm:md:px-32 pb-20">
            <div className='sm:md:flex justify-between items-center'>
                <div className="workTogether-left w-[300px] sm:md:lg:w-[450px]">
                    <h1 className=' text-[30px] sm:md:text-[48px] sm:md:w-[450px] '>Work together, <br /> wherever you work</h1>
                    <p>In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
                    <a href="#" className='flex items-center text-blue-400 pt-2 sm:md:pt-11'><u>Learn more</u> <i className='ml-1'><MdArrowRightAlt /></i></a>
                </div>
                <div className="workTogether-right">
                    <img src={img} alt="" />
                </div>
            </div>
        </section>
    )
}

export default WorkTogether