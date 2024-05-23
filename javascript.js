const body = document.querySelector('body')

const footer = document.createElement('div')
footer.style.display = 'flex'
footer.style.margin = 'auto'
footer.style.paddingTop = '25px'
footer.style.textAlign = 'center'

const slider = document.createElement('input')
slider.style.marginLeft = 'auto'
slider.type = 'range'
slider.min = '2'
slider.max = '100'
slider.value = 16
footer.appendChild(slider)

const submit = document.createElement('button')
submit.textContent = 'Update Grid'
submit.style.marginRight = 'auto'
submit.addEventListener('click', () => {
  let boxes = document.querySelectorAll('.grid');
  boxes.forEach(box => {
    box.remove()
  })
  let opac = 10
  createGrid()
})
footer.appendChild(submit)

body.appendChild(footer)

const container = document.querySelector('#container')

let opac = 10

function rg(m, n) {
    return Math.floor( Math.random() * (n - m + 1) ) + m;
}

function hex(i) {
    return i.toString(16);
}

function randColor() {
  return '#' + hex(rg(1, 15)) + hex(rg(1, 15)) + hex(rg(1, 15)) +
      hex(rg(1, 15)) + hex(rg(1, 15)) + hex(rg(1, 15));
}

function createGrid(){
  for(i=0; i< (slider.value * slider.value); i++){
    const grid = document.createElement('div')
    grid.classList.add('grid')
    grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = randColor()
      grid.style.opacity = (opac++) + '%'
    })
    let a = slider.value
    const boxSize = 500 / a
    grid.style.width = boxSize + 'px'
    grid.style.height = boxSize + 'px'

  container.appendChild(grid)
  }
}

const col =  createGrid()