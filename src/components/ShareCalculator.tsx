import React, { useState } from 'react';
import { Calculator, MessageSquare, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COOPERATIVE_INFO } from '../data/cooperativeData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const ShareCalculator: React.FC = () => {
  const [shares, setShares] = useState<number>(1000);
  const { language, isRTL } = useLanguage();
  const t = translations[language];
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const shareValue = 1; // 1 JOD per share
  const totalShareCost = shares * shareValue;
  const initialDownpayment = totalShareCost * 0.2; // 1/5th
  const remainingAmount = totalShareCost - initialDownpayment;
  const monthlyInstallment = remainingAmount / 24; // over 24 months
  const entranceFee = COOPERATIVE_INFO.membershipFeeJOD;

  const presets = [500, 1000, 2500, 5000, 10000, 40000];

  const locale = isRTL ? 'ar-JO' : 'en-US';

  const customWhatsAppText = language === 'ar'
    ? `السلام عليكم، أود الاستفسار عن شروط الاكتتاب بعدد (${shares.toLocaleString('ar-JO')} سهم) بقيمة إجمالية (${totalShareCost.toLocaleString('ar-JO')} دينار) وفق النظام الأساسي لتعاونية عمتا.`
    : `Hello, I would like to inquire about subscribing to (${shares.toLocaleString('en-US')} shares) with a total value of (${totalShareCost.toLocaleString('en-US')} JOD) under Ammata Cooperative Bylaws.`;

  return (
    <div className="bg-white rounded-2xl border border-surface-border shadow-card p-6 sm:p-8 lg:p-10">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-surface-border">
        <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
          <Calculator className="w-5 h-5 text-accent-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary-950">
            {t.calcTitle}
          </h3>
          <p className="text-xs sm:text-sm text-ink-secondary">
            {t.calcSubtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="share-range" className="text-sm font-semibold text-primary-900">
                {t.calcSharesCountLabel}
              </label>
              <span className="text-lg font-bold text-primary-700">
                {shares.toLocaleString(locale)} {t.calcSharesUnit}
              </span>
            </div>

            <input
              id="share-range"
              type="range"
              min={COOPERATIVE_INFO.minShares}
              max={COOPERATIVE_INFO.maxShares}
              step={100}
              value={shares}
              onChange={(e) => setShares(Number(e.target.value))}
              className="w-full h-2.5 bg-primary-100 rounded-lg appearance-none cursor-pointer accent-primary-700"
            />

            <div className="flex justify-between text-xs text-ink-muted mt-1.5">
              <span>{t.calcMinLabel}</span>
              <span>{t.calcMaxLabel}</span>
            </div>
          </div>

          {/* Quick Preset Buttons */}
          <div>
            <span className="block text-xs font-semibold text-ink-secondary mb-2">
              {t.calcQuickPresets}
            </span>
            <div className="flex flex-wrap gap-2">
              {presets.map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => setShares(count)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    shares === count
                      ? 'bg-primary-700 text-white font-bold shadow-subtle'
                      : 'bg-surface-alt text-ink-primary hover:bg-primary-50 hover:text-primary-800 border border-surface-border'
                  }`}
                >
                  {count.toLocaleString(locale)} {t.calcSharesUnit}
                </button>
              ))}
            </div>
          </div>

          {/* Rules & Notes from Profile */}
          <div className="bg-surface-alt rounded-xl p-4 border border-surface-border text-xs text-ink-secondary space-y-2">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
              <span>
                {language === 'ar'
                  ? 'قيمة السهم الواحد: 1 دينار أردني (المادة 10).'
                  : 'Nominal share value: 1 JOD per share (Article 10).'}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
              <span>
                {language === 'ar'
                  ? 'رسوم الانتساب لمرة واحدة: 25 دينار أردني (المادة 11).'
                  : 'One-time application fee: 25 JOD (Article 11).'}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
              <span>
                {language === 'ar'
                  ? 'إمكانية دفعة أولى خمس المبلغ والباقي يقسط على 24 شهراً.'
                  : 'Option of 20% downpayment with remaining balance payable over 24 months.'}
              </span>
            </div>
          </div>
        </div>

        {/* Results Calculation Column */}
        <div className="lg:col-span-6 bg-gradient-to-br from-primary-900 to-primary-950 text-white rounded-2xl p-6 sm:p-7 shadow-card">
          <span className="block text-xs font-semibold text-accent-400 uppercase tracking-wider mb-1">
            {t.calcSummaryTitle}
          </span>
          <div className="text-3xl font-bold text-white mb-6">
            {totalShareCost.toLocaleString(locale)} <span className="text-base font-normal text-primary-200">{t.calcCurrency}</span>
          </div>

          <div className="space-y-3.5 border-t border-primary-800/80 pt-4 text-sm">
            <div className="flex justify-between items-center text-primary-100">
              <span>{t.calcEstimatedCost}</span>
              <span className="font-bold text-white">{totalShareCost.toLocaleString(locale)} {t.calcCurrency}</span>
            </div>

            <div className="flex justify-between items-center text-primary-100">
              <span>{t.calcDownpayment}</span>
              <span className="font-bold text-white">{initialDownpayment.toLocaleString(locale)} {t.calcCurrency}</span>
            </div>

            <div className="flex justify-between items-center text-primary-200 text-xs">
              <span>{language === 'ar' ? 'المبلغ المتبقي بالتقسيط:' : 'Remaining Balance:'}</span>
              <span>{remainingAmount.toLocaleString(locale)} {t.calcCurrency}</span>
            </div>

            <div className="flex justify-between items-center text-primary-200 text-xs">
              <span>{t.calcMonthlyInstallment}</span>
              <span className="font-bold text-accent-300">
                {monthlyInstallment.toFixed(2)} {t.calcCurrency} / {language === 'ar' ? 'شهرياً' : 'mo'}
              </span>
            </div>

            <div className="flex justify-between items-center text-primary-100 pt-2 border-t border-primary-800/60 text-xs">
              <span>{t.calcEntranceFee}</span>
              <span className="font-bold text-white">{entranceFee} {t.calcCurrency}</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-primary-800/80">
            <a
              href={`https://wa.me/${COOPERATIVE_INFO.whatsappNumber}?text=${encodeURIComponent(customWhatsAppText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl font-bold bg-accent-500 text-primary-950 hover:bg-accent-400 transition-colors flex items-center justify-center gap-2 text-sm shadow-subtle"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.calcInquireWhatsApp}</span>
              <ArrowIcon className="w-4 h-4" />
            </a>
            <span className="block text-[11px] text-center text-primary-200 mt-2 leading-relaxed">
              {language === 'ar'
                ? '* هذا العرض ناتج حسابي تقريبي مستند إلى أحكام النظام الأساسي المعتمد، للتوضيح فقط ولا يشكّل التزاماً تعاقدياً.'
                : '* This estimate is based on the statutory Bylaws for illustrative purposes and does not constitute a contractual commitment.'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
