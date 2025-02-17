document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let dino = {
        x: 50,
        y: 150,
        width: 50,
        height: 50,
        vy: 0,
        gravity: 2,
        jump: -30,
        grounded: false
    };

    let obstacles = [];
    let frame = 0;
    let gameSpeed = 5;

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        dino.vy += dino.gravity;
        dino.y += dino.vy;
        if (dino.y >= 150) {
            dino.y = 150;
            dino.vy = 0;
            dino.grounded = true;
        }

        if (frame % 100 === 0) {
            obstacles.push({ x: canvas.width, y: 150, width: 20, height: 20 });
        }

        obstacles.forEach((obstacle, index) => {
            obstacle.x -= gameSpeed;
            if (obstacle.x + obstacle.width < 0) {
                obstacles.splice(index, 1);
            }
            ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        });

        ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
        frame++;

        requestAnimationFrame(update);
    }

    canvas.addEventListener('click', function() {
        if (dino.grounded) {
            dino.vy = dino.jump;
            dino.grounded = false;
        }
    });

    update();
});
