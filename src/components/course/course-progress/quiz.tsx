import { Collapse, Progress, Radio, RadioChangeEvent, Spin, Typography } from 'antd';
import { isEmpty } from 'lodash';
import React, { useContext, useEffect, useState } from 'react';
import AppButton from 'src/components/button';
import { AnswerChoiceEnum, Quiz, QuizResult, UserAnswersArgs } from 'src/lib/types/backend_modal';
import { antIcon } from 'src/lib/utils/animations';

import { css } from '@emotion/react';

import { CourseProgressAction } from './context/reducer';
import { CourseProgressContext } from './course-progress';
import CourseService, { apiURL } from 'src/lib/api/course';

const { Panel } = Collapse;

const { Text, Link } = Typography;

interface QuizProps {
  listQuiz: Quiz[];
  onSubmit: () => void;
  result: QuizResult | undefined;
  isDone: boolean;
  loading: boolean;
  courseId: string;
  mark: number;
}

const QuizSection: React.FC<QuizProps> = (props) => {
  const { listQuiz, onSubmit, result, loading, isDone, courseId, mark } = props;
  const { state, dispatch } = useContext(CourseProgressContext);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [customResult, setCustomResult] = useState<any>([]);
  const [listAnswer, setListAnswer] = useState<string[]>(
    state.answerSheet &&
      state.answerSheet.filter((v) => v.answer_choice !== AnswerChoiceEnum.NO_CHOICE).map((u) => u.quiz_id),
  );
  const [value, setValue] = useState(0);

  const onChange = (e: RadioChangeEvent, id: string) => {
    let choice = e.target.value;
    if (choice === 1) choice = AnswerChoiceEnum.A;
    if (choice === 2) choice = AnswerChoiceEnum.B;
    if (choice === 3) choice = AnswerChoiceEnum.C;
    if (choice === 4) choice = AnswerChoiceEnum.D;
    dispatch({
      type: CourseProgressAction.UPDATE_CHECKED_ANSWER,
      payload: { quiz_id: id, answer_choice: choice } as UserAnswersArgs,
    });

    const idx = listAnswer.indexOf(id);
    if (idx < 0) {
      setListAnswer([...listAnswer, id]);
    }
  };
  useEffect(() => {
    const obj = {};
    const newResult = result?.quiz_answers.forEach((v) => {
      const { quiz_id, correct_answer, answer_choice } = v;
      obj[quiz_id] = {
        correct: correct_answer,
        choice: answer_choice,
      };
    });
    setCustomResult(obj);
    console.log('obj :>> ', obj);
    console.log('result :>> ', result);
  }, [result]);

  // useEffect(() => {
  // 	console.log('listAnse', listAnswer);
  // 	console.log('state answer', state.answerSheet);
  // }, [listAnswer, state.answerSheet]);
  return (
    <div
      className="quiz_wrapper"
      css={css`
        margin-left: 7%;
        max-width: 77%;
        .ant-progress {
          position: absolute;
          right: 10px;
          top: 10px;
          max-width: 15%;
        }
        .question-list {
          min-height: 50px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin: 25px 0;
        }
        .question {
          font-weight: 600;
        }
        .done-btn {
          width: fit-content;
          background-color: #faad14 !important;
          font-weight: 700;
          &:hover {
            letter-spacing: 3px;
          }
          &[disabled] {
            cursor: not-allowed;
          }
        }

        .ant-radio-disabled .ant-radio-inner:after {
          color: #1890ff;
          background-color: #1890ff;
        }
        .choice {
          margin-bottom: 0 !important;
        }
        .error {
          .choice {
            color: red;
            font-weight: 700;
            margin-bottom: 0 !important;
          }
          .ant-radio-inner:after {
            color: red;
            background-color: red;
            transform: scale(0.5);
            opacity: 1;
            transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
          }
        }
        .correct {
          .choice {
            color: #1890ff;
            font-weight: 700;
            margin-bottom: 0 !important;
          }
          .ant-radio-inner:after {
            color: #1890ff;
            background-color: #1890ff;
            transform: scale(0.5);
            opacity: 1;
            transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
          }
        }
        .user_choice {
          .ant-radio-inner:after {
            color: #1890ff;
            background-color: #1890ff;
            transform: scale(0.5);
            opacity: 1;
            transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
          }
        }
        .ant-progress-text {
          font-weight: 600;
        }
        .mark {
          background-color: transparent;
          & > .ant-progress-inner {
            width: 70px !important;
            height: 70px !important;
            font-size: 20px !important;
          }
        }
      `}
    >
      {loading ? (
        <div style={{ height: '72px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <></>
      )}
      {!loading && !isEmpty(listQuiz) ? (
        <Progress
          type="circle"
          className="mark"
          percent={(mark || 0) * 10}
          format={(percent) => `${percent && parseFloat(percent.toFixed(2)) / 10}/10`}
          status="exception"
          strokeColor={{
            from: '#7b4397',
            to: ' #dc2430',
          }}
        />
      ) : (
        <></>
      )}
      {listQuiz.map((quiz, i) => {
        return (
          <div key={i} className="question-list">
            <Text className="question">{`${i + 1}/ ${quiz.question}`}</Text>

            <Radio.Group onChange={(e) => onChange(e, quiz.id)} disabled={isDone || isSubmit}>
              <Radio
                className={`answer ${
                  customResult
                    ? customResult[quiz.id]?.correct === AnswerChoiceEnum.A
                      ? customResult[quiz.id]?.choice === customResult[quiz.id]?.correct
                        ? 'correct'
                        : 'error'
                      : customResult[quiz.id]?.choice === AnswerChoiceEnum.A
                      ? 'user_choice'
                      : ''
                    : ''
                } `}
                value={1}
              >
                <p className="choice">{quiz.A}</p>
              </Radio>
              <Radio
                className={`answer ${
                  customResult
                    ? customResult[quiz.id]?.correct === AnswerChoiceEnum.B
                      ? customResult[quiz.id]?.choice === customResult[quiz.id]?.correct
                        ? 'correct'
                        : 'error'
                      : customResult[quiz.id]?.choice === AnswerChoiceEnum.B
                      ? 'user_choice'
                      : ''
                    : ''
                } `}
                value={2}
              >
                <p className="choice">{quiz.B}</p>
              </Radio>
              <Radio
                className={`answer ${
                  customResult
                    ? customResult[quiz.id]?.correct === AnswerChoiceEnum.C
                      ? customResult[quiz.id]?.choice === customResult[quiz.id]?.correct
                        ? 'correct'
                        : 'error'
                      : customResult[quiz.id]?.choice === AnswerChoiceEnum.C
                      ? 'user_choice'
                      : ''
                    : ''
                } `}
                value={3}
              >
                <p className="choice">{quiz.C}</p>
              </Radio>
              <Radio
                className={`answer ${
                  customResult
                    ? customResult[quiz.id]?.correct === AnswerChoiceEnum.D
                      ? customResult[quiz.id]?.choice === customResult[quiz.id]?.correct
                        ? 'correct'
                        : 'error'
                      : customResult[quiz.id]?.choice === AnswerChoiceEnum.D
                      ? 'user_choice'
                      : ''
                    : ''
                } `}
                value={4}
              >
                <p className="choice">{quiz.D}</p>
              </Radio>
            </Radio.Group>
          </div>
        );
      })}
      {!loading && !isEmpty(listQuiz) && (
        <AppButton
          className="done-btn"
          btnTextColor={'black'}
          btnStyle={'solid'}
          btnSize={'small'}
          btnWidth={'full-w'}
          disabled={!isDone ? (listAnswer.length < listQuiz.length ? true : false) : false}
          onClick={() => {
            setIsSubmit(true);
            onSubmit();
          }}
        >
          {!isDone ? 'NỘP BÀI' : 'CHỨNG CHỈ'}
        </AppButton>
      )}
    </div>
  );
};

export default QuizSection;
