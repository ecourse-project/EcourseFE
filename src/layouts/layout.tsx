import { css, useTheme } from '@emotion/react';
import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
// import { ToastContainerCustom } from 'src/alert/NotificationAlert';
// import CookiesConsent from 'src/components/cookie-consent';
import { LoadingPage } from 'src/components/loading/loadingBase';
// import { RootState } from 'src/reducers/model';
import Footer from './footer';
import Header from './header';
import Main from './main';
interface LayoutProps {
	isNonFooter?: boolean;
	isNonHeader?: boolean;
	className?: string;
	children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
	const { children, isNonFooter, isNonHeader, className } = props;
	// const isLoading = useSelector((state: RootState) => state.app.loading);

	const theme = useTheme();
	const isBrowser = typeof window !== 'undefined';

	// const iLoading = !!isLoading;
	return (
		<div
			className={className}
			css={css`
				width: 100%;
				height: 100%;
			`}
		>
			{/* {iLoading && <LoadingPage isLoading={!!isLoading} />} */}
			{/* <ToastContainerCustom />
			{isBrowser && (
				<>
					<CookiesConsent />
				</>
			)} */}
			{!isNonHeader ? <Header /> : null}
			<Main>{children}</Main>
			{/* {!isNonFooter ? <Footer simple={undefined} hideAuth={undefined} /> : null} */}
		</div>
	);
};

export default Layout;
