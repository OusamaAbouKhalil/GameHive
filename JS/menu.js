function toggleMenu(){
    const Menu = document.querySelector(".toggleMenu");
    const nav = document.querySelector(".sticky");
    Menu.classList.toggle('active');
    nav.classList.toggle('active');
}