import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Building2,
  GraduationCap,
  Zap,
  HeartHandshake,
  Compass,
  Phone,
  MessageSquare,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Award,
  Mail
} from 'lucide-react';
import { COOPERATIVE_INFO } from '../data/cooperativeData';

export const Home: React.FC = () => {
  const corePillars = [
    {
      title: 'دعم مشاريع الأعضاء وتأسيس الشركات',
      desc: 'تشجيع ودعم مشاريع الأعضاء المهنية والصناعية والتعليمية وغيرها بتقديم الخبرة والسعي لتوفير التمويل، وإنشاء الشركات والمؤسسات والمشاريع المشتركة وتملك الأموال المنقولة وغير المنقولة.',
      icon: Building2,
      tag: 'الغايات (1، 2، 8)'
    },
    {
      title: 'مكافحة البطالة والتدريب والتشغيل',
      desc: 'مكافحة البطالة وربط الأعضاء بفرص التدريب والتشغيل وحصر الاحتياجات التدريبية والتنسيق مع مراكز التدريب المهني.',
      icon: GraduationCap,
      tag: 'الغاية (11) ولجنة التدريب'
    },
    {
      title: 'صندوق التعليم والخدمات الاجتماعية والعون المادي',
      desc: 'تأسيس صندوق للتعليم والخدمات الاجتماعية والطوارئ لمنفعة الأعضاء، وتقديم العون المادي للمحتاجين والمساهمة في أعمال البر.',
      icon: HeartHandshake,
      tag: 'الغايتان (10، 11)'
    },
    {
      title: 'الطاقة المتجددة وتوفير السلع والمواد التموينية',
      desc: 'إنشاء المشاريع وعقد الاتفاقيات المتعلقة بالطاقة المتجددة، وتأسيس وإدارة المحلات التجارية والمخازن، وإنتاج وتصنيع واستيراد وتزويد الأعضاء بالسلع والمواد الغذائية بأسعار معقولة.',
      icon: Zap,
      tag: 'الغايات (3، 5، 6، 7)'
    }
  ];

  return (
    <div className="space-y-0">
      {/* =========================================================================
          SECTION A: HERO SECTION (Factual, Institutional, Slogan-Free)
         ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/60 via-white to-surface-alt pt-8 sm:pt-14 pb-12 sm:pb-20 border-b border-surface-border w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-w-0">
            
            {/* Right Column: Editorial Copy */}
            <div className="lg:col-span-7 space-y-5 text-right min-w-0">
              {/* Main Headline - Strict Official Name & Type */}
              <div className="space-y-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-bold text-primary-950 leading-[1.25] tracking-tight">
                  {COOPERATIVE_INFO.shortName}
                </h1>
                <p className="text-xl sm:text-2xl font-bold text-accent-700">
                  {COOPERATIVE_INFO.typeSubtitle}
                </p>
              </div>

              {/* Supporting Text strictly from PDF Page 2 */}
              <p className="text-base sm:text-lg text-ink-secondary leading-relaxed max-w-2xl font-normal">
                جمعية تعاونية أردنية متعددة الأغراض محدودة المسؤولية، تتخذ من محافظة البلقاء عنواناً لها، ومركزها البلاونة، وتمتد منطقة عملها لتشمل محافظة البلقاء مع حق فتح فروع لها في جميع أنحاء المملكة.
              </p>

              {/* Action Buttons: Side-by-side on mobile and desktop */}
              <div className="pt-2 grid grid-cols-2 sm:flex sm:flex-row sm:items-center gap-2 sm:gap-3 max-w-lg sm:max-w-none">
                <Link
                  to="/about"
                  className="px-2.5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold bg-primary-700 text-white hover:bg-primary-800 transition-all shadow-subtle hover:shadow-card flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base text-center leading-snug focus:ring-2 focus:ring-primary-700 active:scale-[0.98]"
                >
                  <span>عن التعاونية وبيانات التسجيل</span>
                  <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-300 shrink-0" />
                </Link>

                <Link
                  to="/membership"
                  className="px-2.5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold bg-white text-primary-800 hover:bg-surface-alt border border-primary-200/90 transition-all flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base text-center leading-snug shadow-subtle focus:ring-2 focus:ring-accent-500 active:scale-[0.98]"
                >
                  <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-600 shrink-0" />
                  <span>شروط الانتساب والاكتتاب</span>
                </Link>
              </div>

              {/* Legal Foundation Tag */}
              <p className="text-xs text-ink-muted flex items-center gap-1.5 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-600 shrink-0" />
                <span>تأسست وفق أحكام قانون التعاون الأردني ونظامها الداخلي المعتمد.</span>
              </p>
            </div>

            {/* Left Column: Official Institutional Identity Showcase */}
            <div className="lg:col-span-5 min-w-0 relative">
              {/* Subtle ambient blur glow behind card */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-accent-500/15 via-primary-600/10 to-primary-900/10 rounded-3xl blur-xl -z-10 transform -rotate-1 pointer-events-none" />

              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-[410px] bg-gradient-to-br from-[#0c2a33] via-primary-950 to-[#081d24] text-white rounded-2xl border border-white/10 shadow-xl p-4 sm:p-5 overflow-hidden">
                {/* Background decorative watermark */}
                <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-accent-500/10 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-primary-700/20 blur-3xl pointer-events-none" />

                {/* Central Brand Showcase Card */}
                <div className="mb-3 p-3.5 sm:p-4 bg-gradient-to-b from-white to-surface-alt rounded-xl border border-white/80 shadow-md text-center relative overflow-hidden group">
                  <div className="flex items-center justify-center py-1">
                    <img
                      src="/assets/logo_clean.png"
                      alt={COOPERATIVE_INFO.shortName}
                      className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2 pt-2 border-t border-surface-border flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-accent-600" />
                    <span className="text-[11px] sm:text-xs font-bold text-primary-950">
                      {COOPERATIVE_INFO.name}
                    </span>
                  </div>
                </div>

                {/* 3 Pillar Stats / Badges */}
                <div className="grid grid-cols-3 gap-2 my-3">
                  <div className="bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-2 sm:p-2.5 border border-white/10 text-center">
                    <span className="block text-lg sm:text-xl font-bold font-mono text-accent-400">14</span>
                    <span className="block text-[10px] sm:text-[11px] font-semibold text-white mt-0.5">غاية معتمدة</span>
                    <span className="block text-[9px] sm:text-[10px] text-primary-300/70 mt-0.5">بالنظام الأساسي</span>
                  </div>

                  <div className="bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-2 sm:p-2.5 border border-white/10 text-center">
                    <span className="block text-lg sm:text-xl font-bold font-mono text-accent-400">5</span>
                    <span className="block text-[10px] sm:text-[11px] font-semibold text-white mt-0.5">لجان تنفيذية</span>
                    <span className="block text-[9px] sm:text-[10px] text-primary-300/70 mt-0.5">تغطي مجالات العمل</span>
                  </div>

                  <div className="bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-2 sm:p-2.5 border border-white/10 text-center">
                    <span className="block text-lg sm:text-xl font-bold font-mono text-accent-400">1</span>
                    <span className="block text-[10px] sm:text-[11px] font-semibold text-white mt-0.5">صوت لكل عضو</span>
                    <span className="block text-[9px] sm:text-[10px] text-primary-300/70 mt-0.5">ديمقراطية القرار</span>
                  </div>
                </div>

                {/* Institutional Credentials Strip */}
                <div className="pt-2.5 border-t border-white/10 space-y-1.5 text-[11px] text-primary-200">
                  <div className="flex items-center justify-between">
                    <span className="text-primary-300/80">المركز الرئيسي:</span>
                    <span className="font-bold text-white flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-accent-400" />
                      <span>{COOPERATIVE_INFO.center} — {COOPERATIVE_INFO.governorate}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-300/80">نطاق العمل:</span>
                    <span className="font-semibold text-accent-200">{COOPERATIVE_INFO.workArea}</span>
                  </div>
                </div>

              </div>

              {/* Floating Institutional Badge overlapping bottom */}
              <div className="mt-2.5 bg-white/95 backdrop-blur-sm rounded-xl p-2.5 border border-surface-border shadow-card flex items-center justify-between gap-2.5 text-xs max-w-sm sm:max-w-md lg:max-w-[410px] mx-auto">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
                    <Award className="w-3.5 h-3.5 text-accent-600" />
                  </div>
                  <div>
                    <span className="block font-bold text-primary-950 text-xs">تأسست بموجب قانون التعاون</span>
                    <span className="block text-[10px] sm:text-[11px] text-ink-secondary">منظمة أهلية ذات شخصية اعتبارية مستقلة</span>
                  </div>
                </div>
                <Link
                  to="/about"
                  className="shrink-0 text-[10px] sm:text-[11px] font-bold text-primary-700 hover:text-accent-600 flex items-center gap-1 bg-surface-alt px-2.5 py-1.5 rounded-lg border border-surface-border transition-colors"
                >
                  <span>التفاصيل</span>
                  <ArrowLeft className="w-3 h-3" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION B: CONCISE INSTITUTIONAL INTRODUCTION (Factual)
         ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-4 text-right">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-950 leading-snug">
                من نحن — تعاونية عمّتا
              </h2>
              <p className="text-base sm:text-lg text-ink-primary leading-relaxed">
                {COOPERATIVE_INFO.aboutSummary}
              </p>
              <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                {COOPERATIVE_INFO.legalStatus}
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary-700 hover:text-accent-600 transition-colors"
                >
                  <span>اطّلع على بيانات التسجيل والهوية الكاملة</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Quick Facts Band from PDF Page 1 */}
            <div className="lg:col-span-5 bg-surface-alt rounded-2xl p-6 sm:p-7 border border-surface-border space-y-3.5">
              <h3 className="text-sm font-bold text-primary-900 border-b border-surface-border pb-2">
                بيانات التسجيل الأساسية
              </h3>
              
              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between items-center py-1 border-b border-surface-border/50">
                  <span className="text-ink-secondary">اسم التعاونية:</span>
                  <span className="font-bold text-primary-950 text-left" dir="rtl">{COOPERATIVE_INFO.name}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-surface-border/50">
                  <span className="text-ink-secondary">العنوان:</span>
                  <span className="font-semibold text-primary-950">{COOPERATIVE_INFO.governorate}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-surface-border/50">
                  <span className="text-ink-secondary">مركز التعاونية:</span>
                  <span className="font-bold text-primary-950">{COOPERATIVE_INFO.center}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-surface-border/50">
                  <span className="text-ink-secondary">منطقة العمل:</span>
                  <span className="font-semibold text-primary-950 text-left" dir="rtl">{COOPERATIVE_INFO.workArea}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-surface-border/50">
                  <span className="text-ink-secondary">نوعها:</span>
                  <span className="font-semibold text-primary-950">{COOPERATIVE_INFO.type}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-ink-secondary">رأس مال التعاونية:</span>
                  <span className="font-semibold text-primary-800 text-left text-xs" dir="rtl">{COOPERATIVE_INFO.capitalDescription}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION C: FOCUSED GOALS PREVIEW
         ========================================================================= */}
      <section className="py-14 sm:py-20 bg-surface-alt border-y border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-950 leading-snug">
              غاياتنا ومجالات عملنا
            </h2>
            <p className="text-base text-ink-secondary leading-relaxed">
              نصّ الباب الثاني من النظام الأساسي على غايات التعاونية في تنمية روح التعاون بين أعضائها، وتحسين أحوالهم الاجتماعية والاقتصادية والثقافية وتضافر الجهود في تحقيق هذه الغايات من خلال الأوجه الـ 14 المنصوص عليها.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {corePillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-surface-border hover:border-primary-300 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-accent-600" />
                      </div>
                      <span className="text-xs font-semibold text-ink-muted bg-surface-alt px-2.5 py-0.5 rounded-full border border-surface-border">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-primary-950">
                      {item.title}
                    </h3>

                    <p className="text-sm text-ink-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/goals"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-primary-700 text-white hover:bg-primary-800 transition-colors shadow-subtle text-sm"
            >
              <span>استعرض كافة الغايات الرسمية الـ 14 كاملة بالنص المعتمد</span>
              <ArrowLeft className="w-4 h-4 text-accent-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION D: RESTRAINED GOVERNANCE PREVIEW
         ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-950">
              الهيكل التنظيمي
            </h2>
            <p className="text-sm sm:text-base text-ink-secondary">
              يستند الهيكل الإداري للتعاونية إلى الأبواب الرابع والسادس من نظامها الأساسي، ويقوم على ثلاث هيئات رئيسية تتكامل أدوارها في إدارة الشأن التعاوني ومراقبته.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* General Assembly */}
            <div className="bg-surface-alt rounded-2xl p-6 border border-surface-border space-y-3">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-primary-800">الهيئة العامة</span>
                <span className="text-ink-muted">المادة (28)</span>
              </div>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                السلطة العليا في التعاونية، تضم الأعضاء المؤسسين والمنتسبين، وتشرف على أعمالها وتنتخب لجنتي الإدارة والمراقبة.
              </p>
              <div className="text-xs text-primary-700 font-semibold pt-1">
                لكل عضو صوت واحد بغض النظر عن عدد أسهمه (المادة 28/ج)
              </div>
            </div>

            {/* Admin & Oversight Committees */}
            <div className="bg-surface-alt rounded-2xl p-6 border border-surface-border space-y-3">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-primary-800">لجنة الإدارة ولجنة المراقبة</span>
                <span className="text-ink-muted">المادتان (30، 35)</span>
              </div>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                لجنة الإدارة: خمسة أعضاء منتخبين بالاقتراع السري لمدة أربع سنوات. لجنة المراقبة: تتولى الرقابة على أعمال لجنة الإدارة ومتابعة تنفيذ قرارات الهيئة العامة.
              </p>
              <div className="text-xs text-primary-700 font-semibold pt-1">
                انتخاب باقتراع سري
              </div>
            </div>

            {/* Executive Committees */}
            <div className="bg-surface-alt rounded-2xl p-6 border border-surface-border space-y-3">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-primary-800">اللجان التنفيذية</span>
                <span className="text-ink-muted">المادة (30/د)</span>
              </div>
              <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                تُشكّل بقرار من لجنة الإدارة وتضم أعضاء من الهيئة العامة. جميع اللجان استشارية توصي ولا تُلزم، وتُرفع مخرجاتها للجنة الإدارة.
              </p>
              <div className="text-xs text-primary-700 font-semibold pt-1">
                5 لجان متخصصة منصوص عليها
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/governance"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-700 hover:text-accent-600 transition-colors"
            >
              <span>عرض تفاصيل الهيكل التنظيمي وأسماء الأعضاء واختصاصات اللجان</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION E: MEMBERSHIP CALL TO ACTION (From PDF Page 1 & 4)
         ========================================================================= */}
      <section className="py-14 sm:py-18 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              الانتساب والعضوية
            </h2>

            <p className="text-sm sm:text-base text-primary-100/90 leading-relaxed max-w-2xl mx-auto">
              «{COOPERATIVE_INFO.membershipEligibility}»
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                to="/membership"
                className="w-full sm:w-auto px-7 py-3 rounded-xl font-bold bg-accent-500 text-primary-950 hover:bg-accent-400 transition-colors text-sm sm:text-base shadow-subtle flex items-center justify-center gap-2"
              >
                <span>شروط الانتساب والاكتتاب</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>

              <a
                href={`https://wa.me/${COOPERATIVE_INFO.whatsappNumber}?text=${encodeURIComponent(COOPERATIVE_INFO.whatsappPrefilledMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-colors text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-accent-300" />
                <span>محادثة واتساب للاستفسار</span>
              </a>
            </div>

            <p className="text-xs text-primary-200/80 pt-2">
              نرحّب بانتساب كل من يشاركنا غايات النظام الأساسي ورؤية خطة الربع الرابع 2026.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION F: COMPACT CONTACT PREVIEW (From PDF Page 4)
         ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-2 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-primary-950">
              تواصل معنا
            </h2>
            <p className="text-xs sm:text-sm text-ink-secondary">
              بيانات الاتصال والعنوان الرسمية المعتمدة للتعاونية
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {/* Center */}
            <div className="p-4 rounded-xl bg-surface-alt border border-surface-border text-center space-y-1">
              <MapPin className="w-5 h-5 text-accent-600 mx-auto" />
              <span className="block text-xs text-ink-muted">المقر والمركز</span>
              <span className="block font-bold text-primary-950 text-sm">{COOPERATIVE_INFO.center}</span>
            </div>

            {/* Direct Phone */}
            <a
              href={COOPERATIVE_INFO.phoneTelLink}
              className="p-4 rounded-xl bg-surface-alt hover:bg-primary-50 border border-surface-border text-center space-y-1 transition-colors"
            >
              <Phone className="w-5 h-5 text-primary-700 mx-auto" />
              <span className="block text-xs text-ink-muted">الهاتف</span>
              <span dir="ltr" className="block font-bold font-mono text-primary-900 text-sm">{COOPERATIVE_INFO.phoneDisplay}</span>
            </a>

            {/* Email */}
            <a
              href={COOPERATIVE_INFO.emailMailto}
              className="p-4 rounded-xl bg-surface-alt hover:bg-sky-50 border border-surface-border text-center space-y-1 transition-colors"
            >
              <Mail className="w-5 h-5 text-sky-600 mx-auto" />
              <span className="block text-xs text-ink-muted">البريد الإلكتروني</span>
              <span dir="ltr" className="block font-bold font-mono text-primary-900 text-xs sm:text-sm break-all">{COOPERATIVE_INFO.email}</span>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${COOPERATIVE_INFO.whatsappNumber}?text=${encodeURIComponent(COOPERATIVE_INFO.whatsappPrefilledMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-surface-alt hover:bg-emerald-50 border border-surface-border text-center space-y-1 transition-colors"
            >
              <MessageSquare className="w-5 h-5 text-emerald-600 mx-auto" />
              <span className="block text-xs text-ink-muted">المراسلة الفورية</span>
              <span className="block font-bold text-emerald-700 text-sm">محادثة واتساب</span>
            </a>
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/contact"
              className="text-xs sm:text-sm font-bold text-primary-700 hover:text-accent-600 inline-flex items-center gap-1"
            >
              <span>صفحة التواصل الكاملة</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
