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
    1024: { items: 5.4 },
  };

  const slidePreview = () => setActiveIndex(acitveIndex - 1);

  const slideNext = () => setActiveIndex(acitveIndex + 1);

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = mens_kurta.map((item) => <HomeSectionCart product={item} />);

  return (
    <>
      <div className="relative px-2 lg:px-2 flex justify-center py-2 my-2">
        {acitveIndex != 0 ? (
          <div className="flex items-center">
            <div
              onClick={slidePreview}
              className="cursor-pointer border border-solid border-gray-200 h-16 px-1 mr-1 rounded-lg flex items-center"
            >
              <ChevronLeftIcon sx={{ color: "black" }} />
            </div>
          </div>
        ) : null}
        <div className="relative w-full">
          <AliceCarousel
            items={items}
            disableButtonsControls
            responsive={responsive}
            disableDotsControls
            onSlideChanged={syncActiveIndex}
            activeIndex={acitveIndex}
          />
        </div>
        {acitveIndex != items.length - 1 ? (
          <div className="flex items-center">
            <div
              onClick={slideNext}
              className="cursor-pointer border border-solid border-gray-200 h-16 px-1 ml-1 rounded-lg flex items-center"
            >
              <ChevronRightIcon sx={{ color: "black" }} />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
