'use client';

import Link from 'next/link';
import { useLang } from "@/hooks/useLang";
import CustomerCareSidebar from '@/components/customer-care/CustomerCareSidebar';



export default function SupplierIncentiveProcessDescription() {
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
                            {isAr ? "وصف عملية تحفيز الموردين" : "Supplier Incentive Process Description"}
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
                            {isAr ? "وصف عملية تحليل حقوق الإنسان" : "Supplier Incentive Process Description"}
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
                            {isAr ? "" : "To encourage suppliers to comply with human rights, labor, and ethical business standards."}
                        </p>

                    </section>

                    {/* 2. Risk Analysis Process */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "العملية" : "Process"}
                        </h2>
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "" : "1. Supplier Agreements"}
                        </h2>

                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>{isAr ? "" : "Regular reviews of supplier practices are conducted (documentation, audits, or certifications)."}</li>
                            <li>{isAr ? "" : "Non-compliant suppliers are flagged for corrective action."}</li>
                        </ul>

                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "" : "3. Incentives for Compliant Suppliers"}
                        </h2>

                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>{isAr ? "" : "Preference in procurement decisions (priority orders)."}</li>
                            <li>{isAr ? "" : "Longer-term business relationships and contract renewals."}</li>
                            <li>{isAr ? "" : `Recognition as "\preferred suppliers"\ in internal records.`}</li>
                        </ul>

                    </section>


                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "" : "4. Continuous Improvement"}
                        </h2>

                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>{isAr ? "" : "Feedback is shared with suppliers to strengthen compliance."}</li>
                            <li>{isAr ? "" : "Suppliers demonstrating strong ethical practices are prioritized in future sourcing."}</li>
                        </ul>
                    </section>

                    {/* 1. Respect for Human Rights */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            {isAr ? "" : "Evidence"}
                        </h2>

                        <p className="text-gray-600">
                            {isAr
                                ? ""
                                : (
                                    <>
                                        This process is documented in our{" "}
                                        <Link
                                            href="/customer-care/humanRightPolicy"
                                            target="_blank"
                                            className="text-purple-600 underline hover:text-purple-700 font-medium"
                                        >
                                            Human Rights Policy (Paragraph 7)
                                        </Link>{" "}
                                        and applied in supplier selection and evaluation.
                                    </>
                                )}
                        </p>


                    </section>



                </main>
            </div>
        </div>
    );
}
