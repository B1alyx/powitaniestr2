document.getElementById('language-toggle').addEventListener('click', function() {
    const elementsPl = document.querySelectorAll('.pl');
    const elementsEn = document.querySelectorAll('.en');
    const headers = document.querySelectorAll('h2[data-lang-pl]');
    const headerTitle = document.querySelector('header h1');
    const langToggle = document.getElementById('language-toggle');

    elementsPl.forEach(el => el.style.display = el.style.display === 'none' ? 'block' : 'none');
    elementsEn.forEach(el => el.style.display = el.style.display === 'none' ? 'block' : 'none');
    headers.forEach(header => {
        const langPl = header.getAttribute('data-lang-pl');
        const langEn = header.getAttribute('data-lang-en');
        header.innerText = header.innerText === langPl ? langEn : langPl;
    });
    headerTitle.innerText = headerTitle.innerText === 'O mnie' ? 'About Me' : 'O mnie';
    langToggle.innerText = langToggle.innerText === 'EN' ? 'PL' : 'EN';
});

// Domyślnie wyświetlaj polską zawartość
window.onload = function() {
    const elementsEn = document.querySelectorAll('.en');
    elementsEn.forEach(el => el.style.display = 'none');
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('enter-site').addEventListener('click', function() {
    document.getElementById('welcome-screen').style.display = 'none';
});
