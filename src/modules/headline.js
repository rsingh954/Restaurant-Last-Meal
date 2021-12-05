import '../style.css'

const headline = () =>{
    const content = document.querySelector('#content')
    const div = document.createElement('div')
    const heading = document.createElement('div')
    const h1 = document.createElement('h1')

    div.classList.add('container')
    heading.classList.add('heading')
    h1.classList.add('blood')

    h1.textContent = 'Come and eat your last meal!'
    
    heading.appendChild(h1)
    div.appendChild(heading)
    content.appendChild(div)
}

export {headline}