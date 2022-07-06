// METHOD:1

import { createContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darktheme, setDarktheme] = useState(true);

  function toggleTheme() {
    setDarktheme((p) => !p);
  }

  return (
    <ThemeContext.Provider value={{ darktheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
