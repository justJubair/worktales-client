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
 
  const defaultMinPrice = job?.price_range.split(" ")[0].split("$")[1]
  const defaultMaxPrice = job?.price_range.split(" ")[2].split("$")[1]
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const deadline = form.deadline.value;
    const updatedCategory = category || job?.category;
    const minPrice = parseInt(form?.minPrice?.value);
    const maxPrice = parseInt(form?.maxPrice?.value);
    const description = form.description.value;

     // form validation
     if(minPrice < 1){
      return toast.error("Invalid price")
    }
    if(maxPrice <1){
      return toast.error("Invalid price")
    }
    if(maxPrice === minPrice){
      return toast.error("Invalid price")
    }
    if(minPrice > maxPrice){
      return toast.error("Invalid price")
    }
    // validation ENDS
    const price_range = `$${minPrice} - $${maxPrice} per hour`
    const updatedJob = {title, deadline, price_range, description, updatedCategory}
    axios.put(`/jobs/${id}`, updatedJob)
    .then(res=>{
      if(res.data.modifiedCount> 0){
        toast.success("Job updated successfully")
      }
    })
    
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
            <form onSubmit={handleUpdate} className="card-body">
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
                    defaultValue={defaultMinPrice}
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
                   defaultValue={defaultMaxPrice}
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
                  name="description"
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
