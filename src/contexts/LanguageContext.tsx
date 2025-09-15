import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'EN' | 'AR';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// English translations
const enTranslations = {
  // Header
  'header.logo': 'BusinessConsult',
  'header.home': 'Home',
  'header.services': 'Services',
  'header.products': 'Products',
  'header.about': 'About Us',
  'header.contact': 'Contact Us',
  'header.quote': 'Request a Quote',

  // Hero
  'hero.title': 'Transform Your',
  'hero.highlight': 'Business Vision',
  'hero.subtitle': 'Expert consulting services to guide your startup journey from idea to successful business launch',
  'hero.cta1': 'Start Your Journey',
  'hero.cta2': 'Watch Demo',

  // Value Proposition
  'value.title': 'Why Choose Us?',
  'value.subtitle': 'We deliver exceptional results that transform your business ideas into thriving enterprises',
  'value.fast.title': 'Fast Results',
  'value.fast.desc': 'Get your business strategy ready in just 30 days with our proven methodology',
  'value.pricing.title': 'Fair Pricing',
  'value.pricing.desc': 'Transparent and competitive pricing with no hidden costs or surprise fees',
  'value.expertise.title': 'Proven Expertise',
  'value.expertise.desc': 'Over 500+ successful business launches with our expert guidance',
  'value.support.title': 'Dedicated Support',
  'value.support.desc': '24/7 support team ready to help you overcome any business challenge',
  'value.stat1': 'Successful Launches',
  'value.stat2': 'Client Satisfaction',
  'value.stat3': 'Days Average Setup',
  'value.stat4': 'Support Available',

  // Services
  'services.title': 'Our Services',
  'services.subtitle': 'Comprehensive consulting solutions to launch and scale your business successfully',
  'services.strategy.title': 'Business Strategy',
  'services.strategy.desc': 'Comprehensive business planning and strategic roadmap development for sustainable growth',
  'services.market.title': 'Market Analysis',
  'services.market.desc': 'In-depth market research and competitive analysis to identify opportunities and threats',
  'services.team.title': 'Team Building',
  'services.team.desc': 'Organizational structure design and team optimization for maximum productivity',
  'services.goal.title': 'Goal Setting',
  'services.goal.desc': 'SMART goals development and milestone tracking for measurable business success',
  'services.legal.title': 'Legal & Compliance',
  'services.legal.desc': 'Business registration, legal structure setup, and compliance requirements guidance',
  'services.financial.title': 'Financial Planning',
  'services.financial.desc': 'Financial forecasting, budgeting, and investment planning for startup success',
  'services.learn': 'Learn More',
  'services.view': 'View All Services',

  // About
  'about.title': 'About Our Mission',
  'about.desc1': 'We are passionate about empowering entrepreneurs and business owners to turn their innovative ideas into successful, sustainable enterprises. With over a decade of experience in business consulting, our team has guided hundreds of startups through every stage of their journey.',
  'about.desc2': 'Our comprehensive approach combines strategic planning, market analysis, and hands-on support to ensure your business not only launches successfully but thrives in today\'s competitive marketplace.',
  'about.exp': 'Years Experience',
  'about.clients': 'Happy Clients',
  'about.rate': 'Success Rate',
  'about.read': 'Read More About Us',
  'about.success': 'Success Stories',

  // Portfolio
  'portfolio.title': 'Success Stories',
  'portfolio.subtitle': 'Real businesses we\'ve helped launch and scale to remarkable success',

  // Testimonials
  'testimonials.title': 'What Our Clients Say',
  'testimonials.subtitle': 'Real stories from real entrepreneurs who achieved extraordinary success with our guidance',
  'testimonials.sarah.content': 'BusinessConsult transformed our startup vision into a reality. Their strategic guidance helped us secure $2M in funding and scale rapidly.',
  'testimonials.sarah.type': 'Business Strategy',
  'testimonials.michael.content': 'The team\'s expertise in sustainable business models was invaluable. We achieved profitability 6 months ahead of schedule.',
  'testimonials.michael.type': 'Market Analysis',
  'testimonials.emily.content': 'Our digital transformation wouldn\'t have been possible without BusinessConsult. They helped us increase our client base by 250%.',
  'testimonials.emily.type': 'Digital Transformation',

  // Secondary CTA
  'cta.title': 'Ready to Launch Your Business?',
  'cta.subtitle': 'Join hundreds of successful entrepreneurs who chose our proven consulting methodology',
  'cta.button': 'Get Started Today',
  'cta.contact': 'Schedule a Free Consultation',

  // Blog
  'blog.title': 'Latest Insights',
  'blog.subtitle': 'Stay updated with the latest trends and strategies in business consulting',

  // Footer
  'footer.desc': 'Empowering entrepreneurs to build successful businesses through expert consulting and strategic guidance.',
  'footer.quick': 'Quick Links',
  'footer.contact.title': 'Contact Info',
  'footer.contact.email': 'info@businessconsult.com',
  'footer.contact.phone': '+1 (555) 123-4567',
  'footer.contact.address': '123 Business Ave, Suite 100, City, State 12345',
  'footer.newsletter': 'Newsletter',
  'footer.newsletter.desc': 'Subscribe to get the latest business insights and updates.',
  'footer.newsletter.placeholder': 'Enter your email',
  'footer.newsletter.button': 'Subscribe',
  'footer.rights': 'All rights reserved.',
};

