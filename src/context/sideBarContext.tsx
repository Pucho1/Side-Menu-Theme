import { createContext, useContext, useState } from "react";

export interface ShowBarProviderProps {
  showBar: boolean;
  children: any;
}

const sideBarContext = createContext<any>(false);

export const useShowBar = () => useContext(sideBarContext);

export const  ShowBarProvider = ({showBar, children}: ShowBarProviderProps ) =>{

	const [isCollapsed, setIsCollapsed] = useState(showBar);
	const toggleSidebar = () => setIsCollapsed((prev) => !prev);
			
	return <sideBarContext.Provider value={{ isCollapsed, toggleSidebar}}>
					{children}
				</sideBarContext.Provider>
};