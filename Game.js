class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

   
    athlete1 = createSprite(100,200);
    athlete1.addImage("athlete1",athlete1_img);
    athlete1.scale = 1;
    athlete1.setCollider("rectangle", 0, 0)
    athlete1.debug = true;
   
   
    athlete2 = createSprite(300,200);
    athlete2.addImage("athlete1",athlete2_img);
    athlete2.scale = 1;
    athlete2.setCollider("rectangle", 0, 0)
    athlete2.debug = true;
   

    athlete3 = createSprite(500,200);
    athlete3.addImage("athlete1",athlete3_img);
    athlete3.scale = 1;
    athlete3.setCollider("rectangle", 0, 0);
    athlete3.debug = true;
   

    athlete4 = createSprite(700,200);
    athlete4.addImage("athlete1",athlete4_img);
    athlete4.scale = 1;
    athlete4.setCollider("rectangle", 0, 0);
    athlete4.debug = true;
   

    athletes = [athlete1, athlete2, athlete3, athlete4];
   // hurdles = new Hurdle(250,10,60);
    
   // hurdles.addImage("hurdlesa",hurdles_img);
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getathletesAtEnd();
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y ;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

         //position the cars a little away from each other in x direction
         x = x + 200;
         //use data form the database to display the cars in y direction
         y = displayHeight - allPlayers[plr].distance;
         athletes[index-1].x = x;
         athletes[index-1].y = y;
        // console.log(index, player.index)
 
        

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          athletes[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = athletes[index-1].y;
        }
        if(keyIsDown(RIGHT_ARROW) ){
          athletes[idex-1].x -=5;
          player.update();
        }
      
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

   
   
 if(player.distance > 3860){
      gameState = 2;
      player.rank += 1;
      Player.updateathletesAtEnd(player.rank);
    }
    spawnObstacles1();
    spawnObstacles2();
    spawnObstacles3();
    spawnObstacles4();

    drawSprites();
  
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }
}

  function spawnObstacles1() {
    var i = 0;
   
   
    if (frameCount % 360 === 0) {
        i = i + 1000
        var obstacle = createSprite(380,10);

        obstacle.velocityY = -2;
        obstacle.addImage(hurdle);

        obstacle.scale = 0.80;
        obstacle.lifetime = 800;
        obstacle.setCollider("rectangle", -10, 0, 90, 150);
        obstacle.debug = true;

   
    }
}

function spawnObstacles2() {
  var i = 0;
  if (frameCount % 360 === 0) {
      i = i + 800
      var obstacle = createSprite(560, 10);

      obstacle.velocityY = -2;
      obstacle.addImage(hurdle);

      obstacle.scale = 0.80;
      obstacle.lifetime = 800;
      obstacle.setCollider("rectangle", -10, 0, 90, 150);
      obstacle.debug = true;
     
  }
}

function spawnObstacles3() {
  var i = 0;
  if (frameCount % 360 === 0) {
      i = i + 1000
      var obstacle = createSprite(800, 10);

      obstacle.velocityY = -2;
      obstacle.addImage(hurdle);

      obstacle.scale = 0.80;
      obstacle.lifetime = 800;
      obstacle.setCollider("rectangle", -10, 0, 90, 150);
      obstacle.debug = true;
     
  }
}

function spawnObstacles4() {
  var i = 0;
  if (frameCount % 360 === 0) {
      i = i + 1000
      var obstacle = createSprite(1000, 10);

      obstacle.velocityY = -2;
      obstacle.addImage(hurdle);

      obstacle.scale = 0.80;
      obstacle.lifetime = 800;
      obstacle.setCollider("rectangle", -10, 0, 90, 150);
      obstacle.debug = true;
     
  }
}




