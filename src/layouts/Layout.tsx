import { ReactNode } from "react"
import Header from "../components/Header"
import { useCustomTheme } from "../context/themeContext";

import '../styles/layout.css'
import SideBar from "../components/SideBar";

const Layout = ({children}: {children: ReactNode}) => {

  const theme = useCustomTheme();

  return (
    <div
      className={` fullScreen ${ theme.currentTheme === 'light' ? 'fullScreen_light' : 'fullScreen_dark' }`}
    >
      <Header />
      <div className="flex vh-90">
        <div className="row gap-4  w-full">
          <SideBar />
          <div className="cstm-col-9">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;