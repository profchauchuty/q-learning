class Controller {
    constructor(target) {
        this.target = target
    }

    update() {

        if (keyIsDown('A') || keyIsDown('a')) {
            if (this.target.posX < 0) return
            this.target.posX -= this.target.speed
        }

        if (keyIsDown('D') || keyIsDown('d')) {
            if (this.target.posX > width - this.target.w) return
            this.target.posX += this.target.speed
        }
    }
}