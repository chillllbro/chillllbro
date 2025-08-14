

// ============================================================================
// 🕐 COUNTDOWN TIMER CONFIGURATION
// ============================================================================
// 🔧 CHANGE THIS VARIABLE TO SET WHEN THE WEBSITE BECOMES AVAILABLE!
// Format: 'YYYY-MM-DD HH:MM:SS' (24-hour format)
// Examples:
// - For 12 midnight EST today: '2025-08-14 00:00:00'
// - For 6 PM EST today: '2025-08-14 18:00:00'
// - For tomorrow at 9 AM: '2025-08-15 09:00:00'
// - For Christmas at midnight: '2025-12-25 00:00:00'
// - For 11:49 AM EST today: '2025-08-14 11:49:00'
const TARGET_RELEASE_TIME = '2025-08-14 11:05:00'; // 🔧 CHANGE THIS!

// 🎭 TRICK MODE: Set to true for real birthday content, false for fake "gotcha" screen
const SHOW_REAL_CONTENT = false; // 🔧 CHANGE THIS! (true = real content, false = fake screen)

// ============================================================================
// 🎂 BIRTHDAY WEBSITE COUNTDOWN SYSTEM
// ============================================================================
class CountdownTimer {
    constructor() {
        this.targetTime = this.parseTargetTime();
        this.countdownElement = null;
        this.isReleased = false;
        this.init();
    }

    parseTargetTime() {
        // Parse the target time string and create a Date object
        // This will use the user's local timezone automatically
        const [datePart, timePart] = TARGET_RELEASE_TIME.split(' ');
        const [year, month, day] = datePart.split('-').map(Number);
        const [hour, minute, second] = timePart.split(':').map(Number);
        
        // Create Date object in local timezone
        return new Date(year, month - 1, day, hour, minute, second);
    }

    init() {
        this.createCountdownOverlay();
        this.checkTime();
        this.startCountdown();
    }

    createCountdownOverlay() {
        // Create countdown overlay
        const overlay = document.createElement('div');
        overlay.id = 'countdown-overlay';
        overlay.innerHTML = `
            <div class="countdown-container">
                <div class="countdown-header">
                    <h1> Keep Waiting bitch,</h1>
                    <p>Did I cook?...</p>
                </div>
                
                <div class="countdown-timer">
                    <div class="time-unit">
                        <span id="days" class="time-number">00</span>
                        <span class="time-label">Days</span>
                    </div>
                    <div class="time-unit">
                        <span id="hours" class="time-number">00</span>
                        <span class="time-label">Hours</span>
                    </div>
                    <div class="time-unit">
                        <span id="minutes" class="time-number">00</span>
                        <span class="time-label">Minutes</span>
                    </div>
                    <div class="time-unit">
                        <span id="seconds" class="time-number">00</span>
                        <span class="time-label">Seconds</span>
                    </div>
                </div>
                
                <div class="countdown-info">
                    <p>You'll see this at your birthday</p>
                </div>
                
                <div class="countdown-message">
                    <p>Something amazing...</p>
                    <p>Please wait until the countdown reaches zero!</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        this.countdownElement = overlay;
        
        // Add countdown styles
        this.addCountdownStyles();
    }

    addCountdownStyles() {
        const styles = `
            #countdown-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'Poppins', sans-serif;
                color: white;
                overflow: hidden;
            }
            
