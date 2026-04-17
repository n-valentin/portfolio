const canvas = document.getElementById("dotscanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = document.documentElement.scrollWidth;
  canvas.height = document.documentElement.scrollHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let mouse = { x: null, y: null };

window.addEventListener("mousemove", e => {
    mouse.x = e.clientX + window.scrollX;
    mouse.y = e.clientY + window.scrollY;
});

// Particle class
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // wrap around edges like portal
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    }

    draw() {
        ctx.fillStyle = 'rgba(255,255,255,0.2)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
    }
}

const particles = [];
const particleCount = 600;

for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

function dots_connectParticles() {
    for (let p of particles) {
        let dx = p.x - mouse.x;
        let dy = p.y - mouse.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 180) {
        ctx.strokeStyle = `rgba(127,127,127,${1 - dist / 180})`;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
        }
    }
}

function dots_animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });
    if (mouse.x !== null && mouse.y !== null) {
        dots_connectParticles();
    }

    requestAnimationFrame(dots_animate);
}

dots_animate();