import { GlobalStyles } from 'src/styles/GlobalStyles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import Gallery from 'src/pages/Gallery';
import Slideshow from 'src/pages/Slideshow';
import Header from 'src/components/organisms/Header/';
import LightBox from 'src/components/organisms/Lightbox';

function Slide(): JSX.Element {
	return (
		<div>
			<GlobalStyles />
			<Header />
			<LightBox />
			{/* <AnimatePresence exitBeforeEnter> */}

			<Route path="/home" element={Gallery} />
			<Route path="home/slideshow" element={Slideshow} />

			{/* </AnimatePresence> */}
		</div>
	);
}

export default Slide;
