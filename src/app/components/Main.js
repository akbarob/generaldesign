import React from "react";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import { ArrowRight, Search } from "react-bootstrap-icons";
import "../../app/page.module.css";
import Filter from "./Filter";
import Cards from "./Cards";

export default function Main() {
  const cardItems = [
    {
      title: "App Development",
      duration: "1 Week Left",
      progress: "34",
      icon: "/mobile.svg",
      color: "#EA5B92",
    },
    {
      title: "Web instructors",
      duration: "4 Week Left",
      progress: "14",
      icon: "/computer.svg",
      color: "#14C3A4",
    },
    {
      title: "Web3 Managers",
      duration: "5 Days Left",
      progress: "28",
      icon: "web-page.svg",
      color: "#4F96F7",
    },
    {
      title: "Data Analysts",
      duration: "2 Week Left",
      progress: "22",
      icon: "pie-chart.svg",
      color: "#FA8035",
    },
    {
      title: "Pay Stack",
      duration: "14 Week Left",
      progress: "55",
      icon: "wallet.svg",
      color: "#D189E1",
    },
    {
      title: "Data Managers",
      duration: "15 Week Left",
      progress: "29",
      icon: "data-base.svg",
      color: "#FB8137",
    },
    {
      title: "Cinematography",
      duration: "2 Days Left",
      progress: "4",
      icon: "video.svg",
      color: "#7EBCE2",
    },
    {
      title: "Feedback",
      duration: "3 Week Left",
      progress: "32",
      icon: "service-line.svg",
      color: "#E65A8F",
    },
  ];

  return (
    <Stack className="h-100vh ">
      <Stack direction="horizontal" className=" ">
        <Row
          className=" border border-secondary rounded ms-2"
          //   style={{ height: "23px", width: "155px" }}
        >
          <Col className="">
            <Search color="" />
            <input className="bg-transparent input" type="search" />
            {/* <input className="border-none" /> */}
          </Col>
        </Row>

        <div className="ms-auto">
          <Image src="notify.svg" style={{ height: "24px", width: "24px" }} />
        </div>
        <Row className="ms-5">
          <Col className="d-flex justify-content-between  align-items-center ">
            <Image
              src="Ellipse 2.svg"
              roundedCircle
              style={{ height: "34px", width: "34px" }}
            />
            <div className="mx-3">
              <h3 className="card-title">Anna Newman</h3>
              <h5 className="card-subtitle">Head HR </h5>
            </div>
          </Col>
        </Row>
      </Stack>

      <Stack className="mainContainer ">
        <div className=" d-flex justify-content-between  align-items-center ">
          <div>
            <h2 className="reporting">Reporting</h2>
            <h6 className="sub-reporting">All project in current month</h6>
          </div>

          <div
            className="d-flex align-items-center  justify-content-center rounded"
            style={{
              width: "25px",
              height: "25px",
              backgroundColor: "#00B0D7",
            }}
          >
            <Image src="plus.svg" style={{ height: "14px", width: "14px" }} />
          </div>
        </div>
        <div>
          <Filter />
        </div>

        <div className="mx-auto col-11 ">
          <Row className=" ">
            {cardItems.map((item, i) => (
              <Cards
                title={item.title}
                duration={item.duration}
                progress={item.progress}
                icon={item.icon}
                color={item.color}
              />
            ))}
          </Row>
        </div>
      </Stack>
    </Stack>
  );
}
