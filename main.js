 function toggleMenu() {
      const nav = document.getElementById("navLinks");
      nav.classList.toggle("show");
    }

    // slider

    // Duplicate slides for infinite effect
const slider = document.getElementById('slider');
const slides = slider.innerHTML;
slider.innerHTML += slides;
