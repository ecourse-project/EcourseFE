import { PlusOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Button, Col, Drawer, Form, Row, Select, Space } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { cloneDeep } from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import AppInput from 'src/components/input';
import AppSelect from 'src/components/select';
import MultipleSelect from 'src/components/select/multipleSelect';
import CourseService from 'src/lib/api/course';
import {
  ChoicesQuestion,
  ContentTypeEnum,
  FillBlankQuestion,
  MatchQuestion,
  QuestionTypeEnum,
  Quiz,
} from 'src/lib/types/backend_modal';
import { AlphabetLetter, replaceWordsInString, splitSentence } from 'src/lib/utils/utils';
import { v4 as uuidv4 } from 'uuid';
const { Option } = Select;
interface SelectedLessonType {
  id: string;
  name: string;
}

interface ListCourseType {
  id: string;
  course_of_class: boolean;
  name: string;
  lessons?: SelectedLessonType[] | undefined;
}

const CreateQuiz = () => {
  const [form] = Form.useForm();

  const [listCourse, setListCourse] = useState<ListCourseType[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<ListCourseType | null>({} as ListCourseType);
  const [selectedLesson, setSelectedLesson] = useState<SelectedLessonType | null>({} as SelectedLessonType);
  const [quizTitle, setQuizTitle] = useState<string>('');
  //list quiz item state
  const [listQuiz, setListQuiz] = useState<Quiz[]>([]);
  const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false);
  const [selectedAnsMatch, setSelectedAnsMatch] = useState<{ first: string; second: string } | null>(null);
  const [newQuizId, setNewQuizId] = useState<string | null>(null);

  const numAns = Form.useWatch('numAns', { form, preserve: true });
  const quizType = Form.useWatch('type', { form, preserve: true });
  const numFirstCol = Form.useWatch('numFirstCol', { form, preserve: true });
  const numSecondCol = Form.useWatch('numSecondCol', { form, preserve: true });
  const content = Form.useWatch('content', { form, preserve: true });
  const hiddenWord = Form.useWatch('hiddenWord', { form, preserve: true });
  const getListCourse = async () => {
    try {
      const courses = await CourseService.getListCourses();
      setListCourse(courses);
    } catch (error) {
      console.log(error);
    }
  };
  const getCourseDetail = async () => {
    try {
      if (!selectedCourse?.id || !selectedLesson?.id) return;
      const listQuizDetail = await CourseService.listQuiz();
      setListQuiz(listQuizDetail);
      // setQuizTitle();
    } catch (error) {
      console.log(error);
    }
  };

  const createChoiceQuiz = async () => {
    try {
      console.log('abc');
    } catch (error) {
      console.log('abc');
    }
  };

  useEffect(() => {
    getListCourse();
  }, []);
  useEffect(() => {
    if (!selectedLesson) return;
    getCourseDetail();
  }, [selectedLesson]);
  const rsForm = () => {
    form.resetFields();
  };
  const renderContent = useMemo(() => {
    return replaceWordsInString(cloneDeep(content) || '', cloneDeep(hiddenWord) || []);
  }, [content, hiddenWord]);

  const handleCreateNewQuiz = async () => {
    setVisibleDrawer(true);
    return;
    try {
      await CourseService.createQuiz({ name: quizTitle });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleCreateQuiz = async (value) => {
    // setVisibleDrawer(false);
    console.log('submitValues: ', value);
    let questionParam: ChoicesQuestion | MatchQuestion | FillBlankQuestion = {} as
      | ChoicesQuestion
      | MatchQuestion
      | FillBlankQuestion;
    if (value.type === QuestionTypeEnum.CHOICES) {
      const optionObject = {};
      AlphabetLetter.slice(0, numAns || 4).forEach((v) => {
        optionObject[v] = value[`option.${v}`];
      });
      const choices = Object.keys(optionObject).map((v) => ({
        choice: undefined,
        answer_type: ContentTypeEnum.TEXT,
        answer: optionObject[v],
        choice_name: v,
      }));
      questionParam = {
        id: undefined,
        order: undefined,
        time_limit: value.time,
        choices: choices,
        content: value.question,
        correct_answer: value.correct_ans,
        question_type: QuestionTypeEnum.CHOICES,
        content_type: ContentTypeEnum.TEXT,
      };
    } else if (value.type === QuestionTypeEnum.MATCH) {
      console.log('match', selectedAnsMatch);
      const optionObject = {};
      const first_column = Array.from({ length: numFirstCol }, (_, i) => i + 1).map((v) => ({
        id: uuidv4(),
        content_type: ContentTypeEnum.TEXT,
        content: value[`firstCol.${v}`],
      }));
      const second_column = Array.from({ length: numSecondCol }, (_, i) => i + 1).map((v) => ({
        id: uuidv4(),
        content_type: ContentTypeEnum.TEXT,
        content: value[`secondCol.${v}`],
      }));
      const ans = Array.from({ length: numFirstCol * numSecondCol || 0 }, (_, i) => i + 1).map((numOfAns, index) => {
        console.log('first_column', first_column?.[`ansFiCol.${numOfAns}`]?.id);
        console.log('first_column', first_column?.[value[`ansFiCol.${numOfAns}`]]?.id);
        console.log('anfi', value['ansFiCol.1']?.toString());
        console.log('ans', value);
        return [first_column?.[value[`ansFiCol.${numOfAns}`]]?.id, second_column?.[value[`ansSeCol.${numOfAns}`]]?.id];
      });
      console.log('ans', ans);
      questionParam = {
        id: undefined,
        order: undefined,
        time_limit: value.time,
        content: value.question,
        first_column: first_column,
        second_column: second_column,
        correct_answer: ans,
        question_type: QuestionTypeEnum.MATCH,
        content_type: ContentTypeEnum.TEXT,
      };
      console.log('questionParam', questionParam);
    } else if (value.type === QuestionTypeEnum.FILL) {
      console.log('fill');
      const hiddenWord = value.content.split(' ').map((v, index) => ({
        id: index + 1,
        word: v,
        hidden: value.hiddenWord.includes(v),
      }));
      console.log('hiddenWord', hiddenWord);
      //       export interface FillBlankQuestion {
      //   id?: string;
      //   order?: number;
      //   time_limit?: number;
      //   content: string;
      //   hidden_words?: Array<{ id: number; word: string; hidden: boolean }>;
      //   question_type: QuestionTypeEnum;
      // }

      questionParam = {
        id: undefined,
        order: undefined,
        time_limit: value.time,
        content: value.question,
        // hidden_words: Array<{ id: number; word: string; hidden: boolean }>;
        question_type: QuestionTypeEnum.MATCH,
      };
    }
    return;
    await CourseService.createQuestion({
      quiz_id: '32fd4786-019c-460a-829f-c0f9ec3867fa',
      question: { ...questionParam },
    });
  };

  console.log('selectedAnsMatch', selectedAnsMatch);

  return (
    <div>
      <div
        css={css`
          padding: 30px;
          border: 1px solid #000;
          margin: 10px;
          border-width: 5px;
          border-style: double;
          .select-group {
            display: flex;
            gap: 15px;
            margin-left: 20px;
            align-items: end;
            .course-field {
              max-width: 300px;
            }
            .ant-input {
              min-height: 46px !important;
            }
          }
          .quiz-header {
            margin-top: 10px;
            display: flex;
            gap: 10px;
            &.header {
              margin-left: 20px;
              margin-bottom: 20px;
            }
            div {
              background-color: #2db7f5;
              color: #fff;
              padding: 5px;
              border-radius: 5px;
              text-align: center;
            }
            .stt {
              width: 50px;
            }
            .time {
              width: 110px;
            }
            .type {
              width: 50px;
            }
            .content,
            .option {
              width: 220px;
            }
            .ans {
              width: 200px;
            }
            .action {
              width: 200px;
            }
          }
        `}
      >
        <div className="select-group">
          {/* <div className="select-coures">
            <AppSelect
              className="course-field"
              label="Chọn khoá học / lớp học"
              placeholder="Chọn khoá học / lớp học"
              name="type"
              type="string"
              itemSelect={listCourse.map((v) => ({
                label: v.name,
                value: v.id,
                id: v.id,
              }))}
              handleChange={(value, option) => {
                setSelectedCourse(listCourse?.find((v) => v.id === option?.id) || ({} as ListCourseType));
                setSelectedLesson(null);
              }}
              value={selectedCourse?.name}
            />
          </div>
          <div className="select-lesson">
            <AppSelect
              className="course-field"
              label="Chọn bài học"
              placeholder="Chọn bài học"
              name="type"
              type="string"
              itemSelect={selectedCourse?.lessons?.map((v) => ({
                label: v.name,
                value: v.id,
                id: v.id,
              }))}
              handleChange={(value, option) => {
                setSelectedLesson({ id: option?.id, name: option.children });
              }}
              value={selectedLesson?.name}
            />
          </div> */}
          <div className="quiz-name">
            <AppInput
              label="Tiêu đề quiz"
              placeholder="Tiêu đề quiz"
              value={quizTitle}
              handleChange={(e) => setQuizTitle(e.target.value)}
            />
          </div>
          <Button type="primary" onClick={handleCreateNewQuiz} disabled={!quizTitle?.length} icon={<PlusOutlined />}>
            Tạo quiz
          </Button>
        </div>
        <div className="quiz-header header">
          <div className="stt">STT</div>
          <div className="time">Thời gian (s)</div>
          <div className="type">Loại</div>
          <div className="content">Nội dung</div>
          <div className="option">Lựa chọn</div>
          <div className="ans">Đáp án</div>
          <div className="action">Action</div>
        </div>

        <QuizShow title={quizTitle} data={undefined} />
      </div>

      <Drawer
        title={`Tạo quiz cho ${quizTitle || '...'}`}
        width={'100%'}
        onClose={() => setVisibleDrawer(false)}
        open={visibleDrawer}
      >
        <Form
          layout="vertical"
          onFinish={handleCreateQuiz}
          form={form}
          // onFieldsChange={(e) => console.log('e :==>>', e)}
          // onChange={(e) => console.log('e :==>>', e)}
          initialValues={{
            numAns: 4,
            type: QuestionTypeEnum.FILL,
            numFirstCol: 1,
            numSecondCol: 1,
            hiddenWord: [],
            content: '',
          }}
          css={css`
            .course-field {
              max-width: unset;
            }
            .ant-input {
              width: 100%;
            }
          `}
        >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="type" label="Loại Quiz" rules={[{ required: true, message: 'Please select an owner' }]}>
                <AppSelect
                  className="course-field"
                  placeholder="Chọn quiz"
                  name="type"
                  type="string"
                  itemSelect={Object.keys(QuestionTypeEnum).map((v) => ({
                    value: v,
                    label: v,
                  }))}
                  handleChange={(value, option) => {
                    setSelectedLesson({ id: option?.id, name: option.children });
                    form.setFieldValue('type', value);
                  }}
                  value={selectedLesson?.name}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="time"
                label="Thời gian"
                rules={[
                  {
                    required: false,
                  },
                  () => ({
                    validator(_, value) {
                      if (!value) {
                        return Promise.reject();
                      }
                      if (value < 0) {
                        return Promise.reject('Thời gian là một số dương.');
                      }
                      return Promise.resolve();
                    },
                  }),
                ]}
              >
                <AppInput
                  placeholder="Nhập thời gian"
                  value={form.getFieldValue('time')}
                  handleChangeNumber={(e) => form.setFieldValue('time', e)}
                  type="number"
                />
              </Form.Item>
            </Col>
            <Col span={16}>
              <Form.Item name="question" label="Câu hỏi" rules={[{ required: true, message: 'Điền câu hỏi quiz' }]}>
                <AppInput
                  name="question"
                  placeholder="Nhập câu hỏi"
                  value={form.getFieldValue('question')}
                  handleChange={(e) => form.setFieldValue('question', e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          {quizType === QuestionTypeEnum.CHOICES ? (
            <Row gutter={16}>
              <Col span={8}>
                <p style={{ width: '100%' }}>Số phương án</p>
                <Form.Item
                  name={`numAns`}
                  rules={[
                    {
                      required: true,
                      message: `Chọn đáp án đúng`,
                    },
                  ]}
                  shouldUpdate
                >
                  <AppSelect
                    className="course-field"
                    placeholder="Chọn số đáp án"
                    type="string"
                    itemSelect={Array.from({ length: AlphabetLetter.length }, (_, i) => i + 1).map((v) => ({
                      value: v,
                      label: v,
                    }))}
                    handleChange={(value) => {
                      form.setFieldValue('numAns', value);
                    }}
                    value={form.getFieldValue('numAns')}
                    css={css`
                      max-width: 500px;
                      margin-bottom: 10px;
                    `}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <p style={{ width: '100%' }}>Phương án đúng</p>
                <Form.Item
                  name={`correct_ans`}
                  rules={[
                    {
                      required: true,
                      message: `Chọn đáp án đúng`,
                    },
                  ]}
                >
                  <AppSelect
                    className="course-field"
                    placeholder="Chọn đáp án đúng"
                    type="string"
                    itemSelect={AlphabetLetter.slice(0, numAns || 4).map((v) => ({
                      value: v,
                      label: v,
                    }))}
                    handleChange={(value) => {
                      form.setFieldValue('correct_ans', value);
                    }}
                    value={form.getFieldValue('correct_ans')}
                    css={css`
                      max-width: 500px;
                      margin-bottom: 10px;
                    `}
                  />
                </Form.Item>
              </Col>
              <Col
                span={24}
                css={css`
                  &.ant-col-24 {
                    display: flex;
                    gap: 20px;
                    flex-wrap: wrap;
                  }
                `}
              >
                {AlphabetLetter.slice(0, numAns || 4).map((v) => {
                  return (
                    <Form.Item
                      key={v}
                      name={`option.${v}`}
                      rules={[
                        {
                          required: true,
                          message: `Điền đáp án ${v}`,
                        },
                      ]}
                    >
                      <AppInput
                        label={`Đáp án ${v}`}
                        name={v}
                        placeholder={`Đáp án ${v}`}
                        value={form.getFieldValue(v)}
                        handleChange={(e) => form.setFieldValue(`option.${[v]}`, e.target.value)}
                        css={css`
                          height: 100%;
                          .s-label {
                            font-weight: 500;
                            color: rgba(0, 0, 0, 0.88);
                            font-size: 14px;
                            display: block;
                          }
                          input {
                            width: 300px;
                          }
                        `}
                      />
                    </Form.Item>
                  );
                })}
              </Col>
            </Row>
          ) : quizType === QuestionTypeEnum.MATCH ? (
            <Row gutter={16}>
              <Col span={16}>
                <Row gutter={16}>
                  <Col span={12}>
                    <p style={{ width: '100%' }}>Số phương án cột 1</p>
                    <Form.Item
                      name={`numFirstCol`}
                      shouldUpdate
                      rules={[
                        {
                          required: true,
                          message: `Chọn số phương án cột 1`,
                        },
                      ]}
                    >
                      <AppSelect
                        className="course-field"
                        placeholder="Chọn số phương án cột 1"
                        type="string"
                        itemSelect={Array.from({ length: AlphabetLetter.length }, (_, i) => i + 1).map((v) => ({
                          value: v,
                          label: v,
                        }))}
                        handleChange={(value) => {
                          form.setFieldValue('numFirstCol', value);
                        }}
                        value={form.getFieldValue('numFirstCol')}
                        css={css`
                          max-width: 500px;
                          margin-bottom: 10px;
                        `}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <p style={{ width: '100%' }}>Số phương án cột 2</p>
                    <Form.Item
                      name={`numSecondCol`}
                      rules={[
                        {
                          required: true,
                          message: `Chọn số phương án cột 2`,
                        },
                      ]}
                    >
                      <AppSelect
                        className="course-field"
                        placeholder="Chọn số phương án cột 2"
                        type="string"
                        itemSelect={Array.from({ length: AlphabetLetter.length }, (_, i) => i + 1).map((v) => ({
                          value: v,
                          label: v,
                        }))}
                        handleChange={(value) => {
                          form.setFieldValue('numSecondCol', value);
                        }}
                        value={form.getFieldValue('numSecondCol')}
                        css={css`
                          max-width: 500px;
                          margin-bottom: 10px;
                        `}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col
                    span={12}
                    css={css`
                      input {
                        width: 100%;
                      }
                    `}
                  >
                    {Array.from({ length: numFirstCol }, (_, i) => i + 1).map((v) => {
                      return (
                        <Form.Item
                          key={v}
                          name={`firstCol.${v}`}
                          rules={[
                            {
                              required: true,
                              message: `Điền phương án ${v}`,
                            },
                          ]}
                        >
                          <AppInput
                            label={`Phương án ${v}`}
                            placeholder={`Phương án ${v}`}
                            value={form.getFieldValue(v)}
                            handleChange={(e) => form.setFieldValue(`firstCol.${[v]}`, e.target.value)}
                            css={css`
                              height: 100%;
                              .s-label {
                                font-weight: 500;
                                color: rgba(0, 0, 0, 0.88);
                                font-size: 14px;
                                display: block;
                              }
                              input {
                                width: 300px;
                              }
                            `}
                          />
                        </Form.Item>
                      );
                    })}
                  </Col>
                  <Col
                    span={12}
                    css={css`
                      input {
                        width: 100%;
                      }
                    `}
                  >
                    {AlphabetLetter.slice(0, numSecondCol || 1).map((v) => {
                      return (
                        <Form.Item
                          key={v}
                          name={`secondCol.${v}`}
                          rules={[
                            {
                              required: true,
                              message: `Điền phương án ${v}`,
                            },
                          ]}
                        >
                          <AppInput
                            label={`Phương án ${v}`}
                            placeholder={`Phương án ${v}`}
                            value={form.getFieldValue(`secondCol.${[v]}`)}
                            handleChange={(e) => form.setFieldValue(`secondCol.${[v]}`, e.target.value)}
                            css={css`
                              height: 100%;
                              .s-label {
                                font-weight: 500;
                                color: rgba(0, 0, 0, 0.88);
                                font-size: 14px;
                                display: block;
                              }
                              input {
                                width: 300px;
                              }
                            `}
                          />
                        </Form.Item>
                      );
                    })}
                  </Col>
                </Row>
              </Col>
              <Col span={8}>
                <Row gutter={16}>
                  <Col span={12}>
                    <p style={{ width: '100%' }}>Đáp án cột 1</p>
                    {Array.from({ length: numFirstCol * numSecondCol || 0 }, (_, i) => i + 1).map((value, index) => {
                      return (
                        <Form.Item
                          key={index}
                          name={`ansFiCol.${value}`}
                          rules={[
                            {
                              required: false,
                              message: `Chọn đáp cột 1`,
                            },
                          ]}
                        >
                          <AppSelect
                            className="course-field"
                            placeholder="Chọn đáp cột 1"
                            type="string"
                            itemSelect={Array.from({ length: numFirstCol }, (_, i) => i + 1).map((v, index) => ({
                              value: index,
                              label: v,
                            }))}
                            handleChange={(v) => {
                              form.setFieldValue(`ansFiCol.${value}`, v);
                            }}
                            value={form.getFieldValue(`ansFiCol.${value}`)}
                            css={css`
                              max-width: 500px;
                              margin-bottom: 10px;
                            `}
                          />
                        </Form.Item>
                      );
                    })}
                  </Col>
                  <Col span={12}>
                    <p style={{ width: '100%' }}>Đáp án cột 2</p>
                    {Array.from({ length: numFirstCol * numSecondCol || 0 }, (_, i) => i + 1).map((value, index) => {
                      return (
                        <Form.Item
                          key={index}
                          name={`ansSeCol.${value}`}
                          rules={[
                            {
                              required: false,
                              message: `Chọn đáp cột 2`,
                            },
                          ]}
                        >
                          <AppSelect
                            key={index}
                            className="course-field"
                            placeholder="Chọn đáp cột 2"
                            type="string"
                            itemSelect={AlphabetLetter.slice(0, numSecondCol || 1).map((v, index) => ({
                              value: index,
                              label: v,
                            }))}
                            handleChange={(v) => {
                              form.setFieldValue(`ansSeCol.${value}`, v);
                            }}
                            value={form.getFieldValue(`ansSeCol.${value}`)}
                            css={css`
                              max-width: 500px;
                              margin-bottom: 10px;
                            `}
                          />
                        </Form.Item>
                      );
                    })}
                  </Col>
                </Row>
              </Col>
            </Row>
          ) : quizType === QuestionTypeEnum.FILL ? (
            <div>
              <Form.Item name="content" label="Nội dung" rules={[{ required: true, message: 'Điền nội dung câu.' }]}>
                <TextArea
                  rows={4}
                  name="content"
                  placeholder="Nhập nội dung"
                  value={form.getFieldValue('content')}
                  onChange={(e) => form.setFieldValue('content', e.target.value)}
                />
              </Form.Item>

              <div
                className="render-content"
                css={css`
                  white-space: pre-wrap;
                `}
              >
                {renderContent}
              </div>

              <Form.Item
                name={`hiddenWord`}
                shouldUpdate
                rules={[
                  {
                    required: true,
                    message: `Chọn từ để ẩn`,
                  },
                ]}
              >
                <MultipleSelect
                  name={'hiddenWord'}
                  label="Từ ẩn"
                  className="course-field"
                  placeholder="Chọn từ để ẩn"
                  type="string"
                  itemSelect={content
                    ?.split(' ')
                    ?.filter((v) => v !== ' ')
                    ?.map((v) => ({
                      value: v,
                      label: v,
                    }))}
                  handleChange={(value) => {
                    console.log('value', value);
                    form.setFieldValue('hiddenWord', value);
                  }}
                  value={form.getFieldValue('hiddenWord') || []}
                  css={css`
                    max-width: 500px;
                    margin-bottom: 10px;
                  `}
                />
              </Form.Item>
            </div>
          ) : (
            <div></div>
          )}
          <Row>
            <Space>
              <Button onClick={() => setVisibleDrawer(false)}>Huỷ</Button>
              <Button type="dashed" onClick={rsForm}>
                Tạo và Thêm
              </Button>
              <Button type="primary" htmlType="submit">
                Tạo
              </Button>
            </Space>
          </Row>
        </Form>
      </Drawer>
    </div>
  );
};

export default CreateQuiz;

const QuizShow = ({ title, data }) => {
  return (
    <fieldset>
      <legend>{title || 'Tiêu đề quiz'}</legend>
      <div className="quiz-header">
        <div className="stt">STT</div>
        <div className="time">Thời gian (s)</div>
        <div className="type">Loại</div>
        <div className="content">Nội dung</div>
        <div className="option">Lựa chọn</div>
        <div className="ans">Đáp án</div>
        <div className="action">Action</div>
      </div>
    </fieldset>
  );
};
const quizEdit = () => {
  return (
    <div className="quiz-header">
      <div className="stt">STT</div>
      <div className="time">Thời gian (s)</div>
      <div className="type">Loại</div>
      <div className="content">Nội dung</div>
      <div className="option">Lựa chọn</div>
      <div className="ans">Đáp án</div>
      <div className="action">Action</div>
    </div>
  );
};
