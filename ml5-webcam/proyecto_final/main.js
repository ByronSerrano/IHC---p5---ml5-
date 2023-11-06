function setup() {
  canvas = createCanvas(windowWidth, windowHeight)
  initModel()

  sound = new Pizzicato.Sound()
  sound.play()
}

function draw() {
  background('rgb(147,112,219)')
  
  let radius = map(value, 0, 1, 0, 900)
  circle(windowWidth / 2, windowHeight / 2, radius)

  //Codigo paraxº los rectangulos
  let size = map(value, 0, 1, 0, 50)

  for (let i=0; i < 100; i++) {
    rect(random(windowWidth), random(windowHeight), size)
  }

  //Codigo para el cambiar la frecuencia del sonido
  let frequency = map(value, 0, 1, 100, 1000)
  sound.frequency = frequency
}
