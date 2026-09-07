class Collision {
    constructor(ball, player) {
        this.ball = ball;
        this.player = player;
        this.event = null;
    }

    update() {
        const closestX = constrain(this.ball.posX, this.player.posX, this.player.posX + this.player.w);
        const closestY = constrain(this.ball.posY, this.player.posY, this.player.posY + this.player.h);

        const dx = this.ball.posX - closestX;
        const dy = this.ball.posY - closestY;

        const raioReal = this.ball.radius / 2;

        if (dx * dx + dy * dy <= raioReal * raioReal) {
            this.ball.posY = this.player.posY - raioReal;
            this.ball.speedX = random([-8, -6, 6, 8]) * GAME_SPEED;
            this.ball.speedY = -Math.abs(this.ball.speedY);
            this.event = 'HIT';
            return;
        }

        if (this.ball.posY + raioReal >= height) {
            this.ball.reset();
            this.event = 'MISS';
        }
    }

    consumeEvent() {
        const event = this.event;
        this.event = null;
        return event;
    }
}