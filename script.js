/* =========================================================
   FAIZA NOOR — PORTFOLIO JAVASCRIPT
   Futuristic / Interactive / Professional Portfolio
========================================================= */
/* =====================================================
   FAIZA PORTFOLIO INTRO CONTROL
===================================================== */
/* =========================================================
   FAIZA NOOR CINEMATIC INTRO
========================================================= */

window.addEventListener("load", function () {

    const intro =
        document.getElementById("cinematicIntro");


    /*
       TIMELINE

       0.0s  → darkness
       0.4s  → energy ball launches
       1.6s  → impact
       1.8s  → glass crack
       2.1s  → coding screen
       2.3s  → lightning
       4.2s  → WELCOME appears
       8.8s  → intro starts disappearing
       10.3s → portfolio completely visible
    */


    setTimeout(function () {

        intro.style.pointerEvents = "none";

    }, 8800);


    setTimeout(function () {

        intro.remove();

        document.body.style.overflowX = "hidden";

    }, 10300);

});

window.addEventListener("load", () => {

    const intro = document.getElementById("intro");
    const portfolio = document.getElementById("portfolio");

    /*
       Portfolio ko intro ke waqt hidden rakho
    */

    portfolio.style.opacity = "0";

    portfolio.style.transition =
        "opacity 1.5s ease";


    /*
       10.5 seconds ke baad
       intro disappear hoga
    */

    setTimeout(() => {

        intro.style.transition =
            "opacity 1.5s ease";

        intro.style.opacity = "0";


        /*
           Portfolio reveal
        */

        setTimeout(() => {

            intro.style.display = "none";

            portfolio.style.opacity = "1";

        }, 1500);

    }, 10500);

});
"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ====================================================== */

    const body = document.body;

    const pageLoader = document.getElementById("pageLoader");

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    const backToTop = document.getElementById("backToTop");

    const scrollArrow = document.getElementById("scrollArrow");

    const contactForm = document.getElementById("contactForm");

    const navLinks = document.querySelectorAll(".nav-link");

    const sections = document.querySelectorAll("main section[id]");

    const heroSection = document.querySelector(".hero-section");

    const character = document.querySelector(".character-container");

    const characterImage = document.querySelector(".character-image");

    const floatingCards =
        document.querySelectorAll(".floating-code-card");

    const projectCards =
        document.querySelectorAll(".project-card");

    const skillCards =
        document.querySelectorAll(".skill-card");

    const timelineItems =
        document.querySelectorAll(".timeline-item");

    const educationCards =
        document.querySelectorAll(".education-card");

    const certificateCards =
        document.querySelectorAll(".certificate-card");

    const officeCards =
        document.querySelectorAll(".office-project-card");

    const customCursorDot =
        document.querySelector(".cursor-dot");

    const customCursorOutline =
        document.querySelector(".cursor-outline");


        /* =========================================
   FAIZA NOOR LETTER WAVE
========================================= */

const faizaName = document.querySelector(".faiza");

