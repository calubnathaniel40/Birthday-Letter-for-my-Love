document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro-screen");
  const startBtn = document.getElementById("start-btn");
  const app = document.getElementById("app");
  const gallery = document.querySelector(".gallery");
  const letterBox = document.getElementById("typed-text");
  const photos = document.querySelectorAll(".photo");

  const songs = [
    { file: "song1.mp3", color: "radial-gradient(circle at center, #2b0f1a, #000)" },
    { file: "song2.mp3", color: "radial-gradient(circle at center, #1a0f2b, #000)" },
    { file: "song3.mp3", color: "radial-gradient(circle at center, #0f1a2b, #000)" },
    { file: "song4.mp3", color: "radial-gradient(circle at center, #1a1f0f, #000)" }
  ];
  let songIndex = 0;
  let audio = new Audio(songs[songIndex].file);

  const letter = `Happy Birthday, my baby! 💕\n\nEvery day with you feels special... (your full message here)`;

  // Floating hearts & petals
  function floating() {
    const symbols = ["💗","💞","🌸","💖","🌹"];
    const span = document.createElement("span");
    span.className = "float";
    span.textContent = symbols[Math.floor(Math.random()*symbols.length)];
    span.style.left = Math.random()*100 + "vw";
    span.style.animationDuration = 6 + Math.random()*3 + "s";
    document.body.appendChild(span);
    setTimeout(()=>span.remove(), 9000);
  }
  setInterval(floating, 400);

  // Letter typewriter
  function typeLetter(text, element, speed=40) {
    let i=0;
    function typing(){
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      }
    }
    typing();
  }

  // Photo slideshow
  let idx=0;
  setInterval(() => {
    photos.forEach((p,i)=>p.classList.toggle("active", i===idx));
    idx = (idx+1) % photos.length;
  }, 3500);

  // Song player
  function playSong() {
    audio.src = songs[songIndex].file;
    audio.play().catch(()=>{});
    document.body.style.background = songs[songIndex].color;
    audio.onended = () => {
      songIndex++;
      if(songIndex < songs.length) playSong();
    };
  }

  // Start experience
  startBtn.addEventListener("click", () => {
    intro.classList.add("fade-out");
    setTimeout(()=>{
      intro.style.display="none";
      app.style.display="flex";
      typeLetter(letter, letterBox);
      playSong();
    }, 1200);
  });
});
