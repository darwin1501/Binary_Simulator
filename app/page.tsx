"use client";

import styles from "./page.module.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [binaryBase, setBinaryBase, ] = useState([8, 4, 2, 1]);
  const [binary, setBinary] = useState([0, 0, 0, 0]);
  const [decimal, setDecimal] = useState(0);
  const [currentlyAddedBinary, setcurrentlyAddedBinary] = useState([]);


  function addBinaryValue(){
      // get the first binary value
      const newBinaryBase = binaryBase[0] * 2;

      setBinaryBase(() => [newBinaryBase, ...binaryBase]);
      setBinary(()=>[0, ...binary]);
  }

  function addValueToDecimal(binaryData, index){
    // get the index of the bin data.
    // change the bin data to 1 if the value is 0, and vice versa

    // create a array scanner
    // get all the index position of "1"

    // find the matching postion to the binary value
    //  add it to the decimal

    console.log(`value: ${binaryData}`,  `index: ${index}`)
  }


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Decimal: {decimal}</h1>
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
               {binaryBase.map((binaryBaseData, index)=>{
                  return(
                    <td key={uuidv4()} 
                    
                    onClick={()=>{
                     addValueToDecimal(binaryBaseData, index)
                    }}>{0}</td>
                  )
                })}
              </tr>
            </tbody>
          </table>
          <button  onClick={addBinaryValue} className={styles.btnAddBinaryValue}>add</button>
        </div>
        
      </main>
      <footer className={styles.footer}>
        <a>darwin</a>
      </footer>
    </div>
  );
}
