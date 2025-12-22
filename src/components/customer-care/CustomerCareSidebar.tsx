'use client';

import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useLang } from '@/hooks/useLang';
import { t } from '@/data/labels';


export default function CustomerCareSidebar() {
const pathname = usePathname();
const lang = useLang();

// Dynamic sidebar items with translations
const items = {
  main: [
    { id: 'contact', label: t('contactUs', lang), path: '/customer-care' },
    { id: 'faq', label: t('faq', lang), path: '/customer-care/faq' },
    { id: 'shopping-guide', label: t('shoppingGuide', lang), path: '/customer-care/shopping-guide' },
    { id: 'returns', label: t('returnExchange', lang), path: '/customer-care/returns' },
    { id: 'privacy', label: t('privacyPolicy', lang), path: '/customer-care/privacy' },
    { id: 'supplier-incentive', label: t('supplierIncentiveProcess', lang), path: '/customer-care/supplierIncentiveProcessDescription' },
  ],
  aboutUs: [
    { id: 'about', label: t('aboutUs', lang), path: '/customer-care/about' },
  ],
  humanRights: [
      { id: 'human-rights-policy', label: t('humanRightsPolicy', lang), path: '/customer-care/humanRightPolicy' },
    { id: 'human-rights', label: t('humanRightsDueDiligance', lang), path: '/customer-care/humanRightsDueDiligance' },
    { id: 'human-rights-analysis', label: t('humanRightsAnalysisProcess', lang), path: '/customer-care/humanRightsAnalysisProcessDescription' },
  ],
};

// Initialize dropdown open states based on current pathname
const [aboutOpen, setAboutOpen] = useState(
  items.aboutUs.some(item => item.path === pathname)
);
const [humanRightsOpen, setHumanRightsOpen] = useState(
  items.humanRights.some(item => item.path === pathname)
);


  return (
    <aside className="lg:col-span-1">
      <div className="bg-white shadow rounded-lg border">
        <nav className="p-4">
          <ul className="space-y-1">
            {/* Main Links */}
            {items.main.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className={`block px-4 py-3 text-sm rounded-md transition-colors ${
                    pathname === item.path
                      ? 'bg-purple-50 text-purple-700 font-medium border-l-4 border-purple-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-purple-600'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* About Us Dropdown */}
            <li>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="w-full flex justify-between items-center px-4 py-3 text-sm rounded-md text-gray-700 hover:bg-gray-50 hover:text-purple-600"
              >
                {t("aboutUs", lang)}
                {aboutOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {aboutOpen && (
                <ul className="mt-1 ml-4 border-l border-gray-200">
                  {items.aboutUs.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.path}
                        className={`block px-4 py-2 text-sm rounded-md ${
                          pathname === item.path
                            ? 'bg-purple-50 text-purple-700 font-medium'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-purple-600'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Human Rights Dropdown */}
            <li>
              <button
                onClick={() => setHumanRightsOpen(!humanRightsOpen)}
                className="w-full flex justify-between items-center px-4 py-3 text-sm rounded-md text-gray-700 hover:bg-gray-50 hover:text-purple-600"
              >
                {t("humanRightsSection", lang)}
                {humanRightsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {humanRightsOpen && (
                <ul className="mt-1 ml-4 border-l border-gray-200">
                  {items.humanRights.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.path}
                        className={`block px-4 py-2 text-sm rounded-md ${
                          pathname === item.path
                            ? 'bg-purple-50 text-purple-700 font-medium'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-purple-600'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}