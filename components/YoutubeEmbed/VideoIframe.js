import React from "react";
import PropTypes from "prop-types";
import StyledVideoIframe from "./VideoIframe.styles";
import Image from "next/image";
import ancestorImg from "../../assets/agwu.jpg";

const VideoIframe = ({ embedId }) => (
  <StyledVideoIframe>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </StyledVideoIframe>
);

VideoIframe.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default VideoIframe;
