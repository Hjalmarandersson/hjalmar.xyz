import { useState } from "react";
import Menu from "../components/Menu";
import Nav from "../components/Nav";

export default function About() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Nav setOpenMenu={setOpenMenu} />
      {openMenu && <Menu setOpenMenu={setOpenMenu} />}
      <div className="flex justify-center items-center h-screen w-screen text-center">
        <p>coming soon</p>
      </div>
    </>
  );
}
