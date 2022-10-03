class Scene1 extends Phaser.Scene {
    constructor() {
      super({ key: "Scene1" });
    }

    bg;
    bgDefault;
    textGirl;
    btnStart;
    hand;
    soundBg;
    soundBtn;

    count = 0;

    create() {
        this.bg = this.add.image(540, 960, "bg");
        this.bgDefault = this.add.image(540, 960, "bgDefault");
        this.textGirl = this.add.image(540, 960, "textGirl");
        this.btnStart = this.add.image(540, 960, "btnStart").setInteractive();
        this.hand = this.add.image(900, 1750, "hand");

        this.soundBg = this.sound.add('soundBg');
        this.soundBtn = this.sound.add('soundBtn');



        
        this.checkOriention(
            this.scale.orientation,
            this.bg,
            this.bgDefault,
            this.textGirl,
            this.btnStart,
            this.hand
          );
        this.scale.on("orientationchange", this.checkOriention, this);

      
        let music = {
          mute: false,
          volume: 0.5,
          rate: 1,
          detune: 0,
          seek: 0,
          loop: false,
          delay: 0
        }

        this.soundBg.play(music);

        let animateStart = this.tweens.add({
            targets: this.btnStart,
            angle: '-=2',
            duration: 500,
            ease: 'Sine.easeOut',
            yoyo: true,
            repeat: -1 
        });
    

        let animateHand = this.tweens.add({
            targets: this.hand,
            y: '-=300',
            x: '-=200',
            duration: 2000,
            ease: 'Sine.easeInOut',
            yoyo: true,
            delay: 1000,
            repeat: 2,
        });

      
      



   this.btnStart.on('pointerdown', () => {this.scene.add("Scene2", Scene2, true)});
        
    }
   
   
    
    update() {

    this.count += 1;
  
      this.checkOriention(
        this.scale.orientation,
        this.bg,
        this.bgDefault,
        this.textGirl,
        this.btnStart,
        this.hand
      );
  
      this.scale.on("orientationchange", this.checkOriention, this);
  
    }

        checkOriention(orientation, bg, bgDefault, textGirl, btnStart, hand) {
            if (orientation === Phaser.Scale.PORTRAIT) {
              this.bg.setScale(1);
              this.bg.x = 540;
              this.bg.y = 960;
        
              
              bgDefault?.setScale(1);
              textGirl?.setScale(1);
              btnStart?.setScale(1);
              hand?.setScale(1);
            } else if (orientation === Phaser.Scale.LANDSCAPE) {
              this.bg.setScale(0.3);
              this.bg.x = 540;
              this.bg.y = 960;
        
             
              bgDefault?.setScale(0.3);
              textGirl?.setScale(0.35);
              btnStart?.setScale(0.3);
              hand?.setScale(0.25);
              this.hand.x = 700;
              this.hand.y = 1200;
              
            }
          }
        }
      


