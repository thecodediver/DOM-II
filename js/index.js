// Your code goes here
window.onload = function() {
  alert('Welcome!');
}

const funBusImg = document.querySelector('.intro img');
funBusImg.addEventListener('mouseover', () => {
  funBusImg.style.border = '3px solid black';
});
funBusImg.addEventListener('mouseout', () => {
  funBusImg.style.border = 'none';
});

const keydown = document.body;
keydown.addEventListener('keydown', (event) => {
  if(event.key !== 'Enter') {
    alert(`You pressed ${event.key}`);
  }
});

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => {
  p.addEventListener('click', () => {
    let randomColor = Math.floor(Math.random() * 4);
    switch(randomColor) {
      case 0:
        p.style.color = 'green';
        break;
      case 1:
        p.style.color = 'blue';
        break;
      case 2:
        p.style.color = 'red';
        break;
      default:
        break;
    }
  })
})

const images = document.querySelectorAll('img');
images.forEach(image => {
  image.addEventListener('dblclick', () => {
    image.style.display = 'none';
  })
})

const navItems = document.querySelectorAll('a');
navItems.forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
  })
})

const header = document.querySelector('.intro h2');
header.addEventListener('click', (e) => {
  header.style.color = 'red';
})

const intro = document.querySelector('.intro');
intro.addEventListener('click', (e) => {
  e.stopPropagation()
  header.style.color = 'green';
})

const home = document.querySelector('.home');
home.addEventListener('click', (e) => {
  header.style.color = 'blue';
})

