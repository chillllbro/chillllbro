

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
    // Create audio element for background music
    const audio = document.createElement('audio');
    audio.id = 'background-music';
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0.5; // Set default volume to 50%
    
    // Create music toggle button
    const musicToggle = document.createElement('button');
    musicToggle.innerHTML = '🎵';
    musicToggle.className = 'music-toggle';
    musicToggle.id = 'music-toggle';
    musicToggle.title = 'Click to play/pause music';
    
    // Create volume control
    const volumeControl = document.createElement('div');
    volumeControl.className = 'volume-control';
    volumeControl.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 15px;
        padding: 15px;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    volumeControl.innerHTML = `
        <div style="margin-bottom: 10px; color: white; font-size: 0.9rem;">Volume</div>
        <input type="range" id="volume-slider" min="0" max="100" value="50" style="width: 100px;">
        <div style="margin-top: 10px; color: white; font-size: 0.9rem;">🎵</div>
    `;
    
    // Add styles for music toggle button
    const musicToggleStyles = `
        .music-toggle {
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
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        .music-toggle:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: scale(1.1);
        }
        
        .music-toggle.playing {
            background: rgba(76, 175, 80, 0.3);
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(76, 175, 80, 0); }
            100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
        }
        
        .volume-control input[type="range"] {
            -webkit-appearance: none;
            appearance: none;
            height: 6px;
            border-radius: 3px;
            background: rgba(255, 255, 255, 0.3);
            outline: none;
        }
        
        .volume-control input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: white;
            cursor: pointer;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
        
        .volume-control input[type="range"]::-moz-range-thumb {
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: white;
            cursor: pointer;
            border: none;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
    `;
    
    // Inject styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = musicToggleStyles;
    document.head.appendChild(styleSheet);
    
    // Music toggle functionality
    let isPlaying = false;
    let volumeControlVisible = false;
    
    // Function to start music
    function startMusic() {
        audio.play().then(() => {
            isPlaying = true;
            musicToggle.innerHTML = '⏸️';
            musicToggle.classList.add('playing');
            musicToggle.title = 'Click to pause music';
        }).catch(error => {
            console.log('Auto-play failed:', error);
            // Auto-play failed, but that's normal
            isPlaying = false;
        });
    }
    
    // Function to stop music
    function stopMusic() {
        audio.pause();
        isPlaying = false;
        musicToggle.innerHTML = '🎵';
        musicToggle.classList.remove('playing');
        musicToggle.title = 'Click to play music';
        
        // Hide volume control when stopping
        volumeControl.style.display = 'none';
        volumeControlVisible = false;
    }
    
    // Function to toggle volume control
    function toggleVolumeControl() {
        if (volumeControlVisible) {
            volumeControl.style.display = 'none';
            volumeControlVisible = false;
        } else {
            volumeControl.style.display = 'block';
            volumeControlVisible = true;
        }
    }
    
               // Music toggle click handler
           musicToggle.addEventListener('click', () => {
               if (!isPlaying) {
                   startMusic();
               } else {
                   // If music is playing, pause it
                   stopMusic();
               }
           });
    
               // Right-click to show/hide volume control
           musicToggle.addEventListener('contextmenu', (e) => {
               e.preventDefault();
               toggleVolumeControl();
           });
           
           // Long press (touch) to show/hide volume control
           let longPressTimer;
           musicToggle.addEventListener('touchstart', () => {
               longPressTimer = setTimeout(() => {
                   toggleVolumeControl();
               }, 500); // 500ms long press
           });
           
           musicToggle.addEventListener('touchend', () => {
               clearTimeout(longPressTimer);
           });
    
    // Volume control functionality
    const volumeSlider = volumeControl.querySelector('#volume-slider');
    volumeSlider.addEventListener('input', (e) => {
        const volume = e.target.value / 100;
        audio.volume = volume;
    });
    
    // Volume control click handler (for mobile)
    volumeControl.addEventListener('click', (e) => {
        // Prevent clicks inside volume control from closing it
        e.stopPropagation();
    });
    
    // Close volume control when clicking outside
    document.addEventListener('click', (e) => {
        if (!volumeControl.contains(e.target) && !musicToggle.contains(e.target)) {
            volumeControl.style.display = 'none';
            volumeControlVisible = false;
        }
    });
    
    // Add elements to page
    document.body.appendChild(audio);
    document.body.appendChild(musicToggle);
    document.body.appendChild(volumeControl);
    
    // Add music source (you can change this to your preferred song)
    audio.src = 'birthday-music.mp3'; // 🔧 CHANGE THIS TO YOUR MUSIC FILE!
    
    // Attempt to auto-start music when page loads
    // Note: Modern browsers block auto-play until user interaction
    // This will attempt to play but may fail silently
    setTimeout(() => {
        startMusic();
    }, 1000); // Wait 1 second after page load
    
    // Also try to start music on first user interaction with the page
    let firstInteraction = true;
    const interactionEvents = ['click', 'touchstart', 'keydown', 'scroll'];
    
    interactionEvents.forEach(event => {
        document.addEventListener(event, () => {
            if (firstInteraction && !isPlaying) {
                startMusic();
                firstInteraction = false;
            }
        }, { once: true });
    });
    
    // Show instructions on first visit
    if (!localStorage.getItem('music-instructions-shown')) {
        setTimeout(() => {
            const modalManager = new ModalManager();
            modalManager.showModal(`
                <h2>🎵 Welcome to Your Birthday Page!</h2>
                <p>Music will start automatically when you interact with the page!</p>
                <p><strong>To add your own music:</strong></p>
                <ol style="text-align: left; margin: 20px 0;">
                    <li>Save your music file in this folder (e.g., birthday-song.mp3)</li>
                    <li>Open index.js and find line 435</li>
                    <li>Change 'birthday-music.mp3' to your filename</li>
                </ol>
                <p><strong>Music Controls:</strong></p>
                <ul style="text-align: left; margin: 20px 0;">
                    <li>🎵 Click to play/pause</li>
                    <li>🔊 Click again to see volume control</li>
                    <li>🔄 Music loops automatically</li>
                </ul>
                <div style="font-size: 3rem; margin: 20px 0;">🎂🎶</div>
            `);
            localStorage.setItem('music-instructions-shown', 'true');
        }, 3000);
    }
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
