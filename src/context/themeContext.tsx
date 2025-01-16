import { createContext, useContext, useState } from "react";

export interface ThemeProviderProps {
  theme: string;
  children: any;
}

  //Se crea el contexto
  const newThemeContext = createContext<any>('');

  // CustomHook para obtener las propiedades del contexto
  export const useCustomTheme = () => useContext(newThemeContext);

  //Creo el componente que proveera el contexto a todos sus hijos
  export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {

    const [currentTheme, setCurrentTheme] = useState(theme);
    
    return <newThemeContext.Provider value={{ currentTheme, setCurrentTheme}}>
      {children}
    </newThemeContext.Provider>
  };
