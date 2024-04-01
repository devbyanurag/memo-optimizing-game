import { useEffect, useState } from 'react'
import styles from './ResultTable.module.css'

interface Question {
  firstValue: string;
  secondValue: string;
  answer: string;
  userAnswer: string
}

interface ResultTableProps {
  questions: Question[];
  type: string
}

const ResultTable = ({ questions, type }: ResultTableProps) => {

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



  return (
    <div className={styles.container}>
      <p className={styles.result}>Results:</p>
      {
        questions.map((question, index) => {
          return (question.userAnswer !== '' &&
            <div className={styles.containerQueResult} key={index}>
              <div className={styles.containerQueNum}>
                <p>Question {index + 1}: </p>
                <div>
                  {question.firstValue}{questionType}{question.secondValue}
                </div></div>
              <div>Your Answer : <span className={question.answer===question.userAnswer? styles.correctAns: styles.wrongAns}>{question.userAnswer}</span></div>
              <div>Correct Answer : {question.answer}</div>



            </div>
          )
        })
      }
    </div>
  );
};

export default ResultTable;
