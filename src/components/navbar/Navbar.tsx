import React from "react";

const Navbar = ({isCol=false}:{isCol?: boolean}) => {
  return (
<div className={`${!isCol ? "flex" : "flex-col"} justify-between`}>
      <div className="menu-item px-4">Who we are</div>
      <div className="menu-item px-4">Events</div>
      <div className="menu-item px-4">Resources</div>
      <div className="menu-item px-4">Become a Member</div>
    </div>
  );
};

export default Navbar;
