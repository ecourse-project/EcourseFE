import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getIsPlaying, toggleIsPlaying } from 'src/store/slidesSlice';
import { Navigation, StyledHeader, SlideshowButton } from './Header.styles';
import Logo from 'src/components/atoms/Logo';
import { pageAnimation } from 'src/utils/animations';
import React from 'react';
const Header = (): JSX.Element => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isSlideshowPlaying = useSelector(getIsPlaying);

	const handleClick = () => {
		navigate('/slideshow');
		dispatch(toggleIsPlaying());
	};

	return (
		<StyledHeader
			exit="exit"
			variants={pageAnimation}
			initial="hide"
			animate="show"
		>
			<Navigation>
				<Logo />
				<SlideshowButton onClick={handleClick}>
					{isSlideshowPlaying ? 'Stop Slideshow' : 'Start Slideshow'}
				</SlideshowButton>
			</Navigation>
		</StyledHeader>
	);
};

export default Header;
