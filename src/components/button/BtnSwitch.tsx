import React, { useState, useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AppButton from './index';
// import { navigate } from 'gatsby';
import { useLocation } from '@reach/router';
import RoutePaths from 'src/utils/routes';

const BtnSwitch: React.FC = () => {
	const [isDashBoard, setIsDashBoard] = useState(false);

	const location = useLocation();

	// useEffect(() => {
	// 	if (!location?.pathname) return;
	// 	if (location?.pathname.includes(RoutePaths.AGENT_REPORT)) {
	// 		setIsDashBoard(false);
	// 	} else {
	// 		setIsDashBoard(true);
	// 	}
	// }, [location.pathname]);

	// const handleNavigate = () => {
	// 	let url = RoutePaths.DASHBOARD;
	// 	if (isDashBoard) {
	// 		url = RoutePaths.AGENT_REPORT;
	// 	}
	// 	navigate(url);
	// };
	return (
		<div
			css={css`
				position: fixed;
				z-index: 222;
				bottom: 20px;
				left: 40px;
				.btn-switch {
					box-shadow: 0 0 0 1px #fff;
					&:hover {
						background-color: #ffa900 !important;
					}
					span {
						font-style: 14px;
					}
				}
			`}
		>
			<AppButton
				btnTextColor="white"
				btnSize="medium"
				btnStyle="solid"
				btnWidth="fix-content"
				className="btn-switch"
				type="primary"
				htmlType="submit"
				nonBordered
				// onClick={handleNavigate}
				colorHover="darkBlue"
			>
				{!isDashBoard ? 'Dashboard' : 'Agent Report'}
			</AppButton>
		</div>
	);
};

export default BtnSwitch;
