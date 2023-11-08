import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
// Import Swiper styles
import "./styles.css";
import "swiper/css";
import "swiper/css/effect-cards";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const OurTestimonials = () => {
  const axios = useAxios();
  const getTestimonials = async () => {
    const res = await axios.get("/testimonials");
    return res;
  };
  const { data: testimonials } = useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
  });
  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-20 lg:mt-32 md:gap-6 lg:gap-4 flex flex-col justify-center items-start md:flex-row">
      <div className="w-full md:w-1/2">
        <BiSolidQuoteAltLeft size={50} />
        <h1 className="text-4xl leading-tight w-full font-extrabold text-[#4b1818] md:text-5xl">
          Check what these clients have to say.
        </h1>
        <span className="flex justify-end w-full lg:w-9/12 mt-1"><BiSolidQuoteAltRight size={50} /></span>

      </div>
      <div className="w-full md:w-52">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[EffectCards, Autoplay]}
          className="mySwiper"
        >
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
                  <p className="text-xs text-gray-500">
                    {testimonial?.company_name}
                  </p>
                </div>
                <p className="text-center text-xs text-gray-600 p-4">
                  {testimonial?.testimonial}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default OurTestimonials;
