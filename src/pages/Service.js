import React from 'react';

function Services() {
    const services = [
        { id: 1, title: "AI Solutions", description: "Transform your business with AI-driven insights." },
        { id: 2, title: "Digital Marketing", description: "Increase your brand visibility and drive targeted traffic." },
        { id: 3, title: "Video Production", description: "Produce compelling visual content to tell your brand’s story." },
    ];

    return (
        <div>
            <h2>Our Services</h2>
            <div className="service-list">
                {services.map(service => (
                    <div key={service.id} className="service">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
