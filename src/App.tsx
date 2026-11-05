import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { translations } from './data/translations';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Goals } from './pages/Goals';
import { Governance } from './pages/Governance';
import { Membership } from './pages/Membership';
import { Contact } from './pages/Contact';

// Dynamic Document Title Updater
const PageTitleManager: React.FC = () => {
  const { pathname } = useLocation();
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': t.homeTitle,
      '/about': t.aboutTitle,
      '/goals': t.goalsTitle,
      '/governance': t.governanceTitle,
      '/membership': t.membershipTitle,
      '/contact': t.contactTitle,
    };

    const currentTitle = titles[pathname] || t.siteTitle;
    document.title = currentTitle;
  }, [pathname, language, t]);

  return null;
};

// 404 Not Found Page Component
const NotFound: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="py-24 sm:py-32 bg-surface-alt text-center">
      <div className="max-w-md mx-auto px-4 space-y-4">
        <span className="text-4xl font-mono font-bold text-primary-700 block">404</span>
        <h1 className="text-2xl font-bold text-primary-950">{t.notFoundTitle}</h1>
        <p className="text-sm text-ink-secondary">
          {t.pageNotFoundDesc}
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold bg-primary-700 text-white hover:bg-primary-800 transition-colors text-sm shadow-subtle"
          >
            <span>{t.backToHome}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <PageTitleManager />
        <div className="min-h-screen flex flex-col bg-white text-ink-primary font-sans antialiased selection:bg-accent-100 selection:text-primary-800 overflow-x-clip w-full">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/governance" element={<Governance />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
