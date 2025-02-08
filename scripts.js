document.addEventListener('DOMContentLoaded', function() {
    const timelineData = [
        {
            year: "March 2024 – Present",
            title: "Technology Integration Consultant",
            company: "KPMG Australia",
            description: "Working on system integration projects between South Australia Police (SAPOL) and National Criminal Intelligence System (NCIS).",
            responsibilities: [
                "Design, develop, and implement solutions to integrate disparate systems",
                "Configure and manage Oracle Middleware Software",
                "Analyze and identify opportunities for automation and process improvement",
                "Currently training in Microsoft Azure cloud platforms"
            ],
            emoji: "💻"
        },
        {
            year: "June 2021 – November 2022",
            title: "Research Assistant",
            company: "Liquim® Ltd",
            description: "Worked for a start-up R&D biotech company developing plant-based nasal and oral barrier solutions against respiratory viruses including SARS-CoV 2.",
            responsibilities: [
                "Conducted regulatory policy analysis and interpretation",
                "Performed data analysis and research on product ingredients",
                "Managed stakeholder presentations and documentation",
                "Led procurement activities and maintained laboratory standards"
            ],
            emoji: "🧬"
        },
        {
            year: "September 2020 – June 2021",
            title: "Laboratory Assistant",
            company: "Western Diagnostic Pathology",
            description: "Worked in the Microbiology department processing clinical samples.",
            responsibilities: [
                "Conducted sample preparation and specimen processing",
                "Maintained accurate records of tests and procedures",
                "Managed equipment maintenance and inventory",
                "Ensured safety compliance and protocol adherence"
            ],
            emoji: "🔬"
        },
        {
            year: "October 2017 – August 2018",
            title: "Technical Assistant",
            company: "PathWest Laboratory Medicine",
            description: "Worked in the Environmental Microbiology Unit processing water samples.",
            responsibilities: [
                "Conducted various laboratory tests for environmental analysis",
                "Operated and maintained specialized laboratory equipment",
                "Ensured compliance with microbiological standards",
                "Collaborated in a multidisciplinary laboratory setting"
            ],
            emoji: "🧪"
        }
    ];

    const timelineContainer = document.querySelector('.timeline-container');

    timelineData.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-header">
                <span class="timeline-emoji">${item.emoji}</span>
                <div>
                    <h3 class="timeline-title">${item.title}</h3>
                    <p class="timeline-company">${item.company}</p>
                    <p class="timeline-year">${item.year}</p>
                </div>
            </div>
            <div class="timeline-content">
                <p>${item.description}</p>
                <ul class="timeline-responsibilities">
                    ${item.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                </ul>
            </div>
        `;

        timelineItem.addEventListener('click', function() {
            this.classList.toggle('active');
        });

        timelineContainer.appendChild(timelineItem);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    
    // Scroll handler
    window.addEventListener('scroll', () => {
        // Add/remove scrolled class
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active section
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });

        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
});

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('publications-modal');
    const btn = document.querySelector('.view-publications');
    const span = document.querySelector('.close-modal');

    btn.onclick = function() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
});

// Add mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelector('.hamburger').classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        document.querySelector('.nav-links').classList.remove('active');
        document.querySelector('.hamburger').classList.remove('active');
    }
});

// Add scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.cyber-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});