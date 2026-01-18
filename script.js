// بيانات الترجمة للغات المختلفة
const translations = {
    he: {
        // التنقل
        home: "דף הבית",
        about: "אודות",
        portfolio: "פרויקט",
        services: "שירותים",
        contact: "צור קשר",
        
        // قسم البطل
        heroTitle: "ג'וני מחול | אדרכל",
        heroSubtitle: "הנדסאי אדריכלות ותוכנה, שואף תמיד להשיג את התוצאות הטובות ביותר במינימום זמן",
        getQuote: "ליצירת קשר",
        
        // قسم حول
        aboutTitle: "אודות",
        aboutText1: "מומחה בשרטוט מדויק ובבניית בלוקים חכמים לייעול העבודה, בעל יכולת יצירתית לפתרון חללים אדריכליים",
        aboutText2: "רכשתי את ניסיוני באמצעות למידה עצמית במהלך לימודיי האקדמיים, ואני פועל לשיפור מתמיד בכל הזדמנות.",
        yearsExp: "שנות ניסיון",
        projectsDone: "פרויקטים שהושלמו",
        awards: "פרסים מקצועיים",
        
        // قسم المعرض 
        portfolioTitle: "תיק עבודות",
        portfolioSubtitle: "פרויקט גמר",
		portfolioSubtitle1: "מטבח מודרני",
		
		// قسم الفيديو
		video: "סרטונים",
		videoTitle: "אוטומציה בשרטוט: ליספים ובלוקים חכמים",
		videoNotSupported: "הדפדפן שלך אינו תומך בהפעלת סרטונים.",
		video1Title: "הכוח של בלוקים דינמיים: חיסכון בזמן",
		video2Title: "תכנות ליספים: ייעול ושיפור תהליכי עבודה",
		video3Title: "תהליך עיצוב פנים",
               
        // قسم الخدمات
        servicesTitle: "השירותים",
        service1: "תכנון אדריכלי",
        service1Text: "תכנון מלא של מבנים בהתאם לדרישות הלקוח ותקני הבנייה העדכניים.",
        service2: "בנייה ותכנון עירוני",
        service2Text: "פיתוח פרויקטים עירוניים מורכבים תוך התחשבות בסביבה ובקהילה.",
        service3: "עיצוב פנים",
        service3Text: "יצירת חללים פנימיים פונקציונליים ואסתטיים המותאמים אישית.",
        service4: "בנייה בת-קיימא",
        service4Text: "תכנון מבנים חכמים וחסכוניים באנרגיה התורמים לאיכות הסביבה.",
        
        // نموذج الاتصال
        contactTitle: "צור קשר",
        contactInfo: "פרטי התקשרות",
        address: "רחוב: פקעין (בוקייעה) , צפון ישראיל",
        fullName: "שם מלא",
        email: "אימייל",
        phone: "טלפון",
        selectService: "בחר סוג שירות",
        serviceOption1: "תכנון אדריכלי",
        serviceOption2: "תכנון עירוני",
        serviceOption3: "עיצוב פנים",
        serviceOption4: "בנייה בת-קיימא",
        message: "הודעה",
        sendMessage: "שלח הודעה",
        
        // التذييل
        footerText: "אשמח לשיתוף פעולה פורה ומקצועי איתכם",
    },
    en: {
        home: "Home",
        about: "About",
        portfolio: "Portfolio",
        services: "Services",
        contact: "Contact",
        
        heroTitle: "Johnny Makhoul | Architectural",
        heroSubtitle: "Architectural and Software Associate Engineer, consistently striving to deliver high-quality results with maximum efficiency.",
        getQuote: "Contact me",
        
        aboutTitle: "About me",
        aboutText1: "Specialist in precision drafting and creating dynamic blocks to streamline workflows, with a creative flair for spatial problem-solving.",
        aboutText2: "Self-taught expert with a strong academic foundation, dedicated to continuous professional growth and seizing every learning opportunity.",
        yearsExp: "Years of Experience",
        projectsDone: "Projects Completed",
        awards: "Professional Awards",
        
        portfolioTitle: "Portfolio",
        portfolioSubtitle: "Final project",
		portfolioSubtitle1: "Modern Kitchin",
		
		video: "Videos",
		videoTitle: "CAD Automation: Lisp & Smart Blocks",
		videoNotSupported: "Your browser does not support video playback.",
		video1Title: "The Power of Dynamic Blocks: Save Your Time",
		video2Title: "Lisp Programming: Optimizing Workflow Efficiency",
		video3Title: "Interior Design Process",
               
        servicesTitle: "Services",
        service1: "Architectural Planning",
        service1Text: "Complete planning of buildings according to client requirements and current building standards.",
        service2: "Urban Planning",
        service2Text: "Development of complex urban projects with consideration for the environment and community.",
        service3: "Interior Design",
        service3Text: "Creating functional and aesthetic interior spaces tailored to individual needs.",
        service4: "Sustainable Construction",
        service4Text: "Planning smart and energy-efficient buildings that contribute to environmental quality.",
        
        contactTitle: "Contact Us",
        contactInfo: "Contact Information",
        address: "Peqi'in, Northern Israel",
        fullName: "Full Name",
        email: "Email",
        phone: "Phone",
        selectService: "Select Service Type",
        serviceOption1: "Architectural Planning",
        serviceOption2: "Urban Planning",
        serviceOption3: "Interior Design",
        serviceOption4: "Sustainable Construction",
        message: "Message",
        sendMessage: "Send Message",
        footerText: "I look forward to working with you and delivering a valuable experience.",
    },
    ar: {
        home: "الرئيسية",
        about: "عني",
        portfolio: "المشاريع",
        services: "خدماتي",
        contact: "اتصل بنا",
        
        heroTitle: "جوني مخول | معماري",
        heroSubtitle: "هندسي عمارة وبرمجيات، يسعى دائماً لتحقيق أقصى كفاءة وأفضل النتائج في أقل زمن ممكن.",
        getQuote: "للتواصل معي",
        
        aboutTitle: "عني",
        aboutText1: "متخصص في الرسم الهندسي الدقيق وتطوير النماذج الذكية (Blocks) لتسريع الأداء، مع مهارة في إيجاد حلول إبداعية للفراغات المعمارية.",
        aboutText2: "عززتُ مهاراتي عبر التعلم الذاتي المكثف بالتوازي مع دراستي الأكاديمية، وألتزم بالتطوير المستمر لمهاراتي مع كل فرصة متاحة.",
        yearsExp: "سنوات الخبرة",
        projectsDone: "مشروع مكتمل",
        awards: "جوائز مهنية",
        
        portfolioTitle: "معرض الأعمال",
        portfolioSubtitle: "المشروع النهائي",
		portfolioSubtitle1: "مطبخ عصري",
		
		video: "فيديوهات",
		videoTitle: "أتمتة الرسم الهندسي: Lisp و Blocks ذكية",
		videoNotSupported: "متصفحك لا يدعم تشغيل الفيديو.",
		video1Title: "قوة البلوكات الديناميكية: اختصر وقتك",
		video2Title: "برمجيات Lisp: تحسين كفاءة وسير العمل",
		video3Title: "عملية التصميم الداخلي",
              
        servicesTitle: "الخدمة",
        service1: "التخطيط المعماري",
        service1Text: "التخطيط الكامل للمباني وفقًا لمتطلبات العملاء ومعايير البناء الحالية.",
        service2: "التخطيط الحضري",
        service2Text: "تطوير مشاريع حضرية معقدة مع مراعاة البيئة والمجتمع.",
        service3: "التصميم الداخلي",
        service3Text: "إنشاء مساحات داخلية وظيفية وجمالية مصممة خصيصًا للاحتياجات الفردية.",
        service4: "البناء المستدام",
        service4Text: "تخطيط مباني ذكية موفرة للطاقة تساهم في جودة البيئة.",
        
        contactTitle: "اتصل بنا",
        contactInfo: "معلومات الاتصال",
        address: "البقيعة، شمال إسرائيل",
        fullName: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        selectService: "اختر نوع الخدمة",
        serviceOption1: "التخطيط المعماري",
        serviceOption2: "التخطيط الحضري",
        serviceOption3: "التصميم الداخلي",
        serviceOption4: "البناء المستدام",
        message: "الرسالة",
        sendMessage: "إرسال الرسالة",
        footerText: "يسعدني التعامل معكم، وأتمنى لكم تجربة عمل مثمرة.",
    }
};

