var trash,p1,p2,p3,person,meadow,soda,paper;
var trashimg,p1img,p2img,p3img,personimg,meadowimg,sodaimg,paperimg;
var gameState = 0
var score = 0
var end,endimg,start,startimg
var peoplegroup

function preload(){
    trashimg = loadImage ("images/trashbag.jpg")
    p1img = loadImage ("images/person1.jpg")
    p2img = loadImage ("images/person2.jpg")
    p3img = loadImage ("images/person3.jpg")
    personimg = loadImage ("images/trashperson.jpg")
    meadowimg = loadImage ("images/meadow.jpg")
    sodaimg = loadImage ("images/soda.jpg")
    paperimg = loadImage ("images/paper.jpg")
    endimg = loadImage ("images/end.jpg")
    startimg = loadImage ("images/start.jpg")
    

}

function setup(){
    createCanvas(windowWidth,windowHeight)
    start = createSprite(width/2,height/2,200,50)
    start.addImage(startimg)

    peoplegroup = new Group()
}


function draw(){
    background(255)
    background(meadowimg)

    if(mousePressedOver(start)) {
        if (gameState === 0) {
          gameState = 1
        }
    }

      if(gameState === 1 ) {
          start.visible = false
          p1=new People()
          p2=new People()
          p3=new People()

          p1.display()
          p2.display()
          p3.display()

      } 

    drawSprites()
}
