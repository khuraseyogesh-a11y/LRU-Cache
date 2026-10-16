import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.js";

function Layout() {
  return (
    <div className="container-fluid min-vh-100 bg-light">

      {/* Top Navbar */}
      <nav className="navbar navbar-dark bg-dark px-4">

        <span className="navbar-brand mb-0 h1">
          LRU CACHE SYSTEM
        </span>

        <span className="text-success">
          ● Connected
        </span>

      </nav>


      <div className="row">

        {/* Sidebar */}
        <div className="col-md-2 bg-white border-end min-vh-100 p-0">

          <Sidebar />

        </div>


        {/* Main Content */}
        <div className="col-md-10 p-4">

          <Outlet />

        </div>

      </div>

    </div>
  );
}

export default Layout;