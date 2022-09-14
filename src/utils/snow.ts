import { ISnowflake } from '../models';

class Snow {
  density: number;

  maxHSpeed: number;

  minFallSpeed: number;

  private canvas: HTMLCanvasElement;

  private ctx: CanvasRenderingContext2D;

  particles: ISnowflake[];

  maxParticles: number;

  quit: boolean;

  deviation: number;

  constructor(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');

    this.canvas = canvas;
    this.ctx = ctx as CanvasRenderingContext2D;

    this.density = 1000;
    this.maxHSpeed = 1;
    this.minFallSpeed = 0.5;
    this.particles = [];

    this.maxParticles = 1;
    this.deviation = 5;
    this.quit = false;
  }

  init() {
    this.reset();
    requestAnimationFrame(this.render.bind(this));
    window.addEventListener('resize', this.reset.bind(this));
  }

  reset() {
    this.particles = [];
    this.quit = false;
    this.maxParticles = Math.ceil((this.canvas.width * this.canvas.height) / this.density);

    for (let i = 0; i < this.maxParticles; i += 1) {
      const size = Math.random() * 3;
      this.particles.push({
        positionX: Math.random() * this.canvas.width,
        positionY: Math.random() * this.canvas.height,
        width: size,
        height: size,
        offsetY: this.minFallSpeed + Math.random(),
        offsetX: Math.random() * this.maxHSpeed - this.maxHSpeed / 2,
        fill: '#ffffff',
      });
    }
  }

  render() {
    if (this.quit) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      return;
    }
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach((particle) => {
      const clone = {} as ISnowflake;
      Object.assign(clone, particle);
      clone.positionY += clone.offsetY;
      clone.positionX += clone.offsetX;
      this.ctx.fillStyle = clone.fill;
      this.ctx.fillRect(clone.positionX, clone.positionY, clone.width, clone.height);
      if (
        clone.positionX > this.canvas.width + this.deviation ||
        clone.positionX < -this.deviation ||
        clone.positionY > this.canvas.height
      ) {
        clone.positionX = Math.random() * this.canvas.width;
        clone.positionY = this.deviation * -2;
      }
      Object.assign(particle, clone);
    });
    requestAnimationFrame(this.render.bind(this));
  }

  destroy() {
    this.quit = true;
  }
}

export default Snow;
