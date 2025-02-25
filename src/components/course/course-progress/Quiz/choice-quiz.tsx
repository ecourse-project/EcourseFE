import { css } from '@emotion/react';
import { Radio, Typography } from 'antd';
import React from 'react';
import { Question, QuestionTypeEnum } from 'src/lib/types/backend_modal';

interface ChoiceQuizProps {
  quiz: Question;
  onChange: (
    question_id: string,
    question_type: QuestionTypeEnum,
    answer: string | Array<string> | Array<Array<string>>,
  ) => void;
  result: { question_id: string; user_answer: string; correct_answer?: string } | undefined;
  isDone: boolean;
}
const { Text } = Typography;
const ChoiceQuiz: React.FC<ChoiceQuizProps> = ({ quiz, onChange, result, isDone }) => {
  const quizChoice = quiz.choices_question;
  if (!quizChoice) return;
  return (
    <div
      className="quiz-choice"
      css={css`
        max-width: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0 60px;
        gap: 20px;
        .correct {
          color: #1890ff;
          font-weight: 600;
        }
        .wrong {
          font-weight: 600;
          color: red;
        }
        .choice-radio {
          &.default {
            color: #1890ff;
          }
          &.correct {
            .ant-radio-inner::after {
              color: green;
              background-color: green;
            }
          }
          &.wrong {
            .ant-radio-inner::after {
              color: red;
              background-color: red;
            }
          }
        }
        .correct-ans {
          color: green !important;
          font-weight: 700;
        }
        .question {
          font-weight: 700;
        }
      `}
    >
      <Text className="question">
        {quiz?.order}. {quizChoice?.content}
      </Text>
      <Radio.Group
        onChange={(e) => onChange(quiz.id, quiz.question_type, e.target.value)}
        defaultValue={result?.user_answer}
        disabled={!!result || isDone}
      >
        {quizChoice?.choices?.map((ans, index) => {
          return (
            <Radio
              key={index}
              value={ans.choice}
              className={`choice-radio ${
                ans.choice === result?.correct_answer
                  ? ans.choice === result?.user_answer
                    ? 'correct'
                    : ''
                  : ans.choice === result?.user_answer
                  ? result?.correct_answer
                    ? 'wrong'
                    : 'default'
                  : ''
              }`}
            >
              <p
                className={`choice ${ans.choice === result?.correct_answer ? 'correct-ans' : ''}`}
              >{`${ans.choice_name}. ${ans.answer}`}</p>
            </Radio>
          );
        })}
      </Radio.Group>
    </div>
  );
};
export default ChoiceQuiz;
