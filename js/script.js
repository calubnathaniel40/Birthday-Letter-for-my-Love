/* ===================== CONFIG - Add your content here ===================== */

const CONFIG = {
  // --- NEW: Formatted letter slides with Libra sign and new date ---
  letter: [
    { type: 'date', text: 'October 31, 2025' },
    { type: 'salutation', text: 'Dear, Daniele Loise T. Guerta,' },
    { type: 'body', text: 'Happy birthday, my babyyy. I hope today fills your heart with peace, joy, and warmth because that’s exactly what you give to me every single day. I want this letter to be something you can come back to whenever you need to feel loved, safe, and reminded of how special you are not just to me, but to everyone who’s lucky enough to know you.' },
    { type: 'body', text: 'When I look back to the day we met in November 2024, I still remember how I felt. I didn’t know that moment would change my life in such a deep way. You came into my world quietly, like a gentle wave, and suddenly everything felt lighter. I didn’t expect that someone could make my days brighter just by being around, but you did. There was something about you the way you smiled, the way you talked, the way your presence made things feel calm yet exciting at the same time.' },
    { type: 'body', text: 'Then came January 12, the day we became official. That date will always hold a special place in my heart. It wasn’t just the start of a relationship. It was the start of a beautiful journey with someone I truly cared about. Since then, every day has been a chapter I’m proud to live. Through it all, I’ve never stopped feeling lucky to have you.' },
    { type: 'body', text: 'You’ve become my favorite person to talk to, my safe space when I feel lost, and the one I look forward to spending my days with. You make me feel seen and understood, and that’s something not everyone gets to experience.' },
    { type: 'body', text: 'As I write this, I can’t help but think about how much you’ve grown and how proud I am of you. You’ve gone through challenges, but you never gave up. You stayed strong, even when life tried to test you. You inspire me in ways you might not even realize. You have a kind heart, a brave soul, and a beautiful mind. You deserve every good thing that life has to offer.' },
    { type: 'body', text: 'On your birthday, I want to wish you everything your heart desires. I wish you happiness that lasts, dreams that come true, and peace that stays within you no matter what happens. I hope every prayer you whisper is heard and answered in the best way possible. You deserve a life full of love, success, and calm moments where you can finally breathe and say, “I made it.”' },
    { type: 'body', text: 'I know life will not always be easy. There will be days when things feel heavy and the world feels unfair. But I want you to remember that you are not alone. You are strong enough to get through anything, and I will always be right here to remind you of that. I’ll be beside you through every storm, holding your hand and reminding you that better days are always ahead.' },
    { type: 'body', text: 'You’ve shown me what love really means. It’s not just about saying “I love you,” it’s about showing up, being patient, and growing together. We’ve had our ups and downs, and that’s what makes what we have real. It’s not perfect, but it’s ours. You’ve taught me that love is not about never having problems; it’s about choosing each other again and again, even when it’s not easy.' },
    { type: 'body', text: 'I want you to know how proud I am of you. The way you care for others, the way you stay kind, the way you keep moving forward... all of that shows how beautiful your heart truly is. You have this quiet strength that makes people around you feel safe. You have this warmth that makes any place feel like home.' },
    { type: 'body', text: 'I pray that life gives you endless reasons to smile. I hope that your dreams come true. I hope you keep believing in yourself, even when things don’t go as planned. You have so much potential, and I know you’ll achieve beautiful things one day.' },
    { type: 'body', text: 'I want you to remember something, my love: you don’t have to have everything figured out right now. You don’t have to be perfect. It’s okay to rest, it’s okay to cry, it’s okay to ask for help. And when the world feels too much, I hope you always remember that you have me. You have someone who believes in you endlessly. You have someone who will always choose you, no matter how hard life gets.' },
    { type: 'body', text: 'On your birthday, I want to thank you for being in my life. Thank you for your love, your patience, and your effort. Thank you for being the reason behind my smiles, my peace, and my strength. You’ve become such an important part of my life, and I can’t imagine my days without you in them.' },
    { type: 'body', text: 'When I look at you, I see my favorite person in the world. You are beautiful, inside and out. I hope this year brings you more reasons to be proud of yourself. I wish for more laughter, more blessings, and more memories that make you smile. You deserve to be surrounded by love and positivity always.' },
    { type: 'body', text: 'So on this special day, my babyyy, I wish you the happiest birthday ever. I hope this year brings you joy that stays, blessings that overflow, and moments that remind you of how truly special you are. I hope you keep shining with the same light that first caught my heart. And I hope that no matter what happens, you’ll always know that you are loved deeply and endlessly by me.' },
    { type: 'body', text: 'Thank you for being my person, for giving my life meaning, and for showing me what real love feels like. I’ll keep loving you every day, in every way I can. You’re my always, and I’m so grateful I get to share this journey with you. Happy birthday, my babyyy. Here’s to you, to us, and to many more years of love, laughter, and memories we’ll treasure forever.' },
    { type: 'closing', text: 'Love,' },
    { type: 'closing', text: 'Nathan' }
  ],

  songs: [
    {file: "song1.mp3", title: "123 — Over October"},
    {file: "song2.mp3", title: "Until I Found Her"},
    {file: "song3.mp3", title: "Ikaw Pa Rin Ang Pipiliin Ko"},
    {file: "song4.mp3", title: "Leonora"}
  ],

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
};
/* ===================== end CONFIG ===================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- STATE ---------- */
  let isMuted = false;
  let isScrolling = false; // Flag to prevent re-triggering voice

  /* ---------- ELEMENTS ---------- */
  const intro = document.getElementById('intro-screen');
  const startBtn = document.getElementById('start-btn');
  const app = document.getElementById('app');
  
  const letterBox = document.getElementById('letterBox');
  const gallerySectionEl = document.querySelector('.gallery-section');
  const canvas = document.getElementById('constellation-bg');
  
  const downloadPdf = document.getElementById('downloadPdf');
  const muteBtn = document.getElementById('muteBtn');
  const finalOverlay = document.getElementById('finalOverlay');
  const finalClose = document.getElementById('finalClose');

  /* ---------- AUDIO ---------- */
  const audioEls = CONFIG.songs.map((s, i) => {
    const el = document.getElementById(`audio-song-${i+1}`);
    if (el) { el.src = s.file; el.preload = 'auto'; el.crossOrigin = "anonymous"; }
    return el;
  }).filter(el => el != null);

  const voiceEl = document.getElementById('audio-voice');
  if (CONFIG.voiceNote && voiceEl) {
    voiceEl.src = CONFIG.voiceNote;
    voiceEl.preload = 'auto';
  }
  
  function handleAudioError(e, index) {
    console.error(`Error playing audio file: ${CONFIG.songs[index]?.file || 'voice note'}`, e);
  }
  
  function playSong(index) {
    if (index >= audioEls.length) {
      onPlaylistComplete();
      return;
    }
    const audioEl = audioEls[index];
    if (!audioEl) {
      playSong(index + 1);
      return;
    }
    audioEl.onended = () => playSong(index + 1);
    audioEl.onerror = (e) => {
        handleAudioError(e, index);
        playSong(index + 1);
    };
    audioEl.currentTime = 0;
    audioEl.muted = isMuted;
    audioEl.play().catch((e) => handleAudioError(e, index));
  }

  /* --- NEW: Constellation Background w/ Libra & Shooting Stars --- */
  function initConstellation() {
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error("Canvas context not found");
        return;
    }
    let width, height, particles, twinklingStars, shootingStars;
    
    // --- NEW: Accurate coordinates for Libra constellation ---
    // (Normalized 0-1) based on the image you provided
    const libraStars = [
        { x: 0.0, y: 0.5 },  // Zubenelgenubi (Alpha Librae)
        { x: 0.1, y: 0.1 },  // Zubeneschamali (Beta Librae)
        { x: 0.3, y: 0.6 },  // Zubenelhakrabi (Gamma Librae)
        { x: 0.6, y: 0.7 },  // Brachium (Sigma Librae)
        { x: 1.0, y: 0.65 }, // Upsilon Librae
        { x: 0.9, y: 0.0 },  // Tau Librae
    ];
    // Lines connecting the stars by their index
    const libraLines = [
        [0, 1], [0, 2], [1, 5], [2, 3], [3, 4], [4, 5]
    ];

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      
      particles = Array.from({length: 80}, () => ({ // Reduced particle count
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.random() * 0.2 - 0.1,
        vy: Math.random() * 0.4 - 0.2,
        radius: 1 + Math.random() * 1
      }));

      // More twinkling stars
      twinklingStars = Array.from({length: 40}, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5,
        alpha: 0.1 + Math.random() * 0.5,
        alphaChange: 0.01 + Math.random() * 0.01
      }));

      shootingStars = [];
    }
    
    function draw() {
      ctx.clearRect(0, 0, width, height);
      
      // Draw particles
      ctx.fillStyle = 'rgba(255, 219, 230, 0.5)';
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width; if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height; if (p.y > height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2); ctx.fill();
      });
      
      // Draw connecting lines
      ctx.strokeStyle = 'rgba(255, 192, 203, 0.1)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 120) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
          }
        }
      }

      // --- NEW: Draw Libra Constellation ---
      const constellationWidth = Math.min(width * 0.5, 300); // Max 300px wide
      const constellationHeight = constellationWidth * 0.8;
      const offsetX = (width - constellationWidth) / 2;
      const offsetY = height * 0.15;

      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      ctx.strokeStyle = 'rgba(255, 219, 230, 0.5)';
      ctx.lineWidth = 1;
      
      const starPoints = libraStars.map(s => ({
          x: s.x * constellationWidth + offsetX,
          y: s.y * constellationHeight + offsetY
      }));

      starPoints.forEach(p => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2); // Make Libra stars bigger
          ctx.fill();
      });

      libraLines.forEach(line => {
          ctx.beginPath();
          ctx.moveTo(starPoints[line[0]].x, starPoints[line[0]].y);
          ctx.lineTo(starPoints[line[1]].x, starPoints[line[1]].y);
          ctx.stroke();
      });


      // --- NEW: Draw Twinkling Stars ---
      twinklingStars.forEach(s => {
          s.alpha += s.alphaChange;
          if (s.alpha <= 0.1 || s.alpha >= 1) {
              s.alphaChange *= -1;
          }
          ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
          ctx.beginPath(); ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2); ctx.fill();
      });

      // --- NEW: Draw Shooting Stars (More Frequent) ---
      if (Math.random() > 0.985 && shootingStars.length < 5) { // Spawn more
        shootingStars.push({
          x: Math.random() * width, y: Math.random() * 100,
          len: 150 + Math.random() * 150, // Longer tails
          vx: 7 + Math.random() * 7, // Faster
          vy: 4 + Math.random() * 4, // Faster
          life: 1.0,
        });
      }

      ctx.lineCap = 'round';
      shootingStars.forEach((s, i) => {
        if (s.life <= 0) {
          shootingStars.splice(i, 1);
        } else {
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(s.x + s.len, s.y + (s.len * (s.vy / s.vx)));
          ctx.strokeStyle = `rgba(255, 255, 255, ${s.life * 0.5})`;
          ctx.lineWidth = 2;
          ctx.stroke();
          s.x += s.vx; s.y += s.vy; s.life -= 0.01;
        }
      });
      
      requestAnimationFrame(draw);
    }
    
    window.addEventListener('resize', resize);
    resize();
    draw();
  }

  /* --- NEW: Populate page with gallery and letter slides --- */
  function populateContent() {
    // 1. Populate Gallery
    CONFIG.photos.forEach(photo => {
      const item = document.createElement('div');
      item.className = 'carousel-item';
      item.innerHTML = `<img src="${photo.src}" alt="${photo.caption}">`;
      gallerySectionEl.appendChild(item);
    });

    // 2. Populate Letter Slides
    CONFIG.letter.forEach(slide => {
      const item = document.createElement('div');
      item.className = `letter-slide ${slide.type}`; 
      item.innerHTML = slide.text.replace(/\n/g, '<br>');
      letterBox.appendChild(item);
    });
  }

  /* --- NEW: Setup Intersection Observer (for photos AND letter) --- */
  function setupIntersectionObserver() {
    const items = document.querySelectorAll('.carousel-item, .letter-slide');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          if (entry.boundingClientRect.top > 0) {
            // It's below the viewport, fade it out
            entry.target.classList.remove('is-visible');
          }
        }
      });
    }, {
      root: app, // We observe scrolling *within* the #app container
      rootMargin: '0px 0px -15% 0px', // Trigger 15% from bottom
      threshold: 0.1 // Trigger when 10% of the item is visible
    });

    items.forEach(item => {
      observer.observe(item);
    });
  }

  /* --- NEW: Reliable PDF download (for formal letter) --- */
  downloadPdf.addEventListener('click', ()=>{
    const originalText = downloadPdf.textContent;
    downloadPdf.textContent = "Loading...";
    
    try {
      if (typeof jsPDF === 'undefined') {
        alert("Error: PDF library not loaded. Please try again.");
        downloadPdf.textContent = originalText;
        return;
      }

      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ unit: 'pt', format: 'letter' });
      const margin = 40;
      const pageHeight = doc.internal.pageSize.getHeight();
      const pageWidth = doc.internal.pageSize.getWidth();
      const usableWidth = pageWidth - (margin * 2);
      let cursorY = margin + 20;

      function checkPageBreak(lineHeight) {
        if (cursorY + lineHeight > pageHeight - margin) {
          doc.addPage();
          cursorY = margin;
        }
      }

      CONFIG.letter.forEach(slide => {
        let textLines;
        switch(slide.type) {
          case 'libra':
            checkPageBreak(30);
            doc.setFont('times', 'normal');
            doc.setFontSize(18);
            doc.text(slide.text, pageWidth / 2, cursorY, { align: 'center' });
            cursorY += 30;
            break;
          case 'date':
            checkPageBreak(30);
            doc.setFont('times', 'italic');
            doc.setFontSize(11);
            doc.text(slide.text, pageWidth - margin, cursorY, { align: 'right' });
            cursorY += 30;
            break;
          case 'salutation':
            checkPageBreak(40);
            doc.setFont('times', 'bold');
            doc.setFontSize(18);
            doc.text(slide.text, margin, cursorY);
            cursorY += 40;
            break;
          case 'body':
            checkPageBreak(25);
            doc.setFont('times', 'normal');
            doc.setFontSize(11);
            textLines = doc.splitTextToSize(slide.text, usableWidth);
            if (cursorY + (textLines.length * 12) > pageHeight - margin) {
              doc.addPage();
              cursorY = margin;
            }
            doc.text(textLines, margin, cursorY);
            cursorY += (textLines.length * 12) + 12; // Add paragraph spacing
            break;
          case 'closing':
            checkPageBreak(20);
            doc.setFont('times', 'bold');
            doc.setFontSize(18);
            doc.text(slide.text, margin, cursorY);
            cursorY += 20;
            break;
        }
      });

      doc.save("Happy_Birthday_Letter_for_Daniele.pdf");
      downloadPdf.textContent = originalText;

    } catch (e) {
      console.error("PDF generation failed:", e);
      alert("Error: Could not generate PDF. Please try again.");
      downloadPdf.textContent = originalText;
    }
  });

  /* --- Mute toggle --- */
  muteBtn.addEventListener('click', ()=>{
    isMuted = !isMuted;
    audioEls.forEach(el => { if(el) el.muted = isMuted; });
    if (voiceEl) { voiceEl.muted = isMuted; }
    muteBtn.textContent = isMuted ? "Unmute" : "Mute";
  });

  /* --- Final overlay --- */
  function onPlaylistComplete(){
    if (!finalOverlay.classList.contains('show')) {
        burstConfetti();
        finalOverlay.classList.add('show');
        finalOverlay.setAttribute('aria-hidden','false');
    }
  }
  
  finalClose.addEventListener('click', ()=> {
    finalOverlay.classList.remove('show');
    finalOverlay.setAttribute('aria-hidden','true');
  });

  // Confetti
  function burstConfetti() {
    const canvas = document.createElement('canvas');  
    canvas.style.position='fixed'; canvas.style.left=0; canvas.style.top=0;  
    canvas.style.zIndex=9999; canvas.style.pointerEvents='none';
    document.body.appendChild(canvas); canvas.width = innerWidth; canvas.height = innerHeight;
    const ctx = canvas.getContext('2d');
    const pieces = Array.from({length:220}, ()=>({
      x: Math.random()*canvas.width, y: -Math.random()*canvas.height,
      vx: (Math.random()-0.5)*6, vy: 2+Math.random()*6,
      size: 15 + Math.random() * 15,
      color: `hsl(${Math.random()*60+330}, 80%, 65%)`, rot: Math.random()*360
    }));
    let t = 0;
    function frame(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      pieces.forEach(p=>{
        p.x += p.vx; p.y += p.vy; p.rot += 3;
        ctx.save();
        ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180);
        ctx.font = `${p.size}px Arial`; ctx.fillStyle = p.color;
        ctx.globalAlpha = p.y < 0 ? 0 : 1;
        ctx.fillText('💖', -p.size/2, p.size/2);
        ctx.restore();
      });
      t++; if(t < 300) requestAnimationFrame(frame); else canvas.remove();
    }
    frame();
  }

  /* ---------- Orchestration / Start button ---------- */
  startBtn.addEventListener('click', async () => {
    // 1. Unlock playback permission
    for (const el of audioEls) {
      try { await el.play(); el.pause(); el.currentTime = 0; }  
      catch(e){ handleAudioError(e, audioEls.indexOf(el)); }
    }
    if (CONFIG.voiceNote && voiceEl) {
      try { await voiceEl.play(); voiceEl.pause(); voiceEl.currentTime = 0; }  
      catch(e){ handleAudioError(e, 'voice'); }
    }

    // 2. show app & start visuals
    intro.style.opacity = 0;
    intro.setAttribute('aria-hidden', 'true');
    setTimeout(()=> {
      intro.style.display = 'none'; // Use display:none to unblock page
      app.classList.remove('hidden');
      
      // --- CRITICAL BUG FIX ---
      // This line locks the body scroll *after*
      // the intro screen is gone, allowing #app to scroll.
      document.body.style.overflow = 'hidden'; 
      
      app.classList.add('loaded');
    }, 600);
    
    // 3. Populate the content
    populateContent();

    // 4. Start the new background
    initConstellation();

    // 5. Wait for browser to draw, then set up observers
    requestAnimationFrame(() => {
      setupIntersectionObserver();
      
      // Trigger voice at the end
      const lastSlide = document.querySelector('.letter-slide:last-child');
      if (lastSlide && voiceEl && CONFIG.voiceNote) {
        const voiceObserver = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting && voiceEl.paused && !isScrolling) {
            isScrolling = true;
            voiceEl.play().catch((e) => handleAudioError(e, 'voice'));
            voiceObserver.disconnect(); // Only play once
          }
        }, { root: app, threshold: 0.8 });
        voiceObserver.observe(lastSlide);
      }
    });
    
    // 6. Start the music
    playSong(0);
  });
  
  // By default, body is scrollable so intro works.

}); // End DOMContentLoaded

