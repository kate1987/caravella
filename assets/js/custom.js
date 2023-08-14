document.addEventListener('DOMContentLoaded', function () {
    openMenu();
    closeMenu();
});

window.addEventListener('scroll', function() {
    fixedHeader();
});

function fixedHeader() {
    let scrollPosition = window.scrollY;
    let siteHeader = document.querySelector('.site-header');
    scrollPosition = window.scrollY;
    if (scrollPosition >= 30) {
        siteHeader.classList.add('scrolled');
    } else {
        siteHeader.classList.remove('scrolled');
    }
}

function openMenu() {
    let openMobileMenuBtn = document.querySelector('.site-header__open-menu');
    let header = document.querySelector('.site-header');
    if (openMobileMenuBtn) {
        openMobileMenuBtn.addEventListener('click', e => {
            e.preventDefault();
            header.classList.toggle('open');
        });
    }
}

function closeMenu() {
    let openMobileMenuBtn = document.querySelector('.site-header__close-menu');
    let header = document.querySelector('.site-header');
    if (openMobileMenuBtn) {
        openMobileMenuBtn.addEventListener('click', e => {
            e.preventDefault();
            header.classList.toggle('open');
        });
    }
}
