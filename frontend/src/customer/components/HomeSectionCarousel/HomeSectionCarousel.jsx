import { HomeSectionCart } from "../HomeSectionCard/HomeSectionCard";
import { mens_kurta } from "../../../data/mens_kurta";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeSectionCarousel.css"
import Slider from "react-slick";


export const HomeSectionCarousel = ({ title }) => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-2 ">
      <h2 className="text-2xl font-extrabold">{title}</h2>
        <div>
          <Slider {...settings}>
            {mens_kurta.slice(0, 10).map((item) => (
              <HomeSectionCart product={item} />
            ))}
          </Slider>
        </div>
    </div>
  );
};
