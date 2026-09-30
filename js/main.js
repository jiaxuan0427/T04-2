// Show one page and hide the others
function showPage(pageName) {

    // Find all sections with the class "page"
    const pages = document.querySelectorAll(".page");

    // Hide all pages
    pages.forEach(function(page) {
        page.style.display = "none";
    });

    // Show the selected page
    const selectedPage = document.getElementById(pageName);

    if (selectedPage) {
        selectedPage.style.display = "block";
    }

    // Update the active navigation button
    updateNavigation(pageName);
}


// Highlight the current page in the navigation
function updateNavigation(pageName) {

    // Find all navigation buttons
    const links = document.querySelectorAll(".nav-links button");

    // Remove active class from all buttons
    links.forEach(function(link) {
        link.classList.remove("active");
    });

    // Add active class to the current page button
    const activeLink = document.getElementById(pageName + "-link");

    if (activeLink) {
        activeLink.classList.add("active");
    }
}


// Navigation button events
document.getElementById("home-link").addEventListener("click", function() {
    showPage("home");
});

document.getElementById("televisions-link").addEventListener("click", function() {
    showPage("televisions");
});

document.getElementById("about-link").addEventListener("click", function() {
    showPage("about");
});


// Clicking the logo returns to Home
document.getElementById("logo").addEventListener("click", function() {
    showPage("home");
});


// Show Home page when the website first loads
showPage("home");