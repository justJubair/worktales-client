import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const axios = useAxios();
  const getJob = async () => {
    const res = await axios.get(`/jobs/${id}`);
    return res.data;
  };
  const { data: job, isLoading } = useQuery({
    queryKey: ["job"],
    queryFn: getJob,
  });
  if (isLoading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }
  console.log(job);
  return (
    <div>
      {/* banner */}
      <div className="w-full h-screen md:h-96">
        <img
          className="h-full w-full object-cover"
          src="https://i.ibb.co/bsqNKyj/pexels-vlada-karpovich-4050320.jpg"
          alt="laptop"
        />
        <div className="absolute top-0 w-full h-full md:h-96 bg-[#1c0606]/90"></div>
        <div className="absolute w-full px-4 top-20  lg:w-1/2 md:top-24 lg:px-0 lg:left-[355px]">
          <h2 className="text-center mb-4 text-3xl font-medium">
            {job.job_title}
          </h2>
          <p className="mb-4 text-sm md:text-base">{job.long_description}</p>
          <div className="flex items-center justify-center gap-4">
            <p className="font-medium px-4 py-2 rounded-md bg-[#280808] text-xs md:text-base">
              Deadline: {job.deadline}
            </p>
            <p className="font-medium px-4 py-2 rounded-md bg-[#280808] text-xs md:text-base">
              Price: {job.price_range}
            </p>
          </div>
        </div>
      </div>
      {/* form */}
        <div className="max-w-screen-lg mx-auto  my-10">
            <h1 className="text-center text-2xl font-medium">Place Your Bid</h1>
          <div className="w-full">
            <div className="card  w-full shadow-xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    placeholder="price"
                    className="input input-bordered"
                    name="price"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Deadline</span>
                  </label>
                  <input
                    type="date"
                    placeholder="price"
                    name="date"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Employers Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="emplyers email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn bg-[#4b1818] hover:bg-[#240707]">Bid on this project</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  );
};
export default JobDetails;
