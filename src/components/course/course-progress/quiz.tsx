/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Progress, RadioChangeEvent } from 'antd';
import { Collapse, Radio, Typography } from 'antd';
import { isElement, isEmpty } from 'lodash';
import React, { useContext, useEffect, useState } from 'react';
import AppButton from 'src/components/button';
import {
	AnswerChoiceEnum,
	Quiz,
	QuizResult,
	UserAnswersArgs,
} from 'src/models/backend_modal';
import { CourseProgressAction } from './context/reducer';
import { CourseProgressContext } from './course-progress';
const { Panel } = Collapse;

const { Text, Link } = Typography;

interface QuizProps {
	listQuiz: Quiz[];
	onSubmit: () => void;
	result: QuizResult | undefined;
}

const QuizSection: React.FC<QuizProps> = (props) => {
	const { listQuiz, onSubmit, result } = props;
	const { state, dispatch } = useContext(CourseProgressContext);
	const [isSubmit, setIsSubmit] = useState<boolean>(false);
	const [customResult, setCustomResult] = useState<any>([]);
	const [listAnswer, setListAnswer] = useState<string[]>(
		state.answerSheet &&
			state.answerSheet
				.filter((v) => v.answer_choice !== AnswerChoiceEnum.NO_CHOICE)
				.map((u) => u.quiz_id)
	);
	const [value, setValue] = useState(0);

	const onChange = (e: RadioChangeEvent, id: string) => {
		let choice = e.target.value;
		if (choice === 1) choice = AnswerChoiceEnum.A;
		if (choice === 2) choice = AnswerChoiceEnum.B;
		if (choice === 3) choice = AnswerChoiceEnum.C;
		if (choice === 4) choice = AnswerChoiceEnum.D;
		console.log('change and dispach');
		dispatch({
			type: CourseProgressAction.UPDATE_CHECKED_ANSWER,
			payload: { quiz_id: id, answer_choice: choice } as UserAnswersArgs,
		});
		console.log('change and dispach 2');

		const idx = listAnswer.indexOf(id);
		console.log('idx', idx);
		if (idx < 0) {
			setListAnswer([...listAnswer, id]);
		}
	};
	useEffect(() => {
		const obj = {};
		const newResult = result?.quiz_answers.forEach((v) => {
			console.log('v.id', v.quiz_id);
			const { quiz_id, correct_answer, answer_choice } = v;
			obj[quiz_id] = {
				correct: correct_answer,
				choice: answer_choice,
			};
		});
		setCustomResult(obj);
	}, [result]);

	useEffect(() => {
		console.log('result after ákdjflkasjf', customResult);
	}, [customResult]);
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
					margin-left: 100%;
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
				.answer_a {
				}
				.ant-radio-disabled .ant-radio-inner:after {
					color: #1890ff;
					background-color: #1890ff;
				}
				.error {
					.choice {
						color: red;
						font-weight: 700;
					}
					.ant-radio-inner:after {
						color: red;
						background-color: red;
						transform: scale(0.5);
						opacity: 1;
						transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
					}
				}
				.ant-progress-text {
					font-weight: 600;
				}
			`}
		>
			{result ? (
				<Progress
					type="circle"
					percent={(result?.mark || 0) * 10}
					format={(percent) =>
						`${percent && parseFloat(percent.toFixed(2)) / 10}/10`
					}
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

						<Radio.Group
							onChange={(e) => onChange(e, quiz.id)}
							disabled={isSubmit}
						>
							<Radio
								className={`answer_a ${
									customResult
										? customResult[quiz.id]?.choice ===
										  customResult[quiz.id]?.correct
											? 'correct'
											: customResult[quiz.id]?.correct === AnswerChoiceEnum.A
											? 'error'
											: ''
										: ''
								} `}
								value={1}
							>
								<p className="choice">{quiz.A}</p>
							</Radio>
							<Radio
								className={`answer_b ${
									customResult
										? customResult[quiz.id]?.choice ===
										  customResult[quiz.id]?.correct
											? 'correct'
											: customResult[quiz.id]?.correct === AnswerChoiceEnum.B
											? 'error'
											: ''
										: ''
								} `}
								value={2}
							>
								<p className="choice">{quiz.B}</p>
							</Radio>
							<Radio
								className={`answer_c ${
									customResult
										? customResult[quiz.id]?.choice ===
										  customResult[quiz.id]?.correct
											? ''
											: customResult[quiz.id]?.correct === AnswerChoiceEnum.C
											? 'error'
											: ''
										: ''
								} `}
								value={3}
							>
								<p className="choice">{quiz.C}</p>
							</Radio>
							<Radio
								className={`answer_d ${
									customResult
										? customResult[quiz.id]?.choice ===
										  customResult[quiz.id]?.correct
											? ''
											: customResult[quiz.id]?.correct === AnswerChoiceEnum.D
											? 'error'
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
			{listQuiz && (
				<AppButton
					className="done-btn"
					btnTextColor={'black'}
					btnStyle={'solid'}
					btnSize={'small'}
					btnWidth={'full-w'}
					disabled={listAnswer.length < listQuiz.length}
					onClick={() => {
						setIsSubmit(true);
						onSubmit();
					}}
				>
					Nộp bài
				</AppButton>
			)}
		</div>
	);
};

export default QuizSection;
