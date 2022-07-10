// Based on your final design
const layout = {
	minHeight: 940,
	maxWidth: 1440,
	maxWidthSM: 1200,
	footerHeight: 70,
	headerHeight: 100,
	marginContainer: 24,
	layoutId: 'app-root',
};
const media = {
	XXLdesktops: 1440,
	XLdesktops: 1360,
	desktops: 991,
	tablets: 767,
	phones: 479,
};

export enum color {
	BLACK = '#000000',
	BLACK_1 = '#191919',
	BLACK_2 = '#282828',
	BLACK_3 = '#676767',
	BLACK_4 = '#999999',
	GRAY = '#7B7B7B',
	GRAY_1 = '#C4C4C4',
	GRAY_2 = '#CECECE',
	WHITE = '#FFFFFF',
	WHITE_1 = '#F5F5F5',
	GREEN = '#3BE880',
	DARKBLUE = '#051d29',
	ORANGE = '#FFA535',
}

const text = {
	blackColor: '#000',
	whiteColor: '#fff',
	grayColor: '#cccccc',
	errorColor: '#ff0000',
	blueColor: '#1c87c6',
};

const backgroundColor = {
	button: '#1c87c6',
};

const theme = {
	layout,
	text,
	backgroundColor,
	media,
	color,
};

export type AppTheme = typeof theme;

export default theme;
