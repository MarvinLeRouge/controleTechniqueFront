import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import './assets/css/reset.css'
import './assets/css/App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import ClientForm from "./pages/ClientForm"
import LegalNotice from "./pages/LegalNotice"
import Sitemap from "./pages/Sitemap"
import Cookies from "./pages/Cookies"
import Page404 from "./pages/Page404"

function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
        <div className="app_wrapper">
            <Header />
            <main className="main_content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/rdv/:rdvDate/:rdvHour" element={<ClientForm />} />
                        <Route path="/mentions-legales" element={<LegalNotice />} />
                        <Route path="/cookies" element={<Cookies />} />
                        <Route path="/sitemap" element={<Sitemap />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
            </main>
            <Footer />
        </div>
        </BrowserRouter>
    )
}

export default App
