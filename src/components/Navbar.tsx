import Link from "next/link";
import React from "react";

const Navbar = ({ isCol = false }: { isCol?: boolean }) => {
  return (
    <div className={`${!isCol ? "flex" : "flex-col"} justify-between`}>
      <Link className="menu-item px-4" href={"/about"}>
        Who we are
      </Link>
      <Link className="menu-item px-4" href={"/contributors"}>
        Contributors
      </Link>

      <div className="menu-item px-4">Events</div>
      <div className="menu-item px-4">Resources</div>
      <div className="menu-item px-4">Become a Member</div>
    </div>
  );
};

export default Navbar;
