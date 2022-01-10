import React from "react";
import FeaturedInfo from "../../components/featureInfo/FeaturedInfo";
import Charts from "../../components/charts/Charts";
import { userData } from "../../dummyData";

import "./home.css";
function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Charts
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets"></div>
    </div>
  );
}

export default Home;
