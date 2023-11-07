import { useQuery } from "@tanstack/react-query";
import GeneralNav from "../../components/Navbar/GeneralNav";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { AiOutlineCheckCircle, AiOutlineDelete } from "react-icons/ai";
import toast from "react-hot-toast";
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
    const status = {status: "Rejected"}
    axios.patch(`/bids/${_id}`, status).then((res) => {
      if(res.data.modifiedCount>0){
        toast.success("Bid Rejected")
        refetch()
       
      }
    });
   
  };
  return (
    <>
      <GeneralNav />
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead >
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Biders Email</th>
              <th>Deadline</th>
              <th>Price</th>
              <th>Status</th>
              <th>Accept</th>
              <th></th>
              <th>Reject</th>
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
                <td>{bid?.status}</td>
                
                {
                  bid?.status==="Rejected" ? <td>-</td> :  <td><AiOutlineCheckCircle
                  className="hover:cursor-pointer hover:text-green-600"
                  size={25}
                /></td>
                }
                <td>
                 
                </td>
                {
                  bid?.status=== "Rejected" ? <td>-</td> : <td>
                  <AiOutlineDelete
                    onClick={() => handeReject(bid?._id)}
                    className="hover:cursor-pointer hover:text-red-600"
                    size={25}
                  />
                </td>
                }
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default BidRequests;
