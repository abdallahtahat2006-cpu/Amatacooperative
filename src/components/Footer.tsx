import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, ArrowLeft, Mail } from 'lucide-react';
import { COOPERATIVE_INFO } from '../data/cooperativeData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerNav = [
    { to: '/', label: 'الرئيسية' },
    { to: '/about', label: 'عن التعاونية' },
    { to: '/goals', label: 'غاياتنا' },
    { to: '/governance', label: 'الهيكل التنظيمي' },
    { to: '/membership', label: 'العضوية والانتساب' },
    { to: '/contact', label: 'تواصل معنا' },
  ];

  return (
    <footer className="bg-primary-950 text-white pt-10 sm:pt-14 pb-8 border-t border-primary-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-8 sm:pb-10 border-b border-primary-800/60">
          
          {/* Identity Column */}
          <div className="md:col-span-5 space-y-3.5">
            <Link to="/" className="inline-block" aria-label="الصفحة الرئيسية">
              <img
                src={COOPERATIVE_INFO.logoWhitePath}
                alt="شعار تعاونية عمتا"
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>
            
            <p className="text-primary-100/85 text-xs sm:text-sm leading-relaxed max-w-sm">
              جمعية تعاونية أردنية متعددة الأغراض محدودة المسؤولية، تتخذ من محافظة البلقاء عنواناً لها، ومركزها البلاونة، تأسست وفق أحكام قانون التعاون الأردني ونظامها الداخلي المعتمد.
            </p>

            <p className="text-xs text-accent-300 pt-1">
              «نرحّب بانتساب كل من يشاركنا غايات النظام الأساسي ورؤية خطة الربع الرابع 2026»
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs sm:text-sm font-bold text-accent-400 uppercase tracking-wider">
              أقسام الموقع
            </h3>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs sm:text-sm">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-primary-100/80 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3 h-3 text-accent-400/70" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Column */}
          <div className="md:col-span-4 space-y-3 text-xs sm:text-sm">
            <h3 className="text-xs sm:text-sm font-bold text-accent-400 uppercase tracking-wider">
              المقر والتواصل
            </h3>

            <div className="space-y-2.5 text-primary-100/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                <span>{COOPERATIVE_INFO.center}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent-400 shrink-0" />
                <a
                  href={COOPERATIVE_INFO.phoneTelLink}
                  className="font-mono text-white hover:text-accent-300 transition-colors"
                  dir="ltr"
                >
                  00962-790335694
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent-400 shrink-0" />
                <a
                  href={COOPERATIVE_INFO.emailMailto}
                  className="font-mono text-white hover:text-accent-300 transition-colors text-xs break-all"
                  dir="ltr"
                >
                  {COOPERATIVE_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-accent-400 shrink-0" />
                <a
                  href={`https://wa.me/${COOPERATIVE_INFO.whatsappNumber}?text=${encodeURIComponent(COOPERATIVE_INFO.whatsappPrefilledMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-300 hover:text-white transition-colors text-xs"
                >
                  مراسلة واتساب للاستفسار
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-300/75 text-center sm:text-right">
          <p>
            جميع الحقوق محفوظة © {currentYear} {COOPERATIVE_INFO.name}.
          </p>
          <p className="flex items-center justify-center gap-2">
            <span>المملكة الأردنية الهاشمية</span>
            <span>•</span>
            <span>{COOPERATIVE_INFO.type}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
