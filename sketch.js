let GAME_SPEED = 1.0

let player
let controller
let ball
let collision
let aiController


function setup() {
    createCanvas(400, 600)
    player = new Player()
    controller = new Controller(player)
    aiController = new AIController(player)
    ball = new Ball()
    collision = new Collision(ball, player)
}

function draw() {
    background('#FFF')
    player.update()
    ball.update()
    // controller.update()
    // AIController
    aiController.update(ball, collision)
    collision.update()
}

