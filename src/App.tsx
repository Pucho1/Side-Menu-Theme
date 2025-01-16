import './App.css'

import Content from './components/Content';
import { ThemeProvider } from './context/themeContext';
import Layout from './layouts/Layout';

// import './styles/header.css'
// import DashboardLayoutCustomThemeSwitcher from './components/Test';




function App() {

  const defaultTheme = () => {
   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    } else {
      return "no-preference";
    };
  };

  return (
      <ThemeProvider theme={defaultTheme()}>
        <Layout>
          <Content />
          {/* <DashboardLayoutCustomThemeSwitcher /> */}
        </Layout>
      </ThemeProvider>
  );
};

export default App;