// Arabic translations
const arTranslations = {
  // Header
  'header.logo': 'استشارات الأعمال',
  'header.home': 'الرئيسية',
  'header.services': 'الخدمات',
  'header.products': 'المنتجات',
  'header.about': 'من نحن',
  'header.contact': 'اتصل بنا',
  'header.quote': 'طلب عرض سعر',

  // Hero
  'hero.title': 'حول',
  'hero.highlight': 'رؤية عملك',
  'hero.subtitle': 'خدمات استشارية متخصصة لتوجيه رحلة شركتك الناشئة من الفكرة إلى إطلاق الأعمال الناجحة',
  'hero.cta1': 'ابدأ رحلتك',
  'hero.cta2': 'شاهد العرض التوضيحي',

  // Value Proposition
  'value.title': 'لماذا تختارنا؟',
  'value.subtitle': 'نقدم نتائج استثنائية تحول أفكار عملك إلى مشاريع مزدهرة',
  'value.fast.title': 'نتائج سريعة',
  'value.fast.desc': 'احصل على استراتيجية عملك جاهزة في 30 يومًا فقط بمنهجيتنا المثبتة',
  'value.pricing.title': 'أسعار عادلة',
  'value.pricing.desc': 'أسعار شفافة وتنافسية بدون تكاليف خفية أو رسوم مفاجئة',
  'value.expertise.title': 'خبرة مثبتة',
  'value.expertise.desc': 'أكثر من 500+ إطلاق أعمال ناجح بتوجيهنا المتخصص',
  'value.support.title': 'دعم مخصص',
  'value.support.desc': 'فريق دعم 24/7 جاهز لمساعدتك في التغلب على أي تحدي تجاري',
  'value.stat1': 'إطلاق ناجح',
  'value.stat2': 'رضا العملاء',
  'value.stat3': 'يوم متوسط الإعداد',
  'value.stat4': 'دعم متاح',

  // Services
  'services.title': 'خدماتنا',
  'services.subtitle': 'حلول استشارية شاملة لإطلاق وتوسيع نطاق عملك بنجاح',
  'services.strategy.title': 'استراتيجية الأعمال',
  'services.strategy.desc': 'تخطيط شامل للأعمال وتطوير خارطة طريق استراتيجية للنمو المستدام',
  'services.market.title': 'تحليل السوق',
  'services.market.desc': 'بحث السوق المتعمق وتحليل المنافسة لتحديد الفرص والتهديدات',
  'services.team.title': 'بناء الفريق',
  'services.team.desc': 'تصميم الهيكل التنظيمي وتحسين الفريق لتحقيق أقصى إنتاجية',
  'services.goal.title': 'وضع الأهداف',
  'services.goal.desc': 'تطوير أهداف ذكية وتتبع المعالم للنجاح التجاري القابل للقياس',
  'services.legal.title': 'القانونية والامتثال',
  'services.legal.desc': 'تسجيل الأعمال وإعداد الهيكل القانوني وإرشادات متطلبات الامتثال',
  'services.financial.title': 'التخطيط المالي',
  'services.financial.desc': 'التنبؤ المالي ووضع الميزانية وتخطيط الاستثمار لنجاح الشركات الناشئة',
  'services.learn': 'اعرف المزيد',
  'services.view': 'عرض جميع الخدمات',

  // About
  'about.title': 'حول مهمتنا',
  'about.desc1': 'نحن متحمسون لتمكين رجال الأعمال وأصحاب الشركات من تحويل أفكارهم المبتكرة إلى مشاريع ناجحة ومستدامة. مع أكثر من عقد من الخبرة في استشارات الأعمال، وجه فريقنا مئات الشركات الناشئة خلال كل مرحلة من رحلتهم.',
  'about.desc2': 'نهجنا الشامل يجمع بين التخطيط الاستراتيجي وتحليل السوق والدعم العملي لضمان أن عملك لا يطلق بنجاح فحسب، بل يزدهر في السوق التنافسي اليوم.',
  'about.exp': 'سنوات خبرة',
  'about.clients': 'عملاء سعداء',
  'about.rate': 'معدل النجاح',
  'about.read': 'اقرأ المزيد عنا',
  'about.success': 'قصص نجاح',

  // Portfolio
  'portfolio.title': 'قصص النجاح',
  'portfolio.subtitle': 'أعمال حقيقية ساعدناها في الإطلاق والتوسع لتحقيق نجاح ملحوظ',

  // Testimonials
  'testimonials.title': 'ماذا يقول عملاؤنا',
  'testimonials.subtitle': 'قصص حقيقية من رجال أعمال حقيقيين حققوا نجاحًا استثنائيًا بتوجيهنا',
  'testimonials.sarah.content': 'استشارات الأعمال حولت رؤية شركتنا الناشئة إلى واقع. توجيهاتهم الاستراتيجية ساعدتنا في تأمين تمويل بقيمة 2 مليون دولار والتوسع بسرعة.',
  'testimonials.sarah.type': 'استراتيجية الأعمال',
  'testimonials.michael.content': 'خبرة الفريق في نماذج الأعمال المستدامة كانت لا تقدر بثمن. حققنا الربحية قبل 6 أشهر من الجدول المحدد.',
  'testimonials.michael.type': 'تحليل السوق',
  'testimonials.emily.content': 'تحولنا الرقمي لم يكن ممكنًا بدون استشارات الأعمال. ساعدونا في زيادة قاعدة عملائنا بنسبة 250%.',
  'testimonials.emily.type': 'التحول الرقمي',

  // Secondary CTA
  'cta.title': 'هل أنت مستعد لإطلاق عملك؟',
  'cta.subtitle': 'انضم إلى مئات رجال الأعمال الناجحين الذين اختاروا منهجيتنا الاستشارية المثبتة',
  'cta.button': 'ابدأ اليوم',
  'cta.contact': 'جدول استشارة مجانية',

  // Blog
  'blog.title': 'أحدث الأفكار',
  'blog.subtitle': 'ابق محدثًا بأحدث الاتجاهات والاستراتيجيات في استشارات الأعمال',

  // Footer
  'footer.desc': 'تمكين رجال الأعمال لبناء أعمال ناجحة من خلال الاستشارات المتخصصة والتوجيه الاستراتيجي.',
  'footer.quick': 'روابط سريعة',
  'footer.contact.title': 'معلومات الاتصال',
  'footer.contact.email': 'info@businessconsult.com',
  'footer.contact.phone': '+1 (555) 123-4567',
  'footer.contact.address': '123 شارع الأعمال، جناح 100، المدينة، الولاية 12345',
  'footer.newsletter': 'النشرة الإخبارية',
  'footer.newsletter.desc': 'اشترك للحصول على أحدث رؤى وتحديثات الأعمال.',
  'footer.newsletter.placeholder': 'أدخل بريدك الإلكتروني',
  'footer.newsletter.button': 'اشترك',
  'footer.rights': 'جميع الحقوق محفوظة.',
};

const translations = {
  EN: enTranslations,
  AR: arTranslations,
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('EN');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'EN' ? 'AR' : 'EN');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div className={language === 'AR' ? 'rtl' : 'ltr'} dir={language === 'AR' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}