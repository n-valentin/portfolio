document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('rain');
    const context = canvas.getContext('2d');

    const fontSize = 20;

    function initDrops() {
        const columns = Math.floor(canvas.width / fontSize);
        drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }
    }

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initDrops();
    }

    const rain_animate = () => {
        context.fillStyle = 'rgba(0,0,0,0.5)';
        context.fillRect(0,0,canvas.width,canvas.height);

        context.fillStyle = '#FFF';
        context.font = `${fontSize} monospace`;

        for (let i = 0; i < drops.length; i++) {
            context.fillText(Number(Math.random() >= 0.5), i*fontSize, drops[i]*fontSize); // text, x, y

            // 10% to respawn
            if(drops[i]*fontSize > canvas.height && Math.random() > 0.9) {
                drops[i] = 0;
            } 

            drops[i]++;
        }
    }

    resize();
    window.addEventListener('resize', resize);

    setInterval(rain_animate,200);
});