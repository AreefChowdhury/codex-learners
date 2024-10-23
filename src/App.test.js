import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Courses from './pages/Courses';  // Import the Courses component
import Blog from './pages/Blog';  // Import the Blog component
import AboutUs from './pages/AboutUs';  // Import the About Us component
import Services from './pages/Services';  // Import the Services component
import Navbar from './components/Navbar';  // Import the Navbar component
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
function App() {
  return (
    <div>
      <Navbar /> {/* Navbar visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />           {/* Home page route */}
        <Route path="/courses" element={<Courses />} /> {/* Courses page route */}
        <Route path="/blog" element={<Blog />} />       {/* Blog page route */}
        <Route path="/about-us" element={<AboutUs />} />{/* About Us page route */}
        <Route path="/services" element={<Services />} />{/* Services page route */}
      </Routes>
    </div>
  );
}

export default App;


