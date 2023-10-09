import React from "react";
import PropTypes from "prop-types";
import StyledVideoIframe from "./VideoIframe.styles";


const VideoIframe = ({ embedId }) => (
  <StyledVideoIframe>
    <iframe
      width="853"
      height="480"
      src={embedId}
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
