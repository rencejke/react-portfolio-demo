import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { StoreProvider } from "./store/StoreContext"
import Portfolio from "./components/pages/developer/dashboard/portfolio/Portfolio"
import Home from "./components/pages/developer/ui/Home"
import Banner from "./components/pages/developer/dashboard/banner/Banner"
import About from "./components/pages/developer/dashboard/about/About"
import Exp from "./components/pages/developer/dashboard/exp/Exp"

function App() {
  const queryClient = new QueryClient

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <StoreProvider>
      <Router>
        <Routes>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/banner" element={<Banner/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/experience" element={<Exp/>}/>

        {/* // */}
        <Route path="/home" element={<Home/>}/>

        </Routes>
      </Router>
      </StoreProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
