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

    start(){
        if(gameState === 0){
            //create a player and get player info
            player = new Player();
            player.getCount();
            
            //display the form page
            form = new Form();
            form.display();
            
        }

    }

}