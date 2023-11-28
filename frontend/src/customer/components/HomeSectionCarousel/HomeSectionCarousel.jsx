import AliceCarousel from "react-alice-carousel";
import { HomeSectionCart } from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const HomeSectionCarousel = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4.5 },
    };

  const items = [1, 2, 1, 2, 3, 4, 4, 5, 6].map((item) => <HomeSectionCart />);

  return (
    <>
      <div className="relative px-2 lg:px-2 flex justify-center py-2 my-2">
        <Button >
            <div className=" border border-solid border-gray-200 rounded-lg">
        <ChevronLeftIcon sx={{color:"black", margin:"20px 5px 20px 5px" }} />
        </div>
        </Button>
        <div className="relative    w-11/12">
          <AliceCarousel
            keyboardNavigation={true}
            disableButtonsControls
            disableDotsControls
           
            mouseTracking={true}
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </div>
        <Button >
        <div className=" border border-solid border-gray-200 rounded-lg">
        <ChevronRightIcon sx={{color:"black", margin:"20px 5px 20px 5px" }} />
        </div>
        </Button>
      </div>
    </>
  );
};
