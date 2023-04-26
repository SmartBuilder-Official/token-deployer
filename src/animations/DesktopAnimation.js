import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/desktop.json";
import { Text } from "@chakra-ui/layout";

const DesktopAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div style={text_style}>
      <div>
        <Text fontFamily={"serif"} fontWeight={"extrabold"} fontSize={"1.5rem"}>
          This App is currently only available for Desktop Viewing
        </Text>
      </div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default DesktopAnimation;

const text_style = {
  //   height: "100vh",
  marginTop: "10%",
  fontFamily: "sans-serif",
  fontWeight: "2rem",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};
