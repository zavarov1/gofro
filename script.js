// Словники для мов
const translations = {
    uk: {
        'Домівка': 'Домівка',
        'Продукти': 'Продукти',
        'Послуги': 'Послуги',
        'Про нас': 'Про нас',
        'Контакти': 'Контакти',
    },
    en: {
        'Домівка': 'Home',
        'Продукти': 'Products',
        'Послуги': 'Services',
        'Про нас': 'About',
        'Контакти': 'Contact',
    },
    pl: {
        'Домівка': 'Strona główna',
        'Продукти': 'Produkty',
        'Послуги': 'Usługi',
        'Про нас': 'O nas',
        'Контакти': 'Kontakt',
    }
};

// Інформація про продукти з ціноутворенням
const productDetails = {
    uk: {
        boxes: {
            title: '📦 Гофровані коробки',
            description: 'Міцні та надійні коробки для упаковки різних розмірів та форм.',
            pricingFactors: [
                { name: 'Розмір коробки', desc: 'Менші коробки дешевше, більші - дорожче' },
                { name: 'Товщина гофрокартону', desc: '2-хвильовий (дешевший) або 3-хвильовий (більш міцний)' },
                { name: 'Кількість замовлення', desc: 'Оптові замовлення мають знижку 10-30%' },
                { name: 'Друк та дизайн', desc: 'Стандартнии товар дешевше ніж з персоналізованим дизайном' },
                { name: 'Доставка', desc: 'Залежить від обсягу та відстані' }
            ],
            basePrice: '0,10-0,50 дол. за коробку',
            example: 'При замовленні 5000 коробок 20x15x10см у 2-хвильового картону, середня ціна складе близько 0,15-0,20 дол.'
        },
        sheets: {
            title: '📄 Гофровані листи',
            description: 'Листи, розрізані на замовлення для спеціальних потреб упаковки.',
            pricingFactors: [
                { name: 'Розмір листа', desc: 'Стандартні розміри дешевше ніж кастомні' },
                { name: 'Площа листа', desc: 'Чим більше площа, тим нижча ціна за м²' },
                { name: 'Тип картону', desc: '2-хвильовий, 3-хвильовий або 5-хвильовий' },
                { name: 'Кількість листів', desc: 'Від кількості залежить питома вартість' },
                { name: 'Обрізання та перфорація', desc: 'Додаткові операції збільшують вартість' }
            ],
            basePrice: 'від 5 дол. за лист від розміру',
            example: 'Листи формату А4 (210x297мм) у 2-хвильового картону: близько 0,05-0,10 дол. за лист при замовленні 1000+ шт.'
        },
        packaging: {
            title: '🎁 Упакування коробки',
            description: 'Брендовані та спеціально розроблені рішення для упаковки.',
            pricingFactors: [
                { name: 'Дизайн та друк', desc: 'Кольори, логотип, графіка - основна вартість' },
                { name: 'Кількість фарб', desc: '1 колір дешевше ніж 4-кольоровий друк' },
                { name: 'Обробка', desc: 'Ламінування, лакування, тиснення збільшує вартість' },
                { name: 'Кількість', desc: 'Малі серії (100-500шт) дорожче за великі' },
                { name: 'Спеціальні вставки', desc: 'Внутрішня вставка, розділювачі - додатково' }
            ],
            basePrice: '0,30-2,00 дол. за коробку',
            example: 'Брендована коробка 15x10x5см з 3-кольоровим друком при замовленні 1000 шт.: близько 0,60-0,80 дол.'
        },
        protective: {
            title: '🛡️ Захисні матеріали',
            description: 'Прокладки та захисні шари для безпечної доставки товарів.',
            pricingFactors: [
                { name: 'Тип матеріалу', desc: 'Папір, повітряні подушки, пінопласт - різні ціни' },
                { name: 'Щільність', desc: 'Більш щільні матеріали дорожче' },
                { name: 'Форма та розмір', desc: 'Стандартні розміри дешевше за кастомні' },
                { name: 'Упаковка', desc: 'Рулон або листи, саморулоне - різні ціни' },
                { name: 'Об\'єм закупівлі', desc: 'Більші замовлення мають знижку' }
            ],
            basePrice: '0,05-0,30 дол. за одиницю',
            example: 'Папірова подушка 50cmx50cm: близько 0,10-0,15 дол. за лист при замовленні 500+ шт.'
        },
        rolls: {
            title: '🔄 Індустріальні рулони',
            description: 'Оптові рулони гофрокартону для друку та виробництва.',
            pricingFactors: [
                { name: 'Ширина рулона', desc: 'Стандартні ширини: 500, 750, 1000, 1200мм' },
                { name: 'Довжина рулона', desc: 'Чим довше рулон, тим нижча ціна за м.' },
                { name: 'Вид картону', desc: '2-хвильовий, 3-хвильовий, 5-хвильовий' },
                { name: 'Щільність та якість', desc: 'Преміум якість дорожче за стандартну' },
                { name: 'Упаковка та логістика', desc: 'Транспортні витрати впливають на остаточну ціну' }
            ],
            basePrice: '200-600 дол. за рулон',
            example: 'Рулон 1200мм x 1000м у 2-хвильового картону: близько 400-500 дол. за рулон'
        },
        custom: {
            title: '⚙️ Спеціальні рішення',
            description: 'Упаковка на замовлення для унікальних потреб вашого бізнесу.',
            pricingFactors: [
                { name: 'Складність дизайну', desc: 'Прості форми дешевші за складні геометрії' },
                { name: 'Матеріали', desc: 'Вибір якості та типу картону' },
                { name: 'Механізми', desc: 'Магніти, ручки, замки - додаткові витрати' },
                { name: 'Кількість розробок', desc: 'Прототипування та тестування' },
                { name: 'Тираж виробництва', desc: 'Великі тирази мають більшу знижку' }
            ],
            basePrice: 'від 1,00 дол. за одиницю',
            example: 'Кастомна коробка зі спеціальною формою та механізмом при замовленні 500 шт.: близько 1,50-3,00 дол.'
        }
    },
    en: {
        boxes: {
            title: '📦 Corrugated Boxes',
            description: 'Durable and reliable boxes for packaging various sizes and shapes.',
            pricingFactors: [
                { name: 'Box Size', desc: 'Smaller boxes are cheaper, larger ones more expensive' },
                { name: 'Flute Thickness', desc: '2-ply (cheaper) or 3-ply (more durable)' },
                { name: 'Order Quantity', desc: 'Bulk orders get 10-30% discount' },
                { name: 'Printing and Design', desc: 'Standard cheaper than personalized' },
                { name: 'Shipping', desc: 'Depends on volume and distance' }
            ],
            basePrice: '$0.10-$0.50 per box',
            example: 'Order of 5000 boxes 20x15x10cm in 2-ply cardboard: average price $0.15-$0.20'
        },
        sheets: {
            title: '📄 Corrugated Sheets',
            description: 'Custom-cut sheets for specialized packaging needs.',
            pricingFactors: [
                { name: 'Sheet Size', desc: 'Standard sizes cheaper than custom' },
                { name: 'Sheet Area', desc: 'Larger area, lower price per m²' },
                { name: 'Cardboard Type', desc: '2-ply, 3-ply or 5-ply options' },
                { name: 'Quantity', desc: 'Depends on quantity ordered' },
                { name: 'Cutting and Perforation', desc: 'Additional operations increase cost' }
            ],
            basePrice: 'from $5 per sheet depending on size',
            example: 'A4 format sheets (210x297mm) in 2-ply: about $0.05-$0.10 per sheet for 1000+ units'
        },
        packaging: {
            title: '🎁 Packaging Boxes',
            description: 'Branded and custom-designed packaging solutions.',
            pricingFactors: [
                { name: 'Design and Printing', desc: 'Colors, logo, graphics are main cost' },
                { name: 'Number of Colors', desc: '1 color cheaper than 4-color printing' },
                { name: 'Finishing', desc: 'Lamination, varnish, embossing increase cost' },
                { name: 'Quantity', desc: 'Small runs (100-500) more expensive per unit' },
                { name: 'Special Inserts', desc: 'Inner inserts, dividers cost extra' }
            ],
            basePrice: '$0.30-$2.00 per box',
            example: 'Branded box 15x10x5cm with 3-color print for 1000 units: about $0.60-$0.80'
        },
        protective: {
            title: '🛡️ Protective Materials',
            description: 'Padding and protective layers for safe shipping.',
            pricingFactors: [
                { name: 'Material Type', desc: 'Paper, air pillows, foam - different prices' },
                { name: 'Density', desc: 'Higher density materials cost more' },
                { name: 'Shape and Size', desc: 'Standard sizes cheaper than custom' },
                { name: 'Packaging', desc: 'Rolls or sheets, self-rolling - various prices' },
                { name: 'Purchase Volume', desc: 'Larger orders get discounts' }
            ],
            basePrice: '$0.05-$0.30 per unit',
            example: 'Paper pad 50cmx50cm: about $0.10-$0.15 per sheet for 500+ units'
        },
        rolls: {
            title: '🔄 Industrial Rolls',
            description: 'Bulk corrugated cardboard rolls for printing and manufacturing.',
            pricingFactors: [
                { name: 'Roll Width', desc: 'Standard widths: 500, 750, 1000, 1200mm' },
                { name: 'Roll Length', desc: 'Longer rolls have lower price per meter' },
                { name: 'Cardboard Type', desc: '2-ply, 3-ply, 5-ply options' },
                { name: 'Density and Quality', desc: 'Premium quality costs more than standard' },
                { name: 'Packaging and Logistics', desc: 'Transport costs affect final price' }
            ],
            basePrice: '$200-$600 per roll',
            example: 'Roll 1200mm x 1000m in 2-ply cardboard: about $400-$500 per roll'
        },
        custom: {
            title: '⚙️ Custom Solutions',
            description: 'Customized packaging for unique business needs.',
            pricingFactors: [
                { name: 'Design Complexity', desc: 'Simple shapes cheaper than complex geometry' },
                { name: 'Materials', desc: 'Choice of cardboard quality and type' },
                { name: 'Mechanisms', desc: 'Magnets, handles, locks cost extra' },
                { name: 'Development Runs', desc: 'Prototyping and testing' },
                { name: 'Production Volume', desc: 'Large runs offer bigger discounts' }
            ],
            basePrice: 'from $1.00 per unit',
            example: 'Custom box with special shape and mechanism for 500 units: about $1.50-$3.00'
        }
    },
    pl: {
        boxes: {
            title: '📦 Pudełka z kartonu falistego',
            description: 'Trwałe i niezawodne pudełka do pakowania różnych rozmiarów i kształtów.',
            pricingFactors: [
                { name: 'Rozmiar pudełka', desc: 'Mniejsze pudełka są tańsze, większe droższe' },
                { name: 'Grubość fali', desc: '2-warstwowy (tańszy) lub 3-warstwowy (trwalszy)' },
                { name: 'Ilość zamawiania', desc: 'Zamówienia hurtowe mają rabat 10-30%' },
                { name: 'Druk i projekt', desc: 'Standard tańszy niż personalizowany' },
                { name: 'Dostawa', desc: 'Zależy od objętości i odległości' }
            ],
            basePrice: '$0,10-$0,50 za pudełko',
            example: 'Zamówienie 5000 pudełek 20x15x10cm w kartonie 2-warstwowym: średnia cena $0,15-$0,20'
        },
        sheets: {
            title: '📄 Arkusze kartonu falistego',
            description: 'Cięte na zamówienie arkusze do specjalnych potrzeb opakowania.',
            pricingFactors: [
                { name: 'Rozmiar arkusza', desc: 'Rozmiary standardowe tańsze niż kustom' },
                { name: 'Powierzchnia arkusza', desc: 'Większa powierzchnia, niższa cena za m²' },
                { name: 'Typ kartonu', desc: 'Opcje 2-warstwowe, 3-warstwowe lub 5-warstwowe' },
                { name: 'Ilość', desc: 'Zależy od zamówionej ilości' },
                { name: 'Cięcie i perforacja', desc: 'Dodatkowe operacje zwiększają koszty' }
            ],
            basePrice: 'od $5 za arkusz w zależności od rozmiaru',
            example: 'Arkusze formatu A4 (210x297mm) w kartonie 2-warstwowym: około $0,05-$0,10 za arkusz'
        },
        packaging: {
            title: '🎁 Pudełka opakowaniowe',
            description: 'Rozwiązania opakowaniowe ze znakami towarowymi i niestandardowym projektowaniem.',
            pricingFactors: [
                { name: 'Projekt i druk', desc: 'Kolory, logo, grafika to główny koszt' },
                { name: 'Liczba kolorów', desc: '1 kolor tańszy niż druk 4-kolorowy' },
                { name: 'Wykończenie', desc: 'Laminowanie, lakier, tłoczenie zwiększają koszt' },
                { name: 'Ilość', desc: 'Małe serie (100-500) droższe za sztukę' },
                { name: 'Specjalne wkładki', desc: 'Wkładki wewnętrzne, działaki kosztują dodatkowo' }
            ],
            basePrice: '$0,30-$2,00 za pudełko',
            example: 'Pudełko ze znakiem 15x10x5cm z drukiem 3-kolorowym na 1000 szt: około $0,60-$0,80'
        },
        protective: {
            title: '🛡️ Materiały ochronne',
            description: 'Wyściełania i warstwy ochronne do bezpiecznej wysyłki.',
            pricingFactors: [
                { name: 'Rodzaj materiału', desc: 'Papier, poduszki powietrzne, pianka - różne ceny' },
                { name: 'Gęstość', desc: 'Materiały o wyższej gęstości kosztują więcej' },
                { name: 'Kształt i rozmiar', desc: 'Rozmiary standardowe tańsze niż niestandardowe' },
                { name: 'Opakowanie', desc: 'Rolki lub arkusze, samouwijące się - różne ceny' },
                { name: 'Wielkość zakupów', desc: 'Większe zamówienia mają rabaty' }
            ],
            basePrice: '$0,05-$0,30 za jednostkę',
            example: 'Papierowa poduszka 50cmx50cm: około $0,10-$0,15 za arkusz dla 500+ szt'
        },
        rolls: {
            title: '🔄 Rolki przemysłowe',
            description: 'Masowe rolki kartonu falistego do drukowania i produkcji.',
            pricingFactors: [
                { name: 'Szerokość rolki', desc: 'Szerokości standardowe: 500, 750, 1000, 1200mm' },
                { name: 'Długość rolki', desc: 'Dłuższe rolki mają niższą cenę za metr' },
                { name: 'Typ kartonu', desc: 'Opcje 2-warstwowe, 3-warstwowe, 5-warstwowe' },
                { name: 'Gęstość i jakość', desc: 'Jakość premium kosztuje więcej niż standardowa' },
                { name: 'Opakowanie i logistyka', desc: 'Koszty transportu wpływają na cenę końcową' }
            ],
            basePrice: '$200-$600 za rolkę',
            example: 'Rolka 1200mm x 1000m w kartonie 2-warstwowym: około $400-$500 za rolkę'
        },
        custom: {
            title: '⚙️ Niestandardowe rozwiązania',
            description: 'Opakowanie dostosowane do unikalnych potrzeb biznesu.',
            pricingFactors: [
                { name: 'Złożoność projektu', desc: 'Proste kształty tańsze niż złożone geometrie' },
                { name: 'Materiały', desc: 'Wybór jakości i typu kartonu' },
                { name: 'Mechanizmy', desc: 'Magnesy, uchwyty, zamki kosztują dodatkowo' },
                { name: 'Prace rozwojowe', desc: 'Prototypowanie i testowanie' },
                { name: 'Wielkość produkcji', desc: 'Duże serie oferują większe rabaty' }
            ],
            basePrice: 'od $1,00 za jednostkę',
            example: 'Niestandardowe pudełko o specjalnym kształcie i mechanizmie na 500 szt: około $1,50-$3,00'
        }
    }
};

