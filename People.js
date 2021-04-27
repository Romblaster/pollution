class People{
    constructor(x,y){
        
        this.image = loadImage("images/person1.jpg")
        this.image = loadImage("images/person2.jpg")
        this.image = loadImage("images/person3.jpg")
    }

    display(){
        
       
            
        var rand = Math.round(random(1,4));
        if(frameCount%80===0){
             var people = createSprite(random(10,370), random(10,30), 10, 10);
            switch(rand){
                case 1:{ people.addImage(p1img);
                    paper.x=people.x+20
                    paper.y=people.y+100
                    if(people.y>10&&people.y<30){
                        paper.visible=true
                    }
                }
                break;
                case 2:{ people.addImage(p2img);
                    soda.x=people.x+20
                    soda.y=people.y+100
                    if(people.y>10&&people.y<30){
                        soda.visible=true
                    }
                }
                break; 
                case 3:{ people.addImage(p3img);
                    paper.x=people.x+20
                    paper.y=people.y+100
                    if(people.y>10&&people.y<30){
                        paper.visible=true
                    }
                }
                break;
                default: break;
            }
            people.scale = random(0.3,0.6)
         
            
        
            var position = Math.round(random(1,2))
            
        
            people.setLifetime = 200;
            peoplegroup.add(people)
            
            if(position===1){
                people.y=height
                people.velocityY = -5
            }
            else{
              if(position===2){
                people.y=0
                people.velocityY = 5
        
              }
            }
        }
    }
}
