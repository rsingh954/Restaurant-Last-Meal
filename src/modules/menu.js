import data from '../data/data.json' 
import al from '../assets/al.jpg'
import bundy from '../assets/bundy.png'
import gacy from '../assets/gacy.png'
import jeff from '../assets/jeff.jpg'
import karla from '../assets/karla.png'
import tim from '../assets/tim.png'
const imgArray = [bundy,gacy,tim,karla,jeff,al]


function createMenuItem(item, asset){
  const container = document.createElement('div')
  container.style.display = 'none';
  container.classList.add('menu-container-flex')

  for(let i = 0; i < item.length; i++){
    //CREATING ELEMENTS
    const menu = document.createElement('div')
    const card = document.createElement('div');
    const img = document.createElement('img')
    const menuContainer = document.createElement('div')
    const dropdown = document.createElement('div')
    const name = document.createElement('h4')
    const meal = document.createElement('p')
    const price = document.createElement('p')
    const btn = document.createElement('button')
    const dropContent = document.createElement('div')
    //ADDING CLASSES
    menu.classList.add('menu');
    card.classList.add("card")
    menuContainer.classList.add('menu-container')
    dropdown.classList.add('dropdown')
    dropContent.classList.add('dropdown-content')
    btn.classList.add('dropdown')
    //HANDLE IMAGES
    img.style.height = "100px";
    img.style.width = '100px';
    img.alt = 'Meal'
    img.src = asset[i];

    //ADDING DATA
    name.textContent = "The "  + item[i].name
    meal.textContent = item[i].meal
    price.textContent = "$" + item[i].price
    btn.textContent = 'Additional Info'
    dropContent.textContent = item[i].description
    dropdown.appendChild(btn)
    dropdown.appendChild(dropContent)
    menuContainer.appendChild(name)
    menuContainer.appendChild(meal)
    menuContainer.appendChild(price)
    menuContainer.appendChild(dropdown)
    card.appendChild(img)
    card.appendChild(menuContainer)
    menu.appendChild(card)
    container.appendChild(menu)
  }

  return container

}
const menu = () =>{
    const content = document.querySelector('#content')
     content.appendChild(
       createMenuItem(data, imgArray)
     )  
}

export {menu}