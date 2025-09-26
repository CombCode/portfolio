import p5, { Vector } from 'p5'
import Agent from './agent.js'


    const s = (p) => {
        let k = 2 // only var to change
        let noiseZoom = 0.005 * k
        let resolution = 16 * k
        let noiseMap = []
        let vectorField = []
        let agents = []
        let agentsNumber = 150
        let w, h

        p.setup = function () {
            p.createCanvas(1920, 1080)
            p.background(100, 182, 212)

            w = p.width
            h = p.height

            // noiseMap and vector field creation
            for (let x = 0; x < w; x++) {
                noiseMap[x] = []
                if (x % resolution == 0 || x == 0) {
                    vectorField[x] = []
                }
                for (let y = 0; y < h; y++) {
                    noiseMap[x][y] = p.noise(x * noiseZoom, y * noiseZoom) * 360
                    if ((x % resolution == 0 && y % resolution == 0) || (x == 0 && y == 0)) {
                        vectorField[x][y] = Vector.fromAngle(p.radians(noiseMap[x][y]))
                    }
                }
            }

            // vector field filling gaps
            let temp = null
            for (let x = 0; x < w; x++) {
                if (vectorField[x]) {
                    for (let y = 0; y < h; y++) {
                        if (vectorField[x][y]) {
                            temp = vectorField[x][y]
                        } else {
                            vectorField[x][y] = temp
                        }
                    }
                }
            }
            temp = null
            for (let y = 0; y < h; y++) {
                for (let x = 0; x < w; x++) {
                    if (!vectorField[x]) vectorField[x] = []
                    if (vectorField[x][y]) {
                        temp = vectorField[x][y]
                    } else {
                        vectorField[x][y] = temp
                    }
                }
            }

            // agents creation
            for (let i = 0; i < agentsNumber; i++) {
                let a = new Agent(w, h, p)
                agents.push(a)
            }
        }

        p.draw = function () {
            //p.background(100, 182, 212)

            // test: agents
            for (let agent of agents) {
                agent.applyForce(vectorField[Math.floor(agent.pos.x)][Math.floor(agent.pos.y)])
                agent.update()
                agent.draw()
                if (
                    agent.pos.x < 0 ||
                    agent.pos.x > w ||
                    agent.pos.y < 0 ||
                    agent.pos.y > h
                ) {
                    agents.splice(agents.indexOf(agent), 1)
                    let a = new Agent(w, h, p)
                    agents.push(a)
                }
            }
        }
    }

    export default s
