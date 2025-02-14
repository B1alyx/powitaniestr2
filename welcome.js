// Usuń wszystkie odniesienia do przycisków
document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Funkcja przewijania do sekcji - już niepotrzebna
/*
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
*/
