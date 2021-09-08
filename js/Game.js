class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        });
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })
    
    }


    async start(){
        if(gameState === 0){
            //create a player and get player info
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value")
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val()
                player.getCount()
            }
            //display the form page
            form = new Form();
            form.display();
            
        }
        car1 = createSprite(380,200);
        car1.addImage("car1",car1Image)
        car2 = createSprite(580,200);
        car2.addImage("car2",car2Image)
        car3 = createSprite(780,200);
        car3.addImage("car3",car3Image)
        car4 = createSprite(880,200);
        car4.addImage("car4",car4Image)
        cars = [car1 , car2 , car3 , car4];

    }
    
    play(){
        form.hide()
        textSize(30)
        text("Game Starts", 120, 100);
        Player.getPlayerInfo();

        if(allPlayers !== undefined){
            image(trackImage, 0, -displayHeight*4, displayWidth, displayHeight*5)

            //var displayPosition = 130;
            var index = 0;
            var x = 200;
            var y = 0;
            
            
            for(var plr in allPlayers){
                index = index+1;
                x = x+200;
                y = displayHeight-allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;

                if (index === player.index){
                    cars[index-1].shapeColor = "red"
                    camera.position.x = displayWidth/2
                    camera.position.y = cars[index-1].y
                }
                // if(plr === "player" + player.index){
                //     fill("red")
                // }
                // else{
                //     fill("black")
                // }
                // displayPosition = displayPosition + 20;
                // textSize(20)
                // text(allPlayers[plr].name + " : " + allPlayers[plr].distance, 120, displayPosition);
            }
            }
    

            

            if(keyIsDown(UP_ARROW) && player.index !== null){
                player.distance = player.distance + 50;
                player.update();
            }
            if(player.distance >= 4150){
                gameState = 2;
            }

            drawSprites()
        }

        end(){
            console.log("game ended")
        }


    

}