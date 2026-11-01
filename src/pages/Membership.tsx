import React from 'react';
import {
  Users,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Phone,
  ShieldCheck,
  ArrowLeft,
  BadgeAlert
} from 'lucide-react';
import { COOPERATIVE_INFO } from '../data/cooperativeData';
import { ShareCalculator } from '../components/ShareCalculator';

export const Membership: React.FC = () => {
  const encodedWhatsapp = `https://wa.me/${COOPERATIVE_INFO.whatsappNumber}?text=${encodeURIComponent(
    COOPERATIVE_INFO.whatsappPrefilledMessage
  )}`;

  const membershipProvisions = [
    {
      num: '01',
      title: 'شروط الأهلية (المادة 3)',
      desc: 'باب الانتساب للتعاونية مفتوح لكل أردني أتم الثامنة عشرة من عمره ويتمتع بالأهلية القانونية، دون تمييز سياسي أو ديني أو عنصري، وفق الشروط المحددة في النظام الأساسي.'
    },
    {
      num: '02',
      title: 'رسوم الانتساب',
      desc: 'رسوم الانتساب: 25 دينار أردني غير مستردة تسدد عند تقديم طلب الانتساب.'
    },
    {
      num: '03',
      title: 'حدود الاكتتاب في الأسهم',
      desc: 'قيمة السهم الواحد دينار واحد بحد أدنى 500 (خمسمائة) سهم وحد أعلى 40000 (أربعون ألف) سهم (المادة 10).'
    },
    {
      num: '04',
      title: 'خيار الدفعة الأولى والتقسيط',
      desc: 'إمكانية دفعة أولى خمس المبلغ والباقي يقسط على 24 شهر، وفقاً للنظام الأساسي.'
    }
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 tracking-tight">
            العضوية والانتساب
          </h1>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            الشروط والأحكام الخاصة بالانتساب والاكتتاب المنصوص عليها في النظام الأساسي للتعاونية.
          </p>
        </div>

        {/* =========================================================================
            ELIGIBILITY CONDITIONS CARD (المادة 3)
           ========================================================================= */}
        <div className="bg-white rounded-3xl border border-surface-border p-8 sm:p-10 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-950">
                شروط الانتساب للتعاونية
              </h2>

              <p className="text-base text-ink-secondary leading-relaxed bg-surface-alt p-5 rounded-2xl border border-surface-border font-medium">
                «{COOPERATIVE_INFO.membershipEligibility}»
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-ink-secondary">
                <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-surface-border shadow-subtle">
                  <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0" />
                  <span>الجنسية الأردنية</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-surface-border shadow-subtle">
                  <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0" />
                  <span>إتمام 18 سنة من العمر</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-surface-border shadow-subtle">
                  <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0" />
                  <span>التمتع بالأهلية القانونية</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-gradient-to-br from-primary-900 to-primary-950 text-white rounded-2xl p-6 sm:p-7 space-y-4 text-center">
              <ShieldCheck className="w-10 h-10 text-accent-400 mx-auto" />
              <h3 className="text-lg font-bold">قاعدة اتخاذ القرار</h3>
              <p className="text-xs text-primary-100/90 leading-relaxed">
                «لكل عضو صوت واحد بغض النظر عن عدد أسهمه، وتُتخذ قرارات الهيئة العامة بأكثرية أصوات الأعضاء الحاضرين.»
              </p>
              <div className="pt-2">
                <span className="inline-block text-xs text-accent-300 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                  المادة (28/ج) من النظام الأساسي
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
            <span className="text-xs font-semibold text-ink-muted block">رسوم الانتساب</span>
            <div className="text-3xl font-bold text-primary-800">
              25 <span className="text-sm font-normal text-ink-secondary">دينار أردني</span>
            </div>
            <p className="text-xs text-ink-secondary pt-2 border-t border-surface-border">
              تسدد لمرة واحدة عند تقديم طلب الانتساب.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-surface-border shadow-subtle hover:border-primary-300 transition-all space-y-2">
            <span className="text-xs font-semibold text-ink-muted block">قيمة السهم الواحد</span>
            <div className="text-3xl font-bold text-primary-800">
              1 <span className="text-sm font-normal text-ink-secondary">دينار واحد</span>
            </div>
            <p className="text-xs text-ink-secondary pt-2 border-t border-surface-border">
              دينار أردني واحد بموجب المادة (10) من النظام الأساسي.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-surface-border shadow-subtle hover:border-primary-300 transition-all space-y-2">
            <span className="text-xs font-semibold text-ink-muted block">الحد الأدنى للاكتتاب</span>
            <div className="text-3xl font-bold text-primary-800">
              500 <span className="text-sm font-normal text-ink-secondary">سهم (خمسمائة)</span>
            </div>
            <p className="text-xs text-ink-secondary pt-2 border-t border-surface-border">
              بحد أدنى 500 (خمسمائة) سهم.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-surface-border shadow-subtle hover:border-primary-300 transition-all space-y-2">
            <span className="text-xs font-semibold text-ink-muted block">الحد الأعلى للاكتتاب</span>
            <div className="text-3xl font-bold text-primary-800">
              40,000 <span className="text-sm font-normal text-ink-secondary">سهم (أربعون ألف)</span>
            </div>
            <p className="text-xs text-ink-secondary pt-2 border-t border-surface-border">
              وحد أعلى 40000 (أربعون ألف) سهم.
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
                  إمكانية الدفع بالتقسيط
                </h3>
              </div>
            </div>

            <p className="text-sm text-ink-secondary leading-relaxed">
              تتيح التعاونية إمكانية سداد دفعة أولى بمقدار خُمس المبلغ وتقسيط الباقي على 24 شهراً وفق الضوابط المعتمدة:
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              <div className="p-3.5 bg-surface-alt rounded-xl border border-surface-border flex items-center justify-between">
                <span className="font-semibold text-primary-900">الدفعة الأولى:</span>
                <span className="font-bold text-accent-700">خُمس المبلغ</span>
              </div>
              <div className="p-3.5 bg-surface-alt rounded-xl border border-surface-border flex items-center justify-between">
                <span className="font-semibold text-primary-900">تقسيط الباقي:</span>
                <span className="font-bold text-primary-700">على 24 شهراً</span>
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
                  أقسام الاكتتاب في المشاريع
                </h3>
              </div>
            </div>

            <p className="text-sm text-ink-secondary leading-relaxed">
              تنقسم مشاريع التعاونية إلى فئتين رئيسيتين للاكتتاب:
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              <div className="p-3.5 bg-surface-alt rounded-xl border border-surface-border">
                <span className="font-bold text-primary-900 block mb-1">«هناك مشاريع ضمن الاكتتاب العام»</span>
              </div>
              <div className="p-3.5 bg-surface-alt rounded-xl border border-surface-border">
                <span className="font-bold text-primary-900 block mb-1">«وهناك مشاريع ضمن اكتتاب خاص بمجلس إدارة خاص تحت مظلة التعاونية»</span>
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
              أحكام الانتساب والاكتتاب
            </h2>
            <p className="text-xs sm:text-sm text-ink-secondary">
              خلاصة الشروط والضوابط المعتمدة لانتساب الأعضاء والاكتتاب في الأسهم
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
            للاستفسار عن الانتساب
          </h2>
          <p className="text-sm sm:text-base text-primary-100 max-w-2xl mx-auto leading-relaxed">
            «نرحّب بانتساب كل من يشاركنا غايات النظام الأساسي ورؤية خطة الربع الرابع 2026»
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={encodedWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-accent-500 text-primary-950 hover:bg-accent-400 transition-colors shadow-subtle text-base flex items-center justify-center gap-2.5"
            >
              <MessageSquare className="w-5 h-5" />
              <span>مراسلة عبر واتساب للاستفسار</span>
              <ArrowLeft className="w-4 h-4" />
            </a>

            <a
              href={COOPERATIVE_INFO.phoneTelLink}
              className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-colors text-base flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-accent-300" />
              <span dir="ltr">{COOPERATIVE_INFO.phoneDisplay}</span>
            </a>
          </div>

          <div className="pt-4 border-t border-primary-800/60 text-xs text-primary-300/70 max-w-xl mx-auto flex items-center justify-center gap-2">
            <BadgeAlert className="w-4 h-4 shrink-0 text-accent-400" />
            <span>
              جميع المعلومات أعلاه مستندة إلى النظام الأساسي والوثائق الرسمية المعتمدة لتعاونية عمّتا.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
