class Scene3 extends Phaser.Scene {
    constructor() {
      super({ key: "Scene3" });
    }

    bg1;
    fail;
    textFriend;
    again;

    create() {
      this.bg1 = this.add.image(540, 960, "bg1");
      this.textFriend = this.add.image(540, 960, "textFriend").setAlpha(0);
      this.fail = this.add.image(540, 960, "fail").setAlpha(0);
      this.again = this.add.sprite(540, 960, "again").setAlpha(0).setInteractive();
      
      let animTextFriend = this.tweens.add({
        targets: this.textFriend,
        delay: 100,
        duration: 1400,
        alpha:1,
        ease: "Cubic",
      });

      let animFail = this.tweens.add({
        targets: this.fail,
        delay: 1000,
        duration: 2000,
        alpha:1,
        ease: "Back"
      });

      let animAgain = this.tweens.add({
        targets: this.again,
        delay: 1000,
        duration: 2000,
        alpha: 1,
        ease: "Power1"
      })


    }

    update() {
      this.again.setInteractive();
      this.again.on("pointerup", function () {
        window.open(
          "https://apps.apple.com/ua/app/suitsme-luxury-dress-up-game/id1536929374?l=eng",
          "_blank"
        );
      });
    }
    
}