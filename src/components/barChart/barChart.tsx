"use client"

import styles from "./barChart.module.css"
import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const BarChart = ({ data }: any) => {
    
  return (
    <div className={styles.container}>
      <ResponsiveBar
        data={data}
        keys={["value"]}
        indexBy="id"
        colorBy="indexValue"
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
        padding={0.55}
        valueScale={{ type: "linear" }}
        colors={{ scheme: 'nivo' }}
        animate={true}
        label={d => `R$ ${d.value}`}
        // enableLabel={false}
        axisTop={null}
        
        isInteractive={false}
        axisRight={null}
        axisLeft={{
          tickSize: -20,
          tickPadding: 0,
          tickRotation: 0,
          legend: "Reais",
          legendPosition: "middle",
          legendOffset: -40,
        }}
      />
    </div>
  );
};

export default BarChart;
