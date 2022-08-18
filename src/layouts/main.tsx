import { css, useTheme } from '@emotion/react';
import React from 'react';
interface Props {
	children: React.ReactNode;
}
const Main: React.FC<Props> = ({ children }) => {
	const theme = useTheme();
	return (
		<main
			className="app-main"
			css={css`
				display: flex;
				justify-content: center;
				align-items: flex-start;
				background-color: #e7edf3;
				.main-container {
					display: flex;
					flex-direction: column;
					min-height: calc(100% - ${theme.layout.headerHeight}px);
					width: 100%;
					color: ${theme.text.blackColor};
				}
			`}
		>
			<div className="main-container">{children}</div>
		</main>
	);
};

export default Main;
