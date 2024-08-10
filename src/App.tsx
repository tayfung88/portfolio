import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';


function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Router>
          <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
               </Routes>
            </main>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App
