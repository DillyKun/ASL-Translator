/* 
NOTE:
THIS FILE IS FOR ALL PLATFORMS EG CLASSIFICATION, IMPORTANCE, ETC  

The follwing function is for the scroll to top button. When it goes down 1000px, the button will appear. When it goes up, the button will disappear.
*/
// ----------------- SCROLL TO TOP ----------------- //
window.addEventListener('scroll', function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollTopButton = document.querySelector('.scrolltop');

    console.log('Scroll Top:', scrollTop); // Log scroll position

    if (scrollTop > 1000) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var scrollButton = document.querySelector('.scroll');

    if (!scrollButton) {
        console.error('Scroll button not found!');
    }

    // Remove .thetop query as we are scrolling to the top of the page
    scrollButton.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Scroll button clicked'); // Log click event

        window.scrollTo({
            top: 0, // Scroll to the top of the page
            behavior: 'smooth' // Smooth scrolling
        });
    });
});
