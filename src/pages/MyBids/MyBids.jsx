import { useQuery } from "@tanstack/react-query";
import GeneralNav from "../../components/Navbar/GeneralNav";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";

const MyBids = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const getUserBids = async () => {
    const res = await axios.get(`/bids?userEmail=${user?.email}`);
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
  const handleComplete = (_id) => {
    const status = { status: "complete" };
    axios.patch(`/bids/${_id}`, status).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("Task completed");
        refetch();
      }
    });
  };

  return (
    <>
      <GeneralNav />
      <div className="max-w-screen-xl mx-auto overflow-x-auto">
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
                    <td>cancel</td>
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
                      className="btn btn-xs bg-green-600 text-white"
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
    </>
  );
};
export default MyBids;
