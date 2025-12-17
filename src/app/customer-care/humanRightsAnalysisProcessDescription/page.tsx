'use client';

import Link from 'next/link';
import { useLang } from "@/hooks/useLang";
import { usePathname } from 'next/navigation';

const sidebarItems = [
    { id: 'contact', label: 'Contact Us', path: '/customer-care', isActive: false },
    { id: 'about', label: 'About Us', path: '/customer-care/about', isActive: false },
    { id: 'faq', label: 'Frequently Asked Questions', path: '/customer-care/faq', isActive: false },
    { id: 'shopping-guide', label: 'Shopping Guide', path: '/customer-care/shopping-guide', isActive: false },
    { id: 'returns', label: 'Return and Exchange', path: '/customer-care/returns', isActive: false },
    { id: 'privacy', label: 'Privacy Policy', path: '/customer-care/privacy', isActive: false },
    { id: 'human-rights', label: 'Human Rights Due Diligence', path: '/customer-care/humanRightsDueDiligance', isActive: false },
    { id: 'human-rights-policy', label: 'Human Rights Policy', path: '/customer-care/humanRightPolicy', isActive: false },
    { id: 'human-rights-analysis', label: 'Human Rights Analysis Process Description', path: '/customer-care/humanRightsAnalysisProcessDescription', isActive: true },
    { id: 'supplier-incentive', label: 'Supplier Incentive Process Description', path: '/customer-care/supplierIncentiveProcessDescription', isActive: false },

];



export default function HumanRightsAnalysisProcessDescription() {
    const lang = useLang();
    const isAr = lang === "ar";
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex text-sm text-gray-500">
                        <Link href="/" className="hover:text-purple-600">Home</Link>
                        <span className="mx-2">&gt;</span>
                        <Link href="/customer-care" className="hover:text-purple-600">Customer Care</Link>
                        <span className="mx-2">&gt;</span>
                        <span className="text-gray-900">
                            {isAr ? "وصف عملية تحليل حقوق الإنسان" : "Human Rights Analysis Process Description"}
                        </span>
                    </nav>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* Sidebar */}
                <aside className="lg:col-span-1">
                    <div className="bg-white shadow rounded-lg border">
                        <nav className="p-4">
                            <ul>
                                {sidebarItems.map(item => (
                                    <li key={item.id}>
                                        <Link
                                            href={item.path}
                                            replace
                                            className={`block px-4 py-3 text-sm rounded-md transition-colors ${pathname === item.path
                                                ? 'bg-purple-50 text-purple-700 font-medium border-l-4 border-purple-600'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-purple-600'
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="lg:col-span-3 space-y-14" dir={isAr ? "rtl" : "ltr"}>

                    {/* Header */}
                    <section className="space-y-4 text-center">
                        <h1 className="text-3xl sm:text-4xl font-bold">
                            {isAr ? "وصف عملية تحليل حقوق الإنسان" : "Human Rights Risk Analysis Process Description"}
                        </h1>
                        <p className="text-gray-600">
                            {isAr ? "تاريخ التقرير: 1 يوليو 2025" : "Report Date: July 1, 2025"}
                        </p>
                    </section>
                    {/* Human Rights Policy */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "الغرض" : "Purpose"}
                        </h2>

                        <p className='text-gray-600'>
                            {isAr ? "" : "To systematically identify, assess, and mitigate potential negative impacts of our operations and business relationships on human rights."}
                        </p>

                    </section>



                    {/* 2. Risk Analysis Process */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "العملية" : "Process"}
                        </h2>
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "" : "1. Scope of Analysis"}
                        </h2>

                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>{isAr ? "" : "Own operations (employees, workplace practices)."}</li>
                            <li>{isAr ? "" : "Direct supply chain (imported products and supplier practices)."}</li>
                            <li>{isAr ? "" : "Business relationships (partners and customers)."}</li>
                        </ul>

                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "" : "2. Risk Identification"}
                        </h2>

                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>{isAr ? "" : "Review of labor practices (child labor, forced labor, discrimination, wages, working hours)."}</li>
                            <li>{isAr ? "" : "Occupational health and safety compliance."}</li>
                            <li>{isAr ? "" : "Ethical conduct (anti-corruption, transparency)."}</li>
                            <li>{isAr ? "" : "Environmental impacts (pollution, hazardous materials)."}</li>
                        </ul>

                    </section>


                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "" : "3. Information Sources"}
                        </h2>

                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>{isAr ? "" : "Internal discussions with management and employees."}</li>
                            <li>{isAr ? "" : "Supplier assessments and documentation reviews,"}</li>
                            <li>{isAr ? "" : "External standards (ILO conventions, Saudi labor law, UN Gulding Principles)."}</li>
                        </ul>
                    </section>


                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "" : "4. Risk Assessment"}
                        </h2>

                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>{isAr ? "" : "Risks prioritized based on severity, number of affected persons, and reputational/legal impact."}</li>
                            <li>{isAr ? "" : "Both direct and indirect impacts considered."}</li>
                        </ul>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "" : "5. Mitigation & Corrective Action"}
                        </h2>

                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>{isAr ? "" : "Non-compliance triggers corrective measures (supplier engagement, contract review, remediation)."}</li>
                            <li>{isAr ? "" : "Continuous monitoring and annual updates to risk analysis."}</li>
                        </ul>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "" : "6. Reporting & Transparency"}
                        </h2>

                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>{isAr ? "" : "Findings documented in annual Human Rights Due Diligence Report (see Policy Paragraph 13)."}</li>
                            <li>{isAr ? "" : "Reports made available to stakeholders."}</li>
                        </ul>
                    </section>



                    {/* 1. Respect for Human Rights */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "" : "Evidence"}
                        </h2>

                        <p className="text-gray-600">
                            {isAr ? "" : (
                                <>
                                    This process is documented in our{" "}
                                    <Link
                                        href="/customer-care/humanRightPolicy"
                                        target="_blank"
                                        className="text-purple-600 underline hover:text-purple-700 font-medium"
                                    >
                                        Human Rights Policy (Paragraphs 12–14)
                                    </Link>{" "}
                                    and applied across operations and supplier relationships.
                                </>
                            )}
                        </p>

                    </section>



                </main>
            </div>
        </div>
    );
}
