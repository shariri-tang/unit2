// Select elements
const draggableImage = document.getElementById('draggableImage');
const tray = document.querySelector('.tray');

// Variables to track drag
let offsetX = 0;
let offsetY = 0;

// Add mousedown event to start dragging
draggableImage.addEventListener('mousedown', (event) => {
    offsetX = event.clientX - draggableImage.offsetLeft;
    offsetY = event.clientY - draggableImage.offsetTop;
    draggableImage.style.cursor = 'grabbing';

   
    document.addEventListener('mousemove', drag);
});

// Add mouseup event to stop dragging
document.addEventListener('mouseup', () => {
    draggableImage.style.cursor = 'grab';
    document.removeEventListener('mousemove', drag);

    // Check if dropped on tray
    const trayRect = tray.getBoundingClientRect();
    const imageRect = draggableImage.getBoundingClientRect();

    if (
        imageRect.right > trayRect.left &&
        imageRect.left < trayRect.right &&
        imageRect.bottom > trayRect.top &&
        imageRect.top < trayRect.bottom
    ) {
        // Redirect to another page or display a success message
        window.location.href = 'page2.html';
    }
});

// Drag function
function drag(event) {
    draggableImage.style.left = `${event.clientX - offsetX}px`;
    draggableImage.style.top = `${event.clientY - offsetY}px`;
}