let imgNum = 279;
let i = 0;
let imgArray = [];
let ptArray;
let myFont;
let fontSize = 600;
let imgS;
let imgF;


function preload() {
  myFont = loadFont("cinetype.otf");
  for (var i = 0; i< imgNum; i++) {
    imgArray[i] = loadImage("img" + i + ".jpg");
  }
}

function setup() {
  // noCursor();
  createCanvas(displayWidth * 3, displayHeight * 3);
  imageMode(CENTER);
  textFont();
  textSize(fontSize);
  frameRate(30);
}

function draw() {
  imgS = 100;
  imgF = 200*0.0005;
    
  background(22, 22, 22);
      ptArray = myFont.textToPoints("S L E E P", width/3, height/2, fontSize, {sampleFactor: frameCount * 0.0009});
  for (let xx = 0; xx < ptArray.length; xx++){
    image(imgArray[xx % imgArray.length], ptArray[xx].x - 390, ptArray[xx].y+300, imgS, imgS);
  }
}