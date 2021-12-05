import data from '../data/data.json' 
import al from '../assets/al.jpg'
import bundy from '../assets/bundy.png'
import gacy from '../assets/gacy.png'
import jeff from '../assets/jeff.jpg'
import karla from '../assets/karla.png'
import tim from '../assets/tim.png'
const imgArray = [bundy,gacy,tim,karla,jeff,al]

const menu = () =>{
    const content = document.querySelector('#content')
    const container = document.createElement('div')
    container.classList.add('menu-container-flex')
    container.style.display = 'none'
    for(let i = 0; i < data.length; i++){
        const div = document.createElement('div')
        div.classList.add('menu')
        div.innerHTML = `
        <div class="card">
        <img src="${imgArray[i]}" alt="Meal" style = 'height: 100px; width: 100px;'>
        <div class="menu-container">
          <h4><b>The ${data[i].name}</b></h4>
          <p>${data[i].meal}</p>
          <div class = "dropdown">
            <button class = "dropdown">Additional Info </button>
            <div class = "dropdown-content">${data[i].description}</div>
        <div>
        </div>
      </div> 
        `
        container.appendChild(div)
    }
    content.appendChild(container)  
}

export {menu}