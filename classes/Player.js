class Player {
    constructor() {
        this.h = 10
        this.w = 60
        this.posX = width / 2 - this.w / 2
        this.posY = height - 20
        this.speed = 6 * GAME_SPEED
        this.radius = 10
    }

    update() {
        fill('#e92d2d')
        rect(this.posX, height - 20, this.w, this.h, this.radius)
        noStroke()
    }
}

