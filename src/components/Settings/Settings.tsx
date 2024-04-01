import styles from './Settings.module.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


interface SettingsProps {
  type: string;
  digit: string;
  timeSeconds: number;
  timerChecked: boolean;
  handleChangeType: (value: string) => void
  handleChangeDigit: (value: string) => void
  handleTimeSeconds: (type: 'INC' | 'DEC') => void;
  handleTimerChecked: () => void;
  handleStart: () => void;
  handleQuestion: (value: string) => void;
  questionsNo: string;
}

const Settings = ({
  type,
  digit,
  // timeSeconds,
  // timerChecked,
  handleChangeType,
  handleChangeDigit,
  // handleTimeSeconds,
  // handleTimerChecked,
  handleStart,
  handleQuestion,
  questionsNo
}: SettingsProps) => {



  return (
    <div className={styles.container}>
      <div>
        <h1>Settings</h1>
      </div>
      <div className={styles.customHr}></div>
      <div className={styles.type_container}>
        <p>Select type</p>
        <Box>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              value={type}
              label="Type"
              onChange={(e) => { handleChangeType(e.target.value) }}
            >
              <MenuItem value={"ADD"}>Addition</MenuItem>
              <MenuItem value={"SUB"}>Subtraction</MenuItem>
              <MenuItem value={"MUL"}>Multiplication</MenuItem>
              <MenuItem value={"DIV"}>Division</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      <div className={styles.type_container}>
        <p>Select Digit</p>
        <Box>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              value={digit}
              onChange={(e) => { handleChangeDigit(e.target.value) }}
            >
              <MenuItem value={'2'}>2</MenuItem>
              <MenuItem value={'3'}>3</MenuItem>
              <MenuItem value={'4'}>4</MenuItem>
              <MenuItem value={'5'}>5</MenuItem>
              <MenuItem value={'6'}>6</MenuItem>
              <MenuItem value={'7'}>7</MenuItem>

            </Select>
          </FormControl>
        </Box>
      </div>
      <div className={styles.type_container}>
        <p>Select Number of Questions you want.</p>
        <Box>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              value={questionsNo}
              onChange={(e) => { handleQuestion(e.target.value) }}
            >
              <MenuItem value={'5'}>5</MenuItem>
              <MenuItem value={'10'}>10</MenuItem>
              <MenuItem value={'20'}>20</MenuItem>
              <MenuItem value={'30'}>30</MenuItem>
              <MenuItem value={'40'}>40</MenuItem>
              <MenuItem value={'50'}>50</MenuItem>

            </Select>
          </FormControl>
        </Box>
      </div>
      {/* <div className={styles.type_container}>
        <p>Timer?</p>
        <div className={styles.timerContainer}>
        <input type='checkbox' checked={timerChecked} onClick={handleTimerChecked}/>
        <div>
          <button onClick={()=>{handleTimeSeconds("INC")}}>+</button>
          <p>{timeSeconds.toString()} Seconds</p>
          <button onClick={()=>{handleTimeSeconds("DEC")}}>-</button>
        </div>
        </div>
      </div> */}
      <div className={styles.type_container}>
        <button className={styles.startBtn} onClick={handleStart}>Start</button>
      </div>
    </div>
  )
}

export default Settings