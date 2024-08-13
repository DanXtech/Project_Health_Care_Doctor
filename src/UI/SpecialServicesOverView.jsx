import Anthony_img1 from "../assets/pexels-anthony-shkraba-6749777 2.svg"
import { healthOptionGrid } from "../Data/SubDataText"
const ServicesOverView = () => {
    return (
        <section className="flex justify-center lg:px-10 px-5 mt-[50px] mb-20">
            <div className="flex w-[92%] items-center justify-center md:w-full md:flex-col">
                <div className="relative  mb-2 h-[856px] w-full lg:w-[46%] content-end md:h-auto md:w-full hidden  lg:block"
                    data-aos="fade-right"
                    data-aos-delay="400"
                >
                    {/* <div style={{ backgroundImage: `url(${Anthony_img1})` }} className="ml-[34px] mr-[64px] h-[686px] flex-1 bg-cover bg-no-repeat md:mx-0 md:h-auto"> */}
                    <div className="ml-[34px] mr-[64px] h-[686px] flex-1 bg-cover bg-no-repeat md:mx-0 md:h-auto">
                        {/* <div className="h-[686px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[230px] rounded-tr-[230px] border-[20px] border-solid border-white-a700  bg-gradient2 shadow"></div> */}
                        <div className="h-[686px] w-full rounded-bl-[10px] rounded-br-[10px] rounded-tl-[230px] rounded-tr-[230px] object-cover md:h-auto   border-[20px] border-solid border-white-a700  bg-gradient2 shadow"></div>
                    </div>
                    {/* <img src={Anthony_img2}
                    className="absolute bottom-0  left-0 top-0 my-auto h-[856px] w-[88%] object-contain"
                    alt="Featureed_Iamge" /> */}
                    <img src={Anthony_img1}
                        className="absolute bottom-0  left-0 top-0 my-auto h-[856px] w-[88%] object-contain rounded-bl-[230px]"
                        alt="Featureed_Iamge" />
                </div>

                <div className="flex flex-1 flex-col  items-center  "
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <div className="ml-[15px]  mr-[50px] flex  lg:justify-left sm:justify-center  gap-2.5 self-stretch md:mx-0 font-bold ">
                        <h1 className="text-2xl lg:text-4xl !text-gray-900">Our</h1>
                        <h1 className="text-2xl lg:text-4xl bg-gradient4 bg-clip-text !text-transparent   ">Special Services</h1>
                    </div>
                    <p className="ml-[15px] mt-[26px] w-full lg:w-[92%] self-start leading-[40px] !text-gray-400 md:ml-0 md:w-full">
                        In times like today, your health is very important,
                        especially since the number of COVID-19 cases is
                        increasing day by day, so we are ready to help you
                        with your health consultation
                    </p>
                    <div className=" grid grid-cols-2 sm:grid-cols-1 justify-center md:gap-3 self-stretch md:ml-0 md:grid-cols-1">
                        {healthOptionGrid.map((item, index) => {
                            return (
                                <div key={index} className="flex flex-col items-left w-[96%] md:w-full px-2 py-8 md:py-5 rounded-[30px] md:gap-3  md:p-5  md:bg-emerald-50 ">
                                    <button>
                                        <img src={item.ImageOptionList} className=" object-cover px-5 py-4 bg-gradient-to-tl from-blue-600 to-[#4ED6DA] rounded-[14px]" alt="" />
                                    </button>
                                    <h2 className="mt-[10px] self-start text-2xl font-bold ">{item.textTitle}</h2>
                                    <p className="mt-5  leading-[20px] !text-gray-400 ">{item.textDescription}</p>
                                </div>
                            )
                        })}
                    </div>



                </div>

            </div>
        </section >
    )
}

export default ServicesOverView


