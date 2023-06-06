"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

export default function Home() {
  return (
    <Stack direction="horizontal" gap={3} className="m-2">
      <Sidebar className="d-md-none d-lg-block " />
      <Main />
    </Stack>
  );
}
//
