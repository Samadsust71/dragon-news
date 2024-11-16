import React from "react";
import Header from "../components/Header";
import RightNavbar from "../components/layout-components/RightNavbar";
import { Link, useLoaderData } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
  const { data } = useLoaderData();
  const news = data[0];
 
  return (
    <div className="w-11/12 mx-auto font-poppins py-5">
      <header>
        <Header></Header>
      </header>
      
      <main className="grid md:grid-cols-12 gap-3">
        <section className="col-span-12 md:col-span-9">
          <h2 className="font-semibold mb-6">Dragon News</h2>
          <div className="card bg-base-100 shadow-xl border rounded-none">
            <figure className="px-8 pt-8 rounded-none">
              <img src={news?.image_url} alt="Shoes" className="rounded-none w-full" />
            </figure>
            <div className="card-body items-start text-start">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link to={`/category/${news?.category_id}`} className="btn bg-[#D72050] border-none rounded-none text-white"> <FaArrowLeft/> All news in this category</Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="md:col-span-3 col-span-12">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
