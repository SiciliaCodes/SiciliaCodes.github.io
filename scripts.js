document.addEventListener('DOMContentLoaded', function() {
    // Common Elements
    const navbar = document.querySelector('.cyber-nav');
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    const hamburger = document.querySelector('.hamburger');
    
    // Timeline Generation (Keep your existing timeline code)
    const timelineData = [...]; // Keep your original timeline data
    const timelineContainer = document.querySelector('.timeline-container');
    timelineData.forEach(item => {
        // Keep your existing timeline item creation logic
    });

    // Mobile Menu Handling
    function handleMenuToggle() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    }

    function closeMobileMenu() {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }

    menuToggle.addEventListener('click', handleMenuToggle);

    // Smooth Scroll and Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Close mobile menu after navigation
                if (window.innerWidth <= 768) closeMobileMenu();
                
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Handlers
    function handleScroll() {
        // Navbar Scroll Effect
        navbar.classList.toggle('scrolled', window.scrollY > 50);

        // Section Active State
        const scrollPosition = window.scrollY + 100;
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add('active');
            } else {
                document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.remove('active');
            }
        });
    }

    // Modal Handling (Keep your existing modal code)
    const modal = document.getElementById('publications-modal');
    const modalBtn = document.querySelector('.view-publications');
    const closeBtn = document.querySelector('.close-modal');

    modalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Event Listeners
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container')) closeMobileMenu();
    });

    // Initialize scroll handling
    handleScroll();
});