// Custom cursor effect
function initCustomCursor() {
    // Create cursor dot element if it doesn't exist
    let cursorDot = document.querySelector('.cursor-dot');
    if (!cursorDot) {
        cursorDot = document.createElement('div');
        cursorDot.className = 'cursor-dot';
        document.body.appendChild(cursorDot);
    }

    // Update cursor position with smoother animation
    function updateCursorPosition(e) {
        requestAnimationFrame(() => {
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
        });
    }

    // Add hover effect
    function addCursorHoverEffect() {
        cursorDot.classList.add('active');
    }

    // Remove hover effect
    function removeCursorHoverEffect() {
        cursorDot.classList.remove('active');
    }

    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition);

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .neumorphism-card, .highlight-link');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', addCursorHoverEffect);
        el.addEventListener('mouseleave', removeCursorHoverEffect);
    });
}

// Initialize cursor effect when DOM is loaded
document.addEventListener('DOMContentLoaded', initCustomCursor);
