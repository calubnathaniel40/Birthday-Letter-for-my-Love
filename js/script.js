/* ===================== CONFIG - Add your content here ===================== */
const CONFIG = {
  songs: [
    {file: "song1.mp3", title: "123 — Over October"},
    {file: "song2.mp3", title: "Until I Found Her"},
    {file: "song3.mp3", title: "Ikaw Pa Rin Ang Pipiliin Ko"},
    {file: "song4.mp3", title: "Leonora"}
  ],

  // NEW SIMPLIFIED PHOTO GALLERY
  // Just add your image files and captions here.
  photos: [
    {src: "set1-1.jpg", caption: "EO yarn?"},
    {src: "set1-2.jpg", caption: "Road trip memories"},
    {src: "set1-3.jpg", caption: "Bleehhbleehhh"},
    {src: "set1-4.jpg", caption: "EK Moments"},
    {src: "set2-1.jpg", caption: "Random galaa"},
    {src: "set2-2.jpg", caption: "Picture muna kayo?!"},
    {src: "set2-3.jpg", caption: "Birthdate?"},
    {src: "set2-4.jpg", caption: "Watch your sport"},
    // Add as many more as you like
  ],
  
  voiceNote: "voice.mp3", // optional; place voice.mp3 or leave blank ""
  
  letter: `Happy Birthday, my baby!

Today is your special day, but honestly every day with you already feels special. Still, I want this day to be extra memorable because it’s not just about celebrating your birthday, it’s about celebrating you. The person who makes my world brighter, my heart calmer, and my life so much better just by being in it.

You’ve brought so much happiness into my life. You’ve shown me what real love feels like not the perfect but the real kind, where we learn, grow, and hold on to each other no matter what. I’m so thankful for every laugh we’ve shared, every kwentalks, every moment we just sit together doing nothing but still feeling everything. Those moments mean more to me than I can ever explain.
I know we’ve had our ups and downs, but that’s what makes us stronger. We’re learning, we’re growing, and we’re loving through it all. I’m proud of us, proud of how far we’ve come, and how we always find our way back to each other. You’re my peace, my safe place, and my favorite person to be with.

I wish for your happiness always not just today, but every single day that follows. I hope you keep chasing your dreams, smiling your beautiful smile, and knowing that I’ll always be here cheering for you, supporting you, and loving you with all that I am.

I can’t wait to celebrate not just your birthdays but every milestone, every success, every little thing that makes life worth living together.
You deserve all the love, joy, and peace in the world. And I promise to do my best to give you all of that and more. Thank you for choosing me, for staying, and for loving me in ways I never thought I deserved.

Happy birthday, my love. Here’s to you, to us, and to a lifetime of celebrating together.`,
};
/* ===================== end CONFIG ===================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- STATE ---------- */
  let audioCtx = null;
  let masterGain = null;
  let mediaSources = [];
  let gainNodes = [];
  let isMuted = false;
  let galleryInterval = null;
  const CROSSFADE_TIME = 3.0; // Start next song 3s before current one ends

  /* ---------- ELEMENTS (Fixed IDs) ---------- */
  const intro = document.getElementById('intro-screen');
  const startBtn = document.getElementById('start-btn');
  const app = document.getElementById('app');
  
  // NEW Gallery Elements
  const galleryCard = document.getElementById('gallery-card');
  const galleryImage = document.getElementById('gallery-image');
  const galleryCaption = document.getElementById('gallery-caption');

  const typedEl = document.getElementById('typed');
  const letterBox = document.getElementById('letterBox');
  const downloadPdf = document.getElementById('downloadPdf');
  const muteBtn = document.getElementById('muteBtn');
  const finalOverlay = document.getElementById('finalOverlay');
  const finalClose = document.getElementById('finalClose');
  const bgDecor = document.getElementById('bg-decor');

  /* ---------- PREPARE audio elements ---------- */
  const audioEls = CONFIG.songs.map((s, i) => {
    const el = document.getElementById(`audio-song-${i+1}`);
    el.src = s.file;
    el.preload = 'auto';
    el.crossOrigin = "anonymous";
    return el;
  });
  const voiceEl = document.getElementById('audio-voice');
  if (CONFIG.voiceNote) {
    voiceEl.src = CONFIG.voiceNote;
    voiceEl.preload = 'auto';
  }

  /* ---------- WebAudio setup for crossfade ---------- */
  function initAudioContext() {
    if (audioCtx) return;
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = audioCtx.createGain();
      masterGain.gain.value = isMuted ? 0 : 1;
      masterGain.connect(audioCtx.destination);

      audioEls.forEach((audioEl, idx) => {
        const src = audioCtx.createMediaElementSource(audioEl);
        const g = audioCtx.createGain();
        g.gain.value = 0; // Start all silent
        src.connect(g);
        g.connect(masterGain);
        mediaSources[idx] = src;
        gainNodes[idx] = g;
      });
    } catch (e) {
      console.error("Web Audio API is not supported in this browser or failed to init.", e);
    }
  }

  function crossfadeTo(index, fadeSec = 2.0) {
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    gainNodes.forEach((g, idx) => {
      try {
        g.gain.cancelScheduledValues(now);
        g.gain.setValueAtTime(g.gain.value, now);
        const targetValue = (idx === index) ? 1.0 : 0.0;
        g.gain.linearRampToValueAtTime(targetValue, now + fadeSec);
      } catch (err) {
        console.warn("Error during crossfade node.", err);
      }
    });
  }

  function handleAudioError(e, index) {
    console.error(`Error playing audio file: ${CONFIG.songs[index]?.file || 'voice note'}`, e);
  }

  /* ---------- NEW 3D Flip Card Gallery Logic ---------- */
  function startFlipCardGallery() {
    let photoIndex = 0;
    const interval = 4500; // Time per photo

    function updateCard(index) {
      const photo = CONFIG.photos[index];
      if (!photo) return;
      
      // 1. Fade card out
      galleryCard.classList.remove('active');
      
      // 2. After a short delay, update the content
      setTimeout(() => {
        galleryImage.src = photo.src;
        galleryImage.alt = photo.caption;
        galleryCaption.textContent = photo.caption;
        
        // 3. Make sure card is facing front
        galleryCard.classList.remove('is-flipped');
        
        // 4. Fade card back in
        setTimeout(() => {
            galleryCard.classList.add('active');
        }, 100); // Short delay to allow CSS to see change
        
      }, 1000); // Wait for fade-out to finish
    }

    // Click to flip the card
    galleryCard.parentElement.addEventListener('click', () => {
      galleryCard.classList.toggle('is-flipped');
    });

    // Start the slideshow
    updateCard(photoIndex); // Show first card
    
    galleryInterval = setInterval(() => {
      photoIndex = (photoIndex + 1) % CONFIG.photos.length;
      updateCard(photoIndex);
    }, interval);
  }

  /* ---------- Floating petals, hearts, glow ---------- */
  function startFloatingParticles() {
    // Added more cute symbols
    const symbols = ["💗","💞","🌸","💖","🌹", "✨", "🌱"];
    function spawnSymbol() {
      const el = document.createElement('span');
      el.className = 'float';
      el.textContent = symbols[Math.floor(Math.random()*symbols.length)];
      el.style.left = Math.random()*100 + "vw";
      el.style.top = (Math.random()*8 - 8) + "vh";
      el.style.fontSize = (12 + Math.random()*24) + "px";
      el.style.opacity = (0.6 + Math.random()*0.4);
      el.style.transition = "transform 10s linear, opacity 10s linear";
      document.body.appendChild(el);
      
      requestAnimationFrame(()=> {
          el.style.transform = `translateY(${110 + Math.random()*30}vh) rotate(${Math.random()*720}deg)`;
      });
      setTimeout(()=> el.remove(), 10500);
    }
    setInterval(spawnSymbol, 330);

    function spawnGlow() {
      const d = document.createElement('div');
      d.className = 'glowDot';
      d.style.left = Math.random()*100 + "vw";
      d.style.top = Math.random()*100 + "vh";
      bgDecor.appendChild(d);

      requestAnimationFrame(() => {
        d.style.opacity = (0.15 + Math.random() * 0.6);
        setTimeout(() => {
          d.style.opacity = 0;
        }, 8000 + Math.random() * 2000);
      });
      
      setTimeout(()=> d.remove(), 11000);
    }
    setInterval(spawnGlow, 700);
  }

  /* ---------- Typewriter (letter) ---------- */
  function typeWriter(text, speed=28, done) {
    typedEl.innerHTML = "";
    let i = 0;
    (function step(){
      if (i < text.length) {
        // Handle newlines
        if (text.charAt(i) === '\n') {
          typedEl.innerHTML += '<br>';
        } else {
          typedEl.innerHTML += text.charAt(i);
        }
        i++;
        typedEl.scrollTop = typedEl.scrollHeight; // Auto-scroll
        setTimeout(step, speed + Math.random()*12);
      } else {
        typedEl.classList.remove('typing'); // Remove blinking cursor
        if (typeof done === "function") done();
      }
    })();
  }

  /* ---------- NEW "BEST" Confetti / Hearts Finale ---------- */
  function burstConfetti() {
    const canvas = document.createElement('canvas');  
    canvas.style.position='fixed'; canvas.style.left=0; canvas.style.top=0;  
    canvas.style.zIndex=9999; canvas.style.pointerEvents='none';
    document.body.appendChild(canvas); canvas.width = innerWidth; canvas.height = innerHeight;
    const ctx = canvas.getContext('2d');
    const pieces = Array.from({length:220}, ()=>({
      x: Math.random()*canvas.width,
      y: -Math.random()*canvas.height,
      vx: (Math.random()-0.5)*6,
      vy: 2+Math.random()*6,
      size: 15 + Math.random() * 15, // Made hearts bigger
      color: `hsl(${Math.random()*60+330}, 80%, 65%)`, // Pinks and reds
      rot: Math.random()*360
    }));
    let t = 0;
    function frame(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      pieces.forEach(p=>{
        p.x += p.vx; p.y += p.vy; p.rot += 3;
        ctx.save();
        ctx.translate(p.x,p.y);
        ctx.rotate(p.rot*Math.PI/180);
        ctx.font = `${p.size}px Arial`; // Use font size for emoji size
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.y < 0 ? 0 : 1; // Fade in at top
        ctx.fillText('💖', -p.size/2, p.size/2); // Draw a heart emoji
        ctx.restore();
      });
      t++; if(t < 300) requestAnimationFrame(frame); else canvas.remove(); // Lasts longer
    }
    frame();
  }

  /* ---------- PDF download ---------- */
  downloadPdf.addEventListener('click', ()=>{
    try {
      // Make sure the jsPDF library is loaded
      if (typeof jsPDF === 'undefined') {
        alert("Error: PDF library not loaded. Please check your internet connection.");
        return;
      }
      const { jsPDF } = window.jspdf;
      
      const doc = new jsPDF({unit:'pt',format:'letter'});
      doc.setFontSize(14); doc.setFont("Times","Normal");
      // Split text to handle page breaks
      const lines = doc.splitTextToSize(CONFIG.letter, 520);
      doc.text(lines, 40, 60);
      doc.save("Happy_Birthday_Letter.pdf");
    } catch (e) {
      console.error("jsPDF failed:", e);
      alert("Error: Could not generate PDF. Please try again.");
    }
  });

  /* ---------- Mute toggle ---------- */
  muteBtn.addEventListener('click', ()=>{
    isMuted = !isMuted;
    if (masterGain) {
      masterGain.gain.value = isMuted ? 0 : 1;
    }
    muteBtn.textContent = isMuted ? "Unmute" : "Mute";
  });

  /* ---------- Play all songs sequentially ---------- */
  function playSong(index) {
    if (index >= audioEls.length) {
      onPlaylistComplete();
      return;
    }

    const audioEl = audioEls[index];
    let hasTriggeredNext = false;

    const onTimeUpdate = () => {
      if (hasTriggeredNext) return;
      if (audioEl.duration && (audioEl.duration - audioEl.currentTime) < CROSSFADE_TIME) {
        hasTriggeredNext = true;
        audioEl.removeEventListener('timeupdate', onTimeUpdate);
        playSong(index + 1); // start next
      }
    };

    audioEl.onended = () => {
      audioEl.removeEventListener('timeupdate', onTimeUpdate);
      if (!hasTriggeredNext) {
        playSong(index + 1);
      }
    };

    audioEl.addEventListener('timeupdate', onTimeUpdate);
    audioEl.currentTime = 0;
    audioEl.play().catch((e) => handleAudioError(e, index));
    crossfadeTo(index, 2.0);
  }

  /* ---------- After playlist completes ---------- */
  function onPlaylistComplete(){
    burstConfetti(); // Run new heart confetti
    finalOverlay.classList.add('show');
    finalOverlay.setAttribute('aria-hidden','false');
  }
  
  /* ---------- Final overlay close button ---------- */
  finalClose.addEventListener('click', ()=> {
    finalOverlay.classList.remove('show');
    finalOverlay.setAttribute('aria-hidden','true');
  });

  /* ---------- Orchestration / Start button ---------- */
  startBtn.addEventListener('click', async () => {
    initAudioContext();
    if (audioCtx && audioCtx.state === 'suspended') {
      try { await audioCtx.resume(); } catch(e){}
    }

    // Unlock playback permission
    for (let i = 0; i < audioEls.length; i++) {
      try { await audioEls[i].play(); audioEls[i].pause(); audioEls[i].currentTime = 0; }  
      catch(e){ handleAudioError(e, i); }
    }
    if (CONFIG.voiceNote) {
      try { await voiceEl.play(); voiceEl.pause(); voiceEl.currentTime = 0; }  
      catch(e){ handleAudioError(e, 'voice'); }
    }

    // show app & start visuals
    intro.style.opacity = 0;
    intro.setAttribute('aria-hidden', 'true');
    setTimeout(()=> {
      intro.style.display = 'none';
      app.classList.remove('hidden');
      app.setAttribute('aria-hidden', 'false');
    }, 600);

    // render first photo set & start cycles
    startFlipCardGallery(); // Start NEW gallery
    startFloatingParticles();

    // type letter while music plays
    typeWriter(CONFIG.letter, 28, ()=>{
      if (CONFIG.voiceNote) {
        voiceEl.play().catch((e) => handleAudioError(e, 'voice'));
      }
    });

    // finally start music chain
    playSong(0);
  });

}); // End DOMContentLoaded
