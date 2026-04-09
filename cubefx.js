let cube = document.querySelector('.cube');
let t = 0;

function cube_animate() {
    t += 0.02;

    let angle = t * 3 + (Math.cos(t*0.5) * 2);

    cube.style.transform = `
        rotateX(${angle}deg)
        rotateY(${angle}deg)
    `;

    requestAnimationFrame(cube_animate);
}

cube_animate();