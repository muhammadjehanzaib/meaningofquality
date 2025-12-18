'use client';

import Link from 'next/link';
import { useLang } from "@/hooks/useLang";
import CustomerCareSidebar from '@/components/customer-care/CustomerCareSidebar';



export default function HumanRightsPolicy() {
    const lang = useLang();
    const isAr = lang === "ar";

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
                            {isAr ? "بيان سياسة حقوق الإنسان" : "Human Rights Policy Statement"}
                        </span>
                    </nav>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* Sidebar */}
                <CustomerCareSidebar />

                {/* Main Content */}
                <main className="lg:col-span-3 space-y-14" dir={isAr ? "rtl" : "ltr"}>

                    {/* Header */}
                    <section className="space-y-4 text-center">
                        <h1 className="text-3xl sm:text-4xl font-bold">
                            {isAr ? "بيان سياسة حقوق الإنسان" : "Human Rights Policy Statement"}
                        </h1>
                        <p className="text-gray-600">
                            {isAr ? "تاريخ التقرير: 1 يوليو 2025" : "Report Date: July 1, 2025"}
                        </p>
                    </section>
                    {/* Human Rights Policy */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "سياسة حقوق الإنسان" : "Human Rights Policy"}
                        </h2>

                        <p className='text-gray-600'>
                            {isAr ? "" : "The Meaning of Quality Trading Establishment is committed to conducting business with integrity, fairness, and respect for all individuals. We recognize our responsibility to uphold and support internationally accepted principles of human rights in all our operations, supply chains, and business relationships."}
                        </p>

                    </section>

                    {/* 1. Respect for Human Rights */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "1. المقدمة والالتزام بالسياسة" : "1. Respect for Human Rights"}
                        </h2>

                        <p className='text-gray-600'>
                            {isAr ? ""
                                : "We respect the dignity, rights, and freedoms of all employees, customers, suppliers, and stakeholders. Our practices align with the Universal Declaration of Human Rights, the International Labour Organization (ILO) Core Conventions, and relevant laws of the Kingdom of Saudi Arabia."}
                        </p>
                    </section>
                    {/* 1. Respect for Human Rights */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "1. المقدمة والالتزام بالسياسة" : "2. Non-Discrimination and Equal Opportunity"}
                        </h2>

                        <p className='text-gray-600'>
                            {isAr ? ""
                                : "We do not tolerate any form of discrimination based on nationality, gender, religion, race, disability, age, or any other protected characteristic. We provide equal opportunities in employment, training, and progression. We explicitly support the Convention on the Elimination of Discrimination Against Women (CEDAW) and the Convention on the Rights of the Child (CRC)."}
                        </p>
                    </section>
                    {/* Safe and healthy workplace */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "" : "3. Safe and Healthy Workplace"}
                        </h2>

                        <p className='text-gray-600'>
                            {isAr ? ""
                                : "We are committed to maintaining a safe working environment. We follow all applicable Saudi Arabian labor, safety, and environmental regulations and promote a culture of safety for our employees and partners. We aim to achieve compliance with ISO 45001 Occupational Health & Safety Management Systems."}
                        </p>
                    </section>
                    {/* Safe and healthy workplace */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "" : "4. Prohibition of Forced Labor and Child Labor"}
                        </h2>

                        <p className='text-gray-600'>
                            {isAr ? ""
                                : "We strictly prohibit any form of forced labor, human trafficking, or child labor within our operations and among our suppliers. Suppliers must verify worker age and ensure freedom of movement, in line with ILO standards."}
                        </p>
                    </section>
                    {/* Safe and healthy workplace */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "" : "5. Fair Working Conditions"}
                        </h2>

                        <p className='text-gray-600'>
                            {isAr ? ""
                                : "We ensure fair wages, lawful working hours, and compliance with Saudi labor regulations. All employees are treated with respect and have the right to work in an environment free of harassment or abuse. We are committed to paying a living wage and respecting maximum working hours and rest periods"}
                        </p>
                    </section>
                    {/* Safe and healthy workplace */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "" : "6. Ethical Business Conduct"}
                        </h2>

                        <p className='text-gray-600'>
                            {isAr ? ""
                                : "Our company conducts business transparently and ethically. Bribery, corruption, and unethical practices are not tolerated. We comply with anti-corruption laws and promote accountability across all operations."}
                        </p>
                    </section>
                    {/* Safe and healthy workplace */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "" : "7. Supplier and Partner Responsibility"}
                        </h2>

                        <p className='text-gray-600'>
                            {isAr ? ""
                                : "We expect our suppliers and business partners to follow similar human rights standards. We Integrate human rights clauses into supplier agreements and conduct regular supplier assessments. We prioritize suppliers who demonstrate strong compliance and offer incentives for ethical practices. As an importer and distributor, we ensure that the products we source and distribute come from companies that operate lawfully, ethically, and in alignment with internationally recognized human rights principles."}
                        </p>
                    </section>

                    {/* Safe and healthy workplace */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "" : "8. Environmental Responsibility"}
                        </h2>

                        <p className='text-gray-600'>
                            {isAr ? ""
                                : "We comply with all applicable Saudi Arabian environmental laws and align our practices with Internationally recognized standards on pollution prevention, hazardous waste management, and chemical safety."}
                        </p>
                    </section>

                    {/* Safe and healthy workplace */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "" : "9. Governance and Oversight"}
                        </h2>

                        <p className='text-gray-600'>
                            {isAr ? ""
                                : "Our Board of Directors and designated committees oversee human rights implementation. Performance management schemes may include Incentives linked to human rights compliance."}
                        </p>
                    </section>

                    {/* Safe and healthy workplace */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "" : "10. Training and Awareness"}
                        </h2>

                        <p className='text-gray-600'>
                            {isAr ? ""
                                : "We train employees and suppliers on human rights risks, Including child labor, forced labor, discrimination, and occupational safety. Training ensures awareness of responsibilities and mitigation strategies."}
                        </p>
                    </section>

                    {/* Safe and healthy workplace */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "" : "11. Grievance Mechanism"}
                        </h2>

                        <p className='text-gray-600'>
                            {isAr ? ""
                                : "We provide a formal grievance mechanism accessible to employees, suppliers, and affected communities. Complaints can be raised confidentially, and all grievances are investigated and resolved fairly."}
                        </p>
                    </section>

                    {/* Safe and healthy workplace */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "" : "12. Remediation"}
                        </h2>

                        <p className='text-gray-600'>
                            {isAr ? ""
                                : "If human rights violations occur, we commit to remediation measures including corrective actions, compensation, and policy improvements. We engage directly with affected persons to ensure fair resolution."}
                        </p>
                    </section>



                    {/* 2. Risk Analysis Process */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "" : "13. Reporting and Transparency"}
                        </h2>

                        <p className="text-gray-600">
                            {isAr
                                ? ""
                                : "We report on our human rights due diligence annually, covering:"}
                        </p>

                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>{isAr ? "" : "Risk analysis procedures"}</li>
                            <li>{isAr ? "" : "Identified human rights aspects"}</li>
                            <li>{isAr ? "" : "Measures taken and responsibilitles assigned Reports are made publicly available to stakeholders."}</li>
                        </ul>

                    </section>


                    {/* Safe and healthy workplace */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "" : "14. Continuous Improvement"}
                        </h2>

                        <p className='text-gray-600'>
                            {isAr ? ""
                                : "We aim to continuously improve our policies and procedures to strengthen the protection of human rights across all business areas. Risk analyses are updated regularly, and effectiveness checks are carried out at least once a year."}
                        </p>
                    </section>

                    {/* Safe and healthy workplace */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "" : "Closing Statement"}
                        </h2>

                        <p className='text-gray-600'>
                            {isAr ? "" : (
                                <>
                                    <span className="font-bold">The Meaning of Quality Trading Establishment</span> affirms its commitment to uphold human rights, protect the environment, and foster ethical business practices. We believe that respecting human rights is essential to sustainable growth, trust, and long-term success.
                                </>
                            )}
                        </p>
                    </section>


                </main>
            </div>
        </div>
    );
}
