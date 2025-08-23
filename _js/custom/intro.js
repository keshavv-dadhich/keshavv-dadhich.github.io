// New Animated Intro Sequence
const greetings = ["hello", "namaste", "bonjour"];
const greetingElem = document.getElementById("greeting");
const nameElem = document.getElementById("myName");
const linesElem = document.getElementById("introLines");

let i = 0;
function showGreetings() {
  if (i < greetings.length) {
    greetingElem.textContent = greetings[i];
    greetingElem.style.opacity = 1;
    setTimeout(() => {
      greetingElem.style.opacity = 0;
      i++;
      setTimeout(showGreetings, 500); // fade out before showing next
    }, 1800); // show for 1.8s each
  } else {
    greetingElem.style.display = "none";
    nameElem.style.display = "block";
    linesElem.style.display = "block";
    setTimeout(() => {
      document.getElementById("intro").style.display = "none";
      document.getElementById("mainContent").style.display = "block";
      // Initialize cursor after intro
      initCustomCursor();
    }, 2200); // Show name & lines for 2.2s before main site
  }
}

window.addEventListener('DOMContentLoaded', function() {
  showGreetings();
});

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
