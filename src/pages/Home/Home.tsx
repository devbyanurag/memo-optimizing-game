import { useState } from 'react'
import styles from './Home.module.css'
import Settings from '../../components/Settings/Settings'
import PlayComponent from '../../components/PlayComponent/PlayComponent';
import ResultTable from '../../components/ResultTable/ResultTable';
const Home = () => {
  const [type, setType] = useState<string>('ADD');
  const [digit, setDigit] = useState<string>('2');
  const [timeSeconds, setTimeSeconds] = useState<number>(30);
  const [timerChecked, setTimerChecked] = useState<boolean>(false);
  const [started, setStarted] = useState<boolean>(false)
  const [questionsNo, setQuestionsNo] = useState<string>('10')
  const [questions, setQuestions] = useState<{ firstValue: string, secondValue: string, answer: string, userAnswer: string, timeTaken: number  }[]>([]);


  const handleChangeType = (value: string) => {
    setType(value);
  };

  const handleChangeDigit = (value: string) => {
    setDigit(value);
  };
  const handleQuestion = (value: string) => {
    setQuestionsNo(value);
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

  function generateRandomNumber(digits: number) {
    const min = Math.pow(10, digits - 1); // Minimum value for n digits (e.g., 100 for 3 digits)
    const max = Math.pow(10, digits) - 1; // Maximum value for n digits (e.g., 999 for 3 digits)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleStart = () => {
    setStarted(!started);
    const generatedQuestions = [];
    for (let i = 0; i < parseInt(questionsNo); i++) {
      let firstValue = generateRandomNumber(parseInt(digit))
      let secondValue = generateRandomNumber(parseInt(digit))
      let answerDigit = 0;
      if (type === 'ADD') {
        answerDigit = firstValue + secondValue
      } else if (type === 'SUB') {
        answerDigit = firstValue - secondValue
      } else if (type === 'MUL') {
        answerDigit = firstValue * secondValue
        answerDigit = parseFloat(answerDigit.toFixed(2));
      } else if (type === 'DIV') {
        answerDigit = firstValue / secondValue
        answerDigit = parseFloat(answerDigit.toFixed(2));
      }
      generatedQuestions.push({ firstValue: firstValue.toString() || '0', secondValue: secondValue.toString() || '0', answer: answerDigit.toString(), userAnswer: '',timeTaken: 0 });

    }
    setQuestions(generatedQuestions)

  };
  const setUserAnswer = (index: number, answer: string,time: number) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].userAnswer = answer;
      updatedQuestions[index].timeTaken = time;
      return updatedQuestions;
    });
  };



  return (
    <div className={styles.container}>

      {!started ?
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
          handleQuestion={handleQuestion}
          questionsNo={questionsNo}
        /> :
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {questions.every((q) => q.userAnswer !== '') ? (
            <div className={styles.scoreContainer}>
               <p>Score: {questions.filter((q) => q.answer === q.userAnswer).length}/{questions.length}</p>
               <button onClick={()=>{setQuestions([])
              setStarted(false)}}>Try Again</button>
            </div>
            
          ) : (
            <PlayComponent questions={questions} setUserAnswer={setUserAnswer} type={type} />
          )}
          {(type=='DIV'||type=='MUL') && <p style={{textAlign:'right'}}>Write Answer upto 2 decimal Values</p>}
          <div style={{ height: ' 20px' }}></div>
          <ResultTable questions={questions} type={type} />
        </div>

      }
    </div>
  )
}

export default Home