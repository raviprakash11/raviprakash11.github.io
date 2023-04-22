import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Style.css";
import { Pagination, Navigation } from "swiper";
import TestimonyCard from "../CustomForm/TestimonyCard";

export default function SwiperS() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <TestimonyCard quoteSaid={"Lorem Ipsum"} userName={"Lorem Ipsum"} job={"Test"} post={"Test"}/>
        </SwiperSlide>
        <SwiperSlide>
        <TestimonyCard quoteSaid={"Lorem Ipsum"} userName={"Lorem Ipsum"} job={"Test"} post={"Test"}/>
        </SwiperSlide>
        <SwiperSlide>
        <TestimonyCard quoteSaid={"Lorem Ipsum"} userName={"Lorem Ipsum"} job={"Test"} post={"Test"}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
