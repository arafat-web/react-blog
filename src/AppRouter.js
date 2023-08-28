import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
import Navbars from './components/Navbars';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogCard from './components/BlogCard';
import Hero from './components/Hero';

function AppRouter() {
    return (
        <Router>
            <div className="App">
                {/* <Header /> */}
                <Navbars />
                <main>
                    <Routes>
                        <Route path="/" exact element={<HomePage/>} />
                        <Route path="/about" element={<AboutPage/>} />
                        <Route path="/contact" element={<ContactPage/>} />
                    </Routes>
                </main>
                <BlogCard />
                <Footer />
            </div>
        </Router>
    );
}

export default AppRouter;
