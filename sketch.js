var database;
var form;
var game;
var player;
var gameState = 0;
var playerCount;
var allPlayers;
var car1,car2,car3,car4,  car1Image, car2Image, car3Image, car4Image
var cars;
var groundImage, trackImage;

function preload(){
    car1Image = loadImage("images/car1.png")
    car2Image = loadImage("images/car2.png")
    car3Image = loadImage("images/car3.png")
    car4Image = loadImage("images/car4.png")
    trackImage = loadImage("images/track.jpg")
    groundImage = loadImage("images/ground.png")
    
}
function setup(){
    createCanvas(displayWidth-30,displayHeight-40);
    database = firebase.database()
    game = new Game();
    game.getState();
    game.start();

}

function draw(){
    background("white");

    if(playerCount === 4){
        game.update(1)
    }

    if(gameState === 1){
        clear()
        game.play()
    }
    if(gameState === 2){
        game.end()
    }
}

