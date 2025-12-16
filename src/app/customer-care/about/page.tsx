'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Users, Target, Award } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import { usePathname } from 'next/navigation';

// Sidebar items (dynamic highlight)
const sidebarItems = [
    { id: 'contact', label: 'Contact Us', path: '/customer-care', isActive: false },
    { id: 'about', label: 'About Us', path: '/customer-care/about', isActive: true },
    { id: 'faq', label: 'Frequently Asked Questions', path: '/customer-care/faq', isActive: false },
    { id: 'shopping-guide', label: 'Shopping Guide', path: '/customer-care/shopping-guide', isActive: false },
    { id: 'returns', label: 'Return and Exchange', path: '/customer-care/returns', isActive: false },
    { id: 'privacy', label: 'Privacy Policy', path: '/customer-care/privacy', isActive: false },
];


export default function AboutPage() {
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
                        <span className="text-gray-900">{isAr ? "من نحن" : "About Us"}</span>
                    </nav>
                </div>
            </div>

            {/* Main Layout */}
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
                <main className="lg:col-span-3 space-y-16" dir={isAr ? "rtl" : "ltr"}>
                    {/* Header Section */}
                    <section className="text-center space-y-4">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                            {isAr ? "من نحن" : "About Us"}
                        </h1>
                        <p className="mt-2 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
                            {isAr
                                ? "مؤسسة معنى الجودة للتجارة هي شركة رائدة في توفير الحلول المبتكرة من المواد اللاصقة، والمواد الرغوية، والرشّ للمحترفين في البناء والتصنيع والتوزيع. نركز على الجودة، الأداء، وتجربة العملاء، مع الالتزام بالمعايير الدولية."
                                : "The Meaning of Quality Trading Establishment is a leading provider of innovative adhesives, foams, and aerosol solutions for professional builders, manufacturers, and distributors. We focus on quality, performance, and customer experience, adhering to international standards."}
                        </p>
                    </section>

                    {/* Mission & Vision */}
                    <div className="grid gap-12 md:grid-cols-2 items-center">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold">{isAr ? "مهمتنا" : "Our Mission"}</h2>
                            <p className="text-gray-600 leading-relaxed">
                                {isAr
                                    ? "نسعى لتقديم منتجات موثوقة وعالية الجودة، مدعومة بخبرة فنية شاملة وتدريب متخصص لضمان نجاح عملائنا."
                                    : "We aim to deliver reliable, high-quality products supported by comprehensive technical expertise and specialized training to ensure our clients succeed."}
                            </p>

                            <h2 className="text-2xl font-semibold">{isAr ? "رؤيتنا" : "Our Vision"}</h2>
                            <p className="text-gray-600 leading-relaxed">
                                {isAr
                                    ? "أن نكون الخيار الأول للمحترفين في صناعة البناء والتوزيع عبر تقديم حلول مبتكرة وموثوقة."
                                    : "To be the top choice for professionals in construction and distribution by providing innovative and reliable solutions."}
                            </p>
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/aboutus.jpg"
                                alt={isAr ? "صورة عن الشركة" : "About Us Image"}
                                className="w-full h-full object-cover"
                                width={600}
                                height={400}
                            />
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-center">{isAr ? "لماذا تختارنا" : "Why Choose Us"}</h2>
                        <div className="grid gap-8 sm:grid-cols-3">
                            <FeatureCard
                                icon={<Award className="w-6 h-6" />}
                                title={isAr ? "جودة عالية" : "Premium Quality"}
                                description={isAr
                                    ? "منتجات عالية الجودة مع أداء متسق وموثوق."
                                    : "High-quality products with consistent and reliable performance."}
                            />
                            <FeatureCard
                                icon={<Target className="w-6 h-6" />}
                                title={isAr ? "حلول مبتكرة" : "Innovative Solutions"}
                                description={isAr
                                    ? "مجموعة واسعة من الحلول المتقدمة لتلبية جميع احتياجات العملاء."
                                    : "A wide range of advanced solutions to meet all client needs."}
                            />
                            <FeatureCard
                                icon={<Users className="w-6 h-6" />}
                                title={isAr ? "دعم مستمر" : "Dedicated Support"}
                                description={isAr
                                    ? "فريق دعم فني متاح لتقديم الاستشارات والمساعدة في أي وقت."
                                    : "A dedicated technical support team available to provide guidance and assistance anytime."}
                            />
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <a
                            href="/customer-care"
                            className="inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-sm font-medium text-white shadow-md hover:bg-purple-700 transition"
                        >
                            {isAr ? "تواصل معنا الآن" : "Get in Touch"}
                        </a>
                    </div>
                </main>
            </div>
        </div>
    );
}

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition text-center space-y-4">
            <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-purple-100 text-purple-600">
                {icon}
            </div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    );
}
