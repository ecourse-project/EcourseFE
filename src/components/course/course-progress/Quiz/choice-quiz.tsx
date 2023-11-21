import { css } from '@emotion/react';
import { Radio, Typography } from 'antd';
import React from 'react';
import { Question, QuestionTypeEnum, Quiz } from 'src/lib/types/backend_modal';

interface ChoiceQuizProps {
  quiz: Question;
  onChange: (
    quiz_id: string,
    question_type: QuestionTypeEnum,
    answer: string | Array<string> | Array<Array<string>>,
  ) => void;
  result: { quiz_id: string; user_answer: string; correct_answer?: string } | undefined;
}
const { Text } = Typography;
const ChoiceQuiz: React.FC<ChoiceQuizProps> = ({ quiz, onChange, result }) => {
  const quizChoice = quiz.choices_question;
  if (!quizChoice) return;
  return (
    <div
      className="quiz-choice"
      css={css`
        max-width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
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
        }
      `}
    >
      <Text className="question">{quizChoice?.content}</Text>
      {/* <Radio.Group onChange={(e) => onChange(e, quiz.id)} disabled={isDone || isSubmit}> */}
      <Radio.Group
        onChange={(e) => onChange(quiz.id, quiz.question_type, e.target.value)}
        defaultValue={result?.user_answer}
        disabled={!!result}
      >
        {quizChoice?.choices?.map((ans, index) => {
          return (
            <Radio
              key={index}
              // className={`answer ${
              //   customResult
              //     ? customResult[quiz.id]?.correct === AnswerChoiceEnum.A
              //       ? customResult[quiz.id]?.choice === customResult[quiz.id]?.correct
              //         ? 'correct'
              //         : 'error'
              //       : customResult[quiz.id]?.choice === AnswerChoiceEnum.A
              //       ? 'user_choice'
              //       : ''
              //     : ''
              // } `}
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
