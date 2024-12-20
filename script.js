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



document.querySelector('#assignment1').addEventListener('click', function() {
window.location.href = 'Assignment/Assignment_01/Assignment.html';
});

document.querySelector('#assignment2').addEventListener('click', function() {
    window.location.href = 'Assignment/Assignment_02/Assignment.html';
});

document.querySelector('#assignment3').addEventListener('click', function() {
    window.location.href = 'Assignment/Assignment_03/Assignment.html';
});
document.querySelector('#assignment4').addEventListener('click', function() {
    window.location.href = 'Assignment/Assignment_04/Assignment.html';

});document.querySelector('#assignment5').addEventListener('click', function() {
    window.location.href = 'Assignment/Assignment_05/Assignment.html';
});
document.querySelector('#assignment6').addEventListener('click', function() {
    window.location.href = 'Assignment/Assignment_06/Assignment.html';
});
document.querySelector('#assignment8').addEventListener('click', function() {
    window.location.href = 'Assignment/Assignment_08/Assignment.html';
});
document.querySelector('#assignment9').addEventListener('click', function() {
    window.location.href = 'Assignment/Assignment_09/Assignment.html';
});
document.querySelector('#assignment10').addEventListener('click', function() {
    window.location.href = 'Assignment/Assignment_10/Assignment.html';
});



function showContentNav(tab) {
    if (tab === 'about-me') {
        document.querySelector('.about-me').style.display = 'block';
//        document.querySelector('.education').style.display = 'none';
    }  if (tab === 'home') {
        document.querySelector('.home').style.display = 'block';

    }
    if(tab=== 'services'){
        document.querySelector('.services').style.display = 'block';
    }
    if(tab=== 'contact'){
        document.querySelector('.contact').style.display = 'block';
    }

}


