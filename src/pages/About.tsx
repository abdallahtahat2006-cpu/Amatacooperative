import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ArrowLeft,
  ArrowRight,
  Users,
  Compass,
  CheckCircle2,
  GraduationCap
} from 'lucide-react';
import { COOPERATIVE_INFO } from '../data/cooperativeData';
import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const About: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const identityDetails = [
    {
      label: language === 'ar' ? 'اسم التعاونية' : 'Cooperative Name',
      value: language === 'ar' ? COOPERATIVE_INFO.name : COOPERATIVE_INFO.nameEn,
      highlight: true
    },
    {
      label: language === 'ar' ? 'العنوان' : 'Governorate',
      value: language === 'ar' ? COOPERATIVE_INFO.governorate : COOPERATIVE_INFO.governorateEn
    },
    {
      label: language === 'ar' ? 'مركز التعاونية' : 'Headquarters',
      value: language === 'ar' ? COOPERATIVE_INFO.center : COOPERATIVE_INFO.centerEn,
      highlight: true
    },
    {
      label: language === 'ar' ? 'منطقة العمل' : 'Area of Operation',
      value: language === 'ar' ? COOPERATIVE_INFO.workArea : COOPERATIVE_INFO.workAreaEn
    },
    {
      label: language === 'ar' ? 'نوعها' : 'Cooperative Type',
      value: language === 'ar' ? COOPERATIVE_INFO.type : COOPERATIVE_INFO.typeEn
    },
    {
      label: language === 'ar' ? 'رأس مال التعاونية' : 'Share Capital',
      value: language === 'ar' ? COOPERATIVE_INFO.capitalDescription : COOPERATIVE_INFO.capitalDescriptionEn,
      highlight: true
    },
  ];

  const statutoryPurposes = [
    {
      title: language === 'ar' ? 'تنمية روح التعاون وتضافر الجهود' : 'Fostering Cooperation & Pooling Efforts',
      desc: language === 'ar'
        ? 'نصّ الباب الثاني من النظام الأساسي على تنمية روح التعاون بين أعضائها وتضافر الجهود في تحقيق هذه الغايات.'
        : 'Fostering the spirit of cooperation among its members and pooling efforts to achieve cooperative objectives under Chapter Two of the Bylaws.',
      icon: Users,
    },
    {
      title: language === 'ar' ? 'تحسين الأحوال الاجتماعية والاقتصادية والثقافية' : 'Improving Social, Economic & Cultural Conditions',
      desc: language === 'ar'
        ? 'العمل على تحسين أحوال الأعضاء الاجتماعية والاقتصادية والثقافية وفق أحكام النظام الأساسي.'
        : 'Dedicated work toward uplifting the social, economic, and cultural well-being of members in accordance with statutory provisions.',
      icon: GraduationCap,
    },
    {
      title: language === 'ar' ? 'دعم مشاريع الأعضاء والمشاريع المشتركة' : 'Supporting Member Projects & Joint Ventures',
      desc: language === 'ar'
        ? 'تشجيع ودعم مشاريع الأعضاء المهنية والصناعية والتعليمية وغيرها بتقديم الخبرة والسعي لتوفير التمويل والخدمات، وتأسيس الشركات والمشاريع المشتركة.'
        : 'Encouraging and supporting members\' professional, industrial, and educational projects with expertise, funding access, and joint ventures.',
      icon: Building2,
    },
    {
      title: language === 'ar' ? 'صندوق التعليم ومكافحة البطالة والتكافل' : 'Education Fund, Employment & Community Solidarity',
      desc: language === 'ar'
        ? 'تأسيس صندوق للتعليم والخدمات الاجتماعية والطوارئ، ومكافحة البطالة وتقديم العون المادي للمحتاجين والمساهمة في أعمال البر.'
        : 'Establishing a dedicated fund for education, social services, and emergencies, combating unemployment, and aiding those in need.',
      icon: Compass,
    },
  ];

  const bylawsProvisions = [
    language === 'ar'
      ? 'تأسست وفق أحكام قانون التعاون الأردني ونظامها الداخلي المعتمد.'
      : 'Established under the Jordanian Cooperatives Law and its approved internal regulations.',
    language === 'ar'
      ? 'منظمة أهلية يديرها أشخاص منتخبون أو معينون، وفقاً للمبادئ والتشريعات التعاونية المعمول بها في المملكة.'
      : 'A civil-society organization managed by elected or appointed persons in accordance with cooperative principles and legislation.',
    language === 'ar'
      ? 'صفة الشخصية الاعتبارية الاعتيادية، بما يخوّلها امتلاك الأموال المنقولة وغير المنقولة.'
      : 'Holds legal personality, entitling it to own movable and immovable property in pursuit of its aims and objectives.',
    language === 'ar'
      ? 'لكل عضو صوت واحد بغض النظر عن عدد أسهمه، وتُتخذ قرارات الهيئة العامة بأكثرية أصوات الأعضاء الحاضرين (المادة 28/ج).'
      : 'Each member holds one vote regardless of the number of shares held, with decisions passed by majority vote (Article 28/c).',
    language === 'ar'
      ? 'لجنة الإدارة: خمسة أعضاء منتخبين بالاقتراع السري لمدة أربع سنوات (المادة 30).'
      : 'Management Committee: five members elected by secret ballot for a four-year term (Article 30).',
    language === 'ar'
      ? 'لجنة المراقبة: تتولى الرقابة على أعمال لجنة الإدارة ومتابعة تنفيذ قرارات الهيئة العامة (المادة 35).'
      : 'Supervisory Committee: oversees the work of the Management Committee and monitors resolution execution (Article 35).',
  ];

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 tracking-tight">
            {t.aboutPageTitle}
          </h1>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            {language === 'ar' ? COOPERATIVE_INFO.typeSubtitle : COOPERATIVE_INFO.typeSubtitleEn} — {language === 'ar' ? COOPERATIVE_INFO.center : COOPERATIVE_INFO.centerEn}
          </p>
        </div>

        {/* =========================================================================
            OFFICIAL IDENTITY GRID
           ========================================================================= */}
        <section className="bg-surface-alt rounded-3xl border border-surface-border p-6 sm:p-10 shadow-subtle">
          <div className="mb-8 pb-6 border-b border-surface-border">
            <h2 className="text-xl sm:text-2xl font-bold text-primary-950">
              {t.aboutRegistrationTitle}
            </h2>
            <p className="text-sm text-ink-secondary mt-1">
              {t.aboutRegistrationSub}
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
            WHO WE ARE - Legal Profile
           ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-5 text-start">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-950 leading-snug">
              {t.aboutWhoWeAre}
            </h2>

            <div className="text-ink-primary text-base leading-relaxed space-y-4">
              <p className="font-normal text-justify">
                {language === 'ar' ? COOPERATIVE_INFO.aboutSummary : COOPERATIVE_INFO.aboutSummaryEn}
              </p>
              <p className="font-normal text-justify">
                {language === 'ar' ? COOPERATIVE_INFO.legalStatus : COOPERATIVE_INFO.legalStatusEn}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/governance"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold bg-primary-700 text-white hover:bg-primary-800 transition-colors text-sm shadow-subtle"
              >
                <span>{t.aboutCommitteesButton}</span>
                <ArrowIcon className="w-4 h-4 text-accent-300" />
              </Link>
              <Link
                to="/goals"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold bg-surface-alt text-primary-800 hover:bg-primary-50 border border-primary-200 transition-colors text-sm"
              >
                <span>{t.aboutExploreGoalsButton}</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-primary-900 text-white rounded-3xl p-6 sm:p-8 space-y-5">
            <h3 className="text-lg font-bold text-white border-b border-primary-800 pb-3">
              {t.aboutBylawsProvisionsTitle}
            </h3>

            <ul className="space-y-3.5 text-xs sm:text-sm text-primary-100">
              {bylawsProvisions.map((provision, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                  <span>{provision}</span>
                </li>
              ))}
            </ul>

            <div className="p-3.5 bg-white/10 rounded-xl text-xs text-primary-200 leading-relaxed">
              {t.aboutBylawsRef}
            </div>
          </div>
        </section>

        {/* =========================================================================
            STATUTORY PURPOSES
           ========================================================================= */}
        <section className="pt-4">
          <SectionHeading
            title={t.aboutPurposesTitle}
            subtitle={t.aboutPurposesSubtitle}
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
          <h3 className="text-xl sm:text-2xl font-bold">{t.aboutMembershipPromptTitle}</h3>
          <p className="text-primary-100 text-sm sm:text-base max-w-2xl mx-auto">
            «{language === 'ar' ? COOPERATIVE_INFO.membershipEligibility : COOPERATIVE_INFO.membershipEligibilityEn}»
          </p>
          <div className="pt-2">
            <Link
              to="/membership"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold bg-accent-500 text-primary-950 hover:bg-accent-400 transition-colors text-sm shadow-subtle"
            >
              <span>{t.aboutMembershipPromptButton}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
