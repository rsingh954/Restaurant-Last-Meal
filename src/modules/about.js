
const about = () =>{

const content = document.querySelector('#content')
const div = document.createElement('div')
const header = document.createElement('div');
const aboutContent = document.createElement('div');
const h1 = document.createElement('h1')
const hr = document.createElement('hr')
const phone = document.createElement('div');
const phoneNumber = document.createElement('p')
const email = document.createElement('div')
const emailAddress = document.createElement('p')


div.classList.add("about")
header.classList.add('about-header')
phone.classList.add('phone')
email.classList.add('email')
aboutContent.classList.add('about-content')


div.style.display = 'none'
h1.textContent = "About"
emailAddress.textContent = 'blalalala@yahoo.com'
aboutContent.textContent = 'What We Do: At Last Meal we serve the last meals of the most despicable human beings. Come by and give us a try!'


phone.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg> 
`
phoneNumber.textContent = '(650)123-4567'
email.innerHTML = `
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
             <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
         </svg>
`

header.appendChild(h1)
aboutContent.appendChild(hr)
phone.appendChild(phoneNumber)
email.appendChild(emailAddress)
aboutContent.appendChild(phone)
aboutContent.appendChild(email)
div.appendChild(header)
div.appendChild(aboutContent)
content.appendChild(div)
    
}

export {about}