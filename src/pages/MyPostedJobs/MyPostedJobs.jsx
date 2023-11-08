/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import PostedJobCard from "./PostedJobCard";
import bannerVideo from "../../assets/videos/bannerAddJob.mp4"
import Navbar from "../../components/Navbar/Navbar";
const MyPostedJobs = () => {
  const { user } = useAuth();
  const axios = useAxios();

  const getEmployerJobs = async () => {
    const res = await axios.get(`/postedJobs?employer_email=${user?.email}`);
    return res;
  };
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["employerJob"],
    queryFn: getEmployerJobs,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      <Navbar/>
      {/* banner STARTS */}
      <div className="w-full h-72">
        <video
          className="w-full h-full object-cover"
          src={bannerVideo}
          muted
          autoPlay
          loop={true}
        ></video>
        <div className="h-72 absolute left- top-0 bg-[#160202]/80 w-full"></div>
        <div className="text-center lg:w-1/2 md:left-28 absolute top-20 px-4 lg:top-28 lg:left-80 lg:px-0">
          <h2 className="text-4xl font-bold mb-3 text-gray-200">The jobs you've posted</h2>
          <p className="text-gray-300">
          “People rarely succeed unless they have fun in what they are doing.” — Dale Carnegie.
          </p>
        </div>
      </div>
      {/* banner ENDS */}
      <div className="max-w-screen-xl mt-10 mb-24 mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 px-2 lg:px-0">
        {data.data?.map((job) => (
          <PostedJobCard key={job._id} refetch={refetch} job={job} />
        ))}
      </div>
    </>
  );
};
export default MyPostedJobs;
