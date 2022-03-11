import Phaser from 'phaser';

export default class penguinScene extends Phaser.scene {
    constructor() {
        // Radius of iceberg
        this.radius = 160;
                
        // Keep track of players score
        this.score = 0;

        // The penguin has a max acceleration dependant on the size of the penguin
        this.maxAcceleration = 150;
        this.maxScale = 10;
        this.accelerationInterval = 5;
        this.intervalScale = 5;
        this.penguinScale = 1;

        // let gameW;
        // let gameH;
        // let keyUp;
        // let keyDown;
        // let keyRight;
        // let keyLeft;
        // let penguin;
        // let pAcceleration;
    } 

    preload = function() {
        this.load.image('penguin', "../../../assets/images/penguin-images/lil-penguin-idle.png");
        this.load.image('krill', "../../../assets/images/penguin-images/krill.png");
    }
    
    create = function() {
    
        // Get width and height of scene
        this.gameW = this.sys.game.config.width;
        this.gameH = this.sys.game.config.height;
    
        this.add.circle(this.gameW/2, this.gameH/2, 160, 0xaeb5f3)
        this.krill = this.physics.add.group();
        this.addKrill();
    
        // Load penguin in the middle of screen
        this.player = this.physics.add.sprite(this.gameW/2, this.gameH/2, 'penguin').setScale(1, 1);
    
        this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    
        this.pAcceleration = this.player.body.acceleration;
        this.player.setCollideWorldBounds(true);
        // penguin.body.setAllowDrag(true);
        // penguin.body.setDrag(100,0);
    
        this.physics.add.collider(this.player, this.krill, this.eatKrill);
    }
    
    update = function() {
        // Check if the penguin's distance from the center of the circle is greater than the circle radius... aka is the penguin still on the iceberg???
        let penguinDist = Math.sqrt(Math.pow((this.player.x - this.gameW/2), 2) + Math.pow((this.player.y - this.gameH/2), 2))
        
        if(this.penguinDist > this.radius){
            this.gameOver();
        }
    
        // Only works with keyboard right now...
        // TODO: Add mobile 'analog stick type button for mobile'
    
        if(this.keyDown.isDown || this.keyUp.isDown || this.keyRight.isDown || this.keyLeft.isDown){
            if(this.keyDown.isDown){
                if(this.pAcceleration.y < this.maxAcceleration){
                    this.pAcceleration.y = this.pAcceleration.y + this.accelerationInterval;
                }
            }
            if(this.keyUp.isDown){
                if(this.pAcceleration.y > -this.maxAcceleration){
                    this.pAcceleration.y = this.pAcceleration.y - this.accelerationInterval;
                }
            }
            if(this.keyRight.isDown){
                if(this.pAcceleration.x < this.maxAcceleration){
                    this.pAcceleration.x = this.pAcceleration.x + this.accelerationInterval;
                }
            }
            if(this.keyLeft.isDown){
                if(this.pAcceleration.x > - this.maxAcceleration){
                    this.pAcceleration.x = this.pAcceleration.x - this.accelerationInterval;
                }
            }
        }
        else{
            this.player.setAcceleration(0,0)
        }
    }
    
    eatKrill(){
        this.krill.clear(true);
        ++this.score;
        //
        this.penguinScale = this.penguinScale + 0.1;
        this.player.setScale(this.penguinScale, this.penguinScale);
        this.maxAcceleration = this.maxAcceleration + this.maxScale;
        this.accelerationInterval = this.accelerationInterval + this.intervalScale;
        console.log(this.score);
        this.addKrill();
    }
    
    addKrill(x, y){
        // Random number between 0 and 1
        let random = Math.floor(Math.random()*1000)/1000;
        let r = this.radius*Math.sqrt(random);
        let theta = random * 2 * 3.1415926;
    
        // Spawn the krill on a random x position of the circle
        let xSpawn = this.gameW/2 + r*Math.cos(theta);
        let ySpawn = this.gameH/2 + r*Math.sin(theta);
    
        let newKrill = this.physics.add.sprite(this.xSpawn, this.ySpawn, 'krill');
        this.krill.add(newKrill);
    }
    
    gameOver(){
        console.log('Your penguin has fallen off the iceberg!!!');
        console.log('Don\'t worry, you fed your penguin ' + this.score + ' krill!');
    
        // Reset game score
        this.score = 0;
    
        // Reset all penguin characteristics
        this.player.setAcceleration(0, 0);
        this.player.setVelocity(0,0);
    
        this.maxAcceleration = 150;
        this.maxScale = 10;
    
        this.accelerationInterval = 5;
        this.intervalScale = 5;
    
        this.penguinScale = 1;
        this.player.setScale(this.penguinScale, this.penguinScale);
    
        // Place penguin back into the middle of the iceberg
        this.player.x = this.gameW/2;
        this.player.y = this.gameH/2;
    }
}