import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MyBusinessIdeaPrivacyPage from './components/MyBusinessIdeaPrivacyPage';
import MyBusinessIdeaAccountDeletionPage from './components/MyBusinessIdeaAccountDeletionPage';

const getCurrentRoutePath = () => {
  if (typeof window === 'undefined') {
    return '/';
  }
  const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/';
  const segments = normalizedPath.split('/').filter(Boolean);
  if (segments[0] === 'pt-br') {
    segments.shift();
  }
  return segments.length > 0 ? `/${segments.join('/')}` : '/';
};

function App() {
  const routePath = getCurrentRoutePath();
  const myBusinessIdeaDefaults = {
    defaultAppName: 'My Business Idea',
    defaultPackageName: 'com.mybusinessidea',
    defaultSupportEmail: 'support@tgapps.dev'
  };

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

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
