/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Course, Document } from 'src/models/backend_modal';
import { LearningItem } from './learning-item';
interface MyCourseUIProps {
	courses: Course[];
	docs: Document[];
}

const MyCourseUI: React.FC<MyCourseUIProps> = (props) => {
	const { courses, docs } = props;

	return (
		<div
			css={css`
				width: fit-content;
				margin: auto;
				.list_item {
					display: flex;
					margin: auto;
					display: flex;
					flex-wrap: wrap;
					gap: 1.6rem 0;
					margin-left: -0.8rem;
					margin-right: -0.8rem;
					gap: 1.6rem 2rem;
					padding: 10px;
				}
			`}
		>
			<div className="course_list list_item">
				{courses &&
					courses.map((v, i) => {
						return <LearningItem course={v} key={i} />;
					})}
			</div>
			<div className="doc_list list_item">
				{docs &&
					docs.map((v, i) => {
						return <LearningItem doc={v} key={i} />;
					})}
			</div>
		</div>
	);
};

export default MyCourseUI;
