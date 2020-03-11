'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.shop__categories'),
    menuItem = document.querySelectorAll('.shop__item'),
    hamburger = document.querySelector('.shop__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('shop__categories_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('shop__categories_active');
        });
    });
});