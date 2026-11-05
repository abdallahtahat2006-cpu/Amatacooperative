import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  MapPin,
  Building2,
  Send,
  Mail
} from 'lucide-react';
import { COOPERATIVE_INFO } from '../data/cooperativeData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const Contact: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const defaultTopic = language === 'ar'
    ? 'استفسار عن شروط الانتساب والعضوية'
    : 'Inquiry regarding membership and subscription';

  const [userName, setUserName] = useState('');
  const [topic, setTopic] = useState(defaultTopic);
  const [userNote, setUserNote] = useState('');

  const generateWhatsAppMessage = () => {
    if (language === 'ar') {
      let msg = `السلام عليكم ورحمة الله،\nالاسم: ${userName || 'مهتم بالتعاونية'}\nالموضوع: ${topic}\n`;
      if (userNote.trim()) {
        msg += `الاستفسار: ${userNote}\n`;
      }
      msg += `أرجو تزويدي بالمعلومات المتعلقة بهذا الموضوع من إدارة تعاونية عمتا. وشكراً لكم.`;
      return msg;
    } else {
      let msg = `Hello,\nName: ${userName || 'Prospective Member'}\nTopic: ${topic}\n`;
      if (userNote.trim()) {
        msg += `Inquiry Details: ${userNote}\n`;
      }
      msg += `Please provide me with information from Ammata Cooperative management. Thank you.`;
      return msg;
    }
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const finalMsg = generateWhatsAppMessage();
    const url = `https://wa.me/${COOPERATIVE_INFO.whatsappNumber}?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const topicOptions = language === 'ar' ? [
    'استفسار عن شروط الانتساب والعضوية',
    'استفسار عن الاكتتاب والأسهم والتقسيط',
    'استفسار موجه للجنة المشاريع الصغيرة والمتوسطة',
    'استفسار موجه للجنة التدريب والتشغيل',
    'استفسار موجه للجنة المشاريع الكبرى والمنح',
    'استفسار موجه للجنة التسويق والإعلام الرقمي',
    'استفسار عام'
  ] : [
    'Inquiry regarding membership and subscription',
    'Inquiry regarding shares, par value and installments',
    'Inquiry for the Small & Medium Projects Committee',
    'Inquiry for the Training & Employment Committee',
    'Inquiry for the Major Projects & Grants Committee',
    'Inquiry for the Marketing & Digital Media Committee',
    'General Inquiry'
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 tracking-tight">
            {t.contactPageTitle}
          </h1>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            {t.contactPageSubtitle}
          </p>
        </div>

        {/* =========================================================================
            PRIMARY CONTACT CHANNELS (4 CARDS)
           ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Phone Card */}
          <div className="bg-white rounded-3xl p-7 border border-surface-border shadow-card flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 flex items-center justify-center">
                <Phone className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="text-lg font-bold text-primary-950">
                {t.contactPhoneCardTitle}
              </h3>
              <p className="text-xs text-ink-secondary leading-relaxed">
                {t.contactPhoneCardDesc}
              </p>
              <div className="pt-2">
                <span className="block text-xs text-ink-muted mb-1">{t.contactApprovedNumber}</span>
                <span dir="ltr" className="text-xl font-bold font-mono text-primary-800 block">
                  {COOPERATIVE_INFO.phoneDisplay}
                </span>
                <span dir="ltr" className="text-xs font-mono text-ink-secondary">
                  +962 79 033 5694
                </span>
              </div>
            </div>

            <a
              href={COOPERATIVE_INFO.phoneTelLink}
              className="w-full py-3 px-4 rounded-xl font-bold bg-primary-700 text-white hover:bg-primary-800 transition-colors text-center text-sm shadow-subtle flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>{t.contactPhoneAction}</span>
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white rounded-3xl p-7 border border-surface-border shadow-card flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-primary-950">
                {t.contactWhatsAppCardTitle}
              </h3>
              <p className="text-xs text-ink-secondary leading-relaxed">
                {t.contactWhatsAppCardDesc}
              </p>
              <div className="pt-2">
                <span className="block text-xs text-ink-muted mb-1">
                  {language === 'ar' ? 'خدمة المراسلة المباشرة:' : 'Direct Messaging:'}
                </span>
                <span className="text-sm font-semibold text-emerald-700 block">
                  {language === 'ar' ? 'متاح عبر تطبيق WhatsApp' : 'Available on WhatsApp'}
                </span>
                <span className="text-xs text-ink-secondary">
                  +962 79 033 5694
                </span>
              </div>
            </div>

            <a
              href={`https://wa.me/${COOPERATIVE_INFO.whatsappNumber}?text=${encodeURIComponent(
                language === 'ar'
                  ? COOPERATIVE_INFO.whatsappPrefilledMessage
                  : COOPERATIVE_INFO.whatsappPrefilledMessageEn
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors text-center text-sm shadow-subtle flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.contactWhatsAppAction}</span>
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-3xl p-7 border border-surface-border shadow-card flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center">
                <Mail className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-lg font-bold text-primary-950">
                {t.contactEmailCardTitle}
              </h3>
              <p className="text-xs text-ink-secondary leading-relaxed">
                {t.contactEmailCardDesc}
              </p>
              <div className="pt-2">
                <span className="block text-xs text-ink-muted mb-1">{t.contactEmailApproved}</span>
                <span dir="ltr" className="text-sm font-bold font-mono text-primary-800 block break-all">
                  {COOPERATIVE_INFO.email}
                </span>
                <span className="text-xs text-ink-secondary">
                  {t.contactEmailSub}
                </span>
              </div>
            </div>

            <a
              href={COOPERATIVE_INFO.emailMailto}
              className="w-full py-3 px-4 rounded-xl font-bold bg-sky-600 text-white hover:bg-sky-700 transition-colors text-center text-sm shadow-subtle flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>{t.contactEmailAction}</span>
            </a>
          </div>

          {/* Center & Location Card */}
          <div className="bg-white rounded-3xl p-7 border border-surface-border shadow-card flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-accent-50 text-accent-700 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="text-lg font-bold text-primary-950">
                {t.contactLocationCardTitle}
              </h3>
              <p className="text-xs text-ink-secondary leading-relaxed">
                {t.contactLocationCardDesc}
              </p>
              <div className="pt-2 space-y-1">
                <span className="block text-xs text-ink-muted">{t.contactCenterLabel}</span>
                <span className="text-base font-bold text-primary-950 block">
                  {language === 'ar' ? COOPERATIVE_INFO.center : COOPERATIVE_INFO.centerEn}
                </span>
                <span className="text-xs text-ink-secondary block">
                  {t.contactWorkAreaLabel} {language === 'ar' ? COOPERATIVE_INFO.workArea : COOPERATIVE_INFO.workAreaEn}
                </span>
              </div>
            </div>

            <div className="bg-surface-alt p-3 rounded-xl border border-surface-border text-center text-xs text-ink-muted">
              {t.contactJordan}
            </div>
          </div>

        </div>

        {/* =========================================================================
            INTERACTIVE INQUIRY COMPOSER (DISPATCHES DIRECTLY VIA WHATSAPP)
           ========================================================================= */}
        <div className="bg-white rounded-3xl border border-surface-border p-8 sm:p-10 lg:p-12 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-primary-950">
                  {t.contactFormTitle}
                </h2>
                <p className="text-xs sm:text-sm text-ink-secondary mt-1">
                  {t.contactFormSubtitle}
                </p>
              </div>

              <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
                <div>
                  <label htmlFor="user-name" className="block text-xs font-bold text-primary-900 mb-1.5">
                    {t.contactFormNameLabel}
                  </label>
                  <input
                    id="user-name"
                    type="text"
                    required
                    placeholder={t.contactFormNamePlaceholder}
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-surface-border focus:border-accent-500 focus:ring-1 focus:ring-accent-500 text-sm bg-surface-alt"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-topic" className="block text-xs font-bold text-primary-900 mb-1.5">
                    {t.contactFormTopicLabel}
                  </label>
                  <select
                    id="inquiry-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-surface-border focus:border-accent-500 focus:ring-1 focus:ring-accent-500 text-sm bg-surface-alt"
                  >
                    {topicOptions.map((opt, oIdx) => (
                      <option key={oIdx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="user-note" className="block text-xs font-bold text-primary-900 mb-1.5">
                    {t.contactFormNotesLabel}
                  </label>
                  <textarea
                    id="user-note"
                    rows={4}
                    placeholder={t.contactFormNotesPlaceholder}
                    value={userNote}
                    onChange={(e) => setUserNote(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-surface-border focus:border-accent-500 focus:ring-1 focus:ring-accent-500 text-sm bg-surface-alt resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-subtle flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>{t.contactFormSubmit}</span>
                  <Send className={`w-4 h-4 ${isRTL ? 'mr-1' : 'ml-1'}`} />
                </button>
              </form>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-5 bg-gradient-to-br from-primary-900 to-primary-950 text-white rounded-3xl p-7 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-primary-800">
                <Building2 className="w-6 h-6 text-accent-400" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold">
                    {t.contactDataTitle}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-primary-100">
                <div>
                  <span className="text-accent-400 block font-semibold mb-0.5">{t.contactNameLabel}</span>
                  <p className="font-bold text-white">{language === 'ar' ? COOPERATIVE_INFO.name : COOPERATIVE_INFO.nameEn}</p>
                </div>

                <div>
                  <span className="text-accent-400 block font-semibold mb-0.5">{t.contactTypeLabel}</span>
                  <p>{language === 'ar' ? COOPERATIVE_INFO.type : COOPERATIVE_INFO.typeEn}</p>
                </div>

                <div>
                  <span className="text-accent-400 block font-semibold mb-0.5">{t.contactCenterLabel}</span>
                  <p>{language === 'ar' ? COOPERATIVE_INFO.center : COOPERATIVE_INFO.centerEn}</p>
                </div>

                <div>
                  <span className="text-accent-400 block font-semibold mb-0.5">{t.contactPhoneApprovedLabel}</span>
                  <p dir="ltr" className="font-mono text-white text-base font-bold text-start">
                    +962 79 033 5694
                  </p>
                </div>

                <div>
                  <span className="text-accent-400 block font-semibold mb-0.5">{t.contactEmailApprovedLabel}</span>
                  <a
                    href={COOPERATIVE_INFO.emailMailto}
                    dir="ltr"
                    className="font-mono text-white text-sm sm:text-base font-bold text-start block hover:text-accent-300 transition-colors break-all"
                  >
                    {COOPERATIVE_INFO.email}
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-primary-800 text-xs text-primary-200 leading-relaxed">
                {t.coopQuote}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
