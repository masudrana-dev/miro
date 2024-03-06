import menu from '../../../public/images/menu.png'
import close from '../../../public/images/close.png'
import logo from "../../../public/images/logo.png"
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdArrowRightAlt } from "react-icons/md";
import { useState } from 'react';

const Header = () => {
    const [toggle, setToggle] = useState(false)

    // function updateToggle() {
    //     setToggle(true)
    // }

    return (
        <section className=''>

            <div className="  pl-5 md:pl-0 max-w-container mx-auto  ">
                <div className="flex justify-between items-center mt-8 text-[16px] font-inter pr-5 md:pr-0 md:px-32 ">
                    <div className='header-left md:flex items-center'>
                        <div className="mr-6"><img src={logo} alt="logo" className='w-20 h-20 object-contain' /></div>
                        <ul className={`${toggle == true ? " " : "hidden"}  md:block md:flex`}>
                            <li className="mr-4 "><a href="#" className="flex items-center">Product <i className="ml-1"><IoIosArrowDown /></i></a></li>
                            <li className="mr-4 "><a href="#" className="flex items-center">Solution <i className="ml-1"><IoIosArrowDown /></i></a></li>
                            <li className="mr-4 "><a href="#" className="flex items-center">Resources <i className="ml-1"><IoIosArrowDown /></i></a></li>
                            <li className="mr-4"><a href="#">Enterprise</a></li>
                            <li className="mr-4"><a href="#">Pricing</a></li>
                        </ul>
                    </div>
                    <div className="header-right ">
                        <ul className={`${toggle == true ? " " : "hidden"} items-center  md:block md:flex`}>
                            <li className="mr-4 "><a href="#" className="flex items-center"> <i className="mr-1 text-[30px]"><AiOutlineGlobal /></i>EN </a></li>
                            <li className="mr-4"><a href="">Contact Sales</a></li>
                            <li className="mr-4"><a href="">Login</a></li>
                            <li className="mr-4"><a href="">
                                <button className="border border-[#4262FF] rounded-[100px] px-3 py-3 bg-[#4262FF] transition hover:bg-white hover:text-black text-white flex items-center mt-5 md:mt-0 ">Sign Up Free <i className="ml-1"><MdArrowRightAlt /></i></button>
                            </a></li>
                        </ul>
                    </div>
                    <div>
                        <div className='' >
                            <img src={toggle ? close : menu} alt="" className={'md:hidden w-9 h-9 cursor-pointer'} onClick={() => setToggle(!toggle)} />
                        </div>
                        {/* <div >
                            <img src={close} alt="" className={'absolute top-0 left-0 md:hidden w-9 h-9 cursor-pointer'} onClick={() => setToggle(!toggle)} />
                        </div> */}
                    </div>

                </div>
            </div>

            {/* humburg menu  */}
            {/* <div className='sm:hidden flex flex-1 justify-end items-center '>
                <img
                    src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
                <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[144px] z-10 rounded-xl`}>
                    <ul className=' list-none  flex  justify-end items-start  flex-col gap-2'>
                        {navLinks.map((link) => (
                            // active portion 
                            <li
                                key={link.id}
                                className={`${active === link.title ?
                                    'text-white' : "text-secondary"
                                    } text-[16px] font-medium font-poppins cursor-pointer`}
                                onClick={() => {
                                    // afer clicking menu the menu portion will be hidden
                                    setToggle(!toggle);
                                    // afer clicking menu the menu portion will be hidden 
                                    setActive(link.title);
                                }}
                            >
                                <a href={`${link.id}`}> {link.title}</a>
                            </li>
                            // active portion 
                        ))}
                    </ul>
                </div>

            </div> */}

            {/*  */}
            {/* humburg menu  */}
            <hr className="mt-4 w-full" />
        </section>
        // <div className='max-w-container mx-auto'>
        //     <nav className={`  flex items-center py-5 fixed top-0 z-20 bg-primary`}>
        //         <div className=' flex justify-between items-center '>

        //             <img src={logo} alt="logo" className=' object-contain' />

        //             <ul className=' list-none hidden sm:flex flex-row gap-10'>
        //                 {navLinks.map((link) => (
        //                     // active portion 
        //                     <li
        //                         key={link.id}
        //                         className={`${active === link.title ?
        //                             "text-blue-500" : "text-black"
        //                             } hover:text-white text-[18px] font-medium cursor-pointer`}
        //                         onClick={() => setActive(link.title)}
        //                     >
        //                         <a href={`#${link.id}`}> {link.title}</a>
        //                     </li>
        //                     // active portion 
        //                 ))}
        //             </ul>

        //             {/* humburg menu  */}
        //             <div className='sm:hidden flex flex-1 justify-end items-center '>
        //                 <img
        //                     src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
        //                 <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[144px] z-10 rounded-xl`}>
        //                     <ul className=' list-none  flex  justify-end items-start  flex-col gap-2'>
        //                         {navLinks.map((link) => (
        //                             // active portion 
        //                             <li
        //                                 key={link.id}
        //                                 className={`${active === link.title ?
        //                                     'text-white' : "text-secondary"
        //                                     } text-[16px] font-medium font-poppins cursor-pointer`}
        //                                 onClick={() => {
        //                                     // afer clicking menu the menu portion will be hidden
        //                                     setToggle(!toggle);
        //                                     // afer clicking menu the menu portion will be hidden 
        //                                     setActive(link.title);
        //                                 }}
        //                             >
        //                                 <a href={`${link.id}`}> {link.title}</a>
        //                             </li>
        //                             // active portion 
        //                         ))}
        //                     </ul>
        //                 </div>
        //                 {/* humburg menu  */}

        //             </div>
        //         </div>
        //     </nav>
        // </div>
    )
}

export default Header