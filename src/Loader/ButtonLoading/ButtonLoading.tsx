import React from 'react';
import "../ButtonLoading/ButtonLoading.css"

const Loading = () => {
  return (
<div className="window">
  {/* <div className="logo">
    <p className="top">Microsoft</p>
    <p className="mid">Windows<span>XP</span></p>
    <p className="bottom">Professional</p>
  </div> */}
  <div className="container">
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
  </div>
</div>
  );
};

export default Loading;
