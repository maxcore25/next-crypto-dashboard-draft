import { Html, Head, Main, NextScript } from 'next/document';
import { LOCAL_STORAGE_VARIABLES } from '../app/constants';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitializerScript,
          }}></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// This function needs to be a String
const themeInitializerScript = `(function() {
	${setInitialColorMode.toString()}
	setInitialColorMode();
})()
`;

function setInitialColorMode() {
  // Check initial color preference
  function getInitialColorMode() {
    const persistedPreferenceMode = window.localStorage.getItem(
      'crypto-dashboard-theme'
    );

    if (persistedPreferenceMode) {
      console.log('persistedPreferenceMode: ', persistedPreferenceMode);
      return persistedPreferenceMode;
    }

    // Check the current preference
    const preference = window.matchMedia('(prefers-color-scheme: dark)');
    console.log('preference', preference);
    return preference.matches ? 'dark' : 'light';
  }

  if (getInitialColorMode() === 'dark')
    document.documentElement.setAttribute('data-theme', 'dark');
}
