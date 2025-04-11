
          function toggleMode() {
      const body = document.body;
      const button = document.querySelector('.toggle-button');
      const icon = document.getElementById('icon');
      const icon2 = document.getElementById('icon2');

      // Toggle class
      body.classList.toggle('light-mode');
      body.classList.toggle('dark-mode');
      button.classList.toggle('light-mode');
      button.classList.toggle('dark-mode');

      if (icon.style.display === 'none') {
    icon.style.display = 'block';
    icon2.style.display = 'none';
  } else {
    icon.style.display = 'none';
    icon2.style.display = 'block';
  }
    }

        // Generate snowflakes
        const snowContainer = document.querySelector('.snow');
        for (let i = 0; i < 20; i++) {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.style.left = Math.random() * 100 + 'vw';
            snowflake.style.animationDuration = Math.random() * 10 + 5 + 's'; // Slower fall
            snowflake.style.animationDelay = Math.random() * 10 + 's';
            snowContainer.appendChild(snowflake);
        }

      const textArray = [
      "I am a Web Developer.",
      "I am a Software Developer.",
      "I am a Freelancer.",
      "I am a Designer.",
      "passionate professional programmer.",
    ];
    let index = 0;
    let charIndex = 0;
    const typingElement = document.getElementById("typing");

    function type() {
      if (charIndex < textArray[index].length) {
        typingElement.textContent += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust speed here
      } else {
        setTimeout(erase, 2000); // Pause before erasing
      }
    }

    function erase() {
      if (charIndex > 0) {
        typingElement.textContent = textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); // Adjust erasing speed here
      } else {
        index = (index + 1) % textArray.length; // Move to the next text
        setTimeout(type, 500); // Pause before typing again
      }
    }

    document.addEventListener("DOMContentLoaded", type);


    // Open the slider menu
function openMenu() {
  document.getElementById("slider").style.width = "250px";
}

// Close the slider menu
function closeMenu() {
  document.getElementById("slider").style.width = "0";
}

function toggleDropdown() {
  const dropdown = document.getElementById("dropdown-menu");
  // Toggle the dropdown menu
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none"; // Hide if already visible
  } else {
    dropdown.style.display = "block"; // Show the dropdown
  }
}

// Close the dropdown when clicking anywhere outside it
document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropdown-menu");
  const moreButton = document.querySelector(".mb-more");
  
  if (!dropdown.contains(event.target) && event.target !== moreButton) {
    dropdown.style.display = "none"; // Hide the dropdown
  }
});

function openPDF() {
  window.open("assets/who-am-i.pdf", "_blank");
}
function instaUrl() {
  window.open("https://www.instagram.com/iam_rajiv07/", "_blank");
}
function linkdinUrl() {
  window.open("https://www.linkedin.com/in/rajiv-kumar-dev/", "_blank");
}
function twitterUrl() {
  window.open("https://x.com/RajivKumar31499", "_blank");
}

function openWpRef() {
    window.open("https://wa.me/?text=https://iamrajiv18.github.io/-rajiv.dev/", "_blank");
  }



document.getElementById("referal").addEventListener("click", function() {
    const referalDiv = document.getElementById("gr8Referal");
    
    // Toggle visibility
    if (referalDiv.style.display === "none") {
        referalDiv.style.display = "block";
        referalDiv.classList.add("visible");
    } else {
        referalDiv.style.display = "none";
        referalDiv.classList.remove("visible");
    }
});

document.getElementById('copy').addEventListener('click', function() {
    const url = window.location.href;

    navigator.clipboard.writeText(url)
        .then(function() {
            // Change the button text to "Copied" after URL is copied
            const copyButton = document.getElementById('copy');
            copyButton.textContent = 'Copied!';
            
            // Optionally, change it back to "Copy URL" after a few seconds
            setTimeout(function() {
                copyButton.textContent = 'Copy URL';
            }, 2000); // Change it back after 2 seconds
        })
      
});

