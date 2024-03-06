import { MdArrowRightAlt } from "react-icons/md";
import img1 from '../../../public/images/vmware.svg.png'
import img2 from '../../../public/images/DocuSign.png'
import img3 from '../../../public/images/frog.svg.png'
import women1 from '../../../public/images/women-1.png'
import women2 from '../../../public/images/women-2.png'
import women3 from '../../../public/images/women-3.png'

const Testimonial = () => {
    return (
        <section className="max-w-container mx-auto py-32 px-32 ">
            <div>
                <h1 className="text-center">Loved by the worlds best teams</h1>
                <button className="border border-[#4262FF] rounded-[100px] px-14 py-3 bg-white transition hover:bg-[#4262FF] hover:text-white text-black flex items-center mx-auto mt-5 ">See all customer stories<i className="ml-1"><MdArrowRightAlt /></i></button>
            </div>

            <div className="flex justify-between mt-10">
                <div className="w-[360px] h-[460px] p-6 ">
                    <img src={img1} alt="" />
                    <p className="mt-10">“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”</p>
                    <div className="flex mt-10">
                        <div><img src={women1} alt="" className="pr-5" /></div>
                        <div className="text-[14px]">
                            <h2>Roxanne Mustafa</h2>
                            <p>Design Team Lead at VMware</p>
                        </div>
                    </div>
                </div>

                <div className="w-[360px] h-[460px] p-10 ">
                    <img src={img2} alt="" />
                    <p className="mt-10">“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”</p>
                    <div className="flex mt-20">
                        <div><img src={women2} alt="" className="pr-5" /></div>
                        <div className="text-[14px]" >
                            <h2>Roxanne Mustafa</h2>
                            <p>Design Team Lead at VMware</p>
                        </div>
                    </div>
                </div>

                <div className="w-[360px] h-[460px] p-6 ">
                    <img src={img3} alt="" />
                    <p className="mt-10">“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”</p>
                    <div className="flex mt-24">
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