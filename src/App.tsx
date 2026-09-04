import { lazy, Suspense, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CasesSection from './components/CasesSection';
import PricingPlans from './components/PricingPlans';
import FirstMilestoneGuarantee from './components/FirstMilestoneGuarantee';
import MyBusinessIdeaPrivacyPage from './components/MyBusinessIdeaPrivacyPage';
import MyBusinessIdeaAccountDeletionPage from './components/MyBusinessIdeaAccountDeletionPage';
import KeywordLandingPage from './components/KeywordLandingPage';
import AppsDirectoryPage from './components/AppsDirectoryPage';
import AnyLanguageAppPage from './components/AnyLanguageAppPage';
import { useLanguage } from './context/LanguageContext';
import { applyRouteSeo } from './seo/routeSeo';
import { getLandingContent } from './content/landingPages';
import type { LandingPageKey } from './content/landingPages';
import type { CampaignLandingPageKey } from './content/campaignLandingPages';
import { resolvePublicRoute, splitLocaleAndRoute } from './content/publicRoutes';

const CampaignLandingPage = lazy(() => import('./components/CampaignLandingPage'));

function App() {
  const { language } = useLanguage();
  const routePath = typeof window === 'undefined' ? '/' : splitLocaleAndRoute(window.location.pathname).routePath;
  const publicRoute = resolvePublicRoute(routePath);
  const myBusinessIdeaDefaults = {
    defaultAppName: 'My Business Idea',
    defaultPackageName: 'com.mybusinessidea',
    defaultSupportEmail: 'support@tgapps.dev'
  };

  useEffect(() => {
    applyRouteSeo(routePath, language);
  }, [language, routePath]);

  // IMPORTANT (GOOGLE PLAY COMPLIANCE):
  // Do NOT rename/remove these legal-route paths without a coordinated Play Console update.
  // Google Play account deletion/privacy links point to these exact URLs.
  // https://tgapps.dev/privacy_policy?appName=My%20Business%20Idea&package=com.mybusinessidea
  // https://tgapps.dev/account_deletion?appName=My%20Business%20Idea&package=com.mybusinessidea
  if (routePath === '/my_business_idea_privacy') {
    return <MyBusinessIdeaPrivacyPage {...myBusinessIdeaDefaults} />;
  }
  if (routePath === '/privacy_policy') {
    return <MyBusinessIdeaPrivacyPage />;
  }
  if (routePath === '/my_business_idea_delete_account') {
    return <MyBusinessIdeaAccountDeletionPage {...myBusinessIdeaDefaults} />;
  }
  if (routePath === '/account_deletion') {
    return <MyBusinessIdeaAccountDeletionPage />;
  }
  if (publicRoute?.page === 'landing' && publicRoute.landingKey) {
    return (
      <KeywordLandingPage
        locale={language}
        content={getLandingContent(language, publicRoute.landingKey as LandingPageKey)}
      />
    );
  }
  if (publicRoute?.page === 'campaignLanding' && publicRoute.campaignLandingKey) {
    return (
      <Suspense fallback={null}>
        <CampaignLandingPage
          locale={language}
          contentKey={publicRoute.campaignLandingKey as CampaignLandingPageKey}
        />
      </Suspense>
    );
  }
  if (publicRoute?.page === 'appsDirectory') {
    return <AppsDirectoryPage locale={language} />;
  }
  if (publicRoute?.page === 'appDetail' && publicRoute.appKey === 'anyLanguage') {
    return <AnyLanguageAppPage locale={language} />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CasesSection />
      <Services />
      <PricingPlans />
      <FirstMilestoneGuarantee />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
