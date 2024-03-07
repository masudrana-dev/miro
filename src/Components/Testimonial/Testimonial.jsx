import { MdArrowRightAlt } from "react-icons/md";
import img1 from '../../../public/images/vmware.svg.png'
import img2 from '../../../public/images/DocuSign.png'
import img3 from '../../../public/images/frog.svg.png'
import women1 from '../../../public/images/women-1.png'
import women2 from '../../../public/images/women-2.png'
import women3 from '../../../public/images/women-3.png'

const Testimonial = () => {
    return (
        <section className="max-w-container mx-auto pt-56 sm:pt-56 px-2 lg:py-32  lg:px-32 ">
            <div>
                <h1 className="text-[30px] md:text-[30px] lg:text-[48px]  lg:w-full text-center">Loved by the worlds best teams</h1>
                <button className="border border-[#4262FF] rounded-[100px] px-6 lg:px-14 py-3 bg-white transition hover:bg-[#4262FF] hover:text-white text-black flex items-center mx-auto mt-5 ">See all customer stories<i className="ml-1"><MdArrowRightAlt /></i></button>
            </div>

            <div className="md:flex justify-between mt-10">
                <div className="md:w-[260px] lg:w-[360px] lg:h-[460px] p-4 lg:p-6 md:p-6 ">
                    <img src={img1} alt="" />
                    <p className="mt-5 lg:mt-10">“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”</p>
                    <div className="flex mt-5 lg:mt-10">
                        <div><img src={women1} alt="" className="pr-5" /></div>
                        <div className="text-[14px]">
                            <h2>Roxanne Mustafa</h2>
                            <p>Design Team Lead at VMware</p>
                        </div>
                    </div>
                </div>

                <div className=" md:w-[260px]  lg:w-[360px] lg:h-[460px] p-4 lg:p-6 md:p-6 ">
                    <img src={img2} alt="" />
                    <p className="mt-5 lg:mt-10">“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”</p>
                    <div className="flex mt-5 lg:mt-36 xl:mt-28 ">
                        <div><img src={women2} alt="" className="pr-5" /></div>
                        <div className="text-[14px]" >
                            <h2>Roxanne Mustafa</h2>
                            <p>Design Team Lead at VMware</p>
                        </div>
                    </div>
                </div>

                <div className="md:w-[260px] md:h-[260px] lg:w-[360px] lg:h-[460px] p-4 lg:p-6 md:p-6 ">
                    <img src={img3} alt="" />
                    <p className="mt-5 lg:mt-10">“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”</p>
                    <div className="flex mt-5  lg:mt-28">
                        <div><img src={women3} alt="" className="pr-5" /></div>
                        <div className="text-[14px]">
                            <h2>Roxanne Mustafa</h2>
                            <p>Design Team Lead at VMware</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Testimonial