class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h3')

    }
    hide(){
        this.input.hide()
        this.greeting.hide()
        this.button.hide()
    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(displayWidth/1.3, 10);

        this.input.position(displayWidth/1.3+15,400);

        this.button.position(displayWidth/1.3+70, displayHeight/2+10);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value()
            playerCount = playerCount + 1;
            player.index = playerCount

            //update the player name and player count
            player.update();
            player.updateCount(playerCount);


            this.greeting.html("Welcome "+ player.name);
            this.greeting.position(displayWidth/1.3+20,displayHeight/2+70)
        })
                 
    }
}