import { GlobalStyles } from 'src/styles/GlobalStyles';
import { Routes, Route } from 'react-router-dom';
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
			<Routes>
				<Route path="/home" element={<Gallery />} />

				<Route path="/slideshow" element={<Slideshow />} />
			</Routes>
			{/* </AnimatePresence> */}
		</div>
	);
}

export default Slide;
