import { useQuery } from "@tanstack/react-query";
import GeneralNav from "../../components/Navbar/GeneralNav";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const MyBids = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const getUserBids = async () => {
    const res = await axios.get(`/bids?userEmail=${user?.email}`);
    return res.data;
  };
  const { data: bids, isLoading, refetch } = useQuery({
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
  if(!isLoading){
    refetch()
  }

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
              <th>Employer Email</th>
              <th>Deadline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          
            {bids?.map((bid) => (
              <tr key={bid._id}>
                <th></th>
                <td>{bid?.title}</td>
                <td>{bid?.employerEmail}</td>
                <td>{bid?.deadline}</td>
                {
                  bid?.status === "Rejected" ? <td>Cancel</td> : <td>pending</td>
                }
                {/* <td>{bid?.status === "Rejected" ?}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default MyBids;
