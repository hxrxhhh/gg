// Create confetti
function createConfetti() {
    for(let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
        document.body.appendChild(confetti);
    }
}

// Create floating hearts
function createHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'hearts';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 3000);
    }, 300);
}

// Start animations
document.addEventListener('DOMContentLoaded', () => {
    createConfetti();
    createHearts();
    
    // Start music (might require user interaction on some browsers)
    document.body.addEventListener('click', () => {
        document.getElementById('birthdaySong').play();
    });

    // Add hover effect to main photo
    document.querySelector('.main-photo').addEventListener('mouseover', () => {
        document.querySelector('.main-photo').style.transform = 'scale(1.1)';
        document.querySelector('.main-photo').style.filter = 'sepia(0)';
    });

    document.querySelector('.main-photo').addEventListener('mouseout', () => {
        document.querySelector('.main-photo').style.transform = 'scale(1)';
        document.querySelector('.main-photo').style.filter = 'sepia(0.2)';
    });
});