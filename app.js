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

function renderReadings() {
  list.innerHTML = "";
  feriaContent.readings.forEach((reading, index) => {
    const card = document.createElement("article");
    card.className = "reading-card";
    const top = document.createElement("div");
    top.className = "reading-top";
    const number = document.createElement("span");
    number.className = "reading-number";
    number.textContent = String(index + 1).padStart(2, "0");
    const headingWrap = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = reading.title || `Lectura ${index + 1}`;
    headingWrap.appendChild(title);
    if (reading.student) {
      const student = document.createElement("small");
      student.textContent = reading.student;
      headingWrap.appendChild(student);
    }
    top.append(number, headingWrap);
    card.appendChild(top);

    if (reading.audio) {
      const audio = document.createElement("audio");
      audio.controls = true;
      audio.preload = "none";
      audio.src = reading.audio;
      audio.setAttribute("aria-label", `Reproducir ${title.textContent}`);
      audio.addEventListener("play", () => {
        document.querySelectorAll("#reading-list audio").forEach(other => {
          if (other !== audio) other.pause();
        });
      });
      card.appendChild(audio);
    } else {
      const note = document.createElement("div");
      note.className = "audio-missing";
      note.textContent = "Audio próximamente";
      card.appendChild(note);
    }
    list.appendChild(card);
  });
}

renderPhotos();
renderReadings();
