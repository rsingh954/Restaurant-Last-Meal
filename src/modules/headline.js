import '../style.css'

const headline = () =>{
    const content = document.querySelector('#content')
    const div = document.createElement('div')
    div.classList.add('container')
    div.innerHTML = `
    <div class = "heading"> 
        <h1 class = "blood"> Come and eat your <strong> last meal</strong></h1>
    </div>
    `
    content.appendChild(div)
}

export {headline}