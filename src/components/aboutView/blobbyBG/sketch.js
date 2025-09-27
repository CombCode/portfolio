
const blobbyBG = (p) => {

    let noiseScale
    let noiseZ = 0;

    p.setup = function() {
        p.createCanvas(800, 800);
        p.background(0,0,0,0);
        p.strokeWeight(2);
        p.stroke(156, 200, 0, 10);
        p.noFill();
        noiseScale = 0.5;
    }

    p.draw = function() {
        p.stroke(p.random(100,255), p.random(100,255), p.random(100,255), 20);

        p.background(0,0,0,0);

        p.translate(p.width / 2, p.height / 2);

        p.beginShape();
        
        for (let angle = 0; angle <= p.TWO_PI; angle += 0.01) {
            
            let r = p.map(p.noise(p.sin(angle) * noiseScale + 1, p.cos(angle) * noiseScale + 1, noiseZ), 0, 1, 0, p.width / 2);
            let x = r * p.cos(angle);
            let y = r * p.sin(angle);
            
            p.vertex(x, y);
        }
        p.endShape(p.CLOSE);
                
        noiseZ += 0.004
    }
}

export default blobbyBG

