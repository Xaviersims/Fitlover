const images = [
  "Gym 1.png",
  "Gym 2.png",
  "Gym 3.png",
  "Gym 4.png",
  "Gym 5.png",
  "Gym 6.png"
];

let current = 0;

function showNextImage() {
  current = (current + 1) % images.length;
  document.getElementById("slide").src = images[current];
}

setInterval(showNextImage, 3000); // Change image every 3 seconds
