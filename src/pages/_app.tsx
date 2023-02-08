import 'antd/dist/reset.css';

import Head from 'next/head';
import React from 'react';
import Layout from 'src/components/common/Layout';
import ContextProvider from 'src/lib/context';
import { Provider } from 'react-redux';
import { store } from 'src/lib/config/reduxStore';
// import 'antd/dist/antd.css';
import 'src/styles/global.scss';
import Logo from 'public/images/ecourseLogo.png';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>E-Course</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
    </Head>
    <Provider store={store}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </Provider>
  </>
);

export default MyApp;
