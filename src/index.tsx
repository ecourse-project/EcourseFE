import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './apps/store';
import './index.css';
import 'antd/dist/antd.css';
import { AuthProvider } from './features/login/loginContext';
import { ThemeProvider } from '@emotion/react';
import appTheme from 'src/styles/theme';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<AuthProvider>
					<ThemeProvider theme={appTheme}>
						<App />
					</ThemeProvider>
				</AuthProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
