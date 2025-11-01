/* ===================== CONFIG - Add your content here ===================== */

// --- NEW: Letter is now an array of "slides" ---
// This allows us to format it and fade in each paragraph.
const today = new Date();
const formattedDate = today.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

const CONFIG = {
  // --- NEW: Formatted letter slides ---
  letter: [
    { type: 'date', text: formattedDate },
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
    {src:...
