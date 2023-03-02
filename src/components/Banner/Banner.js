import React from "react";

function Banner({ children, bannerStyle }) {
  return <div className={`${bannerStyle} banner`}>{children}</div>;
}

export default Banner;
