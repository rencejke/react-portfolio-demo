import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { StoreProvider } from "./store/StoreContext"
import Portfolio from "./components/pages/developer/dashboard/portfolio/Portfolio"
import Home from "./components/pages/developer/ui/Home"
import Banner from "./components/pages/developer/dashboard/banner/Banner"
import About from "./components/pages/developer/dashboard/about/About"
import Exp from "./components/pages/developer/dashboard/exp/Exp"
import Welcome from "./components/pages/developer/dashboard/welcome/Welcome"
import Projects from "./components/pages/developer/dashboard/projects/Projects"
import Contact from "./components/pages/developer/dashboard/contact/Contact"
import Services from "./components/pages/developer/dashboard/services/Services"

function App() {
  const queryClient = new QueryClient

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <StoreProvider>
      <Router>
        <Routes>
        <Route path="/dashboard" element={<Welcome/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/banner" element={<Banner/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/experience" element={<Exp/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>

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
