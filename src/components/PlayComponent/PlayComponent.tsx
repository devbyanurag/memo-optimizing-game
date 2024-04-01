import { useEffect, useState } from 'react'
import styles from './PlayComponent.module.css'
import toast, { Toaster } from 'react-hot-toast';

interface Question {
  firstValue: string;
  secondValue: string;
  answer: string;
}

interface PlayComponentProps {
  questions: Question[];
  setUserAnswer: (index: number, answer: string) => void
  type: string

}

const PlayComponent = ({ questions, setUserAnswer, type }: PlayComponentProps) => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [currentIntex, setCurrentIntex] = useState<number>(0)

  useEffect(() => {
    if (questions.length > 0) {
      setCurrentQuestion(questions[currentIntex]);
    }
  }, [questions]);
  const [questionType, setquestionType] = useState('+')

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
    if (currentIntex + 1 < questions.length) {
      if(questions[currentIntex].answer===inputValue){
        toast.success('correct',{duration: 1000})
      }
      else{
        toast.error('incorrect',{duration: 1000})
      }
      setCurrentQuestion(null);
      setInputValue('');

      if (questions.length > 1) {
        setCurrentQuestion(questions[currentIntex + 1]);
      }
      setCurrentIntex(currentIntex + 1)
    }


  };

  return (
    <div className={styles.container}>
    <Toaster/>

      <p>Question No.: {currentIntex+1}</p>
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
                setUserAnswer(currentIntex, inputValue);
              }
              else{
                setUserAnswer(currentIntex, 'Not Answered');
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
