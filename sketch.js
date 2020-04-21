var canvas, backgroundImage;
var hurdles_img;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var hurdles;

var form, player, game;

var athletes, athlete1,athlete2,athlete3,athlete4;
var hurdle,ground;

var track, athlete1_img, athlete2_img, athlete3_img, athlete4_img;

function preload(){
  track = loadImage("track.png");
  athlete1_img = loadImage("boy.png");
  athlete2_img = loadImage("boy2.png");
  athlete3_img = loadImage("athlete1.jpg");
  athlete4_img = loadImage("boy2.png");
  ground = loadImage("ground.png");
  hurdle = loadImage("hurdl.png");



}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
