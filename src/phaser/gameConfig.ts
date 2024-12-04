import { MainScene } from "./MainScene";

const config = {
    type: Phaser.AUTO,
    width: 500,
    height: 500,
    backgroundColor: "#87CEEB",
    physics: {
      default: "arcade",
      arcade: {
        gravity: { x: 0, y: 0 }, // Add the 'x' property here
        debug: true,
      },
    },
    scene: [MainScene],
  };
  
  export default config;