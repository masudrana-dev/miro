import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import img from '../../../public/images/certo-dark-yellow.svg.png'
import './footer.css'
const Footer = () => {
    return (
        <footer className='bg-[#02033B] w-full'>
            <div className='max-w-container mx-auto text-white px-32 pt-24 '>
                <div className="flex">
                    <div className='w-[60%] flex'>
                        <div className='w-[60%]'>
                            <h3 className="text-[26px] font-extrabold ">Scan. Detect. Remove.</h3>
                            <div className="icons flex gap-14 mt-14 ">
                                <FaTwitter className="border border-white rounded-sm bg-white text-black h-10 w-10 p-1" />
                                <FaFacebookF className="border border-white rounded-sm bg-white text-black h-10 w-10 p-1" />
                                <FaYoutube className="border border-white rounded-sm bg-white text-black h-10 w-10 p-1" />
                            </div>
                            <div className="mt-14">
                                <a href="">Privacy Policy</a>
                                <a href="">Privacy Policy</a>
                            </div>
                            <div className="mt-14">
                                <p className="text-white">Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</p>
                                <p className="text-white mt-8">Designed & developed by <a href="#"><u>Bigger Picture</u></a></p>
                            </div>

                        </div>
                        <div className='w-[40%] ml-10'>
                            <h1 className="pb-10">Miro.</h1>
                            <div className="h-[2px] w-[240px] bg-white"></div>
                            <div className=" mt-[60px]">
                                <ul>
                                    <li className="text-[19px] text-yellow-500 font-extrabold pb-[24px]">Iphone</li>
                                    <li className="text-[19px] text-yellow-500 font-extrabold pb-[24px]">Android</li>
                                    <li className="text-[19px] text-yellow-500 font-extrabold pb-[24px]">Help</li>
                                    <li className="text-[19px] text-yellow-500 font-extrabold pb-[24px]">About</li>
                                    <li className="text-[19px] text-yellow-500 font-extrabold pb-[24px]">Insights</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='w-[40%] ml-10'>
                        <div className="relative h-[260px] w-[436px] bg-[#FFC247] rounded-[50px] p-[35px] z-[100]">
                            <h2 className="text-black text-[23px] font-extrabold pb-[21px]">Sign up to our newsletter</h2>
                            <p className="text-[#02033B] pb-[15px]">Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                            <input type="email" placeholder="Email address" className="h-8 w-[300px] rounded-[50px] pl-4" />
                            <button className="absolute top-[178px] right-[102px] h-8 w-20 rounded-s-[50px] bg-black text-white font-bold text-[14px]" dir="rtl">Submit</button>
                            <img src={img} alt="" className="absolute top-[10px] left-[110px] z-[-100]" />
                        </div>
                    </div>
                </div>
                <div className="w-[60%] pt-14">
                    <p className="text-white">Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer