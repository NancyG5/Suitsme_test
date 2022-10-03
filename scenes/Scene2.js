class Scene2 extends Phaser.Scene {
    constructor() {
      super({ key: "Scene2" });
    }

    bg;
    bgDefault;
    shadow;
    btnGrey1;
    btnGrey2;
    btnGrey3;
    btnGrey4;
    btnGrey5;
    okGrey;
    hand;
    

    btnGreen1;
    btnGreen2;
    btnGreen3;
    btnGreen4;
    btnGreen5;
    okYellow;

    emoji1;
    emoji2;
    emoji3;
    emoji4;
    emoji5;

    count = 0;

    create() {

        this.bg = this.add.image(540, 960, "bg");
        this.bgDefault = this.add.image(540, 960, "bgDefault");
        this.shadow = this.add.image(540, 960, "shadow");
        this.btnGrey1 = this.add.image(1000, 960, "btnGrey1").setInteractive();
        this.btnGrey2 = this.add.image(1000, 960, "btnGrey2").setInteractive();
        this.btnGrey3 = this.add.image(1000, 960, "btnGrey3").setInteractive();
        this.btnGrey4 = this.add.image(1000, 960, "btnGrey4").setInteractive();
        this.btnGrey5 = this.add.image(1000, 960, "btnGrey5").setInteractive();
        this.okGrey = this.add.image(1500, 960, "okGrey");
        

        this.btnGreen1 = this.add.image(540, 960, "btnGreen1").setInteractive().setDepth(0).setAlpha(0);
        this.btnGreen2 = this.add.image(540, 960, "btnGreen2").setInteractive().setAlpha(0);
        this.btnGreen3 = this.add.image(540, 960, "btnGreen3").setInteractive().setAlpha(0);
        this.btnGreen4 = this.add.image(540, 960, "btnGreen4").setInteractive().setAlpha(0);
        this.btnGreen5 = this.add.image(540, 960, "btnGreen5").setInteractive().setAlpha(0);
        this.okYellow = this.add.image(540, 960, "okYellow").setInteractive().setAlpha(0);

        // this.hand = this.add.image(1000, 600, "hand");

        // this.emoji1 = this.add.image(540, 960, "emoji1");
        // this.emoji2 = this.add.image(540, 960, "emoji2");
        // this.emoji3 = this.add.image(540, 960, "emoji3");
        // this.emoji4 = this.add.image(540, 960, "emoji4");
        // this.emoji5 = this.add.image(540, 960, "emoji5");

        // this.btnGrey1.on('pointerdown', () => {this.btnGreen1 = this.add.image(540, 960, "btnGreen1")});
        // this.btnGrey2.on('pointerdown', () => {this.btnGreen2 = this.add.image(540, 960, "btnGreen2")});
        // this.btnGrey3.on('pointerdown', () => {this.btnGreen3 = this.add.image(540, 960, "btnGreen3")});
        // this.btnGrey4.on('pointerdown', () => {this.btnGreen4 = this.add.image(540, 960, "btnGreen4")});
        // this.btnGrey5.on('pointerdown', () => {this.btnGreen5 = this.add.image(540, 960, "btnGreen5")});

        this.hand = this.add.image(1500, 600, "hand").setDepth(2);
        

        // for(let i = 1; i < 5; i++) {
        //     let card = this.add.image(1000, 960, "btnGrey" + i + ".png");
        //     card.index = i;
        //     card.setInteractive();
        // }


        let timelineBtn = this.tweens.timeline({
            ease: 'Power2',
            duration: 500,
    
            tweens: [{
                targets: this.hand,
                x: 1000,
                offset: 3500
            },
            {
                targets: this.btnGrey1,
                x: 540,
                offset: 500
            },
            {
                targets: this.btnGrey2,
                x: 540,
                offset: 1000
            },
            {
                targets: this.btnGrey3,
                x: 540,
                offset: 1500
            },
            {
                targets: this.btnGrey4,
                x: 540,
                offset: 2000
            },
            {
                targets: this.btnGrey5,
                x: 540,
                offset: 2500
            }]
        });

        let tweenOk = this.tweens.add({
            targets: this.okGrey,
            x: 540,
            ease: 'Power1',
            duration: 0,
            delay: 3000
        });

        
        let animateHand = this.tweens.add({
            targets: this.hand,
            y: '+=1000',
            duration: 2000,
            ease: 'Sine.easeInOut',
            yoyo: true,
            delay: 4100,
            // repeat: 1
        });
       

        this.input.on('pointerdown', () => {
            this.btnGrey1 = this.btnGreen1.setAlpha(1);
            this.okGrey = this.okYellow.setAlpha(1).setDepth(1);
            this.outfit1 = this.add.image(540, 960, "outfit1");
            this.bgDefault.visible = false;
            this.shadow.visible = false;
            let animEmoji = this.tweens.add({
                targets: this.emoji1 = this.add.image(540, 2500, "emoji1"),
                y: '-=4000',
                duration: 3000,
                ease: 'Sine.easeInOut',
                // yoyo: true,
                delay: 100,
            });
        });

            

        

        // let animBtn = this.tweens.timeline({
        //     ease: 'Power2',
        //     duration: 0,

        //     tweens: [{
        //         targets: this.btnGreen1,
        //         x: 540,
        //         offset: 5000
        //     },
        //     {
        //         targets: this.btnGreen2,
        //         x: 540,
        //         offset: 6000,
        //         alpha: 1
        //     },
        //     {
        //         targets: this.btnGreen3,
        //         x: 540,
        //         offset: 7000
        //     },
        //     {
        //         targets: this.btnGreen4,
        //         x: 540,
        //         offset: 8000
        //     },
        //     {
        //         targets: this.btnGreen5,
        //         x: 540,
        //         offset: 9000
        //     }]
        // });





        // this.input.on('pointerdown', () => {this.btnGreen1 = this.add.image(540, 960, "btnGreen1")});

    // this.input.on('gameobjectdown', this.cardClick.bind(this));

    }



    // cardClick(pointer) {
    //     // console.log('Hi');
    //     // this.btnGreen1 = this.add.image(540, 960, "btnGreen1");
    //     // this.turnCard(card.index);
       
        
    // }
    
    update() {

        this.count += 1;
        if (this.count === 850) {
            this.scene.add("Scene3", Scene3, true);
          }
    }
    

}



