
import logo from "../../../public/images//logo.png"
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdArrowRightAlt } from "react-icons/md";
const Header = () => {
    return (
        <section className="max-w-container mx-auto">
            <div className="flex justify-between mt-8 text-[16px] font-inter ">
                <div className="header-left flex items-center">
                    <div className="mr-6"><img src={logo} alt="logo" /></div>
                    <ul className="flex">
                        <li className="mr-4 "><a href="#" className="flex items-center">Product <i className="ml-1"><IoIosArrowDown /></i></a></li>
                        <li className="mr-4 "><a href="#" className="flex items-center">Solution <i className="ml-1"><IoIosArrowDown /></i></a></li>
                        <li className="mr-4 "><a href="#" className="flex items-center">Resources <i className="ml-1"><IoIosArrowDown /></i></a></li>
                        <li className="mr-4"><a href="#">Enterprise</a></li>
                        <li className="mr-4"><a href="#">Pricing</a></li>
                    </ul>
                </div>
                <div className="header-right ">
                    <ul className="flex items-center">
                        <li className="mr-4 "><a href="#" className="flex items-center"> <i className="mr-1 text-[30px]"><AiOutlineGlobal /></i>EN </a></li>
                        <li className="mr-4"><a href="">Contact Sales</a></li>
                        <li className="mr-4"><a href="">Login</a></li>
                        <li className="mr-4"><a href="">
                            <button className="border border-[#4262FF] rounded-[100px] inline-block px-3 py-3 bg-[#4262FF] text-white flex items-center ">Sign Up Free <i className="ml-1"><MdArrowRightAlt /></i></button>
                        </a></li>
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default Header