// Поточна мова
let currentLanguage = 'uk';

// Конфігурація карусельки
let currentCarouselIndex = 0;
let autoCarouselInterval = null;
const CAROUSEL_AUTO_INTERVAL = 5000; // 5 секунд

// Ініціалізація
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguageSwitcher();
    initializeFormSubmission();
    initializeCarousel();
    initializeMenuToggle();
    updateLanguage('uk');
});

// Перемикач мови
function initializeLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            
            // Видалити активний клас з усіх кнопок
            langButtons.forEach(b => b.classList.remove('active'));
            
            // Додати активний клас до натиснутої кнопки
            this.classList.add('active');
            
            // Оновити мову
            currentLanguage = lang;
            updateLanguage(lang);
            
            // Зберегти вибір мови
            localStorage.setItem('preferredLanguage', lang);
        });
    });

    // Завантажити збережену мову, якщо вона існує
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'uk';
    const savedLangBtn = document.querySelector(`[data-lang="${savedLanguage}"]`);
    if (savedLangBtn) {
        savedLangBtn.click();
    }
}

// Меню для мобільних пристроїв
function initializeMenuToggle() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!menuToggle) return; // Якщо елемента немає, виходимо
    
    // Обробник кліку на кнопку меню
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('active');
    });
    
    // Закриття меню при кліку на посилання
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Закриття меню при кліку поза межами
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-container')) {
            navMenu.classList.remove('active');
        }
    });
    
    // Закриття меню при зміні розміру вікна
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
        }
    });
}

