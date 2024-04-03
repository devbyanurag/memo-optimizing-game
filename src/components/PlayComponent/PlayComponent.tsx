import { useEffect, useState } from 'react'
import styles from './PlayComponent.module.css'
import toast, { Toaster } from 'react-hot-toast';

interface Question {
  firstValue: string;
  secondValue: string;
  answer: string;
  timeTaken: number
}

interface PlayComponentProps {
  questions: Question[];
  setUserAnswer: (index: number, answer: string, time: number) => void
  type: string

}

const PlayComponent = ({ questions, setUserAnswer, type }: PlayComponentProps) => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [questionType, setquestionType] = useState('+')
  const [seconds, setSeconds] = useState(0);



  useEffect(() => {
    if (questions.length > 0) {
      setCurrentQuestion(questions[currentIndex]);
    }
  }, [questions]);

  useEffect(() => {
    if (type === 'ADD') {
      setquestionType('+')
    } else if (type === 'SUB') {
      setquestionType('-')

    } else if (type === 'MUL') {
      setquestionType('*')

    } else if (type === 'DIV') {
      setquestionType('/')

    }
  }, [type])

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      if(questions[currentIndex].answer===inputValue){
        toast.success('correct',{duration: 1000})
      }
      else{
        toast.error('incorrect',{duration: 1000})
      }
      setCurrentQuestion(null);
      setInputValue('');

      if (questions.length > 1) {
        setCurrentQuestion(questions[currentIndex + 1]);
      }
      setCurrentIndex(currentIndex + 1)
      setSeconds(0)
    }


  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className={styles.container}>
    <Toaster/>

      <div style={{display: 'flex', justifyContent:'space-between'}}>
      <p>Question No.: {currentIndex+1}</p>
      <p>Time: {seconds}</p>
      </div>
      {currentQuestion && (
        <div className={styles.calculationContainer}>
          <div className={styles.calculationType}>
            <p>{questionType}</p> 
          </div>
          <div className={styles.calculationValues}>
            <p>{currentQuestion.firstValue}</p>
            <p>{currentQuestion.secondValue}</p>
          </div>
        </div>
      )}
      <div className={styles.customHr}></div>
      <div>
        <input
          type="number"
          className={styles.inputContainer}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if(inputValue){
                setUserAnswer(currentIndex, inputValue,seconds);
              }
              else{
                setUserAnswer(currentIndex, 'Not Answered', seconds);
              }
              handleNextQuestion()
            }
          }}
        />
      </div>
    </div>
  );
};

export default PlayComponent;
