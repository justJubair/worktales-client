import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAxios from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import SingleJob from "./SingleJob";

const BrowseCategory = () => {
  const [category, setCategory] = useState("webDevelopment");
  const [jobs, setjobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const axios = useAxios();
  useEffect(() => {
    axios.get(`/jobs?category=${category}`).then((res) => {
      setjobs(res.data);
      setIsLoading(false)
    });
  }, [axios, category]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  const handleCategory = (e) => {
    const selectedCategory = e.target.textContent;
    if (selectedCategory === "Digital Marketing") {
      setCategory("digitalMarketing");
    } else if (selectedCategory === "Graphics Design") {
      setCategory("graphicsDesigning");
    } else {
      setCategory("webDevelopment");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-10 px-4">
      <h2 className="text-center my-6 text-3xl md:text-4xl font-extrabold">Our <span className="text-[#7e3838]">Job</span> Categories</h2>
      <Tabs className={"text-center"}>
        <TabList className={"mb-6"}  onClick={handleCategory}>
          <Tab>Web Development</Tab>
          <Tab>Digital Marketing</Tab>
          <Tab>Graphics Design</Tab>
        </TabList>

        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <TabPanel key={idx}>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 px-4 lg:px-0">

              {jobs?.map((job) => (
                <SingleJob key={job._id} job={job} />
              ))}
            </div>
            </TabPanel>
          ))}
      </Tabs>
    </div>
  );
};
export default BrowseCategory;
