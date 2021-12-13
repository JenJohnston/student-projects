const navButton = document.querySelector('.nav-button');

navButton.addEventListener('click', (e) => {

    document.querySelector('nav').classList.toggle('show-nav-links');
})