if (faizaName) {

    const text = faizaName.textContent.trim();

    faizaName.textContent = "";

    [...text].forEach((letter) => {

        const span = document.createElement("span");

        span.textContent =
            letter === " " ? "\u00A0" : letter;

        faizaName.appendChild(span);

    });

    faizaName.classList.add("wave-name");
}


    /* =====================================================
       PAGE LOADER
    ====================================================== */

    function hideLoader() {

        if (!pageLoader) return;

        pageLoader.classList.add("loaded");

        setTimeout(() => {
            pageLoader.style.display = "none";
        }, 900);
    }


    window.addEventListener("load", () => {

        setTimeout(hideLoader, 700);

    });


    /* Safety fallback */

    setTimeout(hideLoader, 4000);


    /* =====================================================
       MOBILE NAVIGATION
    ====================================================== */

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                navMenu.classList.toggle("active");

            menuToggle.classList.toggle("active", isOpen);

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            body.classList.toggle(
                "menu-open",
                isOpen
            );

        });


        /* Close menu after clicking a link */

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                body.classList.remove("menu-open");

            });

        });

    }


    /* =====================================================
       SMOOTH SCROLL
    ====================================================== */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ====================================================== */

    function updateActiveNavigation() {

        const scrollPosition =
            window.scrollY + window.innerHeight * 0.35;

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach((link) => {

            const href =
                link.getAttribute("href");

            link.classList.toggle(
                "active",
                href === `#${currentSection}`
            );

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );


    updateActiveNavigation();


    /* =====================================================
       BACK TO TOP
    ====================================================== */

    function updateBackToTop() {

        if (!backToTop) return;

        if (window.scrollY > 600) {

            backToTop.classList.add("visible");

        } else {

            backToTop.classList.remove("visible");

        }

    }


    window.addEventListener(
        "scroll",
        updateBackToTop,
        { passive: true }
    );


    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================================
       SCROLL ARROW
       IMPORTANT: Never hide the arrow through JS.
    ====================================================== */

    if (scrollArrow) {

        scrollArrow.style.display = "flex";
        scrollArrow.style.visibility = "visible";
        scrollArrow.style.opacity = "1";
        scrollArrow.style.pointerEvents = "auto";

        scrollArrow.addEventListener("click", (event) => {

            event.preventDefault();

            const aboutSection =
                document.getElementById("about");

            if (aboutSection) {

                aboutSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }


    /* =====================================================
       SCROLL REVEAL ANIMATION
    ====================================================== */

    const revealElements = [

        ...document.querySelectorAll(
            ".section-heading"
        ),

        ...document.querySelectorAll(
            ".section-intro"
        ),

        ...skillCards,

        ...projectCards,

        ...timelineItems,

        ...educationCards,

        ...certificateCards,

        ...officeCards,

        ...document.querySelectorAll(
            ".mindset-box"
        ),

        ...document.querySelectorAll(
            ".contact-intro"
        ),

        ...document.querySelectorAll(
            ".contact-details"
        ),

        ...document.querySelectorAll(
            ".contact-form-wrapper"
        )

    ];


    revealElements.forEach((element) => {

        element.classList.add("reveal-on-scroll");

    });


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "revealed"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -50px 0px"
                }
            );


        revealElements.forEach((element) => {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach((element) => {

            element.classList.add("revealed");

        });

    }


    /* =====================================================
       STAGGER CARD ANIMATIONS
    ====================================================== */

    function addStagger(elements) {

        elements.forEach((element, index) => {

            element.style.setProperty(
                "--animation-delay",
                `${index * 80}ms`
            );

        });

    }


    addStagger(skillCards);
    addStagger(projectCards);
    addStagger(timelineItems);
    addStagger(educationCards);
    addStagger(certificateCards);
    addStagger(officeCards);


    /* =====================================================
       HERO PARALLAX EFFECT
    ====================================================== */

    if (
        heroSection &&
        character &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        heroSection.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    heroSection.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const moveX =
                    (x - centerX) / centerX;

                const moveY =
                    (y - centerY) / centerY;


                character.style.transform =
                    `translate3d(
                        ${moveX * 10}px,
                        ${moveY * 10}px,
                        0
                    )`;

            }
        );


        heroSection.addEventListener(
            "mouseleave",
            () => {

                character.style.transform =
                    "translate3d(0, 0, 0)";

            }
        );

    }


    /* =====================================================
       CHARACTER IMAGE FLOATING EFFECT
    ====================================================== */

    if (characterImage) {

        let characterTime = 0;

        function animateCharacter() {

            characterTime += 0.025;

            const floatingY =
                Math.sin(characterTime) * 5;

            characterImage.style.transform =
                `translateY(${floatingY}px)`;

            requestAnimationFrame(
                animateCharacter
            );

        }

        animateCharacter();

    }


    /* =====================================================
       FLOATING TECHNOLOGY CARDS
    ====================================================== */

    floatingCards.forEach((card, index) => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.classList.add("card-hover");

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.classList.remove("card-hover");

            }
        );


        /* Different animation delay */

        card.style.setProperty(
            "--float-delay",
            `${index * 0.6}s`
        );

    });


    /* =====================================================
       PROJECT CARD TILT
    ====================================================== */

    if (
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        projectCards.forEach((card) => {

            card.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX - rect.left;

                    const y =
                        event.clientY - rect.top;

                    const centerX =
                        rect.width / 2;

                    const centerY =
                        rect.height / 2;

                    const rotateX =
                        ((y - centerY) / centerY) * -3;

                    const rotateY =
                        ((x - centerX) / centerX) * 3;


                    card.style.transform =
                        `perspective(1000px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateY(-5px)`;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform = "";

                }
            );

        });

    }


    /* =====================================================
       SKILL CARD HOVER
    ====================================================== */

    skillCards.forEach((card) => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.classList.add(
                    "skill-active"
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.classList.remove(
                    "skill-active"
                );

            }
        );

    });


    /* =====================================================
       MOUSE CUSTOM CURSOR
    ====================================================== */

    const hasFinePointer =
        window.matchMedia(
            "(pointer: fine)"
        ).matches;


    if (
        hasFinePointer &&
        customCursorDot &&
        customCursorOutline
    ) {

        body.classList.add(
            "custom-cursor-enabled"
        );


        let mouseX = 0;
        let mouseY = 0;

        let outlineX = 0;
        let outlineY = 0;


        document.addEventListener(
            "mousemove",
            (event) => {

                mouseX = event.clientX;
                mouseY = event.clientY;


                customCursorDot.style.transform =
                    `translate3d(
                        ${mouseX}px,
                        ${mouseY}px,
                        0
                    )`;

            }
        );


        function animateCursor() {

            outlineX +=
                (mouseX - outlineX) * 0.15;

            outlineY +=
                (mouseY - outlineY) * 0.15;


            customCursorOutline.style.transform =
                `translate3d(
                    ${outlineX}px,
                    ${outlineY}px,
                    0
                )`;


            requestAnimationFrame(
                animateCursor
            );

        }


        animateCursor();


        const interactiveElements =
            document.querySelectorAll(
                "a, button, input, textarea, .skill-card, .project-card"
            );


        interactiveElements.forEach(
            (element) => {

                element.addEventListener(
                    "mouseenter",
                    () => {

                        body.classList.add(
                            "cursor-hover"
                        );

                    }
                );


                element.addEventListener(
                    "mouseleave",
                    () => {

                        body.classList.remove(
                            "cursor-hover"
                        );

                    }
                );

            }
        );

    }


    /* =====================================================
       CONTACT FORM
    ====================================================== */

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const name =
                    document.getElementById("name")?.value.trim();

                const email =
                    document.getElementById("email")?.value.trim();

                const subject =
                    document.getElementById("subject")?.value.trim();

                const message =
                    document.getElementById("message")?.value.trim();


                if (
                    !name ||
                    !email ||
                    !subject ||
                    !message
                ) {

                    showFormMessage(
                        "Please complete all fields."
                    );

                    return;

                }


                const submitButton =
                    contactForm.querySelector(
                        ".submit-button"
                    );


                if (submitButton) {

                    submitButton.classList.add(
                        "sending"
                    );

                    submitButton.disabled = true;

                }


                /*
                    Frontend-only demo.

                    Later you can connect this form
                    with Formspree, EmailJS, FormSubmit,
                    a Node.js backend, etc.
                */

                setTimeout(() => {

                    if (submitButton) {

                        submitButton.classList.remove(
                            "sending"
                        );

                        submitButton.disabled = false;

                    }


                    showFormMessage(
                        "Thank you! Your message is ready to be connected to the email service."
                    );


                    contactForm.reset();

                }, 1000);

            }
        );

    }


    /* =====================================================
       FORM MESSAGE
    ====================================================== */

    function showFormMessage(message) {

        let messageBox =
            document.querySelector(
                ".form-message"
            );


        if (!messageBox) {

            messageBox =
                document.createElement("div");

            messageBox.className =
                "form-message";

            if (contactForm) {

                contactForm.appendChild(
                    messageBox
                );

            }

        }


        messageBox.textContent =
            message;

        messageBox.classList.add(
            "show"
        );


        setTimeout(() => {

            messageBox.classList.remove(
                "show"
            );

        }, 5000);

    }


    /* =====================================================
       TYPING EFFECT
    ====================================================== */

    const typingElement =
        document.querySelector(".typing-text");


    if (typingElement) {

        const roles = [

            "JUNIOR FULL-STACK WEB DEVELOPER",

            "FRONTEND DEVELOPER",

            "REACT DEVELOPER",

            "JAVASCRIPT DEVELOPER",

            "MS OFFICE SPECIALIST",

            "DIGITAL CREATOR"

        ];


        let roleIndex = 0;
        let characterIndex = 0;
        let deleting = false;


        function typeRole() {

            const currentRole =
                roles[roleIndex];


            if (!deleting) {

                characterIndex++;

            } else {

                characterIndex--;

            }


            typingElement.textContent =
                currentRole.substring(
                    0,
                    characterIndex
                );


            let speed =
                deleting ? 45 : 85;


            if (
                !deleting &&
                characterIndex === currentRole.length
            ) {

                speed = 1800;

                deleting = true;

            }


            if (
                deleting &&
                characterIndex === 0
            ) {

                deleting = false;

                roleIndex =
                    (roleIndex + 1) % roles.length;

                speed = 400;

            }


            setTimeout(
                typeRole,
                speed
            );

        }


        typeRole();

    }


    /* =====================================================
       TECH MARQUEE DUPLICATION
    ====================================================== */

    const marqueeTrack =
        document.querySelector(
            ".marquee-track"
        );


    if (marqueeTrack) {

        const marqueeItems =
            Array.from(
                marqueeTrack.children
            );


        marqueeItems.forEach((item) => {

            const clone =
                item.cloneNode(true);

            clone.setAttribute(
                "aria-hidden",
                "true"
            );

            marqueeTrack.appendChild(
                clone
            );

        });

    }


    /* =====================================================
       MAGNETIC BUTTON EFFECT
    ====================================================== */

    if (
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        const magneticButtons =
            document.querySelectorAll(
                ".primary-button, .secondary-button, .nav-cta, .submit-button"
            );


        magneticButtons.forEach((button) => {

            button.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        button.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left -
                        rect.width / 2;

                    const y =
                        event.clientY -
                        rect.top -
                        rect.height / 2;


                    button.style.transform =
                        `translate(
                            ${x * 0.08}px,
                            ${y * 0.08}px
                        )`;

                }
            );


            button.addEventListener(
                "mouseleave",
                () => {

                    button.style.transform = "";

                }
            );

        });

    }


    /* =====================================================
       KEYBOARD ACCESSIBILITY
    ====================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            /* ESC closes mobile menu */

            if (
                event.key === "Escape" &&
                navMenu &&
                menuToggle
            ) {

                navMenu.classList.remove(
                    "active"
                );

                menuToggle.classList.remove(
                    "active"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                body.classList.remove(
                    "menu-open"
                );

            }

        }
    );


    /* =====================================================
       REDUCED MOTION SUPPORT
    ====================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (prefersReducedMotion) {

        document.documentElement.classList.add(
            "reduce-motion"
        );

    }


    /* =====================================================
       PERFORMANCE-FRIENDLY SCROLL HANDLER
    ====================================================== */

    let scrollTicking = false;


    window.addEventListener(
        "scroll",
        () => {

            if (!scrollTicking) {

                window.requestAnimationFrame(() => {

                    updateBackToTop();
                    updateActiveNavigation();

                    scrollTicking = false;

                });

                scrollTicking = true;

            }

        },
        { passive: true }
    );


    /* =====================================================
       INITIAL STATE
    ====================================================== */

    updateBackToTop();
    updateActiveNavigation();


    console.log(
        "%c FAIZA NOOR PORTFOLIO ",
        "font-size: 18px; font-weight: bold;"
    );

    console.log(
        "%c Built with HTML • CSS • JavaScript ",
        "font-size: 12px;"
    );

});
function openCV() {
    document.getElementById("cvModal").classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeCV() {
    document.getElementById("cvModal").classList.remove("show");
    document.body.style.overflow = "";
}
/* =========================================
   CURSOR WHITE GLOW EFFECT
========================================= */

const cursorGlow = document.querySelector(".cursor-glow");

let mouseX = 0;
let mouseY = 0;

let glowX = 0;
let glowY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorGlow.style.opacity = "1";
});


function animateCursorGlow() {

    glowX += (mouseX - glowX) * 0.12;
    glowY += (mouseY - glowY) * 0.12;

    cursorGlow.style.left = `${glowX}px`;
    cursorGlow.style.top = `${glowY}px`;

    requestAnimationFrame(animateCursorGlow);
}

animateCursorGlow();


/* Hide glow when cursor leaves portfolio/window */

document.addEventListener("mouseleave", () => {
    cursorGlow.style.opacity = "0";
});

document.addEventListener("mouseenter", () => {
    cursorGlow.style.opacity = "1";
});