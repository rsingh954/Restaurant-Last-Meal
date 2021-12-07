import '../style.css'

const headline = () =>{
    const content = document.querySelector('#content')
    const div = document.createElement('div')
    const heading = document.createElement('div')
    const h1 = document.createElement('h1')
    const btn = document.createElement('button')

    div.classList.add('container')
    heading.classList.add('heading')
    h1.classList.add('blood')
    btn.classList.add('menuBtn')
    btn.style.color = 'gold'
    btn.style.backgroundColor = 'black'
    btn.style.borderRadius = '1rem'
    btn.style.padding = '8px'



    h1.textContent = 'Come and eat your last meal!'
    btn.textContent = "Check Our Menu!"
    
    heading.appendChild(h1)
    div.appendChild(heading)
    div.appendChild(btn)
    content.appendChild(div)
}

export {headline}