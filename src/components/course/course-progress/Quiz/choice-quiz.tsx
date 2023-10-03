import { Radio, Typography } from 'antd';
import React from 'react';
import CountDown from 'src/components/count-down';
import { Quiz } from 'src/lib/types/backend_modal';

interface ChoiceQuizProps {
  quiz: Quiz;
}
const { Text, Link } = Typography;
const ChoiceQuiz: React.FC<ChoiceQuizProps> = ({ quiz }) => {
  const quizChoice = quiz.choices_question;
  if (!quizChoice) return;
  return (
    <>
      <Text className="question">{quizChoice?.content}</Text>
      {/* <Radio.Group onChange={(e) => onChange(e, quiz.id)} disabled={isDone || isSubmit}> */}
      <Radio.Group>
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
    </>
  );
};
export default ChoiceQuiz;
