import React from "react";
import { Link } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <h1 className="text-3xl font-medium text-center py-5 bg-slate-500 text-slate-200 flex items-center justify-center gap-2">
        <BsFillPeopleFill />
        <Link to="/">Contact List</Link>
      </h1>
    </>
  );
};

export default Header;
