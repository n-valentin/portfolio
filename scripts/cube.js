let cube = document.querySelector('.cube');
let t = 0;

function animate() {
    t += 0.02;

    let angle = t * 10 + (Math.cos(t*0.5) * 5);

    cube.style.transform = `
        rotateX(${angle}deg)
        rotateY(${angle}deg)
    `;

    requestAnimationFrame(animate);
}

animate();