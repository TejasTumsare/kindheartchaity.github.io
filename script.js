function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    const menuIcon = document.getElementById('menu-icon');
    menu.classList.toggle('show');
    menuIcon.classList.toggle('change');
}
const navLinks = document.querySelectorAll(".nav-list");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("nav-menu");
    const menuIcon = document.getElementById("menu-icon");
    menu.classList.remove("show");
    menuIcon.classList.remove("change");
  });
});

function handleSubmit() {
    alert('Message Sent!');
    return false;
}
