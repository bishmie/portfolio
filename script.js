document.addEventListener('DOMContentLoaded', function () {
    const aboutImg = document.querySelector('.aboutimg');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutImg.classList.add('animate-in');
            }
        });
    }, { threshold: 0.2 }); // Adjust threshold for when the animation triggers

    observer.observe(aboutImg);
});


document.addEventListener("scroll", () => {
    const shapes = document.querySelectorAll('.shape');
    const scrollY = window.scrollY;

    // Move shapes down as you scroll
    shapes.forEach(shape => {
        shape.style.transform = `translateY(${scrollY * 0.3}px)`; // Adjust the factor for speed
    });


    // Select all skill cards
    const skills = document.querySelectorAll('.skill');

    // Function to check if the element is in view
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add 'visible' class when the element is in view
    function checkVisibility() {
        skills.forEach(skill => {
            if (isInViewport(skill)) {
                skill.classList.add('visible');
            }
        });
    }

    // Listen for scroll events
    window.addEventListener('scroll', checkVisibility);

    // Check visibility on page load
    document.addEventListener('DOMContentLoaded', checkVisibility);




});

function showContent(section) {
    document.getElementById('personal').style.display = section === 'personal' ? 'block' : 'none';
    document.getElementById('education').style.display = section === 'education' ? 'block' : 'none';

    // Update active class for underline
    document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));
    document.querySelector(`.tab-link[onclick="showContent('${section}')"]`).classList.add('active');

}



