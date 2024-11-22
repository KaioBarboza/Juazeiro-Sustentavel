document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.2 }
    );

    animatedElements.forEach((element) => {
        observer.observe(element);
    });
});

function irParaBoasPraticas() {
    window.location.href = "boaspraticas.html"; // Substitua pelo caminho real da página, se necessário
}

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    let currentIndex = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove("active", "previous", "next");

            if (index === currentIndex) {
                slide.classList.add("active");
            } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
                slide.classList.add("previous");
            } else if (index === (currentIndex + 1) % slides.length) {
                slide.classList.add("next");
            }
        });
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlides();
    }

    prevButton.addEventListener("click", showPrevSlide);
    nextButton.addEventListener("click", showNextSlide);

    // Inicializa o slider
    updateSlides();
});
