import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data?.data?.news_category));
  }, []);

  return (
    <div>
      <h2 className="font-semibold">All Category</h2>
      <div className="flex flex-col justify-center items-center gap-1 mt-6">
        {categories.map((category) => (
          <NavLink
            key={category?.category_id}
            to={`/category/${category?.category_id}`}
            className="hover:bg-[#E7E7E7] py-2 rounded-lg w-full text-center" 
          >
            {category?.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
