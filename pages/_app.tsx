import Script from 'next/script';
import '../styles/globals.css';

import { styletron } from 'styletron';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="ze-snippet"
        src="https://static.zdassets.com/ekr/snippet.js?key=e10dd846-951e-43d6-a09c-94373bde33ca"
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-07N83PFBK9"
      />
      <Script
        id="Ganal"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-07N83PFBK9");`,
        }}
      />
      <StyletronProvider value={styletron}>
        <BaseProvider theme={LightTheme}>
          <Component {...pageProps} />
        </BaseProvider>
      </StyletronProvider>
    </>
  );
}

export default MyApp;