// Оновити всі тексти на вибраній мові
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-uk]');
    
    elements.forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else if (element.tagName === 'BUTTON' && !element.classList.contains('lang-btn')) {
                element.textContent = text;
            } else if (element.classList.contains('nav-link')) {
                const key = element.textContent.trim();
                const translation = translations[lang]?.[key] || key;
                element.textContent = translation;
            } else {
                element.textContent = text;
            }
        }
    });

    // Оновити мову документа
    document.documentElement.lang = lang;

    // Оновити мову в навігації
    updateNavigation(lang);

    // Якщо модаль відкритий, оновити його
    const modal = document.getElementById('productModal');
    if (modal && modal.style.display === 'block') {
        // Отримати ID продукту з modalBody
        const modalBody = document.getElementById('modalBody');
        const productTitle = modalBody.querySelector('.modal-header');
        if (productTitle) {
            // Знайти який продукт зараз відкритий
            for (const [productId, productData] of Object.entries(productDetails[lang])) {
                if (productData.title === productTitle.textContent) {
                    openProductModal(productId);
                    return;
                }
            }
        }
    }
}

// Оновити навігацію
function updateNavigation(lang) {
    const navTranslations = {
        uk: ['Домівка', 'Продукти', 'Послуги', 'Про нас', 'Контакти'],
        en: ['Home', 'Products', 'Services', 'About', 'Contact'],
        pl: ['Strona główna', 'Produkty', 'Usługi', 'O nas', 'Kontakt']
    };

    const navLinks = document.querySelectorAll('.nav-link');
    const texts = navTranslations[lang];

    navLinks.forEach((link, index) => {
        if (texts[index]) {
            link.textContent = texts[index];
        }
    });
}

