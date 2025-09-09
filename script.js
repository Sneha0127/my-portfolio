let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// For read more button
const readMoreBtn = document.getElementById("read-more-btn");
const aboutText = document.getElementById("about-text");

readMoreBtn.addEventListener("click", function (e) {
    e.preventDefault();
    aboutText.classList.toggle("show");

    if (aboutText.classList.contains("show")) {
        readMoreBtn.textContent = "Read Less";
    } else {
        readMoreBtn.textContent = "Read More";
    }
});

// For picture scroll animation
const pic = document.getElementById("picc");
window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    // Scale down the picture as user scrolls
    let scaleVal = Math.max(0.6, 1 - scrollY / 1700);
    pic.style.transform = `scale(${scaleVal})`;
});

// EmailJS Integration
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_stcir6d",   // Replace with your EmailJS Service ID
        "template_1y7bkqf",  // Replace with your EmailJS Template ID
        this
    )
    .then(() => {
        alert("✅ Message sent successfully!");
        contactForm.reset();
    })
    .catch((error) => {
        alert("❌ Failed to send message: " + error.text);
    });
});
