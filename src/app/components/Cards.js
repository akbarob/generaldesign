import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";

export default function Cards({ title, duration, progress, icon, color }) {
  return (
    <Card
      style={{ width: "160px", height: "165px" }}
      className="mx-5  px-4 py-3 position-relative card my-4 "
    >
      <div
        style={{ width: "38px", height: "38px", backgroundColor: color }}
        className={`badge shadow  rounded-circle d-flex align-items-center  justify-content-center`}
      >
        <Image src={icon} />
      </div>
      <Card.Title className="card-title">{title}</Card.Title>
      <Card.Subtitle className="card-subtitle ">
        <span className="me-1">
          <Image src="target.svg" alt="" />
        </span>
        {title}
      </Card.Subtitle>
      <Card.Subtitle>
        <span className="me-1">
          <Image src="time.svg" alt="" />
        </span>
        {duration}
      </Card.Subtitle>
      <div className="border mt-2" style={{ width: "106px" }}></div>
      <div className="d-flex mt-4 ">
        <Col className="card-subtitle me-2  col-auto">
          <p className="mb-1">Team Members</p>
          <div className="d-flex">
            {[
              "Ellipse 3.png",
              "Ellipse 4.png",
              "Ellipse 5.png",
              "Group 19.svg",
            ].map((item, i) => (
              <div key={i} className="me-1">
                <Image src={item} className="mx-auto" />
              </div>
            ))}
          </div>
        </Col>
        <Col className="card-subtitle ms-1 col-4">
          <p className="mb-1">Progress</p>
          <p>{progress}%</p>
        </Col>
      </div>
    </Card>
  );
}
