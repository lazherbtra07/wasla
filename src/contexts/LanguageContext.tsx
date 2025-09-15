import React, { createContext, ReactNode, useContext, useState } from "react";

export type Language = "EN" | "AR";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// English translations
const enTranslations = {
  // Header
  "header.logo": "Wasla",
  "header.home": "Home",
  "header.services": "Services",
  "header.products": "Products",
  "header.about": "About Us",
  "header.contact": "Contact Us",
  "header.quote": "Request a Quote",

  // Hero
  "hero.title": "Integrated Communication Solutions",
  "hero.highlight": "Always Connecting You with Your Customers",
  "hero.subtitle":
    'At "Wasla", we blend human expertise with technical platforms to design seamless customer journeys via phone, WhatsApp, email, and live chat. We provide you with faster, smarter, and more effective service',
  "hero.cta1": "Start Now",
  "hero.cta2": "Contact Us",

  // Value Proposition
  "value.title": "Why Choose Wasla?",
  "value.subtitle":
    "We deliver exceptional results that transform your business ideas into thriving enterprises",
  "value.fast.title": "Speed",
  "value.fast.desc": "Instant response and 24/7 support",
  "value.pricing.title": "Competitive Pricing",
  "value.pricing.desc": "Smart solutions that reduce costs",
  "value.expertise.title": "Expertise",
  "value.expertise.desc": "Professional and trained technical teams",
  "value.support.title": "Accurate Analytics",
  "value.support.desc":
    "Real-time monitoring dashboards and clear performance indicators",
  "value.stat1": "Successful Launches",
  "value.stat2": "Client Satisfaction",
  "value.stat3": "Days Average Setup",
  "value.stat4": "Support Available",

  // Services
  "services.title": "Our Services",
  "services.subtitle":
    "Comprehensive consulting solutions to launch and scale your business successfully",
  "services.strategy.title": "Call Center and Customer Service",
  "services.strategy.desc":
    "Managing incoming and outgoing calls with the latest technologies",
  "services.market.title": "Technical Support",
  "services.market.desc":
    "Instant solutions for technical problems across multiple channels",
  "services.team.title": "Customer Relationship Management CRM",
  "services.team.desc":
    "Tracking and organizing customer data and improving company communication",
  "services.goal.title": "Phone and Digital Marketing",
  "services.goal.desc": "Effective sales campaigns and digital marketing",
  "services.legal.title": "Training and Development",
  "services.legal.desc":
    "Improving employee efficiency through specialized programs",
  "services.financial.title": "Opinion Surveys",
  "services.financial.desc": "Smart surveys for market and customer analysis",
  "services.learn": "Learn More",
  "services.view": "View All Services",

  // About
  "about.title": "About Us",
  "about.desc1":
    '"Wasla" is an Omani company specialized in designing and managing customer experiences. It aims to transform every communication into value through the integration of the latest technologies and expert human teams.',
  "about.desc2":
    "Our Vision: To be the first choice in the Sultanate of Oman for integrated communication solutions. Our Mission: To enhance companies' communication with their customers through professional and innovative services.",
  "about.exp": "Years Experience",
  "about.clients": "Happy Clients",
  "about.rate": "Success Rate",
  "about.read": "Learn More",
  "about.success": "Success Stories",

  // Portfolio
  "portfolio.title": "Success Stories",
  "portfolio.subtitle":
    "Real businesses we've helped launch and scale to remarkable success",
  "portfolio.case1.title": "Vodafone Call Center Integration Project",
  "portfolio.case2.title":
    "Customer Service System for Bella Baghdad Restaurant",
  "portfolio.case3.title":
    "Integrated CRM Solution for Khabiri Trading and Investment Company",
  "portfolio.viewMore": "View More",

  // Testimonials
  "testimonials.title": "What Our Clients Say",
  "testimonials.subtitle":
    "Real stories from real entrepreneurs who achieved extraordinary success with our guidance",
  "testimonials.sarah.content":
    "Wasla completely transformed our customer experience, with high speed response and professionalism.",
  "testimonials.sarah.type": "Ahmed Ali, Vodafone",
  "testimonials.michael.content":
    "Thanks to Wasla, our customer satisfaction rate improved by 40%.",
  "testimonials.michael.type": "Leila Mansour, Bella Restaurant",
  "testimonials.emily.content":
    "Digital solutions brought us closer to our customers and made management easier.",
  "testimonials.emily.type": "Mohammed Al-Khairi, Khabiri Investment Company",

  // Secondary CTA
  "cta.title": "Are You Ready for a Different Communication Journey?",
  "cta.subtitle": "Wasla always connects you with your customers.",
  "cta.button": "Contact Us Now",
  "cta.contact": "Schedule a Free Consultation",
  "cta.call.title": "Call Us",
  "cta.call.description": "+1 (555) 123-4567",
  "cta.call.action": "Available 24/7",
  "cta.email.title": "Email Us",
  "cta.email.description": "hello@businessconsult.com",
  "cta.email.action": "Quick Response",
  "cta.chat.title": "Live Chat",
  "cta.chat.description": "Chat with our experts",
  "cta.chat.action": "Instant Support",
  "cta.trust.launches": "500+ Successful Launches",
  "cta.trust.satisfaction": "98% Client Satisfaction",
  "cta.trust.award": "Award-Winning Team",

  // Blog
  "blog.title": "Latest Insights",
  "blog.subtitle":
    "Stay updated with the latest trends and strategies in business consulting",

  // Blog Posts
  "blog.post1.title":
    "New Strategic Collaboration with Telecommunications Provider",
  "blog.post1.date": "March 2025",
  "blog.post2.title": "Our Participation in the Technology Exhibition",
  "blog.post2.date": "April 2025",
  "blog.post3.title": "New Features in Measurement Dashboards",
  "blog.post3.date": "May 2025",
  "blog.readMore": "Read More",

  // Footer
  "footer.desc":
    "Empowering entrepreneurs to build successful businesses through expert consulting and strategic guidance.",
  "footer.quick": "Quick Links",
  "footer.contact.title": "Contact Info",
  "footer.contact.email": "info@businessconsult.com",
  "footer.contact.phone": "+1 (555) 123-4567",
  "footer.contact.address": "123 Business Street, Suite 100, City, State 12345",
  "footer.newsletter": "Newsletter",
  "footer.newsletter.desc":
    "Subscribe to get the latest business insights and updates.",
  "footer.newsletter.placeholder": "Enter your email",
  "footer.newsletter.button": "Subscribe",
  "footer.rights": "All rights reserved.",
  "footer.services.business": "Business Strategy",
  "footer.services.market": "Market Analysis",
  "footer.services.team": "Team Building",
  "footer.services.goal": "Goal Setting",
  "footer.services.legal": "Legal & Compliance",
  "footer.services.financial": "Financial Planning",

  // Process
  "process.title": "Our Process",
  "process.subtitle": "A proven methodology that delivers exceptional results",
  "process.discovery.title": "Discovery",
  "process.discovery.subtitle": "Understanding Your Needs",
  "process.discovery.desc":
    "We analyze your business requirements and identify opportunities for growth and improvement.",
  "process.design.title": "Design",
  "process.design.subtitle": "Creating Solutions",
  "process.design.desc":
    "We design tailored strategies and solutions that align with your business objectives.",
  "process.implementation.title": "Implementation",
  "process.implementation.subtitle": "Bringing Ideas to Life",
  "process.implementation.desc":
    "Our expert team executes the plan with precision and attention to detail.",
  "process.optimization.title": "Optimization",
  "process.optimization.subtitle": "Continuous Improvement",
  "process.optimization.desc":
    "We monitor performance and optimize strategies for maximum impact and results.",
};

