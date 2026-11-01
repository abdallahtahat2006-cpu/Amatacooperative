import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ArrowLeft,
  Users,
  Compass,
  CheckCircle2,
  GraduationCap
} from 'lucide-react';
import { COOPERATIVE_INFO } from '../data/cooperativeData';
import { SectionHeading } from '../components/SectionHeading';

export const About: React.FC = () => {
  const identityDetails = [
    { label: 'اسم التعاونية', value: COOPERATIVE_INFO.name, highlight: true },
    { label: 'العنوان', value: COOPERATIVE_INFO.governorate },
    { label: 'مركز التعاونية', value: COOPERATIVE_INFO.center, highlight: true },
    { label: 'منطقة العمل', value: COOPERATIVE_INFO.workArea },
    { label: 'نوعها', value: COOPERATIVE_INFO.type },
    { label: 'رأس مال التعاونية', value: COOPERATIVE_INFO.capitalDescription, highlight: true },
  ];

  const statutoryPurposes = [
    {
      title: 'تنمية روح التعاون وتضافر الجهود',
      desc: 'نصّ الباب الثاني من النظام الأساسي على تنمية روح التعاون بين أعضائها وتضافر الجهود في تحقيق هذه الغايات.',
      icon: Users,
    },
    {
      title: 'تحسين الأحوال الاجتماعية والاقتصادية والثقافية',
      desc: 'العمل على تحسين أحوال الأعضاء الاجتماعية والاقتصادية والثقافية وفق أحكام النظام الأساسي.',
      icon: GraduationCap,
    },
    {
      title: 'دعم مشاريع الأعضاء والمشاريع المشتركة',
      desc: 'تشجيع ودعم مشاريع الأعضاء المهنية والصناعية والتعليمية وغيرها بتقديم الخبرة والسعي لتوفير التمويل والخدمات، وتأسيس الشركات والمشاريع المشتركة.',
      icon: Building2,
    },
    {
      title: 'صندوق التعليم ومكافحة البطالة والتكافل',
      desc: 'تأسيس صندوق للتعليم والخدمات الاجتماعية والطوارئ، ومكافحة البطالة وتقديم العون المادي للمحتاجين والمساهمة في أعمال البر.',
      icon: Compass,
    },
  ];

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 tracking-tight">
            عن تعاونية عمّتا
          </h1>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            {COOPERATIVE_INFO.typeSubtitle} — {COOPERATIVE_INFO.center}
          </p>
        </div>

        {/* =========================================================================
            OFFICIAL IDENTITY GRID (PDF PAGE 1)
           ========================================================================= */}
        <section className="bg-surface-alt rounded-3xl border border-surface-border p-6 sm:p-10 shadow-subtle">
          <div className="mb-8 pb-6 border-b border-surface-border">
            <h2 className="text-xl sm:text-2xl font-bold text-primary-950">
              بيانات التسجيل الأساسية
            </h2>
            <p className="text-sm text-ink-secondary mt-1">
              البيانات الرسمية المعتمدة لتعاونية عمّتا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {identityDetails.map((item, index) => (
              <div
                key={index}
                className={`p-5 rounded-2xl border transition-all ${
                  item.highlight
                    ? 'bg-white border-primary-300 shadow-sm'
                    : 'bg-white/80 border-surface-border'
                }`}
              >
                <span className="block text-xs font-semibold text-ink-secondary mb-1.5">
                  {item.label}
                </span>
                <span className="block text-base sm:text-lg font-bold text-primary-950 leading-snug">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            WHO WE ARE - Legal Profile (PDF PAGE 2)
           ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-5 text-right">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-950 leading-snug">
              من نحن
            </h2>

            <div className="text-ink-primary text-base leading-relaxed space-y-4">
              <p className="font-normal text-justify">
                {COOPERATIVE_INFO.aboutSummary}
              </p>
              <p className="font-normal text-justify">
                {COOPERATIVE_INFO.legalStatus}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/governance"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold bg-primary-700 text-white hover:bg-primary-800 transition-colors text-sm shadow-subtle"
              >
                <span>الهيكل التنظيمي واللجان</span>
                <ArrowLeft className="w-4 h-4 text-accent-300" />
              </Link>
              <Link
                to="/goals"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold bg-surface-alt text-primary-800 hover:bg-primary-50 border border-primary-200 transition-colors text-sm"
              >
                <span>استعراض الغايات الـ 14</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-primary-900 text-white rounded-3xl p-6 sm:p-8 space-y-5">
            <h3 className="text-lg font-bold text-white border-b border-primary-800 pb-3">
              نصوص وأحكام النظام الأساسي
            </h3>

            <ul className="space-y-3.5 text-xs sm:text-sm text-primary-100">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                <span>تأسست وفق أحكام قانون التعاون الأردني ونظامها الداخلي المعتمد.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                <span>منظمة أهلية يديرها أشخاص منتخبون أو معينون، وفقاً للمبادئ والتشريعات التعاونية المعمول بها في المملكة.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                <span>صفة الشخصية الاعتبارية الاعتيادية، بما يخوّلها امتلاك الأموال المنقولة وغير المنقولة.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                <span>لكل عضو صوت واحد بغض النظر عن عدد أسهمه، وتُتخذ قرارات الهيئة العامة بأكثرية أصوات الأعضاء الحاضرين (المادة 28/ج).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                <span>لجنة الإدارة: خمسة أعضاء منتخبين بالاقتراع السري لمدة أربع سنوات (المادة 30).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                <span>لجنة المراقبة: تتولى الرقابة على أعمال لجنة الإدارة ومتابعة تنفيذ قرارات الهيئة العامة (المادة 35).</span>
              </li>
            </ul>

            <div className="p-3.5 bg-white/10 rounded-xl text-xs text-primary-200 leading-relaxed">
              المرجعية: أحكام النظام الأساسي المعتمد لتعاونية عمّتا.
            </div>
          </div>
        </section>

        {/* =========================================================================
            STATUTORY PURPOSES (الباب الثاني - المادتان 7-8)
           ========================================================================= */}
        <section className="pt-4">
          <SectionHeading
            title="غايات التعاونية"
            subtitle="نصّ الباب الثاني من النظام الأساسي على غايات التعاونية في تنمية روح التعاون بين أعضائها، وتحسين أحوالهم الاجتماعية والاقتصادية والثقافية وتضافر الجهود في تحقيق هذه الغايات."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statutoryPurposes.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-surface-alt rounded-2xl p-6 border border-surface-border hover:border-primary-300 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-primary-700 border border-surface-border flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent-600" />
                    </div>
                    <h3 className="text-base font-bold text-primary-950">
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
        </section>

        {/* Membership Prompt */}
        <div className="bg-primary-900 text-white rounded-3xl p-8 text-center space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold">باب الانتساب للتعاونية</h3>
          <p className="text-primary-100 text-sm sm:text-base max-w-2xl mx-auto">
            «{COOPERATIVE_INFO.membershipEligibility}»
          </p>
          <div className="pt-2">
            <Link
              to="/membership"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold bg-accent-500 text-primary-950 hover:bg-accent-400 transition-colors text-sm shadow-subtle"
            >
              <span>الاطلاع على شروط الانتساب والاكتتاب</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
