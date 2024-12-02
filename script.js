document.addEventListener("DOMContentLoaded", () => {
    // Add fade-in class when the page loads
    document.body.classList.add("fade-in");

    // Handle fade-out on link clicks
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Check if the link is navigating to another page
            if (link.href && link.href !== window.location.href) {
                e.preventDefault(); // Prevent immediate navigation
                document.body.classList.remove("fade-in");
                document.body.classList.add("fade-out");

                // Delay the navigation until the fade-out completes
                setTimeout(() => {
                    window.location.href = link.href;
                }, 500); // Match the duration of the CSS transition
            }
        });
    });
});

