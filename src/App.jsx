import AOS from "aos";
import "aos/dist/aos.css"
import './App.css'
import PartBuilding from './Components/MainSection/PartBuilding'
import { useEffect } from "react";

function App() {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        })
        AOS.refresh()
    }, [])
    return (
        <div className="flex w-full flex-col gap-[93px] bg-gray-50 pt-[42px] md:gap-[69px] md:py-5 sm:gap-[46px]">
            <PartBuilding />
        </div>
    )
}

export default App
