function highlightNav() {
    // Get all the navigation links
    const navLinks = document.querySelectorAll('.nav a');
    
    // Add event listener to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add active class to the clicked link
            this.classList.add('active');
        });
    });

    // Check which section is in view and highlight corresponding nav link
    window.addEventListener('scroll', function() {
        // Get the current scroll position
        let scrollPosition = window.scrollY;

        // Iterate over each section to check if it's in view
        document.querySelectorAll('.section').forEach(section => {
            let sectionTop = section.offsetTop - 100; // Adjusted offset for better highlighting

            // If the current scroll position is within the section
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + section.offsetHeight) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Get the corresponding nav link based on section id
                let navLink = document.querySelector(`.nav a[href="#${section.id}"]`);
                
                // Add active class to the corresponding nav link
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    });
}