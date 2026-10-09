const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("#nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

// Input your number and message normally here
  const myPhoneNumber = "211922560058"; // Include country code, no spaces/plus signs
  const myMessage = "Hello! I am interested in your services.";

  // The code automatically handles the encoding for you
  const encodedMessage = encodeURIComponent(myMessage);
  const finalUrl = `https://wa.me/${myPhoneNumber}?text=${encodedMessage}`;

  // Automatically applies it to the HTML tag
  document.getElementById("whatsapp-link").href = finalUrl;