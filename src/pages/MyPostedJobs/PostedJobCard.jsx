import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiOutlineSchedule, AiOutlineDollarCircle } from "react-icons/ai";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
const PostedJobCard = ({ job, refetch }) => {
  const axios = useAxios();
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  const handleDelete = () => {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios.delete(`/jobs/${job?._id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your job has been deleted.",
                icon: "success",
              });
              refetch();
            }
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your job is safe :)",
            icon: "error",
          });
        }
      });
  };
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-xl font-bold text-center text-[#a55b5b]">
          {job.job_title}
        </h2>
        <div className="text-start space-y-2 mt-6 flex-1">
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
        <div className="card-actions justify-end mt-4">
          <Link
            to={`/updateJob/${job._id}`}
            className="btn text-white bg-[#4b1818] hover:bg-[#350c0c]"
          >
            Update
          </Link>
          <button onClick={handleDelete} className="btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

PostedJobCard.propTypes = {
  job: PropTypes.object,
  refetch: PropTypes.func,
};
export default PostedJobCard;
