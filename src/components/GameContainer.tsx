import { useEffect } from "react";
import Phaser from "phaser"
import config from "../phaser/gameConfig";

const GameContainer = () => {
  useEffect(() => {
    const game = new Phaser.Game(config);
    return () => {
        game.destroy(true);
    }
  }, []);

  return <div id="phaser-game"></div>;
};

export default GameContainer;
