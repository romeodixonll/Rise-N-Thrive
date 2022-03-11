import Phaser from 'phaser';
import React from 'react'
import ReactDOM from 'react-dom'
import { defineCustomElements as defineIonPhaser } from '@ion-phaser/core/loader'
// import { IonPhaser } from '@ion-phaser/core'
import penguinImg from '../../../assets/images/penguin-images/lil-penguin-idle.png';
import krillImg from '../../../assets/images/penguin-images/krill.png';

// const PenguinGame = () => {
    let gameScene = new Phaser.Scene('Game');

    // Radius of iceberg
    let radius = 160;
    
    // Keep track of players score
    let score = 0;
    
    // The penguin has a max acceleration dependant on the size of the penguin
    let maxAcceleration = 150;
    let maxScale = 10;
    let accelerationInterval = 5;
    let intervalScale = 5;
    let penguinScale = 1;
    
    let gameW;
    let gameH;
    let keyUp;
    let keyDown;
    let keyRight;
    let keyLeft;
    let penguin;
    let pAcceleration;
    
    gameScene.preload = function() {
        this.load.image('penguin', "../../../assets/images/penguin-images/lil-penguin-idle.png");
        this.load.image('krill', "../../../assets/images/penguin-images/lil-penguin-idle.png");
    }
    
    gameScene.create = function() {
    
        // Get width and height of scene
        gameW = this.sys.game.config.width;
        gameH = this.sys.game.config.height;
    
        this.add.circle(this.gameW/2, this.gameH/2, 160, 0xaeb5f3)
        this.krill = gameScene.physics.add.group();
        addKrill();
    
        // Load penguin in the middle of screen
        this.player = this.physics.add.sprite(gameW/2, gameH/2, 'penguin').setScale(1, 1);
    
        keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    
        penguin = this.player;
        pAcceleration = penguin.body.acceleration;
        penguin.setCollideWorldBounds(true);
        // penguin.body.setAllowDrag(true);
        // penguin.body.setDrag(100,0);
    
        this.physics.add.collider(penguin, this.krill, eatKrill);
    }
    
    gameScene.update = function() {
        // Check if the penguin's distance from the center of the circle is greater than the circle radius... aka is the penguin still on the iceberg???
        let penguinDist = Math.sqrt(Math.pow((penguin.x - gameW/2), 2) + Math.pow((penguin.y - gameH/2), 2))
        
        if(penguinDist > radius){
            gameOver();
        }
    
        // Only works with keyboard right now...
        // TODO: Add mobile 'analog stick type button for mobile'
    
        if(keyDown.isDown || keyUp.isDown || keyRight.isDown || keyLeft.isDown){
            if(keyDown.isDown){
                if(pAcceleration.y < maxAcceleration){
                    pAcceleration.y = pAcceleration.y + accelerationInterval;
                }
            }
            if(keyUp.isDown){
                if(pAcceleration.y > -maxAcceleration){
                    pAcceleration.y = pAcceleration.y - accelerationInterval;
                }
            }
            if(keyRight.isDown){
                if(pAcceleration.x < maxAcceleration){
                    pAcceleration.x = pAcceleration.x + accelerationInterval;
                }
            }
            if(keyLeft.isDown){
                if(pAcceleration.x > - maxAcceleration){
                    pAcceleration.x = pAcceleration.x - accelerationInterval;
                }
            }
        }
        else{
            penguin.setAcceleration(0,0)
        }
    }
    
    function eatKrill(){
        gameScene.krill.clear(true);
        ++score;
        //
        penguinScale = penguinScale + 0.1;
        penguin.setScale(penguinScale, penguinScale);
        maxAcceleration = maxAcceleration + maxScale;
        accelerationInterval = accelerationInterval + intervalScale;
        console.log(score);
        addKrill();
    }
    
    function addKrill(x, y){
        // Random number between 0 and 1
        let random = Math.floor(Math.random()*1000)/1000;
        let r = radius*Math.sqrt(random);
        let theta = random * 2 * 3.1415926;
    
        // Spawn the krill on a random x position of the circle
        let xSpawn = gameW/2 + r*Math.cos(theta);
        let ySpawn = gameH/2 + r*Math.sin(theta);
    
        let newKrill = gameScene.physics.add.sprite(xSpawn, ySpawn, 'krill');
        gameScene.krill.add(newKrill);
    }
    
    function gameOver(){
        console.log('Your penguin has fallen off the iceberg!!!');
        console.log('Don\'t worry, you fed your penguin ' + score + ' krill!');
    
        // Reset game score
        score = 0;
    
        // Reset all penguin characteristics
        penguin.setAcceleration(0, 0);
        penguin.setVelocity(0,0);
    
        maxAcceleration = 150;
        maxScale = 10;
    
        accelerationInterval = 5;
        intervalScale = 5;
    
        penguinScale = 1;
        penguin.setScale(penguinScale, penguinScale);
    
        // Place penguin back into the middle of the iceberg
        penguin.x = gameW/2;
        penguin.y = gameH/2;
    }
    
    let config = {
        type: Phaser.AUTO,
        width: 640,
        height: 360,
        parent: 'game-content',
        backgroundColor: "rgb(61, 79, 233)",
        scene: gameScene,
        physics:{
            default:'arcade',
            arcade:{
                gravity:{ y:0 },
                checkCollision: {
                    up: true,
                    down: true,
                    left: true,
                    right: true
                },
            }
        },
    };
    
    let game = new Phaser.Game(config)
// }
export default game
