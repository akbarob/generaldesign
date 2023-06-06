import React from "react";
import { Image, Stack } from "react-bootstrap";

export default function Sidebar() {
  const MenuLinks = [
    { title: "Board", icon: "dashboard.svg" },
    { title: "Plan Schedule", icon: "schedule.svg" },
    { title: "Reporting", icon: "report.svg" },
    { title: "Message", icon: "message.svg" },
    { title: "Team Member", icon: "team.svg" },
    { title: "Tools Plugin", icon: "world.svg" },
    { title: "Roadmap", icon: "roadmap.svg" },
    { title: "Settings", icon: "settings.svg" },
  ];
  return (
    <Stack className="d-none d-lg-block w-25 ">
      <Stack>
        <div className=" mx-auto d-flex align-items-center">
          <Image src="Ellipse 1.svg" alt="" />
          <h1 className="brand mt-2 ms-2">Compute</h1>
        </div>
        <div className="mb-5 w-100 ">
          {MenuLinks.map((item, i) => (
            <div
              className="w-100 d-flex align-items-center mx-auto px-3 py-1 my-2 rounded links"
              key={i}
              style={{
                backgroundColor: item.title === "Reporting" && "#00B0D7",
              }}
            >
              <Image className="m-3" src={item.icon} alt="" />
              <h6 className="links-text mt-2 w-100"> {item.title}</h6>
            </div>
          ))}
        </div>
      </Stack>

      <div className="d-flex px-4 py-3 rounded links mt-5 ">
        <Image className="me-3" src="logout.svg" alt="" />
        Logout
      </div>
    </Stack>
  );
}
