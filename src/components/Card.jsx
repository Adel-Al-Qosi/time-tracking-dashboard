import { useEffect, useState } from "react";
import dots from "../images/icon-ellipsis.svg";

function Card({ object, timeframe }) {
  const [newTimeframe, setNewTimeframe] = useState("Day");

  useEffect(() => {
    if (timeframe === "daily") setNewTimeframe("Day");
    if (timeframe === "weekly") setNewTimeframe("Week");
    if (timeframe === "monthly") setNewTimeframe("Month");
  }, [timeframe]);

  return (
    <div className={"card"}>
      <div className={`color-card ${object.title}`}></div>
      <div className="info-card">
        <div className="info-card--1st">
          <h2>{object.title}</h2>
          <button className="btn-dots"><span className="sr-only">menu</span></button>
        </div>
        <div className="info-card--times">
          <div className="info-card--current">
            {object.timeframes[timeframe].current}hrs
          </div>
          <div className="info-card--previous">
            Last {newTimeframe} - {object.timeframes[timeframe].previous}hrs
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
