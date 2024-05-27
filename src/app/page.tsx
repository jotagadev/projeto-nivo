import React from "react";
import styles from "./page.module.css";
import PriceOption from "@/components/PriceOption/PriceOption";

import { fetchPrice } from "@/actions/main";

export default async function App() {
  const ETH = await fetchPrice("ETH");
  const BTC = await fetchPrice("BTC");
  const LTC = await fetchPrice("LTC");
  const BNB = await fetchPrice("BNB");
  const data = [ETH, BTC, LTC, BNB];

  return (
    <div className={styles.container}>
      <PriceOption data={data}></PriceOption>
    </div>
  );
}
