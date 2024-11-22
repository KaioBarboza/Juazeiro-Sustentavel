// Menu Mobile Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    let isMenuOpen = false;

    // Função para toggle do menu
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        navLinks.classList.toggle('active');
        
        // Animação do botão hamburger
        const spans = mobileMenuBtn.querySelectorAll('span');
        if (isMenuOpen) {
            spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }

    mobileMenuBtn.addEventListener('click', toggleMenu);

    // Fechar menu ao clicar em um link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) toggleMenu();
        });
    });

    // Fechar menu ao redimensionar a janela para desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && isMenuOpen) {
            toggleMenu();
        }
    });
});

// Scroll suave para as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animação de entrada dos tópicos
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar todos os tópicos para animação
document.querySelectorAll('.topic').forEach(topic => {
    topic.style.opacity = '0';
    topic.style.transform = 'translateY(20px)';
    observer.observe(topic);
});

// Destacar seção atual durante o scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Adicionar indicador de carregamento da página
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Detectar modo escuro do sistema
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
function handleDarkMode(e) {
    if (e.matches) {
        document.documentElement.classList.add('dark-mode');
    } else {
        document.documentElement.classList.remove('dark-mode');
    }
}
darkModeMediaQuery.addListener(handleDarkMode);
handleDarkMode(darkModeMediaQuery);