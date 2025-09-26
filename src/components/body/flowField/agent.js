export default class Agent {
    weight = 10

    constructor(width, height, p) {
        this.p = p  // tieni p come riferimento

        let x = p.random(0, width - 1)
        let y = p.random(0, height - 1)
        this.pos = p.createVector(x, y)
        this.vel = p.createVector(0, 0)
        this.acc = p.createVector(0, 0)
        this.color = p.color(255, 255, 255, 10)

        this.lastPos = p.createVector(x, y)
    }

    update() {
        this.lastPos = this.pos.copy()
        this.vel.add(this.acc)
        this.vel.limit(25)
        this.pos.add(this.vel)
        this.acc.mult(0)
    }

    applyForce(f) {
        let p = this.p
        let force = p.createVector(f.x, f.y)
        force.mult(100)
        force.div(this.weight)
        this.acc.add(force)
    }

    draw() {
        let p = this.p
        p.stroke(this.color)
        p.strokeWeight(2)
        p.line(this.pos.x, this.pos.y, this.lastPos.x, this.lastPos.y)
    }
}
