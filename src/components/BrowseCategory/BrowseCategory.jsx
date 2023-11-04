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
    <div>
      <Tabs className={"text-center"}>
        <TabList onClick={handleCategory}>
          <Tab>Web Development</Tab>
          <Tab>Digital Marketing</Tab>
          <Tab>Graphics Design</Tab>
        </TabList>

        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <TabPanel key={idx}>
              {jobs?.map((job) => (
                <SingleJob key={job._id} job={job} />
              ))}
            </TabPanel>
          ))}
      </Tabs>
    </div>
  );
};
export default BrowseCategory;
