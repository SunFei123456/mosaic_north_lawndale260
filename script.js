document.addEventListener('DOMContentLoaded', () => {
    console.log('MoSAIC North Lawndale website loaded.');

    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Optional: Add sound effect or subtle animation logic here
            console.log(`Hovering over: ${item.querySelector('h2').innerText}`);
        });
    });
});
