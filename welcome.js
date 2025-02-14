document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.querySelectorAll('nav button').forEach(button => {
    button.addEventListener('click', function() {
        const sectionId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

document.getElementById('enter-site').addEventListener('click', function() {
    document.getElementById('welcome-screen').style.display = 'none';
});
