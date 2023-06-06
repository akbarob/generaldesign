import { Tilt_Neon } from "next/font/google";
import React from "react";

function FilterOptions({ title, count }) {
  return (
    <div className="d-flex align-items-center mx-4">
      <h6 className="mt-2">{title}</h6>
      <div
        style={{ width: "25px", height: "25px" }}
        className={`${
          title === "All" ? "activeFilter" : "bg-white"
        } ms-2 rounded d-flex align-items-center  justify-content-center p-3 `}
      >
        <div>{count}</div>
      </div>
    </div>
  );
}

export default FilterOptions;
