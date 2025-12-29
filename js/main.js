// CMG NEXA - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScrolling();
    initLanguage();
});

// Language switching functionality
function initLanguage() {
    const savedLang = localStorage.getItem('cmg-language') || 'en';
    setLanguage(savedLang);
}

function setLanguage(lang) {
    // Save to localStorage
    localStorage.setItem('cmg-language', lang);

    // Update all elements with language data attributes
    document.querySelectorAll('[data-lang-en]').forEach(el => {
        const text = el.getAttribute(`data-lang-${lang}`);
        if (text) {
            el.textContent = text;
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update language button styles (supports both text and flag buttons)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.remove('text-white/70', 'opacity-60');
            btn.classList.add('text-white');
        } else {
            btn.classList.remove('text-white');
            btn.classList.add('opacity-60');
        }
    });
}

// Make setLanguage globally accessible
window.setLanguage = setLanguage;

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (!mobileMenuButton || !mobileMenu) return;

    mobileMenuButton.addEventListener('click', function() {
        const isHidden = mobileMenu.classList.contains('hidden');

        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });

    // Close menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
