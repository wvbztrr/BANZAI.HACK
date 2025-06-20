const phrases = [ 
    "[🧟‍♂️] remix from [webster](https://instagram.com/wbztrr)",
    "[🧟‍♂️] better than chatgpt",
    "[🧟‍♂️] hey siri",
];

setInterval(() => { 
    const greeting = document.querySelector('.stp-animated-banner h2');
    if (greeting&&features.customBanner) greeting.textContent = phrases[Math.floor(Math.random() * phrases.length)];
}, 3000);
