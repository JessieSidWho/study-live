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

const Reggae = () => (
  <div className="" style={divStyle}>
    <iframe title="reggae" src="https://streamable.com/s/f9ece/balkoy?autoplay=1" frameborder="0" width="90%" height="90%" allowfullscreen style={iframeStyle}></iframe>
  </div>
);

export default Reggae;
