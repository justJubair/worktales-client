import { TypeAnimation } from "react-type-animation";
import Lottie from "lottie-react"
import bannerAnimatoin from "../../assets/animations/banner.json"
const Banner = () => {
  return (
    <div className="h-screen w-full">
      <img
        className="h-full object-cover w-full"
        src="https://i.ibb.co/Ytq7sj6/map-lying-wooden-table.jpg"
        alt=""
      />
      {/* overlay */}
      <div className="h-screen absolute left-0 top-0 bg-[#160202]/90 w-full"></div>
      <div className="absolute lg:top-56 w-full">
        {/* content */}
       <div className="flex justify-evenly  items-start">
       <div className="w-[500px]">
          <TypeAnimation className=""
            sequence={[
              "Find the talents for Web dev.",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Find the talents for SEO.",
              1000,
              "Find the talents for Web design.",
              1000,
              "Find the talents for Vidoe editing",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "4rem", display: "inline-block" }}
            repeat={Infinity}
          />
          <p>Unlock your potential with quality job & earn from world leading brands & co.</p>
        </div>
        {/* lottie */}
        <div className="">
            <Lottie className="w-96"  animationData={bannerAnimatoin} loop={true}/>
        </div>
       </div>
      </div>
    </div>
  );
};
export default Banner;
