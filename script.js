// --- FIXED: Modal Data from original file ---
const modalData = {
    "modal-1": {
        title: "Automated Oil Palm Detection",
        keywords: ["Python", "AI", "Machine Learning", "YOLO", "Automation"],
        description: `
            <h3>🌳 Automated Oil Palm Tree Detection</h3>
            <p>This Final Year Project focused on developing a highly precise and automated system for agricultural monitoring within oil palm plantations using cutting-edge AI technology.</p>
            <h4>The Challenge & Goal</h4>
            <p>The objective was to accurately identify and locate mature oil palm trees and deboling holes within plantation imagery, significantly reducing manual survey costs and errors.</p>
            <h4>The Solution</h4>
            <p>Successfully leveraged state-of-the-art YOLO deep learning models for robust object detection. The research involved comparative analysis of different YOLO architectures to achieve maximum accuracy and efficiency.</p>
            <h4>Key Focus Areas</h4>
            <ul>
                <li><strong>Technology:</strong> Deep Learning with YOLO model training and fine-tuning</li>
                <li><strong>Application:</strong> Precision agriculture and automated inventory monitoring</li>
                <li><strong>Outcome:</strong> Established benchmark for high-accuracy detection in challenging plantation environments</li>
            </ul>
        `,
        images: ["images/FullStack.jpg", "images/Poster.jpg", "images/Detection.jpg"]
    },
    "modal-2": {
        title: "Ultra Dim - Super Dimmer APK",
        keywords: ["Flutter", "Mobile Development", "Android", "UI/UX"],
        description: `
            <h3>🌙 Ultra Dim – Safer Night Driving App</h3>
            <p>Ultra Dim is a Flutter mobile application designed to solve a critical safety and comfort issue for drivers using Android-based car players.</p>
            <h4>The Challenge</h4>
            <p>During night driving, many car displays remain too bright even at the lowest system setting, causing eye strain, distraction, and reduced driving safety.</p>
            <h4>The Solution</h4>
            <p>Ultra Dim provides an "ultra-dim" solution beyond standard system limits by intelligently combining system brightness control with a transparent, low-opacity overlay for genuinely comfortable night use.</p>
            <h4>Key Technology</h4>
            <ul>
                <li><strong>Platform:</strong> Flutter (Cross-platform framework)</li>
                <li><strong>Target:</strong> Android-based Car Head Units</li>
                <li><strong>Impact:</strong> Enhanced driving safety through reduced eye strain</li>
            </ul>
        `,
        images: ["images/super_dim.png"]
    },
    "modal-3": {
        title: "Trombol Paradise Beach App",
        keywords: ["UI/UX Design", "Mobile App", "Figma", "eCommerce"],
        description: `
            <h3>🏖️ Trombol Paradise Beach App Concept</h3>
            <p>A comprehensive UI/UX concept for Paradise Beach resort in Trombol, designed to provide guests with a clean, intuitive, and engaging mobile experience.</p>
            <h4>Key Features Designed:</h4>
            <ul>
                <li><strong>Splash & Auth:</strong> Professional login/signup flow ensuring secure and accessible user accounts</li>
                <li><strong>Home Dashboard:</strong> Dynamic main page highlighting promotions and providing clear navigation</li>
                <li><strong>Service Categories:</strong> Grid-based system for easy browsing of Activities, Services, Products, and Dining</li>
                <li><strong>eCommerce:</strong> Integrated cart and profile system for booking services and purchasing products</li>
            </ul>
        `,
        images: ["images/Trombol_Main_Page.jpg", "images/Trombol_signin.jpg"]
    },
    "modal-4": {
        title: "UNIMAS AR Navigator App",
        keywords: ["Flutter", "Augmented Reality", "WebAR", "Mobile Development"],
        description: `
            <h3>🗺️ UNIMAS AR Navigator App</h3>
            <p>A fully functional augmented reality navigation solution specifically designed for exploring the UNIMAS campus with immersive, real-time guidance.</p>
            <h4>The Goal</h4>
            <p>Provide students, staff, and visitors with a dynamic and intuitive way to navigate university grounds, moving beyond static maps to offer an immersive experience.</p>
            <h4>The Solution & Technology</h4>
            <p>Built using Flutter SDK within Android Studio for high-performance, cross-platform mobile experience. Features sophisticated WebAR integration for seamless AR element rendering.</p>
            <h4>Key Features</h4>
            <ul>
                <li><strong>Platform:</strong> Flutter SDK (Android development)</li>
                <li><strong>Core Technology:</strong> Augmented Reality navigation</li>
                <li><strong>Integration:</strong> WebAR for dynamic, in-browser AR experiences</li>
                <li><strong>Application:</strong> Intuitive campus exploration and guidance</li>
            </ul>
        `,
        images: ["images/UNIMAS_AR_mainpage.jpg", "images/Unimas_AR.jpg"]
    }
};

// --- FIXED: Modal Functions from original file ---
const projectModal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalKeywords = document.getElementById('modal-keywords');
const modalDescription = document.getElementById('modal-description');
const modalImages = document.getElementById('modal-images');

function openProjectModal(data) {
    modalTitle.textContent = data.title;
    
    modalKeywords.innerHTML = '';
    data.keywords.forEach(keyword => {
        const tag = document.createElement('span');
        tag.className = 'keyword-tag';
        tag.textContent = keyword;
        modalKeywords.appendChild(tag);
    });
    
    modalDescription.innerHTML = data.description;
    
    modalImages.innerHTML = '';
    data.images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = data.title;
        modalImages.appendChild(img);
    });
    
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}


document.addEventListener("DOMContentLoaded", () => {

    // --- 1. Preloader ---
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        document.body.classList.add('loaded');
        
        preloader.addEventListener('transitionend', () => {
            preloader.style.display = 'none';
        });
    });

    // --- 2. Custom Cursor ---
    const cursorOrb = document.querySelector('.cursor-orb');
    
    document.addEventListener('mousemove', (e) => {
        if (cursorOrb) {
            cursorOrb.style.left = e.clientX + 'px';
            cursorOrb.style.top = e.clientY + 'px';
        }
    });

    // --- 3. Header Scroll Behavior ---
    let lastScroll = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        if (currentScroll > lastScroll && currentScroll > 200) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        
        lastScroll = currentScroll;
    });

    // --- 4. Intersection Observer (Fade-in on Scroll) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // --- 5. Hero Typing Animation ---
    const typingTextElement = document.querySelector(".typing-text");

    if (typingTextElement) {
        const words = typingTextElement.getAttribute('data-words').split(',');
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typingTextElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingTextElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = 150;

            if (isDeleting) {
                typeSpeed /= 2; // Faster when deleting
            }

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000; 
                isDeleting = true;
            } 
            else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length; 
                typeSpeed = 500; 
            }

            setTimeout(type, typeSpeed);
        }

        type(); 
    }

    // --- 6. FIXED: Smooth scroll for anchor links (from original) ---
    // This logic correctly ignores the modal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#contact-link') { // Key check!
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 100;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- 7. FIXED: Added Modal Event Listeners ---
    
    // Project modal listeners
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const modalId = card.getAttribute('data-modal');
            const data = modalData[modalId];
            if (data) openProjectModal(data);
        });
    });

    // Close buttons
    document.querySelectorAll('.close-button').forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal(btn.closest('.modal'));
        });
    });

    // Close on overlay click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal);
        });
    });

    // Contact modal listeners
    const contactLink = document.getElementById('contact-link');
    const contactModal = document.getElementById('contact-modal');

    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Escape key to close modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                closeModal(modal);
            });
        }
    });

});
