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

const Lofi = () => (
  <div className="" >
    <h1>Lofi</h1>
    <div className="" style={divStyle}>
    <iframe className='' title="lofi" src="https://streamable.com/s/vxs8r/tdamtm?autoplay=1" frameborder="0" width='90%' height="90%" allowfullscreen style={iframeStyle}></iframe>
    </div>
    
  </div>

);

export default Lofi;
