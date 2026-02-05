import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "@/pages/HomePage"
import { InvestorPage } from "@/pages/InvestorPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/investor" element={<InvestorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
