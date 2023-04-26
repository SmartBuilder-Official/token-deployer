import React from "react";
import { Layout } from "./components";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./config/routes";
// import bg from "./assets/image_bg.png";
import { useMediaQuery } from "react-responsive";
import DesktopAnimation from "./animations/DesktopAnimation";

const App = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)"
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1000px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  return isBigScreen ? (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  ) : (
    <DesktopAnimation />
  );
};

export default App;
