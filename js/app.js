// Open the side navigation
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

// Close the side navigation
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Scroll to top function
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Show button when scrolling down
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}