import { TextureCache } from '@pixi/utils';
import { AnimatedSprite, Application, Graphics, Loader, Sprite, Texture } from 'pixi.js';

const app = new Application({
  width: innerWidth,
  height: innerHeight,
});

document.body.appendChild(app.view);

const loader = Loader.shared;

loader
  .add('img', './assets/1.png')
  .load((l) => {
    const sprite = Sprite.from('img');
    app.stage.addChild(sprite);
    sprite.position.set(500);

    app.ticker.add(() => {
      sprite.x += 1;
      sprite.rotation += 0.01;
    });
  });