import data from '../data/data.json' 


const createMenuItem = (data) => {
    const content = document.querySelector('#content')
    const div = document.createElement('div')
    const card  = document.createElement('card')
    const img = document.createElement('img')
    const container = document.createElement('div')
    div.classList.add('menu')
    div.innerHTML = `
    <div class="card">
    <img src="${data[0].src}" alt="Meal" style = 'height: 20vh'>
    <div class="menu-container">
      <h4><b>The ${data[0].name}</b></h4>
      <p>${data[0].meal}</p>
      <div>
        <button class = "dropdown">Additional Info </button>
        <div class = "dropdown-content">${data[0].description}</div>
    <div>
    </div>
  </div> 
    `

    content.appendChild(div)
}

const menu = () =>{
    const content = document.querySelector('#content')

    const card  = document.createElement('card')
    const img = document.createElement('img')
    const container = document.createElement('div')
    container.classList.add('menu-container-flex')
    container.style.display = 'none'
    for(let i = 0; i < data.length; i++){
        const div = document.createElement('div')
        div.classList.add('menu')
        div.innerHTML = `
        <div class="card">
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
    // card.appendChild(img)
    // card.appendChild(container)
    // div.appendChild(card)
  
}

export {menu}