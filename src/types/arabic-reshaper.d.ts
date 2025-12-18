declare module 'arabic-reshaper' {
  export function convertArabic(text: string): string;
  const arabicReshaper = { convertArabic };
  export default arabicReshaper;
}

declare module 'bidi-js' {
  export default function bidiJs(): {
    getVisualText(text: string): string;
  };
}

