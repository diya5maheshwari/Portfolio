const text =
  "Future-Ready Computer Science Student| <br> Coding Solutions for a Connected World' |";
const text2 = "Future-Ready For Web Developer |";
const typingtext = document.getElementById("typingtext");
let texts = [text, text2];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  let currentText = texts[textIndex];
  if (!isDeleting) {
    typingtext.innerHTML = currentText.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentText.length) {
      setTimeout(() => {
        isDeleting = true;
        typeEffect();
      }, 1200); // Pause before deleting
      return;
    }
  } else {
    typingtext.innerHTML = currentText.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeEffect, 500); // Pause before typing next text
      return;
    }
  }
  setTimeout(typeEffect, isDeleting ? 40 : 80);
}
window.onload = typeEffect;

// slider code

let currentSlide = 0;

function showSlide(index) {
    const slider = document.getElementById("slider");
    const totalSlides = slider.children.length;
        // console.log(`Showing slide ${index} of ${totalSlides}`);

    if (index >= totalSlides) currentSlide = 0;
    else if (index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;

    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}




// contact section
document.addEventListener("DOMContentLoaded", function () {
  // Social button functionality
  document
    .getElementById("linkedin-btn")
    .addEventListener("click", function () {
      window.open("https://www.linkedin.com", "_blank");
    });

  document.getElementById("twitter-btn").addEventListener("click", function () {
    window.open("https://www.twitter.com", "_blank");
  });

  document.getElementById("github-btn").addEventListener("click", function () {
    window.open("https://www.github.com", "_blank");
  });

  document.getElementById("gmail-btn").addEventListener("click", function () {
    window.open("mailto:diyamaheshwari99@gmail.com", "_blank");
  });

  // Form submission
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Here you would typically send this data to a server
      console.log("Form submitted:", { name, email, subject, message });

      // Show success message
      alert("Thank you for your message! I will get back to you soon.");

      // Reset form
      this.reset();
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // ScrollReveal code here

  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 200,
    // reset: true // Uncomment if you want animations to repeat on scroll
  });

  // Hero Section
  sr.reveal(".par1_content", {}); // Name, intro, buttons
  sr.reveal(".par2_img", { delay: 200 }); // Image and CGPA/Project Info

  // Skills Section
  sr.reveal(".skills-header", { delay: 100 }); // Skills title
  sr.reveal(".skills-column", { interval: 200 }); // Columns of skills
  sr.reveal(".skill-item", { interval: 100 }); // Each skill bar

  // Education Section
  sr.reveal(".section_education h2", {});
  sr.reveal(".timeline-item", { interval: 200 });

  // Projects Section
  sr.reveal(".projects h1", {});
  sr.reveal(".slide", { interval: 300 });

  // Contact Section
  sr.reveal(".contact-info h1", {});
  sr.reveal(".info-item", { interval: 200 });
  sr.reveal(".contact-form", { delay: 200 });
  sr.reveal(".form-group", { interval: 100 });

  // Footer
  sr.reveal("footer", { delay: 300 });
});
