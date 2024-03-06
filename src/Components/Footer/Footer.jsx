import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import './footer.css'
const Footer = () => {
    return (
        <footer className='bg-[#02033B] w-full'>
            <div className='max-w-container mx-auto text-white px-32 pt-24 '>
                <div className='w-[60%]'>
                    <div className='w-[60%]'>
                        <h3 className="text-[26px] font-bold ">Scan. Detect. Remove.</h3>
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
                            <p className="text-white mt-8">Designed & developed by Bigger Picture</p>
                        </div>

                    </div>
                    <div className='w-[40%]'></div>
                </div>
                <div className='w-[40%]'></div>
            </div>
        </footer>
    )
}

export default Footer