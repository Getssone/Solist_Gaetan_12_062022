import React from "react";
import "./DashboardAside.css";
import PropTypes from "prop-types";

export default function DashboardAside({ image, title, value, unit }) {
  return (
    <div className="count ">
      <img src={image} alt={title} />
      <div className="textCount">
        <div className="value">
          {value}
          {unit}
        </div>
        <p>{title}</p>
      </div>
    </div>
  );
}
DashboardAside.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  value: PropTypes.number,
};
