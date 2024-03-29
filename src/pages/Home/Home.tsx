import { useState } from 'react'
import styles from './Home.module.css'
import Settings from '../../components/Settings/Settings'
import PlayComponent from '../../components/PlayComponent/PlayComponent';
const Home = () => {
  const [type, setType] = useState<string>('ADD');
  const [digit, setDigit] = useState<string>('2');
  const [timeSeconds, setTimeSeconds] = useState<number>(30);
  const [timerChecked, setTimerChecked] = useState<boolean>(false);
  const [started, setStarted] = useState<boolean>(false)

  const handleChangeType = (value: string) => {
    setType(value);
  };

  const handleChangeDigit = (value: string) => {
    setDigit(value);
  };

  const handleTimeSeconds = (type: 'INC' | 'DEC') => {
    if (type === 'INC') {
      setTimeSeconds(timeSeconds + 1);
    }
    if (type === 'DEC') {
      setTimeSeconds(timeSeconds - 1);
    }
  };

  const handleTimerChecked = () => {
    setTimerChecked(!timerChecked);
  };

  const handleStart = () => {
    setStarted(!started);
  };
  

  return (
    <div className={styles.container}>
      
      {started ?
        <Settings
          type={type}
          digit={digit}
          timeSeconds={timeSeconds}
          timerChecked={timerChecked}
          handleChangeType={handleChangeType}
          handleChangeDigit={handleChangeDigit}
          handleTimeSeconds={handleTimeSeconds}
          handleTimerChecked={handleTimerChecked}
          handleStart={handleStart}
        /> :
        <PlayComponent />
      }
    </div>
  )
}

export default Home