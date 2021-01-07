const sections = document.querySelectorAll('.js-scroll');
const animationWindow = window.innerHeight * 0.7;

function animaScroll() {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - animationWindow;
        if(sectionTop < 0) {
            section.classList.add('ativo');
        }
    })
}

animaScroll();

window.addEventListener('scroll', animaScroll);