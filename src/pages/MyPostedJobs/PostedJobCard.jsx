import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiOutlineSchedule, AiOutlineDollarCircle } from "react-icons/ai";
const PostedJobCard = ({ job }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-xl font-bold text-center text-[#a55b5b]">
          {job.job_title}
        </h2>
        <div className="text-start space-y-2 mt-6">
          <p className="flex items-center gap-2 font-medium">
            <AiOutlineSchedule size={28} /> {job.deadline}
          </p>
          <p className="flex items-center gap-2 font-medium">
            <AiOutlineDollarCircle size={28} /> {job.price_range}
          </p>
          <p>
            <span className="font-medium">Description:</span> {job.description}
          </p>
        </div>
        <div className="card-actions justify-end">
          <Link
            to={`/updateJob/${job._id}`}
            className="btn bg-[#4b1818] hover:bg-[#350c0c]"
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

PostedJobCard.propTypes = {
  job: PropTypes.object,
};
export default PostedJobCard;
