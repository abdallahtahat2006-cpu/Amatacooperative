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
  ChevronRight,
  ChevronDown,
  X,
  ArrowLeft,
  ArrowRight,
  Phone,
  MessageSquare,
  Globe
} from 'lucide-react';
import { COOPERATIVE_INFO } from '../data/cooperativeData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const drawerRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const { language, toggleLanguage, isRTL } = useLanguage();
  const t = translations[language];

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
      label: t.navHome,
      shortLabel: t.navHome,
      desc: language === 'ar' ? 'الواجهة الرسمية والتعريف العام بالتعاونية' : 'Official Portal & General Overview',
      icon: Home,
      isHero: true
    },
    {
      to: '/about',
      label: t.navAbout,
      shortLabel: t.navAbout,
      desc: language === 'ar' ? 'بيانات التسجيل والشخصية الاعتبارية' : 'Registration Facts & Legal Status',
      icon: Building2,
      isHero: false
    },
    {
      to: '/goals',
      label: t.navGoals,
      shortLabel: language === 'ar' ? 'الغايات' : 'Objectives',
      desc: language === 'ar' ? 'الـ 14 غاية المعتمدة بالنظام الأساسي' : '14 Approved Statutory Objectives',
      icon: Target,
      isHero: false
    },
    {
      to: '/governance',
      label: t.navGovernance,
      shortLabel: t.navGovernance,
      desc: language === 'ar' ? 'الهيئة العامة ولجان الإدارة والمراقبة' : 'General Assembly & Key Committees',
      icon: Users,
      isHero: false
    },
    {
      to: '/membership',
      label: t.navMembership,
      shortLabel: language === 'ar' ? 'العضوية' : 'Membership',
      desc: language === 'ar' ? 'شروط الأهلية والأسهم وحاسبة الاكتتاب' : 'Eligibility, Shares & Calculator',
      icon: ShieldCheck,
      isHero: false
    },
    {
      to: '/contact',
      label: t.navContact,
      shortLabel: t.navContact,
      desc: language === 'ar' ? 'الهاتف المعتمد والمراسلة المباشرة والعنوان' : 'Phone, WhatsApp, Email & Location',
      icon: PhoneCall,
      isHero: true
    },
  ];

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const ChevronForward = isRTL ? ChevronLeft : ChevronRight;

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
          
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-0.5 shrink-0"
            aria-label={`${COOPERATIVE_INFO.shortName} - ${t.navHome}`}
          >
            <img
              src={COOPERATIVE_INFO.logoCleanPath}
              alt={language === 'ar' ? 'شعار تعاونية عمتا' : 'Ammata Cooperative Logo'}
              className="h-8 sm:h-10 md:h-12 max-w-[130px] sm:max-w-[170px] md:max-w-none w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label={language === 'ar' ? 'القائمة الرئيسية' : 'Main Menu'}>
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

          {/* Desktop Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Language Switcher Pill */}
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={t.switchLanguage}
              title={language === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border border-surface-border hover:border-accent-400 bg-surface-alt/70 hover:bg-white text-primary-900 transition-all shadow-subtle active:scale-95 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-accent-600" />
              <span>{t.switchLanguage}</span>
            </button>

            {/* Inquire Action Button */}
            <Link
              to="/membership"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-primary-700 text-white hover:bg-primary-800 transition-all duration-200 shadow-subtle hover:shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            >
              <span>{t.inquireButton}</span>
              <ArrowIcon className="w-4 h-4 text-accent-300" />
            </Link>
          </div>

          {/* Mobile Top Row Controls: Language Switcher + Call Button */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
            {/* Mobile Language Switcher Button */}
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={t.switchLanguage}
              title={language === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
              className="h-8 sm:h-9 px-2.5 rounded-full bg-surface-alt hover:bg-primary-50 border border-surface-border text-primary-800 text-xs font-bold flex items-center justify-center gap-1 shadow-subtle active:scale-95 transition-all cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-accent-600" />
              <span>{t.langName}</span>
            </button>

            {/* Direct Phone Call Button */}
            <a
              href={COOPERATIVE_INFO.phoneTelLink}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-surface-alt hover:bg-primary-50 border border-surface-border text-primary-700 flex items-center justify-center transition-colors active:scale-95 shadow-subtle shrink-0"
              aria-label={language === 'ar' ? 'اتصال هاتف مباشر بإدارة التعاونية' : 'Direct Call to Cooperative Management'}
              title={t.callDirect}
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>

        </div>

      </div>

      {/* =========================================================================
          ROW 2: INTEGRATED MOBILE NAVIGATION BAR
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

          {/* Sticky Dropdown Expander with Down Arrow */}
          <div className="relative z-10 flex items-center shrink-0 pr-1 pl-0.5 bg-gradient-to-r from-white/95 via-white/80 to-transparent">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center gap-1.5 h-7.5 px-2.5 rounded-lg text-xs font-bold transition-all shadow-subtle active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                isOpen
                  ? 'bg-primary-900 text-accent-300 ring-2 ring-accent-400/50 shadow-md'
                  : 'bg-primary-800 text-white hover:bg-primary-900'
              }`}
              aria-expanded={isOpen}
              aria-label={t.pageDirectory}
            >
              <span>{t.pageDirectory}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-accent-400' : 'text-primary-200'
                }`}
              />
            </button>
          </div>

        </div>
      </div>

      {/* =========================================================================
          SLIDE-DOWN DRAWER: BENTO GRID INTERACTIVE NAVIGATION
         ========================================================================= */}
      {isOpen && (
        <div
          ref={drawerRef}
          id="mobile-navigation-panel"
          role="region"
          aria-label={language === 'ar' ? 'واجهة دليل الصفحات الكامل' : 'Full Page Directory'}
          className="lg:hidden border-t border-primary-900/40 bg-gradient-to-b from-[#103844] via-[#0e313b] to-[#09222a] text-white shadow-2xl relative z-40 max-h-[calc(100vh-6rem)] overflow-y-auto overscroll-contain animate-in fade-in slide-in-from-top-4 duration-300"
        >
          {/* Subtle Ambient Glow Behind Cards */}
          <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-accent-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-primary-600/15 blur-3xl pointer-events-none" />

          <div className="px-4 sm:px-6 pt-5 pb-6 space-y-4 max-w-lg mx-auto relative z-10">
            
            {/* Header: Title + Subtitle */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="space-y-0.5">
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {t.exploreTitle}
                </h2>
                <p className="text-xs text-primary-200/80">
                  {t.exploreSubtitle}
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors active:scale-95 shrink-0"
                aria-label={t.close}
              >
                <X className="w-4 h-4 text-primary-100" />
              </button>
            </div>

            {/* Bento Grid: 2 Columns */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              
              {/* Card 1: الرئيسية */}
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `col-span-2 p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 relative overflow-hidden group flex items-center justify-between gap-3 active:scale-[0.98] ${
                    isActive
                      ? 'bg-gradient-to-r from-accent-500/25 to-white/10 border-accent-400 shadow-[0_0_20px_rgba(44,182,180,0.25)] ring-1 ring-accent-400/50'
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
                            : 'bg-white/10 text-accent-300 border border-white/15'
                        }`}
                      >
                        <Home className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-base sm:text-lg text-white">{t.navHome}</span>
                          {isActive && (
                            <span className="text-[10px] font-bold bg-accent-400 text-primary-950 px-2 py-0.5 rounded-full shrink-0">
                              {language === 'ar' ? 'الصفحة الحالية' : 'Active'}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-primary-200/80 block truncate mt-0.5">
                          {language === 'ar' ? 'الواجهة الرسمية والتعريف العام بالتعاونية' : 'Official Portal & General Overview'}
                        </span>
                      </div>
                    </div>
                    <ChevronForward className="w-5 h-5 text-accent-300/80 shrink-0 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </NavLink>

              {/* Card 2: عن التعاونية */}
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `p-3 sm:p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between space-y-2 group active:scale-[0.98] ${
                    isActive
                      ? 'bg-accent-500/20 border-accent-400 shadow-md ring-1 ring-accent-400/40'
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
                          {language === 'ar' ? 'الحالية' : 'Active'}
                        </span>
                      )}
                    </div>
                    <div>
                      <span className="font-bold text-sm text-white block">{t.navAbout}</span>
                      <span className="text-[11px] text-primary-200/70 block mt-0.5">
                        {language === 'ar' ? 'بيانات التأسيس والهوية' : 'Registration & Identity'}
                      </span>
                    </div>
                  </>
                )}
              </NavLink>

              {/* Card 3: غاياتنا */}
              <NavLink
                to="/goals"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `p-3 sm:p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between space-y-2 group active:scale-[0.98] ${
                    isActive
                      ? 'bg-accent-500/20 border-accent-400 shadow-md ring-1 ring-accent-400/40'
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
                          {language === 'ar' ? 'الحالية' : 'Active'}
                        </span>
                      )}
                    </div>
                    <div>
                      <span className="font-bold text-sm text-white block">{t.navGoals}</span>
                      <span className="text-[11px] text-primary-200/70 block mt-0.5">
                        {language === 'ar' ? 'النظام الأساسي' : 'Statutory Objectives'}
                      </span>
                    </div>
                  </>
                )}
              </NavLink>

              {/* Card 4: الهيكل التنظيمي */}
              <NavLink
                to="/governance"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `p-3 sm:p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between space-y-2 group active:scale-[0.98] ${
                    isActive
                      ? 'bg-accent-500/20 border-accent-400 shadow-md ring-1 ring-accent-400/40'
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
                          {language === 'ar' ? 'الحالية' : 'Active'}
                        </span>
                      )}
                    </div>
                    <div>
                      <span className="font-bold text-sm text-white block">{t.navGovernance}</span>
                      <span className="text-[11px] text-primary-200/70 block mt-0.5">
                        {language === 'ar' ? 'الهيئة واللجان الإدارية' : 'General Assembly & Boards'}
                      </span>
                    </div>
                  </>
                )}
              </NavLink>

              {/* Card 5: العضوية والانتساب */}
              <NavLink
                to="/membership"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `p-3 sm:p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between space-y-2 group active:scale-[0.98] ${
                    isActive
                      ? 'bg-accent-500/20 border-accent-400 shadow-md ring-1 ring-accent-400/40'
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
                          {language === 'ar' ? 'الحالية' : 'Active'}
                        </span>
                      )}
                    </div>
                    <div>
                      <span className="font-bold text-sm text-white block">{t.navMembership}</span>
                      <span className="text-[11px] text-primary-200/70 block mt-0.5">
                        {language === 'ar' ? 'الشروط وحاسبة الاكتتاب' : 'Terms & Share Calculator'}
                      </span>
                    </div>
                  </>
                )}
              </NavLink>

              {/* Card 6: تواصل معنا */}
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
                          <span className="font-bold text-base sm:text-lg text-white">{t.navContact}</span>
                          {isActive && (
                            <span className="text-[10px] font-bold bg-accent-400 text-primary-950 px-2 py-0.5 rounded-full shrink-0">
                              {language === 'ar' ? 'الصفحة الحالية' : 'Active'}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-primary-200/80 block truncate mt-0.5">
                          {language === 'ar' ? 'الهاتف المعتمد والمراسلة المباشرة والعنوان' : 'Phone, WhatsApp, Email & Address'}
                        </span>
                      </div>
                    </div>
                    <ChevronForward className="w-5 h-5 text-accent-300/80 shrink-0 group-hover:translate-x-1 transition-transform" />
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
                href={`https://wa.me/${COOPERATIVE_INFO.whatsappNumber}?text=${encodeURIComponent(
                  language === 'ar'
                    ? COOPERATIVE_INFO.whatsappPrefilledMessage
                    : COOPERATIVE_INFO.whatsappPrefilledMessageEn
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-400/30 text-emerald-300 flex items-center justify-center gap-2 transition-colors font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.quickWhatsApp}</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