            .countdown-container {
                text-align: center;
                max-width: 800px;
                padding: 40px;
                background: rgba(0, 0, 0, 0.3);
                backdrop-filter: blur(25px);
                border-radius: 30px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                box-shadow: 
                    0 25px 80px rgba(0, 0, 0, 0.5),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1);
                animation: countdownFadeIn 1s ease-out;
                position: relative;
            }
            
            .countdown-container::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
                border-radius: 30px;
                pointer-events: none;
            }
            
            @keyframes countdownFadeIn {
                from { opacity: 0; transform: scale(0.9) translateY(20px); }
                to { opacity: 1; transform: scale(1) translateY(0); }
            }
            
            .countdown-header h1 {
                font-size: 3rem;
                margin-bottom: 15px;
                text-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
                animation: titleGlow 2s ease-in-out infinite alternate;
                background: linear-gradient(45deg, #00d4ff, #ffffff);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            @keyframes titleGlow {
                from { 
                    filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.5));
                }
                to { 
                    filter: drop-shadow(0 4px 25px rgba(0, 212, 255, 0.6));
                }
            }
            
            .countdown-header p {
                font-size: 1.3rem;
                margin-bottom: 40px;
                opacity: 0.9;
                color: #b8b8b8;
            }
            
            .countdown-timer {
                display: flex;
                justify-content: center;
                gap: 30px;
                margin-bottom: 40px;
                flex-wrap: wrap;
            }
            
            .time-unit {
                display: flex;
                flex-direction: column;
                align-items: center;
                min-width: 120px;
                padding: 20px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 20px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                transition: all 0.3s ease;
            }
            
            .time-unit:hover {
                background: rgba(255, 255, 255, 0.1);
                border-color: rgba(0, 212, 255, 0.3);
                transform: translateY(-5px);
                box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
            }
            
            .time-number {
                font-size: 4rem;
                font-weight: 700;
                background: linear-gradient(45deg, #00d4ff, #0099cc);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-shadow: none;
                animation: numberPulse 1s ease-in-out infinite;
                filter: drop-shadow(0 2px 10px rgba(0, 212, 255, 0.3));
            }
            
            @keyframes numberPulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
            
            .time-label {
                font-size: 1rem;
                margin-top: 10px;
                opacity: 0.8;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: #b8b8b8;
                font-weight: 500;
            }
            
            .countdown-info {
                background: rgba(0, 0, 0, 0.4);
                padding: 25px;
                border-radius: 20px;
                margin-bottom: 30px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(15px);
                position: relative;
            }
            
            .countdown-info::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, transparent 50%);
                border-radius: 20px;
                pointer-events: none;
            }
            
            .countdown-info p {
                margin: 10px 0;
                font-size: 1.1rem;
                color: #e0e0e0;
                position: relative;
                z-index: 1;
            }
            
            .countdown-info strong {
                color: #00d4ff;
                text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
            }
            
            .countdown-message {
                font-size: 1.2rem;
                line-height: 1.6;
                color: #b8b8b8;
            }
            
            .countdown-message p {
                margin: 10px 0;
                opacity: 0.9;
            }
            
            /* Floating particles for visual appeal */
            #countdown-overlay::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: 
                    radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
                    radial-gradient(circle at 40% 40%, rgba(0, 212, 255, 0.05) 0%, transparent 50%);
                animation: backgroundFloat 20s ease-in-out infinite;
            }
            
            @keyframes backgroundFloat {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(180deg); }
            }
            
            /* Responsive design */
            @media (max-width: 768px) {
                .countdown-container {
                    padding: 30px 20px;
                    margin: 20px;
                }
                
                .countdown-header h1 {
                    font-size: 2.5rem;
                }
                
                .countdown-timer {
                    gap: 20px;
                }
                
                .time-unit {
                    min-width: 100px;
                    padding: 15px;
                }
                
                .time-number {
                    font-size: 3rem;
                }
            }
            
            @media (max-width: 480px) {
                .countdown-header h1 {
                    font-size: 2rem;
                }
                
                .countdown-timer {
                    gap: 15px;
                }
                
                .time-unit {
                    min-width: 80px;
                    padding: 12px;
                }
                
                .time-number {
                    font-size: 2.5rem;
                }
                
                .time-label {
                    font-size: 0.9rem;
                }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }

    formatTargetTime() {
        return this.targetTime.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        });
    }

    formatCurrentTime() {
        return new Date().toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short'
        });
    }

    checkTime() {
        const now = new Date();
        if (now >= this.targetTime) {
            this.releaseWebsite();
        }
    }

    startCountdown() {
        const updateCountdown = () => {
            const now = new Date();
            const timeLeft = this.targetTime - now;
            
            if (timeLeft <= 0) {
                this.releaseWebsite();
                return;
            }
            
            // Calculate time units
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            // Update display
            if (this.countdownElement) {
                const daysEl = this.countdownElement.querySelector('#days');
                const hoursEl = this.countdownElement.querySelector('#hours');
                const minutesEl = this.countdownElement.querySelector('#minutes');
                const secondsEl = this.countdownElement.querySelector('#seconds');
                const currentTimeEl = this.countdownElement.querySelector('#current-time');
                
                if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
                if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
                if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
                if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
                if (currentTimeEl) currentTimeEl.textContent = this.formatCurrentTime();
            }
        };
        
        // Update immediately and then every second
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    releaseWebsite() {
        if (this.isReleased) return;
        this.isReleased = true;
        
        // Add release animation
        if (this.countdownElement) {
            this.countdownElement.style.animation = 'countdownRelease 1s ease-out forwards';
        }
        
        // Remove countdown overlay after animation
        setTimeout(() => {
            if (this.countdownElement && this.countdownElement.parentNode) {
                this.countdownElement.parentNode.removeChild(this.countdownElement);
            }
            
            // Show birthday website
            this.showBirthdayWebsite();
            
        }, 1000);
        
        // Add release animation styles
        const releaseStyles = `
            @keyframes countdownRelease {
                0% { 
                    opacity: 1; 
                    transform: scale(1); 
                }
                100% { 
                    opacity: 0; 
                    transform: scale(1.5); 
                }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = releaseStyles;
        document.head.appendChild(styleSheet);
    }

    showBirthdayWebsite() {
        if (SHOW_REAL_CONTENT) {
            // Show real birthday content
            this.showRealBirthdayWebsite();
        } else {
            // Show fake "gotcha" screen
            this.showFakeGotchaScreen();
        }
    }

    showRealBirthdayWebsite() {
        // Show all birthday content
        const birthdayContent = document.querySelector('.container');
        if (birthdayContent) {
            birthdayContent.style.display = 'block';
            birthdayContent.style.animation = 'contentFadeIn 1s ease-out';
            
            // Add loaded class for smooth transition
            setTimeout(() => {
                birthdayContent.classList.add('loaded');
            }, 100);
        }
        
        // Add content fade-in animation
        const contentStyles = `
            @keyframes contentFadeIn {
                from { 
                    opacity: 0; 
                    transform: translateY(30px); 
                }
                to { 
                    opacity: 1; 
                    transform: translateY(0); 
                }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = contentStyles;
        document.head.appendChild(styleSheet);
        
        // Trigger confetti celebration
        setTimeout(() => {
            const confettiEffect = new ConfettiEffect();
            confettiEffect.createConfetti();
        }, 500);
    }

    showFakeGotchaScreen() {
        // Create fake "gotcha" screen
        const fakeScreen = document.createElement('div');
        fakeScreen.id = 'fake-gotcha-screen';
        fakeScreen.innerHTML = `
            <div class="gotcha-container">
                <div class="gotcha-icon">🤡</div>
                <h1 class="gotcha-title">You think I'll do this much mehnat?</h1>
                <p class="gotcha-subtitle">Nice try, but I'm not that attached!</p>
                
                <div class="gotcha-message">
                    <p> You've been tricked! 🎭</p>
                    <p>🎪 This was all just a countdown to disappointment</p>
                    <p>🎪 Maybe next time I'll actually make something special...</p>
                    <p>🎪 Or maybe not! Who knows? 🤷‍♂️</p>
                </div>
                
                <div class="gotcha-actions">
                    <button onclick="location.reload()" class="btn-try-again">🔄 Try Again (It Won't Help)</button>
                    <button onclick="this.parentElement.innerHTML='<p>🎪 Still nothing! Told you so! 😈</p>'" class="btn-nothing">🎪 Click for Nothing</button>
                </div>
                
                <div class="gotcha-footer">
                    <p>🎭 The End (or is it?)</p>
                    <p>Thanks for playing along! 😈</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(fakeScreen);
        
        // Add gotcha screen styles
        this.addGotchaStyles();
        
        // Trigger some fake "celebration" effects
        setTimeout(() => {
            this.createFakeCelebration();
        }, 500);
    }

    addGotchaStyles() {
        const styles = `
            #fake-gotcha-screen {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                min-height: 100vh;
                background: linear-gradient(135deg, #2c1810 0%, #1a0f0a 50%, #0f0805 100%);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'Poppins', sans-serif;
                color: white;
                overflow-y: auto;
                overflow-x: hidden;
                padding: 20px;
                box-sizing: border-box;
            }
            
            .gotcha-container {
                text-align: center;
                max-width: 800px;
                width: 100%;
                padding: 30px 20px;
                background: rgba(0, 0, 0, 0.4);
                backdrop-filter: blur(25px);
                border-radius: 20px;
                border: 2px solid rgba(255, 165, 0, 0.3);
                box-shadow: 
                    0 25px 80px rgba(0, 0, 0, 0.6),
                    inset 0 1px 0 rgba(255, 165, 0, 0.2);
                animation: gotchaFadeIn 1s ease-out;
                position: relative;
                margin: auto;
                min-height: fit-content;
            }
            
            .gotcha-container::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(135deg, rgba(255, 165, 0, 0.05) 0%, transparent 50%);
                border-radius: 20px;
                pointer-events: none;
            }
            
            @keyframes gotchaFadeIn {
                from { opacity: 0; transform: scale(0.9) rotate(-5deg); }
                to { opacity: 1; transform: scale(1) rotate(0deg); }
            }
            
            .gotcha-icon {
                font-size: 4rem;
                margin-bottom: 15px;
                animation: clownBounce 2s ease-in-out infinite;
                filter: drop-shadow(0 4px 15px rgba(255, 165, 0, 0.5));
            }
            
            @keyframes clownBounce {
                0%, 100% { transform: translateY(0) rotate(0deg); }
                25% { transform: translateY(-10px) rotate(5deg); }
                50% { transform: translateY(-5px) rotate(-5deg); }
                75% { transform: translateY(-15px) rotate(3deg); }
            }
            
            .gotcha-title {
                font-size: 2rem;
                margin-bottom: 15px;
                background: linear-gradient(45deg, #ffa500, #ff8c00);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
                animation: titleWiggle 3s ease-in-out infinite;
                line-height: 1.2;
                word-wrap: break-word;
            }
            
            @keyframes titleWiggle {
                0%, 100% { transform: rotate(0deg); }
                25% { transform: rotate(1deg); }
                75% { transform: rotate(-1deg); }
            }
            
            .gotcha-subtitle {
                font-size: 1.1rem;
                margin-bottom: 20px;
                color: #ffa500;
                font-style: italic;
                line-height: 1.3;
            }
            
            .gotcha-message {
                background: rgba(255, 165, 0, 0.1);
                padding: 20px 15px;
                border-radius: 15px;
                margin-bottom: 20px;
                border: 1px solid rgba(255, 165, 0, 0.2);
                backdrop-filter: blur(15px);
            }
            
            .gotcha-message p {
                margin: 10px 0;
                font-size: 1rem;
                color: #e0e0e0;
                line-height: 1.4;
            }
            
            .gotcha-actions {
                display: flex;
                justify-content: center;
                gap: 15px;
                margin-bottom: 20px;
                flex-wrap: wrap;
            }
            
            .btn-try-again, .btn-nothing {
                padding: 10px 20px;
                border: none;
                border-radius: 20px;
                font-size: 0.9rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                background: linear-gradient(45deg, #ffa500, #ff8c00);
                color: white;
                box-shadow: 0 4px 15px rgba(255, 165, 0, 0.3);
                min-width: 140px;
            }
            
            .btn-try-again:hover, .btn-nothing:hover {
                transform: translateY(-3px);
                box-shadow: 0 6px 20px rgba(255, 165, 0, 0.4);
            }
            
            .btn-nothing {
                background: linear-gradient(45deg, #ff6b6b, #ee5a52);
            }
            
            .btn-nothing:hover {
                box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
            }
            
            .gotcha-footer {
                margin-top: 20px;
                padding-top: 15px;
                border-top: 1px solid rgba(255, 165, 0, 0.2);
                color: #b8b8b8;
            }
            
            .gotcha-footer p {
                margin: 6px 0;
                font-size: 0.9rem;
                opacity: 0.8;
                line-height: 1.3;
            }
            
            /* Floating particles for visual appeal */
            #fake-gotcha-screen::before {
                content: '';
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: 
                    radial-gradient(circle at 20% 80%, rgba(255, 165, 0, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.05) 0%, transparent 50%),
                    radial-gradient(circle at 40% 40%, rgba(255, 165, 0, 0.05) 0%, transparent 50%);
                animation: backgroundFloat 20s ease-in-out infinite;
                pointer-events: none;
            }
            
            /* Responsive design */
            @media (max-width: 768px) {
                #fake-gotcha-screen {
                    padding: 15px;
                    align-items: flex-start;
                    padding-top: 20px;
                }
                
                .gotcha-container {
                    padding: 25px 15px;
                    margin: 0;
                    border-radius: 15px;
                }
                
                .gotcha-title {
                    font-size: 1.8rem;
                    margin-bottom: 12px;
                }
                
                .gotcha-icon {
                    font-size: 3.5rem;
                    margin-bottom: 12px;
                }
                
                .gotcha-subtitle {
                    font-size: 1rem;
                    margin-bottom: 15px;
                }
                
                .gotcha-message {
                    padding: 15px 12px;
                    margin-bottom: 15px;
                }
                
                .gotcha-message p {
                    font-size: 0.95rem;
                    margin: 8px 0;
                }
                
                .gotcha-actions {
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 15px;
                }
                
                .btn-try-again, .btn-nothing {
                    width: 100%;
                    max-width: 250px;
                    padding: 12px 15px;
                    font-size: 0.95rem;
                }
                
                .gotcha-footer {
                    margin-top: 15px;
                    padding-top: 12px;
                }
                
                .gotcha-footer p {
                    font-size: 0.85rem;
                    margin: 5px 0;
                }
            }
            
            @media (max-width: 480px) {
                #fake-gotcha-screen {
                    padding: 10px;
                    padding-top: 15px;
                }
                
                .gotcha-container {
                    padding: 20px 12px;
                    border-radius: 12px;
                }
                
                .gotcha-title {
                    font-size: 1.6rem;
                    margin-bottom: 10px;
                }
                
                .gotcha-icon {
                    font-size: 3rem;
                    margin-bottom: 10px;
                }
                
                .gotcha-subtitle {
                    font-size: 0.95rem;
                    margin-bottom: 12px;
                }
                
                .gotcha-message {
                    padding: 12px 10px;
                    margin-bottom: 12px;
                    border-radius: 10px;
                }
                
                .gotcha-message p {
                    font-size: 0.9rem;
                    margin: 6px 0;
                }
                
                .gotcha-actions {
                    gap: 10px;
                    margin-bottom: 12px;
                }
                
                .btn-try-again, .btn-nothing {
                    padding: 10px 12px;
                    font-size: 0.9rem;
                    border-radius: 18px;
                }
                
                .gotcha-footer {
                    margin-top: 12px;
                    padding-top: 10px;
                }
                
                .gotcha-footer p {
                    font-size: 0.8rem;
                    margin: 4px 0;
                }
            }
            
            @media (max-height: 600px) {
                #fake-gotcha-screen {
                    align-items: flex-start;
                    padding-top: 10px;
                }
                
                .gotcha-container {
                    padding: 20px 15px;
                }
                
                .gotcha-icon {
                    font-size: 2.5rem;
                    margin-bottom: 10px;
                }
                
                .gotcha-title {
                    font-size: 1.5rem;
                    margin-bottom: 8px;
                }
                
                .gotcha-subtitle {
                    font-size: 0.9rem;
                    margin-bottom: 10px;
                }
                
                .gotcha-message {
                    padding: 15px 12px;
                    margin-bottom: 12px;
                }
                
                .gotcha-message p {
                    font-size: 0.85rem;
                    margin: 5px 0;
                }
                
                .gotcha-actions {
                    margin-bottom: 10px;
                }
                
                .btn-try-again, .btn-nothing {
                    padding: 8px 15px;
                    font-size: 0.85rem;
                }
                
                .gotcha-footer {
                    margin-top: 10px;
                    padding-top: 8px;
                }
                
                .gotcha-footer p {
                    font-size: 0.75rem;
                    margin: 3px 0;
                }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }

    createFakeCelebration() {
        // Create some fake "celebration" effects
        const colors = ['#ffa500', '#ff6b6b', '#ffd700', '#ff8c00'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: fixed;
                    width: 8px;
                    height: 8px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    border-radius: 50%;
                    left: ${Math.random() * 100}vw;
                    top: 100vh;
                    pointer-events: none;
                    z-index: 9999;
                    animation: fakeFall 3s linear forwards;
                `;
                
                document.body.appendChild(particle);
                
                // Remove particle after animation
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 3000);
            }, i * 100);
        }
        
        // Add fake fall animation
        const fallStyles = `
            @keyframes fakeFall {
                to {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = fallStyles;
        document.head.appendChild(styleSheet);
    }
}

// ============================================================================
// 🎂 EXISTING BIRTHDAY WEBSITE CODE STARTS HERE
// ============================================================================

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

    // Initialize countdown timer
    new CountdownTimer();
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
