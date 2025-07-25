"use client";

import styles from "./page.module.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Image from "next/image";

export default function Home() {
  const [binaryBase, setBinaryBase, ] = useState([8, 4, 2, 1]);
  const [binary, setBinary] = useState([0, 0, 0, 0]);
  const [decimal, setDecimal] = useState(0);

  function addBinaryValue(){
      // get the first binary value
      const newBinaryBase = binaryBase[0] * 2;

      setBinaryBase(() => [newBinaryBase, ...binaryBase]);
      setBinary(()=>[0, ...binary]);
  }

  function addValueToDecimal(binaryData: number, binaryIndex: number){
    let selectedBinaryData = binary[binaryIndex];

    // change the selected binary data
    // change the binary data to 1 if the value is 0, and vice versa
    if(selectedBinaryData === 1){
      selectedBinaryData = 0;
      // get the binaryBase value based on the Binary Index
      const valueToSubtract = binaryBase[binaryIndex];

      setDecimal(decimal - valueToSubtract);
    }else{
      selectedBinaryData = 1;
      // get the binaryBase value based on the Binary Index
      const valueToAdd = binaryBase[binaryIndex];

      setDecimal(decimal + valueToAdd);
    }
    
    // modify the new array
    // remove the selected
    // insert the new value to the array
    const newBinaryData = binary;
    newBinaryData.splice(binaryIndex, 1, selectedBinaryData)
    
    setBinary([...newBinaryData])
  }

  return (
    <div className={styles.page}>
      <h1 style={{textAlign: "left"}}>Binary Simulator</h1>
      <main className={styles.main}>
        <h3>Decimal: &nbsp;<span style={{fontSize: "40px"}}>{decimal}</span></h3>
        <div className={styles.simulatorContainer}>
          <table className={styles.simulatorTable}>
            <thead>
              <tr>
                {binaryBase.map((binaryBaseData) => {
                  return(
                    <th key={uuidv4()}>{binaryBaseData}</th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
               {binary.map((binaryData, binaryIndex)=>{
                  return(
                    <td key={uuidv4()} 
                    className={styles.btnBinaryCell}
                    onClick={()=>{
                     addValueToDecimal(binaryData, binaryIndex)
                    }}>{binaryData}</td>
                  )
                })}
              </tr>
            </tbody>
          </table>
          <button  onClick={addBinaryValue} className={styles.btnAddBinaryValue}>
            <Image 
            alt="add"
              src={"/img/svg/add.svg"}
              width={20}
              height={20}
            />
          </button>
        </div>
        
      </main>
      <footer className={styles.footer}>
        <span style={{width: "100%"}}>Created by: &nbsp;
          <a href="https://https://darwin1501.github.io/" target="_blank"
          style={{
            textDecoration: "underline"
          }}>
            Darwin
          </a>
          </span>
      </footer>
    </div>
  );
}
