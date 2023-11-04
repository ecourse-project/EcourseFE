import { PlusOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Badge, Button, Card, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useEffect, useMemo, useState } from 'react';
import AppInput from 'src/components/input';
import AppSelect from 'src/components/select';
import MultipleSelect from 'src/components/select/multipleSelect';
import CourseService from 'src/lib/api/course';
import { QuestionTypeEnum, Quiz, QuizArgs } from 'src/lib/types/backend_modal';
import { AlphabetLetter, replaceWordsInString, splitSentence } from 'src/lib/utils/utils';
import { cloneDeep } from 'lodash';
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
  const [numOfAns, setNumOfAns] = useState<number | null>(4);
  const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false);
  const [selectedAnsMatch, setSelectedAnsMatch] = useState<{ first: string; second: string } | null>(null);
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
      const listQuizDetail = await CourseService.listQuiz(selectedCourse?.id, selectedLesson?.id);
      setListQuiz(listQuizDetail);
      setQuizTitle(listQuizDetail?.[0]?.name);
    } catch (error) {
      console.log(error);
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
          <Button type="primary" onClick={() => setVisibleDrawer(true)} icon={<PlusOutlined />}>
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
          onFinish={(value) => {
            setVisibleDrawer(false);
            console.log('submitValues: ', value);
          }}
          form={form}
          // onFieldsChange={(e) => console.log('e :==>>', e)}
          // onChange={(e) => console.log('e :==>>', e)}
          initialValues={{ numAns: 4, type: QuestionTypeEnum.FILL, numFirstCol: 1, numSecondCol: 1, hiddenWord: [] }}
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
                            value={form.getFieldValue(v)}
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
                    {Array(Math.max(numFirstCol, numSecondCol) || 0)
                      .fill(1)
                      .map((_, index) => {
                        return (
                          <AppSelect
                            key={index}
                            className="course-field"
                            placeholder="Chọn đáp cột 1"
                            type="string"
                            itemSelect={Array.from({ length: numFirstCol }, (_, i) => i + 1).map((v) => ({
                              value: v,
                              label: v,
                            }))}
                            handleChange={(value) => {
                              // form.setFieldValue('numFirstCol', value);
                              setSelectedAnsMatch((prev) => (prev ? { ...prev, first: value } : null));
                            }}
                            value={selectedAnsMatch?.first}
                            css={css`
                              max-width: 500px;
                              margin-bottom: 10px;
                            `}
                          />
                        );
                      })}
                  </Col>
                  <Col span={12}>
                    <p style={{ width: '100%' }}>Đáp án cột 2</p>
                    {Array(Math.max(numFirstCol, numSecondCol))
                      .fill(1)
                      .map((_, index) => {
                        return (
                          <AppSelect
                            key={index}
                            className="course-field"
                            placeholder="Chọn đáp cột 2"
                            type="string"
                            itemSelect={AlphabetLetter.slice(0, numSecondCol || 1).map((v) => ({
                              value: v,
                              label: v,
                            }))}
                            handleChange={(value) => {
                              setSelectedAnsMatch((prev) => (prev ? { ...prev, second: value } : null));
                            }}
                            value={selectedAnsMatch?.second}
                            css={css`
                              max-width: 500px;
                              margin-bottom: 10px;
                            `}
                          />
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
                  itemSelect={splitSentence(content)?.map((v) => ({
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
