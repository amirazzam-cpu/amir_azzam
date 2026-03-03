# ADEL BENALI - Portfolio Website

A modern, animated portfolio website with blue color scheme for an Automation & Control Engineering student.

## 📁 File Structure

```
portfolio/
├── index.html
├── portfolio-style.css
├── portfolio-script.js
├── README.md
└── assets/  (create this folder for your media files)
    ├── profile-photo.jpg
    ├── prep-certificate.jpg
    ├── bac-certificate.jpg
    ├── propharmal-photo1.jpg
    ├── propharmal-photo2.jpg
    ├── propharmal-report.pdf
    ├── quality-control-photo.jpg
    ├── sales-photo.jpg
    ├── roboko-photo.jpg
    ├── roboko-video.mp4
    ├── wiper-photo.jpg
    └── wiper-video.mp4
```

## 🖼️ IMAGES & FILES TO ADD

### 1. HERO SECTION (Top of page)
**File:** `profile-photo.jpg`
**Location in HTML:** Line with `<img src="profile-photo.jpg"`
**Recommended size:** 380x480 pixels
**Description:** Your professional photo for the main hero section

---

### 2. EDUCATION SECTION

#### Preparatory Cycle Certificate
**File:** `prep-certificate.jpg`
**Location in HTML:** Search for `src="prep-certificate.jpg"`
**Recommended size:** 800x600 pixels or A4 scan
**Description:** Your certificate from High National School of Public Works

#### Baccalaureate Certificate
**File:** `bac-certificate.jpg`
**Location in HTML:** Search for `src="bac-certificate.jpg"`
**Recommended size:** 800x600 pixels or A4 scan
**Description:** Your Baccalaureate certificate from Les Glycines High School

---

### 3. INTERNSHIPS SECTION

#### PROPHARMAL (Pharmaceutical Company)
**Files needed:**
1. `propharmal-photo1.jpg` - First photo from internship
2. `propharmal-photo2.jpg` - Second photo from internship
3. `propharmal-report.pdf` - Your internship report PDF

**Location in HTML:** Search for `propharmal-photo1.jpg`, `propharmal-photo2.jpg`, `propharmal-report.pdf`
**Recommended size:** 800x600 pixels each for photos
**Description:** Photos showing your work at PROPHARMAL and the internship report

#### Quality Control Assistant
**File:** `quality-control-photo.jpg`
**Location in HTML:** Search for `quality-control-photo.jpg`
**Recommended size:** 800x600 pixels
**Description:** Photo from your work at the Sofa Manufacturing Factory

#### Sales Representative
**File:** `sales-photo.jpg`
**Location in HTML:** Search for `sales-photo.jpg`
**Recommended size:** 800x600 pixels
**Description:** Photo from your sales representative experience

---

### 4. PROJECTS SECTION

#### ROBOKO Robotics Challenge
**Files needed:**
1. `roboko-photo.jpg` - Photo of your robot or team
2. `roboko-video.mp4` - Video showing the robot in action

**Location in HTML:** Search for `roboko-photo.jpg` and `roboko-video.mp4`
**Recommended size:** 
- Photo: 800x600 pixels
- Video: Any resolution, preferably HD (1280x720 or 1920x1080)
**Description:** Visual documentation of your ROBOKO robotics project

#### Rain-Activated Wiper System
**Files needed:**
1. `wiper-photo.jpg` - Photo of your system/circuit
2. `wiper-video.mp4` - Video demonstration

**Location in HTML:** Search for `wiper-photo.jpg` and `wiper-video.mp4`
**Recommended size:**
- Photo: 800x600 pixels
- Video: Any resolution, preferably HD
**Description:** Visual documentation of your automatic wiper system

---

## 🎨 COLOR SCHEME

The portfolio uses a professional blue theme:
- **Primary Blue:** #2563eb
- **Dark Blue:** #1e3a8a
- **Light Blue:** #60a5fa
- **Background Dark:** #0f172a
- **Background Darker:** #020617

