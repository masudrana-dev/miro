import { MdArrowRightAlt } from "react-icons/md";

const Services = () => {
    return (
        <section className="max-w-container mx-auto font-inter pt-40 pb-28 px-32">
            <div className="heading">
                <h1 className=" text-center">
                    Collaborate without <br />
                    constraints
                </h1>
            </div>
            {/* text box  */}
            <div className="flex justify-between pt-10">
                <div className="w-[300px]">
                    <h1 className="text-[20px] font-bold pb-5">Free forever</h1>
                    <p>
                        Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our <a href="#" className="text-blue-400">pricing plans</a> for more features.
                    </p>
                </div>
                <div className="w-[300px]">
                    <h1 className="text-[20px] font-bold pb-5">Easy integrations</h1>
                    <p>
                        Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our <a href="#" className="text-blue-400">Marketplace</a>
                    </p>
                </div>
                <div className="w-[300px]">
                    <h1 className="text-[20px] font-bold pb-5">Security first</h1>
                    <p>
                        We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more at our .<a href="#" className="text-blue-400">Trust Center  </a>
                    </p>
                </div>
            </div>
            {/* text box  */}

            {/* button  */}
            <div className="btn flex justify-center pt-28 ">
                <button className="border border-[#4262FF] rounded-[100px]  px-7 py-3 bg-[#4262FF] transition hover:bg-white hover:text-black  text-white flex items-center ">Sign Up Free <i className="ml-1"><MdArrowRightAlt /></i></button>
            </div>
            {/* button  */}
        </section>
    )
}

export default Services