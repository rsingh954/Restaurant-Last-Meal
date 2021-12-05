import '../style.css'


const navbar = () =>{
    const header = document.createElement('header');
    const nav = document.createElement('nav')
    const content = document.querySelector('#content')


    nav.innerHTML = `
    <ul class = 'nav_links'>
        <li><a href ="#">Last Meals</a></li>
        <li><a href ="#">Menu</a></li>
        <li><a href ="#">About</a></li>
    </ul>
    `
    
    header.appendChild(nav)
    content.appendChild(header)
}

export {navbar}