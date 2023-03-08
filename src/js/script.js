
const canvas = document.getElementById('canvas')

canvas.width = innerWidth
canvas.height = innerHeight

const c = canvas.getContext('2d')

let amplitude = 1
let frequency = 0.1
let length = 0.1

let y = canvas.height / 2
let increment = frequency

let hue = 200
let saturation = 50
let light = 50

let red = 0
let green = 0
let blue = 0
let alpha = 0.1

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

const ySlider = document.getElementById('y')
ySlider.setAttribute('min', '0')
ySlider.setAttribute('max', `${canvas.height}`)
ySlider.setAttribute('step', '1')

const amplitudeSlider = document.getElementById('amplitude')
amplitudeSlider.setAttribute('min', '-300')
amplitudeSlider.setAttribute('max', '300')
amplitudeSlider.setAttribute('step', '1')

const lengthSlider = document.getElementById('length')
lengthSlider.setAttribute('min', '-0.01')
lengthSlider.setAttribute('max', '0.01')
lengthSlider.setAttribute('step', '0.001')

const frequencySlider = document.getElementById('frequency')
frequencySlider.setAttribute('min', '-0.01')
frequencySlider.setAttribute('max', '1')
frequencySlider.setAttribute('step', '0.001')

const hueSlider = document.getElementById('hue')
hueSlider.setAttribute('min', '0')
hueSlider.setAttribute('max', '255')
hueSlider.setAttribute('step', '1')

const saturationSlider = document.getElementById('saturation')
saturationSlider.setAttribute('min', '0')
saturationSlider.setAttribute('max', '100')
saturationSlider.setAttribute('step', '1')

const lightSlider = document.getElementById('light')
lightSlider.setAttribute('min', '0')
lightSlider.setAttribute('max', '100')
lightSlider.setAttribute('step', '1')

const redSlider = document.getElementById('red')
redSlider.setAttribute('min', '0')
redSlider.setAttribute('max', '255')
redSlider.setAttribute('step', '1')

const greenSlider = document.getElementById('green')
greenSlider.setAttribute('min', '0')
greenSlider.setAttribute('max', '255')
greenSlider.setAttribute('step', '1')

const blueSlider = document.getElementById('blue')
blueSlider.setAttribute('min', '0')
blueSlider.setAttribute('max', '255')
blueSlider.setAttribute('step', '1')

const alphaSlider = document.getElementById('alpha')
alphaSlider.setAttribute('min', '0')
alphaSlider.setAttribute('max', '1')
alphaSlider.setAttribute('step', '0.001')

function updateValues(element){
  console.log(element.value)
  if(element.id === "y"){
    y = Number(element.value)
  }

  if(element.id === "amplitude"){
    amplitude = Number(element.value)
  }

  if(element.id === "length"){
    length = Number(element.value)
  }

  if(element.id === "frequency"){
    frequency = Number(element.value)
  }

  if(element.id === "light"){
    light = Number(element.value)
  }

  if(element.id === "saturation"){
    saturation = Number(element.value)
  }

  if(element.id === "hue"){
    hue = Number(element.value)
  }

  if(element.id === "red"){
    red = Number(element.value)
  }

  if(element.id === "green"){
    green = Number(element.value)
  }

  if(element.id === "blue"){
    blue = Number(element.value)
  }

  if(element.id === "alpha"){
    alpha = Number(element.value)
  }
}

const animate = () => {
  requestAnimationFrame(animate)
  c.fillStyle = `rgba(${red},${green},${blue},${alpha})`
  c.fillRect(0,0 , canvas.width,canvas.height)

  c.beginPath()
  c.moveTo(0, canvas.height / 2)
  for (let i = 0; i < canvas.width; i++) {
    c.lineTo(i, y + Math.sin(i * length + increment) * amplitude * Math.sin(increment))
  }
  c.strokeStyle = `hsl(${Math.abs(hue * Math.sin(increment))},${saturation}%,${light}%)`
  c.stroke()

  increment+= frequency
}

 animate()

// y(t) = A*sin(2*pi*f*t+phi) = A*sin(omega*t+phi)
//
// A = amplitude
// f = frequency
// omega = 2*pi*f = angular frequency
// phi = phase

