import React from "react";
import Header from "../components/Header";
import Latest from "../components/Latest";
import Navbar from "../components/Navbar";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import { Outlet } from "react-router-dom";
import RightNavbar from "../components/layout-components/RightNavbar";

const HomeLayouts = () => {
  return (
    <div className="w-11/12 mx-auto font-poppins">
      <header>
        <Header></Header>
      </header>
      <section>
        <Latest></Latest>
      </section>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="grid md:grid-cols-12 gap-3 mt-6">
        <aside className="col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <main className="col-span-6 mb-6">
          <Outlet></Outlet>
        </main>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
