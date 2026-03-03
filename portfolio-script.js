// ================= SMOOTH SCROLLING =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update active nav link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// ================= MOBILE MENU =================
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

function closeMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.remove('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const navLinks = document.getElementById('navLinks');
    const menuIcon = document.querySelector('.mobile-menu-icon');
    
    if (!nav.contains(event.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// ================= SCROLL TO CONTACT =================
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ================= SCROLL TO TOP =================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    const scrollButton = document.getElementById('scrollToTop');
    const nav = document.querySelector('nav');
    
    if (window.pageYOffset > 300) {
        scrollButton.classList.add('show');
    } else {
        scrollButton.classList.remove('show');
    }
    
    // Add scrolled class to nav
    if (window.pageYOffset > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ================= ACTIVE NAVIGATION =================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ================= SKILL BAR ANIMATION =================
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }
    });
}, observerOptions);

// Observe all skill categories
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill-category').forEach(category => {
        observer.observe(category);
    });
});

// ================= CONTACT FORM HANDLING =================
function handleSubmit() {
    const form = document.getElementById('contactForm');
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (!name || !email || !message) {
        alert('Please fill in all fields before submitting.');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Show success popup
    document.getElementById('popupOverlay').classList.add('show');
    document.getElementById('successPopup').classList.add('show');
    
    // Clear form
    form.reset();
    
    // Here you can add actual email sending functionality
    // For now, it just shows the popup
    console.log('Form submitted:', { name, email, message });
}

// ================= POPUP HANDLING =================
function closePopup() {
    document.getElementById('popupOverlay').classList.remove('show');
    document.getElementById('successPopup').classList.remove('show');
}

// Close popup with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePopup();
    }
});

// ================= OPEN REPORT PDF =================
function openReport(internshipType) {
    // Define report file paths
    const reports = {
        'propharmal': 'propharmal-report.pdf'
    };
    
    const reportPath = reports[internshipType];
    
    if (reportPath) {
        // Try to open the PDF
        window.open(reportPath, '_blank');
    } else {
        alert('Report file not found. Please add the PDF file to your project folder.');
    }
}

