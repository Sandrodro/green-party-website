import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="/fonts/FiraGO-Regular.woff2"
            rel="preload"
            as="font"
            crossOrigin=""
          />
          <link
            href="/fonts/FiraGO-Bold.woff2"
            rel="preload"
            as="font"
            crossOrigin=""
          />
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
