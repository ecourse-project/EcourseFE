import { QuestionTypeEnum, Quiz } from 'src/lib/types/backend_modal';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ChoiceQuiz from './choice-quiz';
import ColumnQuiz from './collum-quiz';

interface QuizSwiperProps {
  listQuiz: Quiz[];
}
const QuizSlide: React.FC<QuizSwiperProps> = ({ listQuiz }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: false }}
      scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {listQuiz?.map((quiz, i) => {
        if (quiz.question_type === QuestionTypeEnum.CHOICES) {
          //trac ngiem
          return (
            <div className="quiz-item" key={i}>
              <SwiperSlide>
                <ChoiceQuiz quiz={quiz} />
              </SwiperSlide>
            </div>
          );
        } else if (quiz.question_type === QuestionTypeEnum.MATCH) {
          //column
          return (
            <div className="quiz-item" key={i}>
              <SwiperSlide>
                <ColumnQuiz quiz={quiz} />
              </SwiperSlide>
            </div>
          );
        } else if (quiz.question_type === QuestionTypeEnum.FILL) {
          //fill
        }
      })}
    </Swiper>
  );
};
export default QuizSlide;
