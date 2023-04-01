import Head from 'next/head';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Provider } from 'react-redux';
import { store } from 'src/lib/config/reduxStore';
import ContextProvider from 'src/lib/context';
import 'src/styles/global.scss';

const CreativeTeaching = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Createtive Teaching</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
    </Head>
    <Provider store={store}>
      <ContextProvider>
        <SkeletonTheme baseColor="#777777">
          <Component {...pageProps} />
        </SkeletonTheme>
      </ContextProvider>
    </Provider>
  </>
);

export default CreativeTeaching;
