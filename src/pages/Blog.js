import React from 'react';

function Blog() {
    const blogPosts = [
        { id: 1, title: "How AI Is Revolutionizing Business Today", content: "Discover the impact of AI on modern business." },
        { id: 2, title: "Top 10 Digital Marketing Tips for 2024", content: "Boost your digital marketing efforts with these tips." },
        { id: 3, title: "Essential Web Development Skills in 2024", content: "Stay up-to-date with the latest web development trends." },
    ];

    return (
        <div>
            <h2>Insights and Tips from Industry Experts</h2>
            <div className="blog-list">
                {blogPosts.map(post => (
                    <div key={post.id} className="blog-post">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
