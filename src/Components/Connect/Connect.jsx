import img from '../../../public/images/Connect.png'
import { MdArrowRightAlt } from "react-icons/md";
const Connect = () => {
    return (
        <section className="max-w-container mx-auto pb-20 px-10 sm:md:px-32">
            <div className='sm:md:flex items-center justify-between'>
                <div className="connect-left">
                    <img src={img} alt="" />
                </div>
                <div className="connect-right w-[300px] sm:md:w-[450px]">
                    <h1 className='text-[30px] sm:md:text-[48px]  sm:md:w-[450px]'>Connect <br />
                        your tools, <br />
                        close your tabs</h1>
                    <p>Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.</p>
                    <a href="#" className='flex items-center text-blue-400 pt-11'><u>Learn more</u> <i className='ml-1'><MdArrowRightAlt /></i></a>
                </div>
            </div>
        </section>
    )
}

export default Connect