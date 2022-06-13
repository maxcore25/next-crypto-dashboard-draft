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
      LOCAL_STORAGE_VARIABLES.CRYPTO_DASHBOARD_THEME
    );
    const hasPersistedPreference = typeof persistedPreferenceMode === 'string';

    if (hasPersistedPreference) {
      return persistedPreferenceMode;
    }

    // Check the current preference
    const preference = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof preference.matches === 'boolean';

    if (hasMediaQueryPreference) {
      return preference.matches ? 'dark' : 'light';
    }

    return 'light';
  }

  const currentColorMode = getInitialColorMode();
  const element = document.documentElement;
  element.style.setProperty('--initial-color-mode', currentColorMode);

  // If dark mode apply dark mode
  if (currentColorMode === 'dark')
    document.documentElement.setAttribute('data-theme', 'dark');
}
