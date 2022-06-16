import React from "react";
import PropTypes from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import "./Radar.css";

export default function Rada({ data: { data } }) {
  const formatActivity = (capaciter) => {
    let tradInFrench;
    switch (capaciter) {
      case "cardio":
        tradInFrench = "Cardio";
        break;
      case "energy":
        tradInFrench = "Énergie";
        break;
      case "endurance":
        tradInFrench = "Endurance";
        break;
      case "strength":
        tradInFrench = "Force";
        break;
      case "speed":
        tradInFrench = "Vitesse";
        break;
      case "intensity":
        tradInFrench = "Intensité";
        break;
      default:
        tradInFrench = "";
        break;
    }
    return tradInFrench;
  };
  return (
    <section className="RadarContainer">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <RadarChart
        //La coordonnée du centre
          cx="50%"
          cy="50%"
        //Le rayon intérieur minim du cercle
          innerRadius="5%"
        //Le rayon extérieur maxminim du cercle
          outerRadius="60%"
          data={data}
          
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            tickFormatter={(capaciter) => formatActivity(capaciter)}
            tick={{ fontSize: 12, fontWeight: 500 }}
            stroke="white"
            dy={5}
            
          />
          
          <Tooltip
          labelFormatter={(capaciter) => formatActivity(capaciter)}
          />

          <Radar
            name="Performance"
            dataKey="value"
            fill="#e60000"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
}

Rada.propTypes = {
  data: PropTypes.object.isRequired,
};
