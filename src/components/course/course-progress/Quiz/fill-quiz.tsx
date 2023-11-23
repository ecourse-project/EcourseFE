import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { cloneDeep } from 'lodash';
import { FillQuestionAnswer, Question, QuestionTypeEnum, Quiz } from 'src/lib/types/backend_modal';
interface FillQuizProps {
  quiz: Question;
  onChange: (
    question_id: string,
    question_type: QuestionTypeEnum,
    answer: string | Array<string> | Array<Array<string>>,
  ) => void;
  result: FillQuestionAnswer | undefined;
}
const defaultIndex = 0;
const FillQuiz: React.FC<FillQuizProps> = ({ quiz, onChange, result }) => {
  const [userInputs, setUserInputs] = useState<string[]>([]);
  const fillQuiz = (quiz.fill_blank_question?.content || '')?.replaceAll('{{}}', '{{}} ');
  const [numberInput, setNumberInput] = useState<number>(0);
  const correctAnswer = cloneDeep(result?.correct_answer);
  const userAnswer = cloneDeep(result?.user_answer);
  useEffect(() => {
    const regex = /{{}}/g;
    const matches = fillQuiz.match(regex);
    const placeholdersCount = matches ? matches.length : 0;
    setNumberInput(placeholdersCount);
    const initialUserInputs = Array(placeholdersCount).fill('');

    setUserInputs(initialUserInputs);
  }, [fillQuiz]);

  const handleInputChange = (index, event) => {
    const updatedInputs = [...userInputs];
    updatedInputs[index] = event.target.value;
    const validAns = updatedInputs.filter((v) => v);
    onChange(quiz.id, quiz.question_type, validAns);
    setUserInputs(updatedInputs);
  };

  return (
    <div
      css={css`
        padding: 0 60px;
        line-height: 1.6;
        font-size: 14px;
        input {
          min-width: 10px;
          border: none;
          border-bottom: 1px solid #000;
        }
        .user-ans {
          text-decoration: underline;
          font-weight: 700;
          color: blue;
        }
        .correct {
          color: green !important;
          font-weight: 700;
        }
        .wrong {
          color: red !important;
          font-weight: 700;
        }
        .title {
          font-weight: 700;
        }
      `}
    >
      <p className="title">
        {quiz.order}. {quiz.fill_blank_question?.title}
      </p>
      {!result?.user_answer
        ? fillQuiz?.split(' ')?.map((word, index) => {
            if (word === '{{}}') {
              return (
                <input
                  key={index}
                  type="text"
                  value={userInputs[index]}
                  onChange={(event) => handleInputChange(index, event)}
                  required
                  style={{ width: 100 }}
                />
              );
            } else {
              return <span key={index}> {word} </span>;
            }
          })
        : fillQuiz?.split(' ')?.map((word, index) => {
            if (word === '{{}}') {
              const correctAns = correctAnswer?.shift();
              const userAns = userAnswer?.shift();
              return correctAns === userAns || !result?.correct_answer ? (
                <>
                  {userAns && <span className={`${result?.correct_answer && 'correct'} user-ans`}>{userAns}</span>}
                  {correctAns && <span className="correct"> / {correctAns}</span>}
                </>
              ) : (
                <>
                  {userAns ? <span className="wrong user-ans">{userAns}</span> : <span className="wrong">_______</span>}
                  <span className="correct"> / {correctAns}</span>
                </>
              );
            } else {
              return <span key={index}> {word} </span>;
            }
          })}
    </div>
  );
};

export default FillQuiz;
