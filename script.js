// --- NEW: Pre-loader Logic ---
// This runs as soon as the window (including images) is fully loaded.
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    document.body.classList.add('loaded');
    
    // Optional: Remove preloader from DOM after it fades out
    preloader.addEventListener('transitionend', () => {
        preloader.style.display = 'none';
    });
});

// --- All other logic runs after the HTML document is parsed ---
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Intersection Observer for fade-in elements ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const targets = document.querySelectorAll('.fade-in');
    targets.forEach(target => {
        observer.observe(target);
    });

    // --- 2. Header scroll behavior ---
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 150) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
        lastScrollY = currentScrollY;
    });


    // --- 3. Modal Logic ---
    const modalData = {
        "modal-1": {
            title: "Automated Oil Palm Detection (YOLO Deep Learning)",
            keywords: ["Python", "AI", "Machine Learning", "Automation"],
            description: `
                <h3>🌳 Automated Oil Palm Tree and Deboling Hole Detection</h3>
                <p>This Final Year Project (FYP) focused on developing a highly precise and automated system for agricultural monitoring, specifically within oil palm plantations, leveraging cutting-edge AI technology.</p>
                <h4>The Challenge & Goal</h4>
                <p>The core objective was to accurately identify and locate both mature oil palm trees and small, critical features like deboling holes (evidence of maintenance activity) within plantation imagery. Automating this task significantly reduces the need for slow, costly, and error-prone manual surveys.</p>
                <h4>The Solution</h4>
                <p>The project successfully leveraged state-of-the-art YOLO (You Only Look Once) deep learning models for robust object detection. The research involved a comparative analysis of different YOLO architectures to determine the optimal model configuration for achieving maximum accuracy and efficiency in detecting these agricultural features.</p>
                <h4>Key Focus Areas</h4>
                <ul>
                    <li><strong>Technology:</strong> Deep Learning (Training and fine-tuning YOLO models).</li>
                    <li><strong>Application:</strong> Precision agriculture and automated inventory/monitoring.</li>
                    <li><strong>Outcome:</strong> Establishing a benchmark for high-accuracy object detection in challenging, real-world plantation environments.</li>
                </ul>
            `,
            images: ["images/FullStack.jpg", "images/Poster.jpg", "images/Detection.jpg"]
        },
        "modal-2": {
            title: "Super Dimmer APK",
            keywords: ["Flutter", "Software engineering", "Software development", "Android"],
            description: `
                <h3>🌙 Ultra Dim – Safer Night Driving App</h3>
                <p>Ultra Dim is a Flutter mobile application designed to solve a critical safety and comfort issue for drivers using Android-based car players.</p>
                <h4>The Challenge</h4>
                <p>During night driving, many car displays remain too bright, even at the lowest system setting. This excessive light causes eye strain, distraction, and reduces overall driving safety.</p>
                <h4>The Solution</h4>
                <p>Ultra Dim provides an "ultra-dim" solution that goes beyond the standard system limit. It achieves this by intelligently combining system brightness control with a transparent, low-opacity overlay. The result is a display that is genuinely comfortable for night use, leading to a safer and more focused driving experience.</p>
                <h4>Key Technology</h4>
                <ul>
                    <li><strong>Platform:</strong> Flutter (Cross-platform framework)</li>
                    <li><strong>Target Devices:</strong> Android-based Car Head Units</li>
                    <li><strong>Developer:</strong> Valentine</li>
                </ul>
            `,
            images: ["images/super_dim.png"]
        },
        "modal-3": {
            title: "Trombol Paradise Beach App (UI/UX)",
            keywords: ["UI/UX Design", "Mobile App", "eCommerce", "Prototyping"],
            description: `
                <h3>🏖️ Trombol Paradise Beach App Concept</h3>
                <p>This project is a UI/UX concept for a comprehensive mobile application for the Paradise Beach resort in Trombol. The goal was to design a clean, intuitive, and engaging interface for resort guests.</p>
                <h4>Key Features Designed:</h4>
                <ul>
                    <li><strong>Splash & Auth:</strong> A welcoming and professional login/signup flow to ensure user accounts are secure and accessible.</li>
                    <li><strong>Home Dashboard:</strong> A dynamic main page highlighting current promotions (like the "Gawai Bonfire") and providing clear navigation.</li>
                    <li><strong>Service Categories:</strong> A grid-based system for users to easily browse the resort's offerings, including Activities, Services, Products, and Dining.</li>
                    <li><strong>eCommerce:</strong> A fully integrated cart and profile system, allowing users to book services or purchase products directly through the app.</li>
                </ul>
            `,
            images: ["images/Trombol_Main_Page.jpg", "images/Trombol_signin.jpg"]
        },
        "modal-4": {
            title: "UNIMAS AR Navigator App",
            keywords: ["Flutter", "Android Studio", "WebAR", "Augmented Reality"],
            description: `
                <h3>🗺️ UNIMAS AR Navigator App</h3>
                <p>This project involved developing a comprehensive, **fully functional augmented reality (AR) navigation solution** specifically designed for exploring the UNIMAS campus.</p>
                <h4>The Goal</h4>
                <p>To provide students, staff, and visitors with a **dynamic and intuitive way** to navigate the university grounds, moving beyond static maps to offer an immersive, real-time guidance experience.</p>
                <h4>The Solution & Technology</h4>
                <p>The app was built using the **Flutter SDK** within **Android Studio**, ensuring a high-performance, cross-platform mobile experience. The highlight of the project is its sophisticated integration with **WebAR** technology, which allows the application to render AR elements directly through the web, offering seamless and practical guidance across the campus environment.</p>
                <h4>Key Features</h4>
                <ul>
                    <li><strong>Platform:</strong> Flutter SDK (Android development).</li>
                    <li><strong>Core Technology:</strong> Augmented Reality (AR) navigation.</li>
                    <li><strong>Key Integration:</strong> WebAR for dynamic, in-browser AR experiences.</li>
                    <li><strong>Application:</strong> Intuitive campus exploration and guidance.</li>
                </ul>
            `,
            images: ["images/UNIMAS_AR_mainpage.jpg", "images/Unimas_AR.jpg"]
        }
    };

    const projectModal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalKeywords = document.getElementById("modal-keywords");
    const modalDescription = document.getElementById("modal-description");
    const modalImages = document.getElementById("modal-images");
    const projectCloseButton = projectModal.querySelector(".close-button");
    const projectCards = document.querySelectorAll(".project-card");

    function openProjectModal(data) {
        modalTitle.textContent = data.title;
        modalKeywords.innerHTML = "";
        data.keywords.forEach(keyword => {
            const tag = document.createElement("span");
            tag.className = "keyword-tag";
            tag.textContent = keyword;
            modalKeywords.appendChild(tag);
        });
        if (data.description) {
            modalDescription.innerHTML = data.description;
            modalDescription.style.display = "block";
        } else {
            modalDescription.innerHTML = "";
            modalDescription.style.display = "none";
        }
        modalImages.innerHTML = "";
        data.images.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = data.title;
            modalImages.appendChild(img);
        });
        projectModal.classList.add("active");
    }

    function closeProjectModal() {
        projectModal.classList.remove("active");
    }

    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            const targetId = card.getAttribute("data-modal-target");
            const data = modalData[targetId];
            if (data) {
                openProjectModal(data);
            }
        });
    });

    projectCloseButton.addEventListener("click", closeProjectModal);
    projectModal.addEventListener("click", (e) => {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });

    // --- 4. Contact Modal Logic ---
    const contactLink = document.getElementById('contact-link');
    const contactModal = document.getElementById('contact-modal');
    
    if (contactLink && contactModal) {
        const contactCloseButton = contactModal.querySelector('.close-button');

        // Open modal
        contactLink.addEventListener('click', (e) => {
            e.preventDefault();
            contactModal.classList.add('active');
        });

        // Close with button
        if (contactCloseButton) {
            contactCloseButton.addEventListener('click', () => {
                contactModal.classList.remove('active');
            });
        }

        // Close by clicking overlay
        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.classList.remove('active');
            }
        });
    }

});