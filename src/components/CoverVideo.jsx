import React from "react";
import styled from "styled-components";
import Gif from "../assets/Home GIF.gif"; // Import your GIF file here

const CoverVideo = () => {
  return (
    <VideoContainer>
      <img src={Gif} alt="Home GIF" /> {/* Use an img tag to display the GIF */}
    </VideoContainer>
  );
};

const VideoContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  }
`;

export default CoverVideo;
