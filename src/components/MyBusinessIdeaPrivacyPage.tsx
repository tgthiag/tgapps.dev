import { ArrowLeft, Mail, Shield } from 'lucide-react';

// IMPORTANT (GOOGLE PLAY COMPLIANCE):
// Keep this page generic and keep query keys stable: appName/app, package/packageName, supportEmail/email.
// External listings may generate URLs using these exact parameters.
type PrivacyPageProps = {
  defaultAppName?: string;
  defaultPackageName?: string;
  defaultSupportEmail?: string;
};

const readParam = (name: string) => {
  if (typeof window === 'undefined') {
    return '';
  }
  return new URLSearchParams(window.location.search).get(name)?.trim() ?? '';
};

const readFirstParam = (keys: string[]) => {
  for (const key of keys) {
    const value = readParam(key);
    if (value) {
      return value;
    }
  }
  return '';
};

const safePackageName = (value: string) => {
  return /^[a-zA-Z0-9._]+$/.test(value) ? value : '';
};

const MyBusinessIdeaPrivacyPage = ({
  defaultAppName = 'Your App',
  defaultPackageName = 'com.example.app',
  defaultSupportEmail = 'support@tgapps.dev'
}: PrivacyPageProps) => {
  const appName = readFirstParam(['appName', 'app']) || defaultAppName;
  const packageName = safePackageName(readFirstParam(['package', 'packageName']) || defaultPackageName) || defaultPackageName;
  const supportEmail = readFirstParam(['supportEmail', 'email']) || defaultSupportEmail;

  const playStoreUrl = `https://play.google.com/store/apps/details?id=${encodeURIComponent(packageName)}`;
  const deletionUrl = `https://tgapps.dev/account_deletion?appName=${encodeURIComponent(appName)}&package=${encodeURIComponent(packageName)}`;
  const sectionClass = 'rounded-2xl border border-slate-700/70 bg-slate-900/45 p-5 shadow-lg shadow-black/25 backdrop-blur-sm';

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-10 md:py-14">
        <a
          href="/"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-slate-900/70 px-4 py-2 text-sm text-slate-100 shadow-lg shadow-black/30 backdrop-blur-sm transition-colors hover:border-blue-400/70 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Tg Apps
        </a>

        <div className="rounded-3xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-2xl shadow-black/40 backdrop-blur-md md:p-8">
          <div className="mb-7 flex items-center gap-3">
            <div className="rounded-xl bg-blue-500/20 p-2 text-blue-200 ring-1 ring-blue-400/30">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300/90">Legal Page</p>
              <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">{appName} Privacy Policy</h1>
              <p className="mt-1 text-sm text-slate-300">Effective date: February 19, 2026</p>
            </div>
          </div>

          <div className="space-y-5 leading-7 text-slate-200">
            <section className={sectionClass}>
              <h2 className="text-xl font-semibold text-white">1. App reference</h2>
              <p className="mt-2">
                App name:
                {' '}
                <strong>{appName}</strong>
              </p>
              <p className="mt-2">
                Package:
                {' '}
                <code className="rounded-md bg-slate-800/80 px-2 py-1 text-sm text-slate-100">{packageName}</code>
              </p>
              <p className="mt-2">
                Google Play:
                {' '}
                <a
                  href={playStoreUrl}
                  className="text-blue-300 underline hover:text-blue-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  {playStoreUrl}
                </a>
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl font-semibold text-white">2. Who we are</h2>
              <p className="mt-2">
                This Privacy Policy describes how
                {' '}
                <strong>TG APPLICATIONS DESENVOLVIMENTO LTDA</strong>
                {' '}
                ("Tg Apps", "we", "our", or "us") collects, uses, discloses, and protects information when you use
                {' '}
                <strong>{appName}</strong>
                {' '}
                and related services.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl font-semibold text-white">3. Information we collect</h2>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>Account data (such as name, email, and authentication-related data).</li>
                <li>User content (such as ideas, drafts, favorites, and generated outputs).</li>
                <li>Subscription and billing status from Google Play Billing, when applicable.</li>
                <li>Device and usage signals for analytics, diagnostics, and performance.</li>
                <li>Advertising-related data for ad delivery and measurement, where applicable.</li>
              </ul>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl font-semibold text-white">4. How we use information</h2>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>Provide, operate, and improve app features.</li>
                <li>Authenticate users and protect accounts.</li>
                <li>Process subscriptions and premium access.</li>
                <li>Measure usage, diagnose failures, and improve quality.</li>
                <li>Comply with legal obligations and enforce terms.</li>
              </ul>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl font-semibold text-white">5. Third-party services</h2>
              <p className="mt-2">The app may use third-party providers such as:</p>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>Google Mobile Ads (AdMob)</li>
                <li>Google Firebase Analytics</li>
                <li>Google Firebase Crashlytics</li>
                <li>Google Play Billing</li>
              </ul>
              <p className="mt-2">
                These services have their own policies and may process data according to their terms.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl font-semibold text-white">6. Data retention and security</h2>
              <p className="mt-2">
                We retain data only as needed for service operation, legal obligations, and fraud prevention. We apply
                reasonable technical and organizational measures to protect data, but no method is 100% secure.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl font-semibold text-white">7. Account deletion</h2>
              <p className="mt-2">
                You can request account deletion from inside the app or by email. Full instructions are available at:
                {' '}
                <a
                  href={deletionUrl}
                  className="text-blue-300 underline hover:text-blue-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  {deletionUrl}
                </a>
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl font-semibold text-white">8. Contact</h2>
              <p className="mt-2">For privacy requests, contact:</p>
              <div className="mt-3 rounded-xl border border-slate-600/70 bg-slate-800/70 p-4">
                <div className="inline-flex items-center gap-2 text-slate-100">
                  <Mail className="h-4 w-4 text-blue-300" />
                  <a className="underline hover:text-blue-200" href={`mailto:${supportEmail}`}>
                    {supportEmail}
                  </a>
                </div>
                <p className="mt-2 text-sm text-slate-300">TG APPLICATIONS DESENVOLVIMENTO LTDA</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBusinessIdeaPrivacyPage;
