import { Button, Collapse, Empty, Progress, Radio, RadioChangeEvent, Spin, Typography } from 'antd';
import _, { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppButton from 'src/components/button';
import { RootState } from 'src/lib/reducers/model';
import { progressAction } from 'src/lib/reducers/progress/progressSlice';
import { QuestionTypeEnum, Quiz, QuizResult, UserAnswersArgs } from 'src/lib/types/backend_modal';
import { antIcon } from 'src/lib/utils/animations';

import { css } from '@emotion/react';
import Skeleton from 'react-loading-skeleton';
import styled from '@emotion/styled';
import ChoiceQuiz from './choice-quiz';
import ColumnQuiz from './collum-quiz';
import QuizSlide from './quiz-slide';

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

const notDoEx = false;
const QuizSection: React.FC<QuizProps> = (props) => {
  const { listQuiz, onSubmit, result, loading, isDone, courseId, mark } = props;
  console.log('lizQuiz :==>>', listQuiz);
  const answerSheet = useSelector((state: RootState) => state.progress.answerSheet);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [customResult, setCustomResult] = useState<any>([]);

  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  return (
    <QuizStyled>
      {loading ? (
        <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <QuizSkeleton />
        </div>
      ) : (
        <></>
      )}
      {!loading && isDone ? (
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
      {notDoEx ? (
        <div>
          <p>Bài tập được làm 1 lần và không được dừng sau khi bắt đầu.</p>
          <p>
            Thời gian làm bài là 60 phút. Được tính sau khi "<strong>Bắt đầu làm bài</strong>"
          </p>
          <Button>
            <strong>Bắt đầu làm bài</strong>
          </Button>
        </div>
      ) : listQuiz.length ? (
        // listQuiz?.map((quiz, i) => {
        //   if (quiz.question_type === QuestionTypeEnum.CHOICES) {
        //     //trac ngiem
        //     return (
        //       <div className="quiz-item" key={i}>
        //         <ChoiceQuiz quiz={quiz} />
        //       </div>
        //     );
        //   } else if (quiz.question_type === QuestionTypeEnum.MATCH) {
        //     //column
        //     return (
        //       <div className="quiz-item" key={i}>
        //         <ColumnQuiz quiz={quiz} />
        //       </div>
        //     );
        //   } else if (quiz.question_type === QuestionTypeEnum.FILL) {
        //     //fill
        //   }
        // })
        <QuizSlide listQuiz={listQuiz} />
      ) : (
        <Empty className="empty-data" image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
      {!loading && !isEmpty(listQuiz) && (
        <AppButton
          className="done-btn"
          btnTextColor={'black'}
          btnStyle={'solid'}
          btnSize={'small'}
          btnWidth={'full-w'}
          // disabled={!isDone ? (listAnswer.length < listQuiz.length ? true : false) : false/}
          onClick={() => {
            setIsSubmit(true);
            onSubmit();
          }}
        >
          {!isDone ? 'NỘP BÀI' : 'CHỨNG CHỈ'}
        </AppButton>
      )}
    </QuizStyled>
  );
};

const QuizSkeleton = () => {
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      {_.times(10).map((v) => (
        <div
          key={v}
          css={css`
            width: 100%;
            height: 100%;
            margin: 15px 0;
            .ans {
              margin-top: 10px;
              display: flex;
              justify-content: space-around;
              gap: 10px;
              .option {
                width: 25%;
                display: flex;
                gap: 5px;
                & > span {
                  width: 100%;
                }
                .circle {
                  width: fit-content;
                }
              }
            }
          `}
        >
          <Skeleton height={15} />
          <div className="ans">
            <div className="option">
              <Skeleton circle width={15} height={15} containerClassName="circle" />
              <Skeleton height={15} />
            </div>
            <div className="option">
              <Skeleton circle width={15} height={15} containerClassName="circle" />
              <Skeleton height={15} />
            </div>{' '}
            <div className="option">
              <Skeleton circle width={15} height={15} containerClassName="circle" />
              <Skeleton height={15} />
            </div>{' '}
            <div className="option">
              <Skeleton circle width={15} height={15} containerClassName="circle" />
              <Skeleton height={15} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizSection;

const QuizStyled = styled.div`
  width: 100%;
  /* margin-left: 7%;
  max-width: 77%; */
  .quiz-item {
    padding: 10px 0;
  }
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
    border-color: #faad14 !important;
    font-weight: 700;
    border-radius: 10px;
    width: 150px;
    letter-spacing: 1px;
    &:hover {
      letter-spacing: 3px;
      color: #000;
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
`;
