const photos = [
  "ber3.jpg",
  "ber4.jpg",
  "botak ber4.jpg",
  "lol.jpg",
  "rame.jpg",
  "rame2.jpg",
  "randi uways.jpg",
  "taufik uways.jpg",
  "topik fendi.jpg",
  "topik.jpg"
];

const gallery = document.getElementById("gallery");

photos.forEach(photo => {
  const img = document.createElement("img");
  img.src = photo;
  img.alt = "Foto bersama teman";
  gallery.appendChild(img);
});
