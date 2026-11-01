import React, { useState } from 'react';
import { Calculator, MessageSquare, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { COOPERATIVE_INFO } from '../data/cooperativeData';

export const ShareCalculator: React.FC = () => {
  const [shares, setShares] = useState<number>(1000);

  const shareValue = 1; // 1 JOD per share
  const totalShareCost = shares * shareValue;
  const initialDownpayment = totalShareCost * 0.2; // 1/5th
  const remainingAmount = totalShareCost - initialDownpayment;
  const monthlyInstallment = remainingAmount / 24; // over 24 months
  const entranceFee = COOPERATIVE_INFO.membershipFeeJOD;

  const presets = [500, 1000, 2500, 5000, 10000, 40000];

  const customWhatsAppText = `السلام عليكم، أود الاستفسار عن شروط الاكتتاب بعدد (${shares.toLocaleString('ar-JO')} سهم) بقيمة إجمالية (${totalShareCost.toLocaleString('ar-JO')} دينار) وفق النظام الأساسي لتعاونية عمتا.`;

  return (
    <div className="bg-white rounded-2xl border border-surface-border shadow-card p-6 sm:p-8 lg:p-10">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-surface-border">
        <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
          <Calculator className="w-5 h-5 text-accent-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary-950">
            حاسبة الاكتتاب الحسابية
          </h3>
          <p className="text-xs sm:text-sm text-ink-secondary">
            احتساب تقديري لقيمة الأسهم والدفعة الأولى وفق شروط الاكتتاب المعتمدة
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="share-range" className="text-sm font-semibold text-primary-900">
                عدد الأسهم:
              </label>
              <span className="text-lg font-bold text-primary-700">
                {shares.toLocaleString('ar-JO')} سهم
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
              <span>الحد الأدنى: 500 سهم</span>
              <span>الحد الأقصى: 40,000 سهم</span>
            </div>
          </div>

          {/* Quick Preset Buttons */}
          <div>
            <span className="block text-xs font-semibold text-ink-secondary mb-2">
              خيارات سريعة لعدد الأسهم:
            </span>
            <div className="flex flex-wrap gap-2">
              {presets.map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => setShares(count)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    shares === count
                      ? 'bg-primary-700 text-white font-bold shadow-subtle'
                      : 'bg-surface-alt text-ink-primary hover:bg-primary-50 hover:text-primary-800 border border-surface-border'
                  }`}
                >
                  {count.toLocaleString('ar-JO')} سهم
                </button>
              ))}
            </div>
          </div>

          {/* Rules & Notes from Profile Page 1 */}
          <div className="bg-surface-alt rounded-xl p-4 border border-surface-border text-xs text-ink-secondary space-y-2">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
              <span>قيمة السهم الواحد: <strong>1 دينار أردني</strong> (المادة 10).</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
              <span>رسوم الانتساب: <strong>25 دينار أردني</strong>.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
              <span>إمكانية دفعة أولى خمس المبلغ والباقي يقسط على 24 شهراً.</span>
            </div>
          </div>
        </div>

        {/* Results Calculation Column */}
        <div className="lg:col-span-6 bg-gradient-to-br from-primary-900 to-primary-950 text-white rounded-2xl p-6 sm:p-7 shadow-card">
          <span className="block text-xs font-semibold text-accent-400 uppercase tracking-wider mb-1">
            الناتج الحسابي
          </span>
          <div className="text-3xl font-bold text-white mb-6">
            {totalShareCost.toLocaleString('ar-JO')} <span className="text-base font-normal text-primary-200">دينار أردني</span>
          </div>

          <div className="space-y-3.5 border-t border-primary-800/80 pt-4 text-sm">
            <div className="flex justify-between items-center text-primary-100">
              <span>إجمالي قيمة الأسهم (دينار واحد لكل سهم):</span>
              <span className="font-bold text-white">{totalShareCost.toLocaleString('ar-JO')} د.أ</span>
            </div>

            <div className="flex justify-between items-center text-primary-100">
              <span>الدفعة الأولى (خُمس المبلغ):</span>
              <span className="font-bold text-white">{initialDownpayment.toLocaleString('ar-JO')} د.أ</span>
            </div>

            <div className="flex justify-between items-center text-primary-200 text-xs">
              <span>المبلغ المتبقي بالتقسيط:</span>
              <span>{remainingAmount.toLocaleString('ar-JO')} د.أ</span>
            </div>

            <div className="flex justify-between items-center text-primary-200 text-xs">
              <span>القسط الشهري الحسابي (على 24 شهراً):</span>
              <span className="font-bold text-accent-300">
                {monthlyInstallment.toFixed(2)} د.أ / شهرياً
              </span>
            </div>

            <div className="flex justify-between items-center text-primary-100 pt-2 border-t border-primary-800/60 text-xs">
              <span>رسوم الانتساب المنصوص عليها:</span>
              <span className="font-bold text-white">{entranceFee} د.أ</span>
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
              <span>استفسر عن هذا الاكتتاب عبر واتساب</span>
              <ArrowLeft className="w-4 h-4" />
            </a>
            <span className="block text-[11px] text-center text-primary-200 mt-2 leading-relaxed">
              * هذا العرض ناتج حسابي تقريبي مستند إلى أحكام النظام الأساسي المعتمد، للتوضيح فقط ولا يشكّل التزاماً تعاقدياً.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
