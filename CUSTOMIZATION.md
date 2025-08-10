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

## 🔐 **Password Protection**

To change the secret message password:

1. **Open `index.js`**
2. **Find this line** (around line 120):
   ```javascript
   const correctPassword = 'birthday2024'; // Change this to your desired password
   ```
3. **Replace `'birthday2024'`** with your chosen password
4. **Save the file**

## 💝 **Customize Secret Message**

To personalize the secret message:

1. **Open `index.html`**
2. **Find the secret message section** (around line 100):
   ```html
   <div class="secret-text">
       <p>This is where you can write your most personal, heartfelt message...</p>
       <p>Maybe something like: "You mean the world to me, and I'm so lucky to have you in my life."</p>
       <p>Or: "I hope this year brings you everything you've ever wished for and more."</p>
       <p>Make it special and personal! 💝</p>
   </div>
   ```
3. **Replace the placeholder text** with your personal message
4. **Save the file**

## 🎯 **Quick Customization Checklist**

- [ ] Add your custom background image
- [ ] Set your desired password
- [ ] Write your personal secret message
- [ ] Customize the birthday wishes text (optional)
- [ ] Change the countdown date (optional)
- [ ] Test the password functionality

## 💡 **Tips**

- **Password ideas**: Use something meaningful like her name, a special date, or inside joke
- **Image tips**: Choose an image that's not too busy so text remains readable
- **Message ideas**: Write from the heart - be genuine and personal
- **Testing**: Always test the password before sharing!

## 🔧 **Advanced Customization**

For more advanced changes:
- **Colors**: Edit the CSS variables in `:root` section
- **Fonts**: Change Google Fonts in the HTML `<head>`
- **Animations**: Modify the CSS keyframes and animation properties
- **Countdown**: Adjust the target date in the JavaScript

---

*Make it special and personal! This is your chance to create something truly meaningful for her birthday.* 💕✨
