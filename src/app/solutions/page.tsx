"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { solutions } from "@/data/catalog";
import { solutionIconById, solutionThemeById } from "@/data/assets";
import { useLang } from "@/hooks/useLang";
import { pick } from "@/data/i18n";
import { t } from "@/data/labels";

export default function SolutionsPage() {
  const lang = useLang();
  return (
    <div className="py-14 sm:py-16">
      <Container className="max-w-5xl">
        <h1 className="text-3xl font-bold tracking-tight">{t("solutions", lang)}</h1>
        <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
          {t("solutionsIntro", lang)}
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {solutions.map((s) => {
            const theme = solutionThemeById[s.id] ?? { bg: "bg-slate-50", ring: "ring-slate-200", text: "text-slate-700" };
            return (
              <a
                key={s.id}
                href={`/#solutions`}
                className="group rounded-lg border border-black/5 bg-background p-6 hover:shadow-md transition-colors text-center"
              >
                <div className={`h-[50px] w-[50px] rounded-2xl ring-1 ${theme.ring} ${theme.bg} ${theme.hoverRing} ${theme.hoverBg} grid place-items-center mx-auto transition-colors`}>
                  {solutionIconById[s.id] ? (
                    <div className="relative h-[35px] w-[35px] transition-transform group-hover:scale-105">
                      <Image
                        src={solutionIconById[s.id]}
                        alt={`${pick(s.title, lang)} icon`}
                        fill
                        sizes="35px"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="h-[35px] w-[35px] rounded bg-primary/10" />
                  )}
                </div>
                <h3 className={`mt-4 text-sm font-medium ${theme.text} ${theme.hoverText} transition-colors`}>{pick(s.title, lang)}</h3>
              </a>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
