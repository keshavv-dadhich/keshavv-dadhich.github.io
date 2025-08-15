// Intro animation sequence
function introAnimation() {
    const greetings = [
        { text: "Hello", lang: "English" },
        { text: "नमस्ते", lang: "Hindi" },
        { text: "Bonjour", lang: "French" }
    ];

    const taglines = [
        "Innovating AI-powered solutions",
        "Developing with curiosity and expertise",
        "Always learning and innovating"
    ];

    const overlay = document.querySelector('.intro-overlay');
    const introText = document.querySelector('.intro-text');
    const introSubtitle = document.querySelector('.intro-subtitle');
    const mainContent = document.querySelector('.layout');
    const landing = document.querySelector('#landing');

    if (mainContent) mainContent.classList.add('content-hidden');
    if (landing) landing.classList.add('content-hidden');

    let currentGreeting = 0;
    let isShowingGreeting = true;

    function showNextText() {
        if (isShowingGreeting) {
            // Show greeting
            introText.textContent = greetings[currentGreeting].text;
            introSubtitle.textContent = greetings[currentGreeting].lang;
            
            introText.classList.remove('fade-in', 'fade-out');
            introSubtitle.classList.remove('fade-in', 'fade-out');
            
            void introText.offsetWidth; // Trigger reflow
            void introSubtitle.offsetWidth;
            
            introText.classList.add('fade-in');
            introSubtitle.classList.add('fade-in');

            currentGreeting++;
            
            if (currentGreeting >= greetings.length) {
                isShowingGreeting = false;
                currentGreeting = 0;
            }
        } else {
            // Transition to main content
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.display = 'none';
                if (mainContent) mainContent.classList.remove('content-hidden');
                if (landing) landing.classList.remove('content-hidden');
                
                // Initialize the tagline rotation
                initializeTaglineRotation(taglines);
            }, 500);
            return;
        }

        setTimeout(() => {
            introText.classList.remove('fade-in');
            introSubtitle.classList.remove('fade-in');
            introText.classList.add('fade-out');
            introSubtitle.classList.add('fade-out');
            
            setTimeout(showNextText, 500);
        }, 1000);
    }

    showNextText();
}

// Initialize tagline rotation
function initializeTaglineRotation(taglines) {
    const txtRotateElement = document.querySelector('#txt-rotate');
    if (txtRotateElement) {
        txtRotateElement.setAttribute('data-rotate', JSON.stringify(taglines));
        new TxtRotate(txtRotateElement, taglines, 2000);
    }
}

// Start the intro animation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(introAnimation, 500);
});
