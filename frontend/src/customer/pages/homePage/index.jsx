import { MainCarousel } from "../../components/HomeCarousel/MainCarousel";
import { HomeSectionCarousel } from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../data/mens_kurta";

export const HomePage = () => {
  return (
    <>
      <div>
        <MainCarousel />
      </div>
      <div className="px-8 mt-10 ">
        <HomeSectionCarousel data={mens_kurta} title={"Men's Kurta"} />
        <HomeSectionCarousel data={mens_kurta} title={"Men's Shoes"} />
        <HomeSectionCarousel data={mens_kurta} title={"Men's Shirt"} />
        <HomeSectionCarousel data={mens_kurta} title={"Women's Saree"} />
        <HomeSectionCarousel data={mens_kurta} title={"Women's Dress"} />
       
        
        
      </div>
    </>
  );
};
