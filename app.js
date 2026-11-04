
const list = document.getElementById("reading-list");
const gallery = document.getElementById("photo-gallery");

function renderPhotos() {
  const photos = feriaContent.photos.filter(p => p.src);
  if (!photos.length) return;

  gallery.innerHTML = "";

  photos.forEach((photo, i) => {
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.alt || `Fotografía de la feria ${i + 1}`;
    img.loading = "lazy";
    gallery.appendChild(img);
  });
}

function renderVideo() {
  list.innerHTML = "";

  const card = document.createElement("article");
  card.className = "reading-card";

  const video = document.createElement("video");
  video.controls = true;
  video.preload = "metadata";
  video.playsInline = true;

  video.src = feriaContent.video;
  video.poster = "assets/portada-cuento.jpg";

  video.style.width = "100%";
  video.style.display = "block";
  video.style.borderRadius = "12px";

  card.appendChild(video);
  list.appendChild(card);
}

renderPhotos();
renderVideo();

