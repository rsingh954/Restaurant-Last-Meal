import '../style.css'

const footer = () => {
    const div = document.createElement('div');
    const content = document.querySelector('#content')
    div.classList.add('footer')
    div.innerHTML = `
        <p>Copyright &#169; 2021 <a target="blank" href="https://github.com/rsingh954">github.com/rsingh954</a></p>
    `
    content.appendChild(div)
}

export {footer}