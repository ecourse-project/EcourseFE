import { QuestionTypeEnum, Quiz, QuizResultArgs, UserAnswersArgs } from 'src/lib/types/backend_modal';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ChoiceQuiz from './choice-quiz';
import ColumnQuiz from './collum-quiz';
import { css } from '@emotion/react';
import { useState } from 'react';
import { Button } from 'antd';

interface QuizSwiperProps {
  listQuiz: Quiz[];
  onChangeQuiz: (value: UserAnswersArgs) => void;
}
const QuizSlide: React.FC<QuizSwiperProps> = ({ listQuiz, onChangeQuiz }) => {
  const [isShowSubmitBtn, setIsShowSubmitBtn] = useState<boolean>(false);
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: false }}
        // scrollbar={{ draggable: false }}
        onReachEnd={() => {
          setIsShowSubmitBtn(true);
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swipper) => {
          if (swipper.activeIndex !== listQuiz?.length - 1) setIsShowSubmitBtn(false);
        }}
        css={css`
          .swiper-slide {
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 22px;
            justify-content: center;
            padding: 60px 0;
          }
        `}
      >
        {listQuiz?.map((quiz, i) => {
          if (quiz.question_type === QuestionTypeEnum.CHOICES) {
            //trac ngiem
            return (
              <div className="quiz-item" key={i}>
                <SwiperSlide>
                  <ChoiceQuiz
                    quiz={quiz}
                    onChange={(quiz_id, question_type, answer) => onChangeQuiz({ quiz_id, question_type, answer })}
                  />
                </SwiperSlide>
              </div>
            );
          } else if (quiz.question_type === QuestionTypeEnum.MATCH) {
            //column
            return (
              <div className="quiz-item" key={i}>
                <SwiperSlide>
                  <ColumnQuiz
                    quiz={quiz}
                    onChange={(quiz_id, question_type, answer) => onChangeQuiz({ quiz_id, question_type, answer })}
                  />
                </SwiperSlide>
              </div>
            );
          } else if (quiz.question_type === QuestionTypeEnum.FILL) {
            //fill
            return <></>;
          }
        })}
      </Swiper>
    </div>
  );
};
export default QuizSlide;
