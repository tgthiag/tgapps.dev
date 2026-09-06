import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const crmTarget = env.CRM_SITE_LEAD_TARGET || 'http://127.0.0.1:3002';
  const integrationId = env.CRM_SITE_LEAD_INTEGRATION_ID || '{integration_id}';

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
          rewrite: () => `/api/public/v1/lead-intakes/${integrationId}/leads`
        }
      }
    }
  };
});
