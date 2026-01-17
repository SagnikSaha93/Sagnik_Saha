(() => {
  const isMobile = () => window.innerWidth <= 768;

  const keysLeft = document.querySelector('.keys.keys-left');
  const keysRight = document.querySelector('.keys.keys-right');

  if (!keysLeft && !keysRight) return;

  // Check if we're on index.html (home page)
  const isHomePage = document.querySelector('.body') && 
                     !document.querySelector('.work') && 
                     !document.querySelector('.project') && 
                     !document.querySelector('.about') && 
                     !document.querySelector('.trainingsCertification') && 
                     !document.querySelector('.skills');

  const updateKeysPosition = () => {
    if (!isMobile()) {
      // Remove scrolled class on desktop
      if (keysLeft) keysLeft.classList.remove('scrolled');
      if (keysRight) keysRight.classList.remove('scrolled');
      return;
    }

    // On home page (index.html), keys stay centered - no scroll behavior
    if (isHomePage) {
      return;
    }

    // Content pages behavior:
    // Keys start at TOP (70px)
    // When scrolling DOWN past threshold, move to BOTTOM
    const scrollThreshold = 150;
    const isScrolledDown = window.scrollY > scrollThreshold;

    if (keysLeft) {
      keysLeft.classList.toggle('scrolled', isScrolledDown);
    }
    if (keysRight) {
      keysRight.classList.toggle('scrolled', isScrolledDown);
    }
  };

  // Event listeners
  window.addEventListener('scroll', updateKeysPosition);
  window.addEventListener('resize', updateKeysPosition);
  window.addEventListener('load', updateKeysPosition);
  
  // Initial call
  updateKeysPosition();
})();