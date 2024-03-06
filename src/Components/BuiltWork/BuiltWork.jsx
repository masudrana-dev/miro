import { useState } from 'react'
import img from '../../../public/images/Built Your Work.png'
import { MdArrowRightAlt } from "react-icons/md";
import "./BuiltWork.css"


const BuiltWork = () => {
    const [toggle, setToggle] = useState(1)

    function updateToggle(id) {
        setToggle(id)
    }
    return (
        <section className="max-w-container mx-auto px-24 h-[700px]">
            <div>
                <h1>Built for the way you work</h1>
                <ul className="grid grid-cols-2 gap-2  sm:md:grid-rows-0 sm:md:grid-cols-7 cursor-pointer pt-5 " >
                    <li className='border border-gray-300 px-6 py-3 rounded-[100px] text-center' onClick={() => updateToggle(1)}> Brainstorming</li>
                    <li className='border border-gray-300 px-6 py-3 rounded-[100px] text-center' onClick={() => updateToggle(2)}> Diagramming</li>
                    <li className='border border-gray-300 px-6 py-3 rounded-[100px] text-center' onClick={() => updateToggle(3)}> Meetings </li>
                    <li className='border border-gray-300 px-6 py-3 rounded-[100px] text-center' onClick={() => updateToggle(4)}> Scum Events</li>
                    <li className='border border-gray-300 px-6 py-3 rounded-[100px] text-center' onClick={() => updateToggle(5)}> Mapping</li>
                    <li className='border border-gray-300 px-6 py-3 rounded-[100px] text-center' onClick={() => updateToggle(6)}> Research </li>
                    <li className='border border-gray-300 px-6 py-3 rounded-[100px] text-center' onClick={() => updateToggle(7)}> Strategic </li>

                    {/* <li className=" w-[150px] border border-gray-500 hover:border-[#F1F3FD] hover:bg-[#F1F3FD]  py-3 rounded-[100px] transition text-center" onClick={() => updateToggle(2)}>Diagramming</li>
                    <li className=" w-[150px] border border-gray-500 hover:border-[#F1F3FD] hover:bg-[#F1F3FD]  py-3 rounded-[100px] transition text-center" onClick={() => updateToggle(3)}>Meetings & Workshops</li>
                    <li className=" w-[150px] border border-gray-500 hover:border-[#F1F3FD] hover:bg-[#F1F3FD]  py-3 rounded-[100px] transition text-center" onClick={() => updateToggle(4)}>Scum Events</li>
                    <li className=" w-[150px] border border-gray-500 hover:border-[#F1F3FD] hover:bg-[#F1F3FD]  py-3 rounded-[100px] transition text-center" onClick={() => updateToggle(5)}>Mapping</li>
                    <li className=" w-[150px] border border-gray-500 hover:border-[#F1F3FD] hover:bg-[#F1F3FD]  py-3 rounded-[100px] transition text-center" onClick={() => updateToggle(6)}>Research & Design</li>
                    <li className=" w-[150px] border border-gray-500 hover:border-[#F1F3FD] hover:bg-[#F1F3FD]  py-3 rounded-[100px] transition text-center" onClick={() => updateToggle(7)}>Strategic Planning</li> */}

                </ul>
            </div>
            <div className={`${toggle === 1 ? 'show-content' : 'content'}  `}>

                <div className='brainstorming pt-10'>
                    <div>
                        <h2 className='pb-5 pt-5 text-xl'>Brainstorming</h2>
                        <p className='pr-0 sm:md:pr-48 '>
                            Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.</p>
                        <a href="#" className='text-blue-500 flex items-center pt-6'>
                            Learn More
                            <i className='text-blue-500 pl-2'><MdArrowRightAlt /></i>
                        </a>
                    </div>
                    <img src={img} alt="" />
                </div>

            </div>
            <div className={toggle === 2 ? 'show-content' : ' content'} >
                <div className='text-center mt-10'>
                    <h1>Diagramming</h1>
                </div>
            </div>
            <div className={toggle === 3 ? 'show-content' : 'content'}>
                <div className='text-center mt-10'>
                    <h1>Meetings & Workshops</h1>
                </div>
            </div>
            <div className={toggle === 4 ? 'show-content' : 'content'}>
                <div className='text-center mt-10'>
                    <h1>Scum Events</h1>
                </div>
            </div>
            <div className={toggle === 5 ? 'show-content' : 'content'}>
                <div className='text-center mt-10'>
                    <h1>Mapping</h1>
                </div>
            </div>
            <div className={toggle === 6 ? 'show-content' : 'content'}>
                <div className='text-center mt-10'>
                    <h1>Research & Design</h1>
                </div>
            </div>
            <div className={toggle === 7 ? 'show-content' : 'content'}>
                <div className='text-center mt-10'>
                    <h1>Strategic Planning</h1>
                </div>
            </div>

        </section>
    )
}

export default BuiltWork