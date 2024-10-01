import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <img src="/Footer.jpg" className="container mx-auto" alt="" />
      <Footer></Footer>
    </>
  );
};

export default Main;
