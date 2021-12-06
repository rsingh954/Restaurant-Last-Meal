import '../style.css'


const navbar = () =>{
    const header = document.createElement('header');
    const content = document.querySelector('#content')


    header.innerHTML = `
    <ul class = 'nav_links'>
        <li><a href ="#">Last Meals</a></li>
        <li><a href ="#">Menu</a></li>
        <li><a href ="#">About</a></li>
    </ul>
    `

    content.appendChild(header)
}

export {navbar}