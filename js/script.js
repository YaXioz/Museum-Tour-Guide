// HAMBURGER MENU

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}



//BANNER SLIDE 

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}



// CONTACT FORM

const form = document.getElementById('contact-form');
const notificationElement = document.getElementById('notification');

form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  const formData = new FormData(form);
  console.log(formData);

  // Reset the form
  form.reset();

  // Display a notification
  notificationElement.style.display = 'block';
  notificationElement.innerHTML = 'Form submitted successfully!';
  setTimeout(function() {
    notificationElement.style.display = 'none';
  }, 3000); // Hide the notification after 3 seconds
});



// Fungsi untuk mengatur ukuran font pada footer
function adjustFooterFontSize() {
  const footer = document.querySelector('footer');
  const copyright = document.querySelector('#copyright');
  const socialMedia = document.querySelector('.social-media');

  if (window.innerWidth < 768) {
    copyright.style.fontSize = '14px';
    socialMedia.style.fontSize = '18px';
  } else {
    copyright.style.fontSize = '16px';
    socialMedia.style.fontSize = '24px';
  }
}

// Fungsi untuk mengatur ukuran padding pada footer
function adjustFooterPadding() {
  const footer = document.querySelector('footer');
  const container = document.querySelector('.container');

  if (window.innerWidth < 480) {
    container.style.padding = '0 5px';
  } else {
    container.style.padding = '0 20px';
  }
}

// Fungsi untuk mengatur ukuran footer pada saat window diresize
window.addEventListener('resize', () => {
  adjustFooterFontSize();
  adjustFooterPadding();
});

// Fungsi untuk mengatur ukuran footer pada saat page diload
document.addEventListener('DOMContentLoaded', () => {
  adjustFooterFontSize();
  adjustFooterPadding();
});
