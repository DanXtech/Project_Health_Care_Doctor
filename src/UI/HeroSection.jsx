
import HeroHomeImage from "../assets/pexels-karolina-grabowska-4386464.svg"
import Herodoctor from "../assets/frame2NotFix.svg"
const HeroSection = () => {
    return (


        <div className="full">
            <div className="hidden lg:block">
                <div className="mt-[50px] flex items-center gap-[26px] sm:flex-col">
                    <div className='flex w-[45%] sm:w-full flex-col items-start md:w-full  pl-14'
                    >
                        <div className='flex flex-col items-center'
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <h1 className='text-[48px] font-bold md:text-[48px] '>We Are Ready to</h1>
                            <h2 className='text-[48px] font-bold md:text-[48px] bg-gradient1 bg-clip-text !text-transparent'>
                                Help Your Health
                            </h2>
                        </div>
                        <h3 className='text-[48px] font-bold md:text-[48px] '
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >Problems</h3>
                        <h4 className='text-[20px] font-normal not-italic  mt-5 w-[84%] leading-[42px !text-gray-400 md:w-full'
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            In times like, your health is very imporant, <br /> especially since the number of COVID-19
                            case is <br /> increasing day, so wo are to hlep you <br /> with health consultion
                        </h4>
                        <div className='mt-[22px] flex flex-col items-start gap-[30px] self-stretch'>

                            <button className='h-[64px] px-[34px] text-[16px] bg-gradient-to-tl from-blue-600 to-[#4ED6DA]  shadow text-white-a700 min-w-[254px]  rounded-[32px] font-semibold'
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                Try Free Consultation
                            </button>
                            <div className='ml-4 mr-[112px] flex gap-[5px] self-stretch md:mx-0 md:flex-row sm:flex-col'
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className='flex w-[34%] flex-col gap-4 sm:w-full'>
                                    <h5 className='leading-[54px]'>
                                        <span className='text-blue_gray-800'>200</span>
                                        <span className=''>+</span>
                                    </h5>
                                    <h6 className=' text-[18px] font-semibold leading-[27px] !text-gray-400'>Active Doctor</h6>
                                </div>
                                <div className='flex w-[34%] flex-col gap-4 sm:w-full'>
                                    <h5 className='leading-[54px]'>
                                        <span className='text-blue_gray-900'>200</span>
                                        <span className=''>+</span>
                                    </h5>
                                    <h6 className=' text-[18px] font-semibold leading-[27px] !text-gray-400'>Active User</h6>
                                </div>
                                <div className='flex w-[34%] flex-col gap-4 sm:w-full'>
                                    <h5 className='leading-[54px]'>
                                        <span className='text-blue_gray-900'>200</span>
                                        <span className=''>+</span>
                                    </h5>
                                    <h6 className=' text-[18px] font-semibold leading-[27px] !text-gray-400'>Active Pharmacy</h6>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='relative h-[774px] flex-1 md:w-full sm:flex-none sm:self-stretch'
                        data-aos="fade-right"
                        data-aos-delay="400"
                    >
                        <img src={HeroHomeImage}
                            className='absolute bottom-0 left-0 -right-0 top-0 m-auto h-[744px] w-full rounded-bl-[30px] rounded-tl-[330px] object-cover'
                            alt="karalina_image"
                        />
                        <div className='absolute bottom-0 left-0 right-0 m-auto w-[64%] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[230px] rounded-tr-[230px] border-[20px] border-solid border-white-a700 bg-gradient shadow'>
                            <img src={Herodoctor}
                                className='h-[686px] w-full rounded-bl-[10px] rounded-br-[10px] rounded-tl-[230px] rounded-tr-[230px] object-cover md:h-auto'
                                alt="Doctor_Image" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="block lg:hidden">
                <div className="px-5 flex flex-col gap-10">
                    <div className="flex w-full flex-col items-start md:w-full pt-10">
                        <div className="flex flex-col items-left"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <h1 className="text-[38px] font-bold ">
                                We Are Ready to
                            </h1>
                            <h2 className="text-[38px] font-bold bg-gradient1 bg-clip-text !text-transparent">
                                Help Your Health
                            </h2>
                        </div>
                        <h3 className="text-[38px] font-bold "
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >Problems</h3>
                        <h4 className="text-[20px] leading-[38px] font-normal not-italic  mt-5 w-[84%] leading-[42px !text-gray-400 md:w-full"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            In times like, your health is very imporant,  especially since the
                            number of COVID-19 case is  increasing day, so wo are to hlep you{" "}
                            with health consultion
                        </h4>
                        <div className="mt-[22px] flex flex-col items-start gap-[30px] self-stretch">

                            <button className="h-[54px] px-[24px] text-[16px] bg-gradient-to-tl from-blue-600 to-[#4ED6DA] shadow text-white-a700 min-w-[154px]  rounded-[32px] font-semibold"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                Try Free Consultation
                            </button>

                            <div className="grid grid-cols-3  gap-4 mt-5"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className=" bg-gradient-to-tl from-blue-500 to-[#ff4011] shadow p-2 rounded-2xl">
                                    <div className="">
                                        <h5 className="leading-[24px]">
                                            <span className="text-white-a700">200</span>
                                            <span className="text-white-a700">+</span>
                                        </h5>
                                        <h6 className=" text-[18px] font-semibold leading-[16px] !text-gray-100">
                                            Active Doctor
                                        </h6>
                                    </div>
                                </div>
                                <div className=" bg-gradient-to-tl from-blue-600 to-[#6b45f5] shadow p-2 rounded-2xl">
                                    <div className="">
                                        <h5 className="leading-[24px]">
                                            <span className="text-white-a700">200</span>
                                            <span className="text-white-a700">+</span>
                                        </h5>
                                        <h6 className=" text-[18px] font-semibold leading-[16px] !text-gray-100">
                                            Active Doctor
                                        </h6>
                                    </div>
                                </div>
                                <div className=" bg-gradient-to-tl from-blue-600 to-[#4ED6DA] shadow  p-2 rounded-2xl"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <div className="">
                                        <h5 className="leading-[24px]">
                                            <span className="text-white-a700">200</span>
                                            <span className="text-white-a700">+</span>
                                        </h5>
                                        <h6 className=" text-[18px] font-semibold leading-[16px] !text-gray-100">
                                            Active Pharmacy
                                        </h6>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div className=' bottom-0 left-0 right-0 m-auto sm:w-full w-[84%] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[230px] rounded-tr-[230px] border-[20px] border-solid border-white-a700 bg-gradient shadow'>
                            <img src={Herodoctor}
                                className='h-[686px] w-full rounded-bl-[10px] rounded-br-[10px] rounded-tl-[230px] rounded-tr-[230px] object-cover md:h-auto'
                                alt="Doctor_Image" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroSection


