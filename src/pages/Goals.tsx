import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowLeft } from 'lucide-react';
import { OFFICIAL_GOALS, GOAL_CATEGORIES } from '../data/cooperativeData';
import type { GoalItem } from '../data/cooperativeData';

export const Goals: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredGoals = OFFICIAL_GOALS.filter((goal: GoalItem) => {
    const matchesCategory = selectedCategory === 'all' || goal.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      goal.officialText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      goal.shortTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      goal.id.toString() === searchQuery.trim();
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 tracking-tight">
            غاياتنا
          </h1>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            نصّ الباب الثاني من النظام الأساسي على غايات التعاونية في تنمية روح التعاون بين أعضائها، وتحسين أحوالهم الاجتماعية والاقتصادية والثقافية وتضافر الجهود في تحقيق هذه الغايات، من خلال الأوجه التالية (المادتان 7–8):
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-surface-border shadow-subtle space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="ابحث في نصوص الغايات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-surface-border focus:border-accent-500 focus:ring-1 focus:ring-accent-500 text-sm bg-surface-alt"
              />
              <Search className="w-4 h-4 text-ink-muted absolute left-3 top-3.5" />
            </div>

            {/* Results counter */}
            <div className="text-xs font-semibold text-primary-700 bg-primary-50 px-3 py-2 rounded-lg self-start md:self-auto">
              عدد الغايات المعروضة: {filteredGoals.length} من أصل 14 غاية معتمدة
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-surface-border">
            {GOAL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-primary-700 text-white font-bold shadow-subtle'
                    : 'bg-surface-alt text-ink-secondary hover:bg-primary-50 hover:text-primary-800 border border-surface-border'
                }`}
              >
                {cat.titleAr}
              </button>
            ))}
          </div>
        </div>

        {/* Goals List / Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {filteredGoals.map((goal) => (
            <div
              key={goal.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-surface-border hover:border-primary-300 hover:shadow-card transition-all space-y-3.5"
            >
              <div className="flex items-center">
                <span className="inline-block px-3 py-1 rounded-lg text-xs sm:text-sm font-bold bg-surface-alt text-primary-800 border border-surface-border">
                  الغاية ({goal.id})
                </span>
              </div>

              <p className="font-semibold text-primary-950 text-base sm:text-[17px] leading-relaxed text-justify">
                {goal.officialText}
              </p>
            </div>
          ))}
        </div>

        {filteredGoals.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center border border-surface-border max-w-md mx-auto">
            <p className="text-ink-secondary text-sm">
              لا توجد غايات مطابقة لكلمة البحث الحالية. يرجى تجربة كلمات أخرى أو استعراض جميع الغايات.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-primary-700 text-white"
            >
              إعادة ضبط البحث
            </button>
          </div>
        )}

        {/* Legal Context Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-surface-border shadow-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-base sm:text-lg font-bold text-primary-950">
              المرجعية النظامية للغايات
            </h3>
            <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
              تستند هذه الغايات الـ 14 إلى الباب الثاني من النظام الأساسي لتعاونية عمّتا (المادتان 7–8).
            </p>
          </div>
          <div className="shrink-0">
            <Link
              to="/membership"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold bg-primary-700 text-white hover:bg-primary-800 transition-colors text-sm shadow-subtle"
            >
              <span>شروط الانتساب والاكتتاب</span>
              <ArrowLeft className="w-4 h-4 text-accent-300" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
