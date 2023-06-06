import React from "react";
import "../globals.css";
import { Col, Image, Row } from "react-bootstrap";
import FilterOptions from "./FilterOptions";

export default function Filter() {
  return (
    <div className="d-none  w-100 d-md-flex m-2 border  border-end-0 border-start-0 border-bottom-0 pt-3">
      {[
        { title: "All", count: "50" },
        { title: "Started", count: "20" },
        { title: "Approved", count: "12" },
        { title: "Finished", count: "17" },
      ].map((item, i) => (
        <FilterOptions key={i} title={item.title} count={item.count} />
      ))}

      <div className="ms-auto d-flex ">
        <div
          style={{ height: "25px", width: "44px" }}
          className="d-flex align-items-center  justify-content-center bg-white rounded me-2 px-1"
        >
          <Image src="settings.svg" alt="" />
          <p className="sub-reporting mt-3 ms-1">More</p>
        </div>
        <div
          className="px-2 d-flex align-items-center  justify-content-center rounded mx-2 activeFilter"
          style={{ height: "25px", width: "25px" }}
        >
          <Image src="gg_board.svg" alt="" />
        </div>
        <div
          className=" bg-white d-flex align-items-center  justify-content-center rounded ms-2 "
          style={{ height: "25px", width: "25px" }}
        >
          <Image src="3lines.svg" className="" alt="" />
        </div>
      </div>
    </div>
  );
}
