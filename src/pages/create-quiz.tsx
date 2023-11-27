import { ApiOutlined, HomeOutlined, NodeIndexOutlined, PlusOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button, Col, Divider, Drawer, Form, Modal, Row, Select, Space, Table } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { cloneDeep } from 'lodash';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import AppInput from 'src/components/input';
import PrivateProvider from 'src/components/providers/PrivateProvider';
import AppSelect from 'src/components/select';
import MultipleSelect from 'src/components/select/multipleSelect';
import CourseService from 'src/lib/api/course';
import {
  ChoicesQuestion,
  ContentTypeEnum,
  FillBlankQuestion,
  MatchQuestion,
  Question,
  QuestionTypeEnum,
  Quiz,
} from 'src/lib/types/backend_modal';
import RoutePaths from 'src/lib/utils/routes';
import { AlphabetLetter, removePunctuation, replaceWordsInString } from 'src/lib/utils/utils';
import { v4 as uuidv4 } from 'uuid';
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

const CreateQuizPage = () => {
  const [form] = Form.useForm();

  const [quizTitle, setQuizTitle] = useState<string>('');
  //list quiz item state
  const [listQuiz, setListQuiz] = useState<Quiz[]>([]);
  const [drawerState, setDrawerState] = useState<{ open: boolean; questionData: Question | null }>({
    open: false,
    questionData: null,
  });
  const [newQuizId, setNewQuizId] = useState<string | null>(null);
  const router = useRouter();
  const numAns = Form.useWatch('numAns', { form, preserve: true });
  const quizType = Form.useWatch('type', { form, preserve: true });
  const numFirstCol = Form.useWatch('numFirstCol', { form, preserve: true });
  const numSecondCol = Form.useWatch('numSecondCol', { form, preserve: true });
  const content = Form.useWatch('content', { form, preserve: true });
  const hiddenWord = Form.useWatch('hiddenWord', { form, preserve: true });

  const getListQuiz = async () => {
    try {
      const listQuizDetail = await CourseService.listQuiz();
      setListQuiz(listQuizDetail);
      // setQuizTitle();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListQuiz();
  }, []);

  const renderContent = useMemo(() => {
    return replaceWordsInString(cloneDeep(content) || '', cloneDeep(hiddenWord) || []);
  }, [content, hiddenWord]);

  const handleCreateNewQuiz = async () => {
    setDrawerState({ open: true, questionData: null });
    try {
      const newQuiz = await CourseService.createQuiz({ name: quizTitle });
      setNewQuizId(newQuiz.id);
    } catch (error: any) {
      console.log(error.message);
    }
    setQuizTitle('');
  };

  const handleCreateQuestion = async ({ value, isUpdateQuestion = false, continueCreateQuestion = false }) => {
    let questionParam: ChoicesQuestion | MatchQuestion | FillBlankQuestion = {} as
      | ChoicesQuestion
      | MatchQuestion
      | FillBlankQuestion;
    if (value.type === QuestionTypeEnum.CHOICES) {
      const optionObject = {};
      AlphabetLetter.slice(0, numAns || 4).forEach((v, idx) => {
        optionObject[v] = value[`option.${idx + 1}`];
      });
      const choices = Object.keys(optionObject).map((v) => ({
        choice: undefined,
        answer_type: ContentTypeEnum.TEXT,
        answer: optionObject[v],
        choice_name: v,
      }));
      questionParam = {
        id: undefined,
        order: value.order,
        time_limit: value.time,
        choices: choices,
        content: value.question,
        correct_answer: value.correct_ans,
        question_type: QuestionTypeEnum.CHOICES,
        content_type: ContentTypeEnum.TEXT,
      };
    } else if (value.type === QuestionTypeEnum.MATCH) {
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
        return [first_column?.[value[`ansFiCol.${numOfAns}`]]?.id, second_column?.[value[`ansSeCol.${numOfAns}`]]?.id];
      });
      questionParam = {
        id: undefined,
        order: value.order,
        time_limit: value.time,
        content: value.question,
        first_column: first_column,
        second_column: second_column,
        correct_answer: ans,
        question_type: QuestionTypeEnum.MATCH,
        content_type: ContentTypeEnum.TEXT,
      };
    } else if (value.type === QuestionTypeEnum.FILL) {
      const hiddenWord = value.content
        .split(' ')
        .filter((v) => v !== ' ')
        .map((v, index) => ({
          id: index + 1,
          word: v,
          hidden: value.hiddenWord.includes(v),
        }));

      questionParam = {
        id: undefined,
        order: value.order,
        time_limit: value.time,
        title: value.question,
        content: value.content,
        full_content: value.content,
        hidden_words: hiddenWord,
        question_type: QuestionTypeEnum.FILL,
      };
    }
    if (!newQuizId) return;

    if (isUpdateQuestion) {
      await CourseService.editQuestion({
        quiz_id: newQuizId,
        question: { ...questionParam, id: drawerState.questionData?.id || '' },
      });
    } else {
      await CourseService.createQuestion({
        quiz_id: newQuizId,
        question: { ...questionParam },
      });
    }
    getListQuiz();
    form.resetFields();
    !continueCreateQuestion && setDrawerState({ open: false, questionData: null });
  };

  const handleDeleteQuiz = async (id: string) => {
    await CourseService.deleteQuiz(id);
    getListQuiz();
  };

  const renderInitialFormValue = (questionData: Question) => {
    console.log('questionData', questionData);

    const options = {};
    questionData?.choices_question?.choices?.forEach((value, index) => {
      const optionKey = `option.${index + 1}`;
      options[optionKey] = value.answer;
    });
    const firstColumn = {};
    questionData?.match_question?.first_column?.forEach((value, index) => {
      const optionKey = `firstCol.${index + 1}`;
      options[optionKey] = value.content;
    });
    const secondColumn = {};
    questionData?.match_question?.second_column?.forEach((value, index) => {
      const optionKey = `secondCol.${index + 1}`;
      options[optionKey] = value.content;
    });
    questionData?.match_question?.correct_answer?.forEach((value, index) => {
      const idxFi = questionData.match_question?.first_column.findIndex((v) => v.id === value[0]);

      const idxSe = questionData.match_question?.second_column.findIndex((v) => v.id === value[1]);

      const optionKey1 = `ansFiCol.${index + 1}`;
      const optionKey2 = `ansSeCol.${index + 1}`;
      if (typeof idxFi === 'number' && idxFi >= 0) options[optionKey1] = idxFi;
      if (typeof idxSe === 'number' && idxSe >= 0) options[optionKey2] = idxSe;
    });
    const initalData = {
      type: questionData?.question_type || QuestionTypeEnum.CHOICES,
      time: questionData?.time_limit || '',
      question:
        questionData?.choices_question?.content ||
        questionData.match_question?.content ||
        questionData.fill_blank_question?.title,

      numAns: questionData?.choices_question?.choices?.length || 4,
      // option: '', //option?.v
      ...options,
      correct_ans: questionData?.choices_question?.correct_answer.name,
      numFirstCol: questionData.match_question?.first_column?.length || 1,
      numSecondCol: questionData.match_question?.second_column?.length || 1,
      // firstCol: '', //firstCol.v
      // secondCol: '',
      ...firstColumn,
      ...secondColumn,
      content: questionData.fill_blank_question?.full_content,
      hiddenWord: questionData.fill_blank_question?.hidden_words?.filter((v) => v.hidden)?.map((u) => u.word),
      order: questionData.order || questionData.order || questionData.order,
    };

    return initalData;
  };
  useEffect(() => {
    if (drawerState.questionData && drawerState.open) {
      form.setFieldsValue(renderInitialFormValue(drawerState.questionData));
    } else
      form.setFieldsValue({
        numAns: 4,
        type: QuestionTypeEnum.CHOICES,
        numFirstCol: 1,
        numSecondCol: 1,
        hiddenWord: [],
        content: '',
        question: '',
        time: '',
      });
    return form.resetFields();
  }, [drawerState.open]);

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
            justify-content: space-between;
            .course-field {
              max-width: 300px;
            }
            .ant-input {
              min-height: 46px !important;
            }
            .quiz-name-group {
              display: flex;
              gap: 15px;
              align-items: center;
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
          <div className="quiz-name-group">
            <div className="quiz-name">
              <AppInput
                label="Tiêu đề quiz"
                placeholder="Tiêu đề quiz"
                value={quizTitle}
                handleChange={(e) => setQuizTitle(e.target.value)}
              />
            </div>
            <Button type="primary" onClick={handleCreateNewQuiz} disabled={!quizTitle?.length} icon={<PlusOutlined />}>
              Tạo bộ quiz mới
            </Button>
          </div>
          <div>
            <Button type="primary" onClick={() => router.push(RoutePaths.HOME)} icon={<HomeOutlined />}>
              Về trang chủ
            </Button>
          </div>
        </div>

        <QuizShow
          title={quizTitle}
          listQuiz={listQuiz}
          onAddNewQuestion={(id) => {
            setDrawerState({ open: true, questionData: null });

            setNewQuizId(id);
          }}
          onDeleteQuizItem={async (id: string) => {
            await CourseService.deleteQuestion([id]);
            getListQuiz();
          }}
          onEditQuizItem={(quizId, quizData) => {
            setNewQuizId(quizId);
            setDrawerState({ open: true, questionData: quizData });
          }}
          onDeleteQuiz={handleDeleteQuiz}
        />
      </div>

      <Drawer
        title={`Tạo quiz cho ${quizTitle || '...'}`}
        width={'100%'}
        onClose={() => {
          setDrawerState({ open: false, questionData: null });
          form.resetFields();
        }}
        open={drawerState.open}
        destroyOnClose
      >
        <Form
          layout="vertical"
          onFinish={(formValue) =>
            handleCreateQuestion({ value: formValue, continueCreateQuestion: false, isUpdateQuestion: false })
          }
          form={form}
          initialValues={
            drawerState.questionData
              ? renderInitialFormValue(drawerState.questionData)
              : {
                  numAns: 4,
                  type: QuestionTypeEnum.CHOICES,
                  numFirstCol: 1,
                  numSecondCol: 1,
                  hiddenWord: [],
                  content: '',
                }
          }
          css={css`
            .course-field {
              max-width: unset;
            }
            .ant-input,
            .ant-input-number {
              width: 100%;
            }
          `}
        >
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item name="type" label="Loại Quiz" rules={[{ required: true, message: 'Chọn loại câu hỏi' }]}>
                <AppSelect
                  className="course-field"
                  placeholder="Chọn loại câu hỏi"
                  name="type"
                  type="string"
                  itemSelect={Object.keys(QuestionTypeEnum).map((v) => ({
                    value: v,
                    label: v,
                  }))}
                  handleChange={(value, option) => {
                    form.setFieldValue('type', value);
                  }}
                  value={form.getFieldValue('type')}
                  disabled={!!drawerState.questionData}
                />
              </Form.Item>
            </Col>
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
                        return Promise.resolve();
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
                  suffix="(s)"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="order" label="Thứ tự" rules={[{ required: false, message: 'Điền thứ tự.' }]}>
                <AppInput
                  placeholder="Nhập thứ tự"
                  value={form.getFieldValue('order')}
                  handleChangeNumber={(e) => form.setFieldValue('order', e)}
                  type="number"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
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
                {AlphabetLetter.slice(0, numAns || 4).map((v, index) => {
                  return (
                    <Form.Item
                      key={v}
                      name={`option.${index + 1}`}
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
                        value={form.getFieldValue(`option.${[index + 1]}`)}
                        handleChange={(e) => {
                          console.log('e', e);
                          form.setFieldValue(`option.${[index + 1]}`, e.target.value);
                        }}
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
                    {AlphabetLetter.slice(0, numSecondCol || 1).map((v, idx) => {
                      return (
                        <Form.Item
                          key={v}
                          name={`secondCol.${idx + 1}`}
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
                            value={form.getFieldValue(`secondCol.${[idx + 1]}`)}
                            handleChange={(e) => form.setFieldValue(`secondCol.${[idx + 1]}`, e.target.value)}
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
                            placeholder="Chọn đáp án cột 1"
                            type="string"
                            itemSelect={Array.from({ length: numFirstCol }, (_, i) => i + 1).map((v, index) => ({
                              value: index,
                              label: 'Phương án ' + v,
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
                              label: 'Phương án ' + v,
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
                      label: removePunctuation(v),
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
              {drawerState.questionData ? (
                <Button
                  onClick={() => {
                    const formValue = form.getFieldsValue();
                    form.validateFields();
                    const x = form.getFieldsError();
                    if (x.every((v) => v.errors.length === 0)) {
                      handleCreateQuestion({ value: formValue, continueCreateQuestion: false, isUpdateQuestion: true });
                    }
                    form.resetFields();
                    setDrawerState((prev) => ({ ...prev, open: false }));
                  }}
                >
                  Lưu Thay Đổi
                </Button>
              ) : (
                <>
                  <Button
                    onClick={() => {
                      if (newQuizId && !listQuiz.some((quiz) => quiz.id === newQuizId)) {
                        handleDeleteQuiz(newQuizId);
                      }
                      form.resetFields();
                      setDrawerState((prev) => ({ ...prev, open: false }));
                    }}
                  >
                    Huỷ
                  </Button>
                  <Button
                    type="dashed"
                    onClick={async () => {
                      const formValue = form.getFieldsValue();
                      form.validateFields();
                      const x = form.getFieldsError();
                      if (x.every((v) => v.errors.length === 0)) {
                        handleCreateQuestion({
                          value: formValue,
                          continueCreateQuestion: true,
                          isUpdateQuestion: false,
                        });
                      }
                    }}
                  >
                    Tạo và Thêm
                  </Button>
                  <Button type="primary" htmlType="submit">
                    Tạo
                  </Button>
                </>
              )}
            </Space>
          </Row>
        </Form>
      </Drawer>
    </div>
  );
};

const QuizShow = ({
  title,
  listQuiz,
  onAddNewQuestion,
  onDeleteQuizItem,
  onEditQuizItem,
  onDeleteQuiz,
}: {
  title: string;
  listQuiz: Quiz[];
  onAddNewQuestion: (quizId: string) => void;
  onDeleteQuiz: (quizId: string) => void;

  onDeleteQuizItem: (quizId: string) => void;
  onEditQuizItem: (quizId: string, question: Question) => void;
}) => {
  const [modalData, setModalData] = useState<{ open: string | null; id: string }>({ open: null, id: '' });
  const editQuizItem = (quizItem) => {
    const quizId = listQuiz.find((v) => v.questions?.some((u) => u.id === quizItem.id))?.id;
    onEditQuizItem(quizId || '', quizItem);
  };
  const columns = [
    {
      title: 'STT',
      dataIndex: 'order',
      key: 'order',
      width: 80,
      className: 'stt',
    },
    {
      title: 'Thời gian',
      dataIndex: 'time_limit',
      key: 'time_limit',
      width: 100,
    },
    {
      title: 'Loại',
      dataIndex: 'question_type',
      key: 'question_type',
      width: 120,
    },
    {
      title: 'Câu hỏi',
      key: 'content',
      width: 150,
      render: (_, record) => {
        if (record.question_type === QuestionTypeEnum.CHOICES) {
          return <div>{record.choices_question.content}</div>;
        } else if (record.question_type === QuestionTypeEnum.MATCH) {
          return <div>{record.match_question?.content}</div>;
        } else if (record.question_type === QuestionTypeEnum.FILL) {
          return <div>{record.fill_blank_question.title}</div>;
        }
      },
    },
    {
      title: 'Lựa chọn',
      dataIndex: 'option',
      key: 'option',
      width: 400,
      render: (_, record) => {
        if (record.question_type === QuestionTypeEnum.CHOICES) {
          return (
            <div>
              {record.choices_question?.choices.map((c, index) => {
                return (
                  <div key={c.choice_name + index}>
                    {c.choice_name}: {c.answer}
                  </div>
                );
              })}
            </div>
          );
        } else if (record.question_type === QuestionTypeEnum.MATCH) {
          const fiCol = record.match_question.first_column;
          const seCol = record.match_question.second_column;
          return (
            <div>
              {Array.from({ length: Math.max(fiCol.length, seCol.length) }, (_, i) => i + 1).map((value, v) => {
                return (
                  <div
                    key={v}
                    css={css`
                      display: flex;
                      gap: 20px;
                      .fiSe {
                        max-width: 200px;
                        overflow: hidden;
                        text-wrap: nowrap;
                        text-overflow: ellipsis;
                        cursor: pointer;
                      }
                    `}
                  >
                    <div className="fiSe" title={fiCol?.[v]?.content}>
                      {fiCol?.[v]?.content}
                    </div>
                    {fiCol?.[v]?.content && seCol?.[v]?.content && <ApiOutlined />}
                    <div className="fiSe" title={seCol?.[v]?.content}>
                      {seCol?.[v]?.content}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        } else if (record.question_type === QuestionTypeEnum.FILL) {
          return <div>{record.fill_blank_question.content}</div>;
        }
      },
    },
    {
      title: 'Đáp án',
      key: 'ans',
      width: 400,

      render: (_, record) => {
        if (record.question_type === QuestionTypeEnum.CHOICES) {
          return <div>{record.choices_question.correct_answer.name}</div>;
        } else if (record.question_type === QuestionTypeEnum.MATCH) {
          const fiCol = record.match_question.first_column;
          const seCol = record.match_question.second_column;
          const getAnsContent = (id, column) => {
            return column.find((v) => v.id === id)?.content;
          };

          return (
            <div>
              {record.match_question.correct_answer.map((v, idx) => {
                const firstAnscontent = getAnsContent(v[0], fiCol);

                const secondAnscontent = getAnsContent(v[1], seCol);

                return (
                  <div
                    key={v + idx}
                    css={css`
                      display: flex;
                      gap: 20px;
                      .fiSe {
                        max-width: 200px;
                        overflow: hidden;
                        text-wrap: nowrap;
                        text-overflow: ellipsis;
                        cursor: pointer;
                      }
                    `}
                  >
                    <div className="fiSe" title={firstAnscontent}>
                      {firstAnscontent}
                    </div>
                    {!!firstAnscontent && !!secondAnscontent && <NodeIndexOutlined />}
                    <div className="fiSe" title={secondAnscontent}>
                      {secondAnscontent}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        } else if (record.question_type === QuestionTypeEnum.FILL) {
          return (
            <div>
              {record.fill_blank_question.hidden_words
                ?.filter((v) => v.hidden)
                ?.map((item, idx) => {
                  return (
                    <div key={item.id}>
                      {idx + 1} - {item.word}
                    </div>
                  );
                })}
            </div>
          );
        }
      },
    },
    {
      title: 'Sửa / Xoá',
      key: 'action',
      width: 100,
      render: (id, record) => {
        return (
          <div className="action">
            <div
              className="action-grp"
              css={css`
                display: flex;
                flex-direction: column;
                gap: 10px;
              `}
            >
              <Button
                type="primary"
                ghost
                onClick={() => {
                  editQuizItem(record);
                }}
              >
                Edit
              </Button>
              <Button onClick={() => onDeleteQuizItem(record.id)} type="dashed" danger ghost>
                Delete
              </Button>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      {listQuiz?.map((quiz, i) => {
        return (
          <div key={quiz.id}>
            <Divider>{quiz.name}</Divider>
            <Space style={{ marginBottom: 16 }}>
              <Button
                type="primary"
                onClick={() => {
                  onAddNewQuestion(quiz.id);
                }}
              >
                Thêm câu hỏi
              </Button>
              <Button
                type="primary"
                danger
                onClick={() => {
                  setModalData({ open: quiz.id, id: quiz.id });
                }}
              >
                {`Xoá quiz "${quiz.name}"`}
              </Button>
            </Space>
            <Table dataSource={quiz?.questions} columns={columns} scroll={{ x: 1080 }} pagination={false} />
            <Modal
              title={`Xoá Quiz ${quiz.name}`}
              open={quiz.id === modalData.open}
              onOk={() => {
                onDeleteQuiz(modalData.id);
                setModalData((prev) => ({ ...prev, open: null }));
              }}
              centered
              onCancel={() => setModalData((prev) => ({ ...prev, open: null }))}
              okText="Xác nhận"
              cancelText="Huỷ"
            >
              <p>Xác nhận xoá</p>
            </Modal>
          </div>
        );
      })}
    </div>
  );

  // return (
  //   <QuizShowWrapperStyled>
  //     {listQuiz.map((quiz, i) => {
  //       return (
  //         <div key={quiz.id}>
  //           <fieldset>
  //             <legend className="quiz-name">{quiz.name || 'Tiêu đề quiz'}</legend>
  //             <div className="quiz-section-btn">
  //               <Button
  //                 type="primary"
  //                 onClick={() => {
  //                   onAddNewQuestion(quiz.id);
  //                 }}
  //               >
  //                 Thêm câu hỏi
  //               </Button>

  //               <Button
  //                 type="primary"
  //                 danger
  //                 onClick={() => {
  //                   setModalData({ open: true, id: quiz.id });
  //                 }}
  //               >
  //                 Xoá quiz
  //               </Button>
  //             </div>
  //             {quiz?.questions?.map((v, index) => {
  //               if (v.question_type === QuestionTypeEnum.MATCH) {
  //                 const renderPairAns = (ans, first, second) => {
  //                   const ans1 = first.find((v) => v.id === ans[0]).content;
  //                   const ans2 = second.find((v) => v.id === ans[1]).content;
  //                   return (
  //                     <div className="ans-pair">
  //                       [
  //                       <div className="ans-fi" title={ans1}>
  //                         {ans1}
  //                       </div>
  //                       ] --- [
  //                       <div className="ans-se" title={ans2}>
  //                         {ans2}{' '}
  //                       </div>
  //                       ]
  //                     </div>
  //                   );
  //                 };

  //                 const renderPairOptions = (first, second) => {};

  //                 return (
  //                   <div className="quiz-header" key={v.id}>
  //                     <div className="stt">{index + 1}</div>
  //                     <div className="time">{v.time_limit}(s)</div>
  //                     <div className="type">{v.question_type}</div>
  //                     <div className="content">{v.match_question?.content}</div>
  //                     <div className="option">
  //                       <div>
  //                         {v.match_question?.first_column.map((v, i) => {
  //                           return <div key={v.id}>{v.content}</div>;
  //                         })}
  //                       </div>
  //                       <div>
  //                         {v.match_question?.second_column.map((v, i) => {
  //                           return <div key={v.id}>{v.content}</div>;
  //                         })}
  //                       </div>
  //                     </div>
  //                     <div className="ans">
  //                       <div>
  //                         {v.match_question?.correct_answer?.map((ans, idx) => {
  //                           return (
  //                             <div key={idx}>
  //                               {renderPairAns(ans, v.match_question?.first_column, v.match_question?.second_column)}
  //                             </div>
  //                           );
  //                         })}
  //                       </div>
  //                     </div>
  //                     <div className="action">
  //                       <div className="action-grp">
  //                         <Button type="primary" ghost>
  //                           Edit
  //                         </Button>
  //                         <Button onClick={() => onDeleteQuizItem(v.id)} type="dashed" danger ghost>
  //                           Delete
  //                         </Button>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 );
  //               } else if (v.question_type === QuestionTypeEnum.CHOICES)
  //                 return (
  //                   <div className="quiz-header" key={v.id}>
  //                     <div className="stt">{index + 1}</div>
  //                     <div className="time">{v.time_limit}(s)</div>
  //                     <div className="type">{v.question_type}</div>
  //                     <div className="content">{v.choices_question?.content}</div>
  //                     <div className="option">
  //                       <div>
  //                         {v.choices_question?.choices.map((c, index) => {
  //                           return (
  //                             <div key={c.choice_name + index}>
  //                               {c.choice_name}: {c.answer}
  //                             </div>
  //                           );
  //                         })}
  //                       </div>
  //                     </div>
  //                     <div className="ans">{v.choices_question?.correct_answer.name}</div>
  //                     <div className="action">
  //                       <div className="action-grp">
  //                         <Button type="primary" ghost>
  //                           Edit
  //                         </Button>
  //                         <Button onClick={() => onDeleteQuizItem(v.id)} type="dashed" danger ghost>
  //                           Delete
  //                         </Button>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 );
  //               else if (v.question_type === QuestionTypeEnum.FILL)
  //                 return (
  //                   <div className="quiz-header" key={v.id}>
  //                     <div className="stt">{index + 1}</div>
  //                     <div className="time">{v.time_limit}(s)</div>
  //                     <div className="type">{v.question_type}</div>
  //                     <div className="content"></div>
  //                     <div className="option">{v.fill_blank_question?.content}</div>
  //                     <div className="ans">
  //                       <div>
  //                         {v?.fill_blank_question?.hidden_words
  //                           ?.filter((v) => v.hidden)
  //                           ?.map((v, idx) => {
  //                             return (
  //                               <div key={v.id + idx}>
  //                                 {idx + 1} - {v.word}
  //                               </div>
  //                             );
  //                           })}
  //                       </div>
  //                     </div>
  //                     <div className="action">
  //                       <div className="action-grp">
  //                         <Button type="primary" ghost>
  //                           Edit
  //                         </Button>
  //                         <Button onClick={() => onDeleteQuizItem(v.id)} type="dashed" danger ghost>
  //                           Delete
  //                         </Button>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 );
  //               else return null;
  //             })}
  //           </fieldset>
  //         </div>
  //       );
  //     })}
  //     ;
  //   </QuizShowWrapperStyled>
  // );
};

const QuizShowWrapperStyled = styled.div`
  .quiz-name {
    font-weight: 700;
    font-size: 22px;
    font-style: italic;
  }
  .quiz-section-btn {
    display: flex;
    gap: 10px;
    .ant-btn {
      min-width: 120px;
    }
  }
  .quiz-header {
    div {
      background-color: #f5f5f5;
      color: #000;
      font-weight: 500;
    }

    .stt,
    .time,
    .type,
    .content,
    .option,
    .ans,
    .action {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .type {
      width: 120px;
    }
    .content,
    .option,
    .ans {
      padding: 10px;
      text-align: left;
    }

    .ans-pair {
      .ans-fi,
      .ans-se {
        max-width: 100px;
        text-overflow: ellipsis;
        text-wrap: nowrap;
        white-space: nowrap;
        overflow: hidden;
      }
    }

    .action {
      .action-grp {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
  }
`;

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

const CreateQuiz: React.FC = () => {
  return (
    <React.Fragment>
      <PrivateProvider>
        <CreateQuizPage />
      </PrivateProvider>
    </React.Fragment>
  );
};

export default CreateQuiz;
