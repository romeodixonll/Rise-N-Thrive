import Phaser from 'phaser';
import penguinScene from './penguinScene';

const config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    parent: 'game-content',
    backgroundColor: "rgb(61, 79, 233)",
    scene: [penguinScene],
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

export default new Phaser.Game(config)