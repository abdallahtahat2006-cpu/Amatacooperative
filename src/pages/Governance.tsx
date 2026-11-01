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

const execIconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Lightbulb,
  Share2,
  Target,
  Award
};

export const Governance: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 tracking-tight">
            الهيكل التنظيمي
          </h1>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            يستند الهيكل الإداري للتعاونية إلى الأبواب الرابع والسادس من نظامها الأساسي، ويقوم على ثلاث هيئات رئيسية تتكامل أدوارها في إدارة الشأن التعاوني ومراقبته.
          </p>
        </div>

        {/* =========================================================================
            HIERARCHY VISUAL FLOW
           ========================================================================= */}
        <section className="bg-surface-alt rounded-3xl border border-surface-border p-6 sm:p-10 lg:p-12 shadow-subtle space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-primary-950">
              الهيئات الرئيسية في التعاونية
            </h2>
            <p className="text-xs sm:text-sm text-ink-secondary">
              وفقاً للنظام الأساسي والهيكل الإداري المعتمد للتعاونية
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Level 1: General Assembly */}
            <div className="bg-gradient-to-r from-primary-900 to-primary-950 text-white rounded-2xl p-6 sm:p-8 text-center shadow-card border border-primary-800">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-accent-300 border border-white/15 mb-3">
                المادة (28) من النظام الأساسي
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">الهيئة العامة</h3>
              <p className="text-sm sm:text-base text-primary-100 max-w-2xl mx-auto leading-relaxed">
                السلطة العليا في التعاونية، تضم الأعضاء المؤسسين والمنتسبين، وتشرف على أعمالها وتنتخب لجنتي الإدارة والمراقبة (المادة 28).
              </p>
              
              <div className="mt-4 pt-4 border-t border-primary-800/80 flex flex-wrap items-center justify-center gap-4 text-xs text-accent-300 font-medium">
                <span className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  (المادة 28/ج): لكل عضو صوت واحد بغض النظر عن عدد أسهمه
                </span>
                <span className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  تُتخذ قرارات الهيئة العامة بأكثرية أصوات الأعضاء الحاضرين
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
                    المادة (30)
                  </span>
                  <span className="text-xs font-semibold text-accent-700 bg-accent-50 px-2.5 py-0.5 rounded-full">
                    5 أعضاء
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-primary-950 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-700" />
                  <span>لجنة الإدارة</span>
                </h4>
                
                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                  تتولى إدارة شؤون التعاونية اليومية، وتتألف من خمسة أعضاء منتخبين بالاقتراع السري لمدة أربع سنوات (المادة 30).
                </p>

                <div className="text-xs font-medium text-primary-800 bg-primary-50/70 p-3 rounded-xl border border-primary-200">
                  (المادة 30/ح): تُشكّل لجنة الإدارة نصابها القانوني بأكثرية أعضائها.
                </div>
              </div>

              {/* Oversight Committee Box */}
              <div className="md:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border-2 border-accent-300 shadow-card space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-accent-100 text-accent-800">
                    المادة (35)
                  </span>
                  <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-2.5 py-0.5 rounded-full">
                    3 أعضاء
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-primary-950 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-accent-600" />
                  <span>لجنة المراقبة</span>
                </h4>
                
                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                  تتولى الرقابة على أعمال لجنة الإدارة ومتابعة تنفيذ قرارات الهيئة العامة (المادة 35).
                </p>

                <div className="text-xs font-medium text-accent-900 bg-accent-50/70 p-3 rounded-xl border border-accent-200">
                  تنتخبها الهيئة العامة وفق أحكام النظام الأساسي.
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
                المادة (30/د) من النظام الأساسي
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-primary-950">
                اللجان التنفيذية
              </h4>
              <p className="text-xs sm:text-sm text-ink-secondary max-w-2xl mx-auto">
                تُشكّل هذه اللجان بقرار من لجنة الإدارة استناداً إلى المادة (30/د) من النظام الأساسي، وتضم أعضاء من الهيئة العامة لتفعيل مشاركتهم وتوزيع العمل بحسب التخصص. جميع اللجان استشارية توصي ولا تُلزم، وتُرفع مخرجاتها للجنة الإدارة.
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================================
            ADMINISTRATION COMMITTEE MEMBERS (PDF PAGE 3)
           ========================================================================= */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-surface-border">
            <div>
              <h2 className="text-2xl font-bold text-primary-950">
                لجنة الإدارة
              </h2>
            </div>
            <span className="text-xs text-ink-secondary bg-surface-alt px-3 py-1.5 rounded-lg border border-surface-border self-start sm:self-auto">
              5 أعضاء
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ADMINISTRATION_COMMITTEE.map((member, idx) => (
              <div
                key={idx}
                className="bg-surface-alt rounded-2xl p-5 border border-surface-border hover:border-primary-300 transition-all flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-700 text-white flex items-center justify-center font-bold text-base shrink-0 shadow-subtle">
                  {member.name.slice(0, 2)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-primary-950">
                    {member.name}
                  </h3>
                  <span className="inline-block mt-0.5 px-2.5 py-0.5 rounded text-xs font-semibold bg-white text-primary-800 border border-primary-200">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            OVERSIGHT COMMITTEE MEMBERS (PDF PAGE 3)
           ========================================================================= */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-surface-border">
            <div>
              <h2 className="text-2xl font-bold text-primary-950">
                لجنة المراقبة
              </h2>
            </div>
            <span className="text-xs text-ink-secondary bg-surface-alt px-3 py-1.5 rounded-lg border border-surface-border self-start sm:self-auto">
              3 أعضاء
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {OVERSIGHT_COMMITTEE.map((member, idx) => (
              <div
                key={idx}
                className="bg-surface-alt rounded-2xl p-5 border border-surface-border hover:border-accent-300 transition-all flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-600 text-white flex items-center justify-center font-bold text-base shrink-0 shadow-subtle">
                  {member.name.slice(0, 2)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-primary-950">
                    {member.name}
                  </h3>
                  <span className="inline-block mt-0.5 px-2.5 py-0.5 rounded text-xs font-semibold bg-white text-accent-800 border border-accent-200">
                    {member.role}
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
            أسس اتخاذ القرار (المادتان 28/ج، 30/ح)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-primary-900">
            <div className="bg-white p-4 rounded-xl border border-primary-200">
              <span className="font-bold block mb-1">الهيئة العامة (المادة 28/ج):</span>
              <p>لكل عضو صوت واحد بغض النظر عن عدد أسهمه، وتُتخذ قرارات الهيئة العامة بأكثرية أصوات الأعضاء الحاضرين.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-primary-200">
              <span className="font-bold block mb-1">لجنة الإدارة (المادة 30/ح):</span>
              <p>تُشكّل لجنة الإدارة نصابها القانوني بأكثرية أعضائها.</p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            EXECUTIVE COMMITTEES (5 اللجان التنفيذية)
           ========================================================================= */}
        <section className="space-y-8">
          <div className="pb-4 border-b border-surface-border">
            <h2 className="text-2xl font-bold text-primary-950">
              اللجان التنفيذية
            </h2>
            <p className="text-sm text-ink-secondary mt-1 max-w-3xl">
              تُشكّل هذه اللجان بقرار من لجنة الإدارة استناداً إلى المادة (30/د) من النظام الأساسي، وتضم أعضاء من الهيئة العامة لتفعيل مشاركتهم وتوزيع العمل بحسب التخصص. جميع اللجان استشارية توصي ولا تُلزم، وتُرفع مخرجاتها للجنة الإدارة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXECUTIVE_COMMITTEES.map((comm: ExecutiveCommittee) => {
              const IconComp = execIconMap[comm.iconName] || Briefcase;
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
                      {comm.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      {comm.roleDescription}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-surface-border/60">
                      <span className="block text-xs font-bold text-primary-800">
                        المهام:
                      </span>
                      <ul className="space-y-1.5 text-xs text-ink-secondary">
                        {comm.keyResponsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-1.5">
                            <span className="text-accent-500 font-bold">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-surface-border text-[11px] text-ink-muted flex items-center justify-between">
                    <span>جميع اللجان استشارية توصي ولا تُلزم</span>
                    <span className="text-primary-700 font-medium">المادة (30/د)</span>
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
            <span>المرجعية:</span>
          </div>
          <p>
            تستند جميع البيانات والأسماء واللجان الواردة في هذه الصفحة إلى الأبواب الرابع والسادس من النظام الأساسي والوثائق الرسمية لتعاونية عمّتا.
          </p>
        </div>

      </div>
    </div>
  );
};
