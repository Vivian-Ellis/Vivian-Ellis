    // Select all links with hashes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Add click event listener to each link
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            // Smooth scroll to the clicked anchor
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // Use smooth scrolling behavior
            });
        });
    });