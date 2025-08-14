# 🕐 Countdown Timer Configuration

## How to Change the Release Time

The birthday website is now protected by a countdown timer! Here's how to customize it:

### 1. **Quick Setup - Change One Variable**

Open `index.js` and find this line at the top:

```javascript
const TARGET_RELEASE_TIME = '2025-08-15 10:00:00'; // 🔧 CHANGE THIS!
```

### 2. **Time Format**

Use this format: `'YYYY-MM-DD HH:MM:SS'` (24-hour format)

**Important**: The time you set will be interpreted in YOUR LOCAL TIMEZONE automatically!

### 3. **Examples**

| When You Want It Available | Set This Value |
|---------------------------|----------------|
| **12 midnight tonight** | `'2025-08-14 00:00:00'` |
| **6 PM tonight** | `'2025-08-14 18:00:00'` |
| **Tomorrow at 9 AM** | `'2025-08-15 09:00:00'` |
| **In 24 hours from now** | `'2025-08-15 14:30:00'` (if it's 2:30 PM now) |
| **Christmas at midnight** | `'2025-12-25 00:00:00'` |
| **New Year's Eve** | `'2025-12-31 23:59:59'` |

## 🎭 **TRICK MODE - The Ultimate Prank!**

### **What is Trick Mode?**

This is the best part! You can choose whether to show the real birthday website or a hilarious fake "gotcha" screen after the countdown ends.

### **How to Use Trick Mode:**

Find this line in `index.js`:

```javascript
const SHOW_REAL_CONTENT = false; // 🔧 CHANGE THIS! (true = real content, false = fake screen)
```

### **Trick Mode Options:**

| Setting | What Happens |
|---------|--------------|
| **`true`** | Shows the real birthday website with confetti 🎉 |
| **`false`** | Shows a fake "gotcha" screen saying "You think I'll do this much mehnat?" 🤡 |

### **The Fake Screen Features:**

- **🤡 Clown emoji** with bouncing animation
- **🎭 "You think I'll do this much mehnat?"** as the main message
- **🎪 Interactive buttons** that lead to more disappointment
- **🎪 Fake "celebration" effects** with falling particles
- **🎪 Responsive design** that works on all devices
- **🎪 Dark theme** with orange accents for maximum troll effect

### **Perfect for:**
- **Pranking friends** who expect something special
- **April Fools' Day** surprises
- **Testing patience** of people who wait for the countdown
- **Creating memorable moments** of disappointment 😈

## 🔧 **How It Works**

1. **Before the target time**: Shows a beautiful countdown timer
2. **At the target time**: Countdown disappears with a smooth animation
3. **After the target time**: 
   - If `SHOW_REAL_CONTENT = true`: Birthday website appears with confetti! 🎉
   - If `SHOW_REAL_CONTENT = false`: Fake "gotcha" screen appears! 🤡

## 🧪 **Testing**

- **To test immediately**: Set the time to a few minutes from now
- **To test in 24 hours**: Set it to exactly 24 hours from your current time
- **To test later**: Set it to a future time
- **To disable temporarily**: Set it to a past date

## 📊 **Current Settings**

- **Target Release Time**: `2025-08-15 10:00:00` (10 AM tomorrow)
- **Timezone**: Your local timezone (automatically detected)
- **Trick Mode**: `false` (Will show fake "gotcha" screen) 🤡

## 🎯 **Quick Time Calculator**

To set a countdown for exactly 24 hours from now:
1. Look at your current time (e.g., 2:30 PM)
2. Add 24 hours = same time tomorrow (2:30 PM tomorrow)
3. Set: `'2025-08-15 14:30:00'`

---

**💡 Pro Tip**: The countdown now uses your local timezone automatically, so no more timezone conversion issues!

**🎭 Pro Prank Tip**: Set `SHOW_REAL_CONTENT = false` for maximum disappointment effect! Your friends will wait for the countdown only to see "You think I'll do this much mehnat?" 😂