---

## ✨ FEATURES

✅ **Smooth Animations** - Fade-in, slide-in effects
✅ **Responsive Design** - Works on all devices
✅ **Blue Color Theme** - Professional engineering aesthetic
✅ **Auto CV Download** - Generates PDF automatically
✅ **Video Support** - Showcase your projects
✅ **Certificate Display** - Show your achievements
✅ **Contact Form** - Get in touch functionality
✅ **Skill Bars** - Animated progress indicators
✅ **Social Media Links** - Connect on all platforms

---

## 📝 HOW TO USE

### Step 1: Add Your Images
1. Create an `assets` folder in the same directory as `index.html`
2. Add all your photos, videos, and PDF files with the exact names listed above
3. The website will automatically display them

### Step 2: Update Contact Information
Open `index.html` and find the contact section:
```html
<span>adel.benali@example.com</span>
```
Replace `adel.benali@example.com` with your actual email address.

### Step 3: Update Social Media Links
The social media links are already set based on your original code:
- GitHub: https://github.com/adel-benali
- LinkedIn: https://www.linkedin.com/in/adel-benali-6a847232b
- Instagram: https://www.instagram.com/adel_benali4
- Facebook: https://www.facebook.com/share/1GAhrShvqx/

If you need to change them, search for these URLs in `index.html`.

### Step 4: Test the Website
1. Open `index.html` in your web browser
2. Click "Download CV" to test the PDF generation
3. Test all navigation links
4. Check that all images load correctly
5. Test the contact form
6. View on mobile to check responsiveness

---

## 🔧 CUSTOMIZATION

### Change Colors
Edit `portfolio-style.css` and modify the CSS variables:
```css
:root {
    --primary-blue: #2563eb;  /* Change this */
    --dark-blue: #1e3a8a;     /* Change this */
    --light-blue: #60a5fa;    /* Change this */
}
```

### Add More Projects
Copy a project card in `index.html` and modify the content:
```html
<div class="project-card">
    <!-- Copy and paste, then modify -->
</div>
```

### Add More Skills
Add new skill items in the skills section:
```html
<div class="skill-item glass">
    <div class="skill-header">
        <span class="skill-name">Your Skill</span>
        <span class="skill-percentage">XX%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" style="width:XX%"></div>
    </div>
</div>
```

---

## 📱 BROWSER SUPPORT

✅ Chrome (recommended)
✅ Firefox
✅ Safari
✅ Edge
✅ Mobile browsers

---

## 💡 TIPS FOR BEST RESULTS

1. **Image Quality:** Use high-resolution images (at least 800x600px)
2. **Video Format:** MP4 format works best for compatibility
3. **PDF Size:** Keep PDF files under 5MB for faster loading
4. **Professional Photos:** Use clear, professional-looking images
5. **Certificates:** Scan certificates at 300 DPI for best quality

---

## 🆘 TROUBLESHOOTING

### Images not showing?
- Check that file names match exactly (case-sensitive)
- Make sure images are in the correct folder
- Verify image file extensions (.jpg, .png, etc.)

### Videos not playing?
- Use MP4 format
- Keep video files under 50MB
- Test in different browsers

### PDF download not working?
- Make sure jsPDF library is loading from CDN
- Check browser console for errors

### Mobile layout issues?
- Clear browser cache
- Test in Chrome DevTools mobile view
- Check viewport meta tag in HTML

---

## 📞 NEED HELP?

If you encounter any issues or need modifications, check:
1. Browser console for error messages (F12)
2. File paths and names
3. Internet connection (for CDN resources)

---

## 🎓 ABOUT THIS PORTFOLIO

Created for **Adel Benali**
Automation & Control Engineering Student
National Polytechnic School (ENP)

**Tech Stack:**
- HTML5
- CSS3 (with animations)
- Vanilla JavaScript
- jsPDF for CV generation
- Font Awesome icons

---

**Last Updated:** February 2026
**Version:** 1.0

Enjoy your new portfolio! 🚀
