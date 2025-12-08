// script.js
const translations = {
    ar: {
        home: "الرئيسية",
        social: "وسائل التواصل",
        businessCard: "بطاقة العمل",
        contact: "اتصل بي",
        heroTitle: "مرحبًا، أنا جوني مخول",
        heroText: "أهلاً بكم في موقعي الشخصي. تصميم فريد، مريح للعين وتجربة استخدام رائعة تنتظركم هنا.",
        socialMedia: "وسائل التواصل الاجتماعي",
        socialText: "تواصل معي عبر منصات التواصل الاجتماعي المختلفة",
        contactMe: "تواصل معي",
        contactText: "املأ النموذج وسأعود إليك في أقرب وقت ممكن",
        footerText: "© 2023 جوني مخول. جميع الحقوق محفوظة.",
        footerDescription: "تصميم عصري، متجاوب وتجربة استخدام رائعة - موقع شخصي فريد من نوعه من أجلك.",
        cardName: "جوني مخول",
        cardTitle: "مهندس معماري ومصمم داخلي",
        cardLocation: "اسرائيل",
        cardPhone: "+972 52 314 5028",
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        subject: "موضوع الرسالة",
        message: "الرسالة",
        sendMessage: "إرسال الرسالة",
        facebook: "فيسبوك",
        instagram: "إنستغرام",
        whatsapp: "واتساب",
        visitPage: "زيارة الصفحة",
        contact: "التواصل"
    },
    he: {
        home: "דף הבית",
        social: "מדיה חברתית",
        businessCard: "כרטיס ביקור",
        contact: "צור קשר",
        heroTitle: "שלום, אני ג'וני מחול",
        heroText: "ברוכים הבאים לאתר האישי שלי. עיצוב ייחודי, נוח לעין וחווית משתמש מעולה המחכה לכם כאן.",
        socialMedia: "מדיה חברתית",
        socialText: "צור איתי קשר דרך פלטפורמות המדיה החברתית השונות",
        contactMe: "צור קשר",
        contactText: "מלאו את הטופס ואחזור אליכם בהקדם האפשרי",
        footerText: "© 2023 ג'וני מחול. כל הזכויות שמורות.",
        footerDescription: "עיצוב מודרני, רספונסיבי וחווית משתמש מעולה - אתר אישי ייחודי במיוחד עבורך.",
        cardName: "ג'וני מחול",
        cardTitle: "אדריכל ומעצב פנים",
        cardLocation: "ירושלים",
        cardPhone: "+972 52 314 5028",
        name: "שם מלא",
        email: "כתובת אימייל",
        subject: "נושא הפנייה",
        message: "הודעה",
        sendMessage: "שלח הודעה",
        facebook: "פייסבוק",
        instagram: "אינסטגרם",
        whatsapp: "וואטסאפ",
        visitPage: "בקר בדף",
        contact: "צור קשר"
    },
    en: {
        home: "Home",
        social: "Social Media",
        businessCard: "Business Card",
        contact: "Contact Me",
        heroTitle: "Hello, I'm Jonny Makhoul",
        heroText: "Welcome to my personal website. Unique design, eye-friendly and excellent user experience awaits you here.",
        socialMedia: "Social Media",
        socialText: "Connect with me through different social media platforms",
        contactMe: "Contact Me",
        contactText: "Fill out the form and I'll get back to you as soon as possible",
        footerText: "© 2023 Jonny Makhoul. All rights reserved.",
        footerDescription: "Modern design, responsive and excellent user experience - a unique personal website just for you.",
        cardName: "Jonny Makhoul",
        cardTitle: "Architect and interior designer",
        cardLocation: "Israel",
        cardPhone: "+972 52 314 5028",
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        sendMessage: "Send Message",
        facebook: "Facebook",
        instagram: "Instagram",
        whatsapp: "WhatsApp",
        visitPage: "Visit Page",
        contact: "Contact"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const body = document.body;
    const header = document.getElementById('main-header');
    
    // تعيين العبرية كلغة افتراضية
    setActiveLanguage('he');
    
    // حدث تغيير اللغة
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            setActiveLanguage(selectedLang);
        });
    });
    
    // دالة لتعيين اللغة النشطة
    function setActiveLanguage(lang) {
        // تحديث حالة الأزرار النشطة
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
        
        // تغيير اتجاه النص واتجاه الصفحة
        body.setAttribute('lang', lang);
        body.setAttribute('dir', lang === 'en' ? 'ltr' : 'rtl');
        
        // تطبيق الترجمات
        applyTranslations(lang);
    }
    
    // تطبيق الترجمات
    function applyTranslations(lang) {
        // ترجمة العناصر مع data-lang-key
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // ترجمة العناصر الخاصة
        const elements = {
            'hero-title': 'heroTitle',
            'hero-text': 'heroText',
            'social-text': 'socialText',
            'card-name': 'cardName',
            'card-title': 'cardTitle',
            'card-phone': 'cardPhone',
            'contact-text': 'contactText',
            'footer-text': 'footerText',
            'footer-description': 'footerDescription'
        };
        
        for (const [id, key] of Object.entries(elements)) {
            const element = document.getElementById(id);
            if (element && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        }
        
        // تحديث موقع بطاقة العمل
        const locationElement = document.getElementById('card-location');
        if (locationElement && translations[lang].cardLocation) {
            locationElement.innerHTML = `<i class="fas fa-map-marker-alt" style="margin-left: 5px;"></i> ${translations[lang].cardLocation}`;
        }
    }
    
    // تأثيرات عند التمرير
    window.addEventListener('scroll', function() {
        header.classList.toggle('header-scrolled', window.scrollY > 50);
        
        // تأثيرات ظهور العناصر
        const scrollElements = document.querySelectorAll('.social-card, .contact-item, .business-card');
        scrollElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 1.25) {
                el.classList.add('scrolled');
            }
        });
    });
    
    // تمرير سلس للروابط
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // معالجة نموذج الاتصال
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            const originalHTML = submitBtn.innerHTML;
            const currentLang = body.getAttribute('lang');
            
            // رسائل النجاح حسب اللغة
            const successMessages = {
                ar: 'شكراً! تم إرسال رسالتك بنجاح.',
                he: 'תודה! הודעתך נשלחה בהצלחה.',
                en: 'Thank you! Your message has been sent successfully.'
            };
            
            // عرض مؤقت للناجح
            submitBtn.innerHTML = '<i class="fas fa-check"></i> ' + 
                (currentLang === 'he' ? 'נשלח!' : 
                 currentLang === 'ar' ? 'تم الإرسال!' : 'Sent!');
            
            setTimeout(() => {
                submitBtn.innerHTML = originalHTML;
                alert(successMessages[currentLang] || successMessages.en);
                this.reset();
            }, 1500);
            
            // إرسال الفورم فعلياً
            setTimeout(() => {
                this.submit();
            }, 2000);
        });
    }
    
    // تشغيل تأثير التمرير عند التحميل
    window.dispatchEvent(new Event('scroll'));
});
