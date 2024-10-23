import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <header>
                <h1>Empowering Creativity and Innovation Through Learning and Solutions</h1>
                <p>Welcome to Codex Creative Learners, where creativity meets innovation. We offer a comprehensive platform for learners and professionals.</p>
                <Link to="/courses" className="btn btn-primary">Explore Our Courses</Link>
                <Link to="/services" className="btn btn-secondary">Our Services</Link>
            </header>
        </div>
    );
}

export default Home;
