window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  var scrollToTopButton = document.getElementById("scrollToTopButton");
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start' // scroll to top of the target element
        });

        // Adjust scroll position to account for the height of the nav bar
        window.scrollBy(0, -60); // replace 60 with the height of your nav bar
    });
});