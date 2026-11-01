import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Home,
  Building2,
  Target,
  Users,
  ShieldCheck,
  PhoneCall,
  ChevronLeft,
  ChevronDown,
  X,
  ArrowLeft,
  Phone,
  MessageSquare
} from 'lucide-react';
import { COOPERATIVE_INFO } from '../data/cooperativeData';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const drawerRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change and auto-scroll active tab into view
  useEffect(() => {
    setIsOpen(false);
    if (tabsContainerRef.current) {
      const activeEl = tabsContainerRef.current.querySelector('[data-active="true"]') as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [location.pathname]);

  // Support Escape key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close when clicking outside of the drawer
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        const headerEl = drawerRef.current.closest('header');
        if (headerEl && headerEl.contains(event.target as Node)) {
          return;
        }
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    {
      to: '/',
      label: 'الرئيسية',
      shortLabel: 'الرئيسية',
      desc: 'الواجهة الرسمية والتعريف العام بالتعاونية',
      icon: Home,
      isHero: true
    },
    {
      to: '/about',
      label: 'عن التعاونية',
      shortLabel: 'عن التعاونية',
      desc: 'بيانات التسجيل والشخصية الاعتبارية',
      icon: Building2,
      isHero: false
    },
    {
      to: '/goals',
      label: 'الغايات ومجالات العمل',
      shortLabel: 'الغايات',
      desc: 'الـ 14 غاية المعتمدة بالنظام الأساسي',
      icon: Target,
      isHero: false
    },
    {
      to: '/governance',
      label: 'الهيكل التنظيمي',
      shortLabel: 'الهيكل التنظيمي',
      desc: 'الهيئة العامة ولجان الإدارة والمراقبة',
      icon: Users,
      isHero: false
    },
    {
      to: '/membership',
      label: 'العضوية والانتساب',
      shortLabel: 'العضوية',
      desc: 'شروط الأهلية والأسهم وحاسبة الاكتتاب',
      icon: ShieldCheck,
      isHero: false
    },
    {
      to: '/contact',
      label: 'تواصل معنا',
      shortLabel: 'تواصل معنا',
      desc: 'الهاتف المعتمد والمراسلة المباشرة والعنوان',
      icon: PhoneCall,
      isHero: true
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full supports-[backdrop-filter]:bg-white/85 bg-white/95 backdrop-blur-md backdrop-saturate-150 ${
        isOpen
          ? 'bg-white shadow-sm border-b border-surface-border'
          : isScrolled
          ? 'shadow-sm border-b border-surface-border/80'
          : 'border-b border-surface-border/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Row 1: Logo & Actions */}
        <div className="h-12 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo (Right in RTL) */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-0.5 shrink-0"
            aria-label="تعاونية عمتا - الصفحة الرئيسية"
          >
            <img
              src={COOPERATIVE_INFO.logoCleanPath}
              alt="شعار تعاونية عمتا"
              className="h-8 sm:h-10 md:h-12 max-w-[135px] sm:max-w-[170px] md:max-w-none w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="القائمة الرئيسية">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-primary-700 font-bold bg-primary-50/80'
                      : 'text-ink-primary hover:text-primary-700 hover:bg-surface-alt'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 right-3 left-3 h-0.5 bg-accent-500 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/membership"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-primary-700 text-white hover:bg-primary-800 transition-all duration-200 shadow-subtle hover:shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            >
              <span>استفسر عن الانتساب</span>
              <ArrowLeft className="w-4 h-4 text-accent-300" />
            </Link>
          </div>

          {/* Mobile Top Row Controls (Left in RTL): Call Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={COOPERATIVE_INFO.phoneTelLink}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-alt hover:bg-primary-50 border border-surface-border text-primary-700 flex items-center justify-center transition-colors active:scale-95 shadow-subtle shrink-0"
              aria-label="اتصال هاتف مباشر بإدارة التعاونية"
              title="اتصال مباشر"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>

      {/* =========================================================================
          ROW 2: INTEGRATED MOBILE NAVIGATION BAR ("على طول البار")
          Seamlessly merged with the top bar, sharing identical glass blur & transparency
         ========================================================================= */}
      <div className="lg:hidden px-3 sm:px-6 pb-2 pt-0.5 border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-1.5 h-9">
          
          {/* Scrollable Page Names across the length of the bar */}
          <div
            ref={tabsContainerRef}
            className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth flex-1 min-w-0 py-0.5"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  data-active={isActive ? 'true' : 'false'}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap shrink-0 transition-all duration-200 flex items-center gap-1.5 select-none ${
                    isActive
                      ? 'bg-white/95 text-primary-950 font-bold shadow-subtle border border-surface-border/80 ring-1 ring-primary-100/50'
                      : 'text-ink-secondary hover:text-primary-900 hover:bg-white/60 font-medium'
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
                  )}
                  <span>{link.label}</span>
                </NavLink>
              );
            })}
          </div>

          {/* Sticky Dropdown Expander with Down Arrow ("مع سهم مثلا ل تحت و بس يكبس عالسهم تعمل سلايد للقائمة الموجودة") */}
          <div className="relative z-10 flex items-center shrink-0 pr-1 pl-0.5 bg-gradient-to-r from-white/95 via-white/80 to-transparent">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center gap-1.5 h-7.5 px-2.5 rounded-lg text-xs font-bold transition-all shadow-subtle active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                isOpen
                  ? 'bg-primary-950 text-accent-300 border border-accent-400/40 ring-1 ring-accent-400/30'
                  : 'bg-primary-700 text-white hover:bg-primary-800 border border-primary-600/40'
              }`}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'إغلاق دليل الصفحات' : 'فتح دليل الصفحات بالكامل'}
            >
              <span className="text-[11px] sm:text-xs">
                {isOpen ? 'إغلاق' : 'دليل الصفحات'}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-accent-300 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>

        </div>
      </div>

      {/* =========================================================================
          BESPOKE MOBILE BENTO GRID NAVIGATION PANEL (Active when isOpen === true)
         ========================================================================= */}
      {isOpen && (
        <div
          className="lg:hidden absolute top-full inset-x-0 h-[calc(100dvh-6rem)] sm:h-[calc(100dvh-6.5rem)] z-50 bg-gradient-to-b from-[#0c2831] via-[#113844] to-[#092027] text-white overflow-y-auto overscroll-contain transition-all duration-300 animate-in fade-in slide-in-from-top-3 border-t border-white/10 shadow-2xl"
          role="dialog"
          aria-modal="true"
          aria-label="دليل صفحات تعاونية عمتا"
        >
          {/* Subtle Organic Background Calligraphy Curves */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
            <svg viewBox="0 0 400 600" fill="none" className="w-full h-full object-cover">
              <path
                d="M-50 120 C100 140, 220 50, 360 190 C460 300, 240 460, 460 570"
                stroke="#2CB6B4"
                strokeWidth="45"
                strokeLinecap="round"
              />
              <path
                d="M40 320 C160 260, 320 370, 430 300"
                stroke="#FFFFFF"
                strokeWidth="25"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div
            ref={drawerRef}
            className="relative z-10 max-w-lg mx-auto px-4 py-5 space-y-4"
          >
            
            {/* Header Title & Functional Guidance */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  استكشف تعاونية عمتا
                </h2>
                <p className="text-xs sm:text-sm text-primary-200/90 font-normal">
                  اختر الصفحة التي تريد الوصول إليها
                </p>
              </div>

              {/* Explicit Close Button inside Drawer Header */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-accent-300 border border-white/15 flex items-center justify-center transition-all shrink-0"
                aria-label="إغلاق دليل الصفحات"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Bento Grid Layout (6 Official Pages Only) */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              
              {/* Card 1: الرئيسية (Hero Bento Card - Full Width 2 Cols) */}
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `col-span-2 p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 relative overflow-hidden group flex items-center justify-between gap-3 active:scale-[0.98] ${
                    isActive
                      ? 'bg-gradient-to-r from-white/15 to-white/10 border-accent-400 shadow-[0_0_20px_rgba(44,182,180,0.25)] ring-1 ring-accent-400/50'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? 'bg-accent-500 text-primary-950 font-bold'
                            : 'bg-accent-500/15 text-accent-300 border border-accent-400/25'
                        }`}
                      >
                        <Home className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-base sm:text-lg text-white">الرئيسية</span>
                          {isActive && (
                            <span className="text-[10px] font-bold bg-accent-400 text-primary-950 px-2 py-0.5 rounded-full shrink-0">
                              الصفحة الحالية
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-primary-200/80 block truncate mt-0.5">
                          الواجهة الرسمية والتعريف العام بالتعاونية
                        </span>
                      </div>
                    </div>
                    <ChevronLeft className="w-5 h-5 text-accent-300/80 shrink-0 group-hover:-translate-x-1 transition-transform" />
                  </>
                )}
              </NavLink>

              {/* Card 2: عن التعاونية (Col 1) */}
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between gap-2.5 active:scale-[0.98] ${
                    isActive
                      ? 'bg-white/15 border-accent-400 shadow-[0_0_15px_rgba(44,182,180,0.25)] ring-1 ring-accent-400/50'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          isActive
                            ? 'bg-accent-500 text-primary-950 font-bold'
                            : 'bg-white/10 text-accent-300 border border-white/15'
                        }`}
                      >
                        <Building2 className="w-4 h-4" />
                      </div>
                      {isActive && (
                        <span className="text-[9px] font-bold bg-accent-400 text-primary-950 px-1.5 py-0.5 rounded-full">
                          الحالية
                        </span>
                      )}
                    </div>
                    <div>
                      <span className="font-bold text-sm text-white block">عن التعاونية</span>
                      <span className="text-[11px] text-primary-200/70 block mt-0.5">بيانات التسجيل والمركز</span>
                    </div>
                  </>
                )}
              </NavLink>

              {/* Card 3: الغايات ومجالات العمل (Col 2) */}
              <NavLink
                to="/goals"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between gap-2.5 active:scale-[0.98] ${
                    isActive
                      ? 'bg-white/15 border-accent-400 shadow-[0_0_15px_rgba(44,182,180,0.25)] ring-1 ring-accent-400/50'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          isActive
                            ? 'bg-accent-500 text-primary-950 font-bold'
                            : 'bg-white/10 text-accent-300 border border-white/15'
                        }`}
                      >
                        <Target className="w-4 h-4" />
                      </div>
                      {isActive && (
                        <span className="text-[9px] font-bold bg-accent-400 text-primary-950 px-1.5 py-0.5 rounded-full">
                          الحالية
                        </span>
                      )}
                    </div>
                    <div>
                      <span className="font-bold text-sm text-white block">الغايات ومجالات العمل</span>
                      <span className="text-[11px] text-primary-200/70 block mt-0.5">الـ 14 غاية المعتمدة</span>
                    </div>
                  </>
                )}
              </NavLink>

              {/* Card 4: الهيكل التنظيمي (Col 1) */}
              <NavLink
                to="/governance"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between gap-2.5 active:scale-[0.98] ${
                    isActive
                      ? 'bg-white/15 border-accent-400 shadow-[0_0_15px_rgba(44,182,180,0.25)] ring-1 ring-accent-400/50'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          isActive
                            ? 'bg-accent-500 text-primary-950 font-bold'
                            : 'bg-white/10 text-accent-300 border border-white/15'
                        }`}
                      >
                        <Users className="w-4 h-4" />
                      </div>
                      {isActive && (
                        <span className="text-[9px] font-bold bg-accent-400 text-primary-950 px-1.5 py-0.5 rounded-full">
                          الحالية
                        </span>
                      )}
                    </div>
                    <div>
                      <span className="font-bold text-sm text-white block">الهيكل التنظيمي</span>
                      <span className="text-[11px] text-primary-200/70 block mt-0.5">الهيئة العامة واللجان</span>
                    </div>
                  </>
                )}
              </NavLink>

              {/* Card 5: العضوية والانتساب (Col 2) */}
              <NavLink
                to="/membership"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between gap-2.5 active:scale-[0.98] ${
                    isActive
                      ? 'bg-white/15 border-accent-400 shadow-[0_0_15px_rgba(44,182,180,0.25)] ring-1 ring-accent-400/50'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          isActive
                            ? 'bg-accent-500 text-primary-950 font-bold'
                            : 'bg-white/10 text-accent-300 border border-white/15'
                        }`}
                      >
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      {isActive && (
                        <span className="text-[9px] font-bold bg-accent-400 text-primary-950 px-1.5 py-0.5 rounded-full">
                          الحالية
                        </span>
                      )}
                    </div>
                    <div>
                      <span className="font-bold text-sm text-white block">العضوية والانتساب</span>
                      <span className="text-[11px] text-primary-200/70 block mt-0.5">الشروط وحاسبة الاكتتاب</span>
                    </div>
                  </>
                )}
              </NavLink>

              {/* Card 6: تواصل معنا (Anchor Bento Card - Full Width 2 Cols) */}
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `col-span-2 p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 relative overflow-hidden group flex items-center justify-between gap-3 active:scale-[0.98] ${
                    isActive
                      ? 'bg-gradient-to-r from-white/15 to-white/10 border-accent-400 shadow-[0_0_20px_rgba(44,182,180,0.25)] ring-1 ring-accent-400/50'
                      : 'bg-gradient-to-r from-accent-500/10 via-white/5 to-white/5 hover:bg-white/10 border-white/15 hover:border-white/25'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? 'bg-accent-500 text-primary-950 font-bold'
                            : 'bg-accent-500/20 text-accent-300 border border-accent-400/30'
                        }`}
                      >
                        <PhoneCall className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-base sm:text-lg text-white">تواصل معنا</span>
                          {isActive && (
                            <span className="text-[10px] font-bold bg-accent-400 text-primary-950 px-2 py-0.5 rounded-full shrink-0">
                              الصفحة الحالية
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-primary-200/80 block truncate mt-0.5">
                          الهاتف المعتمد والمراسلة المباشرة والعنوان
                        </span>
                      </div>
                    </div>
                    <ChevronLeft className="w-5 h-5 text-accent-300/80 shrink-0 group-hover:-translate-x-1 transition-transform" />
                  </>
                )}
              </NavLink>

            </div>

            {/* Quick Contact & WhatsApp Action Strip */}
            <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs">
              <a
                href={COOPERATIVE_INFO.phoneTelLink}
                className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-center gap-2 transition-colors font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-accent-400" />
                <span dir="ltr">{COOPERATIVE_INFO.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${COOPERATIVE_INFO.whatsappNumber}?text=${encodeURIComponent(COOPERATIVE_INFO.whatsappPrefilledMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-400/30 text-emerald-300 flex items-center justify-center gap-2 transition-colors font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>محادثة واتساب</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
