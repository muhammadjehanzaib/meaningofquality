'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLang } from "@/hooks/useLang";
import CustomerCareSidebar from '@/components/customer-care/CustomerCareSidebar';

export interface FAQItem {
  question: { en: string; ar: string };
  answer: { en: string; ar: string };
}

export interface FAQCategory {
  title: { en: string; ar: string };
  questions: FAQItem[];
}

export default function FAQClient({ categories }: { categories: FAQCategory[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);
  const lang = useLang();
  const isAr = lang === "ar";

  const toggleQuestion = (id: string) => {
    setOpenQuestions((prev) =>
      prev.includes(id) ? prev.filter((q) => q !== id) : [...prev, id]
    );
  };

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      questions: category.questions.filter((q) =>
        (isAr ? q.question.ar : q.question.en)
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50" dir={isAr ? "rtl" : "ltr"}>
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-purple-600">
            {isAr ? "الرئيسية" : "Home"}
          </Link>{" "}
          &gt;{" "}
          <Link href="/customer-care" className="hover:text-purple-600">
            {isAr ? "خدمة العملاء" : "Customer Care"}
          </Link>{" "}
          &gt;{" "}
          <span className="text-gray-900">
            {isAr ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <CustomerCareSidebar />

        <div className="lg:col-span-3 bg-white border rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6">
            {isAr ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
          </h1>

          <input
            type="text"
            placeholder={isAr ? "ابحث في الأسئلة..." : "Search FAQs..."}
            className="w-full mb-8 px-4 py-3 border rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="space-y-8">
            {filteredCategories.map((category, ci) => (
              <div key={ci}>
                <h2 className="text-xl font-semibold mb-4">
                  {isAr ? category.title.ar : category.title.en}
                </h2>

                {category.questions.map((faq, qi) => {
                  const id = `${ci}-${qi}`;
                  const open = openQuestions.includes(id);

                  return (
                    <div key={id} className="border rounded mb-3">
                      <button
                        className="w-full flex justify-between px-4 py-3 font-medium text-start"
                        onClick={() => toggleQuestion(id)}
                        aria-expanded={open}
                      >
                        <span>{isAr ? faq.question.ar : faq.question.en}</span>
                        <span className="shrink-0 ms-2">{open ? "−" : "+"}</span>
                      </button>
                      {open && (
                        <div className="px-4 pb-4 text-gray-600 leading-relaxed">
                          {isAr ? faq.answer.ar : faq.answer.en}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
