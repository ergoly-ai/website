import { ThemeProvider } from "@/components/theme-provider"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-dvh flex items-center justify-center">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          Soon
        </h1>
      </div>
    </ThemeProvider>
  )
}

export default App