// Обробка відправлення форми
function initializeFormSubmission() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Отримати дані форми
            const formData = new FormData(form);
            
            // Показати повідомлення про успіх
            showSuccessMessage();
            
            // Очистити форму
            form.reset();
        });
    }
}

// Показати повідомлення про успіх
function showSuccessMessage() {
    const messages = {
        uk: 'Дякуємо! Ваше повідомлення було відправлено. Ми зв\'яжемося з вами найскоріше!',
        en: 'Thank you! Your message has been sent. We will contact you soon!',
        pl: 'Dziękuję! Twoja wiadomość została wysłana. Skontaktujemy się z Tobą wkrótce!'
    };

    const message = messages[currentLanguage];
    
    // Створити елемент для повідомлення
    const alertDiv = document.createElement('div');
    alertDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #FFD700, #FFA500);
        color: #1a1a1a;
        padding: 1.5rem 2rem;
        border-radius: 8px;
        font-weight: bold;
        z-index: 10000;
        animation: slideIn 0.5s ease;
        box-shadow: 0 5px 20px rgba(255, 215, 0, 0.4);
    `;
    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);
    
    // Видалити повідомлення через 4 секунди
    setTimeout(() => {
        alertDiv.style.animation = 'slideOut 0.5s ease';
        setTimeout(() => alertDiv.remove(), 500);
    }, 4000);
}

// Анімація для повідомлень
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Гладке прокручування для якорів
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Активна навігація при скролі та темний фон меню
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    // Додати темний фон при скролі
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Додати стиль для активного посилання
const navStyle = document.createElement('style');
navStyle.textContent = `
    .nav-link.active {
        color: #00D9FF;
        border-bottom-color: #00D9FF;
    }
`;
document.head.appendChild(navStyle);

// Функції для модального вікна
function openProductModal(productId) {
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    const product = productDetails[currentLanguage][productId];
    
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    let html = `
        <div class="modal-header">
            ${product.title}
        </div>
        
        <div class="modal-section">
            <p>${product.description}</p>
        </div>

        <div class="modal-section">
            <h3>${currentLanguage === 'uk' ? 'Базова ціна' : currentLanguage === 'en' ? 'Base Price' : 'Cena bazowa'}</h3>
            <p style="font-size: 1.2rem; color: var(--primary-color); font-weight: bold;">${product.basePrice}</p>
        </div>

        <div class="modal-section">
            <h3>${currentLanguage === 'uk' ? 'Фактори, які впливають на ціну' : currentLanguage === 'en' ? 'Factors Affecting Price' : 'Czynniki wpływające na cenę'}</h3>
    `;

    product.pricingFactors.forEach(factor => {
        html += `
            <div class="price-factor">
                <strong>${factor.name}:</strong> ${factor.desc}
            </div>
        `;
    });

    html += `
        <div class="price-example">
            <strong>${currentLanguage === 'uk' ? 'Приклад ціноутворення' : currentLanguage === 'en' ? 'Pricing Example' : 'Przykład ceny'}:</strong><br>
            ${product.example}
        </div>

        <button class="cta-modal-btn" onclick="closeProductModal()">
            ${currentLanguage === 'uk' ? 'Закрити' : currentLanguage === 'en' ? 'Close' : 'Zamknij'}
        </button>
        <button class="cta-modal-btn" onclick="document.getElementById('productModal').style.display='none'; document.getElementById('contact').scrollIntoView({behavior: 'smooth'});">
            ${currentLanguage === 'uk' ? 'Замовити' : currentLanguage === 'en' ? 'Order' : 'Zamów'}
        </button>
    `;

    modalBody.innerHTML = html;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Закрити модал при натисканні поза межами вікна
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        closeProductModal();
    }
}

// Функції для карусельки продуктів
function initializeCarousel() {
    const carousel = document.getElementById('productCarousel');
    const dotsContainer = document.getElementById('productDots');
    
    if (!carousel) return;

    const items = carousel.querySelectorAll('.carousel-item');
    const itemCount = items.length;

    // Створити точки навігації
    if (dotsContainer) {
        for (let i = 0; i < itemCount; i++) {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (i === 0) dot.classList.add('active');
            dot.onclick = () => goToSlide(i);
            dotsContainer.appendChild(dot);
        }
    }

    // Автоматичне прокручування
    startAutoCarousel();
}

function getCarouselItemsPerView() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1200) return 2;
    return 3;
}

function updateCarouselPosition() {
    const carousel = document.getElementById('productCarousel');
    if (!carousel) return;

    const itemsPerView = getCarouselItemsPerView();
    const items = carousel.querySelectorAll('.carousel-item');
    const itemWidth = 100 / itemsPerView;
    const translateValue = -currentCarouselIndex * itemWidth;

    carousel.style.transform = `translateX(${translateValue}%)`;

    // Оновити точки
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === Math.floor(currentCarouselIndex / itemsPerView));
    });
}

function nextProduct() {
    const carousel = document.getElementById('productCarousel');
    if (!carousel) return;

    const items = carousel.querySelectorAll('.carousel-item');
    const itemsPerView = getCarouselItemsPerView();
    const maxIndex = Math.max(0, items.length - itemsPerView);

    currentCarouselIndex = Math.min(currentCarouselIndex + 1, maxIndex);
    updateCarouselPosition();
    resetAutoCarousel();
}

function prevProduct() {
    const carousel = document.getElementById('productCarousel');
    if (!carousel) return;

    currentCarouselIndex = Math.max(0, currentCarouselIndex - 1);
    updateCarouselPosition();
    resetAutoCarousel();
}

function goToSlide(index) {
    const carousel = document.getElementById('productCarousel');
    if (!carousel) return;

    const itemsPerView = getCarouselItemsPerView();
    const items = carousel.querySelectorAll('.carousel-item');
    const maxIndex = Math.max(0, items.length - itemsPerView);

    currentCarouselIndex = Math.min(index * itemsPerView, maxIndex);
    updateCarouselPosition();
    resetAutoCarousel();
}

function startAutoCarousel() {
    autoCarouselInterval = setInterval(() => {
        const carousel = document.getElementById('productCarousel');
        if (!carousel) return;

        const items = carousel.querySelectorAll('.carousel-item');
        const itemsPerView = getCarouselItemsPerView();
        const maxIndex = Math.max(0, items.length - itemsPerView);

        if (currentCarouselIndex < maxIndex) {
            currentCarouselIndex++;
        } else {
            currentCarouselIndex = 0;
        }

        updateCarouselPosition();
    }, CAROUSEL_AUTO_INTERVAL);
}

function resetAutoCarousel() {
    clearInterval(autoCarouselInterval);
    startAutoCarousel();
}

// Оновити карусель при зміні розміру вікна
window.addEventListener('resize', () => {
    updateCarouselPosition();
});
