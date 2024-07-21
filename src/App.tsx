import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Router>
          <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </main>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App
