import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import GeneralNav from "../../components/Navbar/GeneralNav";
import { useEffect, useState } from "react";

const UpdateJob = () => {
  const [job, setJob] = useState({})
  const [category, setCategory] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams();
  const { user } = useAuth();
  const axios = useAxios();


  useEffect(()=>{
    axios.get(`/jobs/${id}`)
    .then(res=>{
      setJob(res.data)
      setIsLoading(false)
    })
  },[axios, id, ])
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  const handleBid = (e) => {
    e.preventDefault();
  };

  const handleCategory=e=>{
   
    setCategory(e.target.value)
  }
 
  return (
    <>
      <GeneralNav/>
      
      {/* form */}
      <div className="max-w-screen-lg mx-auto  my-10">
        <h1 className="text-center text-2xl font-medium">Update Your Posted Job</h1>
        <div className="w-full">
          <div className="card  w-full shadow-xl bg-base-100">
            <form onSubmit={handleBid} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job Title</span>
                </label>
                <input
                  type="text"
                  placeholder="job title"
                  className="input input-bordered"
                  name="title"
                  defaultValue={job?.job_title || ""}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <input
                  type="date"
                  defaultValue={job?.deadline}
                  placeholder="price"
                  name="deadline"
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
                  value={user?.email || ""}
                  className="input input-bordered"
                  required
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Choose a category</span>
                </label>
                <select defaultValue={job?.category} onChange={handleCategory} className="input input-bordered">
                  <option value="webDevelopment">Web Development</option>
                  <option value="digitalMarketing">Digital Marketing</option>
                  <option value="graphicsDesigning">Graphics Design</option>
                </select>
              </div>
              <div className="flex flex-col  gap-4 md:flex-row">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Minimum Price</span>
                  </label>
                  <input
                    type="number"
                    placeholder="min price"
                    name="minPrice"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Maximum Price</span>
                  </label>
                  <input
                    type="number"
                    name="maxPrice"
                    placeholder="max price"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  defaultValue={job?.description || ""}
                  placeholder="emplyers email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-[#4b1818] hover:bg-[#240707]"
                >
                 update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default UpdateJob;
