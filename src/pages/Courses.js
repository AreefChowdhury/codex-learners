import React from 'react';

function Courses() {
    const courses = [
        { id: 1, title: "Mastering AI", description: "Dive into artificial intelligence and machine learning." },
        { id: 2, title: "Content Writing", description: "Learn to craft engaging, impactful content." },
        { id: 3, title: "Web Design & Development", description: "Create modern, responsive websites." },
    ];

    return (
        <div>
            <h2>Our Courses</h2>
            <div className="course-list">
                {courses.map(course => (
                    <div key={course.id} className="course">
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;
