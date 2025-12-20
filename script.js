document.addEventListener('DOMContentLoaded', () => {
    /* ============================
       Menu Mobile Toggle
    ============================ */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const icon = menuToggle.querySelector('i');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Troca o ícone de hambúrguer para 'X'
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });


    /* ============================
       Animações de Scroll (Intersection Observer)
    ============================ */
    const observerOptions = {
        threshold: 0.2 // Dispara quando 20% do elemento está visível
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-animate');
                // Opcional: parar de observar após animar uma vez
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos com classes 'hidden-'
    const hiddenElements = document.querySelectorAll('.hidden-left, .hidden-right, .hidden-up');
    hiddenElements.forEach(el => observer.observe(el));
});