window.addEventListener("load", function () {
    let game = new Phaser.Game({
      title: "PA_DateW_Girlfriend",
      width: 1080,
      height: 1920,
      type: Phaser.AUTO,
      parent: "game",
      scale: {
        mode: Phaser.Scale.ENVELOP, 
        // mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
    //   scene: {
    //     preload: preload,
    //     create: create,
    //     update: update
    //   }
    });
  
    game.scene.add("Boot", Boot, true);
  });

  class Boot extends Phaser.Scene {
    preload() {
      //background
      this.load.image('bg', 'assets/images/1080x1920_PA_en_DateWGirlfriend_BG1.jpg');
      this.load.image('bgDefault', 'assets/images/1080x1920_PA_en_DateWGirlfriend_OutfitDefault.png');

      this.load.image('bg1', 'assets/images/1080x1920_PA_en_DateWGirlfriend_BG2.1.jpg');
      this.load.image('bg2', 'assets/images/1080x1920_PA_en_DateWGirlfriend_BG2.2.jpg');
      this.load.image('bg3', 'assets/images/1080x1920_PA_en_DateWGirlfriend_BG2.3.jpg');
      this.load.image('bg4', 'assets/images/1080x1920_PA_en_DateWGirlfriend_BG2.4.jpg');
      this.load.image('bg5', 'assets/images/1080x1920_PA_en_DateWGirlfriend_BG2.5.jpg');

      //text 
      this.load.image('textGirl', 'assets/images/1080x1920_PA_en_DateWGirlfriend_BubbleGirl.png');
      this.load.image('shadow', 'assets/images/1080x1920_PA_en_DateWGirlfriend_Shadow.png');
      this.load.image('textFriend', 'assets/images/1080x1920_PA_en_DateWGirlfriend_BubbleGirlfriend.png');
      this.load.image('fail', 'assets/images/1080x1920_PA_en_DateWGirlfriend_StampFail.png');
      

      //buttons
      this.load.image('btnStart', 'assets/images/1080x1920_PA_en_DateWGirlfriend_ButtonStart.png');
      this.load.image('hand', 'assets/images/1080x1920_PA_en_DateWGirlfriend_Hand.png');
      this.load.image('again', 'assets/images/1080x1920_PA_en_DateWGirlfriend_ButtonTryAgain.png');
      

      //buttons grey
      this.load.image('btnGrey1', 'assets/images/1080x1920_PA_en_DateWGirlfriend_Button1Grey.png');
      this.load.image('btnGrey2', 'assets/images/1080x1920_PA_en_DateWGirlfriend_Button2Grey.png');
      this.load.image('btnGrey3', 'assets/images/1080x1920_PA_en_DateWGirlfriend_Button3Grey.png');
      this.load.image('btnGrey4', 'assets/images/1080x1920_PA_en_DateWGirlfriend_Button4Grey.png');
      this.load.image('btnGrey5', 'assets/images/1080x1920_PA_en_DateWGirlfriend_Button5Grey.png');

      this.load.image('okGrey', 'assets/images/1080x1920_PA_en_DateWGirlfriend_ButtonOkGrey.png');

      //buttons green
      this.load.image('btnGreen1', 'assets/images/1080x1920_PA_en_DateWGirlfriend_Button1Green.png');
      this.load.image('btnGreen2', 'assets/images/1080x1920_PA_en_DateWGirlfriend_Button2Green.png');
      this.load.image('btnGreen3', 'assets/images/1080x1920_PA_en_DateWGirlfriend_Button3Green.png');
      this.load.image('btnGreen4', 'assets/images/1080x1920_PA_en_DateWGirlfriend_Button4Green.png');
      this.load.image('btnGreen5', 'assets/images/1080x1920_PA_en_DateWGirlfriend_Button5Green.png');

      this.load.image('okYellow', 'assets/images/1080x1920_PA_en_DateWGirlfriend_ButtonOkYellow.png');

      //outfits
      this.load.image('outfit1', 'assets/images/1080x1920_PA_en_DateWGirlfriend_Outfit1.png');
      this.load.image('outfit2', 'assets/images/1080x1920_PA_en_DateWGirlfriend_Outfit2.png');
      this.load.image('outfit3', 'assets/images/1080x1920_PA_en_DateWGirlfriend_Outfit3.png');
      this.load.image('outfit4', 'assets/images/1080x1920_PA_en_DateWGirlfriend_Outfit4.png');
      this.load.image('outfit5', 'assets/images/1080x1920_PA_en_DateWGirlfriend_Outfit5.png');

      //emoji
      this.load.image('emoji1', 'assets/images/1080x1920_PA_en_DateWGirlfriend_EmojiOutfit1.png');
      this.load.image('emoji2', 'assets/images/1080x1920_PA_en_DateWGirlfriend_EmojiOutfit2.png');
      this.load.image('emoji3', 'assets/images/1080x1920_PA_en_DateWGirlfriend_EmojiOutfit3.png');
      this.load.image('emoji4', 'assets/images/1080x1920_PA_en_DateWGirlfriend_EmojiOutfit4.png');
      this.load.image('emoji5', 'assets/images/1080x1920_PA_en_DateWGirlfriend_EmojiOutfit5.png');

      //audio
      this.load.audio('soundBg', 'assets/audio/1080x1920_PA_en_DateWGirlfriend_MusicBG.mp3');
      this.load.audio('soundBtn', 'assets/audio/1080x1920_PA_en_DateWGirlfriend_SoundButton.mp3');
      this.load.audio('soundCry', 'assets/audio/1080x1920_PA_en_DateWGirlfriend_SoundCry.mp3');


    }

    create() {
        this.scene.add("Scene1", Scene1, true);

        let soundBg = this.sound.add('soundBg');
        soundBg.play();
      }
    
      update() {}
}