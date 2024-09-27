const scrollTexts = document.querySelectorAll('.scrolling-text');

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    scrollTexts.forEach((text) => {
        let moveAmount = -900 + (scrollTop * 0.9); 

        const minRightPosition = 0; 
        const maxRightPosition = text.parentElement.offsetWidth - text.offsetWidth;

        moveAmount = Math.max(minRightPosition, Math.min(maxRightPosition, moveAmount));
        text.style.right = `${moveAmount}px`;
    });
});