import GlobalStyles from 'GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import LandingPage from 'Page/LandingPage/LandingPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
