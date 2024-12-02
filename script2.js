const trailCount = 10;
const trails = [];

// Create trailing elements
for (let i = 0; i < trailCount; i++) {
    const trail = document.createElement('div');
    trail.classList.add('cursor-trail');
    document.body.appendChild(trail);
    trails.push(trail);
}

// Position tracker for the trails
let positions = Array(trailCount).fill({ x: 0, y: 0 });

// Update positions and draw the trails
document.addEventListener('mousemove', (e) => {
    // Add new position at the start
    positions.unshift({ x: e.pageX, y: e.pageY });
    // Remove the oldest position
    positions.pop();

    // Update trail positions
    trails.forEach((trail, index) => {
        if (positions[index]) {
            trail.style.left = `${positions[index].x - trail.offsetWidth / 2}px`;
            trail.style.top = `${positions[index].y - trail.offsetHeight / 2}px`;
        }
    });
});