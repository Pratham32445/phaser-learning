import Phaser from "phaser";

export class MainScene extends Phaser.Scene {
  private player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody | null;
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys | null;
  constructor() {
    super("MainScene");
    this.player = null;
    this.cursors = null;
  }
  preload() {
    this.load.image("player", "/man.png");
    this.load.image("tiles", "/playground.jpg");
    this.load.tilemapTiledJSON("map", "/playground.jpg");
  }
  create() {
    const map = this.make.tilemap({ key: "map" });
    const tileset = map.addTilesetImage("tileset_name", "tiles");
    map.createLayer("Ground", tileset!);

    this.player = this.physics.add.sprite(400, 300, "player");
    this.player.setCollideWorldBounds(true);
    if (this.input.keyboard)
      this.cursors = this.input.keyboard.createCursorKeys()!;
    else this.cursors = null;
  }
  update() {
    const speed = 200;
    this.player!.setVelocity(0);

    if (this.cursors?.left.isDown) {
      this.player?.setVelocityX(-speed);
    } else if (this.cursors && this.player && this.cursors.right.isDown) {
      this.player.setVelocityX(speed);
    }

    if (this.cursors?.up.isDown) {
      this.player?.setVelocityY(-speed);
    } else if (this.cursors?.down.isDown) {
      this.player?.setVelocityY(speed);
    }
  }
}
