import doctorFrame from "../assets/doctorFrame.png"
import WemenSectiondoctor from "../assets/doctorSlider.png"
const OurDoctorsSecton = () => {
    return (


        <section className=" ">

            <div className="flex  justify-center">
                <div className="flex flex-col items-center lg:flex-row gap-12  w-full  md:w-full pt-10  lg:p-10 sm:px-5 px-10">
                    <div className="flex flex-col items-left w-full lg:w-[75%]"
                        data-aos="fade-right"
                        data-aos-delay="300"
                    >
                        <h3 className="text-[14px] font-bold ">Our Doctors</h3>
                        <h4 className="text-[28px] lg:text-[48px] font-bold bg-gradient4 bg-clip-text !text-transparent  ">Qualified Doctors</h4>
                        <p className="text-[18px] leading-[28px] lg:leading-[38px] font-normal not-italic  mt-5 lg:w-[70%]  !text-gray-400 w-full">
                            Handled directly by general doctors and professional
                            and experienced specialists doctors.
                        </p>
                        <div>
                            <div className="border-[24px] border-white-a700 lg:w-[75%] rounded-tl-[110px] rounded-bl-[100px] rounded-br-[100px]">
                                <div className='relative h-[420px] flex-1 md:w-full sm:flex-none sm:self-stretch'>
                                    <img src={doctorFrame}
                                        className='absolute bottom-0 left-0 -right-0 top-0 m-auto h-[420px] w-full  object-cover rounded-tl-[80px] rounded-bl-[100px] rounded-br-[100px]'
                                        alt="karalina_image"
                                    />
                                    <div className='bg-blue-800 opacity-30 absolute w-full h-full rounded-tl-[80px] rounded-bl-[100px] rounded-br-[100px]'></div>
                                    <div className="absolute top-28  left-12">
                                        <h2 className="text-[24px] text-white-a700 font-extralight">Orthpedy</h2>
                                        <h4 className="text-[34px] text-white-a700 font-semibold">Dr. James Wellington</h4>
                                        <button className="text-white-a700 ">Read More</button>
                                    </div>
                                </div>

                            </div>

                            <button className="h-[54px] px-[24px] text-[16px] bg-gradient-to-tl from-blue-600 to-[#4ED6DA] shadow text-white-a700 min-w-[154px]  rounded-[32px] font-semibold mt-10 lg:ml-28">
                                Lets Get Started
                            </button>

                        </div>
                    </div>
                    <div className="flex flex-col items-right w-full lg:w-[70%]"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="h-[500px] w-full rounded-l-[50%] border-[24px] border-white-a700 shadow">
                            <img src={WemenSectiondoctor} className="w-full rounded-l-[50%] h-full object-cover" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default OurDoctorsSecton

