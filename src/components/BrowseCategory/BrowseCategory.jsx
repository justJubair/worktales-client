import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAxios from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import SingleJob from "./SingleJob";

const BrowseCategory = () => {
  const [category, setCategory] = useState("webDevelopment");
  const [jobs, setjobs] = useState([]);
  const axios = useAxios();
  useEffect(() => {
    axios.get(`/jobs?category=${category}`).then((res) => {
      setjobs(res.data);
    });
  }, [axios, category]);

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
    <div className="max-w-screen-xl mx-auto">
      <Tabs className={"text-center my-16"}>
        <TabList  onClick={handleCategory}>
          <Tab ><h3 className="bg-[#4b1818] text-white rounded-md px-4 py-2">Web Development</h3></Tab>
          <Tab><h3 className="bg-[#4b1818] text-white rounded-md px-4 py-2">Digital Marketing</h3></Tab>
          <Tab><h3 className="bg-[#4b1818] text-white rounded-md px-4 py-2">Graphics Design</h3></Tab>
        </TabList>

        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <TabPanel key={idx}>
            <div className="grid gap-4 grid-cols-1 mt-10 md:grid-cols-2">

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
