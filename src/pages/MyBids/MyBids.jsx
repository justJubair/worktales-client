import { useQuery } from "@tanstack/react-query";
import GeneralNav from "../../components/Navbar/GeneralNav";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import loadingAnimation from "../../assets/animations/loadingAnimation.json"
import { useState } from "react";
import Lottie from "lottie-react";
const MyBids = () => {
  const { user } = useAuth();
  const [sortOrder, setSortOrder] = useState(null)
  // const [bids, setBids] = useState([]);
  const axios = useAxios();
  const getUserBids = async () => {
    if(user?.email && sortOrder){
      const res = await axios.get(`bids?userEmail=${user?.email}&sortField=status&sortOrder=${sortOrder}`)
      return res.data
    } else if(user?.email){
      const res = await axios.get(`/bids?userEmail=${user?.email}`);
      return res.data
    }
    
   
  };
  const { data:bids, isLoading, refetch } = useQuery({
    queryKey: ["userBids"],
    queryFn: getUserBids,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
       <Lottie animationData={loadingAnimation}></Lottie>
      </div>
    );
  }
  if (!isLoading) {
    refetch();
  }

  const handleComplete = (_id) => {
    const status = { status: "complete" };
    axios.patch(`/bids/${_id}`, status).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("Task completed");
        refetch();
      }
    });
  };

  const handleSorting = (e) => {
    setSortOrder(e.target.value)
  };

  return (
    <>
      <GeneralNav />
      <div className="max-w-screen-xl mx-auto px-4 h-screen mt-10">
        <div className="text-end mb-4">
          <select
            onChange={handleSorting}
            defaultValue="bids"
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled value="bids">
              Sort your bids
            </option>
            <option value="asc">From accepted to rejected</option>
            <option value="desc">From rejected to accepted</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Job Title</th>
                <th>Employer Email</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bids?.map((bid) => (
                <tr key={bid._id}>
                  <th></th>
                  <td>{bid?.title}</td>
                  <td>{bid?.employerEmail}</td>
                  <td>{bid?.deadline}</td>
                  {bid?.status !== "pending" ? (
                    bid.status === "rejected" ? (
                      <td>canceled</td>
                    ) : bid.status === "accepted" ? (
                      <td>in progress</td>
                    ) : bid.status === "complete" ? (
                      <td>completed</td>
                    ) : (
                      <td>-</td>
                    )
                  ) : (
                    <td>pending</td>
                  )}

                  {bid?.status === "complete" ? (
                    <td>-</td>
                  ) : (
                    <td>
                      <button
                        onClick={() => handleComplete(bid?._id)}
                        disabled={bid?.status === "accepted" ? false : true}
                        className="btn btn-xs bg-green-600 text-white hover:bg-green-700"
                      >
                        complete
                      </button>
                    </td>
                  )}

                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default MyBids;
