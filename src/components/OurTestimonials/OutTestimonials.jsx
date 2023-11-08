import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
// Import Swiper styles
import "./styles.css";
import "swiper/css";
import "swiper/css/effect-cards";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const OutTestimonials = () => {
  const axios = useAxios();
  const getTestimonials = async () => {
    const res = await axios.get("/testimonials");
    return res;
  };
  const { data: testimonials } = useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
  });
  console.log(testimonials);
  return (
    <div>
      <div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
          {testimonials?.data.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
              
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="w-24 h-24 object-cover rounded-full"
                    src={testimonial.img_url}
                    alt=""
                  />
                  <h3 className="text-black font-bold">{testimonial.name}</h3>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">{testimonial?.role}</p>
                    <p className="text-xs text-gray-500">{testimonial?.company_name}</p>
                  </div>
                  <p className="text-center text-xs text-gray-600 p-4">{testimonial?.testimonial}</p>
                </div>
              
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default OutTestimonials;
