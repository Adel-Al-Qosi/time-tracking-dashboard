import Card from "./Card";
import User from "./User";
import data from "../data.json";
import { useState } from "react";

function Body() {
  const [timeframe, setTimeframe] = useState("daily");
  return (
    <main className="container">
      <User timeframe={timeframe} setTimeframe={setTimeframe} />
      <div className="cards-container">
        {data.map((object, i) => {
          return <Card key={i} object={object} timeframe={timeframe} />;
        })}
      </div>
    </main>
  );
}

export default Body;
