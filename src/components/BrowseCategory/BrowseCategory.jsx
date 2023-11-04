import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAxios from "../../hooks/useAxios";
import { useEffect, useState } from "react";

const BrowseCategory = () => {
    const [category, setCategory] = useState("webDevelopment")
    const [jobs, setjobs] = useState([])
    const axios = useAxios()
    useEffect(()=>{
        axios.get(`/jobs?category=${category}`)
        .then(res=>{
            setjobs(res.data)
        })
    },[axios, category])
   
    console.log(jobs)
    const handleCategory =e=>{
        const selectedCategory =  e.target.textContent
        if(selectedCategory === "Digital Marketing"){
            setCategory("digitalMarketing")
          
        } else if(selectedCategory === "Graphics Design"){
            setCategory("graphicsDesigning")
           
        }
    }
    
  return (
    <div>
      <Tabs className={"text-center"}>
        <TabList onClick={handleCategory}>
          <Tab>Web Development</Tab>
          <Tab>Digital Marketing</Tab>
          <Tab>Graphics Design</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};
export default BrowseCategory;
