
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
      "I am a Designer.",
      "I am a Freelancer.",
      "I love to code.",
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


// Function to show all timelines
function showAllTimeline() {
    document.querySelector(".allTimeline").style.display = "block";
    document.querySelector(".eventTimeline").style.display = "none";
    document.querySelector(".progressTimeline").style.display = "none";
}

// Function to show only event timelines
function showEventTimeline() {
    document.querySelector(".allTimeline").style.display = "none";
    document.querySelector(".eventTimeline").style.display = "block";
    document.querySelector(".progressTimeline").style.display = "none";
}

// Function to show only progress timelines
function showProgressTimeline() {
    document.querySelector(".allTimeline").style.display = "none";
    document.querySelector(".eventTimeline").style.display = "none";
    document.querySelector(".progressTimeline").style.display = "block";
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
