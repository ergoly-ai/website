import { createContext, useContext } from "react"

type ThemeProviderProps = {
  children: React.ReactNode
}

type ThemeProviderState = {
  theme: "dark"
}

const ThemeProviderContext = createContext<ThemeProviderState>({ theme: "dark" })

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ThemeProviderContext.Provider value={{ theme: "dark" }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")
  return context
}
