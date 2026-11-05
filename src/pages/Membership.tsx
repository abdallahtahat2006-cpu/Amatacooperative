import React from 'react';
import {
  Users,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Phone,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  BadgeAlert
} from 'lucide-react';
import { COOPERATIVE_INFO } from '../data/cooperativeData';
import { ShareCalculator } from '../components/ShareCalculator';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const Membership: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const encodedWhatsapp = `https://wa.me/${COOPERATIVE_INFO.whatsappNumber}?text=${encodeURIComponent(
    language === 'ar' ? COOPERATIVE_INFO.whatsappPrefilledMessage : COOPERATIVE_INFO.whatsappPrefilledMessageEn
  )}`;

  const membershipProvisions = [
    {
      num: '01',
      title: language === 'ar' ? 'شروط الأهلية (المادة 3)' : 'Eligibility Conditions (Article 3)',
      desc: language === 'ar'
        ? 'باب الانتساب للتعاونية مفتوح لكل أردني أتم الثامنة عشرة من عمره ويتمتع بالأهلية القانونية، دون تمييز سياسي أو ديني أو عنصري، وفق الشروط المحددة في النظام الأساسي.'
        : 'Open to every Jordanian who has attained 18 years of age and possesses full legal capacity, without political, religious, or racial discrimination.'
    },
    {
      num: '02',
      title: language === 'ar' ? 'رسوم الانتساب' : 'Application Fee',
      desc: language === 'ar'
        ? 'رسوم الانتساب: 25 دينار أردني غير مستردة تسدد عند تقديم طلب الانتساب.'
        : 'Application Fee: 25 JOD non-refundable, payable upon submission of the membership request.'
    },
    {
      num: '03',
      title: language === 'ar' ? 'حدود الاكتتاب في الأسهم' : 'Share Subscription Limits',
      desc: language === 'ar'
        ? 'قيمة السهم الواحد دينار واحد بحد أدنى 500 (خمسمائة) سهم وحد أعلى 40000 (أربعون ألف) سهم (المادة 10).'
        : 'Nominal share value is 1 JOD, with a minimum of 500 shares and a statutory maximum of 40,000 shares (Article 10).'
    },
    {
      num: '04',
      title: language === 'ar' ? 'خيار الدفعة الأولى والتقسيط' : 'Downpayment & Installments',
      desc: language === 'ar'
        ? 'إمكانية دفعة أولى خمس المبلغ والباقي يقسط على 24 شهر، وفقاً للنظام الأساسي.'
        : 'Option of paying a 20% (one-fifth) downpayment with the balance payable in monthly installments over 24 months.'
    }
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 tracking-tight">
            {t.membershipPageTitle}
          </h1>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            {t.membershipPageSubtitle}
          </p>
        </div>

        {/* =========================================================================
            ELIGIBILITY CONDITIONS CARD (Article 3)
           ========================================================================= */}
        <div className="bg-white rounded-3xl border border-surface-border p-8 sm:p-10 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-950">
                {t.membershipConditionsTitle}
              </h2>

              <p className="text-base text-ink-secondary leading-relaxed bg-surface-alt p-5 rounded-2xl border border-surface-border font-medium">
                «{language === 'ar' ? COOPERATIVE_INFO.membershipEligibility : COOPERATIVE_INFO.membershipEligibilityEn}»
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-ink-secondary">
                <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-surface-border shadow-subtle">
                  <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0" />
                  <span>{language === 'ar' ? 'الجنسية الأردنية' : 'Jordanian Nationality'}</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-surface-border shadow-subtle">
                  <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0" />
                  <span>{language === 'ar' ? 'إتمام 18 سنة من العمر' : '18+ Years of Age'}</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-surface-border shadow-subtle">
                  <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0" />
                  <span>{language === 'ar' ? 'التمتع بالأهلية القانونية' : 'Full Legal Capacity'}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-gradient-to-br from-primary-900 to-primary-950 text-white rounded-2xl p-6 sm:p-7 space-y-4 text-center">
              <ShieldCheck className="w-10 h-10 text-accent-400 mx-auto" />
              <h3 className="text-lg font-bold">
                {language === 'ar' ? 'قاعدة اتخاذ القرار' : 'Governance Rule'}
              </h3>
              <p className="text-xs text-primary-100/90 leading-relaxed">
                {language === 'ar'
                  ? '«لكل عضو صوت واحد بغض النظر عن عدد أسهمه، وتُتخذ قرارات الهيئة العامة بأكثرية أصوات الأعضاء الحاضرين.»'
                  : '"Each member holds one vote regardless of the number of shares held; resolutions pass by majority of members present."'}
              </p>
              <div className="pt-2">
                <span className="inline-block text-xs text-accent-300 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                  {language === 'ar' ? 'المادة (28/ج) من النظام الأساسي' : 'Article 28/c of the Bylaws'}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            MEMBERSHIP FIGURES AND SUBSCRIPTION DETAILS
           ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-surface-border shadow-subtle hover:border-primary-300 transition-all space-y-2">
            <span className="text-xs font-semibold text-ink-muted block">
              {language === 'ar' ? 'رسوم الانتساب' : 'Application Fee'}
            </span>
            <div className="text-3xl font-bold text-primary-800">
              25 <span className="text-sm font-normal text-ink-secondary">{t.calcCurrency}</span>
            </div>
            <p className="text-xs text-ink-secondary pt-2 border-t border-surface-border">
              {language === 'ar' ? 'تسدد لمرة واحدة عند تقديم طلب الانتساب.' : 'One-time non-refundable fee with application.'}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-surface-border shadow-subtle hover:border-primary-300 transition-all space-y-2">
            <span className="text-xs font-semibold text-ink-muted block">
              {language === 'ar' ? 'قيمة السهم الواحد' : 'Par Value Per Share'}
            </span>
            <div className="text-3xl font-bold text-primary-800">
              1 <span className="text-sm font-normal text-ink-secondary">{t.calcCurrency}</span>
            </div>
            <p className="text-xs text-ink-secondary pt-2 border-t border-surface-border">
              {language === 'ar' ? 'دينار أردني واحد بموجب المادة (10).' : '1 JOD pursuant to Article 10 of Bylaws.'}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-surface-border shadow-subtle hover:border-primary-300 transition-all space-y-2">
            <span className="text-xs font-semibold text-ink-muted block">
              {language === 'ar' ? 'الحد الأدنى للاكتتاب' : 'Minimum Subscription'}
            </span>
            <div className="text-3xl font-bold text-primary-800">
              500 <span className="text-sm font-normal text-ink-secondary">{t.calcSharesUnit}</span>
            </div>
            <p className="text-xs text-ink-secondary pt-2 border-t border-surface-border">
              {language === 'ar' ? 'بحد أدنى 500 (خمسمائة) سهم.' : 'Minimum of 500 shares (500 JOD).'}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-surface-border shadow-subtle hover:border-primary-300 transition-all space-y-2">
            <span className="text-xs font-semibold text-ink-muted block">
              {language === 'ar' ? 'الحد الأعلى للاكتتاب' : 'Maximum Subscription'}
            </span>
            <div className="text-3xl font-bold text-primary-800">
              40,000 <span className="text-sm font-normal text-ink-secondary">{t.calcSharesUnit}</span>
            </div>
            <p className="text-xs text-ink-secondary pt-2 border-t border-surface-border">
              {language === 'ar' ? 'وحد أعلى 40,000 (أربعون ألف) سهم.' : 'Maximum of 40,000 shares (40,000 JOD).'}
            </p>
          </div>
        </div>

        {/* =========================================================================
            PAYMENT FLEXIBILITY & DEDICATED BOARDS DISTINCTION
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Easy Payment Option */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-surface-border shadow-card space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-50 text-accent-700 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-accent-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary-950">
                  {language === 'ar' ? 'إمكانية الدفع بالتقسيط' : 'Installment Payment Option'}
                </h3>
              </div>
            </div>

            <p className="text-sm text-ink-secondary leading-relaxed">
              {language === 'ar'
                ? 'تتيح التعاونية إمكانية سداد دفعة أولى بمقدار خُمس المبلغ وتقسيط الباقي على 24 شهراً وفق الضوابط المعتمدة:'
                : 'Members may pay a 20% downpayment with the remaining balance spread over 24 equal monthly installments:'}
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              <div className="p-3.5 bg-surface-alt rounded-xl border border-surface-border flex items-center justify-between">
                <span className="font-semibold text-primary-900">
                  {language === 'ar' ? 'الدفعة الأولى:' : 'Initial Downpayment:'}
                </span>
                <span className="font-bold text-accent-700">
                  {language === 'ar' ? 'خُمس المبلغ (20%)' : 'One-fifth (20%)'}
                </span>
              </div>
              <div className="p-3.5 bg-surface-alt rounded-xl border border-surface-border flex items-center justify-between">
                <span className="font-semibold text-primary-900">
                  {language === 'ar' ? 'تقسيط الباقي:' : 'Remaining Balance:'}
                </span>
                <span className="font-bold text-primary-700">
                  {language === 'ar' ? 'على 24 شهراً' : 'Over 24 months'}
                </span>
              </div>
            </div>
          </div>

          {/* General vs Dedicated Subscription Distinction */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-surface-border shadow-card space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-primary-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary-950">
                  {language === 'ar' ? 'أقسام الاكتتاب في المشاريع' : 'Project Subscription Categories'}
                </h3>
              </div>
            </div>

            <p className="text-sm text-ink-secondary leading-relaxed">
              {language === 'ar' ? 'تنقسم مشاريع التعاونية إلى فئتين رئيسيتين للاكتتاب:' : 'Cooperative projects are structured into two principal subscription categories:'}
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              <div className="p-3.5 bg-surface-alt rounded-xl border border-surface-border">
                <span className="font-bold text-primary-900 block mb-1">
                  {language === 'ar' ? '«هناك مشاريع ضمن الاكتتاب العام»' : 'General Subscription Projects'}
                </span>
                <span className="text-xs text-ink-secondary">
                  {language === 'ar' ? 'مشاريع متاحة لجميع أعضاء التعاونية للمساهمة المباشرة.' : 'Initiatives open to all members for general participation.'}
                </span>
              </div>
              <div className="p-3.5 bg-surface-alt rounded-xl border border-surface-border">
                <span className="font-bold text-primary-900 block mb-1">
                  {language === 'ar' ? '«وهناك مشاريع ضمن اكتتاب خاص بمجلس إدارة خاص تحت مظلة التعاونية»' : 'Dedicated Projects with Dedicated Management Boards'}
                </span>
                <span className="text-xs text-ink-secondary">
                  {language === 'ar' ? 'مشاريع نوعية كبرى تدار تحت مظلة التعاونية بمجالس إدارة نوعية.' : 'Specialized ventures operating under the cooperative umbrella.'}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            INTERACTIVE SHARE CALCULATOR COMPONENT
           ========================================================================= */}
        <div>
          <ShareCalculator />
        </div>

        {/* =========================================================================
            MEMBERSHIP PROVISIONS
           ========================================================================= */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-950">
              {t.membershipProvisionsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-ink-secondary">
              {language === 'ar' ? 'خلاصة الشروط والضوابط المعتمدة لانتساب الأعضاء والاكتتاب في الأسهم' : 'Summary of approved statutory terms for membership and share subscription'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipProvisions.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-surface-border shadow-subtle flex flex-col justify-between relative"
              >
                <div className="space-y-3">
                  <span className="text-3xl font-bold font-mono text-accent-500/80 block">
                    {step.num}
                  </span>
                  <h3 className="text-base font-bold text-primary-950">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            PRIMARY INQUIRY CALL TO ACTION (WHATSAPP + PHONE)
           ========================================================================= */}
        <div className="bg-gradient-to-br from-primary-900 to-primary-950 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-floating">
          <h2 className="text-2xl sm:text-3xl font-bold">
            {t.membershipWhatsAppPrompt}
          </h2>
          <p className="text-sm sm:text-base text-primary-100 max-w-2xl mx-auto leading-relaxed">
            {t.coopQuote}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={encodedWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-accent-500 text-primary-950 hover:bg-accent-400 transition-colors shadow-subtle text-base flex items-center justify-center gap-2.5"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{t.membershipWhatsAppButton}</span>
              <ArrowIcon className="w-4 h-4" />
            </a>

            <a
              href={COOPERATIVE_INFO.phoneTelLink}
              className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-colors text-base flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-accent-300" />
              <span dir="ltr">+962 79 033 5694</span>
            </a>
          </div>

          <div className="pt-4 border-t border-primary-800/60 text-xs text-primary-300/70 max-w-xl mx-auto flex items-center justify-center gap-2">
            <BadgeAlert className="w-4 h-4 shrink-0 text-accent-400" />
            <span>
              {language === 'ar'
                ? 'جميع المعلومات أعلاه مستندة إلى النظام الأساسي والوثائق الرسمية المعتمدة لتعاونية عمّتا.'
                : 'All the above provisions are grounded in the statutory Bylaws and official records of Ammata Cooperative.'}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
