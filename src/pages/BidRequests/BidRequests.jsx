import { useQuery } from "@tanstack/react-query";
import GeneralNav from "../../components/Navbar/GeneralNav";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { AiOutlineCheckCircle, AiOutlineDelete } from "react-icons/ai";
import toast from "react-hot-toast";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
const BidRequests = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const getUserBids = async () => {
    const res = await axios.get(`/bids?employerEmail=${user?.email}`);
    return res.data;
  };
  const {
    data: bids,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["userBids"],
    queryFn: getUserBids,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (!isLoading) {
    refetch();
  }
  const handeReject = (_id) => {
    const status = { status: "rejected" };
    axios.patch(`/bids/${_id}`, status).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("Bid Rejected");
        refetch();
      }
    });
  };
  const handleAccept = (_id) => {
    const status = { status: "accepted" };
    axios.patch(`/bids/${_id}`, status).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("Bid Accepted");
        refetch();
      }
    });
  };
  return (
    <>
      <GeneralNav />
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Biders Email</th>
              <th>Deadline</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bids?.map((bid) => (
              <tr key={bid._id}>
                <th></th>
                <td>{bid?.title}</td>
                <td>{bid?.userEmail}</td>
                <td>{bid?.deadline}</td>
                <td>${bid?.price}</td>
                {bid?.status !== "pending" ? (
                  bid?.status === "rejected" ? (
                    <td>rejected</td>
                  ) : (
                    <td>in progress</td>
                  )
                ) : (
                  <td>pending</td>
                )}

                {bid?.status !== "pending" ? (
                  bid?.status === "rejected" ? (
                    <td>-</td>
                  ) : (
                    <td>bar bar</td>
                  )
                ) : (
                  <td>
                    <button
                      onClick={() => handleAccept(bid?._id)}
                      className="btn btn-xs bg-green-600 text-white"
                    >
                      accept
                    </button>
                  </td>
                )}

                {bid?.status === "rejected" || bid?.status === "accepted" ? (
                  <td>-</td>
                ) : (
                  <td>
                    <button
                      onClick={() => handeReject(bid?._id)}
                      className="btn btn-xs bg-red-600 text-white"
                    >
                      reject
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default BidRequests;
