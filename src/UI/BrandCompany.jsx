import company1 from "../assets/companys1.png"
import company2 from "../assets/companys2.png"
import company3 from "../assets/companys3.png"
import company4 from "../assets/companys4.png"
import company5 from "../assets/companys5.png"

const imageGallery = [
    { GalleryImage: company1 },
    { GalleryImage: company2 },
    { GalleryImage: company3 },
    { GalleryImage: company4 },
    { GalleryImage: company5 },
]

const BrandCompany = () => {
    return (
        <div className="flex items-center  justify-center mt-[88px]  lg:px-10 px-5"
            data-aos="fade-up"
            data-aos-delay="400"
        >
            <div className="flex items-center gap-2 flex-wrap lg:space-x-36">
                {imageGallery.map((item, index) => (
                    <img
                        key={index}
                        src={item.GalleryImage} alt="image_company"
                        className='object-contain p-2 '
                    />
                ))}
            </div>
        </div>
    )
}

export default BrandCompany

