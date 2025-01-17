import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ThemeProvider } from './context/themeContext';

import Layout from './layouts/Layout';
import './App.css'
import { ShowBarProvider } from './context/sideBarContext';

const Home = lazy(() => import('./Pages/Home'));
const Dashboard = lazy(() => import('./Pages/Dashboard'));
const Products = lazy(() => import('./Pages/Products'));

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
        <ShowBarProvider showBar={true}>
          <Layout>
            <Suspense fallback={<div>Cargando página...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dasboard" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
              </Routes>
            </Suspense>
          </Layout>
        </ShowBarProvider>
      </ThemeProvider>

      //     {/* <DashboardLayoutCustomThemeSwitcher /> */}
  );
};

export default App;

