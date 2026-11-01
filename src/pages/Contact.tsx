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

export const Contact: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [topic, setTopic] = useState('استفسار عن شروط الانتساب والعضوية');
  const [userNote, setUserNote] = useState('');

  const generateWhatsAppMessage = () => {
    let msg = `السلام عليكم ورحمة الله،\nالاسم: ${userName || 'مهتم بالتعاونية'}\nالموضوع: ${topic}\n`;
    if (userNote.trim()) {
      msg += `الاستفسار: ${userNote}\n`;
    }
    msg += `أرجو تزويدي بالمعلومات المتعلقة بهذا الموضوع من إدارة تعاونية عمتا. وشكراً لكم.`;
    return msg;
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const finalMsg = generateWhatsAppMessage();
    const url = `https://wa.me/${COOPERATIVE_INFO.whatsappNumber}?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 tracking-tight">
            تواصل معنا
          </h1>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            بيانات الاتصال والعنوان الرسمية المعتمدة لتعاونية عمّتا.
          </p>
        </div>

        {/* =========================================================================
            PRIMARY CONTACT CHANNELS (CARDS)
           ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Phone Card */}
          <div className="bg-white rounded-3xl p-7 border border-surface-border shadow-card flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-700 flex items-center justify-center">
                <Phone className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="text-lg font-bold text-primary-950">
                الاتصال الهاتفي
              </h3>
              <p className="text-xs text-ink-secondary leading-relaxed">
                رقم الهاتف المعتمد لإدارة التعاونية للتواصل المباشر.
              </p>
              <div className="pt-2">
                <span className="block text-xs text-ink-muted mb-1">الرقم المعتمد:</span>
                <span dir="ltr" className="text-xl font-bold font-mono text-primary-800 block">
                  {COOPERATIVE_INFO.phoneDisplay}
                </span>
                <span dir="ltr" className="text-xs font-mono text-ink-secondary">
                  00962-790335694
                </span>
              </div>
            </div>

            <a
              href={COOPERATIVE_INFO.phoneTelLink}
              className="w-full py-3 px-4 rounded-xl font-bold bg-primary-700 text-white hover:bg-primary-800 transition-colors text-center text-sm shadow-subtle flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>اتصال هاتفي مباشر</span>
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white rounded-3xl p-7 border border-surface-border shadow-card flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-primary-950">
                المراسلة عبر واتساب
              </h3>
              <p className="text-xs text-ink-secondary leading-relaxed">
                محادثة فورية للاستفسار عبر الهاتف المعتمد (0790335694).
              </p>
              <div className="pt-2">
                <span className="block text-xs text-ink-muted mb-1">خدمة المراسلة المباشرة:</span>
                <span className="text-sm font-semibold text-emerald-700 block">
                  متاح عبر تطبيق WhatsApp
                </span>
                <span className="text-xs text-ink-secondary">
                  رسالة مباشرة إلى الرقم المعتمد
                </span>
              </div>
            </div>

            <a
              href={`https://wa.me/${COOPERATIVE_INFO.whatsappNumber}?text=${encodeURIComponent(COOPERATIVE_INFO.whatsappPrefilledMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors text-center text-sm shadow-subtle flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>بدء محادثة واتساب</span>
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-3xl p-7 border border-surface-border shadow-card flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center">
                <Mail className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-lg font-bold text-primary-950">
                البريد الإلكتروني
              </h3>
              <p className="text-xs text-ink-secondary leading-relaxed">
                البريد الرسمي المعتمد لتلقي المراسلات والاستفسارات.
              </p>
              <div className="pt-2">
                <span className="block text-xs text-ink-muted mb-1">البريد المعتمد:</span>
                <span dir="ltr" className="text-sm font-bold font-mono text-primary-800 block break-all">
                  {COOPERATIVE_INFO.email}
                </span>
                <span className="text-xs text-ink-secondary">
                  متابعة مستمرة للمراسلات الواردة
                </span>
              </div>
            </div>

            <a
              href={COOPERATIVE_INFO.emailMailto}
              className="w-full py-3 px-4 rounded-xl font-bold bg-sky-600 text-white hover:bg-sky-700 transition-colors text-center text-sm shadow-subtle flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>إرسال بريد إلكتروني</span>
            </a>
          </div>

          {/* Center & Location Card */}
          <div className="bg-white rounded-3xl p-7 border border-surface-border shadow-card flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-accent-50 text-accent-700 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent-600" />
              </div>
              <h3 className="text-lg font-bold text-primary-950">
                المقر والمركز
              </h3>
              <p className="text-xs text-ink-secondary leading-relaxed">
                بيانات العنوان والمركز المعتمدة للتعاونية.
              </p>
              <div className="pt-2 space-y-1">
                <span className="block text-xs text-ink-muted">مركز التعاونية:</span>
                <span className="text-base font-bold text-primary-950 block">
                  {COOPERATIVE_INFO.center}
                </span>
                <span className="text-xs text-ink-secondary block">
                  منطقة العمل: {COOPERATIVE_INFO.workArea}
                </span>
              </div>
            </div>

            <div className="bg-surface-alt p-3 rounded-xl border border-surface-border text-center text-xs text-ink-muted">
              المملكة الأردنية الهاشمية
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
                  إرسال استفسار مباشر إلى إدارة التعاونية
                </h2>
                <p className="text-xs sm:text-sm text-ink-secondary mt-1">
                  اكتب اسمك ونوع استفسارك لفتح محادثة واتساب موجهة مباشرة إلى رقم هاتف التعاونية.
                </p>
              </div>

              <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
                <div>
                  <label htmlFor="user-name" className="block text-xs font-bold text-primary-900 mb-1.5">
                    الاسم:
                  </label>
                  <input
                    id="user-name"
                    type="text"
                    required
                    placeholder="اكتب اسمك هنا"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-surface-border focus:border-accent-500 focus:ring-1 focus:ring-accent-500 text-sm bg-surface-alt"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-topic" className="block text-xs font-bold text-primary-900 mb-1.5">
                    موضوع الاستفسار:
                  </label>
                  <select
                    id="inquiry-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-surface-border focus:border-accent-500 focus:ring-1 focus:ring-accent-500 text-sm bg-surface-alt"
                  >
                    <option value="استفسار عن شروط الانتساب والعضوية">استفسار عن شروط الانتساب والعضوية</option>
                    <option value="استفسار عن الاكتتاب والأسهم والتقسيط">استفسار عن الاكتتاب والأسهم والتقسيط</option>
                    <option value="استفسار موجه للجنة المشاريع الصغيرة والمتوسطة">استفسار موجه للجنة المشاريع الصغيرة والمتوسطة</option>
                    <option value="استفسار موجه للجنة التدريب والتشغيل">استفسار موجه للجنة التدريب والتشغيل</option>
                    <option value="استفسار موجه للجنة المشاريع الكبرى والمنح">استفسار موجه للجنة المشاريع الكبرى والمنح</option>
                    <option value="استفسار موجه للجنة التسويق والإعلام الرقمي">استفسار موجه للجنة التسويق والإعلام الرقمي</option>
                    <option value="استفسار عام">استفسار عام</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="user-note" className="block text-xs font-bold text-primary-900 mb-1.5">
                    تفاصيل الاستفسار (اختياري):
                  </label>
                  <textarea
                    id="user-note"
                    rows={4}
                    placeholder="اكتب أي ملاحظة أو سؤال ترغب بتضمينه..."
                    value={userNote}
                    onChange={(e) => setUserNote(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-surface-border focus:border-accent-500 focus:ring-1 focus:ring-accent-500 text-sm bg-surface-alt resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-subtle flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>إرسال الاستفسار عبر واتساب</span>
                  <Send className="w-4 h-4 mr-1" />
                </button>
              </form>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-5 bg-gradient-to-br from-primary-900 to-primary-950 text-white rounded-3xl p-7 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-primary-800">
                <Building2 className="w-6 h-6 text-accent-400" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold">
                    بيانات التعاونية
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-primary-100">
                <div>
                  <span className="text-accent-400 block font-semibold mb-0.5">الاسم:</span>
                  <p className="font-bold text-white">{COOPERATIVE_INFO.name}</p>
                </div>

                <div>
                  <span className="text-accent-400 block font-semibold mb-0.5">النوع:</span>
                  <p>{COOPERATIVE_INFO.type}</p>
                </div>

                <div>
                  <span className="text-accent-400 block font-semibold mb-0.5">المقر والمركز:</span>
                  <p>{COOPERATIVE_INFO.center}</p>
                </div>

                <div>
                  <span className="text-accent-400 block font-semibold mb-0.5">الهاتف المعتمد:</span>
                  <p dir="ltr" className="font-mono text-white text-base font-bold text-right">
                    00962-790335694
                  </p>
                </div>

                <div>
                  <span className="text-accent-400 block font-semibold mb-0.5">البريد الإلكتروني:</span>
                  <a
                    href={COOPERATIVE_INFO.emailMailto}
                    dir="ltr"
                    className="font-mono text-white text-sm sm:text-base font-bold text-right block hover:text-accent-300 transition-colors break-all"
                  >
                    {COOPERATIVE_INFO.email}
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-primary-800 text-xs text-primary-200 leading-relaxed">
                «نرحّب بانتساب كل من يشاركنا غايات النظام الأساسي ورؤية خطة الربع الرابع 2026»
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
