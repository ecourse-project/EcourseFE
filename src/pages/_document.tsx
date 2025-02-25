import Document, { Head, Html, Main, NextScript } from 'next/document';
import { WEB_DESCRIPTION, WEB_TITLE, WEB_URL } from 'src/lib/utils/constant';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const { head } = ctx.renderPage();
    return { head, ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="robots" content="index, follow" />
          <meta key="googlebot" name="googlebot" content="index,follow" />
          <meta name="google" content="notranslate" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="keywords" content="creative, teachingchem,creativeteaching,teaching,chemistry, ecourse" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content={WEB_TITLE} />
          <meta property="og:title" content={WEB_TITLE} />
          <meta property="og:description" content={WEB_DESCRIPTION} />
          <meta property="og:url" content={WEB_URL} />
          <meta property="og:image" content="/logo.png" />
          <meta name="msapplication-TileColor" content="#000" />
          <meta name="msapplication-TileImage" content="/images/ms-icon-144x144.png" />
          <meta name="theme-color" content="#000" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="red"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
