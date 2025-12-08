// JavaScript مبسط

const translations = {
    he: {
        home: "דף הבית",
        social: "מדיה חברתית",
        businessCard: "כרטיס ביקור",
        contact: "צור קשר",
        heroTitle: "שלום, אני ג'וני מחול",
        heroText: "ברוכים הבאים לאתר האישי שלי. עיצוב ייחודי, נוח לעין וחווית משתמש מעולה המחכה לכם כאן.",
        socialMedia: "מדיה חברתית",
        socialText: "צור איתי קשר דרך פלטפורמות המדיה החברתית השונות",
        facebook: "פייסבוק",
        instagram: "אינסטגרם",
        whatsapp: "וואטסאפ",
        visitPage: "בקר בדף",
        contact: "צור קשר",
        cardName: "ג'וני מחול",
        cardTitle: "אדריכל ומעצב פנים",
        cardLocation: "ירושלים, ישראל",
        cardPhone: "+972 52 314 5028",
        contactMe: "צור קשר",
        contactText: "מלאו את הטופס ואחזור אליכם בהקדם האפשרי",
        name: "שם מלא",
        email: "אימייל",
        subject: "נושא",
        message: "הודעה",
        sendMessage: "שלח הודעה",
        footerText: "© 2023 ג'וני מחול. כל הזכויות שמורות.",
        footerDescription: "עיצוב מודרני, רספונסיבי וחווית משתמש מעולה"
    },
    en: {
        home: "Home",
        social: "Social Media",
        businessCard: "Business Card",
        contact: "Contact",
        heroTitle: "Hello, I'm Jonny Makhoul",
        heroText: "Welcome to my personal website. Unique design, eye-friendly and excellent user experience awaits you here.",
        socialMedia: "Social Media",
        socialText: "Connect with me through different social media platforms",
        facebook: "Facebook",
        instagram: "Instagram",
        whatsapp: "WhatsApp",
        visitPage: "Visit Page",
        contact: "Contact",
        cardName: "Jonny Makhoul",
        cardTitle: "Architect and Interior Designer",
        cardLocation: "Jerusalem, Israel",
        cardPhone: "+972 52 314 5028",
        contactMe: "Contact Me",
        contactText: "Fill out the form and I'll get back to you as soon as possible",
        name: "Full Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        sendMessage: "Send Message",
        footerText: "© 2023 Jonny Makhoul. All rights reserved.",
        footerDescription: "Modern design, responsive and excellent user experience"
    },
    ar: {
        home: "الرئيسية",
        social: "وسائل التواصل",
        businessCard: "بطاقة العمل",
        contact: "اتصل بي",
        heroTitle: "مرحبًا، أنا جوني مخول",
        heroText: "أهلاً بكم في موقعي الشخصي. تصميم فريد، مريح للعين وتجربة استخدام رائعة تنتظركم هنا.",
        socialMedia: "وسائل التواصل الاجتماعي",
        socialText: "تواصل معي عبر منصات التواصل الاجتماعي المختلفة",
        facebook: "فيسبوك",
        instagram: "إنستغرام",
        whatsapp: "واتساب",
        visitPage: "زيارة الصفحة",
        contact: "التواصل",
        cardName: "جوني مخول",
        cardTitle: "مهندس معماري ومصمم داخلي",
        cardLocation: "القدس، فلسطين",
        cardPhone: "+972 52 314 5028",
        contactMe: "تواصل معي",
        contactText: "املأ النموذج وسأعود إليك في أقرب وقت ممكن",
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "الرسالة",
        sendMessage: "إرسال الرسالة",
        footerText: "© 2023 جوني مخول. جميع الحقوق محفوظة.",
        footerDescription: "تصميم عصري، متجاوب وتجربة استخدام رائعة"
    }
};

// التهيئة
document.addEventListener('DOMContentLoaded', function() {
    // القائمة المتنقلة
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // إغلاق القائمة عند النقر خارجها
        document.addEventListener('click', function(event) {
            if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
    
    // تبديل اللغة
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            // تحديث الأزرار النشطة
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // تطبيق اللغة
            changeLanguage(lang);
        });
    });
    
    // تمرير سلس
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // إغلاق القائمة في الجوال
                if (mainNav) mainNav.classList.remove('active');
                if (menuToggle) menuToggle.classList.remove('active');
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // النموذج
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            const currentLang = document.body.getAttribute('lang') || 'he';
            
            // رسالة النجاح
            const messages = {
                he: 'תודה! ההודעה נשלחה בהצלחה.',
                en: 'Thank you! Your message has been sent successfully.',
                ar: 'شكراً! تم إرسال رسالتك بنجاح.'
            };
            
            // عرض تأثير النجاح
            submitBtn.innerHTML = '<i class="fas fa-check"></i> נשלח!';
            submitBtn.style.background = '#4CAF50';
            
            setTimeout(() => {
                alert(messages[currentLang]);
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                this.reset();
            }, 1500);
            
            // إرسال الفورم الحقيقي
            setTimeout(() => {
                this.submit();
            }, 2000);
        });
    }
    
    // تعيين اللغة الافتراضية
    changeLanguage('he');
});

// دالة تغيير اللغة
function changeLanguage(lang) {
    // تحديث body
    document.body.setAttribute('lang', lang);
    document.body.style.direction = lang === 'en' ? 'ltr' : 'rtl';
    
    // تحديث النصوص
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // تحديث الـ placeholder
    const inputs = {
        'name': 'name',
        'email': 'email',
        'subject': 'subject',
        'message': 'message'
    };
    
    for (const [id, key] of Object.entries(inputs)) {
        const input = document.getElementById(id);
        if (input && translations[lang][key]) {
            input.placeholder = translations[lang][key];
        }
    }
    
    // حفظ اللغة
    localStorage.setItem('preferred-language', lang);
}
