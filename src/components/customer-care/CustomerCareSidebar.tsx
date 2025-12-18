'use client';

import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

// Sidebar items
const sidebarItems = {
  main: [
    { id: 'contact', label: 'Contact Us', path: '/customer-care' },
    { id: 'faq', label: 'Frequently Asked Questions', path: '/customer-care/faq' },
    { id: 'shopping-guide', label: 'Shopping Guide', path: '/customer-care/shopping-guide' },
    { id: 'returns', label: 'Return and Exchange', path: '/customer-care/returns' },
    { id: 'privacy', label: 'Privacy Policy', path: '/customer-care/privacy' },
    { id: 'supplier-incentive', label: 'Supplier Incentive Process Description', path: '/customer-care/supplierIncentiveProcessDescription' },
  ],
  aboutUs: [
    { id: 'about', label: 'About Us', path: '/customer-care/about' },
  ],
  humanRights: [
    { id: 'human-rights', label: 'Human Rights Due Diligence', path: '/customer-care/humanRightsDueDiligance' },
    { id: 'human-rights-policy', label: 'Human Rights Policy', path: '/customer-care/humanRightPolicy' },
    { id: 'human-rights-analysis', label: 'Human Rights Analysis Process Description', path: '/customer-care/humanRightsAnalysisProcessDescription' },
  ],
};

export default function CustomerCareSidebar() {
  const pathname = usePathname();
  const [aboutOpen, setAboutOpen] = useState(pathname.includes("/about"));
  const [humanRightsOpen, setHumanRightsOpen] = useState(pathname.includes("/humanRights"));

  return (
    <aside className="lg:col-span-1">
      <div className="bg-white shadow rounded-lg border">
        <nav className="p-4">
          <ul className="space-y-1">
            {/* Main Links */}
            {sidebarItems.main.map((item) => (
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
                About Us
                {aboutOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {aboutOpen && (
                <ul className="mt-1 ml-4 border-l border-gray-200">
                  {sidebarItems.aboutUs.map((item) => (
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
                Human Rights
                {humanRightsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {humanRightsOpen && (
                <ul className="mt-1 ml-4 border-l border-gray-200">
                  {sidebarItems.humanRights.map((item) => (
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