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
      <div className="absolute top-24 md:top-44 lg:top-56 w-full px-6 lg:px-0">

        {/* content */}
       <div className="flex flex-col justify-evenly items-center gap-4  md:items-start md:flex-row md:gap-0">
        {/* hidden on tablet and mobile */}
       <div className="hidden w-[500px] lg:block">
          <TypeAnimation 
            sequence={[
              "Find the talents for Web dev.",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Find the talents for SEO.",
              1000,
              "Find the talents for Web design.",
              1000,
              "Find the talents for Video editing",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "3.5rem", fontWeight:"bold", display: "inline-block" }}
            repeat={Infinity}
          />
          <p>Unlock your potential with quality job & earn from world leading brands & co.</p>
        </div>
        <div className="space-y-4 lg:hidden">
            <h1 className="text-4xl md:text-5xl">Find the talents for any job.</h1>
            <p>Unlock your potential with quality job & earn from world leading brands & co.</p>
        </div>
        {/* lottie */}
        <div className="">
            <Lottie className=" md:w-72 lg:w-[550px]"  animationData={bannerAnimatoin} loop={true}/>
        </div>
       </div>
      </div>
    </div>
  );
};
export default Banner;
