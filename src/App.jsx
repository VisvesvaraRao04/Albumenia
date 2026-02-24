
import ImagesContainer from "./ImagesContainer";
import CardNav from "./CardNav";
import logo from "./assets/logo.png";
import { BrowserRouter, href, Link, Route, Routes, useNavigate } from "react-router-dom";
import Details from "./Details";
import Login from "./Login";
import SignIn from "./SignIn";
import Footer from "./Footer";
import { useState,useEffect } from "react";
import Loader from "./Loader";

const App = () => {
    let [loader, SetLoader] = useState(true);
  let user=JSON.parse(localStorage.getItem('user'));
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links:
        [{ label: "About me", ariaLabel: "About Me",href:'https://visvesvararao04.github.io/Portfolio-using-ReactJs/' }]
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Restaurent WebApp", ariaLabel: "Project Case Studies",href:'https://github.com/VisvesvaraRao04/Restaurent' },
        { label: "Portfolio", ariaLabel: "Portfolio",href:'https://visvesvararao04.github.io/Portfolio-using-ReactJs/' },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" ,href:'mailto:viswv77@gmail.com' },
        { label: "Github", ariaLabel: "Twitter",href:'https://github.com/VisvesvaraRao04' },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href:'https://www.linkedin.com/in/visvesvararao-vemparala-567b5622b' },
      ],
    },
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      SetLoader(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  if (loader) return <Loader />;
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
          <CardNav
            className="NavBar"
            logo={logo}
            logoAlt="Company Logo"
            items={items}
            baseColor=" rgba(255, 255, 255, 0.1)"
            menuColor="#ffff"
            buttonBgColor="#FF9FFC"
            buttonTextColor="#fff"
            ease="power3.out"
            theme="light"
          />
          <ImagesContainer />
          <Footer/>
          </>} />
        <Route path="/details" element={
          <>
          <CardNav
            className="NavBar"
            logo={logo}
            logoAlt="Company Logo"
            items={items}
            baseColor=" rgba(255, 255, 255, 0.1)"
            menuColor="#ffff"
            buttonBgColor="#FF9FFC"
            buttonTextColor="#fff"
            ease="power3.out"
            theme="light"
          />
          <Details />
          <Footer/>
          </>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