// ================= DOWNLOAD CV =================
function downloadCV() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Colors
    const primaryBlue = [37, 99, 235];
    const lightBlue = [96, 165, 250];
    const darkBlue = [30, 58, 138];
    const textDark = [15, 23, 42];

    // Header with gradient-like effect
    doc.setFillColor(...darkBlue);
    doc.rect(0, 0, 210, 45, 'F');
    
    doc.setFillColor(...primaryBlue);
    doc.rect(0, 35, 210, 10, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(32);
    doc.setFont(undefined, 'bold');
    doc.text('AMIR AZZAM', 105, 20, { align: 'center' });
    
    doc.setFontSize(16);
    doc.setFont(undefined, 'normal');
    doc.text('Automation & Control Engineering Student', 105, 32, { align: 'center' });

    let yPos = 55;

    // Contact Info
    doc.setTextColor(...textDark);
    doc.setFontSize(10);
    doc.text('📧 amir.azzam@g.enp.edu.dz  |  📍 Algiers, Algeria  |  🔗 LinkedIn: adel-benali', 105, yPos, { align: 'center' });
    yPos += 15;

    // Section: About
    doc.setFontSize(16);
    doc.setTextColor(...primaryBlue);
    doc.setFont(undefined, 'bold');
    doc.text('ABOUT ME', 20, yPos);
    
    doc.setDrawColor(...lightBlue);
    doc.setLineWidth(0.5);
    doc.line(20, yPos + 2, 60, yPos + 2);
    yPos += 10;
    
    doc.setFontSize(10);
    doc.setTextColor(...textDark);
    doc.setFont(undefined, 'normal');
    const aboutText = 'Automation and Control Engineering student passionate about industrial systems, robotics, and applied engineering. Focused on combining electronics, programming, and control theory to solve real-world problems. Particularly interested in industrial automation, embedded systems, and intelligent control.';
    const splitAbout = doc.splitTextToSize(aboutText, 170);
    doc.text(splitAbout, 20, yPos);
    yPos += splitAbout.length * 5 + 10;

    // Section: Education
    doc.setFontSize(16);
    doc.setTextColor(...primaryBlue);
    doc.setFont(undefined, 'bold');
    doc.text('EDUCATION', 20, yPos);
    doc.line(20, yPos + 2, 60, yPos + 2);
    yPos += 10;
    
    // ENP
    doc.setFontSize(12);
    doc.setTextColor(...textDark);
    doc.setFont(undefined, 'bold');
    doc.text('State Engineer\'s Degree in Automation', 20, yPos);
    doc.setFontSize(10);
    doc.setFont(undefined, 'italic');
    doc.setTextColor(100, 100, 100);
    doc.text('Expected 2028', 190, yPos, { align: 'right' });
    yPos += 6;
    
    doc.setFont(undefined, 'normal');
    doc.setTextColor(...textDark);
    doc.text('National Polytechnic School (ENP)', 20, yPos);
    yPos += 5;
    doc.setFontSize(9);
    doc.text('• Industrial Computing  • Control Systems  • Digital Systems  • Advanced Control', 20, yPos);
    yPos += 10;

    // Prep Cycle
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Integrated Preparatory Cycle', 20, yPos);
    doc.setFontSize(10);
    doc.setFont(undefined, 'italic');
    doc.setTextColor(100, 100, 100);
    doc.text('2023 - 2025', 190, yPos, { align: 'right' });
    yPos += 6;
    
    doc.setFont(undefined, 'normal');
    doc.setTextColor(...textDark);
    doc.text('High National School of Public Works – Kouba', 20, yPos);
    yPos += 5;
    doc.setFontSize(9);
    doc.setTextColor(...primaryBlue);
    doc.setFont(undefined, 'bold');
    doc.text('🏅 Top 5% National Ranking', 20, yPos);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(...textDark);
    yPos += 10;

    // Bac
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Baccalaureate in Science', 20, yPos);
    doc.setFontSize(10);
    doc.setFont(undefined, 'italic');
    doc.setTextColor(100, 100, 100);
    doc.text('2023', 190, yPos, { align: 'right' });
    yPos += 6;
    
    doc.setFont(undefined, 'normal');
    doc.setTextColor(...textDark);
    doc.text('Les Glycines High School  |  Average: 15.80 / 20', 20, yPos);
    yPos += 15;

    // Section: Technical Skills
    doc.setFontSize(16);
    doc.setTextColor(...primaryBlue);
    doc.setFont(undefined, 'bold');
    doc.text('TECHNICAL SKILLS', 20, yPos);
    doc.line(20, yPos + 2, 70, yPos + 2);
    yPos += 10;
    
    doc.setFontSize(10);
    doc.setTextColor(...textDark);
    doc.setFont(undefined, 'normal');
    doc.text('Programming: C (20%), C++ (40%)', 20, yPos);
    yPos += 5;
    doc.text('Scientific Computing: MATLAB/Simulink (70%), GNU Octave (40%)', 20, yPos);
    yPos += 5;
    doc.text('CAD/Design: SOLIDWORKS (30%)', 20, yPos);
    yPos += 5;
    doc.text('Documentation: LaTeX (80%), PowerPoint/Canva (85%)', 20, yPos);
    yPos += 5;
    doc.text('Soft Skills: Leadership, Communication, Teamwork, Creative Thinking, Problem-Solving', 20, yPos);
    yPos += 5;
    doc.text('Languages: Arabic (Native), English (B2), French (B1)', 20, yPos);
    yPos += 15;

    // Section: Experience
    doc.setFontSize(16);
    doc.setTextColor(...primaryBlue);
    doc.setFont(undefined, 'bold');
    doc.text('PROFESSIONAL EXPERIENCE', 20, yPos);
    doc.line(20, yPos + 2, 90, yPos + 2);
    yPos += 10;
    
    // PROPHARMAL
    doc.setFontSize(11);
    doc.setTextColor(...textDark);
    doc.setFont(undefined, 'bold');
    doc.text('Industrial Internship - PROPHARMAL', 20, yPos);
    yPos += 6;
    doc.setFontSize(9);
    doc.setFont(undefined, 'normal');
    const propharmalDesc = doc.splitTextToSize('Technical internship focused on industrial electricity and control systems in pharmaceutical production.', 170);
    doc.text(propharmalDesc, 20, yPos);
    yPos += propharmalDesc.length * 4 + 6;

    // Quality Control
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text('Quality Control Assistant - Sofa Manufacturing', 20, yPos);
    doc.setFontSize(9);
    doc.setFont(undefined, 'italic');
    doc.setTextColor(100, 100, 100);
    doc.text('Summer 2021-2022', 190, yPos, { align: 'right' });
    yPos += 6;
    doc.setFont(undefined, 'normal');
    doc.setTextColor(...textDark);
    doc.text('Product inspection and quality monitoring, ensuring manufacturing standards compliance.', 20, yPos);
    yPos += 10;

    // Sales & Workshop
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text('Sales Representative & Workshop Supervisor', 20, yPos);
    yPos += 6;
    doc.setFontSize(9);
    doc.setFont(undefined, 'normal');
    doc.text('Customer communication, negotiation, workflow supervision, and safety coordination.', 20, yPos);
    yPos += 15;

    // Section: Projects
    doc.setFontSize(16);
    doc.setTextColor(...primaryBlue);
    doc.setFont(undefined, 'bold');
    doc.text('PROJECTS', 20, yPos);
    doc.line(20, yPos + 2, 50, yPos + 2);
    yPos += 10;
    
    doc.setFontSize(11);
    doc.setTextColor(...textDark);
    doc.text('ROBOKO Robotics Challenge - IEEE ENP', 20, yPos);
    yPos += 6;
    doc.setFontSize(9);
    doc.setFont(undefined, 'normal');
    const robokoDesc = doc.splitTextToSize('Team-based robotics competition requiring design, programming, and problem-solving under time constraints.', 170);
    doc.text(robokoDesc, 20, yPos);
    yPos += robokoDesc.length * 4 + 6;

    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text('Automatic Rain-Activated Wiper System', 20, yPos);
    yPos += 6;
    doc.setFontSize(9);
    doc.setFont(undefined, 'normal');
    const wiperDesc = doc.splitTextToSize('Embedded system using water sensors and integrated circuits for automatic wiper activation.', 170);
    doc.text(wiperDesc, 20, yPos);
    yPos += wiperDesc.length * 4 + 10;

    // Section: Activities & Awards
    doc.setFontSize(16);
    doc.setTextColor(...primaryBlue);
    doc.setFont(undefined, 'bold');
    doc.text('ACTIVITIES & AWARDS', 20, yPos);
    doc.line(20, yPos + 2, 75, yPos + 2);
    yPos += 10;
    
    doc.setFontSize(10);
    doc.setTextColor(...textDark);
    doc.setFont(undefined, 'normal');
    doc.text('🔬 Vision & Innovation Scientific Club - Finance, Logistics & External Relations', 20, yPos);
    yPos += 6;
    doc.text('🏆 1st Degree Certificate - Algerian Equestrian Federation', 20, yPos);
    yPos += 10;

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text('Generated: ' + new Date().toLocaleDateString(), 105, 285, { align: 'center' });

    // Save the PDF
    doc.save('Amir_AZZAM_CV.pdf');
}

// ================= INITIALIZE ON LOAD =================
window.addEventListener('load', () => {
    console.log('Portfolio loaded successfully!');
    
    // Add smooth reveal animations on scroll
    const revealElements = document.querySelectorAll('.education-item, .project-card, .internship-card, .activity-card');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});
