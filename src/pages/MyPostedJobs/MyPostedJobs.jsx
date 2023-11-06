import GeneralNav from "../../components/Navbar/GeneralNav";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import PostedJobCard from "./PostedJobCard";
import { useEffect, useState } from "react";

const MyPostedJobs = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [userPostedJobs, setUserPostedJobs] = useState({});
  const { user } = useAuth();
  const axios = useAxios();
  useEffect(() => {
    axios.get(`/jobs?employer_email=${user?.email}`).then((data) => {
      setUserPostedJobs(data.data);
      setIsLoading(false)
    });
  }, [axios, user?.email]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      <GeneralNav />
      <div className="max-w-screen-xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 px-2 lg:px-0">
        {userPostedJobs?.map((job) => (
          <PostedJobCard key={job._id} job={job} />
        ))}
      </div>
    </>
  );
};
export default MyPostedJobs;
