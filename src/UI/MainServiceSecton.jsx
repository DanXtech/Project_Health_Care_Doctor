import { Suspense } from 'react'
import { enhancedServiceOptionLst } from '../Data/data'

const MainServiceSecton = () => {
    return (
        <div className='flex flex-col items-center mt-[50px] lg:px-10 px-5 '>
            <div className='flex flex-col items-center gap-[60px] md:p-10 sm:gap-[30px]'>

                <div className='text-center'
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <span className='text-2xl lg:text-4xl font-semibold'>Our  <span className='text-blue-600'> Main Services</span></span>
                    <span className='lg:block pl-2 lg:text-center text-2xl lg:text-4xl font-semibold'>
                        Categories
                    </span>
                </div>

                <div className='flex gap-[26px]  self-stretch sm:flex-col'

                >
                    <Suspense fallback={<div>Lading fee...</div>}>
                        {enhancedServiceOptionLst.map((item, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center w-full md:w-full px-5 py-5 md:py-5 rounded-[30px] shadow ${item.backgroundColor}`}
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <img src={item.ServiceImg} className='mt-11 h-[100px] w-[100px] lg:mb-5 mb-3 object-cover ' alt="" />
                                {/* <h3 className={`mt-[52px] self-start text-3xl font-semibold ${item.textColors}`}>{item.chatTtle}</h3> */}
                                {/* <h3 className={`${item.textColor} ${item.textSize}`}>{item.chatTtle}</h3> */}
                                <h3 className={`${item.textColor} ${item.textSize} font-bold`}>{item.chatTtle}</h3>

                                <h3 className={`${item.textColor} font-semibold mt-5 w-[96%] leading-[45px]`}>{item.descriptionText}</h3>
                                {/* <p className='mt-5 w-[96%] leading-[45px]'>{item.descriptionText}</p> */}
                            </div>
                        ))}
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default MainServiceSecton