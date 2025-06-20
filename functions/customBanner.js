const phrases = [ 
    "[🧟‍♂️] hugs from [webster](https://instagram.com/wbztrr)",
    "[🧟‍♂️] how about you sell this?",
    "[🧟‍♂️] better than chatgpt",
    "[🧟‍♂️] on your own",
    "[🧟‍♂️] hey siri",
];

setInterval(() => { 
    const greeting = document.querySelector('.stp-animated-banner h2');
    if (greeting&&features.customBanner) greeting.textContent = phrases[Math.floor(Math.random() * phrases.length)];
}, 3000);