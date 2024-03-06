import { useState } from 'react'
import img from '../../../public/images/Built For Teams.png'
import img1 from '../../../public/images/Diamond.png'
import img2 from '../../../public/images/xd.png'
import img3 from '../../../public/images/figma.png'
import img4 from '../../../public/images/N.png'
import { MdArrowRightAlt } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

import "./BuiltTeam.css"


const BulitTeam = () => {
    const [toggle, setToggle] = useState(1)

    function updateToggle(id) {
        setToggle(id)
    }
    return (
        <section className="max-w-container mx-auto  px-32 h-[830px] py-32">
            <div>
                <h1>Built for the way you work</h1>
                <ul className="grid grid-cols-2 gap-2  sm:md:grid-rows-0 sm:md:grid-cols-7 cursor-pointer pt-5 " >
                    <li className='border border-gray-300 px-3 py-3 rounded-[100px] text-center' onClick={() => updateToggle(1)}> UX Design</li>
                    <li className='border border-gray-300 px-3 py-3 rounded-[100px] text-center' onClick={() => updateToggle(2)}> Marketing</li>
                    <li className='border border-gray-300 px-3 py-3 rounded-[100px] text-center' onClick={() => updateToggle(3)}> Product </li>
                    <li className='border border-gray-300 px-3 py-3 rounded-[100px] text-center' onClick={() => updateToggle(4)}> Engineering</li>
                    <li className='border border-gray-300 px-3 py-3 rounded-[100px] text-center' onClick={() => updateToggle(5)}> Consultants</li>
                    <li className='border border-gray-300 px-3 py-3 rounded-[100px] text-center' onClick={() => updateToggle(6)}> Agile Coaches </li>
                    <li className='border border-gray-300 px-3 py-3 rounded-[100px] text-center' onClick={() => updateToggle(7)}> Sales </li>

                    {/* <li className=" w-[150px] border border-gray-500 hover:border-[#F1F3FD] hover:bg-[#F1F3FD]  py-3 rounded-[100px] transition text-center" onClick={() => updateToggle(2)}>Diagramming</li>
                    <li className=" w-[150px] border border-gray-500 hover:border-[#F1F3FD] hover:bg-[#F1F3FD]  py-3 rounded-[100px] transition text-center" onClick={() => updateToggle(3)}>Meetings & Workshops</li>
                    <li className=" w-[150px] border border-gray-500 hover:border-[#F1F3FD] hover:bg-[#F1F3FD]  py-3 rounded-[100px] transition text-center" onClick={() => updateToggle(4)}>Scum Events</li>
                    <li className=" w-[150px] border border-gray-500 hover:border-[#F1F3FD] hover:bg-[#F1F3FD]  py-3 rounded-[100px] transition text-center" onClick={() => updateToggle(5)}>Mapping</li>
                    <li className=" w-[150px] border border-gray-500 hover:border-[#F1F3FD] hover:bg-[#F1F3FD]  py-3 rounded-[100px] transition text-center" onClick={() => updateToggle(6)}>Research & Design</li>
                    <li className=" w-[150px] border border-gray-500 hover:border-[#F1F3FD] hover:bg-[#F1F3FD]  py-3 rounded-[100px] transition text-center" onClick={() => updateToggle(7)}>Strategic Planning</li> */}

                </ul>
            </div>
            <div className={`${toggle === 1 ? 'show-content' : 'content'}  `}>

                <div className=' brainstorming pt-10'>
                    <div className='pt-10'>
                        <p className='flex items-center pb-5'> <i className='pr-3'><FaCheck /></i>Build low-fi wireframes</p>
                        <p className='flex items-center pb-5 w-[250px]'> <i className='pr-3'><FaCheck /></i>Involve stakeholders in the design process</p>
                        <p className='flex items-center pb-5 w-[250px]'> <i className='pr-3'><FaCheck /></i>Run engaging design workshops</p>
                        <a href="#" className='text-blue-500 flex items-center pt-6'>
                            Learn More
                            <i className='text-blue-500 pl-2'><MdArrowRightAlt /></i>
                        </a>
                        <div className='flex mini-img pt-10'>
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                            <img src={img3} alt="" />
                            <img src={img4} alt="" />
                        </div>
                    </div>
                    <img src={img} alt="" />
                </div>

            </div>
            <div className={toggle === 2 ? 'show-content' : ' content'} >
                <div className='text-center mt-10'>
                    <h1>Marketing</h1>
                </div>
            </div>
            <div className={toggle === 3 ? 'show-content' : 'content'}>
                <div className='text-center mt-10'>
                    <h1>Product</h1>
                </div>
            </div>
            <div className={toggle === 4 ? 'show-content' : 'content'}>
                <div className='text-center mt-10'>
                    <h1>Engineering</h1>
                </div>
            </div>
            <div className={toggle === 5 ? 'show-content' : 'content'}>
                <div className='text-center mt-10'>
                    <h1>Consultants</h1>
                </div>
            </div>
            <div className={toggle === 6 ? 'show-content' : 'content'}>
                <div className='text-center mt-10'>
                    <h1>Agile Coaches</h1>
                </div>
            </div>
            <div className={toggle === 7 ? 'show-content' : 'content'}>
                <div className='text-center mt-10'>
                    <h1>Sales</h1>
                </div>
            </div>

        </section>
    )
}

export default BulitTeam