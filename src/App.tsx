import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-[#0f0f0f]">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
