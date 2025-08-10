# 🎨 Customization Guide

> **💡 Quick Start**: To add your custom background image, simply place your image file in the project folder and update line 37 in `index.css`!

## 🖼️ **Custom Background Image**

To add your own background image:

1. **Place your image** in the project folder (e.g., `background.jpg`, `background.png`)
2. **Update the CSS** in `index.css`:
   ```css
   .background-image {
       background-image: url('your-image-name.jpg'); /* Change this line */
   }
   ```
3. **Supported formats**: JPG, PNG, GIF, WebP
4. **Recommended size**: 1920x1080 or larger for best quality

**Example**: If you have an image called `birthday-bg.jpg`, change the line to:
```css
background-image: url('birthday-bg.jpg');
```

**Step-by-step:**
1. **Save your image** (e.g., `birthday-bg.jpg`) in the same folder as `index.css`
2. **Open `index.css`** in any text editor
3. **Go to line 37** (or search for `your-custom-image.jpg`)
4. **Replace `'your-custom-image.jpg'`** with your actual image filename
5. **Save the file** and refresh your browser

**Troubleshooting:**
- **Image not showing?** Make sure the filename matches exactly (including case)
- **Wrong path?** The image must be in the same folder as your HTML file
- **File format?** Try converting to JPG or PNG if having issues
- **File size?** Large images may take time to load

## 🎵 **Background Music**

To add background music to your birthday page:

1. **Save your music file** in the project folder (e.g., `birthday-song.mp3`, `happy-birthday.wav`)
2. **Update the JavaScript** in `index.js`:
   ```javascript
   audio.src = 'your-music-file.mp3'; // Change this line
   ```
3. **Supported formats**: MP3, WAV, OGG, M4A
4. **Recommended**: MP3 format for best compatibility

**Example**: If you have a song called `happy-birthday.mp3`, change the line to:
```javascript
audio.src = 'happy-birthday.mp3';
```

**Step-by-step:**
1. **Save your music file** (e.g., `happy-birthday.mp3`) in the same folder as `index.js`
2. **Open `index.js`** in any text editor
3. **Go to line 435** (or search for `birthday-music.mp3`)
4. **Replace `'birthday-music.mp3'`** with your actual music filename
5. **Save the file** and refresh your browser

**Music Features:**
- 🎵 **Music Toggle**: Click the 🎵 button in the top-right corner
- 🔊 **Volume Control**: Right-click or long-press (mobile) to see volume slider
- 🔄 **Auto-loop**: Music will repeat automatically
- ⏸️ **Play/Pause**: Click to play/pause the music

**Troubleshooting:**
- **Music not playing?** Make sure the filename matches exactly
- **File format?** Convert to MP3 if having issues
- **File size?** Keep music files under 10MB for faster loading
- **Browser autoplay?** Modern browsers require user interaction to play audio

## 🔐 **Password Protection**

To change the password for the secret message:

1. **Open `index.js`** in any text editor
2. **Find line 120** (search for `birthday2024`)
3. **Replace the password** with your choice:
   ```javascript
   const correctPassword = 'your-new-password';
   ```

**Tips:**
- Use something meaningful but not too obvious
- Avoid special characters that might cause issues
- Remember the password to test the feature

## 💝 **Secret Message Content**

To customize the hidden message:

1. **Open `index.html`** in any text editor
2. **Find the secret message section** (around line 100)
3. **Replace the placeholder text** with your personal message:
   ```html
   <div class="secret-text">
       <p>Your personal message here...</p>
   </div>
   ```

## ✅ **Quick Customization Checklist**

- [ ] **Background Image**: Place image file and update `index.css` line 37
- [ ] **Background Music**: Place music file and update `index.js` line 320
- [ ] **Password**: Change password in `index.js` line 120
- [ ] **Secret Message**: Update message content in `index.html`
- [ ] **Test Everything**: Refresh browser and test all features

## 💡 **Tips**

- **Background Image**: Use high-quality images for best results
- **Music**: Choose a song that fits the birthday mood
- **Password**: Pick something your friend can guess
- **Message**: Write from the heart - it's more meaningful!

## 🚀 **Advanced Customization**

### **Colors & Theme**
- **Primary Colors**: Edit the CSS variables in `:root` section
- **Glassmorphism**: Adjust `--glass-bg` and `--glass-border` values
- **Shadows**: Modify `--shadow` for different depth effects

### **Fonts & Typography**
- **Google Fonts**: The page uses 'Poppins' and 'Dancing Script'
- **Font Sizes**: Adjust sizes in the CSS for different text elements
- **Text Colors**: Modify color values for different themes

### **Animations & Effects**
- **Animation Speed**: Change animation durations in CSS
- **Hover Effects**: Modify transform values for different interactions
- **Confetti**: Adjust confetti colors and animation in JavaScript

### **Layout & Spacing**
- **Container Width**: Change `max-width` in `.container` class
- **Padding & Margins**: Adjust spacing throughout the page
- **Card Sizes**: Modify card dimensions and spacing

## 🎯 **Need More Help?**

- **Background image not working?** Check filename and path in `index.css`
- **Music not playing?** Verify filename and format in `index.js`
- **Password issues?** Make sure the password variable is correct
- **Want to customize more?** See the advanced customization section above
- **Having other issues?** Make sure all files are in the same folder

## 🌟 **Enjoy Your Beautiful Birthday Page!**

Once you've customized everything, your page will be ready to share with your special someone! 🎉
