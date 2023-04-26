import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/desktop.json";
import { Box, Button, Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/layout";
import logo from "../assets/Smart Builders Logo.png";
import brandName from "../assets/Smart Builders Logo text.png";
import archwayIcon from "../assets/archway.png";

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
        <Text
          fontFamily={"serif"}
          fontWeight={"extrabold"}
          fontSize={"1.5rem"}
          padding={"10%"}
          textAlign={"center"}
        >
          This App is currently only available for Desktop Viewing
        </Text>
      </div>
      <Lottie
        options={defaultOptions}
        height={"70vw"}
        width={"70vw"}
        style={{ maxWidth: 400, maxHeight: 400 }}
      />
      <Box display="flex" alignItems="center">
        <Image boxSize="40px" src={logo} alt="logo" />
        <Image ml="1rem" src={brandName} alt="brandName" />
      </Box>
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
