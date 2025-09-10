import React, { useLayoutEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import Home from './pages/Home'
import WhoWeAre from './pages/WhoWeAre'
import Contact from './pages/Contact'

const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

  return <>{children}</>
}

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
          </Routes>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  )
}

export default App
