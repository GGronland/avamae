import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/bundle";
import "./SimpleSwiper.css";
import "../general/Button.js";
import Button from "../general/Button.js";

function SimpleSwiper(props) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true, dynamicBullets: true }}
      autoplay={true}
    >
      <SwiperSlide>
        <div className="image-container">
          <img src={props.content[0].ImageUrl} alt="" />
        </div>

        <div className="slide-overlay-main">
          <div className="slide-overlay-text">
            <h1>{props.content[0].Title}</h1>
            <p>{props.content[0].Subtitle}</p>
            <Link to="/contact-us">
              <Button className="contact">Contact us</Button>
            </Link>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="image-container">
          <img src={props.content[1].ImageUrl} alt="" />
        </div>

        <div className="slide-overlay-main">
          <div className="slide-overlay-text">
            <h1>{props.content[1].Title}</h1>
            <p>{props.content[1].Subtitle}</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="image-container">
          <img src={props.content[2].ImageUrl} alt="" />
        </div>

        <div className="slide-overlay-main">
          <div className="slide-overlay-text">
            <h1>{props.content[2].Title}</h1>
            <p>{props.content[2].Subtitle}</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default SimpleSwiper;
