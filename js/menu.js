const openMenu = document.getElementById("btn-abrir-menu");
const closeMenu = document.getElementById("btn-fechar-menu")

function abrirMenu () {
    
    const menu = document.getElementById("menu-mobile");
    menu.classList.remove("translate-x-100");
    menu.classList.add("translate-x-0");
}


function fecharMenu () {
    
    const menu = document.getElementById("menu-mobile");
    menu.classList.remove("translate-x-0");
    menu.classList.add("translate-x-100");

}

openMenu.addEventListener("click", abrirMenu);
closeMenu.addEventListener("click", fecharMenu)
