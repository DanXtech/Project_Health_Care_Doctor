

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className="container mx-auto">
            <div className="lg:flex lg:justify-center px-5 lg:pt-10">
                <div className="flex lg:gap-[88px] gap-[50px] flex-col lg:flex-row"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <div className="">
                        <h2 className="text-[#172048] font-semibold">Tutorify</h2>
                        <p className="mt-5">Learn more than just
                            a language</p>


                        <div className="flex gap-3 mt-5">
                            <span className=" h-[50px] w-[50px] rounded-full flex items-center justify-center bg-black text-white-a700">G</span>
                            <span className=" h-[50px] w-[50px] rounded-full flex items-center justify-center bg-black text-white-a700">T</span>
                            <span className=" h-[50px] w-[50px] rounded-full flex items-center justify-center bg-black text-white-a700">I</span>
                            <span className=" h-[50px] w-[50px] rounded-full flex items-center justify-center bg-black text-white-a700">L</span>

                        </div>
                    </div>
                    <div className="">
                        <h2 className="text-[#172048] font-semibold">Find Teacher</h2>
                        <ul className="mt-5 flex flex-col gap-5">
                            <li>English Teachers</li>
                            <li>Chinese Teachers</li>
                            <li>French Teachers</li>
                            <li>Spanish Teachers</li>
                            <li>Other Teachers</li>
                        </ul>
                    </div>
                    <div className="">
                        <h2 className="text-[#172048] font-semibold">Lessons</h2>
                        <ul className="mt-5 flex flex-col gap-5">
                            <li>Learn English</li>
                            <li>Learn Chinese</li>
                            <li>Learn French</li>
                            <li>Learn Spanish</li>
                            <li>Learn More Languages</li>
                        </ul>
                    </div>
                    <div className="">
                        <h2 className="text-[#172048] font-semibold">Company</h2>
                        <ul className="mt-5 flex flex-col gap-5">
                            <li>About</li>
                            <li>How it Works</li>
                            <li>Term</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="">
                        <h2 className="text-[#172048] font-semibold">More</h2>
                        <ul className="mt-5 flex flex-col gap-5">
                            <li>Documentation</li>
                            <li>License</li>
                        </ul>
                    </div>
                </div>

            </div>
            <span
                className="flex items-center justify-center pt-5">Copyright at {year} Health Care full service  </span>

        </div>
    )
}

export default Footer