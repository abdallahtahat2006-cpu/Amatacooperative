import React from 'react';
import {
  Shield,
  Eye,
  Briefcase,
  GraduationCap,
  Lightbulb,
  Share2,
  Target,
  Award,
  FileText
} from 'lucide-react';
import {
  ADMINISTRATION_COMMITTEE,
  OVERSIGHT_COMMITTEE,
  EXECUTIVE_COMMITTEES,
} from '../data/cooperativeData';
import type { ExecutiveCommittee } from '../data/cooperativeData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const execIconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Lightbulb,
  Share2,
  Target,
  Award
};

export const Governance: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 tracking-tight">
            {t.governancePageTitle}
          </h1>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            {t.governancePageSubtitle}
          </p>
        </div>

        {/* =========================================================================
            HIERARCHY VISUAL FLOW
           ========================================================================= */}
        <section className="bg-surface-alt rounded-3xl border border-surface-border p-6 sm:p-10 lg:p-12 shadow-subtle space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-primary-950">
              {t.govBodiesTitle}
            </h2>
            <p className="text-xs sm:text-sm text-ink-secondary">
              {t.govBodiesSubtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Level 1: General Assembly */}
            <div className="bg-gradient-to-r from-primary-900 to-primary-950 text-white rounded-2xl p-6 sm:p-8 text-center shadow-card border border-primary-800">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-accent-300 border border-white/15 mb-3">
                {language === 'ar' ? 'المادة (28) من النظام الأساسي' : 'Article 28 of the Bylaws'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">{t.govGeneralAssemblyTitle}</h3>
              <p className="text-sm sm:text-base text-primary-100 max-w-2xl mx-auto leading-relaxed">
                {t.govGeneralAssemblyDesc}
              </p>
              
              <div className="mt-4 pt-4 border-t border-primary-800/80 flex flex-wrap items-center justify-center gap-4 text-xs text-accent-300 font-medium">
                <span className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  {t.govOneVoteRule}
                </span>
                <span className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  {t.govMajorityRule}
                </span>
              </div>
            </div>

            {/* Connecting Lines */}
            <div className="flex justify-center items-center gap-20 sm:gap-40 text-primary-400">
              <div className="w-0.5 h-8 bg-accent-500" />
              <div className="w-0.5 h-8 bg-accent-500" />
            </div>

            {/* Level 2: Two Elective Committees */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Administration Committee Box */}
              <div className="md:col-span-7 bg-white rounded-2xl p-6 sm:p-7 border-2 border-primary-300 shadow-card space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-primary-100 text-primary-800">
                    {language === 'ar' ? 'المادة (30)' : 'Article 30'}
                  </span>
                  <span className="text-xs font-semibold text-accent-700 bg-accent-50 px-2.5 py-0.5 rounded-full">
                    {t.govManagementMembersCount}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-primary-950 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-700" />
                  <span>{t.govManagementTitle}</span>
                </h4>
                
                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                  {t.govManagementDesc}
                </p>

                <div className="text-xs font-medium text-primary-800 bg-primary-50/70 p-3 rounded-xl border border-primary-200">
                  {language === 'ar'
                    ? '(المادة 30/ح): تُشكّل لجنة الإدارة نصابها القانوني بأكثرية أعضائها.'
                    : '(Article 30/h): The quorum of the Management Committee is constituted by the majority of its members.'}
                </div>
              </div>

              {/* Oversight Committee Box */}
              <div className="md:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border-2 border-accent-300 shadow-card space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-accent-100 text-accent-800">
                    {language === 'ar' ? 'المادة (35)' : 'Article 35'}
                  </span>
                  <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-2.5 py-0.5 rounded-full">
                    {t.govSupervisoryMembersCount}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-primary-950 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-accent-600" />
                  <span>{t.govSupervisoryTitle}</span>
                </h4>
                
                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                  {t.govSupervisoryDesc}
                </p>

                <div className="text-xs font-medium text-accent-900 bg-accent-50/70 p-3 rounded-xl border border-accent-200">
                  {language === 'ar'
                    ? 'تنتخبها الهيئة العامة وفق أحكام النظام الأساسي.'
                    : 'Elected by the General Assembly in accordance with the Bylaws.'}
                </div>
              </div>

            </div>

            {/* Connecting Visual */}
            <div className="flex justify-center">
              <div className="w-0.5 h-8 bg-accent-500" />
            </div>

            {/* Level 3: Executive Committees */}
            <div className="bg-white rounded-2xl p-6 border border-surface-border shadow-card text-center space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-50 text-primary-700 inline-block">
                {language === 'ar' ? 'المادة (30/د) من النظام الأساسي' : 'Article 30(d) of the Bylaws'}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-primary-950">
                {t.govExecTitle}
              </h4>
              <p className="text-xs sm:text-sm text-ink-secondary max-w-2xl mx-auto">
                {t.govExecSubtitle}. {t.govExecNotice}
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================================
            ADMINISTRATION COMMITTEE MEMBERS (PDF PAGE 5)
           ========================================================================= */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-surface-border">
            <div>
              <h2 className="text-2xl font-bold text-primary-950">
                {t.govManagementTitle}
              </h2>
            </div>
            <span className="text-xs text-ink-secondary bg-surface-alt px-3 py-1.5 rounded-lg border border-surface-border self-start sm:self-auto">
              {t.govManagementMembersCount}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ADMINISTRATION_COMMITTEE.map((member, idx) => (
              <div
                key={idx}
                className="bg-surface-alt rounded-2xl p-5 border border-surface-border hover:border-primary-300 transition-all flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-700 text-white flex items-center justify-center font-bold text-sm sm:text-base shrink-0 shadow-subtle">
                  {language === 'ar' ? member.name.slice(0, 2) : member.nameEn.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-primary-950">
                    {language === 'ar' ? member.name : member.nameEn}
                  </h3>
                  <span className="inline-block mt-0.5 px-2.5 py-0.5 rounded text-xs font-semibold bg-white text-primary-800 border border-primary-200">
                    {language === 'ar' ? member.role : member.roleEn}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            OVERSIGHT COMMITTEE MEMBERS (PDF PAGE 5)
           ========================================================================= */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-surface-border">
            <div>
              <h2 className="text-2xl font-bold text-primary-950">
                {t.govSupervisoryTitle}
              </h2>
            </div>
            <span className="text-xs text-ink-secondary bg-surface-alt px-3 py-1.5 rounded-lg border border-surface-border self-start sm:self-auto">
              {t.govSupervisoryMembersCount}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {OVERSIGHT_COMMITTEE.map((member, idx) => (
              <div
                key={idx}
                className="bg-surface-alt rounded-2xl p-5 border border-surface-border hover:border-accent-300 transition-all flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-600 text-white flex items-center justify-center font-bold text-sm sm:text-base shrink-0 shadow-subtle">
                  {language === 'ar' ? member.name.slice(0, 2) : member.nameEn.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-primary-950">
                    {language === 'ar' ? member.name : member.nameEn}
                  </h3>
                  <span className="inline-block mt-0.5 px-2.5 py-0.5 rounded text-xs font-semibold bg-white text-accent-800 border border-accent-200">
                    {language === 'ar' ? member.role : member.roleEn}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            DECISION-MAKING PRINCIPLES
           ========================================================================= */}
        <section className="bg-primary-50 rounded-2xl p-6 sm:p-8 border border-primary-200 space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-primary-950">
            {language === 'ar' ? 'أسس اتخاذ القرار (المادتان 28/ج، 30/ح)' : 'Decision-Making Principles (Articles 28/c & 30/h)'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-primary-900">
            <div className="bg-white p-4 rounded-xl border border-primary-200">
              <span className="font-bold block mb-1">
                {language === 'ar' ? 'الهيئة العامة (المادة 28/ج):' : 'General Assembly (Article 28/c):'}
              </span>
              <p>
                {language === 'ar'
                  ? 'لكل عضو صوت واحد بغض النظر عن عدد أسهمه، وتُتخذ قرارات الهيئة العامة بأكثرية أصوات الأعضاء الحاضرين.'
                  : 'Each member holds one vote regardless of the number of shares held, and General Assembly resolutions are adopted by the majority of members present.'}
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-primary-200">
              <span className="font-bold block mb-1">
                {language === 'ar' ? 'لجنة الإدارة (المادة 30/ح):' : 'Management Committee (Article 30/h):'}
              </span>
              <p>
                {language === 'ar'
                  ? 'تُشكّل لجنة الإدارة نصابها القانوني بأكثرية أعضائها.'
                  : 'The legal quorum of the Management Committee is formed by the majority of its members.'}
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            EXECUTIVE COMMITTEES (PDF PAGE 6)
           ========================================================================= */}
        <section className="space-y-8">
          <div className="pb-4 border-b border-surface-border">
            <h2 className="text-2xl font-bold text-primary-950">
              {t.govExecTitle}
            </h2>
            <p className="text-sm text-ink-secondary mt-1 max-w-3xl">
              {t.govExecSubtitle}. {t.govExecNotice}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXECUTIVE_COMMITTEES.map((comm: ExecutiveCommittee) => {
              const IconComp = execIconMap[comm.iconName] || Briefcase;
              const responsibilities = language === 'ar' ? comm.keyResponsibilities : comm.keyResponsibilitiesEn;

              return (
                <div
                  key={comm.id}
                  className="bg-white rounded-2xl p-6 border border-surface-border hover:border-primary-300 hover:shadow-card transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center">
                        <IconComp className="w-5 h-5 text-accent-600" />
                      </div>
                      <span className="text-xs font-bold text-ink-muted bg-surface-alt px-2.5 py-1 rounded-md border border-surface-border">
                        {comm.id}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-primary-950">
                      {language === 'ar' ? comm.name : comm.nameEn}
                    </h3>

                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      {language === 'ar' ? comm.roleDescription : comm.roleDescriptionEn}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-surface-border/60">
                      <span className="block text-xs font-bold text-primary-800">
                        {t.govKeyTasks}
                      </span>
                      <ul className="space-y-1.5 text-xs text-ink-secondary">
                        {responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-1.5">
                            <span className="text-accent-500 font-bold">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-surface-border text-[11px] text-ink-muted flex items-center justify-between">
                    <span>{language === 'ar' ? 'جميع اللجان استشارية توصي ولا تُلزم' : 'Advisory / Non-binding recommendations'}</span>
                    <span className="text-primary-700 font-medium">{language === 'ar' ? comm.articleRef : comm.articleRefEn}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Statutory Governance Note */}
        <div className="bg-surface-alt rounded-2xl p-6 sm:p-8 border border-surface-border text-xs sm:text-sm text-ink-secondary space-y-2">
          <div className="flex items-center gap-2 text-primary-950 font-bold">
            <FileText className="w-4 h-4 text-accent-600" />
            <span>{t.articleLabel}</span>
          </div>
          <p>
            {language === 'ar'
              ? 'تستند جميع البيانات والأسماء واللجان الواردة في هذه الصفحة إلى الأبواب الرابع والسادس من النظام الأساسي والوثائق الرسمية لتعاونية عمّتا.'
              : 'All governance bodies, names, and committee mandates presented on this page are grounded in Chapters Four and Six of the official Bylaws of Ammata Cooperative.'}
          </p>
        </div>

      </div>
    </div>
  );
};
