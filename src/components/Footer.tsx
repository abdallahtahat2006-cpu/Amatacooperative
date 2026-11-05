import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, ArrowLeft, ArrowRight, Mail } from 'lucide-react';
import { COOPERATIVE_INFO } from '../data/cooperativeData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const Footer: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const footerNav = [
    { to: '/', label: t.navHome },
    { to: '/about', label: t.navAbout },
    { to: '/goals', label: t.navGoals },
    { to: '/governance', label: t.navGovernance },
    { to: '/membership', label: t.navMembership },
    { to: '/contact', label: t.navContact },
  ];

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <footer className="bg-primary-950 text-white pt-10 sm:pt-14 pb-8 border-t border-primary-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-8 sm:pb-10 border-b border-primary-800/60">
          
          {/* Identity Column */}
          <div className="md:col-span-5 space-y-3.5">
            <Link to="/" className="inline-block" aria-label={t.navHome}>
              <img
                src={COOPERATIVE_INFO.logoWhitePath}
                alt={language === 'ar' ? 'شعار تعاونية عمتا' : 'Ammata Cooperative Logo'}
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>
            
            <p className="text-primary-100/85 text-xs sm:text-sm leading-relaxed max-w-sm">
              {language === 'ar' ? COOPERATIVE_INFO.aboutSummary : COOPERATIVE_INFO.aboutSummaryEn}
            </p>

            <p className="text-xs text-accent-300 pt-1">
              {t.coopQuote}
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs sm:text-sm font-bold text-accent-400 uppercase tracking-wider">
              {t.siteSections}
            </h3>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs sm:text-sm">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-primary-100/80 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowIcon className="w-3 h-3 text-accent-400/70" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Column */}
          <div className="md:col-span-4 space-y-3 text-xs sm:text-sm">
            <h3 className="text-xs sm:text-sm font-bold text-accent-400 uppercase tracking-wider">
              {t.hqAndContact}
            </h3>

            <div className="space-y-2.5 text-primary-100/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                <span>{language === 'ar' ? COOPERATIVE_INFO.center : COOPERATIVE_INFO.centerEn}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent-400 shrink-0" />
                <a
                  href={COOPERATIVE_INFO.phoneTelLink}
                  className="font-mono text-white hover:text-accent-300 transition-colors"
                  dir="ltr"
                >
                  +962 79 033 5694
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
                  href={`https://wa.me/${COOPERATIVE_INFO.whatsappNumber}?text=${encodeURIComponent(
                    language === 'ar'
                      ? COOPERATIVE_INFO.whatsappPrefilledMessage
                      : COOPERATIVE_INFO.whatsappPrefilledMessageEn
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-300 hover:text-white transition-colors text-xs"
                >
                  {t.quickWhatsApp}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-300/75 text-center sm:text-start">
          <p>
            {t.allRightsReserved}
          </p>
          <p className="flex items-center justify-center gap-2">
            <span>{t.jordanKingdom}</span>
            <span>•</span>
            <span>{t.coopTypeTag}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
