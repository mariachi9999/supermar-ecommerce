import React from "react";
import ShopKids from "../../assets/shopKids.jpg";
import ShopGirls from "../../assets/shopGirls.jpg";
import "./styles.scss";

const Directory = () => {
  return (
    <div className="directory">
      <div className="wrap">
        <div className="item" style={{ backgroundImage: `url(${ShopGirls})` }}>
          <a>Shop Girls</a>
        </div>
        <div className="item" style={{ backgroundImage: `url(${ShopKids})` }}>
          <a>Shop Kids</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
