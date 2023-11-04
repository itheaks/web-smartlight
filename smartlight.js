// JavaScript for expanding sections on click
const sections = document.querySelectorAll('section');

sections.forEach((section) => {
    section.addEventListener('click', () => {
        section.classList.toggle('expand');
    });
});
// JavaScript for responsive navigation
const toggleButton = document.querySelector('.toggle-button');
const navUl = document.querySelector('nav ul');

toggleButton.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

function w3_open() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
}
function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}