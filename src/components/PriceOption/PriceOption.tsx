"use client";

import { IoWallet } from "react-icons/io5";
import BarChart from "../barChart/barChart";
import PieChart from "../pieChart/pieChart";
import styles from "./priceOption.module.css";

import React from "react";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { redirect, useRouter, useSearchParams } from "next/navigation";

export default function PriceOption({ data }: any) {
  const params = useSearchParams();
  const router = useRouter();
  const opcao = params.get("q");

  if (opcao != "bar" && opcao != "pie") {
    redirect("?q=bar");
  }

  const handleOptionClick = (option: any) => {
    router.push(`/?q=${option}`);
  };

  return (
    <>
      <div className={styles.containerchart}>
        <h1 className={styles.title}>Comparativo de preço de criptomoedas</h1>
        {opcao === "bar" && <BarChart data={data} />}
        {opcao === "pie" && <PieChart data={data} />}
        <div className={styles.containerbtn}>
          <button
            className={`${styles.optionbtn} ${
              opcao === "bar" && styles.active
            }`}
            onClick={() => handleOptionClick("bar")}
          >
            <IoWallet />
          </button>
          <button
            className={`${styles.optionbtn} ${
              opcao === "pie" && styles.active
            }`}
            onClick={() => handleOptionClick("pie")}
          >
            <RiMoneyDollarCircleFill />
          </button>
        </div>
      </div>
    </>
  );
}
