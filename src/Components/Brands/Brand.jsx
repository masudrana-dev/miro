import img from '../../../public/images/Company.png'

const Brand = () => {
    return (
        <section className='max-w-container mx-auto px-20'>
            <div>
                <h1 className='text-center text-[18px] pb-12'>Trusted by 45M+ users</h1>
                <img className='mx-auto' src={img} alt="" />
            </div>
        </section>
    )
}

export default Brand