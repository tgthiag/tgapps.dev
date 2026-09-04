import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LanguageProvider } from './context/LanguageContext.tsx';

const rootElement = document.getElementById('root')!;

createRoot(rootElement).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);

window.requestAnimationFrame(() => {
  window.requestAnimationFrame(() => {
    document.documentElement.classList.add('app-mounted');
  });
});
