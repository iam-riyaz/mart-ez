import { MainCarousel } from "../../components/HomeCarousel/MainCarousel"
import { HomeSectionCarousel } from "../../components/HomeSectionCarousel/HomeSectionCarousel"


export const HomePage=()=>{
    return(
        <>
        <div  >
            <MainCarousel/>
        </div>
        <div className="px-8 mt-10 ">
           <HomeSectionCarousel title={"Men's Kurta"}/>
           <HomeSectionCarousel title={"Men's Shirt"}/>
           <HomeSectionCarousel title={"Men's Trauser"}/>
        </div>
        </>
    )
}