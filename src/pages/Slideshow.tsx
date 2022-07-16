import styled from 'styled-components/macro';
import { useCallback, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import React from 'react';
import queries from 'src/styles/breakpoints';
import Slide from 'src/components/organisms/Slide';
import SlideFooter from 'src/components/molecules/SlideFooter';
import { isPlaying, paginate, currentSlideIndex } from 'src/store/slidesSlice';
import { pageAnimation } from 'src/utils/animations';

const Wrapper = styled(motion.main)`
	padding-top: 1.5rem;
	display: flex;
	padding: 0 1.5rem;
	margin: 0 auto;
	max-width: var(--max-width);
	position: relative;

	@media ${queries.tabletUp} {
		padding-top: 2.5rem;
	}

	@media ${queries.desktopUp} {
		padding-top: 4rem;
	}
`;

const INTERVAL = 6000;

const Slideshow = (): JSX.Element => {
	const id = useRef<number | undefined>();
	const dispatch = useDispatch();
	const isSlideshowPlaying = useSelector(isPlaying);
	const currentIndex = useSelector(currentSlideIndex);

	const clearInterval = () => window.clearInterval(id.current);

	const startInterval = useCallback(() => {
		id.current = window.setInterval(() => {
			dispatch(paginate(1));
		}, INTERVAL);
	}, [dispatch]);

	useEffect(() => {
		if (isSlideshowPlaying) {
			startInterval();
		} else {
			clearInterval();
		}

		return clearInterval;
	}, [currentIndex, isSlideshowPlaying, startInterval, dispatch]);

	return (
		<Wrapper
			exit="exit"
			variants={pageAnimation}
			initial="hide"
			animate="show"
			aria-live="polite"
		>
			<Slide />
			<SlideFooter />
		</Wrapper>
	);
};

export default Slideshow;
