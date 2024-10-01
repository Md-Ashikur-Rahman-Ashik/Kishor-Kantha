import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <img src="/Footer.jpg" className="container mx-auto" alt="" />
    </>
  );
};

export default Main;
