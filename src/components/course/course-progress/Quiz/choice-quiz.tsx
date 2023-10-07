import { css } from '@emotion/react';
import { Radio, Typography } from 'antd';
import React from 'react';
import CountDown from 'src/components/count-down';
import { QuestionTypeEnum, Quiz } from 'src/lib/types/backend_modal';

interface ChoiceQuizProps {
  quiz: Quiz;
  onChange: (
    quiz_id: string,
    question_type: QuestionTypeEnum,
    answer: string | Array<string> | Array<Array<string>>,
  ) => void;
}
const { Text, Link } = Typography;
const ChoiceQuiz: React.FC<ChoiceQuizProps> = ({ quiz, onChange }) => {
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
      `}
    >
      <Text className="question">{quizChoice?.content}</Text>
      {/* <Radio.Group onChange={(e) => onChange(e, quiz.id)} disabled={isDone || isSubmit}> */}
      <Radio.Group onChange={(e) => onChange(quiz.id, quiz.question_type, e.target.value)}>
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
            >
              <p className="choice">{`${ans.choice_name}. ${ans.answer}`}</p>
            </Radio>
          );
        })}
      </Radio.Group>
    </div>
  );
};
export default ChoiceQuiz;
