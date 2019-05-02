import React from "react";

const divStyle = {
  width: '100%',
  height: '0px',
  position: 'relative',
  paddingBottom: '56.250%',
  margin: 'auto'
}

const iframeStyle = {
  position: 'absolute',
  left: '0px',
  top: '0px',
  overflow: 'hidden',
  margin: '5%'
}

const Indie = () => (
  <div style={divStyle}>
    <iframe
      title="indie"
      src="https://streamable.com/s/afpl7/pjylnf?autoplay=1"
      frameBorder="0"
      width="90%"
      height="90%"
      allowFullScreen
      style={iframeStyle} />
  </div>
);

export default Indie;