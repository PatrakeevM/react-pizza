import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="138" cy="126" r="115" />
    <rect x="0" y="258" rx="12" ry="12" width="280" height="25" />
    <rect x="0" y="302" rx="12" ry="12" width="280" height="88" />
    <rect x="0" y="414" rx="12" ry="12" width="90" height="30" />
    <rect x="132" y="409" rx="20" ry="20" width="150" height="40" />
  </ContentLoader>
);

export default Skeleton;
