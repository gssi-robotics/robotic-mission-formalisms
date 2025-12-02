
// Navbar highlight active link based on current URL
document.addEventListener('DOMContentLoaded', function () {
    // Get the current path, e.g. "/pages/rq1.html" or "/index.html"
    var currentPath = window.location.pathname;

    // Select all nav links in the navbar
    var links = document.querySelectorAll('.navbar .nav-link');

    links.forEach(function (link) {
        var href = link.getAttribute('href');

        // If href is root-relative, we can compare directly
        if (href && currentPath.endsWith(href.replace(/^\//, ''))) {
            link.classList.add('active');
        }
        // Or simpler: exact match for root-relative hrefs
        if (href === currentPath) {
            link.classList.add('active');
        }
    });
});