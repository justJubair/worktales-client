import Navbar from "../../components/Navbar/Navbar";
import bannerVideo from "../../assets/bannerAddJob.mp4";
const AddJob = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-72">
        <video
          className="w-full h-full object-cover"
          src={bannerVideo}
          muted
          autoPlay
          loop={true}
        ></video>
        <div className="h-72 absolute left-0 top-0 bg-[#160202]/80 w-full"></div>
        <div className="text-center lg:w-1/2 absolute top-20 px-4 lg:top-28 lg:left-80 lg:px-0">
          <h2 className="text-4xl font-bold mb-3">Create a Job</h2>
          <p>
            Boosting employment means backing entrepreneurship, enhancing
            education, driving innovation, aiding small businesses, and
            developing infrastructure. These steps spur economic growth, lower
            unemployment, and build thriving communities.
          </p>
        </div>
      </div>
    </>
  );
};
export default AddJob;
