import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const crmTarget = env.CRM_SITE_LEAD_TARGET || 'http://127.0.0.1:3002';
  const intakeKey = env.CRM_SITE_LEAD_INTAKE_KEY || 'dev-site-lead-key';

  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    server: {
      proxy: {
        '/api/contact-lead': {
          target: crmTarget,
          changeOrigin: true,
          headers: {
            'x-site-intake-key': intakeKey
          },
          rewrite: () => '/api/public/site-leads'
        }
      }
    }
  };
});
