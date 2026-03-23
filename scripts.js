let current = 0;
        const slides = document.querySelectorAll('.slide');
        const dotContainer = document.getElementById('dotContainer');

        slides.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.className = `dot ${i === 0 ? 'active' : ''}`;
            dotContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        function move(dir) {
            current += dir;
            if (current < 0) current = 0;
            if (current >= slides.length) current = slides.length - 1;
            update();
        }

        function update() {
            slides.forEach((s, i) => s.classList.toggle('active', i === current));
            dots.forEach((d, i) => d.classList.toggle('active', i === current));
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') move(1);
            if (e.key === 'ArrowLeft') move(-1);
        });