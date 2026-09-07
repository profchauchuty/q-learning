class AIController {
    constructor(target) {
        this.target = target

        // this.q = {
        //     'FAR_LEFT': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'FAR_CENTER': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'FAR_RIGHT': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'NEAR_LEFT': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'NEAR_CENTER': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'NEAR_RIGHT': { LEFT: 0, STOP: 0, RIGHT: 0 },
        // }

        // this.q = {
        //     LEFT: { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     CENTER: { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     RIGHT: { LEFT: 0, STOP: 0, RIGHT: 0 },
        // }

        // this.q = {
        //     // --- FAR (Longe) ---
        //     'FAR_LEFT_GOING_LEFT': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'FAR_CENTER_GOING_LEFT': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'FAR_RIGHT_GOING_LEFT': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'FAR_LEFT_GOING_RIGHT': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'FAR_CENTER_GOING_RIGHT': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'FAR_RIGHT_GOING_RIGHT': { LEFT: 0, STOP: 0, RIGHT: 0 },

        //     // --- NEAR (Perto) ---
        //     'NEAR_LEFT_GOING_LEFT': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'NEAR_CENTER_GOING_LEFT': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'NEAR_RIGHT_GOING_LEFT': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'NEAR_LEFT_GOING_RIGHT': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'NEAR_CENTER_GOING_RIGHT': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'NEAR_RIGHT_GOING_RIGHT': { LEFT: 0, STOP: 0, RIGHT: 0 },
        // };

        // this.q = {
        //     // Distância Vertical(2): FAR | NEAR
        //     // Posição Horizontal Relativa(3): LEFT | CENTER | RIGHT
        //     // Direção Horizontal da Bola(2): GOING_LEFT | GOING_RIGHT
        //     // Sentido Vertical da Bola(2): MOVING_DOWN | MOVING_UP

        //     // --- FAR (Longe) ---
        //     'FAR_LEFT_GOING_LEFT_MOVING_DOWN': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'FAR_CENTER_GOING_LEFT_MOVING_DOWN': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'FAR_RIGHT_GOING_LEFT_MOVING_DOWN': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'FAR_LEFT_GOING_RIGHT_MOVING_DOWN': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'FAR_CENTER_GOING_RIGHT_MOVING_DOWN': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'FAR_RIGHT_GOING_RIGHT_MOVING_DOWN': { LEFT: 0, STOP: 0, RIGHT: 0 },

        //     // --- NEAR (Perto) ---
        //     'NEAR_LEFT_GOING_LEFT_MOVING_DOWN': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'NEAR_CENTER_GOING_LEFT_MOVING_DOWN': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'NEAR_RIGHT_GOING_LEFT_MOVING_DOWN': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'NEAR_LEFT_GOING_RIGHT_MOVING_DOWN': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'NEAR_CENTER_GOING_RIGHT_MOVING_DOWN': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'NEAR_RIGHT_GOING_RIGHT_MOVING_DOWN': { LEFT: 0, STOP: 0, RIGHT: 0 },

        //     // ==========================================
        //     // BOLA SUBINDO / SE AFASTANDO (MOVING_UP)
        //     // ==========================================

        //     // --- FAR (Longe) ---
        //     'FAR_LEFT_GOING_LEFT_MOVING_UP': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'FAR_CENTER_GOING_LEFT_MOVING_UP': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'FAR_RIGHT_GOING_LEFT_MOVING_UP': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'FAR_LEFT_GOING_RIGHT_MOVING_UP': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'FAR_CENTER_GOING_RIGHT_MOVING_UP': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'FAR_RIGHT_GOING_RIGHT_MOVING_UP': { LEFT: 0, STOP: 0, RIGHT: 0 },

        //     // --- NEAR (Perto) ---
        //     'NEAR_LEFT_GOING_LEFT_MOVING_UP': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'NEAR_CENTER_GOING_LEFT_MOVING_UP': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'NEAR_RIGHT_GOING_LEFT_MOVING_UP': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'NEAR_LEFT_GOING_RIGHT_MOVING_UP': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'NEAR_CENTER_GOING_RIGHT_MOVING_UP': { LEFT: 0, STOP: 0, RIGHT: 0 },
        //     'NEAR_RIGHT_GOING_RIGHT_MOVING_UP': { LEFT: 0, STOP: 0, RIGHT: 0 },
        // };

        const saved = localStorage.getItem('qtable')

        if (saved) {
            this.q = JSON.parse(saved)
        } else {
            this.q = {
                'FAR_LEFT_GOING_LEFT_MOVING_DOWN': { LEFT: 0, STOP: 0, RIGHT: 0 },
                'FAR_CENTER_GOING_LEFT_MOVING_DOWN': { LEFT: 0, STOP: 0, RIGHT: 0 },
                'FAR_RIGHT_GOING_LEFT_MOVING_DOWN': { LEFT: 0, STOP: 0, RIGHT: 0 },
                'FAR_LEFT_GOING_RIGHT_MOVING_DOWN': { LEFT: 0, STOP: 0, RIGHT: 0 },
                'FAR_CENTER_GOING_RIGHT_MOVING_DOWN': { LEFT: 0, STOP: 0, RIGHT: 0 },
                'FAR_RIGHT_GOING_RIGHT_MOVING_DOWN': { LEFT: 0, STOP: 0, RIGHT: 0 },
                'NEAR_LEFT_GOING_LEFT_MOVING_DOWN': { LEFT: 0, STOP: 0, RIGHT: 0 },
                'NEAR_CENTER_GOING_LEFT_MOVING_DOWN': { LEFT: 0, STOP: 0, RIGHT: 0 },
                'NEAR_RIGHT_GOING_LEFT_MOVING_DOWN': { LEFT: 0, STOP: 0, RIGHT: 0 },
                'NEAR_LEFT_GOING_RIGHT_MOVING_DOWN': { LEFT: 0, STOP: 0, RIGHT: 0 },
                'NEAR_CENTER_GOING_RIGHT_MOVING_DOWN': { LEFT: 0, STOP: 0, RIGHT: 0 },
                'NEAR_RIGHT_GOING_RIGHT_MOVING_DOWN': { LEFT: 0, STOP: 0, RIGHT: 0 },
                'FAR_LEFT_GOING_LEFT_MOVING_UP': { LEFT: 0, STOP: 0, RIGHT: 0 },
                'FAR_CENTER_GOING_LEFT_MOVING_UP': { LEFT: 0, STOP: 0, RIGHT: 0 },
                'FAR_RIGHT_GOING_LEFT_MOVING_UP': { LEFT: 0, STOP: 0, RIGHT: 0 },
                'FAR_LEFT_GOING_RIGHT_MOVING_UP': { LEFT: 0, STOP: 0, RIGHT: 0 },
                'FAR_CENTER_GOING_RIGHT_MOVING_UP': { LEFT: 0, STOP: 0, RIGHT: 0 },
                'FAR_RIGHT_GOING_RIGHT_MOVING_UP': { LEFT: 0, STOP: 0, RIGHT: 0 },
                'NEAR_LEFT_GOING_LEFT_MOVING_UP': { LEFT: 0, STOP: 0, RIGHT: 0 },
                'NEAR_CENTER_GOING_LEFT_MOVING_UP': { LEFT: 0, STOP: 0, RIGHT: 0 },
                'NEAR_RIGHT_GOING_LEFT_MOVING_UP': { LEFT: 0, STOP: 0, RIGHT: 0 },
                'NEAR_LEFT_GOING_RIGHT_MOVING_UP': { LEFT: 0, STOP: 0, RIGHT: 0 },
                'NEAR_CENTER_GOING_RIGHT_MOVING_UP': { LEFT: 0, STOP: 0, RIGHT: 0 },
                'NEAR_RIGHT_GOING_RIGHT_MOVING_UP': { LEFT: 0, STOP: 0, RIGHT: 0 },
            }
        }

        this.alpha = 0.1
        this.gamma = 0.9
        this.epsilon = 0.01

        this.previousState = null
        this.previousAction = null

        this.hit = 0
        this.maxHit = 0
        this.round = 0
    }

    save() {
        localStorage.setItem('qtable', JSON.stringify(this.q))
    }

    getState(ball) {
        let center = this.target.posX + this.target.w / 2;
        let deadZone = 10;

        // 1. Distância Vertical
        let distY = ball.posY > height * 0.5 ? 'NEAR' : 'FAR';

        // 2. Posição Horizontal Relativa
        let posX = 'CENTER';
        if (ball.posX < center - deadZone) posX = 'LEFT';
        if (ball.posX > center + deadZone) posX = 'RIGHT';

        // 3. Direção Horizontal da Bola
        let dirX = ball.speedX > 0 ? 'GOING_RIGHT' : 'GOING_LEFT';

        // 4. Sentido Vertical da Bola
        let moveY = ball.speedY > 0 ? 'MOVING_DOWN' : 'MOVING_UP';

        // Retorna a chave de 4 parâmetros (Ex: "NEAR_LEFT_GOING_RIGHT_MOVING_DOWN")
        return `${distY}_${posX}_${dirX}_${moveY}`;
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
        textSize(12)
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

            this.save()
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