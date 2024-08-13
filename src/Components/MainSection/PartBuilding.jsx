
import Header from "../Header/Header"
import HeroSection from '../../UI/HeroSection'
import SpecialServicesOverView from '../../UI/SpecialServicesOverView'
import MainServiceSecton from '../../UI/MainServiceSecton'
import BrandCompany from "../../UI/BrandCompany"
import OurDoctorsSecton from "../../UI/OurDoctorsSecton"
import GetStartedHaiDoc from "../../UI/GetStartedHaiDoc"
import Footer from "../Footer/Footer"



const PartBuilding = () => {
    return (
        <section>
            <div className="flex flex-col items-center">
                <div className="flex w-[92%] flex-col  gap-9 md:w-full md:p-5">
                    <div className="container mx-auto">
                        <Header />
                    </div>
                </div>
            </div>
            <div>
                <HeroSection />
                <div className='mb-5 mt-[92px]'>
                    <div className='bg-[] bg-cover bg-no-repeat py-[86px] md:h-auto md:py-5'>
                        <div className='mb-[68px] pt-2[50px] flex flex-col items-center gap-[122px] md:gap-[91px] sm:gap-[61px] bg-white-a700 '>
                            <BrandCompany />

                            {/* over text section */}
                            <div className='flex flex-col gap-[94px] self-stretch  md:gap-[70px] sm:gap-[47px]'>
                                <MainServiceSecton />

                                <SpecialServicesOverView />

                            </div>
                        </div>
                    </div>

                    <OurDoctorsSecton />

                    <GetStartedHaiDoc />
                </div>

                <Footer />

            </div>
        </section>
    )
}

export default PartBuilding