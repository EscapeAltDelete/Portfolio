//Dit zorgt ervoor dat de achtergrond en het canvas meteen worden geladen zodra je de website opent. (De noLoop functie zorgt ervoor dat het niet meteen begint te tekenen zodra de pagina is geladen).
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(253, 237, 53);
  noLoop();
  //Dit zorgt ervoor dat er geen context menu komt als je je rechtermuisknop inklikt.
  for (let element of document.getElementsByClassName("p5Canvas")) {
    element.addEventListener("contextmenu", (e) => e.preventDefault());
    //Dit zorgt ervoor dat je cursor een kruis word.
    cursor(CROSS);
  }
}
//Dit zorgt ervoor dat de script niet start todat je je muis loslaat.
function mouseReleased() {
  noLoop();
}
//Dit zorgt ervoor dat het script start als je je muis ingedrukt houd.
function mousePressed() {
  loop();
}
//Hier word de variable col gemaakt (Dit is nodig om de functie random toe te voegen aan de kleur van de ellipses).
var col = {
  r: 0,
  g: 0,
  b: 0,
};

//Deze functie zorgt voor de random in groote en kleur. Het zorgt er ook voor dat de ellipses uberhaupt een kleur zou hebben.
function draw() {
  col.b = random(255);
  fill(col.r, col.g, col.b);
  ellipse(mouseX, mouseY, random(100), random(100));
}
//Deze functie zorgt ervoor dat het hele canvas reset als je pijltje omhoog inklikt.
function keyPressed() {
  if (keyCode === UP_ARROW) {
    clear();
    background(253, 237, 53, 255);
  }
  //Deze functie zorgt ervoor dat als je pijltje omlaag inklikt dat je in plaats van heel veel ellipsen achter elkaar tekent, er maar 1 tekent.
  else if (keyCode === DOWN_ARROW) {
    col.b = random(255);
    fill(col.r, col.g, col.b);
    ellipse(mouseX, mouseY, random(100), random(100));
  }
}