// بيانات الصور للمعرض
const galleryImages = [
    { id: 1, src: "Library-img-1.jpg", category: "library",  title: { he: "כניסה לספרייה", en: "Library entrance", ar: "واجهة المكتبة" } },
    { id: 2, src: "Library-img-2.jpg", category: "library", title: { he: "חזית דרומית", en: "South facade", ar: "الواجهة الجنوبية" } },
    { id: 3, src: "Library-img-3.jpg", category: "library", title: { he: "עיצוב פנים מודרני", en: "Modern Interior Design", ar: "تصميم داخلي حديث" } },
    { id: 4, src: "Library-Plan-1.jpg", category: "library", title: { he: "תוכנית קרקע", en: "Plan", ar: "تخطيط الطابق الارضي" } },
    { id: 5, src: "Library-Section-1.jpg", category: "library", title: { he: "חתכים", en: "Sections", ar: "مقاطع" } },
    { id: 6, src: "Library-Details-1.jpg", category: "library", title: { he: "פרטים", en: "Details", ar: "تفاصيل" } },
	{ id: 7, src: "Kitchen1.webp", category: "Kitchin", title: { he: "מטבח מודרני", en: "modern Kitchin", ar: "مطبخ عصري" } },
	{ id: 8, src: "Kitchen2.webp", category: "Kitchin", title: { he: "מטבח מודרני", en: "modern Kitchin", ar: "مطبخ عصري" } },
	{ id: 9, src: "Kitchen3.webp", category: "Kitchin", title: { he: "מטבח מודרני", en: "modern Kitchin", ar: "مطبخ عصري" } },
  ];

