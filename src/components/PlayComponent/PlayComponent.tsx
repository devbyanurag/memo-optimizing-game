import React, { useState } from 'react'
import styles from './PlayComponent.module.css'

const PlayComponent = () => {

  const [inputValue, setInputValue] = useState<string>('')
  return (
    <div className={styles.container}>
      <p>Start</p>
      <div className={styles.calculationContainer}>
        <div className={styles.calculationType}>
          <p>+</p>
        </div>
        <div className={styles.calculationValues}>
          <p>12214124124143</p>
          <p>31142412</p>
        </div>
      </div>
      <div className={styles.customHr}></div>
      <div>
        <input type="number" className={styles.inputContainer} value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
      </div>
    </div>
  )
}

export default PlayComponent