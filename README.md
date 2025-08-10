# 🎂 Birthday Landing Page

A beautiful, modern birthday landing page with personal wishes, a password-protected secret message, and background music!

## 🚀 Quick Setup

### 1. Add Your Custom Background Image

**This is the most important step!** To make your page look amazing:

1. **Save your image** in this folder (e.g., `background.jpg`, `birthday-photo.png`)
2. **Open `index.css`** in any text editor
3. **Find line 37** (or search for `your-custom-image.jpg`)
4. **Replace the image path** with your filename:

```css
/* Change this line in index.css */
background-image: url('your-actual-image.jpg');
```

**Example:**
- If your image is called `birthday-bg.jpg`, change it to:
- `background-image: url('birthday-bg.jpg');`

### 2. Add Background Music

**Make your page even more special with music:**

1. **Save your music file** in this folder (e.g., `birthday-song.mp3`, `happy-birthday.wav`)
2. **Open `index.js`** in any text editor
3. **Find line 435** (or search for `birthday-music.mp3`)
4. **Replace the music path** with your filename:

```javascript
// Change this line in index.js
audio.src = 'your-actual-music.mp3';
```

**Example:**
- If your music is called `happy-birthday.mp3`, change it to:
- `audio.src = 'happy-birthday.mp3';`

### 3. Customize the Secret Message

1. **Open `index.html`**
2. **Find the secret message section** (around line 100)
3. **Replace the placeholder text** with your personal message

### 4. Change the Password

1. **Open `index.js`**
2. **Find line 120** (search for `birthday2024`)
3. **Replace the password** with your choice

## 📁 File Structure

```
your-project/
├── index.html          # Main page structure
├── index.css           # Styles and background image
├── index.js            # Interactive features and music
├── CUSTOMIZATION.md    # Detailed customization guide
├── README.md           # This file
├── your-image.jpg      # Your custom background image
└── your-music.mp3      # Your background music file
```

## 🎨 Features

- ✨ **Custom Background Image** - Add your own photo
- 🎵 **Background Music** - Play your favorite birthday song
- 💝 **Personal Birthday Wishes** - Write heartfelt messages
- 🔐 **Password Protection** - Hidden secret message
- 🎬 **Video Section** - Add your special video
- 🎊 **Confetti Effects** - Celebratory animations
- 📱 **Mobile Responsive** - Works on all devices

## 🎵 Music Controls

- **🎵 Button**: Click to play/pause music (top-right corner)
- **🔊 Volume**: Right-click or long-press (mobile) to see volume slider
- **⏸️ Pause**: Click to pause, click again to resume
- **🔄 Auto-start**: Music starts automatically on first page interaction
- **🔄 Auto-loop**: Music repeats automatically

## 🔧 Need Help?

- **Background image not working?** Check the filename and path in `index.css`
- **Music not playing?** Verify the filename and format in `index.js`
- **Want to customize more?** See `CUSTOMIZATION.md` for detailed instructions
- **Having issues?** Make sure all files are in the same folder

## 🌟 Enjoy Your Beautiful Birthday Page!

Once you've added your background image, music, and customized the messages, your page will be ready to share! 🎉
