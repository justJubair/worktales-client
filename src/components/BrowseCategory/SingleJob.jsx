import PropTypes from "prop-types"
const SingleJob = ({job}) => {
    return(
        <div className="card w-full bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="text-xl font-bold text-center text-[#a55b5b]">{job.job_title}</h2>
    <div className="text-start space-y-2 mt-6">
    <p><span className="font-medium">Deadline:</span> {job.deadline}</p>
    <p><span className="font-medium">Price:</span> {job.price_range}</p>
    <p><span className="font-medium">Description:</span> {job.description}</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn bg-[#4b1818]">Bid Now</button>
    </div>
  </div>
</div>
    )}

SingleJob.propTypes = {
  job:PropTypes.object,
}    
export default SingleJob;