

// Confetti Effect
class ConfettiEffect {
    constructor() {
        this.container = document.getElementById('confetti-container');
        this.colors = ['#ff6b9d', '#feca57', '#4facfe', '#00f2fe', '#ff9ff3'];
    }

    createConfetti() {
        for (let i = 0; i < 150; i++) {
            setTimeout(() => {
                this.createConfettiPiece();
            }, i * 20);
        }
    }

    createConfettiPiece() {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = this.colors[Math.floor(Math.random() * this.colors.length)];
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        
        this.container.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 5000);
    }
}

// Modal Management
class ModalManager {
    constructor() {
        this.modal = document.getElementById('success-modal');
        this.closeBtn = document.querySelector('.close-modal');
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.closeBtn.addEventListener('click', () => this.closeModal());
        window.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
    }

    showModal(message) {
        document.getElementById('modal-message').innerHTML = message;
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Smooth Scrolling and Animations
class AnimationManager {
    constructor() {
        this.setupIntersectionObserver();
        this.setupSmoothScrolling();
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all animated elements
        document.querySelectorAll('.wishes-card, .personal-message, .video-section, .secret-message-section, .countdown-section, .footer').forEach(el => {
            observer.observe(el);
        });
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Password Protection for Secret Message
function checkPassword() {
    const passwordInput = document.getElementById('password-input');
    const secretContent = document.getElementById('secret-content');
    const modalManager = new ModalManager();
    const confettiEffect = new ConfettiEffect();
    
    // You can change this password to whatever you want
    const correctPassword = 'birthday2024'; // Change this to your desired password
    
    if (passwordInput.value.toLowerCase() === correctPassword.toLowerCase()) {
        // Correct password - show secret message
        secretContent.style.display = 'block';
        passwordInput.value = '';
        passwordInput.placeholder = 'Password correct! 🎉';
        
        // Show success message
        modalManager.showModal(`
            <h2>🎉 Access Granted! 🎉</h2>
            <p>You've unlocked the secret message!</p>
            <p>Scroll down to read it... 💕</p>
            <div style="font-size: 3rem; margin: 20px 0;">🔓✨💝</div>
        `);
        
        // Trigger confetti celebration
        confettiEffect.createConfetti();
        
        // Smooth scroll to secret content
        setTimeout(() => {
            secretContent.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }, 1000);
        
    } else {
        // Wrong password
        passwordInput.value = '';
        passwordInput.placeholder = 'Wrong password, try again...';
        passwordInput.style.borderColor = '#ff6b6b';
        passwordInput.style.animation = 'shake 0.5s ease-in-out';
        
        // Remove shake animation after it completes
        setTimeout(() => {
            passwordInput.style.animation = '';
            passwordInput.style.borderColor = '';
            passwordInput.placeholder = 'Enter the secret password...';
        }, 500);
        
        // Show error message
        modalManager.showModal(`
            <h2>🔒 Access Denied</h2>
            <p>That's not the right password!</p>
            <p>Try again... maybe it's something special to you? 🤔</p>
            <div style="font-size: 3rem; margin: 20px 0;">🔐😅</div>
        `);
    }
}

// Parallax Effect for Floating Shapes
function setupParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.5;
            shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
    });
}

// Typing Effect for Title
function setupTypingEffect() {
    const titleLines = document.querySelectorAll('.title-line');
    
    titleLines.forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    line.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            typeWriter();
        }, index * 1000);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize modal manager
    new ModalManager();
    
    // Initialize animation manager
    new AnimationManager();
    
    // Setup parallax effect
    setupParallax();
    
    // Setup typing effect
    setupTypingEffect();
    
    // Add some interactive hover effects
    addHoverEffects();
    
    // Add music toggle (optional)
    addMusicToggle();
    
    // Add Easter eggs
    addEasterEggs();
    
    // Add keyboard shortcuts
    setupKeyboardShortcuts();
    
    // Add shake animation for wrong password
    addShakeAnimation();
});

// Add hover effects to interactive elements
function addHoverEffects() {
    const cards = document.querySelectorAll('.wishes-card, .personal-message, .secret-message-section');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Optional: Add background music toggle
function addMusicToggle() {
    const musicToggle = document.createElement('button');
    musicToggle.innerHTML = '🎵';
    musicToggle.className = 'music-toggle';
    musicToggle.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    musicToggle.addEventListener('click', () => {
        musicToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            musicToggle.style.transform = 'rotate(0deg)';
        }, 300);
        
        // Show message about music
        const modalManager = new ModalManager();
        modalManager.showModal(`
            <h2>🎵 Music Feature</h2>
            <p>This is where you could add background music!</p>
            <p>Just add an audio element and control it here.</p>
            <div style="font-size: 3rem; margin: 20px 0;">🎶✨</div>
        `);
    });
    
    document.body.appendChild(musicToggle);
}

// Add some fun Easter eggs
function addEasterEggs() {
    let clickCount = 0;
    const birthdayIcon = document.querySelector('.birthday-icon');
    
    birthdayIcon.addEventListener('click', () => {
        clickCount++;
        if (clickCount >= 5) {
            const confettiEffect = new ConfettiEffect();
            confettiEffect.createConfetti();
            birthdayIcon.style.animation = 'spin 1s linear infinite';
            setTimeout(() => {
                birthdayIcon.style.animation = 'bounce 2s infinite';
            }, 3000);
            clickCount = 0;
        }
    });
}

// Setup keyboard shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('success-modal');
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
        
        // Secret key combination for fun
        if (e.ctrlKey && e.shiftKey && e.key === 'B') {
            const confettiEffect = new ConfettiEffect();
            confettiEffect.createConfetti();
        }
        
        // Enter key to submit password
        if (e.key === 'Enter' && document.activeElement.id === 'password-input') {
            checkPassword();
        }
    });
}

// Add shake animation for wrong password
function addShakeAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        .music-toggle:hover {
            background: rgba(255, 255, 255, 0.3) !important;
            transform: scale(1.1) !important;
        }
    `;
    document.head.appendChild(style);
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(setupParallax, 16)); // 60fps
