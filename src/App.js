import Header from './components/Header';
import Main from './JobList/Main';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/Global';
import theme from './theme/Colors';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
