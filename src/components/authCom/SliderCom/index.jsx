import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import oranges from "../../../assets/Images/oranges.jpg";
import pineapples from "../../../assets/Images/pineapples.jpg";
import watermelons from "../../../assets/Images/watermelons.jpg";
import kiwis from "../../../assets/Images/kiwis.jpg";
import strawberry from "../../../assets/Images/strawberry.jpg";
import berries from "../../../assets/Images/berries.jpg";
import apples from "../../../assets/Images/apples.jpg";
import bananas from "../../../assets/Images/bananas.jpg";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const fruitDetails = [
  {
    image: oranges,
    tip: "Oranges are famous for their high vitamin C content, which is vital for skin health and boosting the immune system.",
  },
  {
    image: pineapples,
    tip: "Pineapples contain bromelain, an enzyme that can help with digestion and reduce inflammation.",
  },
  {
    image: watermelons,
    tip: "Watermelons are over 90% water, making them a hydrating and refreshing choice, especially during hot weather.",
  },
  {
    image: kiwis,
    tip: "Kiwis are rich in vitamin C and dietary fiber, promoting digestive health and a strong immune system.",
  },
  {
    image: strawberry,
    tip: "Strawberries are a delicious way to get your daily dose of vitamin C, fiber, and antioxidants.",
  },
  {
    image: berries,
    tip: "Berries are packed with antioxidants, which can help fight inflammation and reduce the risk of chronic diseases.",
  },
  {
    image: apples,
    tip: "An apple a day keeps the doctor away. Apples are rich in fiber and vitamin C, and they can help boost your immune system.",
  },
  {
    image: bananas,
    tip: "Bananas are a great source of potassium, which is essential for heart health and maintaining proper muscle function.",
  },
];

const SliderCom = () => {
  console.log(fruitDetails[0].image);
  return (
    <div className="w-full sm:w-[98%] mx-auto">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
      >
        {fruitDetails.map((fruit, index) => (
          <SwiperSlide key={index} className="relatives">
            <div className="h-[220px] sm:h-[430px]">
              <img
                src={fruit.image}
                alt=""
                className="w-full h-full bg-cover"
              />
            </div>
            <p className="bg-black text-blue-200 bg-opacity-50 p-4 rounded absolute top-0 w-full">
              {fruit.tip}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderCom;
