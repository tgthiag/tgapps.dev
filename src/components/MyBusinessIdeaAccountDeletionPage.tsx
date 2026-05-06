import { useMemo, useState } from 'react';
import { ArrowLeft, Mail, Trash2 } from 'lucide-react';

// IMPORTANT (GOOGLE PLAY COMPLIANCE):
// Keep this page generic and keep query keys stable: appName/app, package/packageName, supportEmail/email.
// Do not change URL contract or removal flow text/sections without checking Play policy requirements.
type AccountDeletionPageProps = {
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

const MyBusinessIdeaAccountDeletionPage = ({
  defaultAppName = 'Your App',
  defaultPackageName = 'com.example.app',
  defaultSupportEmail = 'support@tgapps.dev'
}: AccountDeletionPageProps) => {
  const appName = readFirstParam(['appName', 'app']) || defaultAppName;
  const packageName = safePackageName(readFirstParam(['package', 'packageName']) || defaultPackageName) || defaultPackageName;
  const supportEmail = readFirstParam(['supportEmail', 'email']) || defaultSupportEmail;
  const playStoreUrl = `https://play.google.com/store/apps/details?id=${encodeURIComponent(packageName)}`;
  const sectionClass = 'rounded-2xl border border-slate-700/70 bg-slate-900/45 p-5 shadow-lg shadow-black/25 backdrop-blur-sm';
  const [requestName, setRequestName] = useState('');
  const [requestEmail, setRequestEmail] = useState('');
  const [requestReason, setRequestReason] = useState('');
  const isSubmitDisabled = useMemo(() => {
    return !requestName.trim() || !requestEmail.trim() || !requestReason.trim();
  }, [requestName, requestEmail, requestReason]);

  const submitMailtoRequest = () => {
    const subject = `Account Deletion Request - ${appName}`;
    const body = [
      `App: ${appName}`,
      `Package: ${packageName}`,
      '',
      `Name: ${requestName.trim()}`,
      `Email: ${requestEmail.trim()}`,
      '',
      'Reason:',
      requestReason.trim()
    ].join('\n');
    const mailtoUrl = `mailto:${supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    if (typeof window !== 'undefined') {
      window.location.href = mailtoUrl;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-red-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-10 md:py-14">
        <a
          href="/"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-slate-900/70 px-4 py-2 text-sm text-slate-100 shadow-lg shadow-black/30 backdrop-blur-sm transition-colors hover:border-red-400/70 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Tg Apps
        </a>

        <div className="rounded-3xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-2xl shadow-black/40 backdrop-blur-md md:p-8">
          <div className="mb-7 flex items-center gap-3">
            <div className="rounded-xl bg-red-500/20 p-2 text-red-200 ring-1 ring-red-400/30">
              <Trash2 className="h-5 w-5" />
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-300/90">Legal Page</p>
              <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">{appName} - Account Deletion</h1>
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
              <h2 className="text-xl font-semibold text-white">2. Request deletion inside the app</h2>
              <p className="mt-2">
                You can delete your account directly in the
                {' '}
                {appName}
                {' '}
                app:
              </p>
              <ol className="mt-2 list-decimal space-y-2 pl-6">
                <li>Open the app and sign in.</li>
                <li>Go to the Account area.</li>
                <li>Choose Delete account.</li>
                <li>Confirm the action.</li>
              </ol>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl font-semibold text-white">3. Request deletion by email</h2>
              <p className="mt-2">
                If you cannot access the app, send your request to
                {' '}
                <a className="text-blue-300 underline hover:text-blue-200" href={`mailto:${supportEmail}`}>
                  {supportEmail}
                </a>
                .
              </p>
              <p className="mt-2">
                Use the subject
                {' '}
                <strong>Account Deletion - {appName}</strong>
                {' '}
                and include the email address linked to your account.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl font-semibold text-white">4. Quick request form</h2>
              <p className="mt-2">
                Fill the form below and tap submit. Your email app will open with a ready-to-send deletion request.
              </p>
              <div className="mt-4 rounded-xl border border-slate-600/70 bg-slate-800/70 p-4">
                <div className="grid gap-4">
                  <label className="grid gap-1">
                    <span className="text-sm text-slate-300">Name</span>
                    <input
                      type="text"
                      value={requestName}
                      onChange={(event) => setRequestName(event.target.value)}
                      className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-slate-100 outline-none transition-colors focus:border-red-400"
                      placeholder="Your full name"
                    />
                  </label>
                  <label className="grid gap-1">
                    <span className="text-sm text-slate-300">Email</span>
                    <input
                      type="email"
                      value={requestEmail}
                      onChange={(event) => setRequestEmail(event.target.value)}
                      className="rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-slate-100 outline-none transition-colors focus:border-red-400"
                      placeholder="you@example.com"
                    />
                  </label>
                  <label className="grid gap-1">
                    <span className="text-sm text-slate-300">Reason</span>
                    <textarea
                      value={requestReason}
                      onChange={(event) => setRequestReason(event.target.value)}
                      className="min-h-28 rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-slate-100 outline-none transition-colors focus:border-red-400"
                      placeholder="Tell us why you want to delete your account."
                    />
                  </label>
                  <button
                    type="button"
                    onClick={submitMailtoRequest}
                    disabled={isSubmitDisabled}
                    className="inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-red-500 disabled:cursor-not-allowed disabled:bg-slate-600"
                  >
                    Submit deletion request
                  </button>
                </div>
              </div>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl font-semibold text-white">5. What is deleted</h2>
              <p className="mt-2">When deletion is completed, we remove or anonymize account-linked data, including:</p>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>Profile and authentication data.</li>
                <li>Ideas, drafts, favorites, and generated plan content linked to the account.</li>
                <li>Notification preferences associated with the account.</li>
              </ul>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl font-semibold text-white">6. What may be retained</h2>
              <p className="mt-2">We may retain limited records when required for legal, security, fraud-prevention, billing, or tax reasons, such as:</p>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>Payment and subscription records from Google Play.</li>
                <li>Minimal server logs needed for compliance and abuse prevention.</li>
              </ul>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl font-semibold text-white">7. Processing timeline</h2>
              <p className="mt-2">
                We process deletion requests as soon as possible. Most requests are completed within 30 days.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className="text-xl font-semibold text-white">8. Contact</h2>
              <p className="mt-2">For questions about account deletion, contact:</p>
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

export default MyBusinessIdeaAccountDeletionPage;
