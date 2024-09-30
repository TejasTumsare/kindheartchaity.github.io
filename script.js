


function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    const menuIcon = document.getElementById('menu-icon');
    menu.classList.toggle('show');
    menuIcon.classList.toggle('change');
}


function handleSubmit() {
    alert('Message Sent!');
    return false;
}