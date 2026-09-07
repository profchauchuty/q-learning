class Ball {
    constructor() {
        this.radius = 20
        this.posX = width / 2
        this.posY = 20
        this.previousPosX = this.posX
        this.previousPosY = this.posY
        this.speedX = 0
        this.speedY = 5 * GAME_SPEED
    }

    update() {
        this.previousPosX = this.posX
        this.previousPosY = this.posY

        fill('#303')
        circle(this.posX, this.posY, this.radius, 50)

        this.posX += this.speedX
        this.posY += this.speedY

        if (this.posX + this.radius / 2 >= width) {
            this.posX = width - this.radius / 2;
            this.speedX *= -1
        } else if (this.posX - this.radius / 2 <= 0) {
            this.posX = this.radius / 2;
            this.speedX *= -1
        }

        if (this.posY - this.radius / 2 <= 0) {
            this.posY = this.radius / 2;
            if (this.speedX === 0) {
                this.speedX = 3 * GAME_SPEED
            }
            this.speedY *= -1
        }
    }

    reset() {
        this.posX = width / 2
        this.posY = 20
        this.previousPosX = this.posX
        this.previousPosY = this.posY
        this.speedX = 0
        this.speedY = 5 * GAME_SPEED
    }
}