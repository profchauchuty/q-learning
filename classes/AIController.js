class AIController {
    constructor(target) {
        this.target = target

        this.q = {
            'FAR_LEFT': { LEFT: 0, STOP: 0, RIGHT: 0 },
            'FAR_CENTER': { LEFT: 0, STOP: 0, RIGHT: 0 },
            'FAR_RIGHT': { LEFT: 0, STOP: 0, RIGHT: 0 },
            'NEAR_LEFT': { LEFT: 0, STOP: 0, RIGHT: 0 },
            'NEAR_CENTER': { LEFT: 0, STOP: 0, RIGHT: 0 },
            'NEAR_RIGHT': { LEFT: 0, STOP: 0, RIGHT: 0 },
        }

        // this.q = {
        //     LEFT: { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     CENTER: { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     RIGHT: { LEFT: 0, STOP: 0, RIGHT: 0 },
        // }

        this.alpha = 0.1
        this.gamma = 0.9
        this.epsilon = 0.08

        this.previousState = null
        this.previousAction = null

        this.hit = 0
        this.maxHit = 0
        this.round = 0
    }

    getState(ball) {
        let center = this.target.posX + this.target.w / 2;
        let deadZone = 10;

        let distY = ball.posY > height * 0.5 ? 'NEAR' : 'FAR';

        let posX = 'CENTER';
        if (ball.posX < center - deadZone) {
            posX = 'LEFT';
        } else if (ball.posX > center + deadZone) {
            posX = 'RIGHT';
        }

        return `${distY}_${posX}`;
    }

    chooseAction(state) {
        if (random() < this.epsilon) {
            return random([
                'LEFT', 'STOP', 'RIGHT'
            ])
        }

        let values = this.q[state]

        let bestAction = 'STOP'

        if (values.LEFT > values[bestAction]) {
            bestAction = 'LEFT'
        }

        if (values.RIGHT > values[bestAction]) {
            bestAction = 'RIGHT'
        }

        return bestAction
    }

    move(action) {
        if (action === 'LEFT') {
            this.target.posX -= this.target.speed
        }

        if (action === 'RIGHT') {
            this.target.posX += this.target.speed
        }

        this.target.posX = constrain(
            this.target.posX, 0, width - this.target.w
        )
    }

    learn(state, action, reward, nextState) {
        let current = this.q[state][action]

        let next = Math.max(
            this.q[nextState].LEFT,
            this.q[nextState].STOP,
            this.q[nextState].RIGHT
        )

        this.q[state][action] = current + this.alpha * (reward + this.gamma * next - current)
    }

    update(ball, collision) {
        fill('#505050')
        text(JSON.stringify(this.q, null, 2), 10, 20)
        textSize(14)
        text(`HIT: ${this.hit}/${this.maxHit}`, width - 60, 20)
        text(`ROUNDS: ${this.round}`, width - 90, 40)

        let state = this.getState(ball)
        let action = this.chooseAction(state)

        this.move(action)

        let event = collision.consumeEvent()

        let reward = 0

        if (action === 'LEFT' || action === 'RIGHT') {
            reward = -0.1
        }

        if (event === 'HIT') {
            this.hit += 1
            reward = 10
        }

        if (event === 'MISS') {
            this.maxHit = this.hit > this.maxHit ? this.hit : this.maxHit
            this.hit = 0
            this.round += 1
            reward = -10
        }

        if (this.previousState !== null) {
            this.learn(
                this.previousState,
                this.previousAction,
                reward,
                state
            )
        }

        this.previousState = state
        this.previousAction = action
    }
}