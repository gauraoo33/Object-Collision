function setup() {
  createCanvas(800,400);
 shape1= createSprite(400, 200, 50, 50);
 shape2=createSprite(369, 234, 60, 120);

 shape3= createSprite(450, 120, 50, 25)
shape4= createSprite(475, 347, 45, 20)
shape3.velocityY=2
}

function draw() {
  background(215);
    shape1.x=mouseX
    shape1.y=mouseY
    if(collision(shape1, shape2)){
      shape1.shapeColor="red"
      shape2.shapeColor="red" 
    }else{
      shape1.shapeColor="indigo"
      shape2.shapeColor="indigo"  
    }

    if(collision(shape3,shape4)){
      shape3.visible=false
      shape4.visible=false
    } else{
      shape3.visible=true
      shape4.visible=true
    }
  drawSprites();
}

