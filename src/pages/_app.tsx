import 'react-loading-skeleton/dist/skeleton.css';
import 'src/styles/global.scss';

import Head from 'next/head';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Provider } from 'react-redux';
import { store } from 'src/lib/config/reduxStore';
import ContextProvider from 'src/lib/context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { WEB_TITLE } from 'src/lib/utils/constant';

const queryClient = new QueryClient();

const CreativeTeaching = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{WEB_TITLE}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
    </Head>
    <Provider store={store}>
      <ContextProvider>
        <SkeletonTheme baseColor="#777777">
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </SkeletonTheme>
      </ContextProvider>
    </Provider>
  </>
);

export default CreativeTeaching;
