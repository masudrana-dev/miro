import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import img from '../../../public/images/certo-dark-yellow.svg.png'
import './footer.css'
const Footer = () => {
    return (
        <footer className='bg-[#02033B]  w-full'>
            <div className='max-w-container mx-auto text-white px-10 lg:px-18 xl:px-32  pt-10 lg:pt-24 '>
                <div className="lg:flex">
                    <div className='lg:w-[60%] sm:flex lg:flex'>
                        <div className='lg:w-[60%]'>
                            <h3 className="text-[26px] font-extrabold ">Scan. Detect. Remove.</h3>
                            <div className="icons flex gap-14 mt-5 lg:mt-14 ">
                                <FaTwitter className="border border-white rounded-sm bg-white text-black h-10 w-10 p-1" />
                                <FaFacebookF className="border border-white rounded-sm bg-white text-black h-10 w-10 p-1" />
                                <FaYoutube className="border border-white rounded-sm bg-white text-black h-10 w-10 p-1" />
                            </div>
                            <div className="mt-5 lg:mt-14">
                                <a href="">Privacy Policy</a>
                                <a href="">Privacy Policy</a>
                            </div>
                            <div className="mt-4 lg:mt-14">
                                <p className="text-white">Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</p>
                                <p className="text-white mt-8">Designed & developed by <a href="#"><u>Bigger Picture</u></a></p>
                            </div>

                        </div>
                        <div className='lg:w-[40%] '>
                            <h1 className=" pb-5 lg:pb-10">Miro.</h1>
                            <div className="h-[2px] w-[240px] bg-white"></div>
                            <div className="pl-5 lg:pl-10 mt-5 lg:mt-[60px]">
                                <div className=" flex items-center pb-4">
                                    <div className="h-1 w-6 mr-3 bg-yellow-500"></div>
                                    <p className="text-[19px] font-extrabold text-yellow-500">Iphone   </p>
                                </div>
                                <div className="flex  items-center pb-4">
                                    <div className="h-1 w-6 mr-3 bg-yellow-500"></div>
                                    <p className="text-[19px] font-extrabold text-yellow-500">Android   </p>
                                </div>
                                <div className="flex   items-center pb-4">
                                    <div className="h-1 w-6 mr-3 bg-yellow-500"></div>
                                    <p className="text-[19px] font-extrabold text-yellow-500">Help   </p>
                                </div>
                                <div className="flex   items-center pb-4">
                                    <div className="h-1 w-6 mr-3 bg-yellow-500"></div>
                                    <p className="text-[19px] font-extrabold text-yellow-500">About   </p>
                                </div>
                                <div className="flex   items-center pb-4">
                                    <div className="h-1 w-6 mr-3 bg-yellow-500"></div>
                                    <p className="text-[19px] font-extrabold text-yellow-500">Insights   </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[40%] lg:ml-10'>
                        <div className="relative h-[230px] w-[300px] lg:w-[295px] sm:w-[450px] sm:mx-auto lg:h-[260px] lg:w-[436px] bg-[#FFC247] rounded-[50px] p-5 lg:p-[35px] z-[100]">
                            <h2 className="text-black text-xl md:text-[23px] lg:text-[18px] font-extrabold pb-[21px]">Sign up to our newsletter</h2>
                            <p className="text-[#02033B] pb-[15px]">Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                            <input type="email" placeholder="Email address" className="h-8 sm:w-[350px] md:w-[300px]  lg:w-[200px] rounded-[50px] pl-4" />
                            <button className="absolute md:top-[171px] right-[44px] sm:right-[81px] md:right-[102px] lg:top-[195px] lg:right-[60px] h-8 w-20 rounded-s-[50px] bg-black text-white font-bold text-[14px]" dir="rtl">Submit</button>
                            <img src={img} alt="" className="absolute top-[10px] left-[70px] lg:left-[110px] z-[-100] h-52 " />
                        </div>
                    </div>
                </div>
                <div className="w-[60%] pt-14 hidden md:block ">
                    <p className="text-white">Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer