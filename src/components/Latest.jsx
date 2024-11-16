import React, { useContext, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Latest = () => {
  const [headlines,setHeadlines] = useState([])
  const {setLoading} = useContext(AuthContext)
  useEffect(()=>{
    fetch('https://openapi.programming-hero.com/api/news/category/01')
    .then(res=>res.json())
    .then(data=>{
      setHeadlines(data.data)
      setLoading(false)
    })
  },[])
  return (
    <div className="flex items-center bg-gray-200 p-3 gap-2">
      <p className="bg-[#D72050] text-white py-2 px-4">Latest</p>
      <Marquee
        pauseOnHover={true}
        speed={100}
        // autoFill={true}
        className=""
      >
       {
          headlines.map((headline,idx)=><Link to={`/news/${headline?._id}`} key={idx} className="text-[#D72050]">{headline?.title}...</Link>)
       }
      </Marquee>
    </div>
  );
};

export default Latest;