function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));

  // Show the selected section
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.classList.add('active');
  }
}

  // Futuristic Timeline Enhancement JavaScript
  document.addEventListener('DOMContentLoaded', function() {
    // Add required external resources
    addExternalResources();
    
    // Create UI elements
    createUIElements();
    
    // Initialize particles background
    initParticles();
    
    // Load timeline with animation
    setTimeout(() => {
      document.querySelector('.loader-container').classList.add('hidden');
      setTimeout(() => {
        document.querySelector('.loader-container').remove();
        animateTimelineItems();
      }, 800);
    }, 2000);
    
    // Setup event listeners and interactions
    setupInteractions();
  });
  
  function addExternalResources() {
    // Add Google Font - Outfit
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap';
    document.head.appendChild(fontLink);
    
    // Add Font Awesome
    const faLink = document.createElement('link');
    faLink.rel = 'stylesheet';
    faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(faLink);
    
    // Add Vanilla Tilt.js
    const tiltScript = document.createElement('script');
    tiltScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js';
    document.head.appendChild(tiltScript);
    
    // Add Particles.js
    const particlesScript = document.createElement('script');
    particlesScript.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    document.head.appendChild(particlesScript);
  }
  
  function createUIElements() {
    // Create loading screen
    const loader = document.createElement('div');
    loader.className = 'loader-container';
    loader.innerHTML = `
      <div class="loader">
        <div class="loader-circle"></div>
        <div class="loader-circle"></div>
        <div class="loader-circle"></div>
        <div class="loader-text">Loading</div>
      </div>
    `;
    document.body.appendChild(loader);
    
    // Create scroll progress indicator
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);
    
    // Create particles background container
    const particlesContainer = document.createElement('div');
    particlesContainer.id = 'particles-js';
    particlesContainer.className = 'particles-overlay';
    document.body.appendChild(particlesContainer);
    
    // Create timeline controls with cyberpunk/futuristic style
    const controlsDiv = document.createElement('div');
    controlsDiv.className = 'timeline-controls';
    controlsDiv.innerHTML = `
      <button class="timeline-control-btn active" data-timeline="allTimeline">
        <span>All</span>
      </button>
      <button class="timeline-control-btn" data-timeline="eventTimeline">
        <span>Events</span>
      </button>
      <button class="timeline-control-btn" data-timeline="progressTimeline">
        <span>Progress</span>
      </button>
    `;
    
    // Add data attributes to headings for glow effect
    document.querySelectorAll('.timeline h3').forEach(heading => {
      heading.setAttribute('data-text', heading.textContent);
    });
    
    // Create theme toggle button
    const themeToggle = document.createElement('div');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-bolt"></i>';
    
    // Insert the controls before the main timeline
    document.querySelector('.allTimeline').parentNode.insertBefore(controlsDiv, document.querySelector('.allTimeline'));
    // Add the theme toggle
    document.body.appendChild(themeToggle);
  }
  
  function initParticles() {
    // Wait for the particles.js script to load
    const particlesCheck = setInterval(() => {
      if (window.particlesJS) {
        clearInterval(particlesCheck);
        
        // Configure and initialize particles
        particlesJS('particles-js', {
          "particles": {
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#6e00ff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              }
            },
            "opacity": {
              "value": 0.3,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#00d9ff",
              "opacity": 0.2,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 1,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 140,
                "line_linked": {
                  "opacity": 0.4
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        });
      }
    }, 100);
  }
  
  function animateTimelineItems() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Intersection Observer for timeline items
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Apply 3D tilt effect with VanillaTilt if available
          if (window.VanillaTilt && !entry.target.hasAttribute('data-tilt-applied')) {
            VanillaTilt.init(entry.target.querySelector('.timeline-content'), {
              max: 5,
              speed: 400,
              glare: true,
              "max-glare": 0.2,
              gyroscope: true
            });
            entry.target.setAttribute('data-tilt-applied', 'true');
          }
        }
      });
    }, { threshold: 0.2 });
    
    // Observe each timeline item
    timelineItems.forEach(item => {
      observer.observe(item);
    });
  }
  
  function setupInteractions() {
    // Scroll progress indicator
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      document.querySelector('.scroll-progress').style.width = scrollPercentage + '%';
    });
    
    // Timeline filter controls
    const controlButtons = document.querySelectorAll('.timeline-control-btn');
    const timelineSections = document.querySelectorAll('.allTimeline, .eventTimeline, .progressTimeline');
    
    controlButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        controlButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Show/hide appropriate timeline
        const timelineToShow = button.getAttribute('data-timeline');
        timelineSections.forEach(section => {
          if (section.classList.contains(timelineToShow)) {
            section.style.display = 'block';
            // Animate items in the visible timeline after a short delay
            setTimeout(() => {
              animateTimelineItems();
            }, 100);
          } else {
            section.style.display = 'none';
          }
        });
      });
    });
    
    // Theme toggle
    let isDarkTheme = true;
    const themeToggle = document.querySelector('.theme-toggle');
    const root = document.documentElement;
    
    // Set initial CSS variables
    setThemeVariables(isDarkTheme);
    
    themeToggle.addEventListener('click', () => {
      isDarkTheme = !isDarkTheme;
      setThemeVariables(isDarkTheme);
      
      // Animate the toggle button
      themeToggle.classList.add('rotating');
      setTimeout(() => {
        themeToggle.classList.remove('rotating');
      }, 600);
      
      // Update the icon
      themeToggle.innerHTML = isDarkTheme ? 
        '<i class="fas fa-bolt"></i>' : 
        '<i class="fas fa-sun"></i>';
    });
    
    // Add this style for rotating animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      .rotating {
        animation: rotate 0.6s ease-in-out;
      }
    `;
    document.head.appendChild(style);
  }
  
  function setThemeVariables(isDark) {
    const root = document.documentElement;
    
    if (isDark) {
      root.style.setProperty('--darker', 'rgba(6, 8, 24, 0.95)');
      root.style.setProperty('--dark', 'rgba(10, 12, 32, 0.9)');
      root.style.setProperty('--card', 'rgba(20, 22, 42, 0.6)');
      root.style.setProperty('--card-hover', 'rgba(25, 28, 52, 0.7)');
      root.style.setProperty('--light', '#ffffff');
      root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.05)');
    } else {
      root.style.setProperty('--darker', 'rgba(240, 245, 255, 0.95)');
      root.style.setProperty('--dark', 'rgba(220, 230, 250, 0.9)');
      root.style.setProperty('--card', 'rgba(255, 255, 255, 0.6)');
      root.style.setProperty('--card-hover', 'rgba(255, 255, 255, 0.7)');
      root.style.setProperty('--light', '#212130');
      root.style.setProperty('--glass-border', 'rgba(0, 0, 0, 0.05)');
    }
    
    // Common color properties for both themes
    root.style.setProperty('--primary', '#6e00ff');
    root.style.setProperty('--secondary', '#00d9ff');
    root.style.setProperty('--accent', '#ff00e5');
    root.style.setProperty('--shadow', '0 15px 25px rgba(0, 0, 0, 0.2)');
    root.style.setProperty('--glow', '0 0 15px rgba(110, 0, 255, 0.5)');
    root.style.setProperty('--glow-strong', '0 0 25px rgba(110, 0, 255, 0.7)');
  }
  
  // Apply CSS variables on initial load
  document.addEventListener('DOMContentLoaded', () => {
    // Add CSS variables to the root element
    const root = document.documentElement;
    
    root.style.setProperty('--primary', '#6e00ff');
    root.style.setProperty('--secondary', '#00d9ff');
    root.style.setProperty('--accent', '#ff00e5');
    root.style.setProperty('--darker', 'rgba(6, 8, 24, 0.95)');
    root.style.setProperty('--dark', 'rgba(10, 12, 32, 0.9)');
    root.style.setProperty('--card', 'rgba(20, 22, 42, 0.6)');
    root.style.setProperty('--card-hover', 'rgba(25, 28, 52, 0.7)');
    root.style.setProperty('--light', '#ffffff');
    root.style.setProperty('--shadow', '0 15px 25px rgba(0, 0, 0, 0.2)');
    root.style.setProperty('--glow', '0 0 15px rgba(110, 0, 255, 0.5)');
    root.style.setProperty('--glow-strong', '0 0 25px rgba(110, 0, 255, 0.7)');
    root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.05)');
  });
