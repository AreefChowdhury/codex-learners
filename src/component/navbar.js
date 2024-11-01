import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router

document.addEventListener("DOMContentLoaded", function () {
    // Define the navigation items
    const navItems = [
        { name: "Home", href: "index.html#hero" },
        { name: "About Us", href: "about.html" },
        { name: "Services", href: "services.html" },
        { name: "Portfolio", href: "portfolio.html" },
        { name: "Blog", href: "blog.html" },
        { name: "Pricing Plans", href: "pricing.html" },
        { name: "Contact Us", href: "contact.html" },
        { name: "FAQ", href: "faq.html" },
        { name: "Testimonials", href: "testimonials.html" },
        { name: "Terms and Conditions", href: "terms.html" },
        { name: "Careers", href: "careers.html" }
    ];

    // Create the navbar container
    const navbar = document.createElement("nav");
    navbar.className = "navbar navbar-expand-lg navbar-dark bg-dark";

    // Create the container div for navbar items
    const containerDiv = document.createElement("div");
    containerDiv.className = "container";

    // Add brand/logo to the navbar
    const brand = document.createElement("a");
    brand.className = "navbar-brand";
    brand.href = "index.html";
    brand.innerHTML = `<img src="images/logo.png" alt="Codex Creator's Club Logo" class="logo">`;
    containerDiv.appendChild(brand);

    // Navbar toggler for mobile
    const toggler = document.createElement("button");
    toggler.className = "navbar-toggler";
    toggler.type = "button";
    toggler.dataset.toggle = "collapse";
    toggler.dataset.target = "#navbarNav";
    toggler.setAttribute("aria-controls", "navbarNav");
    toggler.setAttribute("aria-expanded", "false");
    toggler.setAttribute("aria-label", "Toggle navigation");
    toggler.innerHTML = `<span class="navbar-toggler-icon"></span>`;
    containerDiv.appendChild(toggler);

    // Create the collapsible navbar menu
    const collapseDiv = document.createElement("div");
    collapseDiv.className = "collapse navbar-collapse";
    collapseDiv.id = "navbarNav";

    // Create the unordered list to hold nav links
    const ul = document.createElement("ul");
    ul.className = "navbar-nav ml-auto";

    // Generate the nav items
    navItems.forEach(item => {
        const li = document.createElement("li");
        li.className = "nav-item";
        
        const a = document.createElement("a");
        a.className = "nav-link";
        a.href = item.href;
        a.textContent = item.name;

        li.appendChild(a);
        ul.appendChild(li);
    });

    // Append the list to the collapsible div
    collapseDiv.appendChild(ul);
    containerDiv.appendChild(collapseDiv);

    // Append the complete navbar to the body or a specific container
    navbar.appendChild(containerDiv);
    document.body.insertBefore(navbar, document.body.firstChild);
});
