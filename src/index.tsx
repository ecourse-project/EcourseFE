import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';

// import { ThemeProvider } from '@emotion/react';
import { store } from './apps/storeRedux';
import 'src/styles/global.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);
/** @jsxImportSource @emotion/react */
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<ThemeProvider theme={darkTheme}>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</Provider>
);
