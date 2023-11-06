import Navbar from "../../components/Navbar/Navbar";
import bannerVideo from "../../assets/bannerAddJob.mp4";
import useAuth from "../../hooks/useAuth";
const AddJob = () => {
  const {user} = useAuth()
  const handleAddJob = e=>{
    e.preventDefault()
  }
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
      {/* form */}
      <div className="max-w-screen-lg mx-auto  my-10">
        <div className="w-full">
          <div className="card  w-full shadow-xl bg-base-100">
            <form onSubmit={handleAddJob} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job Title</span>
                </label>
                <input
                  type="text"
                  placeholder="job title"
                  className="input input-bordered"
                  name="title"
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
             <div className="flex flex-col  gap-4 md:flex-row">
             <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Minimum Price</span>
                </label>
                <input
                  type="text"
                 
                  placeholder="min price"
                
                  className="input input-bordered"
                 
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Maximum Price</span>
                </label>
                <input
                  type="text"
                 
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
               <textarea name="description" className="input h-full px-4 pt-3 input-bordered" id="desc" cols="10" rows="5" placeholder="write a description.."></textarea>

               
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-[#4b1818] hover:bg-[#240707]"
                
                >
                  Bid on this project
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddJob;
