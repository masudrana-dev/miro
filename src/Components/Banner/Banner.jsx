import { MdArrowRightAlt } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { MdOutlineStarHalf } from "react-icons/md";
import img from '../../../public/images/Banner.png'
import img1 from '../../../public/images/getApp.png'

const Banner = () => {
    return (
        <section className="max-w-container mx-auto my-20 px-10 sm:md:px-32">
            <div className="sm:md:flex justify-between font-inter ">
                <div className="banner-left">
                    {/* banner text  */}
                    <h1 className="w-72 sm:md:w-[375px] text-[35px] sm:md:text-[48px] pb-4">Take ideas from <br className="none sm:md:break" />better to best</h1>
                    <h2 className="text-[18px] text-center sm:md:text-left">Miro is your teams visual platfomr to connect, <br />collerborate and create - together</h2>
                    {/* banner text  */}

                    <div className="banner-input pt-8">
                        <input className="w-[300px] sm:md:w-[450px] py-3 pl-4 mb-3 border border-gray-200 rounded-[100px]" type="email" placeholder="Enter your work email" />
                        <button className="border border-[#4262FF] rounded-[100px]  w-[300px] sm:md:w-[450px] py-3 bg-[#4262FF] text-white transition hover:bg-white hover:text-black flex items-center justify-center ">Sign Up Free <i className="ml-1"><MdArrowRightAlt /></i></button>
                    </div>
                    <p className="text-gray-400 pt-2">Colleborate with your team within minutes</p>

                    {/* banner box  */}
                    <div className="banner-left-box flex items-center mt-5 sm:md:mt-10 w-64 sm:md:w-96 h-16 border border-zinc-100 bg-zinc-100 rounded-lg">
                        <div className="box-text pl-2">
                            <p className="flex text-[22px] text-yellow-400"><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /> <MdOutlineStarHalf /> </p>
                            <p className="text-[12px]">Based on 5149+ reviews:</p>
                        </div>
                        <div className="box-img">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                    {/* banner box  */}
                </div>

                <div className="banner-right">
                    <div className="banner-img">
                        <img src={img} alt="" className="w-50 h-50 mt-5 sm:md:mt-0 sm:md:w-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
