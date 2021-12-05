import { navbar } from "./modules/navbar";
import { headline } from "./modules/headline";
import { footer } from "./modules/footer";
import { menu } from "./modules/menu";
import { about } from "./modules/about";
const  loadPage = (()=> {
    navbar();
    headline();
    menu()
    about();
    footer();
})()

const menuItem = document.querySelector('.nav_links')
menuItem.addEventListener('click', e =>{
    const {target} = e
    if(target.innerHTML == 'Menu'){menuClick()}
    if(target.innerHTML == 'About'){aboutClick()}
})

const menuClick = () =>{
    const container = document.querySelector('.container')
    const aboutContainer = document.querySelector('.about')
    container.style.display = 'none';
    aboutContainer.style.display = 'none'
    const menuContainer = document.querySelector('.menu-container-flex')
        if(menuContainer.style.display === 'flex'){
            menuContainer.style.display = 'none'
            container.style.display = 'flex';
        }
        else {
            menuContainer.style.display = 'flex'
        }
}


const aboutClick = () => {
    const container = document.querySelector('.container')
    const menuContainer = document.querySelector('.menu-container-flex')
    container.style.display = 'none';
    menuContainer.style.display = 'none'
    const aboutContainer = document.querySelector('.about')
    if(aboutContainer.style.display === 'flex'){
        aboutContainer.style.display = 'none'
        container.style.display = 'flex';
    }
    else {
        aboutContainer.style.display = 'flex'
    }


}