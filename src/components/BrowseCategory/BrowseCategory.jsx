import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import { motion } from "framer-motion";
import SingleJob from "./SingleJob";
import loadingAnimation from "../../assets/animations/loadingAnimation.json"
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";

const BrowseCategory = () => {
  const [category, setCategory] = useState("webDevelopment");
  const axios = useAxios();
  const getJobs = async()=>{
    const res = await axios.get(`/jobs?category=${category}`)
    return res
  }
  const {data:jobs, isLoading, refetch} = useQuery({
    queryKey: ["jobs"],
    queryFn: getJobs
  })
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
       <Lottie className="w-96" animationData={loadingAnimation} loop={true}></Lottie>
      </div>
    );
  }
  if(!isLoading){
     refetch()
  }
 

  const handleCategory = (e) => {
    const selectedCategory = e.target.textContent;
    if (selectedCategory === "Digital Marketing") {
      setCategory("digitalMarketing");
      refetch()
    } else if (selectedCategory === "Graphics Design") {
      setCategory("graphicsDesigning");
      refetch()
    } else {
      setCategory("webDevelopment");
      refetch()
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-10 mb-36 px-4">
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
            <div className="example-container grid gap-4 grid-cols-1 md:grid-cols-2 px-4 lg:px-0">

              {jobs?.data?.map((job) => (
                <motion.div whileHover={{scale: 0.9}} whileTap={{scale:1.1}} transition={{duration: 0.3}} key={job._id}>

                  <SingleJob  job={job} />
                </motion.div>
              ))}
            </div>
            </TabPanel>
          ))}
      </Tabs>
    </div>
  );
};
export default BrowseCategory;
