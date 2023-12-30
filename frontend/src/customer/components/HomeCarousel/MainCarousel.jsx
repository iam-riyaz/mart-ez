import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { mainCarouselData } from "./mainCarouselData";
import Slider from "react-slick";

export const MainCarousel = () => {
  const settings = {
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 800,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {mainCarouselData.map((e) => (
          <img
            src={e.image}
            onClick={() => navigate(e.path)}
            className="cursor-pointer"
            role="presentation"
            alt="img"
          />
        ))}
      </Slider>
    </div>
  );
};
