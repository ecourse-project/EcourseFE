import {
  Question,
  QuestionTypeEnum,
  Quiz,
  QuizResult,
  QuizResultArgs,
  UserAnswersArgs,
} from 'src/lib/types/backend_modal';
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
import { useEffect, useState } from 'react';
import { Button } from 'antd';
import FillQuiz from './fill-quiz';

interface QuizSwiperProps {
  listQuiz: Question[];
  onChangeQuiz: (value: UserAnswersArgs) => void;
  quizResult: QuizResult | null;
}
const QuizSlide: React.FC<QuizSwiperProps> = ({ listQuiz, onChangeQuiz, quizResult }) => {
  const [isShowSubmitBtn, setIsShowSubmitBtn] = useState<boolean>(false);
  const [swiper, setSwiper] = useState<any>(null);
  useEffect(() => {
    if (quizResult) swiper?.slideTo(0);
  }, [quizResult]);
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
        onSwiper={(swiper) => setSwiper(swiper)}
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
      ></Swiper>
    </div>
  );
};
export default QuizSlide;