// Arabic translations
const arTranslations = {
  // Header
  "header.logo": " وصلة",
  "header.home": "الرئيسية",
  "header.services": "الخدمات",
  "header.products": "المنتجات",
  "header.about": "من نحن",
  "header.contact": "تواصل معنا",
  "header.quote": "طلب عرض سعر",

  // Hero
  "hero.title": "حلول اتصالات متكاملة",
  "hero.highlight": " توصلك بعملائك دائمًا",
  "hero.subtitle":
    'في "وصلة"، نمزج بين الخبرة البشرية والمنصات التقنية لنصمم رحلات عملاء سلسة عبر الهاتف، الواتساب، البريد والدردشة الحية. نقدم لك خدمة أسرع، أذكى، وأكثر فاعلية',
  "hero.cta1": "ابدأ الآن",
  "hero.cta2": "تواصل معنا",

  // Value Proposition
  "value.title": "لماذا تختار وصلة؟",
  "value.subtitle": "نقدم نتائج استثنائية تحول أفكار عملك إلى مشاريع مزدهرة",
  "value.fast.title": "سرعة",
  "value.fast.desc": "استجابة فورية ودعم 24/7",
  "value.pricing.title": "أسعار تنافسية",
  "value.pricing.desc": "حلول ذكية تقلل التكلفة",
  "value.expertise.title": "خبرة",
  "value.expertise.desc": "فرق فنية محترفة ومدربة",
  "value.support.title": "تحليلات دقيقة",
  "value.support.desc": "لوحات متابعة لحظية ومؤشرات أداء واضحة",
  "value.stat1": "إطلاق ناجح",
  "value.stat2": "رضا العملاء",
  "value.stat3": "يوم متوسط الإعداد",
  "value.stat4": "دعم متاح",

  // Services
  "services.title": "خدماتنا",
  "services.subtitle": "حلول استشارية شاملة لإطلاق وتوسيع نطاق عملك بنجاح",
  "services.strategy.title": "مركز الاتصال وخدمة العملاء",
  "services.strategy.desc": "إدارة المكالمات الواردة والصادرة بأحدث التقنيات",
  "services.market.title": "الدعم الفني",
  "services.market.desc": "حلول فورية للمشكلات التقنية عبر قنوات متعددة",
  "services.team.title": "إدارة علاقات العملاء CRM",
  "services.team.desc": "تتبع وتنظيم بيانات العملاء وتحسين تواصل الشركات",
  "services.goal.title": "التسويق الهاتفي والإلكتروني",
  "services.goal.desc": "حملات مبيعات وتسويق رقمي فعالة",
  "services.legal.title": "التدريب والتأهيل",
  "services.legal.desc": "رفع كفاءة الموظفين عبر برامج متخصصة",
  "services.financial.title": "استطلاعات الرأي",
  "services.financial.desc": "استبيانات ذكية لتحليل السوق والعملاء",
  "services.learn": "اعرف المزيد",
  "services.view": "عرض جميع الخدمات",

  // About
  "about.title": "من نحن",
  "about.desc1":
    '"وصلة" شركة عمانية متخصصة في تصميم وإدارة تجارب العملاء. تهدف إلى تحويل كل تواصل إلى قيمة من خلال الدمج بين أحدث التقنيات وفرق بشرية خبيرة.',
  "about.desc2":
    "رؤيتنا: أن نكون الخيار الأول في سلطنة عمان لحلول الاتصال المتكاملة. رسالتنا: تعزيز تواصل الشركات مع عملائها بخدمات احترافية وابتكارية.",
  "about.exp": "سنوات خبرة",
  "about.clients": "عملاء سعداء",
  "about.rate": "معدل النجاح",
  "about.read": "اعرف المزيد",
  "about.success": "قصص نجاح",

  // Portfolio
  "portfolio.title": "قصص النجاح",
  "portfolio.subtitle":
    "أعمال حقيقية ساعدناها في الإطلاق والتوسع لتحقيق نجاح ملحوظ",
  "portfolio.case1.title": "مشروع تكامل مركز اتصال لفودافون",
  "portfolio.case2.title": "نظام خدمة العملاء لمطعم بيلّا بغداد",
  "portfolio.case3.title": "حل CRM متكامل لشركة خبيري للتجارة والاستثمار",
  "portfolio.viewMore": "عرض المزيد",

  // Testimonials
  "testimonials.title": "ماذا يقول عملاؤنا",
  "testimonials.subtitle":
    "قصص حقيقية من رجال أعمال حقيقيين حققوا نجاحًا استثنائيًا بتوجيهنا",
  "testimonials.sarah.content":
    "وصلة غيّرت من تجربة عملائنا بالكامل، سرعة استجابة واحترافية عالية.",
  "testimonials.sarah.type": "أحمد علي، فودافون",
  "testimonials.michael.content":
    "بفضل وصلة تحسّن معدل رضا العملاء عندنا بنسبة 40%.",
  "testimonials.michael.type": "ليلى منصور، مطعم بيلا",
  "testimonials.emily.content":
    "الحلول الرقمية جعلتنا أقرب لعملائنا وأسهل في الإدارة.",
  "testimonials.emily.type": "محمد الخيري، شركة خبيري للاستثمار",

  // Secondary CTA
  "cta.title": "هل أنت جاهز لرحلة تواصل مختلفة؟",
  "cta.subtitle": "وصلة توصلك بعملائك دائمًا.",
  "cta.button": "تواصل معنا الآن",
  "cta.contact": "جدول استشارة مجانية",
  "cta.call.title": "اتصل بنا",
  "cta.call.description": "+1 (555) 123-4567",
  "cta.call.action": "متاح 24/7",
  "cta.email.title": "راسلنا",
  "cta.email.description": "hello@businessconsult.com",
  "cta.email.action": "استجابة سريعة",
  "cta.chat.title": "دردشة مباشرة",
  "cta.chat.description": "تحدث مع خبرائنا",
  "cta.chat.action": "دعم فوري",
  "cta.trust.launches": "500+ إطلاق ناجح",
  "cta.trust.satisfaction": "98% رضا العملاء",
  "cta.trust.award": "فريق حائز على جوائز",

  // Blog
  "blog.title": "المدونة / الأخبار",
  "blog.subtitle":
    "ابق محدثًا بأحدث الاتجاهات والاستراتيجيات في استشارات الأعمال",

  // Blog Posts
  "blog.post1.title": "تعاون استراتيجي جديد مع مزود اتصالات",
  "blog.post1.date": "مارس 2025",
  "blog.post2.title": "مشاركتنا في معرض التقنية",
  "blog.post2.date": "أبريل 2025",
  "blog.post3.title": "ميزات جديدة في لوحات القياس",
  "blog.post3.date": "مايو 2025",
  "blog.readMore": "اقرأ المزيد",

  // Footer
  "footer.desc":
    "تمكين رجال الأعمال لبناء أعمال ناجحة من خلال الاستشارات المتخصصة والتوجيه الاستراتيجي.",
  "footer.quick": "روابط سريعة",
  "footer.contact.title": "معلومات الاتصال",
  "footer.contact.email": "info@businessconsult.com",
  "footer.contact.phone": "+1 (555) 123-4567",
  "footer.contact.address":
    "123 شارع الأعمال، جناح 100، المدينة، الولاية 12345",
  "footer.newsletter": "النشرة الإخبارية",
  "footer.newsletter.desc": "اشترك للحصول على أحدث رؤى وتحديثات الأعمال.",
  "footer.newsletter.placeholder": "أدخل بريدك الإلكتروني",
  "footer.newsletter.button": "اشترك",
  "footer.rights": "جميع الحقوق محفوظة.",
  "footer.services.business": "الاستراتيجية التجارية",
  "footer.services.market": "تحليل السوق",
  "footer.services.team": "بناء الفريق",
  "footer.services.goal": "تحديد الأهداف",
  "footer.services.legal": "القانونية والامتثال",
  "footer.services.financial": "التخطيط المالي",

  // Process
  "process.title": "عملية عملنا",
  "process.subtitle": "منهجية مثبتة تقدم نتائج استثنائية",
  "process.discovery.title": "الاكتشاف",
  "process.discovery.subtitle": "فهم احتياجاتك",
  "process.discovery.desc": "نحلل متطلبات عملك ونحدد فرص النمو والتحسين.",
  "process.design.title": "التصميم",
  "process.design.subtitle": "إنشاء الحلول",
  "process.design.desc": "نصمم استراتيجيات وحلول مخصصة تتماشى مع أهداف عملك.",
  "process.implementation.title": "التنفيذ",
  "process.implementation.subtitle": "تحويل الأفكار إلى واقع",
  "process.implementation.desc":
    "فريقنا الخبير ينفذ الخطة بدقة واهتمام بالتفاصيل.",
  "process.optimization.title": "التحسين",
  "process.optimization.subtitle": "التحسين المستمر",
  "process.optimization.desc":
    "نراقب الأداء ونحسن الاستراتيجيات للحصول على أقصى تأثير ونتائج.",
};

const translations = {
  EN: enTranslations,
  AR: arTranslations,
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("EN");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "AR" : "EN"));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div
        className={language === "AR" ? "rtl" : "ltr"}
        dir={language === "AR" ? "rtl" : "ltr"}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
