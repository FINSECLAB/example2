import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Vision from './pages/Vision';
import History from './pages/History';
import ResearchAreas from './pages/ResearchAreas';
import Location from './pages/Location';
import Faculty from './pages/Faculty';
import ProfessorKang from './pages/ProfessorKang';
import Students from './pages/Students';
import Papers from './pages/Papers';
import Conferences from './pages/Conferences';
import Announcements from './pages/Announcements';
import InstituteNews from './pages/InstituteNews';
import JoinUs from './pages/JoinUs';
import About from './pages/About';
import News from './pages/News';
import { setupPageAnimations } from './utils/scrollAnimation';

function App() {
  useEffect(() => {
    setupPageAnimations();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/history" element={<History />} />
            <Route path="/research-areas" element={<ResearchAreas />} />
            <Route path="/location" element={<Location />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/professor-kang" element={<ProfessorKang />} />
            <Route path="/students" element={<Students />} />
            <Route path="/papers" element={<Papers />} />
            <Route path="/conferences" element={<Conferences />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/institute-news" element={<InstituteNews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<JoinUs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
