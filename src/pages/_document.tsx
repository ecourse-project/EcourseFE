import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const { html, head } = ctx.renderPage();
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
          <meta name="keywords" content="nextjs, ecourse" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="next-ecourse" />
          <meta property="og:title" content="Next.js ecourse app" />
          <meta property="og:description" content="Next.js + SWR codebase containing ecourse" />
          <meta property="og:url" content="https://next-ecourse.now.sh/" />
          <meta property="og:image" content="https://next-ecourse.now.sh/images/share-link.png" />
          <meta property="twitter:card" content="next-ecourse" />
          <meta property="twitter:url" content="https://next-ecourse.now.sh/" />
          <meta property="twitter:title" content="Next.js ecourse app" />
          <meta property="twitter:description" content="Next.js + SWR codebase containing ecourse examples" />
          <meta property="twitter:image" content="https://machimban.com/images/talk-link.jpg" />
          <meta name="msapplication-TileColor" content="#000" />
          <meta name="msapplication-TileImage" content="/images/ms-icon-144x144.png" />
          <meta name="theme-color" content="#000" />

          {/* <link rel="manifest" href="/manifest.json" /> */}
          <link rel="stylesheet" href="//demo.productionready.io/main.css" />
          <link rel="stylesheet" href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
          <link
            rel="stylesheet"
            href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic&display=swap"
          />

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
