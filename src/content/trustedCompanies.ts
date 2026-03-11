export interface TrustedCompany {
  name: string;
  siteLabel: string;
  url: string;
  logoSrc: string;
  logoClassName?: string;
}

export const trustedCompanies: TrustedCompany[] = [
  {
    name: 'DB Cleaning Services',
    siteLabel: 'mydbcleaning.com',
    url: 'https://www.mydbcleaning.com/',
    logoSrc: '/company-logos/db-cleaning-services.svg'
  },
  {
    name: 'IT.UP Business',
    siteLabel: 'itup.com.br',
    url: 'http://www.itup.com.br/',
    logoSrc: '/company-logos/itup-business.png',
    logoClassName: 'max-h-10 max-w-[9.5rem]'
  },
  {
    name: 'Beauty Love',
    siteLabel: 'beautylove.app.br',
    url: 'https://beautylove.app.br/',
    logoSrc: '/company-logos/beauty-love.png',
    logoClassName: 'max-h-9'
  },
  {
    name: 'DocVita',
    siteLabel: 'docvita.com.br',
    url: 'https://www.docvita.com.br/',
    logoSrc: '/company-logos/docvita.png',
    logoClassName: 'max-h-9'
  },
  {
    name: 'Mathex',
    siteLabel: 'mathex.com.br',
    url: 'https://mathex.com.br/',
    logoSrc: '/company-logos/mathex.svg'
  }
];
