document.addEventListener('DOMContentLoaded', () => {
    const scroller = document.querySelector('.screenshots');
    const left = document.querySelector('.nav-arrow.left');
    const right = document.querySelector('.nav-arrow.right');

    if (scroller && left && right) {
        const scrollAmount = 220;

        left.addEventListener('click', () => {
            scroller.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        right.addEventListener('click', () => {
            scroller.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }
});