// المتغيرات العامة
let currentLang = 'he';
let currentImageIndex = 0;

// تهيئة الموقع عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    // تعيين سنة حقوق الطبع
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // تهيئة الترجمة
    initLanguage();
    
    // تهيئة معرض الصور
     function initGalleryBySection(sectionId, categoryName) {
    const container = document.getElementById(sectionId);
    if (!container) return;

    const filteredImages = galleryImages.filter(img => img.category === categoryName);

    filteredImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = `gallery-item ${image.category}`;
        // ملاحظة: الـ index هون لازم يكون مطابق للمصفوفة الأصلية عشان الـ Lightbox يشتغل صح
        const originalIndex = galleryImages.findIndex(img => img.id === image.id);
        
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.title.he}" loading="lazy">
            <div class="gallery-item-overlay">
                <h4>${image.title[currentLang]}</h4>
            </div>
        `;
        galleryItem.addEventListener('click', () => openLightbox(originalIndex));
        container.appendChild(galleryItem);
    });
}

	// عند التحميل، استدعي الدالة مرتين
initGalleryBySection('gallery-library', 'library');
initGalleryBySection('gallery-Kitchin', 'Kitchin');
    
    // تهيئة نموذج الاتصال
    initContactForm();
    
    // تهيئة التنقل للهواتف
    initMobileMenu();
    
    // تهيئة أزرار تغيير اللغة
    initLanguageSwitcher();
    
});

// تهيئة الترجمة
function initLanguage() {
    // تعيين اللغة الافتراضية (العبرية)
    changeLanguage('he');
    
    // تعيين اتجاه الصفحة بناءً على اللغة
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : currentLang === 'he' ? 'rtl' : 'ltr';
}

// تغيير اللغة
function changeLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : lang === 'he' ? 'rtl' : 'ltr';
    
    // تحديث جميع العناصر ذات سمة data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // تحديث العناصر ذات السمة data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // تحديث عناوين الصور في المعرض
    updateImageTitles();
}

// تهيئة أزرار تغيير اللغة
function initLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
            
            // تحديث النشاط على أزرار اللغة
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}

// تهيئة معرض الصور
function initGallery() {
    const gallery = document.getElementById('gallery');
    
    // إضافة الصور إلى المعرض
    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = `gallery-item ${image.category}`;
        galleryItem.dataset.index = index;
        
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.title.he}">
            <div class="gallery-item-overlay">
                <h4>${image.title[currentLang]}</h4>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => openLightbox(index));
        gallery.appendChild(galleryItem);
    });
    
  
    
   
}

// تحديث عناوين الصور
function updateImageTitles() {
    document.querySelectorAll('.gallery-item-overlay h4').forEach((titleElement, index) => {
        const image = galleryImages[index];
        if (image && image.title[currentLang]) {
            titleElement.textContent = image.title[currentLang];
        }
    });
}

// فتح معرض الصور الموسع
function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const imageInfo = document.getElementById('imageInfo');
    
    lightboxImage.src = galleryImages[index].src;
    imageInfo.textContent = galleryImages[index].title[currentLang];
    
    lightbox.style.display = 'flex';
    
    // إغلاق المعرض عند النقر خارج الصورة
    lightbox.addEventListener('click', function(e) {
        if (e.target === this) {
            closeLightbox();
        }
    });
}

// إغلاق معرض الصور الموسع
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// تحكم بل فيديو
function initVideoControls() {
    // تشغيل/إيقاف الفيديو عند النقر على زر التشغيل
    document.querySelectorAll('.play-btn').forEach((btn, index) => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const videoWrapper = this.closest('.video-wrapper');
            const video = videoWrapper.querySelector('.project-video');
            
            if (video.paused) {
                video.play();
                this.style.opacity = '0';
                videoWrapper.querySelector('.video-overlay').style.opacity = '0.7';
            } else {
                video.pause();
                this.style.opacity = '0.9';
                videoWrapper.querySelector('.video-overlay').style.opacity = '1';
            }
        });
    });
    
    // إعادة عرض زر التشغيل عند توقف الفيديو
    document.querySelectorAll('.project-video').forEach(video => {
        video.addEventListener('pause', function() {
            const videoWrapper = this.closest('.video-wrapper');
            const playBtn = videoWrapper.querySelector('.play-btn');
            playBtn.style.opacity = '0.9';
            videoWrapper.querySelector('.video-overlay').style.opacity = '1';
        });
        
        video.addEventListener('play', function() {
            const videoWrapper = this.closest('.video-wrapper');
            const playBtn = videoWrapper.querySelector('.play-btn');
            playBtn.style.opacity = '0';
            videoWrapper.querySelector('.video-overlay').style.opacity = '0.7';
        });
    });
}

// استدع الدالة في تهيئة الموقع
document.addEventListener('DOMContentLoaded', function() {
    // ... الكود الحالي ...
    
    // أضف هذا السطر:
    initVideoControls();
});

// تهيئة أزرار التنقل في المعرض الموسع
document.getElementById('closeLightbox').addEventListener('click', closeLightbox);
document.getElementById('prevBtn').addEventListener('click', showPrevImage);
document.getElementById('nextBtn').addEventListener('click', showNextImage);

// عرض الصورة السابقة
function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
}

// عرض الصورة التالية
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightboxImage();
}

// تحديث الصورة في المعرض الموسع
function updateLightboxImage() {
    const lightboxImage = document.getElementById('lightboxImage');
    const imageInfo = document.getElementById('imageInfo');
    
    lightboxImage.src = galleryImages[currentImageIndex].src;
    imageInfo.textContent = galleryImages[currentImageIndex].title[currentLang];
}

// تهيئة نموذج الاتصال
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    // أضف دالة تحقق الميل هنا (بجانب initContactForm)
    function isValidEmail(email) {
        // تحقق صيغة الميل الأساسية
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return false;
        
        // قوائم temp emails
        const tempDomains = [
            'temp-mail.org', 'temp-mail.io', 'guerrillamail.com',
            'mailinator.com', '10minutemail.com', 'yopmail.com'
        ];
        
        const domain = email.split('@')[1].toLowerCase();
        return !tempDomains.some(temp => domain.includes(temp));
    }
    
    // دالة تحقق
    function validateContactForm(form) {
        const errors = [];
        const lang = currentLang;
        
        // 1. الاسم (3 حروف)
        const name = form.querySelector('input[name="name"]').value.trim();
        if (name.length < 3) {
            errors.push(lang === 'he' ? 'שם מלא - לפחות 3 תווים' :
                        lang === 'ar' ? 'الاسم - 3 أحرف على الأقل' :
                        'Full name - at least 3 characters');
        }
        
        // 2. الميل
        const email = form.querySelector('input[name="email"]').value.trim();
        if (!isValidEmail(email)) {
            errors.push(lang === 'he' ? 'אימייל לא תקין או זמני' :
                        lang === 'ar' ? 'بريد إلكتروني غير صالح' :
                        'Invalid or temporary email');
        }
        
        // 3. الهاتف
        const phone = form.querySelector('input[name="phone"]').value.trim();
        if (phone && !/^05\d-?\d{7}$/.test(phone)) {
            errors.push(lang === 'he' ? 'מספר טלפון לא תקין (05X-XXXXXXX)' :
                        lang === 'ar' ? 'رقم هاتف غير صحيح (05X-XXXXXXX)' :
                        'Invalid phone number (05X-XXXXXXX)');
        }
        
        // 4. الرسالة
        const message = form.querySelector('textarea[name="message"]').value.trim();
        if (message.length < 10) { // غيرت لـ 10 بدل 20
            errors.push(lang === 'he' ? `הודעה קצרה מדי (נדרשים 10 תווים, יש ${message.length})` :
                        lang === 'ar' ? `الرسالة قصيرة (مطلوب 10 حرف، لديك ${message.length})` :
                        `Message too short (10 chars required, you have ${message.length})`);
        }
        
        // 5. الخدمة
        const service = form.querySelector('select[name="service"]').value;
        if (service === 'general') {
            errors.push(lang === 'he' ? 'אנא בחר סוג שירות' :
                        lang === 'ar' ? 'الرجاء اختيار نوع الخدمة' :
                        'Please select a service type');
        }
        
        return errors;
    }
    
    // event listener واحد فقط
    contactForm.addEventListener('submit', function(e) {
        // 1. التحقق أولاً
        const errors = validateContactForm(this);
        
        if (errors.length > 0) {
            e.preventDefault();
            
            const errorMessages = {
                he: 'תיקון השגיאות הבאות לפני שליחה:\n' + errors.join('\n• '),
                ar: 'الرجاء تصحيح الأخطاء التالية قبل الإرسال:\n' + errors.join('\n• '),
                en: 'Please fix these errors before sending:\n' + errors.join('\n• ')
            };
            
            alert(errorMessages[currentLang] || errorMessages.en);
            return;
        }
        
        // 2. إذا كل شيء صحيح
        console.log('Form is valid, sending to Formspree...');
        
        // 3. لا تمنع الإرسال - دع Formspree يرسل
        // لا تستخدم e.preventDefault() هنا
        
        // 4. عرض رسالة نجاح بعد تأخير
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + 
            (currentLang === 'he' ? 'שולח...' : 
             currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...');
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            const successMessages = {
                he: 'תודה! הפנייה נשלחה למערכת.',
                en: 'Thank you! Form submitted.',
                ar: 'شكراً! تم إرسال النموذج.'
            };
            
            alert(successMessages[currentLang] || successMessages.he);
            
            // إعادة تعيين النموذج
            this.reset();
            this.querySelector('select[name="service"]').value = 'general';
            
        }, 3000);
    });
}

// تهيئة قائمة التنقل للهواتف
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            
            // تحديث النشاط على روابط التنقل
            document.querySelectorAll('.nav-link').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}

// إضافة تأثير التمرير لشريط التنقل
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
        navbar.style.padding = '10px 0';
    } else {
        navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
        navbar.style.padding = '15px 0';
    }
});

