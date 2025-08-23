// New Animated Intro Sequence
function initIntroAnimation() {
  const greetings = ["hello", "namaste", "bonjour"];
  const greetingElem = document.getElementById("greeting");
  const nameElem = document.getElementById("myName");
  const linesElem = document.getElementById("introLines");

  if (!greetingElem || !nameElem || !linesElem) {
    console.error("Intro elements not found");
    // Show main content if intro fails
    const mainContent = document.getElementById("mainContent");
    if (mainContent) {
      mainContent.style.display = "block";
    }
    return;
  }

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
        // Initialize cursor after intro if function exists
        if (typeof initCustomCursor === 'function') {
          initCustomCursor();
        }
      }, 2200); // Show name & lines for 2.2s before main site
    }
  }

  // Start the animation
  showGreetings();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initIntroAnimation);
} else {
  initIntroAnimation();
}
