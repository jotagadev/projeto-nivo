import React from "react";
import styles from "./loading.module.css";
import Image from "next/image";

export default function Loading() {
  return (
    <div className={styles.container}>
      <Image
        src={"/loading.gif"}
        width={200}
        height={200}
        alt={"Carregando página"}
      ></Image>
    </div>
  );
}
