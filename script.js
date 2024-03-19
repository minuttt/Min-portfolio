document.querySelector('coolbtn').addEventListener('click', () => {
    window.scrollBy({
        top: 600,
        behavior: 'smooth'
    });
});


        document.addEventListener('DOMContentLoaded', function() {
            // Get the section element to scroll to
            var whoAmISection = document.querySelector('.features'); // Selecting the section with the class "features"

            // Add click event listener to the navbut button
            var navbutButtons = document.querySelectorAll('.navbut'); // Selecting all elements with the class "navbut"
            navbutButtons.forEach(function(button) {
                button.addEventListener('click', function() {
                    // Scroll to the top of the whoAmISection
                    whoAmISection.scrollIntoView({ behavior: 'smooth' });
                });
            });
        });
