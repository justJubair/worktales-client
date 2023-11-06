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
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {/* <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr> */}
            {bids?.map((bid) => (
              <tr key={bid._id}>
                <th></th>
                <td>{bid?.title}</td>
                <td>{bid?.employerEmail}</td>
                <td>{bid?.deadline}</td>
                <td>{bid?.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default MyBids;
