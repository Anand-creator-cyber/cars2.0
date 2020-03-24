class Game {
  constructor(){}
  
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

        car1 = createSprite(400,600,100,100);
        car2 = createSprite(600,600,100,100);
        car3 = createSprite(800,600,100,100);
        car4 = createSprite(100,600,100,100);

        cars = [car1,car2,car3,car4];
        


      }

  play(){

    form.hide();
    //text("Game Starts",120,200);
    Player.getPlayerinfo();
    if(allPlayers !== undefined){  
     var index = 0;
     var x = 0;
     var y;
      for(var plr in allPlayers){ 

        index+=1;
        x = x+200;
        y = displayHeight - allPlayers[plr].distance;

        cars[index-1].x;
        cars[index-1].y = y;

        if(index === player.index){

          cars[index-1].shapeColor = "red";

          camera.position.x = displayWidth / 2 - 48;
          camera.position.y = cars[index-1];



        }

      
       
        //textSize(15);
         
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position) 
      } 
    }

       if(keyIsDown(UP_ARROW)&&player.index !== null){
          
        player.distance+=50;
        player.update();

       }

          drawSprites();
      }

      
  }

