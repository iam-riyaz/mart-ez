import AliceCarousel from "react-alice-carousel";
import { HomeSectionCart } from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import { mens_kurta } from "../../../data/mens_kurta";

export const HomeSectionCarousel = () => {
  const [acitveIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    700: { items: 3 },
    870: { items: 4 },
    1024: { items: 5 },
  };

  const slidePreview = () => setActiveIndex(acitveIndex - 1);

  const slideNext = () => setActiveIndex(acitveIndex + 1);

  const items = mens_kurta
    .slice(0, 10)
    .map((item) => <HomeSectionCart product={item} />);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <>
      <div className="relative px-2 lg:px-2 flex justify-center py-2 my-2">
        
          <div onClick={slidePreview}  className={acitveIndex!=0?"flex items-center":"invisible flex items-center"}>
            <div className="cursor-pointer border border-solid border-gray-200 h-16 px-1 mr-1 rounded-lg flex items-center">
              <ChevronLeftIcon sx={{ color: "black" }} />
            </div>
          </div>
         
        <div className="relative w-full">
          <AliceCarousel
            items={items}
            disableDotsControls
            responsive={responsive}
            onSlideChanged={syncActiveIndex}
            activeIndex={acitveIndex}
          />
        </div>
       
          <div onClick={slideNext} className={acitveIndex != items.length - 5?"flex items-center":"invisible flex items-center"}>
            <div className="cursor-pointer border border-solid border-gray-200 h-16 px-1 ml-1 rounded-lg flex items-center">
              <ChevronRightIcon sx={{ color: "black" }} />
            </div>
          </div>
        
      </div>
    </>
  );
};
