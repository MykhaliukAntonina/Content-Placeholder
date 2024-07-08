const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500) 

function getData() {
    header.innerHTML = `<img src="images/IMG_20210403_185553.jpg" 
    alt="">`
    title.innerHTML = ' Lorem ipsum dolor'
    excerpt.innerHTML = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam fuga quisquam ratione cumque a sapiente.`
    profile_img.innerHTML = `<img src="images/IMG_20210403_185621.jpg" alt="">`
    name.innerHTML = `John Dou`
    date.innerHTML = `Oct 08, 2024`

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));

    animated_bg_text.forEach(bg => bg.classList.remove('animated-bg-text'));

}