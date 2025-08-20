// Intro animation sequence
function introAnimation() {
    const greetings = [
        { text: "Hello", lang: "English" },
        { text: "नमस्ते", lang: "Hindi" },
        { text: "Bonjour", lang: "French" }
    ];

    const mainInfo = {
        name: "Keshav Dadhich",
        taglines: [
            "AI & ML Engineer",
            "Creating Innovative Solutions",
            "Turning Vision into Reality"
        ]
    };

    const overlay = document.createElement('div');
    overlay.className = 'intro-overlay';
    
    const content = document.createElement('div');
    content.className = 'intro-content';
    
    const text = document.createElement('div');
    text.className = 'intro-text';
    
    const subtitle = document.createElement('div');
    subtitle.className = 'intro-subtitle';
    
    content.appendChild(text);
    content.appendChild(subtitle);
    overlay.appendChild(content);
    document.body.appendChild(overlay);

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
            text.textContent = greetings[currentGreeting].text;
            subtitle.textContent = greetings[currentGreeting].lang;
            currentGreeting = (currentGreeting + 1) % greetings.length;
            
            if (currentGreeting === 0) {
                isShowingGreeting = false;
                setTimeout(() => {
                    text.textContent = mainInfo.name;
                    subtitle.textContent = mainInfo.taglines[0];
                    setTimeout(() => {
                        overlay.classList.add('fade-out');
                        document.querySelector('.layout').classList.remove('content-hidden');
                    }, 2000);
                }, 1000);
                return;
            }
        }
        
        setTimeout(showNextText, 2000);
    }
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
