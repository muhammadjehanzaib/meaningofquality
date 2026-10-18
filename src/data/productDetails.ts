// import type { LString } from "@/data/i18n";

// export type PackagingRow = {
//   stockCode?: string;
//   productCode?: string;
//   type?: string;
//   volume?: string;
//   boxQty?: string;
// };

// export type ProductSpecification = {
//   specification: string | LString;
//   value: string | LString;
// };

// export type TechnicalSpecification = {
//   title?: string | LString;
//   description?: string | LString;
// };

// export type ProductDetail = {
//   description?: string | LString;
//   properties?: Array<string | LString>;
//   applications?: Array<string | LString>;
//   productSpecs?: ProductSpecification[];
//   technicalSpecs?: TechnicalSpecification[];
//   packaging?: PackagingRow[];
//   tdsUrl?: string;
//   sdsUrl?: string;
//   isNew?: boolean;
//   images?: string[];
// };

// export const productDetailsById: Record<string, ProductDetail> = {
//   "brad-nails-f10": {
//     isNew: true,
//     description: { en: "Sultan F10 18-gauge straight brad nail for precision finishing and delicate wood trim.", ar: "مسمار سلطان F10 مستقيم مقاس 18 للتشطيبات الدقيقة والزخارف الخشبية." },
//     properties: [
//       { en: "18 Gauge (1.25 mm) wire.", ar: "سلك بمقاس 18 (1.25 مم)." },
//       { en: "Length: 10 mm. Head size: 1.9 mm.", ar: "الطول: 10 مم. حجم الرأس: 1.9 مم." }
//     ],
//     applications: [
//       { en: "Delicate wood trim and decorative moldings.", ar: "الزخارف الخشبية الدقيقة والقوالب الزخرفية." },
//       { en: "Light veneer fastening and small picture frames.", ar: "تثبيت القشرة الخشبية الخفيفة وإطارات الصور الصغيرة." }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"مقياس السلك"}, value: {"en":"18 Gauge (1.25 mm)","ar":"مقاس 18 (1.25 مم)"} },
//       { specification: {"en":"Length","ar":"الطول"}, value: "10 mm" },
//       { specification: {"en":"Head Size","ar":"حجم الرأس"}, value: "1.9 mm" },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: "9.0 kg" }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Fastener type","ar":"نوع المثبّت"}, description: {"en":"18-gauge straight brad nail for finishing work, wood trim, moulding and furniture or cabinet assembly, according to the specific application listed above.","ar":"مسمار براد مستقيم عيار 18 لأعمال التشطيب والزخارف الخشبية والقوالب وتجميع الأثاث أو الخزائن، وفقًا للاستخدام المحدد أعلاه."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "F10", type: "18GA Straight Brad Nail", volume: "10 mm", boxQty: "5,000 pcs/box × 20 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073296472/brad-nails-f10_1792250260167_v2y8o6.png"
//     ]
//   },
//   "brad-nails-f15": {
//     isNew: true,
//     description: { en: "Sultan F15 18-gauge straight brad nail for furniture trim and lightweight paneling.", ar: "مسمار سلطان F15 مستقيم مقاس 18 لتشطيبات الأثاث والألواح الخفيفة." },
//     properties: [
//       { en: "18 Gauge (1.25 mm) wire.", ar: "سلك بمقاس 18 (1.25 مم)." },
//       { en: "Length: 15 mm. Head size: 1.9 mm.", ar: "الطول: 15 مم. حجم الرأس: 1.9 مم." }
//     ],
//     applications: [
//       { en: "Furniture decorative trim.", ar: "الزخارف والتشطيبات التجميلية للأثاث." },
//       { en: "Lightweight paneling and delicate drawer assemblies.", ar: "الألواح الخفيفة وتجميع الأدراج الدقيقة." }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"مقياس السلك"}, value: "18 Gauge (1.25 mm)" },
//       { specification: {"en":"Length","ar":"الطول"}, value: "15 mm" },
//       { specification: {"en":"Head Size","ar":"حجم الرأس"}, value: "1.9 mm" },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: "12.7 kg" }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Fastener type","ar":"نوع المثبّت"}, description: {"en":"18-gauge straight brad nail for finishing work, wood trim, moulding and furniture or cabinet assembly, according to the specific application listed above.","ar":"مسمار براد مستقيم عيار 18 لأعمال التشطيب والزخارف الخشبية والقوالب وتجميع الأثاث أو الخزائن، وفقًا للاستخدام المحدد أعلاه."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "F15", type: "18GA Straight Brad Nail", volume: "15 mm", boxQty: "5,000 pcs/box × 20 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073296472/brad-nails-f15_1792250268303_ev89hz.png"
//     ]
//   },
//   "brad-nails-f20": {
//     isNew: true,
//     description: { en: "Sultan F20 18-gauge straight brad nail for interior casing, cabinet trim and light furniture components.", ar: "مسمار سلطان F20 مستقيم مقاس 18 لإطارات الأبواب الداخلية وتشطيبات الخزائن ومكونات الأثاث الخفيفة." },
//     properties: [
//       { en: "18 Gauge (1.25 mm) wire.", ar: "سلك بمقاس 18 (1.25 مم)." },
//       { en: "Length: 20 mm. Head size: 1.9 mm.", ar: "الطول: 20 مم. حجم الرأس: 1.9 مم." }
//     ],
//     applications: [
//       { en: "Standard interior casing.", ar: "إطارات الأبواب الداخلية القياسية." },
//       { en: "Cabinet door lip molding and light chair components.", ar: "قوالب حواف أبواب الخزائن ومكونات الكراسي الخفيفة." }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"مقياس السلك"}, value: "18 Gauge (1.25 mm)" },
//       { specification: {"en":"Length","ar":"الطول"}, value: "20 mm" },
//       { specification: {"en":"Head Size","ar":"حجم الرأس"}, value: "1.9 mm" },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: "15.8 kg" }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Fastener type","ar":"نوع المثبّت"}, description: {"en":"18-gauge straight brad nail for finishing work, wood trim, moulding and furniture or cabinet assembly, according to the specific application listed above.","ar":"مسمار براد مستقيم عيار 18 لأعمال التشطيب والزخارف الخشبية والقوالب وتجميع الأثاث أو الخزائن، وفقًا للاستخدام المحدد أعلاه."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "F20", type: "18GA Straight Brad Nail", volume: "20 mm", boxQty: "5,000 pcs/box × 20 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073296472/brad-nails-f20_1792250276101_a3iunw.png"
//     ]
//   },
//   "brad-nails-f25": {
//     isNew: true,
//     description: { en: "Sultan F25 18-gauge straight brad nail for furniture joinery and wood assembly.", ar: "مسمار سلطان F25 مستقيم مقاس 18 لنجارة الأثاث وتجميع الأخشاب." },
//     properties: [
//       { en: "18 Gauge (1.25 mm) wire.", ar: "سلك بمقاس 18 (1.25 مم)." },
//       { en: "Length: 25 mm. Head size: 1.9 mm.", ar: "الطول: 25 مم. حجم الرأس: 1.9 مم." }
//     ],
//     applications: [
//       { en: "Softwood and hardwood furniture manufacturing.", ar: "تصنيع الأثاث من الأخشاب اللينة والصلبة." },
//       { en: "Window frames and drawer boxes.", ar: "إطارات النوافذ وصناديق الأدراج." }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"مقياس السلك"}, value: "18 Gauge (1.25 mm)" },
//       { specification: {"en":"Length","ar":"الطول"}, value: "25 mm" },
//       { specification: {"en":"Head Size","ar":"حجم الرأس"}, value: "1.9 mm" },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: "19.9 kg" }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Fastener type","ar":"نوع المثبّت"}, description: {"en":"18-gauge straight brad nail for finishing work, wood trim, moulding and furniture or cabinet assembly, according to the specific application listed above.","ar":"مسمار براد مستقيم عيار 18 لأعمال التشطيب والزخارف الخشبية والقوالب وتجميع الأثاث أو الخزائن، وفقًا للاستخدام المحدد أعلاه."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "F25", type: "18GA Straight Brad Nail", volume: "25 mm", boxQty: "5,000 pcs/box × 20 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073296472/brad-nails-f25_1792250283395_1fapol.png"
//     ]
//   },
//   "brad-nails-f30": {
//     isNew: true,
//     description: { en: "Sultan F30 18-gauge straight brad nail for cabinet panels and thick decorative molding.", ar: "مسمار سلطان F30 مستقيم مقاس 18 لألواح الخزائن والقوالب الزخرفية السميكة." },
//     properties: [
//       { en: "18 Gauge (1.25 mm) wire.", ar: "سلك بمقاس 18 (1.25 مم)." },
//       { en: "Length: 30 mm. Head size: 1.9 mm.", ar: "الطول: 30 مم. حجم الرأس: 1.9 مم." }
//     ],
//     applications: [
//       { en: "Cabinet back-panel attachment.", ar: "تثبيت الألواح الخلفية للخزائن." },
//       { en: "Thick decorative wood molding and door frames.", ar: "القوالب الخشبية الزخرفية السميكة وإطارات الأبواب." }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"مقياس السلك"}, value: "18 Gauge (1.25 mm)" },
//       { specification: {"en":"Length","ar":"الطول"}, value: "30 mm" },
//       { specification: {"en":"Head Size","ar":"حجم الرأس"}, value: "1.9 mm" },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: "23.35 kg" }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Fastener type","ar":"نوع المثبّت"}, description: {"en":"18-gauge straight brad nail for finishing work, wood trim, moulding and furniture or cabinet assembly, according to the specific application listed above.","ar":"مسمار براد مستقيم عيار 18 لأعمال التشطيب والزخارف الخشبية والقوالب وتجميع الأثاث أو الخزائن، وفقًا للاستخدام المحدد أعلاه."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "F30", type: "18GA Straight Brad Nail", volume: "30 mm", boxQty: "5,000 pcs/box × 20 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073296472/brad-nails-f30_1792250291382_51qq02.png"
//     ]
//   },
//   "brad-nails-f35": {
//     isNew: true,
//     description: { en: "Sultan F35 18-gauge straight brad nail for panel installation and commercial cabinetry.", ar: "مسمار سلطان F35 مستقيم مقاس 18 لتركيب الألواح وصناعة الخزائن التجارية." },
//     properties: [
//       { en: "18 Gauge (1.25 mm) wire.", ar: "سلك بمقاس 18 (1.25 مم)." },
//       { en: "Length: 35 mm. Head size: 1.9 mm.", ar: "الطول: 35 مم. حجم الرأس: 1.9 مم." }
//     ],
//     applications: [
//       { en: "Chair rails and paneling installation.", ar: "تركيب حواجز الكراسي والألواح." },
//       { en: "Commercial cabinet construction.", ar: "تصنيع الخزائن التجارية." }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"مقياس السلك"}, value: "18 Gauge (1.25 mm)" },
//       { specification: {"en":"Length","ar":"الطول"}, value: "35 mm" },
//       { specification: {"en":"Head Size","ar":"حجم الرأس"}, value: "1.9 mm" },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: "17.9 kg" }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Fastener type","ar":"نوع المثبّت"}, description: {"en":"18-gauge straight brad nail for finishing work, wood trim, moulding and furniture or cabinet assembly, according to the specific application listed above.","ar":"مسمار براد مستقيم عيار 18 لأعمال التشطيب والزخارف الخشبية والقوالب وتجميع الأثاث أو الخزائن، وفقًا للاستخدام المحدد أعلاه."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "F35", type: "18GA Straight Brad Nail", volume: "35 mm", boxQty: "5,000 pcs/box × 12 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073296472/brad-nails-f35_1792250336833_k9z3at.png"
//     ]
//   },
//   "brad-nails-f40": {
//     isNew: true,
//     description: { en: "Sultan F40 18-gauge straight brad nail for heavy molding, door jambs and hardwood furniture trim.", ar: "مسمار سلطان F40 مستقيم مقاس 18 للقوالب الثقيلة وإطارات الأبواب وتشطيبات الأثاث الخشبي الصلب." },
//     properties: [
//       { en: "18 Gauge (1.25 mm) wire.", ar: "سلك بمقاس 18 (1.25 مم)." },
//       { en: "Length: 40 mm. Head size: 1.9 mm.", ar: "الطول: 40 مم. حجم الرأس: 1.9 مم." }
//     ],
//     applications: [
//       { en: "Heavy crown molding and door jambs.", ar: "قوالب التاج الثقيلة وإطارات الأبواب." },
//       { en: "Solid hardwood furniture trim.", ar: "تشطيبات الأثاث المصنوع من الخشب الصلب." }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"مقياس السلك"}, value: "18 Gauge (1.25 mm)" },
//       { specification: {"en":"Length","ar":"الطول"}, value: "40 mm" },
//       { specification: {"en":"Head Size","ar":"حجم الرأس"}, value: "1.9 mm" },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: "18.6 kg" }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Fastener type","ar":"نوع المثبّت"}, description: {"en":"18-gauge straight brad nail for finishing work, wood trim, moulding and furniture or cabinet assembly, according to the specific application listed above.","ar":"مسمار براد مستقيم عيار 18 لأعمال التشطيب والزخارف الخشبية والقوالب وتجميع الأثاث أو الخزائن، وفقًا للاستخدام المحدد أعلاه."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "F40", type: "18GA Straight Brad Nail", volume: "40 mm", boxQty: "5,000 pcs/box × 12 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073296472/brad-nails-f40_1792250321048_c1cbdb.png"
//     ]
//   },
//   "brad-nails-f40-heavy-duty": {
//     isNew: true,
//     description: { en: "Sultan F40 Heavy-Duty 18-gauge brad nail for heavy architectural millwork and solid timber furniture framing.", ar: "مسمار سلطان F40 شديد التحمل مقاس 18 لأعمال النجارة المعمارية الثقيلة وهياكل الأثاث المصنوع من الخشب الصلب." },
//     properties: [
//       { en: "18 Gauge (1.25 mm) wire.", ar: "سلك بمقاس 18 (1.25 مم)." },
//       { en: "Length: 40 mm. Head size: 1.9 mm.", ar: "الطول: 40 مم. حجم الرأس: 1.9 مم." }
//     ],
//     applications: [
//       { en: "Heavy architectural millwork.", ar: "أعمال النجارة المعمارية الثقيلة." },
//       { en: "Solid timber furniture framing.", ar: "هياكل الأثاث المصنوع من الخشب الصلب." }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"مقياس السلك"}, value: "18 Gauge (1.25 mm)" },
//       { specification: {"en":"Length","ar":"الطول"}, value: "40 mm" },
//       { specification: {"en":"Head Size","ar":"حجم الرأس"}, value: "1.9 mm" },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: "20.2 kg" }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Fastener type","ar":"نوع المثبّت"}, description: {"en":"18-gauge heavy-duty brad nail intended for heavy architectural millwork and solid timber furniture framing, according to the supplied product information.","ar":"مسمار براد شديد التحمل عيار 18 مخصص لأعمال النجارة المعمارية الثقيلة وهياكل الأثاث المصنوع من الخشب الصلب، وفقًا لمعلومات المنتج المقدمة."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "F40", type: "18GA Heavy-Duty Brad", volume: "40 mm", boxQty: "5,000 pcs/box × 12 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073296472/brad-nails-f40-heavy-duty_1792251238345_lkvttr.png"
//     ]
//   },
//   "brad-nails-f45": {
//     isNew: true,
//     description: { en: "Sultan F45 18-gauge straight brad nail for deep timber joinery and heavy furniture structures.", ar: "مسمار سلطان F45 مستقيم مقاس 18 لوصلات الأخشاب العميقة وهياكل الأثاث الثقيلة." },
//     properties: [
//       { en: "18 Gauge (1.25 mm) wire.", ar: "سلك بمقاس 18 (1.25 مم)." },
//       { en: "Length: 45 mm. Head size: 1.9 mm.", ar: "الطول: 45 مم. حجم الرأس: 1.9 مم." }
//     ],
//     applications: [
//       { en: "Deep timber joinery and wooden window frames.", ar: "وصلات الأخشاب العميقة وإطارات النوافذ الخشبية." },
//       { en: "Heavy decorative furniture structures.", ar: "هياكل الأثاث الزخرفية الثقيلة." }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"مقياس السلك"}, value: "18 Gauge (1.25 mm)" },
//       { specification: {"en":"Length","ar":"الطول"}, value: "45 mm" },
//       { specification: {"en":"Head Size","ar":"حجم الرأس"}, value: "1.9 mm" },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: "23.3 kg" }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Fastener type","ar":"نوع المثبّت"}, description: {"en":"18-gauge straight brad nail for finishing work, wood trim, moulding and furniture or cabinet assembly, according to the specific application listed above.","ar":"مسمار براد مستقيم عيار 18 لأعمال التشطيب والزخارف الخشبية والقوالب وتجميع الأثاث أو الخزائن، وفقًا للاستخدام المحدد أعلاه."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "F45", type: "18GA Straight Brad Nail", volume: "45 mm", boxQty: "5,000 pcs/box × 12 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073296472/brad-nails-f45_1792250352102_oa8m8m.png"
//     ]
//   },
//   "brad-nails-f50": {
//     isNew: true,
//     description: { en: "Sultan F50 18-gauge straight brad nail for deep fastening in heavy solid wood frame assemblies.", ar: "مسمار سلطان F50 مستقيم مقاس 18 للتثبيت العميق في هياكل الإطارات الخشبية الصلبة الثقيلة." },
//     properties: [
//       { en: "18 Gauge (1.25 mm) wire.", ar: "سلك بمقاس 18 (1.25 مم)." },
//       { en: "Length: 50 mm. Head size: 1.9 mm.", ar: "الطول: 50 مم. حجم الرأس: 1.9 مم." }
//     ],
//     applications: [
//       { en: "Maximum-depth fastening.", ar: "أعمال التثبيت بأقصى عمق." },
//       { en: "Heavy solid wood frame assembly and timber finishing.", ar: "تجميع الإطارات الخشبية الصلبة الثقيلة وتشطيب الأخشاب." }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"مقياس السلك"}, value: "18 Gauge (1.25 mm)" },
//       { specification: {"en":"Length","ar":"الطول"}, value: "50 mm" },
//       { specification: {"en":"Head Size","ar":"حجم الرأس"}, value: "1.9 mm" },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: "25.5 kg" }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Fastener type","ar":"نوع المثبّت"}, description: {"en":"18-gauge straight brad nail for finishing work, wood trim, moulding and furniture or cabinet assembly, according to the specific application listed above.","ar":"مسمار براد مستقيم عيار 18 لأعمال التشطيب والزخارف الخشبية والقوالب وتجميع الأثاث أو الخزائن، وفقًا للاستخدام المحدد أعلاه."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "F50", type: "18GA Straight Brad Nail", volume: "50 mm", boxQty: "5,000 pcs/box × 12 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073296472/brad-nails-f50_1792250363213_lt654m.png"
//     ]
//   },
//   "u-nails-5540": {
//     isNew: true,
//     description: { en: "Sultan 5540 is a 55 Series wide crown staple designed for packaging and crating applications. It has a 40 mm leg length and a 26.5 mm crown.", ar: "دبوس سلطان 5540 من سلسلة 55 ذو تاج عريض، مخصص لتطبيقات التغليف والصناديق. يبلغ طول الساق 40 مم وعرض التاج 26.5 مم." },
//     properties: [
//       { en: "55 Series Wide Crown Staple", ar: "دبوس من سلسلة 55 بتاج عريض" },
//       { en: "16 Gauge (1.60 mm)", ar: "عيار 16 (1.60 مم)" },
//       { en: "Leg length: 40 mm", ar: "طول الساق: 40 مم" },
//       { en: "Crown width: 26.5 mm", ar: "عرض التاج: 26.5 مم" }
//     ],
//     applications: [
//       { en: "Closing heavy furniture shipping cartons", ar: "إغلاق كراتين شحن الأثاث الثقيلة" },
//       { en: "Fastening corrugated boxes to wood", ar: "تثبيت الصناديق المموجة بالخشب" }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"عيار السلك"}, value: {"en":"16 Gauge (1.60 mm)","ar":"عيار 16 (1.60 مم)"} },
//       { specification: {"en":"Leg Length","ar":"طول الساق"}, value: {"en":"40 mm","ar":"40 مم"} },
//       { specification: {"en":"Crown Width","ar":"عرض التاج"}, value: {"en":"26.5 mm","ar":"26.5 مم"} },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: {"en":"11.7 kg","ar":"11.7 كجم"} }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Series application","ar":"استخدام السلسلة"}, description: {"en":"55 Series wide-crown staple for packaging and crating tasks such as closing heavy cartons or fastening corrugated packaging to wood. Confirm exact compatibility with the intended stapler before purchase.","ar":"دبوس من سلسلة 55 بتاج عريض لأعمال التغليف وصناعة الصناديق، مثل إغلاق الكراتين الثقيلة أو تثبيت مواد التغليف المموجة بالخشب. يُرجى التأكد من توافقه مع الدباسة المستخدمة قبل الشراء."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "5540", type: "55 Series Staple", volume: "40 mm", boxQty: "10,000 pcs/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073343435/u-nails-5540_1792249578814_qde8q5.png"
//     ]
//   },
//   "u-nails-5545": {
//     isNew: true,
//     description: { en: "Sultan 5545 is a 55 Series wide crown staple with a 45 mm leg length, intended for industrial furniture crating and export packaging.", ar: "دبوس سلطان 5545 من سلسلة 55 ذو تاج عريض وطول ساق 45 مم، مخصص لصناديق الأثاث الصناعية وتغليف الصادرات." },
//     properties: [
//       { en: "55 Series Wide Crown Staple", ar: "دبوس من سلسلة 55 بتاج عريض" },
//       { en: "16 Gauge (1.60 mm)", ar: "عيار 16 (1.60 مم)" },
//       { en: "Leg length: 45 mm", ar: "طول الساق: 45 مم" },
//       { en: "Crown width: 26.5 mm", ar: "عرض التاج: 26.5 مم" }
//     ],
//     applications: [
//       { en: "Industrial furniture shipping crates", ar: "صناديق شحن الأثاث الصناعي" },
//       { en: "Export packaging and heavy carton sealing", ar: "تغليف الصادرات وإغلاق الكراتين الثقيلة" }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"عيار السلك"}, value: {"en":"16 Gauge (1.60 mm)","ar":"عيار 16 (1.60 مم)"} },
//       { specification: {"en":"Leg Length","ar":"طول الساق"}, value: {"en":"45 mm","ar":"45 مم"} },
//       { specification: {"en":"Crown Width","ar":"عرض التاج"}, value: {"en":"26.5 mm","ar":"26.5 مم"} },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: {"en":"13.2 kg","ar":"13.2 كجم"} }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Series application","ar":"استخدام السلسلة"}, description: {"en":"55 Series wide-crown staple for packaging and crating tasks such as closing heavy cartons or fastening corrugated packaging to wood. Confirm exact compatibility with the intended stapler before purchase.","ar":"دبوس من سلسلة 55 بتاج عريض لأعمال التغليف وصناعة الصناديق، مثل إغلاق الكراتين الثقيلة أو تثبيت مواد التغليف المموجة بالخشب. يُرجى التأكد من توافقه مع الدباسة المستخدمة قبل الشراء."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "5545", type: "55 Series Staple", volume: "45 mm", boxQty: "10,000 pcs/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073343435/u-nails-5545_1792249652856_w2vowh.png"
//     ]
//   },
//   "u-nails-5550": {
//     isNew: true,
//     description: { en: "Sultan 5550 is a 55 Series wide crown staple with a 50 mm leg length for wooden pallet top-caps, heavy timber ties and industrial shipping containers.", ar: "دبوس سلطان 5550 من سلسلة 55 ذو تاج عريض وطول ساق 50 مم، مناسب لأغطية الطبالي الخشبية ووصلات الأخشاب الثقيلة وحاويات الشحن الصناعية." },
//     properties: [
//       { en: "55 Series Wide Crown Staple", ar: "دبوس من سلسلة 55 بتاج عريض" },
//       { en: "16 Gauge (1.60 mm)", ar: "عيار 16 (1.60 مم)" },
//       { en: "Leg length: 50 mm", ar: "طول الساق: 50 مم" },
//       { en: "Crown width: 26.5 mm", ar: "عرض التاج: 26.5 مم" }
//     ],
//     applications: [
//       { en: "Wooden pallet top-caps", ar: "أغطية الطبالي الخشبية" },
//       { en: "Heavy timber ties and industrial shipping containers", ar: "وصلات الأخشاب الثقيلة وحاويات الشحن الصناعية" }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"عيار السلك"}, value: {"en":"16 Gauge (1.60 mm)","ar":"عيار 16 (1.60 مم)"} },
//       { specification: {"en":"Leg Length","ar":"طول الساق"}, value: {"en":"50 mm","ar":"50 مم"} },
//       { specification: {"en":"Crown Width","ar":"عرض التاج"}, value: {"en":"26.5 mm","ar":"26.5 مم"} },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: {"en":"14.5 kg","ar":"14.5 كجم"} }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Series application","ar":"استخدام السلسلة"}, description: {"en":"55 Series wide-crown staple for packaging and crating tasks such as closing heavy cartons or fastening corrugated packaging to wood. Confirm exact compatibility with the intended stapler before purchase.","ar":"دبوس من سلسلة 55 بتاج عريض لأعمال التغليف وصناعة الصناديق، مثل إغلاق الكراتين الثقيلة أو تثبيت مواد التغليف المموجة بالخشب. يُرجى التأكد من توافقه مع الدباسة المستخدمة قبل الشراء."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "5550", type: "55 Series Staple", volume: "50 mm", boxQty: "10,000 pcs/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073343435/u-nails-5550_1792249662083_bvapd5.png"
//     ]
//   },
//   "u-nails-8006": {
//     isNew: true,
//     description: { en: "Sultan 8006 fine crown staples designed for delicate upholstery fabric, velvet and silk lining, poster board and thin dust covers.", ar: "دبابيس سلطان 8006 ذات التاج الدقيق، مصممة لأقمشة التنجيد الرقيقة وبطانات المخمل والحرير وألواح الملصقات وأغطية الغبار الرقيقة." },
//     properties: [
//       { en: "21 Gauge (0.91 mm) wire.", ar: "سلك بمقاس 21 (0.91 مم)." },
//       { en: "Leg length: 6 mm. Crown width: 12.8 mm.", ar: "طول الساق: 6 مم. عرض التاج: 12.8 مم." }
//     ],
//     applications: [
//       { en: "Delicate upholstery fabric.", ar: "أقمشة التنجيد الرقيقة." },
//       { en: "Velvet and silk lining.", ar: "بطانات المخمل والحرير." },
//       { en: "Poster board and thin dust covers.", ar: "ألواح الملصقات وأغطية الغبار الرقيقة." }
//     ],
//     productSpecs: [
//       { specification: {"en":"Series","ar":"السلسلة"}, value: "80 Series" },
//       { specification: {"en":"Wire Gauge","ar":"مقياس السلك"}, value: "21 Gauge (0.91 mm)" },
//       { specification: {"en":"Leg Length","ar":"طول الساق"}, value: "6 mm" },
//       { specification: {"en":"Crown Width","ar":"عرض التاج"}, value: "12.8 mm" },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: "17.7 kg" }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "8006", type: "80 Series Fine Crown Staple", volume: "6 mm", boxQty: "10,000 pcs/box × 20 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073343435/u-nails-8006_1792251601924_wzkajs.png"
//     ]
//   },
//   "u-nails-8008": {
//     isNew: true,
//     description: { en: "Sultan 8008 is an 80 Series fine crown staple with an 8 mm leg length for sofa padding, insulation materials, foam layers and carpet underlayment.", ar: "دبوس سلطان 8008 من سلسلة 80 بتاج دقيق وطول ساق 8 مم، مناسب لحشو الأرائك ومواد العزل وطبقات الإسفنج والطبقة السفلية للسجاد." },
//     properties: [
//       { en: "80 Series Fine Crown Staple", ar: "دبوس من سلسلة 80 بتاج دقيق" },
//       { en: "21 Gauge (0.91 mm)", ar: "عيار 21 (0.91 مم)" },
//       { en: "Leg length: 8 mm", ar: "طول الساق: 8 مم" },
//       { en: "Crown width: 12.8 mm", ar: "عرض التاج: 12.8 مم" }
//     ],
//     applications: [
//       { en: "Sofa padding and foam layer attachment", ar: "حشو الأرائك وتثبيت طبقات الإسفنج" },
//       { en: "Insulation materials and carpet underlayment", ar: "مواد العزل والطبقة السفلية للسجاد" }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"عيار السلك"}, value: {"en":"21 Gauge (0.91 mm)","ar":"عيار 21 (0.91 مم)"} },
//       { specification: {"en":"Leg Length","ar":"طول الساق"}, value: {"en":"8 mm","ar":"8 مم"} },
//       { specification: {"en":"Crown Width","ar":"عرض التاج"}, value: {"en":"12.8 mm","ar":"12.8 مم"} },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: {"en":"20.86 kg","ar":"20.86 كجم"} }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Series application","ar":"استخدام السلسلة"}, description: {"en":"80 Series fine-crown staple for upholstery and furniture work. The listed leg length helps buyers distinguish sizes; confirm stapler compatibility and material requirements before ordering.","ar":"دبوس من سلسلة 80 بتاج دقيق لأعمال التنجيد والأثاث. يساعد طول الساق المذكور في التمييز بين المقاسات؛ يُرجى التأكد من توافقه مع الدباسة ومتطلبات المواد قبل الطلب."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "8008", type: "80 Series Staple", volume: "8 mm", boxQty: "10,000 pcs/box × 20 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073343435/u-nails-8008_1792249739067_nvxph8.png"
//     ]
//   },
//   "u-nails-8010": {
//     isNew: true,
//     description: { en: "Sultan 8010 is an 80 Series fine crown staple with a 10 mm leg length for fabric-to-hardwood upholstery, chair seating and picture frame backing.", ar: "دبوس سلطان 8010 من سلسلة 80 بتاج دقيق وطول ساق 10 مم، مناسب لتثبيت الأقمشة على الخشب الصلب ومقاعد الكراسي وظهور إطارات الصور." },
//     properties: [
//       { en: "80 Series Fine Crown Staple", ar: "دبوس من سلسلة 80 بتاج دقيق" },
//       { en: "21 Gauge (0.91 mm)", ar: "عيار 21 (0.91 مم)" },
//       { en: "Leg length: 10 mm", ar: "طول الساق: 10 مم" },
//       { en: "Crown width: 12.8 mm", ar: "عرض التاج: 12.8 مم" }
//     ],
//     applications: [
//       { en: "Fabric-to-hardwood upholstery", ar: "تثبيت الأقمشة على الخشب الصلب" },
//       { en: "Chair seating and picture frame backing", ar: "مقاعد الكراسي وظهور إطارات الصور" }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"عيار السلك"}, value: {"en":"21 Gauge (0.91 mm)","ar":"عيار 21 (0.91 مم)"} },
//       { specification: {"en":"Leg Length","ar":"طول الساق"}, value: {"en":"10 mm","ar":"10 مم"} },
//       { specification: {"en":"Crown Width","ar":"عرض التاج"}, value: {"en":"12.8 mm","ar":"12.8 مم"} },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: {"en":"23.7 kg","ar":"23.7 كجم"} }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Series application","ar":"استخدام السلسلة"}, description: {"en":"80 Series fine-crown staple for upholstery and furniture work. The listed leg length helps buyers distinguish sizes; confirm stapler compatibility and material requirements before ordering.","ar":"دبوس من سلسلة 80 بتاج دقيق لأعمال التنجيد والأثاث. يساعد طول الساق المذكور في التمييز بين المقاسات؛ يُرجى التأكد من توافقه مع الدباسة ومتطلبات المواد قبل الطلب."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "8010", type: "80 Series Staple", volume: "10 mm", boxQty: "10,000 pcs/box × 20 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073343435/u-nails-8010_1792249747267_cjfdt6.png"
//     ]
//   },
//   "u-nails-8012": {
//     isNew: true,
//     description: { en: "Sultan 8012 is an 80 Series fine crown staple with a 12 mm leg length for multi-layer fabric, thick foam padding and furniture re-upholstery.", ar: "دبوس سلطان 8012 من سلسلة 80 بتاج دقيق وطول ساق 12 مم، مناسب للأقمشة متعددة الطبقات وحشوات الإسفنج السميكة وتجديد تنجيد الأثاث." },
//     properties: [
//       { en: "80 Series Fine Crown Staple", ar: "دبوس من سلسلة 80 بتاج دقيق" },
//       { en: "21 Gauge (0.91 mm)", ar: "عيار 21 (0.91 مم)" },
//       { en: "Leg length: 12 mm", ar: "طول الساق: 12 مم" },
//       { en: "Crown width: 12.8 mm", ar: "عرض التاج: 12.8 مم" }
//     ],
//     applications: [
//       { en: "Multi-layer thick fabric", ar: "الأقمشة السميكة متعددة الطبقات" },
//       { en: "Thick foam padding and furniture re-upholstery", ar: "حشوات الإسفنج السميكة وتجديد تنجيد الأثاث" }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"عيار السلك"}, value: {"en":"21 Gauge (0.91 mm)","ar":"عيار 21 (0.91 مم)"} },
//       { specification: {"en":"Leg Length","ar":"طول الساق"}, value: {"en":"12 mm","ar":"12 مم"} },
//       { specification: {"en":"Crown Width","ar":"عرض التاج"}, value: {"en":"12.8 mm","ar":"12.8 مم"} },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: {"en":"27.24 kg","ar":"27.24 كجم"} }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Series application","ar":"استخدام السلسلة"}, description: {"en":"80 Series fine-crown staple for upholstery and furniture work. The listed leg length helps buyers distinguish sizes; confirm stapler compatibility and material requirements before ordering.","ar":"دبوس من سلسلة 80 بتاج دقيق لأعمال التنجيد والأثاث. يساعد طول الساق المذكور في التمييز بين المقاسات؛ يُرجى التأكد من توافقه مع الدباسة ومتطلبات المواد قبل الطلب."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "8012", type: "80 Series Staple", volume: "12 mm", boxQty: "10,000 pcs/box × 20 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073343435/u-nails-8012_1792249753424_tqockc.png"
//     ]
//   },
//   "u-nails-8014": {
//     isNew: true,
//     description: { en: "Sultan 8014 is an 80 Series fine crown staple with a 14 mm leg length for heavy-duty sofa upholstery, wooden crate linings, bedding and mattress assembly.", ar: "دبوس سلطان 8014 من سلسلة 80 بتاج دقيق وطول ساق 14 مم، مناسب لتنجيد الأرائك الثقيل وبطانات الصناديق الخشبية وتجميع الفراش والمراتب." },
//     properties: [
//       { en: "80 Series Fine Crown Staple", ar: "دبوس من سلسلة 80 بتاج دقيق" },
//       { en: "21 Gauge (0.91 mm)", ar: "عيار 21 (0.91 مم)" },
//       { en: "Leg length: 14 mm", ar: "طول الساق: 14 مم" },
//       { en: "Crown width: 12.8 mm", ar: "عرض التاج: 12.8 مم" }
//     ],
//     applications: [
//       { en: "Heavy-duty sofa upholstery", ar: "تنجيد الأرائك الثقيل" },
//       { en: "Wooden crate linings, bedding and mattress assembly", ar: "بطانات الصناديق الخشبية وتجميع الفراش والمراتب" }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"عيار السلك"}, value: {"en":"21 Gauge (0.91 mm)","ar":"عيار 21 (0.91 مم)"} },
//       { specification: {"en":"Leg Length","ar":"طول الساق"}, value: {"en":"14 mm","ar":"14 مم"} },
//       { specification: {"en":"Crown Width","ar":"عرض التاج"}, value: {"en":"12.8 mm","ar":"12.8 مم"} },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: {"en":"16.52 kg","ar":"16.52 كجم"} }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Series application","ar":"استخدام السلسلة"}, description: {"en":"80 Series fine-crown staple for upholstery and furniture work. The listed leg length helps buyers distinguish sizes; confirm stapler compatibility and material requirements before ordering.","ar":"دبوس من سلسلة 80 بتاج دقيق لأعمال التنجيد والأثاث. يساعد طول الساق المذكور في التمييز بين المقاسات؛ يُرجى التأكد من توافقه مع الدباسة ومتطلبات المواد قبل الطلب."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "8014", type: "80 Series Staple", volume: "14 mm", boxQty: "10,000 pcs/box × 10 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073343435/u-nails-8014_1792249789558_esf7c8.png"
//     ]
//   },
//   "u-nails-8016": {
//     isNew: true,
//     description: { en: "Sultan 8016 is an 80 Series fine crown staple with a 16 mm leg length for deeper penetration into hardwood frames and multi-layer dense padding.", ar: "دبوس سلطان 8016 من سلسلة 80 بتاج دقيق وطول ساق 16 مم، مناسب للاختراق الأعمق في إطارات الخشب الصلب والحشوات الكثيفة متعددة الطبقات." },
//     properties: [
//       { en: "80 Series Fine Crown Staple", ar: "دبوس من سلسلة 80 بتاج دقيق" },
//       { en: "21 Gauge (0.91 mm)", ar: "عيار 21 (0.91 مم)" },
//       { en: "Leg length: 16 mm", ar: "طول الساق: 16 مم" },
//       { en: "Crown width: 12.8 mm", ar: "عرض التاج: 12.8 مم" }
//     ],
//     applications: [
//       { en: "Hardwood furniture frames", ar: "إطارات الأثاث المصنوعة من الخشب الصلب" },
//       { en: "Multi-layer dense padding", ar: "الحشوات الكثيفة متعددة الطبقات" }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"عيار السلك"}, value: {"en":"21 Gauge (0.91 mm)","ar":"عيار 21 (0.91 مم)"} },
//       { specification: {"en":"Leg Length","ar":"طول الساق"}, value: {"en":"16 mm","ar":"16 مم"} },
//       { specification: {"en":"Crown Width","ar":"عرض التاج"}, value: {"en":"12.8 mm","ar":"12.8 مم"} },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: {"en":"18.32 kg","ar":"18.32 كجم"} }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Series application","ar":"استخدام السلسلة"}, description: {"en":"80 Series fine-crown staple for upholstery and furniture work. The listed leg length helps buyers distinguish sizes; confirm stapler compatibility and material requirements before ordering.","ar":"دبوس من سلسلة 80 بتاج دقيق لأعمال التنجيد والأثاث. يساعد طول الساق المذكور في التمييز بين المقاسات؛ يُرجى التأكد من توافقه مع الدباسة ومتطلبات المواد قبل الطلب."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "8016", type: "80 Series Staple", volume: "16 mm", boxQty: "10,000 pcs/box × 10 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073343435/u-nails-8016_1792249797777_ar5obd.png"
//     ]
//   },
//   "u-nails-1008j": {
//     isNew: true,
//     description: { en: "Sultan 1008J is a 10J narrow crown staple with an 8 mm leg length for furniture upholstery, leather and fabric fastening, and light wooden gift boxes.", ar: "دبوس سلطان 1008J من سلسلة 10J بتاج ضيق وطول ساق 8 مم، مناسب لتنجيد الأثاث وتثبيت الجلد والأقمشة والصناديق الخشبية الخفيفة للهدايا." },
//     properties: [
//       { en: "10J Narrow Crown Staple", ar: "دبوس من سلسلة 10J بتاج ضيق" },
//       { en: "20 Gauge (1.20 mm)", ar: "عيار 20 (1.20 مم)" },
//       { en: "Leg length: 8 mm", ar: "طول الساق: 8 مم" },
//       { en: "Crown width: 11.2 mm", ar: "عرض التاج: 11.2 مم" }
//     ],
//     applications: [
//       { en: "Leather upholstery and fabric fastening", ar: "تنجيد الجلد وتثبيت الأقمشة" },
//       { en: "Light wooden gift boxes and craft items", ar: "صناديق الهدايا الخشبية الخفيفة والأعمال اليدوية" }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"عيار السلك"}, value: {"en":"20 Gauge (1.20 mm)","ar":"عيار 20 (1.20 مم)"} },
//       { specification: {"en":"Leg Length","ar":"طول الساق"}, value: {"en":"8 mm","ar":"8 مم"} },
//       { specification: {"en":"Crown Width","ar":"عرض التاج"}, value: {"en":"11.2 mm","ar":"11.2 مم"} },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: {"en":"11.97 kg","ar":"11.97 كجم"} }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Series application","ar":"استخدام السلسلة"}, description: {"en":"10J narrow-crown staple for furniture upholstery and fastening fabric or woven materials to wood, as listed for this product family. Verify tool compatibility before ordering.","ar":"دبوس من سلسلة 10J بتاج ضيق لأعمال تنجيد الأثاث وتثبيت الأقمشة أو المواد المنسوجة بالخشب، وفقًا لاستخدامات هذه السلسلة. يُرجى التحقق من توافق الأداة قبل الطلب."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "1008J", type: "10J Series Staple", volume: "8 mm", boxQty: "5,000 pcs/box × 20 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073343435/u-nails-1008j_1792250200531_zpxb9a.png"
//     ]
//   },
//   "u-nails-1010j": {
//     isNew: true,
//     description: { en: "Sultan 1010J is a 10J narrow crown staple with a 10 mm leg length for sofa upholstery, canvas stretching and attaching woven material to wood.", ar: "دبوس سلطان 1010J من سلسلة 10J بتاج ضيق وطول ساق 10 مم، مناسب لتنجيد الأرائك وشد القماش وتثبيت المواد المنسوجة بالخشب." },
//     properties: [
//       { en: "10J Narrow Crown Staple", ar: "دبوس من سلسلة 10J بتاج ضيق" },
//       { en: "20 Gauge (1.20 mm)", ar: "عيار 20 (1.20 مم)" },
//       { en: "Leg length: 10 mm", ar: "طول الساق: 10 مم" },
//       { en: "Crown width: 11.2 mm", ar: "عرض التاج: 11.2 مم" }
//     ],
//     applications: [
//       { en: "Sofa upholstery", ar: "تنجيد الأرائك" },
//       { en: "Canvas stretching and woven material mounting to wood", ar: "شد القماش وتثبيت المواد المنسوجة بالخشب" }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"عيار السلك"}, value: {"en":"20 Gauge (1.20 mm)","ar":"عيار 20 (1.20 مم)"} },
//       { specification: {"en":"Leg Length","ar":"طول الساق"}, value: {"en":"10 mm","ar":"10 مم"} },
//       { specification: {"en":"Crown Width","ar":"عرض التاج"}, value: {"en":"11.2 mm","ar":"11.2 مم"} },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: {"en":"14.5 kg","ar":"14.5 كجم"} }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Series application","ar":"استخدام السلسلة"}, description: {"en":"10J narrow-crown staple for furniture upholstery and fastening fabric or woven materials to wood, as listed for this product family. Verify tool compatibility before ordering.","ar":"دبوس من سلسلة 10J بتاج ضيق لأعمال تنجيد الأثاث وتثبيت الأقمشة أو المواد المنسوجة بالخشب، وفقًا لاستخدامات هذه السلسلة. يُرجى التحقق من توافق الأداة قبل الطلب."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "1010J", type: "10J Series Staple", volume: "10 mm", boxQty: "5,000 pcs/box × 20 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073343435/u-nails-1010j_1792250210521_vloyt1.png"
//     ]
//   },
//   "u-nails-1013j": {
//     isNew: true,
//     description: { en: "Sultan 1013J is a 10J narrow crown staple with a 13 mm leg length for sofa frame fastening, pneumatic wood lining and back-panel securing.", ar: "دبوس سلطان 1013J من سلسلة 10J بتاج ضيق وطول ساق 13 مم، مناسب لتثبيت إطارات الأرائك وبطانات الخشب وتثبيت الألواح الخلفية." },
//     properties: [
//       { en: "10J Narrow Crown Staple", ar: "دبوس من سلسلة 10J بتاج ضيق" },
//       { en: "20 Gauge (1.20 mm)", ar: "عيار 20 (1.20 مم)" },
//       { en: "Leg length: 13 mm", ar: "طول الساق: 13 مم" },
//       { en: "Crown width: 11.2 mm", ar: "عرض التاج: 11.2 مم" }
//     ],
//     applications: [
//       { en: "Heavy sofa frame fastening", ar: "تثبيت إطارات الأرائك الثقيلة" },
//       { en: "Pneumatic wood lining and back-panel securing", ar: "تثبيت بطانات الخشب والألواح الخلفية باستخدام الدباسة الهوائية" }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"عيار السلك"}, value: {"en":"20 Gauge (1.20 mm)","ar":"عيار 20 (1.20 مم)"} },
//       { specification: {"en":"Leg Length","ar":"طول الساق"}, value: {"en":"13 mm","ar":"13 مم"} },
//       { specification: {"en":"Crown Width","ar":"عرض التاج"}, value: {"en":"11.2 mm","ar":"11.2 مم"} },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: {"en":"16.89 kg","ar":"16.89 كجم"} }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Series application","ar":"استخدام السلسلة"}, description: {"en":"10J narrow-crown staple for furniture upholstery and fastening fabric or woven materials to wood, as listed for this product family. Verify tool compatibility before ordering.","ar":"دبوس من سلسلة 10J بتاج ضيق لأعمال تنجيد الأثاث وتثبيت الأقمشة أو المواد المنسوجة بالخشب، وفقًا لاستخدامات هذه السلسلة. يُرجى التحقق من توافق الأداة قبل الطلب."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "1013J", type: "10J Series Staple", volume: "13 mm", boxQty: "5,000 pcs/box × 20 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073343435/u-nails-1013j_1792250219306_3zxcjz.png"
//     ]
//   },
//   "u-nails-1406": {
//     isNew: true,
//     description: { en: "Sultan 1406 fine wire staples for ultra-fine textile fastening, paper board attachment and delicate craft wood.", ar: "دبابيس سلطان 1406 ذات السلك الرفيع لتثبيت المنسوجات فائقة الرقة وألواح الورق والأعمال الخشبية الحرفية الدقيقة." },
//     properties: [
//       { en: "22 Gauge (0.75 mm) wire.", ar: "سلك بمقاس 22 (0.75 مم)." },
//       { en: "Leg length: 6 mm. Crown width: 10.1 mm.", ar: "طول الساق: 6 مم. عرض التاج: 10.1 مم." }
//     ],
//     applications: [
//       { en: "Ultra-fine textile fastening.", ar: "تثبيت المنسوجات فائقة الرقة." },
//       { en: "Paper board attachment.", ar: "تثبيت ألواح الورق." },
//       { en: "Delicate craft wood.", ar: "الأعمال الخشبية الحرفية الدقيقة." }
//     ],
//     productSpecs: [
//       { specification: {"en":"Series","ar":"السلسلة"}, value: "14 Series" },
//       { specification: {"en":"Wire Gauge","ar":"مقياس السلك"}, value: "22 Gauge (0.75 mm)" },
//       { specification: {"en":"Leg Length","ar":"طول الساق"}, value: "6 mm" },
//       { specification: {"en":"Crown Width","ar":"عرض التاج"}, value: "10.1 mm" },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: "11.73 kg" }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Fastener type","ar":"نوع المثبّت"}, description: {"en":"14 Series fine wire staple, according to the supplied product information.","ar":"دبوس سلك رفيع من السلسلة 14، وفقًا لمعلومات المنتج المقدمة."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "1406", type: "14 Series Fine Wire Staple", volume: "6 mm", boxQty: "10,000 pcs/box × 20 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073343435/u-nails-1406_1792251816152_h43pp6.png"
//     ]
//   },
//   "u-nails-1408": {
//     isNew: true,
//     description: { en: "Sultan 1408 is a 14 Series fine wire staple with an 8 mm leg length for fine upholstery, canvas mounting and picture frame backing.", ar: "دبوس سلطان 1408 من سلسلة 14 بسلك دقيق وطول ساق 8 مم، مناسب للتنجيد الدقيق وتثبيت القماش وظهور إطارات الصور." },
//     properties: [
//       { en: "14 Series Fine Wire Staple", ar: "دبوس من سلسلة 14 بسلك دقيق" },
//       { en: "22 Gauge (0.75 mm)", ar: "عيار 22 (0.75 مم)" },
//       { en: "Leg length: 8 mm", ar: "طول الساق: 8 مم" },
//       { en: "Crown width: 10.1 mm", ar: "عرض التاج: 10.1 مم" }
//     ],
//     applications: [
//       { en: "Fine upholstery and canvas mounting", ar: "التنجيد الدقيق وتثبيت القماش" },
//       { en: "Picture frame backing with minimal surface marks", ar: "تثبيت ظهور إطارات الصور مع تقليل آثار السطح" }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"عيار السلك"}, value: {"en":"22 Gauge (0.75 mm)","ar":"عيار 22 (0.75 مم)"} },
//       { specification: {"en":"Leg Length","ar":"طول الساق"}, value: {"en":"8 mm","ar":"8 مم"} },
//       { specification: {"en":"Crown Width","ar":"عرض التاج"}, value: {"en":"10.1 mm","ar":"10.1 مم"} },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: {"en":"13.16 kg","ar":"13.16 كجم"} }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Series application","ar":"استخدام السلسلة"}, description: {"en":"14 Series fine-wire staple for delicate upholstery, textile-to-wood fastening and light trim tasks described for the individual size. Confirm material suitability before use.","ar":"دبوس من سلسلة 14 بسلك دقيق لأعمال التنجيد الدقيق وتثبيت الأقمشة بالخشب والتشطيبات الخفيفة المذكورة للمقاس المحدد. يُرجى التأكد من ملاءمته للمواد قبل الاستخدام."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "1408", type: "14 Series Staple", volume: "8 mm", boxQty: "10,000 pcs/box × 20 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073343435/u-nails-1408_1792249946941_ezj4xy.png"
//     ]
//   },
//   "u-nails-1410": {
//     isNew: true,
//     description: { en: "Sultan 1410 is a 14 Series fine wire staple with a 10 mm leg length for textile-to-wood fastening, thin wood veneers and decorative trim.", ar: "دبوس سلطان 1410 من سلسلة 14 بسلك دقيق وطول ساق 10 مم، مناسب لتثبيت الأقمشة بالخشب والقشرة الخشبية الرقيقة والزخارف." },
//     properties: [
//       { en: "14 Series Fine Wire Staple", ar: "دبوس من سلسلة 14 بسلك دقيق" },
//       { en: "22 Gauge (0.75 mm)", ar: "عيار 22 (0.75 مم)" },
//       { en: "Leg length: 10 mm", ar: "طول الساق: 10 مم" },
//       { en: "Crown width: 10.1 mm", ar: "عرض التاج: 10.1 مم" }
//     ],
//     applications: [
//       { en: "Textile-to-wood fastening", ar: "تثبيت الأقمشة بالخشب" },
//       { en: "Thin wood veneers and decorative trim", ar: "القشرة الخشبية الرقيقة والزخارف" }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"عيار السلك"}, value: {"en":"22 Gauge (0.75 mm)","ar":"عيار 22 (0.75 مم)"} },
//       { specification: {"en":"Leg Length","ar":"طول الساق"}, value: {"en":"10 mm","ar":"10 مم"} },
//       { specification: {"en":"Crown Width","ar":"عرض التاج"}, value: {"en":"10.1 mm","ar":"10.1 مم"} },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: {"en":"15.88 kg","ar":"15.88 كجم"} }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Series application","ar":"استخدام السلسلة"}, description: {"en":"14 Series fine-wire staple for delicate upholstery, textile-to-wood fastening and light trim tasks described for the individual size. Confirm material suitability before use.","ar":"دبوس من سلسلة 14 بسلك دقيق لأعمال التنجيد الدقيق وتثبيت الأقمشة بالخشب والتشطيبات الخفيفة المذكورة للمقاس المحدد. يُرجى التأكد من ملاءمته للمواد قبل الاستخدام."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "1410", type: "14 Series Staple", volume: "10 mm", boxQty: "10,000 pcs/box × 20 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073343435/u-nails-1410_1792249958989_vk5y4o.png"
//     ]
//   },
//   "u-nails-1412": {
//     isNew: true,
//     description: { en: "Sultan 1412 is a 14 Series fine wire staple with a 12 mm leg length for sofa bottom dust-caps, thin veneer trim and delicate wood frame assembly.", ar: "دبوس سلطان 1412 من سلسلة 14 بسلك دقيق وطول ساق 12 مم، مناسب لأغطية أسفل الأرائك والقشرة الرقيقة وتجميع الإطارات الخشبية الدقيقة." },
//     properties: [
//       { en: "14 Series Fine Wire Staple", ar: "دبوس من سلسلة 14 بسلك دقيق" },
//       { en: "22 Gauge (0.75 mm)", ar: "عيار 22 (0.75 مم)" },
//       { en: "Leg length: 12 mm", ar: "طول الساق: 12 مم" },
//       { en: "Crown width: 10.1 mm", ar: "عرض التاج: 10.1 مم" }
//     ],
//     applications: [
//       { en: "Sofa bottom dust-caps", ar: "أغطية أسفل الأرائك" },
//       { en: "Thin veneer trim and delicate wood frame assembly", ar: "تشطيبات القشرة الرقيقة وتجميع الإطارات الخشبية الدقيقة" }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"عيار السلك"}, value: {"en":"22 Gauge (0.75 mm)","ar":"عيار 22 (0.75 مم)"} },
//       { specification: {"en":"Leg Length","ar":"طول الساق"}, value: {"en":"12 mm","ar":"12 مم"} },
//       { specification: {"en":"Crown Width","ar":"عرض التاج"}, value: {"en":"10.1 mm","ar":"10.1 مم"} },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: {"en":"18.4 kg","ar":"18.4 كجم"} }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Series application","ar":"استخدام السلسلة"}, description: {"en":"14 Series fine-wire staple for delicate upholstery, textile-to-wood fastening and light trim tasks described for the individual size. Confirm material suitability before use.","ar":"دبوس من سلسلة 14 بسلك دقيق لأعمال التنجيد الدقيق وتثبيت الأقمشة بالخشب والتشطيبات الخفيفة المذكورة للمقاس المحدد. يُرجى التأكد من ملاءمته للمواد قبل الاستخدام."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "1412", type: "14 Series Staple", volume: "12 mm", boxQty: "10,000 pcs/box × 20 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073343435/u-nails-1412_1792249974605_kfm1oy.png"
//     ]
//   },
//   "u-nails-1414": {
//     isNew: true,
//     description: { en: "Sultan 1414 is a 14 Series fine wire staple with a 14 mm leg length for cabinet interior lining, screen wire installation and automotive seat upholstery.", ar: "دبوس سلطان 1414 من سلسلة 14 بسلك دقيق وطول ساق 14 مم، مناسب لبطانة الخزائن الداخلية وتركيب الشبك وتنجيد مقاعد السيارات." },
//     properties: [
//       { en: "14 Series Fine Wire Staple", ar: "دبوس من سلسلة 14 بسلك دقيق" },
//       { en: "22 Gauge (0.75 mm)", ar: "عيار 22 (0.75 مم)" },
//       { en: "Leg length: 14 mm", ar: "طول الساق: 14 مم" },
//       { en: "Crown width: 10.1 mm", ar: "عرض التاج: 10.1 مم" }
//     ],
//     applications: [
//       { en: "Cabinet interior lining", ar: "بطانة الخزائن الداخلية" },
//       { en: "Screen wire installation and automotive seat upholstery", ar: "تركيب الشبك وتنجيد مقاعد السيارات" }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"عيار السلك"}, value: {"en":"22 Gauge (0.75 mm)","ar":"عيار 22 (0.75 مم)"} },
//       { specification: {"en":"Leg Length","ar":"طول الساق"}, value: {"en":"14 mm","ar":"14 مم"} },
//       { specification: {"en":"Crown Width","ar":"عرض التاج"}, value: {"en":"10.1 mm","ar":"10.1 مم"} },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: {"en":"12.43 kg","ar":"12.43 كجم"} }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Series application","ar":"استخدام السلسلة"}, description: {"en":"14 Series fine-wire staple for delicate upholstery, textile-to-wood fastening and light trim tasks described for the individual size. Confirm material suitability before use.","ar":"دبوس من سلسلة 14 بسلك دقيق لأعمال التنجيد الدقيق وتثبيت الأقمشة بالخشب والتشطيبات الخفيفة المذكورة للمقاس المحدد. يُرجى التأكد من ملاءمته للمواد قبل الاستخدام."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "1414", type: "14 Series Staple", volume: "14 mm", boxQty: "10,000 pcs/box × 12 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073343435/u-nails-1414_1792249983945_hnzofj.png"
//     ]
//   },
//   "u-nails-1416": {
//     isNew: true,
//     description: { en: "Sultan 1416 is a 14 Series fine wire staple with a 16 mm leg length for deep fabric attachment into dense wood and padded furniture panels.", ar: "دبوس سلطان 1416 من سلسلة 14 بسلك دقيق وطول ساق 16 مم، مناسب لتثبيت الأقمشة بعمق في الخشب الكثيف وألواح الأثاث المبطنة." },
//     properties: [
//       { en: "14 Series Fine Wire Staple", ar: "دبوس من سلسلة 14 بسلك دقيق" },
//       { en: "22 Gauge (0.75 mm)", ar: "عيار 22 (0.75 مم)" },
//       { en: "Leg length: 16 mm", ar: "طول الساق: 16 مم" },
//       { en: "Crown width: 10.1 mm", ar: "عرض التاج: 10.1 مم" }
//     ],
//     applications: [
//       { en: "Deep fabric attachment into dense wood", ar: "تثبيت الأقمشة بعمق في الخشب الكثيف" },
//       { en: "Padded furniture panels", ar: "ألواح الأثاث المبطنة" }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"عيار السلك"}, value: {"en":"22 Gauge (0.75 mm)","ar":"عيار 22 (0.75 مم)"} },
//       { specification: {"en":"Leg Length","ar":"طول الساق"}, value: {"en":"16 mm","ar":"16 مم"} },
//       { specification: {"en":"Crown Width","ar":"عرض التاج"}, value: {"en":"10.1 mm","ar":"10.1 مم"} },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: {"en":"14.18 kg","ar":"14.18 كجم"} }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Series application","ar":"استخدام السلسلة"}, description: {"en":"14 Series fine-wire staple for delicate upholstery, textile-to-wood fastening and light trim tasks described for the individual size. Confirm material suitability before use.","ar":"دبوس من سلسلة 14 بسلك دقيق لأعمال التنجيد الدقيق وتثبيت الأقمشة بالخشب والتشطيبات الخفيفة المذكورة للمقاس المحدد. يُرجى التأكد من ملاءمته للمواد قبل الاستخدام."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "1416", type: "14 Series Staple", volume: "16 mm", boxQty: "10,000 pcs/box × 12 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073343435/u-nails-1416_1792249990442_livmrd.png"
//     ]
//   },
//   "u-nails-9040": {
//     isNew: true,
//     description: { en: "Sultan 9040 is a 90 Series narrow crown staple with a 40 mm leg length for cabinet construction, hardwood floor underlayment and drawer assembly.", ar: "دبوس سلطان 9040 من سلسلة 90 بتاج ضيق وطول ساق 40 مم، مناسب لتصنيع الخزائن والطبقة السفلية للأرضيات الخشبية وتجميع الأدراج." },
//     properties: [
//       { en: "90 Series Narrow Crown Staple", ar: "دبوس من سلسلة 90 بتاج ضيق" },
//       { en: "18 Gauge (1.25 mm)", ar: "عيار 18 (1.25 مم)" },
//       { en: "Leg length: 40 mm", ar: "طول الساق: 40 مم" },
//       { en: "Crown width: 5.7 mm", ar: "عرض التاج: 5.7 مم" }
//     ],
//     applications: [
//       { en: "Flush-drive cabinet construction", ar: "تصنيع الخزائن مع تثبيت الدبابيس بشكل مستوٍ" },
//       { en: "Hardwood floor underlayment and drawers", ar: "الطبقة السفلية للأرضيات الخشبية والأدراج" }
//     ],
//     productSpecs: [
//       { specification: {"en":"Wire Gauge","ar":"عيار السلك"}, value: {"en":"18 Gauge (1.25 mm)","ar":"عيار 18 (1.25 مم)"} },
//       { specification: {"en":"Leg Length","ar":"طول الساق"}, value: {"en":"40 mm","ar":"40 مم"} },
//       { specification: {"en":"Crown Width","ar":"عرض التاج"}, value: {"en":"5.7 mm","ar":"5.7 مم"} },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: {"en":"16.7 kg","ar":"16.7 كجم"} }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Series application","ar":"استخدام السلسلة"}, description: {"en":"90 Series narrow-crown staple for cabinet construction, drawer assembly and interior woodwork applications. Confirm the required leg length and stapler compatibility.","ar":"دبوس من سلسلة 90 بتاج ضيق لتصنيع الخزائن وتجميع الأدراج وأعمال النجارة الداخلية. يُرجى التأكد من طول الساق المطلوب وتوافقه مع الدباسة."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "9040", type: "90 Series Staple", volume: "40 mm", boxQty: "3,000 pcs/box × 8 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073343435/u-nails-9040_1792250239429_ro315i.png"
//     ]
//   },
//   "steel-nails-st25": {
//     isNew: true,
//     description: { en: "Sultan ST25 is a hardened steel pin with a 25 mm length, designed for fastening wood battens and furring strips, as well as metal trunking, directly to concrete.", ar: "مسمار سلطان ST25 دبوس فولاذي مقسّى بطول 25 مم، مصمم لتثبيت العوارض والشرائح الخشبية وقنوات الأسلاك المعدنية مباشرةً بالخرسانة." },
//     properties: [
//       { en: "ST Hardened Steel Pin", ar: "دبوس فولاذي مقسّى من سلسلة ST" },
//       { en: "14 Gauge (2.20 mm)", ar: "عيار 14 (2.20 مم)" },
//       { en: "Length: 25 mm", ar: "الطول: 25 مم" },
//       { en: "Head size: 6.8 mm", ar: "حجم الرأس: 6.8 مم" }
//     ],
//     applications: [
//       { en: "Mounting wood battens and furring strips to concrete", ar: "تثبيت العوارض والشرائح الخشبية بالخرسانة" },
//       { en: "Fastening metal trunking directly to concrete", ar: "تثبيت قنوات الأسلاك المعدنية مباشرةً بالخرسانة" }
//     ],
//     productSpecs: [
//       { specification: {"en":"Gauge","ar":"العيار"}, value: {"en":"14 Gauge (2.20 mm)","ar":"عيار 14 (2.20 مم)"} },
//       { specification: {"en":"Length","ar":"الطول"}, value: {"en":"25 mm","ar":"25 مم"} },
//       { specification: {"en":"Head Size","ar":"حجم الرأس"}, value: {"en":"6.8 mm","ar":"6.8 مم"} },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: {"en":"15.0 kg","ar":"15.0 كجم"} }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Application and compatibility","ar":"الاستخدام والتوافق"}, description: {"en":"ST hardened steel pin listed for fastening timber or associated fittings to concrete or masonry. Substrate, installation tool and site requirements must be checked before use.","ar":"دبوس فولاذي مقسّى من سلسلة ST مخصص لتثبيت الخشب أو الملحقات ذات الصلة بالخرسانة أو البناء. يجب التحقق من نوع السطح وأداة التركيب ومتطلبات الموقع قبل الاستخدام."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "ST25", type: "ST Hardened Steel Pin", volume: "25 mm", boxQty: "2,000 pcs/box × 10 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073082887/steel-nails-st25_1792250599855_6271mn.png"
//     ]
//   },
//   "steel-nails-st32": {
//     isNew: true,
//     description: { en: "Sultan ST32 is a hardened steel pin with a 32 mm length for securing wood-to-concrete framing and attaching electrical conduit clips to masonry walls.", ar: "مسمار سلطان ST32 دبوس فولاذي مقسّى بطول 32 مم، مناسب لتثبيت الهياكل الخشبية بالخرسانة ومشابك المواسير الكهربائية بالجدران المبنية من الطوب أو الحجر." },
//     properties: [
//       { en: "ST Hardened Steel Pin", ar: "دبوس فولاذي مقسّى من سلسلة ST" },
//       { en: "14 Gauge (2.20 mm)", ar: "عيار 14 (2.20 مم)" },
//       { en: "Length: 32 mm", ar: "الطول: 32 مم" },
//       { en: "Head size: 6.8 mm", ar: "حجم الرأس: 6.8 مم" }
//     ],
//     applications: [
//       { en: "Securing wood-to-concrete framing", ar: "تثبيت الهياكل الخشبية بالخرسانة" },
//       { en: "Attaching electrical conduit clips to masonry walls", ar: "تثبيت مشابك المواسير الكهربائية بالجدران المبنية من الطوب أو الحجر" }
//     ],
//     productSpecs: [
//       { specification: {"en":"Gauge","ar":"العيار"}, value: {"en":"14 Gauge (2.20 mm)","ar":"عيار 14 (2.20 مم)"} },
//       { specification: {"en":"Length","ar":"الطول"}, value: {"en":"32 mm","ar":"32 مم"} },
//       { specification: {"en":"Head Size","ar":"حجم الرأس"}, value: {"en":"6.8 mm","ar":"6.8 مم"} },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: {"en":"19.1 kg","ar":"19.1 كجم"} }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Application and compatibility","ar":"الاستخدام والتوافق"}, description: {"en":"ST hardened steel pin listed for fastening timber or associated fittings to concrete or masonry. Substrate, installation tool and site requirements must be checked before use.","ar":"دبوس فولاذي مقسّى من سلسلة ST مخصص لتثبيت الخشب أو الملحقات ذات الصلة بالخرسانة أو البناء. يجب التحقق من نوع السطح وأداة التركيب ومتطلبات الموقع قبل الاستخدام."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "ST32", type: "ST Hardened Steel Pin", volume: "32 mm", boxQty: "2,000 pcs/box × 10 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073082887/steel-nails-st32_1792250610782_4te0b6.png"
//     ]
//   },
//   "steel-nails-st38": {
//     isNew: true,
//     description: { en: "Sultan ST38 is a hardened steel pin with a 38 mm length for fastening heavy wooden wall panel structures to concrete or brick walls.", ar: "مسمار سلطان ST38 دبوس فولاذي مقسّى بطول 38 مم، مناسب لتثبيت هياكل ألواح الجدران الخشبية الثقيلة بالخرسانة أو جدران الطوب." },
//     properties: [
//       { en: "ST Hardened Steel Pin", ar: "دبوس فولاذي مقسّى من سلسلة ST" },
//       { en: "14 Gauge (2.20 mm)", ar: "عيار 14 (2.20 مم)" },
//       { en: "Length: 38 mm", ar: "الطول: 38 مم" },
//       { en: "Head size: 6.8 mm", ar: "حجم الرأس: 6.8 مم" }
//     ],
//     applications: [
//       { en: "Heavy wooden wall panel structures", ar: "هياكل ألواح الجدران الخشبية الثقيلة" },
//       { en: "Fastening wood structures to concrete or brick walls", ar: "تثبيت الهياكل الخشبية بالخرسانة أو جدران الطوب" }
//     ],
//     productSpecs: [
//       { specification: {"en":"Gauge","ar":"العيار"}, value: {"en":"14 Gauge (2.20 mm)","ar":"عيار 14 (2.20 مم)"} },
//       { specification: {"en":"Length","ar":"الطول"}, value: {"en":"38 mm","ar":"38 مم"} },
//       { specification: {"en":"Head Size","ar":"حجم الرأس"}, value: {"en":"6.8 mm","ar":"6.8 مم"} },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: {"en":"11.85 kg","ar":"11.85 كجم"} }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Application and compatibility","ar":"الاستخدام والتوافق"}, description: {"en":"ST hardened steel pin listed for fastening timber or associated fittings to concrete or masonry. Substrate, installation tool and site requirements must be checked before use.","ar":"دبوس فولاذي مقسّى من سلسلة ST مخصص لتثبيت الخشب أو الملحقات ذات الصلة بالخرسانة أو البناء. يجب التحقق من نوع السطح وأداة التركيب ومتطلبات الموقع قبل الاستخدام."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "ST38", type: "ST Hardened Steel Pin", volume: "38 mm", boxQty: "1,000 pcs/box × 10 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073082887/steel-nails-st38_1792250617830_ioxaj3.png"
//     ]
//   },
//   "steel-nails-st50": {
//     isNew: true,
//     description: { en: "Sultan ST50 is a hardened steel pin with a 50 mm length for deep anchoring of timber frames directly into concrete floors and walls.", ar: "مسمار سلطان ST50 دبوس فولاذي مقسّى بطول 50 مم، مناسب للتثبيت العميق للهياكل الخشبية مباشرةً في الأرضيات والجدران الخرسانية." },
//     properties: [
//       { en: "ST Hardened Steel Pin", ar: "دبوس فولاذي مقسّى من سلسلة ST" },
//       { en: "14 Gauge (2.20 mm)", ar: "عيار 14 (2.20 مم)" },
//       { en: "Length: 50 mm", ar: "الطول: 50 مم" },
//       { en: "Head size: 6.8 mm", ar: "حجم الرأس: 6.8 مم" }
//     ],
//     applications: [
//       { en: "Deep anchoring of timber frames", ar: "التثبيت العميق للهياكل الخشبية" },
//       { en: "Fastening timber frames directly into concrete floors and walls", ar: "تثبيت الهياكل الخشبية مباشرةً في الأرضيات والجدران الخرسانية" }
//     ],
//     productSpecs: [
//       { specification: {"en":"Gauge","ar":"العيار"}, value: {"en":"14 Gauge (2.20 mm)","ar":"عيار 14 (2.20 مم)"} },
//       { specification: {"en":"Length","ar":"الطول"}, value: {"en":"50 mm","ar":"50 مم"} },
//       { specification: {"en":"Head Size","ar":"حجم الرأس"}, value: {"en":"6.8 mm","ar":"6.8 مم"} },
//       { specification: {"en":"Carton Weight","ar":"وزن الكرتون"}, value: {"en":"15.0 kg","ar":"15.0 كجم"} }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Application and compatibility","ar":"الاستخدام والتوافق"}, description: {"en":"ST hardened steel pin listed for fastening timber or associated fittings to concrete or masonry. Substrate, installation tool and site requirements must be checked before use.","ar":"دبوس فولاذي مقسّى من سلسلة ST مخصص لتثبيت الخشب أو الملحقات ذات الصلة بالخرسانة أو البناء. يجب التحقق من نوع السطح وأداة التركيب ومتطلبات الموقع قبل الاستخدام."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "ST50", type: "ST Hardened Steel Pin", volume: "50 mm", boxQty: "1,000 pcs/box × 10 boxes/carton" }
//     ],
//     images: [
//       "/images/all-products/category-1792073082887/steel-nails-st50_1792250628229_mangqy.png"
//     ]
//   },
//   "sultan-spray-glue-400ml": {
//     isNew: true,
//     description: { en: "Sultan Spray Glue supplied in a 400 ml container with an additional 100 g.", ar: "غراء بخاخ سلطان، عبوة 400 مل مع 100 غرام إضافية." },
//     properties: [
//       { en: "Product: Sultan Spray Glue", ar: "المنتج: غراء بخاخ سلطان" },
//       { en: "Container size: 400 ml + 100 g", ar: "حجم العبوة: 400 مل + 100 غرام" }
//     ],
//     productSpecs: [
//       { specification: {"en":"Product Name","ar":"اسم المنتج"}, value: {"en":"Sultan Spray Glue","ar":"غراء بخاخ سلطان"} },
//       { specification: {"en":"Pack Size","ar":"حجم العبوة"}, value: {"en":"400 ml + 100 g","ar":"400 مل + 100 غرام"} }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Verified listing information","ar":"معلومات المنتج المتاحة"}, description: {"en":"The supplied product information identifies this item as Sultan Spray Glue, packaged as 400 ml + 100 g. Technical performance, compatible materials, drying time and safety details require an official product datasheet.","ar":"تحدد معلومات المنتج المقدمة هذا المنتج بأنه غراء بخاخ سلطان، بتعبئة 400 مل + 100 غرام. تتطلب خصائص الأداء والمواد المتوافقة ووقت الجفاف ومعلومات السلامة نشرة فنية رسمية."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "sultan-spray-glue-400ml", type: "Spray Glue", volume: "400 ml + 100 g", boxQty: "-" }
//     ],
//     images: [
//       "/images/all-products/adhesives/subcategory-1792074317951/sultan-spray-glue-400ml_1792299763076_bsvah4.jpg"
//     ]
//   },
//   "sultan-pu-foam-750ml": {
//     isNew: true,
//     description: { en: "Sultan PU Foam supplied in a 750 ml container with a stated product weight of 800 g.", ar: "رغوة البولي يوريثان من سلطان، بحجم 750 مل ووزن منتج مذكور قدره 800 غرام." },
//     properties: [
//       { en: "Product: Sultan PU Foam", ar: "المنتج: رغوة البولي يوريثان من سلطان" },
//       { en: "Container volume: 750 ml", ar: "حجم العبوة: 750 مل" },
//       { en: "Product weight: 800 g", ar: "وزن المنتج: 800 غرام" }
//     ],
//     productSpecs: [
//       { specification: {"en":"Product Name","ar":"اسم المنتج"}, value: {"en":"Sultan PU Foam","ar":"رغوة البولي يوريثان من سلطان"} },
//       { specification: {"en":"Container Volume","ar":"حجم العبوة"}, value: {"en":"750 ml","ar":"750 مل"} },
//       { specification: {"en":"Product Weight","ar":"وزن المنتج"}, value: {"en":"800 g","ar":"800 غرام"} }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Verified listing information","ar":"معلومات المنتج المتاحة"}, description: {"en":"The supplied product information identifies this item as Sultan PU Foam, 750 ml / 800 g. Expansion, curing, application and safety specifications require an official product datasheet.","ar":"تحدد معلومات المنتج المقدمة هذا المنتج بأنه رغوة البولي يوريثان من سلطان، 750 مل / 800 غرام. تتطلب مواصفات التمدد والمعالجة وطريقة الاستخدام والسلامة نشرة فنية رسمية."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "sultan-pu-foam-750ml", type: "PU Foam", volume: "750 ml / 800 g", boxQty: "-" }
//     ],
//     images: [
//       "/images/all-products/adhesives/subcategory-1792074350245/sultan-pu-foam-750ml_1792299752263_qx7a28.jpg"
//     ]
//   },
//   "sultan-wood-glue-370kg": {
//     isNew: true,
//     description: { en: "Sultan Wood Glue supplied in 3.70 kg buckets, with 4 buckets per carton.", ar: "غراء خشب سلطان، بعبوات وزن 3.70 كجم لكل سطل، مع 4 سطول في الكرتون." },
//     properties: [
//       { en: "Product: Sultan Wood Glue", ar: "المنتج: غراء خشب سلطان" },
//       { en: "Bucket size: 3.70 kg", ar: "وزن السطل: 3.70 كجم" },
//       { en: "Packaging: 4 buckets per carton", ar: "التعبئة: 4 سطول في الكرتون" }
//     ],
//     productSpecs: [
//       { specification: {"en":"Product Name","ar":"اسم المنتج"}, value: {"en":"Sultan Wood Glue","ar":"غراء خشب سلطان"} },
//       { specification: {"en":"Bucket Weight","ar":"وزن السطل"}, value: {"en":"3.70 kg","ar":"3.70 كجم"} },
//       { specification: {"en":"Carton Quantity","ar":"عدد السطول في الكرتون"}, value: {"en":"4 buckets/carton","ar":"4 سطول/كرتون"} }
//     ],
//     technicalSpecs: [
//       { title: {"en":"Verified listing information","ar":"معلومات المنتج المتاحة"}, description: {"en":"The supplied product information identifies Sultan Wood Glue in 3.70 kg buckets, with 4 buckets per carton. Bond strength, open time, drying time, compatible materials and safety information require an official product datasheet.","ar":"تحدد معلومات المنتج المقدمة غراء خشب سلطان بعبوات وزن 3.70 كجم، مع 4 سطول في الكرتون. تتطلب قوة الالتصاق ووقت العمل ووقت الجفاف والمواد المتوافقة ومعلومات السلامة نشرة فنية رسمية."} }
//     ],
//     packaging: [
//       { stockCode: "-", productCode: "sultan-wood-glue-370kg", type: "Wood Glue", volume: "3.70 kg", boxQty: "4 buckets/carton" }
//     ],
//     images: [
//       "/images/all-products/adhesives/subcategory-1792074373839/sultan-wood-glue-370kg_1792299740632_6uwrpl.jpg"
//     ]
//   }
// };












import type { LString } from "@/data/i18n";

export type PackagingRow = {
  stockCode?: string;
  productCode?: string;
  type?: string;
  volume?: string;
  boxQty?: string;
};

export type ProductSpecification = {
  specification: LString;
  value: LString;
};

export type TechnicalSpecification = {
  title?: LString;
  description?: LString;
};

export type ProductDetail = {
  description?: LString;
  properties?: LString[];
  applications?: LString[];
  productSpecs?: ProductSpecification[];
  technicalSpecs?: TechnicalSpecification[];
  packaging?: PackagingRow[];
  tdsUrl?: string;
  sdsUrl?: string;
  isNew?: boolean;
  images?: string[];
};

export const productDetailsById: Record<string, ProductDetail> = {
  // ==========================================
  // 18-GAUGE BRAD NAILS (F SERIES)
  // ==========================================
  "brad-nails-f10": {
    isNew: true,
    description: {
      en: "F10 18-gauge straight brad nail engineered with an ultra-thin slight T-head for split-free precision finishing, delicate beading, and miniature picture framing.",
      ar: "مسمار براد مستقيم F10 عيار 18 برأس T دقيق، مصمم للتشطيبات متناهية الدقة والزخارف الخفيفة وإطارات الصور المصغرة دون التسبب في تشقق الأخشاب."
    },
    properties: [
      { en: "18 Gauge wire profile: 1.00 mm × 1.25 mm.", ar: "مقطع سلك مقاس 18: 1.00 مم × 1.25 مم." },
      { en: "Length: 10 mm (3/8\"). Head width: 1.9 mm.", ar: "الطول: 10 مم (3/8 بوصة). مقاس الرأس: 1.9 مم." },
      { en: "Electro-galvanized zinc coating for corrosion and rust resistance.", ar: "طبقة جلفنة زنك كهربائية لمقاومة الصدأ والتآكل." },
      { en: "Chisel point tip profile drives straight with minimal resistance.", ar: "رأس إزميلي حاد يضمن الاختراق المستقيم بأقل قوة دفع." }
    ],
    applications: [
      { en: "Delicate wood trim, fine beading, and glazing profiles.", ar: "الزخارف الخشبية الدقيقة، وحواف التثبيت، والشرائح الزجاجية." },
      { en: "Small picture framing, filigree craftwork, and dollhouse joinery.", ar: "إطارات الصور الصغيرة، والأعمال الخشبية الفنية، وتجميع المجسمات." },
      { en: "Temporary holding during PVA glue setting.", ar: "تثبيت مؤقت حتى جفاف وتصلب غراء الخشب." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "18GA Straight Brad Nail", ar: "مسمار براد مستقيم عيار 18" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "1.00 mm × 1.25 mm (18 Gauge)", ar: "1.00 مم × 1.25 مم (عيار 18)" } },
      { specification: { en: "Length", ar: "الطول" }, value: { en: "10 mm (3/8\")", ar: "10 مم (3/8 بوصة)" } },
      { specification: { en: "Head Dimension", ar: "مقاس الرأس" }, value: { en: "1.9 mm slight T-head", ar: "1.9 مم رأس T مصغر" } },
      { specification: { en: "Collation", ar: "نوع التجميع" }, value: { en: "0° Straight Glue Collated Strip", ar: "شريط مستقيم 0° مجمّع بالغراء" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized (Zinc Plated)", ar: "مجلفن كهربائياً (مطلي بالزنك)" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "9.0 kg", ar: "9.0 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Fully compatible with standard pneumatic and cordless 18-gauge brad nailers (Bostitch, DeWalt, Makita, Metabo HPT, Paslode, and Senco).",
          ar: "متوافق كلياً مع جميع مسدسات التثبيت الهوائية واللاسلكية المخصصة لمسامير عيار 18 (بما فيها بوستيتش، ديوالت، ماكيتا، وميتابو)."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "F10", type: "18GA Straight Brad Nail", volume: "10 mm", boxQty: "5,000 pcs/box × 20 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073296472/brad-nails-f10_1792250260167_v2y8o6.png"]
  },

  "brad-nails-f15": {
    isNew: true,
    description: {
      en: "F15 18-gauge straight brad nail tailored for lightweight interior paneling, scribe moldings, and decorative furniture beading.",
      ar: "مسمار براد مستقيم F15 عيار 18 مصمم خصيصاً للألواح الداخلية الخفيفة وقوالب الزوايا والتشطيبات التجميلية للأثاث."
    },
    properties: [
      { en: "18 Gauge wire profile: 1.00 mm × 1.25 mm.", ar: "مقطع سلك مقاس 18: 1.00 مم × 1.25 مم." },
      { en: "Length: 15 mm (5/8\"). Head width: 1.9 mm.", ar: "الطول: 15 مم (5/8 بوصة). مقاس الرأس: 1.9 مم." },
      { en: "Corrosion-resistant zinc finish to prevent substrate discoloration.", ar: "طلاء زنك مقاوم للتآكل يمنع تصبغ الأخشاب بآثار الصدأ." },
      { en: "Precision chisel point prevents timber splitting along parallel grain.", ar: "سن إزميلي دقيق يمنع انشقاق ألياف الخشب الطولية." }
    ],
    applications: [
      { en: "Thin decorative paneling and lattice work.", ar: "الألواح الزخرفية الرقيقة وأعمال المشربيات والشبك." },
      { en: "Cabinet face trim and decorative furniture borders.", ar: "إطارات واجهات الخزائن والحواف التجميلية للأثاث." },
      { en: "Shoe moldings and window stop beading.", ar: "قوالب النعلات الخفيفة وأشرطة حواف النوافذ." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "18GA Straight Brad Nail", ar: "مسمار براد مستقيم عيار 18" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "1.00 mm × 1.25 mm (18 Gauge)", ar: "1.00 مم × 1.25 مم (عيار 18)" } },
      { specification: { en: "Length", ar: "الطول" }, value: { en: "15 mm (5/8\")", ar: "15 مم (5/8 بوصة)" } },
      { specification: { en: "Head Dimension", ar: "مقاس الرأس" }, value: { en: "1.9 mm slight T-head", ar: "1.9 مم رأس T مصغر" } },
      { specification: { en: "Collation", ar: "نوع التجميع" }, value: { en: "0° Straight Glue Collated Strip", ar: "شريط مستقيم 0° مجمّع بالغراء" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized (Zinc Plated)", ar: "مجلفن كهربائياً (مطلي بالزنك)" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "12.7 kg", ar: "12.7 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Fits all international standard 18-gauge straight magazine nailers and pneumatic finishing staplers.",
          ar: "يناسب جميع مسدسات التثبيت المستقيمة عيار 18 القياسية عالمياً والدباسات الهوائية التشطيبية."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "F15", type: "18GA Straight Brad Nail", volume: "15 mm", boxQty: "5,000 pcs/box × 20 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073296472/brad-nails-f15_1792250268303_ev89hz.png"]
  },

  "brad-nails-f20": {
    isNew: true,
    description: {
      en: "F20 18-gauge straight brad nail intended for interior casing, window mullion trim, and delicate cabinet face-frame assembly.",
      ar: "مسمار براد مستقيم F20 عيار 18 مخصص لإطارات الأبواب والنوافذ والتشطيبات الداخلية وتجميع واجهات الخزائن الدقيقة."
    },
    properties: [
      { en: "18 Gauge wire profile: 1.00 mm × 1.25 mm.", ar: "مقطع سلك مقاس 18: 1.00 مم × 1.25 مم." },
      { en: "Length: 20 mm (3/4\"). Head width: 1.9 mm.", ar: "الطول: 20 مم (3/4 بوصة). مقاس الرأس: 1.9 مم." },
      { en: "Zinc-galvanized coating provides rust protection in indoor conditioned spaces.", ar: "جلفنة بالزنك توفر حماية تامة من الصدأ في البيئات الداخلية المكيفة." },
      { en: "Low-profile head allows flush or countersunk drives ready for putty/lacquer.", ar: "رأس دقيق يغوص بسلاسة تحت مستوى السطح لتسهيل المعجون والدهان." }
    ],
    applications: [
      { en: "Base shoe moldings, interior door jamb trim, and casing.", ar: "قوالب النعلات السفلية وحواف إطارات الأبواب الداخلية." },
      { en: "Cabinet door lip moldings and decorative wood appliques.", ar: "قوالب شفاه أبواب الخزائن والزخارف الخشبية البارزة." },
      { en: "Light chair and stool assembly prior to structural adhesive cure.", ar: "تجميع هياكل الكراسي الخفيفة أثناء جفاف الغراء الهيكلي." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "18GA Straight Brad Nail", ar: "مسمار براد مستقيم عيار 18" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "1.00 mm × 1.25 mm (18 Gauge)", ar: "1.00 مم × 1.25 مم (عيار 18)" } },
      { specification: { en: "Length", ar: "الطول" }, value: { en: "20 mm (3/4\")", ar: "20 مم (3/4 بوصة)" } },
      { specification: { en: "Head Dimension", ar: "مقاس الرأس" }, value: { en: "1.9 mm slight T-head", ar: "1.9 مم رأس T مصغر" } },
      { specification: { en: "Collation", ar: "نوع التجميع" }, value: { en: "0° Straight Glue Collated Strip", ar: "شريط مستقيم 0° مجمّع بالغراء" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized (Zinc Plated)", ar: "مجلفن كهربائياً (مطلي بالزنك)" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "15.8 kg", ar: "15.8 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Engineered to fit standard 18-gauge brad guns: Bostitch BTFP1850K, Makita AF505N, DeWalt DCN680, Senco FinishPro 18BMg.",
          ar: "مصمم ليتوافق بدقة مع مسدسات المسامير القياسية عيار 18 مثل: بوستيتش، ماكيتا، ديوالت وسينكو."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "F20", type: "18GA Straight Brad Nail", volume: "20 mm", boxQty: "5,000 pcs/box × 20 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073296472/brad-nails-f20_1792250276101_a3iunw.png"]
  },

  "brad-nails-f25": {
    isNew: true,
    description: {
      en: "F25 18-gauge straight brad nail engineered for softwood and hardwood joinery, drawer guide mounts, and door stops.",
      ar: "مسمار براد مستقيم F25 عيار 18 مخصص لنجارة الأخشاب الصلبة واللينة، وتثبيت مجاري الأدراج، ومصدات الأبواب."
    },
    properties: [
      { en: "18 Gauge wire profile: 1.00 mm × 1.25 mm.", ar: "مقطع سلك مقاس 18: 1.00 مم × 1.25 مم." },
      { en: "Length: 25 mm (1\"). Head width: 1.9 mm.", ar: "الطول: 25 مم (1 بوصة). مقاس الرأس: 1.9 مم." },
      { en: "Electro-galvanized coating guarantees clean penetration and protection against oxidation.", ar: "طبقة زنك مجلفنة تضمن اختراقاً نظيفاً وحماية ممتازة ضد الأكسدة." },
      { en: "Straight stiff collation prevents magazine jamming under high cycle rates.", ar: "تجميع صلب ومستقيم يمنع انحشار المسامير أثناء الرمي السريع بالمسدس." }
    ],
    applications: [
      { en: "Drawer box fabrication and undermount slide fastening.", ar: "تصنيع صناديق الأدراج وتثبيت مجاري السحب السفلية." },
      { en: "Crown molding baseline nailing and cove profile installation.", ar: "تركيب قوالب التاج والزوايا المقعرة للأسقف." },
      { en: "Softwood sash windows and timber frame assembly.", ar: "نوافذ الشيش الخشبية وتجميع الهياكل الخفيفة." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "18GA Straight Brad Nail", ar: "مسمار براد مستقيم عيار 18" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "1.00 mm × 1.25 mm (18 Gauge)", ar: "1.00 مم × 1.25 مم (عيار 18)" } },
      { specification: { en: "Length", ar: "الطول" }, value: { en: "25 mm (1\")", ar: "25 مم (1 بوصة)" } },
      { specification: { en: "Head Dimension", ar: "مقاس الرأس" }, value: { en: "1.9 mm slight T-head", ar: "1.9 مم رأس T مصغر" } },
      { specification: { en: "Collation", ar: "نوع التجميع" }, value: { en: "0° Straight Glue Collated Strip", ar: "شريط مستقيم 0° مجمّع بالغراء" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized (Zinc Plated)", ar: "مجلفن كهربائياً (مطلي بالزنك)" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "19.9 kg", ar: "19.9 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Standard 0-degree straight magazine fit for pneumatic, gas-powered, and cordless 18GA brad guns.",
          ar: "مناسب لمخازن المسامير المستقيمة بزاوية 0 درجة لجميع مسدسات المسامير الهوائية والغازية واللاسلكية عيار 18."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "F25", type: "18GA Straight Brad Nail", volume: "25 mm", boxQty: "5,000 pcs/box × 20 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073296472/brad-nails-f25_1792250283395_1fapol.png"]
  },

  "brad-nails-f30": {
    isNew: true,
    description: {
      en: "F30 18-gauge straight brad nail designed for thick decorative molding, solid wood door trims, and commercial carcass assembly.",
      ar: "مسمار براد مستقيم F30 عيار 18 مصمم للقوالب الزخرفية السميكة وإطارات الأبواب الصلبة وتجميع هياكل الخزائن المتينة."
    },
    properties: [
      { en: "18 Gauge wire profile: 1.00 mm × 1.25 mm.", ar: "مقطع سلك مقاس 18: 1.00 مم × 1.25 مم." },
      { en: "Length: 30 mm (1-3/16\"). Head width: 1.9 mm.", ar: "الطول: 30 مم (1-3/16 بوصة). مقاس الرأس: 1.9 مم." },
      { en: "Uniform galvanized coating guarantees anti-corrosion properties.", ar: "جلفنة موحدة تضمن مقاومة ممتازة لعمليات التآكل." },
      { en: "Chisel point designed to maintain directional stability inside dense hardwoods.", ar: "سن إزميلي مصمم للحفاظ على استقامة مسار المسمار داخل الأخشاب الصلبة والكثيفة." }
    ],
    applications: [
      { en: "Thick chair rails, baseboards, and composite crown profiles.", ar: "حواجز الجدران العريضة، ونعلات الأرضيات، وقوالب التاج المركبة." },
      { en: "Cabinet end-panel fastening and architectural face frames.", ar: "تثبيت ألواح الخزائن الجانبية والواجهات المعمارية." },
      { en: "Interior hardwood threshold and door stop installation.", ar: "تركيب عتبات الأبواب الداخلية ومصدات الأبواب المصنوعة من الخشب الصلب." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "18GA Straight Brad Nail", ar: "مسمار براد مستقيم عيار 18" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "1.00 mm × 1.25 mm (18 Gauge)", ar: "1.00 مم × 1.25 مم (عيار 18)" } },
      { specification: { en: "Length", ar: "الطول" }, value: { en: "30 mm (1-3/16\")", ar: "30 مم (1-3/16 بوصة)" } },
      { specification: { en: "Head Dimension", ar: "مقاس الرأس" }, value: { en: "1.9 mm slight T-head", ar: "1.9 مم رأس T مصغر" } },
      { specification: { en: "Collation", ar: "نوع التجميع" }, value: { en: "0° Straight Glue Collated Strip", ar: "شريط مستقيم 0° مجمّع بالغراء" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized (Zinc Plated)", ar: "مجلفن كهربائياً (مطلي بالزنك)" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "23.35 kg", ar: "23.35 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Compatible with all professional straight magazine 18GA brad guns (Paslode, Senco, Makita, Hikoki, DeWalt).",
          ar: "متوافق مع كافة مسدسات التثبيت المستقيمة الاحترافية عيار 18 (باسلود، سينكو، ماكيتا، هيكوكي، ديوالت)."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "F30", type: "18GA Straight Brad Nail", volume: "30 mm", boxQty: "5,000 pcs/box × 20 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073296472/brad-nails-f30_1792250291382_51qq02.png"]
  },

  "brad-nails-f35": {
    isNew: true,
    description: {
      en: "F35 18-gauge straight brad nail built for architectural wall paneling, chair rail mounting, and solid timber case goods.",
      ar: "مسمار براد مستقيم F35 عيار 18 مخصص لتكسيات الجدران المعمارية وتثبيت حواجز الكراسي وتجميع الأثاث الخشبي المصمت."
    },
    properties: [
      { en: "18 Gauge wire profile: 1.00 mm × 1.25 mm.", ar: "مقطع سلك مقاس 18: 1.00 مم × 1.25 مم." },
      { en: "Length: 35 mm (1-3/8\"). Head width: 1.9 mm.", ar: "الطول: 35 مم (1-3/8 بوصة). مقاس الرأس: 1.9 مم." },
      { en: "Galvanized zinc surface layer prevents corrosion staining in fine wood species.", ar: "طبقة زنك مجلفنة تمنع التبقع الناتج عن التآكل في الأخشاب الفاخرة." },
      { en: "Superior tensile tensile-strength wire prevents buckling when penetrating dense oak or beech.", ar: "سلك ذو قوة شد فائقة تمنع انحناء المسمار عند اختراق أخشاب البلوط والزان الصلبة." }
    ],
    applications: [
      { en: "Tongue-and-groove solid wood wall and ceiling cladding.", ar: "تكسيات الأسقف والجدران الخشبية المتداخلة (عاشق ومعشوق)." },
      { en: "Heavy chair rails and decorative wall wainscoting.", ar: "حواجز الكراسي الثقيلة وألواح التكسية الجدارية السفلية (Wainscoting)." },
      { en: "Commercial millwork and furniture carcass joinery.", ar: "أعمال النجارة المعمارية التجارية وتجميع هياكل الأثاث." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "18GA Straight Brad Nail", ar: "مسمار براد مستقيم عيار 18" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "1.00 mm × 1.25 mm (18 Gauge)", ar: "1.00 مم × 1.25 مم (عيار 18)" } },
      { specification: { en: "Length", ar: "الطول" }, value: { en: "35 mm (1-3/8\")", ar: "35 مم (1-3/8 بوصة)" } },
      { specification: { en: "Head Dimension", ar: "مقاس الرأس" }, value: { en: "1.9 mm slight T-head", ar: "1.9 مم رأس T مصغر" } },
      { specification: { en: "Collation", ar: "نوع التجميع" }, value: { en: "0° Straight Glue Collated Strip", ar: "شريط مستقيم 0° مجمّع بالغراء" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized (Zinc Plated)", ar: "مجلفن كهربائياً (مطلي بالزنك)" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "17.9 kg", ar: "17.9 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Accepts any 18GA brad nailer with capacity up to 35 mm / 50 mm straight magazine.",
          ar: "يقبل العمل مع أي مسدس مسامير عيار 18 بمخزن مستقيم يستوعب أطوال حتى 35 مم أو 50 مم."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "F35", type: "18GA Straight Brad Nail", volume: "35 mm", boxQty: "5,000 pcs/box × 12 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073296472/brad-nails-f35_1792250336833_k9z3at.png"]
  },

  "brad-nails-f40": {
    isNew: true,
    description: {
      en: "F40 18-gauge straight brad nail for multi-layered moldings, door casing into timber studs, and solid timber cabinetry.",
      ar: "مسمار براد مستقيم F40 عيار 18 مخصص للقوالب متعددة الطبقات وتثبيت إطارات الأبواب في القوائم الخشبية والأثاث المصمت."
    },
    properties: [
      { en: "18 Gauge wire profile: 1.00 mm × 1.25 mm.", ar: "مقطع سلك مقاس 18: 1.00 مم × 1.25 مم." },
      { en: "Length: 40 mm (1-9/16\"). Head width: 1.9 mm.", ar: "الطول: 40 مم (1-9/16 بوصة). مقاس الرأس: 1.9 مم." },
      { en: "Electro-galvanized protection against surface tarnishing and moisture corrosion.", ar: "حماية بجلفنة الزنك ضد بهتان الأسطح والتآكل الرطب." },
      { en: "Precision chisel cut minimizes deviation when traversing dense grain lines.", ar: "قطع إزميلي دقيق يمنع انحراف المسمار أثناء اختراق العقد الخشبية الكثيفة." }
    ],
    applications: [
      { en: "Interior door jamb assemblies and full-casing installations.", ar: "تجميع إطارات الأبواب الداخلية وتركيب الكواشيط بالكامل." },
      { en: "Multi-step crown moldings and wide hardwood baseboards.", ar: "قوالب التاج متعددة الطبقات ونعلات الأرضيات العريضة من الخشب الصلب." },
      { en: "Hardwood cabinetry and structural decorative paneling.", ar: "خزائن الأخشاب الصلبة والألواح الزخرفية الهيكلية." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "18GA Straight Brad Nail", ar: "مسمار براد مستقيم عيار 18" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "1.00 mm × 1.25 mm (18 Gauge)", ar: "1.00 مم × 1.25 مم (عيار 18)" } },
      { specification: { en: "Length", ar: "الطول" }, value: { en: "40 mm (1-9/16\")", ar: "40 مم (1-9/16 بوصة)" } },
      { specification: { en: "Head Dimension", ar: "مقاس الرأس" }, value: { en: "1.9 mm slight T-head", ar: "1.9 مم رأس T مصغر" } },
      { specification: { en: "Collation", ar: "نوع التجميع" }, value: { en: "0° Straight Glue Collated Strip", ar: "شريط مستقيم 0° مجمّع بالغراء" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized (Zinc Plated)", ar: "مجلفن كهربائياً (مطلي بالزنك)" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "18.6 kg", ar: "18.6 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Operates seamlessly in all 18GA brad guns equipped with up to 50 mm capacity.",
          ar: "يعمل بسلاسة في كافة مسدسات التثبيت عيار 18 المزودة بمخزن يستوعب حتى 50 مم."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "F40", type: "18GA Straight Brad Nail", volume: "40 mm", boxQty: "5,000 pcs/box × 12 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073296472/brad-nails-f40_1792250321048_c1cbdb.png"]
  },

  "brad-nails-f40-heavy-duty": {
    isNew: true,
    description: {
      en: "F40 Heavy-Duty 18-gauge brad nail fabricated from cold-drawn high-tensile alloy wire, engineered for dense timber framing and structural architectural millwork.",
      ar: "مسمار براد F40 عيار 18 فائق المتانة مصنوع من أسلاك سبيكية عالية الشد ومسحوبة على البارد، مخصص لهياكل الأخشاب الكثيفة والنجارة المعمارية الإنشائية."
    },
    properties: [
      { en: "High-tensile hardened wire prevents buckling in engineered woods and composite hardwoods.", ar: "سلك فولاذي مقسّى عالي الشد يمنع الانثناء في الأخشاب المعالجة والصلبة." },
      { en: "Length: 40 mm (1-9/16\"). Reinforced 1.9 mm T-head provides high pull-through resistance.", ar: "الطول: 40 مم (1-9/16 بوصة). رأس T مدعم مقاس 1.9 مم يوفر مقاومة اقتلاع عالية." },
      { en: "Premium zinc coating ensures superior resistance to oxidation.", ar: "طلاء زنك ممتاز يوفر مقاومة فائقة ضد الأكسدة والعوامل الجوية الداخلية." },
      { en: "Ultra-consistent glue bonding prevents strip shearing in high-vibration cordless tools.", ar: "شريط تجميع عالي التماسك يمنع تكسر الشريط داخل المسدسات اللاسلكية ذات الاهتزاز العالي." }
    ],
    applications: [
      { en: "Heavy architectural millwork and multi-piece pilaster builds.", ar: "أعمال النجارة المعمارية الثقيلة وبناء الأعمدة الجدارية متعددة الطبقات." },
      { en: "Solid timber furniture framing and load-bearing carcass construction.", ar: "هياكل الأثاث الخشبي المصمت وتجميع الهياكل الحاملة للأوزان." },
      { en: "Fastening into tropical hardwoods, dense ash, and laminated strand timber.", ar: "التثبيت في الأخشاب الاستوائية الصلبة والزان الكثيف والخشب الرقائقي المقوى." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "18GA Heavy-Duty Brad Nail", ar: "مسمار براد مستقيم عيار 18 شديد التحمل" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "1.00 mm × 1.25 mm (Reinforced Core)", ar: "1.00 مم × 1.25 مم (قلب مقوى)" } },
      { specification: { en: "Length", ar: "الطول" }, value: { en: "40 mm (1-9/16\")", ar: "40 مم (1-9/16 بوصة)" } },
      { specification: { en: "Head Dimension", ar: "مقاس الرأس" }, value: { en: "1.9 mm reinforced T-head", ar: "1.9 مم رأس T مقوى" } },
      { specification: { en: "Collation", ar: "نوع التجميع" }, value: { en: "0° Straight Glue Collated Strip", ar: "شريط مستقيم 0° مجمّع بالغراء" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Heavy Electro-Galvanized", ar: "مجلفن كهربائياً بطبقة سميكة" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "20.2 kg", ar: "20.2 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Recommended for high-pressure pneumatic finish nailers and 18V/20V brushless cordless brad guns.",
          ar: "يوصى باستخدامه مع مسدسات التشطيب الهوائية ذات الضغط العالي ومسدسات البطارية 18V/20V عديمة المسفرات."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "F40", type: "18GA Heavy-Duty Brad", volume: "40 mm", boxQty: "5,000 pcs/box × 12 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073296472/brad-nails-f40-heavy-duty_1792251238345_lkvttr.png"]
  },

  "brad-nails-f45": {
    isNew: true,
    description: {
      en: "F45 18-gauge straight brad nail engineered for deep timber penetration, heavy decorative furniture framing, and architectural column cladding.",
      ar: "مسمار براد مستقيم F45 عيار 18 مصمم للاختراق العميق للأخشاب وهياكل الأثاث الزخرفية الثقيلة وتكسية الأعمدة المعمارية."
    },
    properties: [
      { en: "18 Gauge wire profile: 1.00 mm × 1.25 mm.", ar: "مقطع سلك مقاس 18: 1.00 مم × 1.25 مم." },
      { en: "Length: 45 mm (1-3/4\"). Head width: 1.9 mm.", ar: "الطول: 45 مم (1-3/4 بوصة). مقاس الرأس: 1.9 مم." },
      { en: "Zinc-plated finish prevents corrosion and staining in glue-assisted assemblies.", ar: "مطلي بطبقة زنك تمنع التآكل والتبقع في التجميعات المدعمة بالغراء." },
      { en: "High column strength allows deep penetration without bending or curling.", ar: "متانة عمودية فائقة تتيح الغوص العميق دون انحناء أو التواء المسمار." }
    ],
    applications: [
      { en: "Deep solid timber joinery and large window frame casing.", ar: "وصلات الأخشاب المصمتة العميقة وإطارات النوافذ الضخمة." },
      { en: "Heavy multi-tier crown molding and decorative mantle assemblies.", ar: "قوالب التاج الضخمة متعددة المستويات ومدافئ الديكور الخشبية." },
      { en: "Securing tongue-and-groove boards to wall furring strips.", ar: "تثبيت ألواح الخشب المتداخل في العوارض الخشبية الجدارية." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "18GA Straight Brad Nail", ar: "مسمار براد مستقيم عيار 18" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "1.00 mm × 1.25 mm (18 Gauge)", ar: "1.00 مم × 1.25 مم (عيار 18)" } },
      { specification: { en: "Length", ar: "الطول" }, value: { en: "45 mm (1-3/4\")", ar: "45 مم (1-3/4 بوصة)" } },
      { specification: { en: "Head Dimension", ar: "مقاس الرأس" }, value: { en: "1.9 mm slight T-head", ar: "1.9 مم رأس T مصغر" } },
      { specification: { en: "Collation", ar: "نوع التجميع" }, value: { en: "0° Straight Glue Collated Strip", ar: "شريط مستقيم 0° مجمّع بالغراء" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized (Zinc Plated)", ar: "مجلفن كهربائياً (مطلي بالزنك)" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "23.3 kg", ar: "23.3 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Requires an 18-gauge brad nailer capable of cycling up to 50 mm straight nails.",
          ar: "يتطلب مسدس مسامير عيار 18 قادراً على تشغيل مسامير مستقيمة حتى طول 50 مم."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "F45", type: "18GA Straight Brad Nail", volume: "45 mm", boxQty: "5,000 pcs/box × 12 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073296472/brad-nails-f45_1792250352102_oa8m8m.png"]
  },

  "brad-nails-f50": {
    isNew: true,
    description: {
      en: "F50 18-gauge straight brad nail representing maximum-length 18GA fastening for heavy timber casings, door frames, and architectural millwork.",
      ar: "مسمار براد مستقيم F50 عيار 18 يمثل الحد الأقصى لطول مسامير عيار 18 للتثبيت فائق العمق لإطارات الأبواب والنجارة المعمارية الثقيلة."
    },
    properties: [
      { en: "18 Gauge wire profile: 1.00 mm × 1.25 mm.", ar: "مقطع سلك مقاس 18: 1.00 مم × 1.25 مم." },
      { en: "Maximum brad length: 50 mm (2\"). Head width: 1.9 mm.", ar: "أقصى طول لمسامير البراد: 50 مم (2 بوصة). مقاس الرأس: 1.9 مم." },
      { en: "High-tensile drawn wire prevents deflection over the full 50 mm shaft length.", ar: "سلك مسحوب عالي الشد يمنع انحراف المسار على كامل طول الساق البالغ 50 مم." },
      { en: "Zinc electroplating protects against rust in conditioned residential and commercial interiors.", ar: "جلفنة كهربائية بالزنك تحمي من الصدأ في المشاريع السكنية والتجارية المغلقة." }
    ],
    applications: [
      { en: "Solid hardwood door jamb installation through drywall into structural wood framing.", ar: "تثبيت إطارات الأبواب الخشبية الصلبة عبر ألواح الجبس في الهياكل الخشبية الحاملة." },
      { en: "Large decorative mantelpieces, pilasters, and ceiling coffers.", ar: "رفوف المدافئ الديكورية الكبيرة، والأعمدة الجدارية، والأسقف المعلقة المجوفة." },
      { en: "Heavy architectural trim requiring maximum holding depth and minimal hole fill.", ar: "الكرانيش المعمارية الضخمة التي تتطلب أقصى عمق تثبيت مع أصغر أثر ثقب." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "18GA Straight Brad Nail", ar: "مسمار براد مستقيم عيار 18" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "1.00 mm × 1.25 mm (18 Gauge)", ar: "1.00 مم × 1.25 مم (عيار 18)" } },
      { specification: { en: "Length", ar: "الطول" }, value: { en: "50 mm (2\")", ar: "50 مم (2 بوصة)" } },
      { specification: { en: "Head Dimension", ar: "مقاس الرأس" }, value: { en: "1.9 mm slight T-head", ar: "1.9 مم رأس T مصغر" } },
      { specification: { en: "Collation", ar: "نوع التجميع" }, value: { en: "0° Straight Glue Collated Strip", ar: "شريط مستقيم 0° مجمّع بالغراء" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized (Zinc Plated)", ar: "مجلفن كهربائياً (مطلي بالزنك)" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "25.5 kg", ar: "25.5 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Compatible with all 50 mm (2-inch) capacity 18-gauge pneumatic and cordless brad nailers.",
          ar: "متوافق مع جميع مسدسات المسامير الهوائية واللاسلكية عيار 18 ذات سعة 50 مم (2 بوصة)."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "F50", type: "18GA Straight Brad Nail", volume: "50 mm", boxQty: "5,000 pcs/box × 12 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073296472/brad-nails-f50_1792250363213_lt654m.png"]
  },

  // ==========================================
  // 55 SERIES WIDE CROWN STAPLES (16 GAUGE)
  // ==========================================
  "u-nails-5540": {
    isNew: true,
    description: {
      en: "5540 is a heavy-duty 16-gauge wide crown staple engineered with a 26.5 mm (1\") crown and 40 mm leg length for industrial carton-to-skid fastening and heavy crating.",
      ar: "دبوس 5540 شديد التحمل عيار 16 بتاج عريض 26.5 مم (1 بوصة) وطول ساق 40 مم، مصمم لربط الصناديق الكرتونية الثقيلة بالطبالي الخشبية والتغليف الصناعي."
    },
    properties: [
      { en: "16 Gauge heavy wire profile: 1.40 mm × 1.60 mm.", ar: "مقطع سلك ثقيل مقاس 16: 1.40 مم × 1.60 مم." },
      { en: "Wide crown width: 26.5 mm (1\"). Leg length: 40 mm (1-9/16\").", ar: "تاج عريض: 26.5 مم (1 بوصة). طول الساق: 40 مم (1-9/16 بوصة)." },
      { en: "Wide crown bridge prevents corrugated carton pull-through under high shear forces.", ar: "جسر التاج العريض يمنع تمزق الكرتون المقوى وتلف العبوات تحت الضغط العالي." },
      { en: "Galvanized high-tensile steel wire with divergent chisel points.", ar: "سلك فولاذي عالي الشد مجلفن مع أسنان إزميلية متباعدة لتثبيت محكم." }
    ],
    applications: [
      { en: "Fastening triple-wall corrugated bulk containers directly to wooden pallets.", ar: "تثبيت كراتين الشحن الضخمة ثلاثية الطبقات مباشرة على الطبالي الخشبية." },
      { en: "Industrial furniture packaging, export crate assembly, and container blocking.", ar: "تغليف الأثاث الصناعي، وتجميع صناديق التصدير، وحواجز الحاويات." },
      { en: "Insulation board and composite sheeting attachment.", ar: "تثبيت ألواح العزل والألواح المركبة على الهياكل الخشبية." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "55 Series Wide Crown Staple", ar: "دبوس سلسلة 55 بتاج عريض" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "1.40 mm × 1.60 mm (16 Gauge)", ar: "1.40 مم × 1.60 مم (عيار 16)" } },
      { specification: { en: "Crown Width", ar: "عرض التاج" }, value: { en: "26.5 mm (1\")", ar: "26.5 مم (1 بوصة)" } },
      { specification: { en: "Leg Length", ar: "طول الساق" }, value: { en: "40 mm (1-9/16\")", ar: "40 مم (1-9/16 بوصة)" } },
      { specification: { en: "Point Style", ar: "نوع السن" }, value: { en: "Divergent Chisel Point", ar: "سن إزميلي متباعد" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Galvanized Steel", ar: "فولاذ مجلفن" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "11.7 kg", ar: "11.7 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Compatible with industrial 16-gauge 1-inch wide crown pneumatic staplers (Paslode G16, Bostitch 16S2, Senco P-series equivalents).",
          ar: "متوافق مع دباسات الهواء الصناعية عيار 16 ذات التاج العريض 1 بوصة (باسلود G16، بوستيتش 16S2، ومكافئات سينكو P)."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "5540", type: "55 Series Staple", volume: "40 mm", boxQty: "10,000 pcs/carton" }
    ],
    images: ["/images/all-products/category-1792073343435/u-nails-5540_1792249578814_qde8q5.png"]
  },

  "u-nails-5545": {
    isNew: true,
    description: {
      en: "5545 is a 16-gauge wide crown staple with a 45 mm leg length and 26.5 mm crown for heavy-duty shipping crates, pallet top-caps, and engineered wood packaging.",
      ar: "دبوس 5545 عيار 16 بتاج عريض 26.5 مم وساق بطول 45 مم، مخصص لصناديق الشحن الثقيلة وأغطية الطبالي وتغليف الأخشاب الهندسية."
    },
    properties: [
      { en: "16 Gauge heavy wire profile: 1.40 mm × 1.60 mm.", ar: "مقطع سلك ثقيل مقاس 16: 1.40 مم × 1.60 مم." },
      { en: "Wide crown width: 26.5 mm (1\"). Leg length: 45 mm (1-3/4\").", ar: "تاج عريض: 26.5 مم (1 بوصة). طول الساق: 45 مم (1-3/4 بوصة)." },
      { en: "High holding power across wide surface areas prevents tears in corrugate and veneer.", ar: "قوة تثبيت عالية عبر مساحة سطح عريضة تمنع تمزق الكرتون وقشور الخشب." },
      { en: "Galvanized zinc layer prevents degradation during sea freight export transit.", ar: "طبقة جلفنة تحمي المعدن من الرطوبة والصدأ أثناء الشحن البحري والتصدير." }
    ],
    applications: [
      { en: "Securing heavy wooden shipping crates and machinery skids.", ar: "تثبيت صناديق الشحن الخشبية الثقيلة وقواعد الآلات والمعدات." },
      { en: "Heavy pallet collar fabrication and top-cap closure.", ar: "تصنيع أطواق الطبالي الخشبية وإغلاق أغطية الحماية العلوية." },
      { en: "Fastening thick soundproofing membranes to structural timber.", ar: "تثبيت أغشية العزل الصوتي السميكة على الأخشاب الإنشائية." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "55 Series Wide Crown Staple", ar: "دبوس سلسلة 55 بتاج عريض" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "1.40 mm × 1.60 mm (16 Gauge)", ar: "1.40 مم × 1.60 مم (عيار 16)" } },
      { specification: { en: "Crown Width", ar: "عرض التاج" }, value: { en: "26.5 mm (1\")", ar: "26.5 مم (1 بوصة)" } },
      { specification: { en: "Leg Length", ar: "طول الساق" }, value: { en: "45 mm (1-3/4\")", ar: "45 مم (1-3/4 بوصة)" } },
      { specification: { en: "Point Style", ar: "نوع السن" }, value: { en: "Divergent Chisel Point", ar: "سن إزميلي متباعد" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Galvanized Steel", ar: "فولاذ مجلفن" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "13.2 kg", ar: "13.2 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Engineered for heavy-duty 1-inch wide crown pneumatic tackers and pallet staplers.",
          ar: "مصمم ليتوافق مع الدباسات الهوائية الثقيلة ودباسات الطبالي ذات التاج بعرض 1 بوصة."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "5545", type: "55 Series Staple", volume: "45 mm", boxQty: "10,000 pcs/carton" }
    ],
    images: ["/images/all-products/category-1792073343435/u-nails-5545_1792249652856_w2vowh.png"]
  },

  "u-nails-5550": {
    isNew: true,
    description: {
      en: "5550 is a maximum-length 16-gauge wide crown staple with a 50 mm leg length and 26.5 mm crown for timber ties, structural crating, and heavy industrial pallet building.",
      ar: "دبوس 5550 بأقصى عمق اختراق عيار 16 وتاج 26.5 مم وساق 50 مم لوصلات الأخشاب الإنشائية وصناديق الشحن العملاقة وتصنيع الطبالي الثقيلة."
    },
    properties: [
      { en: "16 Gauge heavy wire profile: 1.40 mm × 1.60 mm.", ar: "مقطع سلك ثقيل مقاس 16: 1.40 مم × 1.60 مم." },
      { en: "Wide crown width: 26.5 mm (1\"). Leg length: 50 mm (2\").", ar: "تاج عريض: 26.5 مم (1 بوصة). طول الساق: 50 مم (2 بوصة)." },
      { en: "Maximum withdrawal resistance in softwood stringers and hardwood runners.", ar: "أقصى مقاومة للاقتلاع والخلع في العوارض الخشبية اللينة والصلبة." },
      { en: "Divergent chisel point drives outward to lock securely into timber grain.", ar: "سن إزميلي متباعد ينحني للخارج أثناء الرمي لتثبيت قفلي داخل العروق الخشبية." }
    ],
    applications: [
      { en: "Heavy pallet top-cap bracing and industrial timber tie-downs.", ar: "تدعيم أغطية الطبالي الثقيلة والروابط الخشبية الصناعية المانعة للحركة." },
      { en: "Heavy export crating and export machinery wood encasement.", ar: "صناديق التصدير الثقيلة وهياكل التحويط الخشبية للمعدات الكبيرة." },
      { en: "Structural roofing and subfloor board attachment.", ar: "تثبيت ألواح الأسقف الإنشائية والأرضيات السفلية بالأخشاب الحاملة." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "55 Series Wide Crown Staple", ar: "دبوس سلسلة 55 بتاج عريض" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "1.40 mm × 1.60 mm (16 Gauge)", ar: "1.40 مم × 1.60 مم (عيار 16)" } },
      { specification: { en: "Crown Width", ar: "عرض التاج" }, value: { en: "26.5 mm (1\")", ar: "26.5 مم (1 بوصة)" } },
      { specification: { en: "Leg Length", ar: "طول الساق" }, value: { en: "50 mm (2\")", ar: "50 مم (2 بوصة)" } },
      { specification: { en: "Point Style", ar: "نوع السن" }, value: { en: "Divergent Chisel Point", ar: "سن إزميلي متباعد" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Galvanized Steel", ar: "فولاذ مجلفن" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "14.5 kg", ar: "14.5 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Operates in heavy-duty wide crown pneumatic staplers accommodating up to 50 mm (2\") leg length.",
          ar: "يعمل في مسدسات الدبابيس الهوائية الثقيلة ذات التاج العريض التي تستوعب أطوال حتى 50 مم (2 بوصة)."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "5550", type: "55 Series Staple", volume: "50 mm", boxQty: "10,000 pcs/carton" }
    ],
    images: ["/images/all-products/category-1792073343435/u-nails-5550_1792249662083_bvapd5.png"]
  },

  // ==========================================
  // 80 SERIES FINE CROWN STAPLES (21 GAUGE)
  // ==========================================
  "u-nails-8006": {
    isNew: true,
    description: {
      en: "8006 is a 21-gauge fine crown upholstery staple with a 12.8 mm crown and 6 mm leg length, designed for securing delicate fabrics, silk, and dust covers without puncturing.",
      ar: "دبوس تنجيد 8006 عيار 21 بتاج 12.8 مم وساق قصيرة 6 مم، مخصص لتثبيت الأقمشة الحريرية الرقيقة والبطانات دون تمزيق الألياف."
    },
    properties: [
      { en: "21 Gauge fine wire profile: 0.65 mm × 0.95 mm.", ar: "مقطع سلك رفيع مقاس 21: 0.65 مم × 0.95 مم." },
      { en: "Crown width: 12.8 mm (1/2\"). Leg length: 6 mm (1/4\").", ar: "عرض التاج: 12.8 مم (1/2 بوصة). طول الساق: 6 مم (1/4 بوصة)." },
      { en: "Flat crown profile clamps fabric fibers firmly without slicing through light weaves.", ar: "تاج مسطح يمسك بألياف القماش بإحكام دون قطع خيوط النسيج الضعيفة." },
      { en: "High-grade galvanized finish prevents rust marks from bleeding through upholstery.", ar: "جلفنة عالية النقاء تمنع تسرب بقع الصدأ وظهورها على أقمشة التنجيد الفاتحة." }
    ],
    applications: [
      { en: "Delicate upholstery fabrics, velvet, silk, and fine brocades.", ar: "أقمشة التنجيد الحساسة، المخمل، الحرير، والمنسوجات المطرزة الفاخرة." },
      { en: "Attaching cambric dust covers to sofa and chair bottoms.", ar: "تثبيت قماش بطانة الحماية السفلية (Cambric) لقواعد الكنب والكراسي." },
      { en: "Poster mounting, screen beading, and decorative braided ribbon trims.", ar: "تثبيت اللوحات والملصقات، وشبكات النوافذ، والشرائط الزخرفية المجدولة." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "80 Series Fine Crown Staple", ar: "دبوس سلسلة 80 بتاج دقيق" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "0.65 mm × 0.95 mm (21 Gauge)", ar: "0.65 مم × 0.95 مم (عيار 21)" } },
      { specification: { en: "Crown Width", ar: "عرض التاج" }, value: { en: "12.8 mm (1/2\")", ar: "12.8 مم (1/2 بوصة)" } },
      { specification: { en: "Leg Length", ar: "طول الساق" }, value: { en: "6 mm (1/4\")", ar: "6 مم (1/4 بوصة)" } },
      { specification: { en: "Point Style", ar: "نوع السن" }, value: { en: "Chisel Point", ar: "سن إزميلي" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized", ar: "مجلفن كهربائياً" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "17.7 kg", ar: "17.7 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Directly compatible with all 80-series upholstery staplers: BEA 80/16, Senco SFW09-AT, Omer 80.16, Tacwise A8016V.",
          ar: "متوافق ومكافئ لمسدسات التنجيد العالمية من الفئة 80: BEA 80/16 و Senco SFW09-AT و Omer 80.16 و Tacwise."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "8006", type: "80 Series Fine Crown Staple", volume: "6 mm", boxQty: "10,000 pcs/box × 20 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073343435/u-nails-8006_1792251601924_wzkajs.png"]
  },

  "u-nails-8008": {
    isNew: true,
    description: {
      en: "8008 is an industry-standard 21-gauge fine crown upholstery staple with an 8 mm leg length for securing medium fabrics, leather, and foam cushions to wood frames.",
      ar: "دبوس تنجيد قياسي 8008 عيار 21 بساق 8 مم وتاج 12.8 مم، مخصص لتثبيت الأقمشة المتوسطة والجلود والإسفنج في الهياكل الخشبية."
    },
    properties: [
      { en: "21 Gauge fine wire profile: 0.65 mm × 0.95 mm.", ar: "مقطع سلك رفيع مقاس 21: 0.65 مم × 0.95 مم." },
      { en: "Crown width: 12.8 mm (1/2\"). Leg length: 8 mm (5/16\").", ar: "عرض التاج: 12.8 مم (1/2 بوصة). طول الساق: 8 مم (5/16 بوصة)." },
      { en: "Balanced leg length penetrates through multi-layered fabrics without splitting thin frame rails.", ar: "طول ساق متوازن يخترق طبقات القماش المتعددة دون إتلاف حواف الخشب الرفيعة." },
      { en: "Galvanized coating provides long-term corrosion protection.", ar: "جلفنة زنك توفر حماية طويلة الأمد ضد التآكل والأكسدة." }
    ],
    applications: [
      { en: "Attaching leather, faux leather (vinyl), and jacquard fabrics to furniture frames.", ar: "تثبيت الجلود الطبيعية والصناعية (الفينيل) وأقمشة الجاكار بهياكل الأثاث." },
      { en: "Securing sofa foam padding, cotton batting, and polyester wadding.", ar: "تثبيت حشوات الإسفنج وطبقات القطن والبوليستر في الأرائك." },
      { en: "Carpet underlayment and thermal insulating foil attachment.", ar: "تثبيت بطانات السجاد السفلية ورقائق العزل الحراري العاكسة." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "80 Series Fine Crown Staple", ar: "دبوس سلسلة 80 بتاج دقيق" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "0.65 mm × 0.95 mm (21 Gauge)", ar: "0.65 مم × 0.95 مم (عيار 21)" } },
      { specification: { en: "Crown Width", ar: "عرض التاج" }, value: { en: "12.8 mm (1/2\")", ar: "12.8 مم (1/2 بوصة)" } },
      { specification: { en: "Leg Length", ar: "طول الساق" }, value: { en: "8 mm (5/16\")", ar: "8 مم (5/16 بوصة)" } },
      { specification: { en: "Point Style", ar: "نوع السن" }, value: { en: "Chisel Point", ar: "سن إزميلي" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized", ar: "مجلفن كهربائياً" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "20.86 kg", ar: "20.86 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Operates in all standard Type 80 pneumatic upholstery guns.",
          ar: "يعمل بكفاءة في كافة مسدسات التنجيد الهوائية المخصصة لسلسلة 80 القياسية."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "8008", type: "80 Series Staple", volume: "8 mm", boxQty: "10,000 pcs/box × 20 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073343435/u-nails-8008_1792249739067_nvxph8.png"]
  },

  "u-nails-8010": {
    isNew: true,
    description: {
      en: "8010 is a 21-gauge fine crown staple with a 10 mm leg length and 12.8 mm crown for heavy upholstery fabrics, automotive seat trim, and picture framing backings.",
      ar: "دبوس 8010 عيار 21 بساق 10 مم وتاج 12.8 مم، مخصص لأقمشة التنجيد السميكة، وتنجيد مقاعد السيارات، وتثبيت ظهور براويز الصور."
    },
    properties: [
      { en: "21 Gauge fine wire profile: 0.65 mm × 0.95 mm.", ar: "مقطع سلك رفيع مقاس 21: 0.65 مم × 0.95 مم." },
      { en: "Crown width: 12.8 mm (1/2\"). Leg length: 10 mm (3/8\").", ar: "عرض التاج: 12.8 مم (1/2 بوصة). طول الساق: 10 مم (3/8 بوصة)." },
      { en: "Drives deeply through dense layers into solid hardwood and plywood frames.", ar: "يخترق الطبقات الكثيفة بسهولة ليستقر بعمق في أخشاب الزان والأبلكاش." },
      { en: "Galvanized zinc layer shields the fastener against sweat and atmospheric humidity.", ar: "طبقة زنك مجلفنة تحمي الدبوس من الرطوبة الجوية والعوامل البيئية." }
    ],
    applications: [
      { en: "Heavy fabric and leather upholstery on hardwood dining and lounge chairs.", ar: "تنجيد الأقمشة والجلود الثقيلة على كراسي الطعام والصالونات الخشبية الصلبة." },
      { en: "Automotive interior headliners and door trim restoration.", ar: "تثبيت بطانات أسقف السيارات وإعادة تجديد كسوة الأبواب الداخلية." },
      { en: "Fixing MDF and hardboard backer panels on picture frames and mirrors.", ar: "تثبيت ألواح MDF وظهور الأبلكاش في إطارات الصور والمرايا." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "80 Series Fine Crown Staple", ar: "دبوس سلسلة 80 بتاج دقيق" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "0.65 mm × 0.95 mm (21 Gauge)", ar: "0.65 مم × 0.95 مم (عيار 21)" } },
      { specification: { en: "Crown Width", ar: "عرض التاج" }, value: { en: "12.8 mm (1/2\")", ar: "12.8 مم (1/2 بوصة)" } },
      { specification: { en: "Leg Length", ar: "طول الساق" }, value: { en: "10 mm (3/8\")", ar: "10 مم (3/8 بوصة)" } },
      { specification: { en: "Point Style", ar: "نوع السن" }, value: { en: "Chisel Point", ar: "سن إزميلي" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized", ar: "مجلفن كهربائياً" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "23.7 kg", ar: "23.7 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Standard 80-series tacker compatibility (pneumatic, electric, and manual tackers).",
          ar: "توافق قياسي مع جميع دباسات سلسلة 80 (الهوائية والكهربائية واليدوية)."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "8010", type: "80 Series Staple", volume: "10 mm", boxQty: "10,000 pcs/box × 20 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073343435/u-nails-8010_1792249747267_cjfdt6.png"]
  },

  "u-nails-8012": {
    isNew: true,
    description: {
      en: "8012 is a 21-gauge fine crown staple featuring a 12 mm leg length for layered upholstery, thick foam-to-frame bonding, and furniture refurbishment.",
      ar: "دبوس 8012 عيار 21 بساق 12 مم وتاج 12.8 مم للأقمشة متعددة الطبقات، وتثبيت الإسفنج السميك، وتجديد تنجيد الأثاث القديم."
    },
    properties: [
      { en: "21 Gauge fine wire profile: 0.65 mm × 0.95 mm.", ar: "مقطع سلك رفيع مقاس 21: 0.65 مم × 0.95 مم." },
      { en: "Crown width: 12.8 mm (1/2\"). Leg length: 12 mm (1/2\").", ar: "عرض التاج: 12.8 مم (1/2 بوصة). طول الساق: 12 مم (1/2 بوصة)." },
      { en: "Extended 12 mm leg length anchors multiple folded fabric hems securely.", ar: "ساق بطول 12 مم تؤمن أطراف الأقمشة المطوية متعددة الطبقات بقوة ممتازة." },
      { en: "Galvanized wire withstands ambient moisture without staining coverings.", ar: "سلك مجلفن يقاوم الرطوبة ولا يترك بقعاً على أغطية الأثاث الخارجية." }
    ],
    applications: [
      { en: "Heavy upholstery with thick foam padding and Dacron layers.", ar: "التنجيد الثقيل مع طبقات الإسفنج السميك وألياف الداكرون." },
      { en: "Commercial booth seating and restaurant banquette upholstery.", ar: "تنجيد جلسات المطاعم والمقاهي والأماكن التجارية المعرضة للاستخدام المكثف." },
      { en: "Spring-tie twine securing and furniture webbing anchoring.", ar: "تثبيت خيوط ربط السوست والزنبرك وتثبيت أحزمة التنجيد المطاطية." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "80 Series Fine Crown Staple", ar: "دبوس سلسلة 80 بتاج دقيق" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "0.65 mm × 0.95 mm (21 Gauge)", ar: "0.65 مم × 0.95 مم (عيار 21)" } },
      { specification: { en: "Crown Width", ar: "عرض التاج" }, value: { en: "12.8 mm (1/2\")", ar: "12.8 مم (1/2 بوصة)" } },
      { specification: { en: "Leg Length", ar: "طول الساق" }, value: { en: "12 mm (1/2\")", ar: "12 مم (1/2 بوصة)" } },
      { specification: { en: "Point Style", ar: "نوع السن" }, value: { en: "Chisel Point", ar: "سن إزميلي" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized", ar: "مجلفن كهربائياً" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "27.24 kg", ar: "27.24 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Fits all 80-series fine wire staplers accepting 12 mm to 16 mm length.",
          ar: "يناسب جميع دباسات السلك الرفيع من السلسلة 80 التي تستوعب أطوال حتى 12 مم أو 16 مم."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "8012", type: "80 Series Staple", volume: "12 mm", boxQty: "10,000 pcs/box × 20 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073343435/u-nails-8012_1792249753424_tqockc.png"]
  },

  "u-nails-8014": {
    isNew: true,
    description: {
      en: "8014 is a 21-gauge fine crown staple with a 14 mm leg length and 12.8 mm crown for thick fabric folds, crate linings, and mattress manufacturing.",
      ar: "دبوس 8014 عيار 21 بساق 14 مم وتاج 12.8 مم، مخصص لثنيات الأقمشة شديدة السماكة وبطانات الصناديق وتصنيع المراتب."
    },
    properties: [
      { en: "21 Gauge fine wire profile: 0.65 mm × 0.95 mm.", ar: "مقطع سلك رفيع مقاس 21: 0.65 مم × 0.95 مم." },
      { en: "Crown width: 12.8 mm (1/2\"). Leg length: 14 mm (9/16\").", ar: "عرض التاج: 12.8 مم (1/2 بوصة). طول الساق: 14 مم (9/16 بوصة)." },
      { en: "Drives deep into solid wood frames without surface crowning deformation.", ar: "يغوص بعمق في الهياكل الخشبية الصلبة دون انثناء أو تشوه في استواء التاج." },
      { en: "Galvanized zinc layer provides rust resistance in export packaging.", ar: "طبقة الزنك المجلفنة تضمن مقاومة التآكل في تغليف وتصنيع بضائع التصدير." }
    ],
    applications: [
      { en: "Heavy-duty sofa frame corner upholstery and multi-layer fabric tucking.", ar: "تنجيد زوايا الأرائك الثقيلة وتثبيت طبقات القماش المطوية المتعددة." },
      { en: "Wooden crate weather-barrier liner and vapor retarder fastening.", ar: "تثبيت البطانات العازلة للرطوبة والرياح داخل الصناديق الخشبية." },
      { en: "Mattress borders, divan base quilting, and bedding spring casings.", ar: "حواف المراتب، وتنجيد قواعد الأسرة، وتثبيت أغطية السوست الداخلية." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "80 Series Fine Crown Staple", ar: "دبوس سلسلة 80 بتاج دقيق" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "0.65 mm × 0.95 mm (21 Gauge)", ar: "0.65 مم × 0.95 مم (عيار 21)" } },
      { specification: { en: "Crown Width", ar: "عرض التاج" }, value: { en: "12.8 mm (1/2\")", ar: "12.8 مم (1/2 بوصة)" } },
      { specification: { en: "Leg Length", ar: "طول الساق" }, value: { en: "14 mm (9/16\")", ar: "14 مم (9/16 بوصة)" } },
      { specification: { en: "Point Style", ar: "نوع السن" }, value: { en: "Chisel Point", ar: "سن إزميلي" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized", ar: "مجلفن كهربائياً" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "16.52 kg", ar: "16.52 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Requires an 80-series stapler accepting fasteners up to 14 mm or 16 mm depth.",
          ar: "يتطلب دباسة من السلسلة 80 تدعم استيعاب أطوال دبابيس حتى 14 مم أو 16 مم."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "8014", type: "80 Series Staple", volume: "14 mm", boxQty: "10,000 pcs/box × 10 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073343435/u-nails-8014_1792249789558_esf7c8.png"]
  },

  "u-nails-8016": {
    isNew: true,
    description: {
      en: "8016 is a maximum-length 21-gauge fine crown staple with a 16 mm leg length for deep anchoring into hardwood frames, multi-layer batting, and heavy acoustic panels.",
      ar: "دبوس 8016 عيار 21 بأقصى طول ساق 16 مم وتاج 12.8 مم للتثبيت فائق العمق في الأخشاب الصلبة، والحشوات متعددة الطبقات، وألواح العزل الصوتي."
    },
    properties: [
      { en: "21 Gauge fine wire profile: 0.65 mm × 0.95 mm.", ar: "مقطع سلك رفيع مقاس 21: 0.65 مم × 0.95 مم." },
      { en: "Crown width: 12.8 mm (1/2\"). Maximum leg length: 16 mm (5/8\").", ar: "عرض التاج: 12.8 مم (1/2 بوصة). أقصى طول للساق: 16 مم (5/8 بوصة)." },
      { en: "Extended 16 mm penetration achieves exceptional holding power in composite boards and timber.", ar: "اختراق ممتد بطول 16 مم يحقق قوة تثبيت هائلة في الألواح الخشبية المركبة." },
      { en: "Galvanized zinc coating prevents atmospheric rust and degradation.", ar: "طبقة زنك مجلفنة تحمي من الصدأ والتآكل الجوي طويل الأمد." }
    ],
    applications: [
      { en: "Hardwood sofa frames requiring deep mechanical grip through thick foam layers.", ar: "هياكل الأرائك الصلبة التي تتطلب تثبيتاً ميكانيكياً عميقاً عبر طبقات الإسفنج الكثيفة." },
      { en: "Acoustic wall panel installation and sound-dampening felt mounting.", ar: "تركيب ألواح العزل الصوتي الجدارية وتثبيت طبقات اللباد الماص للصوت." },
      { en: "Light wooden fruit crates and decorative gift container fabrication.", ar: "تصنيع صناديق الفاكهة الخشبية الخفيفة وصناديق الهدايا الزخرفية." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "80 Series Fine Crown Staple", ar: "دبوس سلسلة 80 بتاج دقيق" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "0.65 mm × 0.95 mm (21 Gauge)", ar: "0.65 مم × 0.95 مم (عيار 21)" } },
      { specification: { en: "Crown Width", ar: "عرض التاج" }, value: { en: "12.8 mm (1/2\")", ar: "12.8 مم (1/2 بوصة)" } },
      { specification: { en: "Leg Length", ar: "طول الساق" }, value: { en: "16 mm (5/8\")", ar: "16 مم (5/8 بوصة)" } },
      { specification: { en: "Point Style", ar: "نوع السن" }, value: { en: "Chisel Point", ar: "سن إزميلي" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized", ar: "مجلفن كهربائياً" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "18.32 kg", ar: "18.32 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Operates in all full-capacity 16 mm 80-series pneumatic staplers (e.g., BEA 80/16-420, Omer 80.16).",
          ar: "يعمل بكفاءة في جميع مسدسات التنجيد الهوائية كاملة السعة حتى 16 مم (مثل BEA 80/16-420 و Omer 80.16)."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "8016", type: "80 Series Staple", volume: "16 mm", boxQty: "10,000 pcs/box × 10 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073343435/u-nails-8016_1792249797777_ar5obd.png"]
  },

  // ==========================================
  // 10J SERIES NARROW CROWN STAPLES (20 GAUGE)
  // ==========================================
  "u-nails-1008j": {
    isNew: true,
    description: {
      en: "1008J is a 20-gauge narrow crown staple with an 11.2 mm crown and 8 mm leg length, widely used in Asian-specification pneumatic tackers for leathercraft and light cabinet lining.",
      ar: "دبوس 1008J عيار 20 بتاج 11.2 مم وساق 8 مم، واسع الانتشار في مسدسات التنجيد الهوائية للمصنوعات الجلدية وبطانات الخزائن الخفيفة."
    },
    properties: [
      { en: "20 Gauge wire profile: 0.60 mm × 1.20 mm.", ar: "مقطع سلك مقاس 20: 0.60 مم × 1.20 مم." },
      { en: "Crown width: 11.2 mm (7/16\"). Leg length: 8 mm (5/16\").", ar: "عرض التاج: 11.2 مم (7/16 بوصة). طول الساق: 8 مم (5/16 بوصة)." },
      { en: "Flat wire construction gives exceptional pull-through strength on leather edges.", ar: "تصميم السلك المفلطح يوفر قوة مسك استثنائية لأطراف وحواف الجلود." },
      { en: "Galvanized zinc layer prevents rust discoloration over time.", ar: "طبقة زنك مجلفنة تمنع التآكل وتغير لون السطح مع مرور الوقت." }
    ],
    applications: [
      { en: "Automotive door card trim and motorcycle seat re-upholstery.", ar: "كسوة أبواب السيارات الداخلية وإعادة تنجيد مقاعد الدراجات النارية." },
      { en: "Leathercraft, luxury briefcases, and wooden presentation gift boxes.", ar: "المصنوعات الجلدية، والحقائب الفاخرة، وصناديق الهدايا الخشبية التقديرية." },
      { en: "Shoe insole and welt attachment in footwear manufacturing.", ar: "تثبيت بطانات الأحذية الداخلية ونعل التثبيت في مصانع الأحذية." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "10J Series Narrow Crown Staple", ar: "دبوس سلسلة 10J بتاج ضيق" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "0.60 mm × 1.20 mm (20 Gauge)", ar: "0.60 مم × 1.20 مم (عيار 20)" } },
      { specification: { en: "Crown Width", ar: "عرض التاج" }, value: { en: "11.2 mm (7/16\")", ar: "11.2 مم (7/16 بوصة)" } },
      { specification: { en: "Leg Length", ar: "طول الساق" }, value: { en: "8 mm (5/16\")", ar: "8 مم (5/16 بوصة)" } },
      { specification: { en: "Point Style", ar: "نوع السن" }, value: { en: "Chisel Point", ar: "سن إزميلي" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized", ar: "مجلفن كهربائياً" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "11.97 kg", ar: "11.97 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Specifically designed for standard 10J / 1022J pneumatic tackers (Makita AT1025, Max TA-10J, and generic 1022J staplers).",
          ar: "مصمم خصيصاً لدباسات الهواء القياسية فئة 10J / 1022J (بما فيها ماكيتا AT1025 وماكس TA-10J ودباسات 1022J الشائعة)."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "1008J", type: "10J Series Staple", volume: "8 mm", boxQty: "5,000 pcs/box × 20 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073343435/u-nails-1008j_1792250200531_zpxb9a.png"]
  },

  "u-nails-1010j": {
    isNew: true,
    description: {
      en: "1010J is a 20-gauge narrow crown staple with an 11.2 mm crown and 10 mm leg length for sofa upholstery, canvas gallery stretching, and woven webbing attachment.",
      ar: "دبوس 1010J عيار 20 بتاج 11.2 مم وساق 10 مم لتنجيد الأرائك، وشد لوحات الكانفاس، وتثبيت أشرطة النسيج بالخشب."
    },
    properties: [
      { en: "20 Gauge wire profile: 0.60 mm × 1.20 mm.", ar: "مقطع سلك مقاس 20: 0.60 مم × 1.20 مم." },
      { en: "Crown width: 11.2 mm (7/16\"). Leg length: 10 mm (3/8\").", ar: "عرض التاج: 11.2 مم (7/16 بوصة). طول الساق: 10 مم (3/8 بوصة)." },
      { en: "Optimal 10 mm depth delivers firm holding power in solid pine, birch, and plywood frames.", ar: "عمق 10 مم مثالي يوفر قوة تثبيت متينة في أخشاب الصنوبر والأبلكاش." },
      { en: "Coated with anti-corrosive zinc to safeguard against ambient humidity.", ar: "مطلي بالزنك المقاوم للتآكل لحمايته من الرطوبة الجوية في ورش التصنيع." }
    ],
    applications: [
      { en: "Artist canvas stretching and fabric screen printing frame tensioning.", ar: "شد لوحات الرسم القماشية (الكانفاس) وإطارات الطباعة الحريرية." },
      { en: "Furniture webbing, elastic band mounting, and sofa frame trim.", ar: "تثبيت الأشرطة المطاطية وأحزمة الدعم في هياكل الأرائك." },
      { en: "Attaching woven cane webbing to cabinet door frames.", ar: "تثبيت حبال الخيزران (القش/الكان) المنسوج في إطارات أبواب الخزائن." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "10J Series Narrow Crown Staple", ar: "دبوس سلسلة 10J بتاج ضيق" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "0.60 mm × 1.20 mm (20 Gauge)", ar: "0.60 مم × 1.20 مم (عيار 20)" } },
      { specification: { en: "Crown Width", ar: "عرض التاج" }, value: { en: "11.2 mm (7/16\")", ar: "11.2 مم (7/16 بوصة)" } },
      { specification: { en: "Leg Length", ar: "طول الساق" }, value: { en: "10 mm (3/8\")", ar: "10 مم (3/8 بوصة)" } },
      { specification: { en: "Point Style", ar: "نوع السن" }, value: { en: "Chisel Point", ar: "سن إزميلي" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized", ar: "مجلفن كهربائياً" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "14.5 kg", ar: "14.5 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Operates in all 10J series air staplers (such as 1013J, 1022J series guns).",
          ar: "يعمل في جميع مسدسات الدبابيس الهوائية فئة 10J (مثل مسدسات 1013J و 1022J)."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "1010J", type: "10J Series Staple", volume: "10 mm", boxQty: "5,000 pcs/box × 20 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073343435/u-nails-1010j_1792250210521_vloyt1.png"]
  },

  "u-nails-1013j": {
    isNew: true,
    description: {
      en: "1013J is a 20-gauge staple with an 11.2 mm crown and 13 mm leg length for heavy sofa frame joinery, plywood backing, and acoustic lining.",
      ar: "دبوس 1013J عيار 20 بتاج 11.2 مم وساق 13 مم، مخصص لربط هياكل الكنب الثقيلة، وتثبيت ألواح الأبلكاش الخلفية، والبطانات الصوتية."
    },
    properties: [
      { en: "20 Gauge wire profile: 0.60 mm × 1.20 mm.", ar: "مقطع سلك مقاس 20: 0.60 مم × 1.20 مم." },
      { en: "Crown width: 11.2 mm (7/16\"). Leg length: 13 mm (1/2\").", ar: "عرض التاج: 11.2 مم (7/16 بوصة). طول الساق: 13 مم (1/2 بوصة)." },
      { en: "13 mm deep anchoring delivers high resistance to lateral shear and pull-out.", ar: "عمق تثبيت 13 مم يوفر مقاومة عالية لقوى القص الجانبية والاقتلاع." },
      { en: "Precision chisel points cut cleanly through dense wood veneers.", ar: "رؤوس إزميلية دقيقة تخترق قشور الخشب الكثيفة بشكل نظيف." }
    ],
    applications: [
      { en: "Heavy-duty sofa frame component fastening and corner block bracing.", ar: "تثبيت مكونات هياكل الأرائك الثقيلة وقطع التدعيم الركنية." },
      { en: "Securing 3 mm to 6 mm plywood backs to cabinet carcases.", ar: "تثبيت ألواح الأبلكاش بسماكة 3 مم إلى 6 مم في ظهور الخزائن." },
      { en: "Industrial pallet collar identification tags and heavy labels.", ar: "تثبيت بطاقات التعريف المعدنية والبلاستيكية على الطبالي الخشبية." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "10J Series Narrow Crown Staple", ar: "دبوس سلسلة 10J بتاج ضيق" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "0.60 mm × 1.20 mm (20 Gauge)", ar: "0.60 مم × 1.20 مم (عيار 20)" } },
      { specification: { en: "Crown Width", ar: "عرض التاج" }, value: { en: "11.2 mm (7/16\")", ar: "11.2 مم (7/16 بوصة)" } },
      { specification: { en: "Leg Length", ar: "طول الساق" }, value: { en: "13 mm (1/2\")", ar: "13 مم (1/2 بوصة)" } },
      { specification: { en: "Point Style", ar: "نوع السن" }, value: { en: "Chisel Point", ar: "سن إزميلي" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized", ar: "مجلفن كهربائياً" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "16.89 kg", ar: "16.89 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Operates in all 10J pneumatic air staplers accommodating 13 mm or longer fasteners (1013J / 1022J).",
          ar: "يعمل في جميع مسدسات الدبابيس الهوائية فئة 10J التي تستوعب أطوال حتى 13 مم أو أكثر (مثل 1013J و 1022J)."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "1013J", type: "10J Series Staple", volume: "13 mm", boxQty: "5,000 pcs/box × 20 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073343435/u-nails-1013j_1792250219306_3zxcjz.png"]
  },

  // ==========================================
  // 14 / 71 SERIES FINE WIRE STAPLES (22 GAUGE)
  // ==========================================
  "u-nails-1406": {
    isNew: true,
    description: {
      en: "1406 is an ultra-fine 22-gauge wire staple with a 10.1 mm crown and 6 mm leg length for delicate fabric fastening, automotive interiors, and thin paper-board mounting.",
      ar: "دبوس سلك رفيع جداً 1406 عيار 22 بتاج 10.1 مم وساق 6 مم، مخصص لتثبيت الأقمشة فائقة الرقة، والديكورات الداخلية للسيارات، والكرتون الخفيف."
    },
    properties: [
      { en: "22 Gauge ultra-fine wire profile: 0.50 mm × 0.75 mm.", ar: "مقطع سلك فائق الدقة مقاس 22: 0.50 مم × 0.75 مم." },
      { en: "Crown width: 10.1 mm. Leg length: 6 mm (1/4\").", ar: "عرض التاج: 10.1 مم. طول الساق: 6 مم (1/4 بوصة)." },
      { en: "Ultra-thin wire footprint disappears completely into fabric piles without slicing yarns.", ar: "سُمك سلك دقيق جداً يختفي تماماً داخل وبر الأقمشة دون قطع الخيوط الدقيقة." },
      { en: "Galvanized zinc layer prevents rust bleed on fine textiles.", ar: "طبقة زنك مجلفنة تحول دون ظهور بقع الصدأ على الأقمشة الراقية." }
    ],
    applications: [
      { en: "Ultra-fine textile fastening, silk lining, and organza drapery mounting.", ar: "تثبيت المنسوجات الحساسة، وبطانات الحرير، والستائر الشفافة الفاخرة." },
      { en: "Fastening protective paperboard and plastic film wrap to wood trim.", ar: "تثبيت ألواح الورق المقوى والأغشية البلاستيكية الواقية بالشرائح الخشبية." },
      { en: "Delicate craft wood assemblies, architectural models, and gift boxes.", ar: "المصنوعات الخشبية الحرفية الدقيقة، والمجسمات الهندسية، وصناديق الهدايا." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "14 Series Fine Wire Staple", ar: "دبوس سلسلة 14 بسلك دقيق" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "0.50 mm × 0.75 mm (22 Gauge)", ar: "0.50 مم × 0.75 مم (عيار 22)" } },
      { specification: { en: "Crown Width", ar: "عرض التاج" }, value: { en: "10.1 mm", ar: "10.1 مم" } },
      { specification: { en: "Leg Length", ar: "طول الساق" }, value: { en: "6 mm (1/4\")", ar: "6 مم (1/4 بوصة)" } },
      { specification: { en: "Point Style", ar: "نوع السن" }, value: { en: "Chisel Point", ar: "سن إزميلي" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized", ar: "مجلفن كهربائياً" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "11.73 kg", ar: "11.73 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Interchangeable with 71-series fine wire tackers (BEA 71/16, Senco C04, Bostitch 72).",
          ar: "مكافئ ومتبادل الاستخدام مع مسدسات التنجيد الدقيقة فئة 71 (BEA 71/16 و Senco C و Bostitch 72)."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "1406", type: "14 Series Fine Wire Staple", volume: "6 mm", boxQty: "10,000 pcs/box × 20 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073343435/u-nails-1406_1792251816152_h43pp6.png"]
  },

  "u-nails-1408": {
    isNew: true,
    description: {
      en: "1408 is a 22-gauge fine wire staple with a 10.1 mm crown and 8 mm leg length for fine upholstery, art canvas mounting, and minimal-mark trim fastening.",
      ar: "دبوس سلك رفيع 1408 عيار 22 بتاج 10.1 مم وساق 8 مم للتنجيد الدقيق، وتثبيت لوحات الرسم، مع ترك أدنى أثر على السطح."
    },
    properties: [
      { en: "22 Gauge ultra-fine wire profile: 0.50 mm × 0.75 mm.", ar: "مقطع سلك فائق الدقة مقاس 22: 0.50 مم × 0.75 مم." },
      { en: "Crown width: 10.1 mm. Leg length: 8 mm (5/16\").", ar: "عرض التاج: 10.1 مم. طول الساق: 8 مم (5/16 بوصة)." },
      { en: "Narrow wire diameter preserves timber surfaces without indentations.", ar: "قطر السلك الرفيع يحمي الأسطح الخشبية من الانبعاجات وآثار الضربات." },
      { en: "Galvanized zinc coating protects against oxidation.", ar: "طبقة زنك مجلفنة توفر حماية فعالة من الأكسدة." }
    ],
    applications: [
      { en: "Fine furniture upholstery, dining chair seating, and antique restoration.", ar: "التنجيد المنزلي الراقي، وكراسي الطعام، وترميم الأثاث الأنتيك الكلاسيكي." },
      { en: "Picture frame backing and gallery canvas stretching.", ar: "تثبيت ظهور براويز الصور وشد لوحات الرسم الفنية." },
      { en: "Light decorative trim and veneer edge holding.", ar: "تثبيت حواف القشور الخشبية والتشطيبات التجميلية الخفيفة." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "14 Series Fine Wire Staple", ar: "دبوس سلسلة 14 بسلك دقيق" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "0.50 mm × 0.75 mm (22 Gauge)", ar: "0.50 مم × 0.75 مم (عيار 22)" } },
      { specification: { en: "Crown Width", ar: "عرض التاج" }, value: { en: "10.1 mm", ar: "10.1 مم" } },
      { specification: { en: "Leg Length", ar: "طول الساق" }, value: { en: "8 mm (5/16\")", ar: "8 مم (5/16 بوصة)" } },
      { specification: { en: "Point Style", ar: "نوع السن" }, value: { en: "Chisel Point", ar: "سن إزميلي" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized", ar: "مجلفن كهربائياً" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "13.16 kg", ar: "13.16 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Interchangeable with all 71-series fine wire upholstery staplers.",
          ar: "متوافق ومكافئ لجميع دباسات التنجيد الهوائية المخصصة لسلسلة 71 الدقيقة."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "1408", type: "14 Series Staple", volume: "8 mm", boxQty: "10,000 pcs/box × 20 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073343435/u-nails-1408_1792249946941_ezj4xy.png"]
  },

  "u-nails-1410": {
    isNew: true,
    description: {
      en: "1410 is a 22-gauge fine wire staple with a 10.1 mm crown and 10 mm leg length for textile-to-hardwood fastening, cabinet interior linings, and thin wood veneer.",
      ar: "دبوس سلك رفيع 1410 عيار 22 بتاج 10.1 مم وساق 10 مم، مخصص لربط الأقمشة بالأخشاب الصلبة، وبطانات الخزائن، والقشور الخشبية."
    },
    properties: [
      { en: "22 Gauge ultra-fine wire profile: 0.50 mm × 0.75 mm.", ar: "مقطع سلك فائق الدقة مقاس 22: 0.50 مم × 0.75 مم." },
      { en: "Crown width: 10.1 mm. Leg length: 10 mm (3/8\").", ar: "عرض التاج: 10.1 مم. طول الساق: 10 مم (3/8 بوصة)." },
      { en: "Clean 10 mm penetration without risking breakout on thin timber stock.", ar: "اختراق نظيف بعمق 10 مم دون التسبب في تشقق أو كسر الألواح الخشبية الرقيقة." },
      { en: "Zinc electroplated for superior anti-corrosive protection.", ar: "مطلي بطبقة زنك كهربائية لحماية ممتازة ضد التآكل." }
    ],
    applications: [
      { en: "Textile-to-hardwood fastening in high-end bespoke furniture.", ar: "تثبيت الأقمشة بالأخشاب الصلبة في تفصيل الأثاث الفاخر حسب الطلب." },
      { en: "Securing thin wood veneers and decorative filigree fretwork.", ar: "تثبيت القشور الخشبية الرقيقة والزخارف المفرغة المتقنة." },
      { en: "Attaching dust barriers and vapor-retarding sheet materials.", ar: "تثبيت عوازل الغبار وأغشية منع تسرب الأبخرة." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "14 Series Fine Wire Staple", ar: "دبوس سلسلة 14 بسلك دقيق" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "0.50 mm × 0.75 mm (22 Gauge)", ar: "0.50 مم × 0.75 مم (عيار 22)" } },
      { specification: { en: "Crown Width", ar: "عرض التاج" }, value: { en: "10.1 mm", ar: "10.1 مم" } },
      { specification: { en: "Leg Length", ar: "طول الساق" }, value: { en: "10 mm (3/8\")", ar: "10 مم (3/8 بوصة)" } },
      { specification: { en: "Point Style", ar: "نوع السن" }, value: { en: "Chisel Point", ar: "سن إزميلي" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized", ar: "مجلفن كهربائياً" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "15.88 kg", ar: "15.88 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Compatible with all 71-series fine wire pneumatic staplers.",
          ar: "متوافق مع جميع مسدسات الدبابيس الهوائية للسلك الرفيع فئة 71."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "1410", type: "14 Series Staple", volume: "10 mm", boxQty: "10,000 pcs/box × 20 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073343435/u-nails-1410_1792249958989_vk5y4o.png"]
  },

  "u-nails-1412": {
    isNew: true,
    description: {
      en: "1412 is a 22-gauge fine wire staple with a 10.1 mm crown and 12 mm leg length for furniture dust-caps, thin veneer trim, and delicate frame assembly.",
      ar: "دبوس سلك رفيع 1412 عيار 22 بتاج 10.1 مم وساق 12 مم لأغطية أسفل الأثاث، وحواف القشرة، وتجميع الإطارات الخفيفة."
    },
    properties: [
      { en: "22 Gauge ultra-fine wire profile: 0.50 mm × 0.75 mm.", ar: "مقطع سلك فائق الدقة مقاس 22: 0.50 مم × 0.75 مم." },
      { en: "Crown width: 10.1 mm. Leg length: 12 mm (1/2\").", ar: "عرض التاج: 10.1 مم. طول الساق: 12 مم (1/2 بوصة)." },
      { en: "12 mm leg length anchors through multi-layer linings into framing rails.", ar: "ساق بطول 12 مم تثبت طبقات البطانة المتعددة بقوة داخل قوائم الهيكل." },
      { en: "Corrosion-resistant galvanized coating prevents rust marks.", ar: "طلاء مجلفن مقاوم للتآكل يحمي من ظهور علامات الصدأ." }
    ],
    applications: [
      { en: "Sofa underside cambric dust-caps and bottom cover lining.", ar: "تثبيت أقمشة الحماية السفلية للأرائك وبطانات القواعد." },
      { en: "Thin wooden veneer edge trim and delicate picture frame assembly.", ar: "تشطيبات حواف القشور الخشبية وتجميع براويز الصور الدقيقة." },
      { en: "Display board fabrication and architectural model framing.", ar: "تصنيع لوحات العرض وتأطير المجسمات الهندسية المعمارية." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "14 Series Fine Wire Staple", ar: "دبوس سلسلة 14 بسلك دقيق" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "0.50 mm × 0.75 mm (22 Gauge)", ar: "0.50 مم × 0.75 مم (عيار 22)" } },
      { specification: { en: "Crown Width", ar: "عرض التاج" }, value: { en: "10.1 mm", ar: "10.1 مم" } },
      { specification: { en: "Leg Length", ar: "طول الساق" }, value: { en: "12 mm (1/2\")", ar: "12 مم (1/2 بوصة)" } },
      { specification: { en: "Point Style", ar: "نوع السن" }, value: { en: "Chisel Point", ar: "سن إزميلي" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized", ar: "مجلفن كهربائياً" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "18.4 kg", ar: "18.4 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Operates in all 71/14-series pneumatic tackers accepting 12 mm or longer staples.",
          ar: "يعمل في جميع مسدسات الدبابيس الهوائية فئة 71/14 التي تستوعب أطوال حتى 12 مم أو أكثر."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "1412", type: "14 Series Staple", volume: "12 mm", boxQty: "10,000 pcs/box × 20 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073343435/u-nails-1412_1792249974605_kfm1oy.png"]
  },

  "u-nails-1414": {
    isNew: true,
    description: {
      en: "1414 is a 22-gauge fine wire staple with a 10.1 mm crown and 14 mm leg length for cabinet linings, fine wire mesh installation, and automotive seat upholstery.",
      ar: "دبوس سلك رفيع 1414 عيار 22 بتاج 10.1 مم وساق 14 مم لتبطين الخزائن، وتركيب الشبك السلكي، وتنجيد مقاعد السيارات."
    },
    properties: [
      { en: "22 Gauge ultra-fine wire profile: 0.50 mm × 0.75 mm.", ar: "مقطع سلك فائق الدقة مقاس 22: 0.50 مم × 0.75 مم." },
      { en: "Crown width: 10.1 mm. Leg length: 14 mm (9/16\").", ar: "عرض التاج: 10.1 مم. طول الساق: 14 مم (9/16 بوصة)." },
      { en: "14 mm leg provides deep holding without leaving large wire entry scars.", ar: "طول 14 مم يمنح تثبيتاً عميقاً دون ترك ندوب أو آثار واضحة على السطح." },
      { en: "Galvanized steel construction protects against oxidation.", ar: "هيكل من الفولاذ المجلفن للحماية من الصدأ والتآكل." }
    ],
    applications: [
      { en: "Securing fine brass or steel wire mesh to wooden door frames.", ar: "تثبيت شبك السلك النحاسي أو الفولاذي الدقيق في إطارات الأبواب الخشبية." },
      { en: "Automotive seat upholstery and custom marine interior fabric lining.", ar: "تنجيد مقاعد السيارات وبطانات اليخوت البحرية الفاخرة." },
      { en: "Cabinet interior fabric wrapping and acoustic baffle mounting.", ar: "تغليف الخزائن الداخلية بالأقمشة وتثبيت حواجز امتصاص الصوت." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "14 Series Fine Wire Staple", ar: "دبوس سلسلة 14 بسلك دقيق" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "0.50 mm × 0.75 mm (22 Gauge)", ar: "0.50 مم × 0.75 مم (عيار 22)" } },
      { specification: { en: "Crown Width", ar: "عرض التاج" }, value: { en: "10.1 mm", ar: "10.1 مم" } },
      { specification: { en: "Leg Length", ar: "طول الساق" }, value: { en: "14 mm (9/16\")", ar: "14 مم (9/16 بوصة)" } },
      { specification: { en: "Point Style", ar: "نوع السن" }, value: { en: "Chisel Point", ar: "سن إزميلي" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized", ar: "مجلفن كهربائياً" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "12.43 kg", ar: "12.43 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Operates in all standard 71/14-series pneumatic tackers accepting 14 mm or 16 mm depth.",
          ar: "يعمل في جميع مسدسات التنجيد الهوائية فئة 71/14 التي تقبل أطوال 14 مم أو 16 مم."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "1414", type: "14 Series Staple", volume: "14 mm", boxQty: "10,000 pcs/box × 12 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073343435/u-nails-1414_1792249983945_hnzofj.png"]
  },

  "u-nails-1416": {
    isNew: true,
    description: {
      en: "1416 is a maximum-length 22-gauge fine wire staple with a 10.1 mm crown and 16 mm leg length for deep fabric attachment into dense wood and padded acoustic panels.",
      ar: "دبوس سلك رفيع 1416 عيار 22 بأقصى طول ساق 16 مم وتاج 10.1 مم للتثبيت العميق للأقمشة في الأخشاب الكثيفة والألواح الصوتية المبطنة."
    },
    properties: [
      { en: "22 Gauge ultra-fine wire profile: 0.50 mm × 0.75 mm.", ar: "مقطع سلك فائق الدقة مقاس 22: 0.50 مم × 0.75 مم." },
      { en: "Crown width: 10.1 mm. Maximum leg length: 16 mm (5/8\").", ar: "عرض التاج: 10.1 مم. أقصى طول للساق: 16 مم (5/8 بوصة)." },
      { en: "Extended 16 mm shaft achieves superior withdrawal resistance in dense hardwoods.", ar: "ساق ممتدة بطول 16 مم تحقق مقاومة اقتلاع استثنائية في الأخشاب الصلبة." },
      { en: "Galvanized zinc layer prevents degradation and staining.", ar: "طبقة زنك مجلفنة تحمي من التآكل وتمنع التصبغات على الأسطح." }
    ],
    applications: [
      { en: "Deep upholstery attachment through thick multi-layer padding into dense timber.", ar: "تثبيت التنجيد السميك عبر طبقات الحشو المتعددة في هياكل الخشب الصلب." },
      { en: "Mounting heavy acoustic and fire-retardant wall panel felts.", ar: "تثبيت لباد العزل الصوتي الثقيل والألواح الجدارية المقاومة للحرائق." },
      { en: "Fastening corner edge-guards and lightweight wooden shipping strips.", ar: "تثبيت زوايا الحماية الكرتونية وشرائح الشحن الخشبية الخفيفة." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "14 Series Fine Wire Staple", ar: "دبوس سلسلة 14 بسلك دقيق" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "0.50 mm × 0.75 mm (22 Gauge)", ar: "0.50 مم × 0.75 مم (عيار 22)" } },
      { specification: { en: "Crown Width", ar: "عرض التاج" }, value: { en: "10.1 mm", ar: "10.1 مم" } },
      { specification: { en: "Leg Length", ar: "طول الساق" }, value: { en: "16 mm (5/8\")", ar: "16 مم (5/8 بوصة)" } },
      { specification: { en: "Point Style", ar: "نوع السن" }, value: { en: "Chisel Point", ar: "سن إزميلي" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized", ar: "مجلفن كهربائياً" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "14.18 kg", ar: "14.18 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Operates in all full-capacity 16 mm 71/14-series pneumatic tackers (BEA 71/16-421, Omer 71.16).",
          ar: "يعمل في جميع مسدسات التنجيد الهوائية كاملة السعة حتى 16 مم (BEA 71/16-421 و Omer 71.16)."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "1416", type: "14 Series Staple", volume: "16 mm", boxQty: "10,000 pcs/box × 12 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073343435/u-nails-1416_1792249990442_livmrd.png"]
  },

  // ==========================================
  // 90 SERIES NARROW CROWN STAPLES (18 GAUGE)
  // ==========================================
  "u-nails-9040": {
    isNew: true,
    description: {
      en: "9040 is an 18-gauge narrow crown staple with a 5.7 mm crown and 40 mm leg length, engineered for cabinet carcass joinery, hardwood floor underlayment, and drawer box assembly.",
      ar: "دبوس 9040 عيار 18 بتاج ضيق 5.7 مم وساق 40 مم، مصمم لنجارة هياكل الخزائن، والطبقات التحتية للأرضيات، وتجميع صناديق الأدراج."
    },
    properties: [
      { en: "18 Gauge medium wire profile: 1.00 mm × 1.25 mm.", ar: "مقطع سلك مقاس 18: 1.00 مم × 1.25 مم." },
      { en: "Narrow crown width: 5.7 mm (1/4\"). Leg length: 40 mm (1-9/16\").", ar: "تاج ضيق: 5.7 مم (1/4 بوصة). طول الساق: 40 مم (1-9/16 بوصة)." },
      { en: "Narrow crown countersinks cleanly below timber surface without splintering.", ar: "تاج ضيق يغوص بسلاسة تحت سطح الخشب دون التسبب في تشظي القشور." },
      { en: "High holding power makes it an exceptional mechanical fastener for structural adhesives.", ar: "قوة ربط ميكانيكية استثنائية تعمل بتكامل مثالي مع المواد اللاصقة الإنشائية." }
    ],
    applications: [
      { en: "Cabinet construction, bookcase shelving, and drawer box joints.", ar: "تصنيع الخزائن، وأرفف المكتبات، وتجميع وصلات الأدراج." },
      { en: "Hardwood and laminate flooring underlayment, subfloor sheeting.", ar: "تثبيت الطبقات السفلية لأرضيات الباركيه والأرضيات الخشبية المركبة." },
      { en: "Fencing, lattice panel fabrication, and exterior cedar shingle installation.", ar: "تصنيع الأسوار، وشبكات خشب الزينة، وتثبيت ألواح خشب الأرز الخارجية." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "90 Series Narrow Crown Staple", ar: "دبوس سلسلة 90 بتاج ضيق" } },
      { specification: { en: "Wire Dimensions", ar: "أبعاد السلك" }, value: { en: "1.00 mm × 1.25 mm (18 Gauge)", ar: "1.00 مم × 1.25 مم (عيار 18)" } },
      { specification: { en: "Crown Width", ar: "عرض التاج" }, value: { en: "5.7 mm (1/4\")", ar: "5.7 مم (1/4 بوصة)" } },
      { specification: { en: "Leg Length", ar: "طول الساق" }, value: { en: "40 mm (1-9/16\")", ar: "40 مم (1-9/16 بوصة)" } },
      { specification: { en: "Point Style", ar: "نوع السن" }, value: { en: "Chisel Point", ar: "سن إزميلي" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Electro-Galvanized", ar: "مجلفن كهربائياً" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "16.7 kg", ar: "16.7 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Equivalent to BEA 90, Senco L, Prebena E, Duo-Fast 1800. Fits all 18GA narrow crown staplers.",
          ar: "مكافئ لسلاسل BEA 90 و Senco L و Prebena E و Duo-Fast 1800. متوافق مع كافة مسدسات التاج الضيق عيار 18."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "9040", type: "90 Series Staple", volume: "40 mm", boxQty: "3,000 pcs/box × 8 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073343435/u-nails-9040_1792250239429_ro315i.png"]
  },

  // ==========================================
  // ST HARDENED STEEL CONCRETE PINS (14 GAUGE)
  // ==========================================
  "steel-nails-st25": {
    isNew: true,
    description: {
      en: "ST25 is a 14-gauge hardened high-carbon steel pin with a 25 mm length and 6.8 mm head, engineered for ballistic penetration into solid concrete, masonry, and steel studs.",
      ar: "مسمار ST25 صلب مقسّى عيار 14 بطول 25 مم ورأس 6.8 مم مصنوع من الفولاذ عالي الكربون، مخصص للاختراق الميكانيكي في الخرسانة المسلحة والبلوك والحديد."
    },
    properties: [
      { en: "14 Gauge high-carbon steel shank: 2.20 mm diameter.", ar: "ساق من الصلب عالي الكربون عيار 14 بقطر 2.20 مم." },
      { en: "Length: 25 mm (1\"). Reinforced head diameter: 6.8 mm.", ar: "الطول: 25 مم (1 بوصة). قطر الرأس المقوى: 6.8 مم." },
      { en: "Core hardness: 50 – 55 HRC resists buckling during impact penetration into cured concrete.", ar: "صلابة قلب 50 - 55 HRC تمنع انحناء المسمار أثناء الدفع الصدمي داخل الخرسانة المعالجة." },
      { en: "Electro-galvanized zinc coating prevents corrosion in masonry contact points.", ar: "طلاء جلفنة كهربائية بالزنك يمنع تآكل نقاط التلامس مع الصب الخرساني." }
    ],
    applications: [
      { en: "Fastening timber furring strips, sill plates, and wood battens to solid concrete floors and walls.", ar: "تثبيت العوارض الخشبية وشرائح التثبيت بالأرضيات والجدران الخرسانية." },
      { en: "Mounting metal cable trunking, electrical conduit brackets, and drywall track to masonry.", ar: "تثبيت مجاري الكابلات وقنوات التمديدات الكهربائية ومسارات الجبس في المباني الحجرية." },
      { en: "Securing metal lath and wire mesh before concrete stucco rendering.", ar: "تثبيت شبك اللياسة المعدني قبل أعمال الطرطشة والقصارة الإسمنتية." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "ST Hardened Steel Concrete Pin", ar: "مسمار فولاذي مقسّى للخرسانة فئة ST" } },
      { specification: { en: "Shank Diameter", ar: "قطر الساق" }, value: { en: "2.20 mm (14 Gauge)", ar: "2.20 مم (عيار 14)" } },
      { specification: { en: "Length", ar: "الطول" }, value: { en: "25 mm (1\")", ar: "25 مم (1 بوصة)" } },
      { specification: { en: "Head Diameter", ar: "قطر الرأس" }, value: { en: "6.8 mm", ar: "6.8 مم" } },
      { specification: { en: "Core Hardness", ar: "درجة صلابة المعدن" }, value: { en: "50 – 55 HRC", ar: "50 – 55 HRC (مقياس روكويل C)" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Zinc Galvanized", ar: "مجلفن بالزنك" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "15.0 kg", ar: "15.0 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Compatible with all professional pneumatic concrete pin nailers (Makita AN250HC, Max HN120, and standard ST64 air nailers).",
          ar: "متوافق مع مسدسات المسامير الهوائية المخصصة للخرسانة (مثل ماكيتا AN250HC وماكس HN120 ومسدسات ST64 القياسية)."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "ST25", type: "ST Hardened Steel Pin", volume: "25 mm", boxQty: "2,000 pcs/box × 10 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073082887/steel-nails-st25_1792250599855_6271mn.png"]
  },

  "steel-nails-st32": {
    isNew: true,
    description: {
      en: "ST32 is a 14-gauge hardened steel concrete pin with a 32 mm length and 6.8 mm head for wood-to-concrete framing, door buck anchoring, and heavy electrical conduit clips.",
      ar: "مسمار خرساني صلب ST32 عيار 14 بطول 32 مم ورأس 6.8 مم لتثبيت الهياكل الخشبية بالخرسانة، ومصدات الأبواب، ومواسير الكهرباء الثقيلة."
    },
    properties: [
      { en: "14 Gauge high-carbon steel shank: 2.20 mm diameter.", ar: "ساق من الصلب عالي الكربون عيار 14 بقطر 2.20 مم." },
      { en: "Length: 32 mm (1-1/4\"). Reinforced head diameter: 6.8 mm.", ar: "الطول: 32 مم (1-1/4 بوصة). قطر الرأس المقوى: 6.8 مم." },
      { en: "Heat-treated to 50 – 55 HRC, preventing deflection when driving into precast concrete.", ar: "معالج حرارياً بصلابة 50 - 55 HRC لمنع الانحناء عند الدفع في الخرسانة مسبقة الصب." },
      { en: "Zinc anti-corrosion barrier protects nail structural integrity.", ar: "طبقة زنك واقية تحمي سلامة المسمار الإنشائية من التآكل والرطوبة." }
    ],
    applications: [
      { en: "Securing 2x timber framing plates and door sub-bucks to masonry columns.", ar: "تثبيت قوائم الهياكل الخشبية وإطارات الأبواب التأسيسية في الأعمدة الخرسانية." },
      { en: "Attaching heavy steel conduit saddles and pipe clamps directly to brick walls.", ar: "تثبيت قفزان المواسير الفولاذية الثقيلة ومشابك الأنابيب مباشرة في جدران الطوب." },
      { en: "Direct attachment of carpet gripper strips to commercial concrete subfloors.", ar: "تثبيت شرائط مسامير السجاد مباشرة على الأرضيات الخرسانية التجارية." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "ST Hardened Steel Concrete Pin", ar: "مسمار فولاذي مقسّى للخرسانة فئة ST" } },
      { specification: { en: "Shank Diameter", ar: "قطر الساق" }, value: { en: "2.20 mm (14 Gauge)", ar: "2.20 مم (عيار 14)" } },
      { specification: { en: "Length", ar: "الطول" }, value: { en: "32 mm (1-1/4\")", ar: "32 مم (1-1/4 بوصة)" } },
      { specification: { en: "Head Diameter", ar: "قطر الرأس" }, value: { en: "6.8 mm", ar: "6.8 مم" } },
      { specification: { en: "Core Hardness", ar: "درجة صلابة المعدن" }, value: { en: "50 – 55 HRC", ar: "50 – 55 HRC (مقياس روكويل C)" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Zinc Galvanized", ar: "مجلفن بالزنك" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "19.1 kg", ar: "19.1 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Operates in all standard high-pressure concrete nailers and ST64 pneumatic framing tools.",
          ar: "يعمل في جميع مسدسات الخرسانة ذات الضغط العالي ومسدسات المسامير الهوائية طراز ST64."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "ST32", type: "ST Hardened Steel Pin", volume: "32 mm", boxQty: "2,000 pcs/box × 10 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073082887/steel-nails-st32_1792250610782_4te0b6.png"]
  },

  "steel-nails-st38": {
    isNew: true,
    description: {
      en: "ST38 is a 14-gauge hardened steel pin with a 38 mm length and 6.8 mm head, designed for anchoring heavy wooden wall panel structures and timber framework to concrete or brick masonry.",
      ar: "مسمار صلب ST38 عيار 14 بطول 38 مم ورأس 6.8 مم لتثبيت هياكل ألواح الجدران الخشبية الثقيلة وقواطع الأخشاب في جدران الخرسانة والطوب."
    },
    properties: [
      { en: "14 Gauge high-carbon steel shank: 2.20 mm diameter.", ar: "ساق من الصلب عالي الكربون عيار 14 بقطر 2.20 مم." },
      { en: "Length: 38 mm (1-1/2\"). Reinforced head diameter: 6.8 mm.", ar: "الطول: 38 مم (1-1/2 بوصة). قطر الرأس المقوى: 6.8 مم." },
      { en: "Heat-treated high-tensile core delivers high shear strength without brittle fracture.", ar: "قلب معالج حرارياً يوفر قوة قص هائلة دون التعرض للكسر التقصفي." },
      { en: "Galvanized zinc layer prevents rust in high-alkaline masonry environments.", ar: "طبقة زنك مجلفنة تقاوم الصدأ في البيئات الإسمنتية القلوية." }
    ],
    applications: [
      { en: "Anchoring heavy wooden architectural wall panels and wainscoting backer studs.", ar: "تثبيت ألواح التكسية الجدارية الخشبية الثقيلة وعوارض التدعيم بالجدران." },
      { en: "Fastening thick dimensional timber runners to cured concrete slabs.", ar: "تثبيت العوارض الخشبية السميكة في الصبات الخرسانية المعالجة." },
      { en: "Securing perimeter formwork to concrete footings in civil construction.", ar: "تثبيت جوانب الشدات الخشبية في القواعد والخرسانات الإنشائية." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "ST Hardened Steel Concrete Pin", ar: "مسمار فولاذي مقسّى للخرسانة فئة ST" } },
      { specification: { en: "Shank Diameter", ar: "قطر الساق" }, value: { en: "2.20 mm (14 Gauge)", ar: "2.20 مم (عيار 14)" } },
      { specification: { en: "Length", ar: "الطول" }, value: { en: "38 mm (1-1/2\")", ar: "38 مم (1-1/2 بوصة)" } },
      { specification: { en: "Head Diameter", ar: "قطر الرأس" }, value: { en: "6.8 mm", ar: "6.8 مم" } },
      { specification: { en: "Core Hardness", ar: "درجة صلابة المعدن" }, value: { en: "50 – 55 HRC", ar: "50 – 55 HRC (مقياس روكويل C)" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Zinc Galvanized", ar: "مجلفن بالزنك" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "11.85 kg", ar: "11.85 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Fires reliably through standard ST-type pneumatic concrete pin nailers capable of handling up to 38 mm / 64 mm.",
          ar: "يعمل بكفاءة في مسدسات مسامير الخرسانة الهوائية ST التي تقبل أطوال حتى 38 مم أو 64 مم."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "ST38", type: "ST Hardened Steel Pin", volume: "38 mm", boxQty: "1,000 pcs/box × 10 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073082887/steel-nails-st38_1792250617830_ioxaj3.png"]
  },

  "steel-nails-st50": {
    isNew: true,
    description: {
      en: "ST50 is a deep-drive 14-gauge hardened steel pin with a 50 mm length and 6.8 mm head for anchoring thick timber sole plates, heavy framing, and structural wood to concrete slabs.",
      ar: "مسمار فولاذي صلب ST50 عيار 14 بطول غوص عميق 50 مم ورأس 6.8 مم لتثبيت قوائم الأخشاب السميكة والهياكل الإنشائية مباشرة في الصبات الخرسانية."
    },
    properties: [
      { en: "14 Gauge high-carbon steel shank: 2.20 mm diameter.", ar: "ساق من الصلب عالي الكربون عيار 14 بقطر 2.20 مم." },
      { en: "Length: 50 mm (2\"). Reinforced head diameter: 6.8 mm.", ar: "الطول: 50 مم (2 بوصة). قطر الرأس المقوى: 6.8 مم." },
      { en: "Ballistic diamond point profile drives smoothly through aggregate without spalling.", ar: "سن ماسي باليستي مصمم للاختراق الانسيابي عبر الركام الحصوي دون تفتيت الخرسانة." },
      { en: "Heavy-duty zinc plating protects against moisture corrosion.", ar: "جلفنة زنك سميكة تحمي من التآكل الناتج عن رطوبة الأرضيات الخرسانية." }
    ],
    applications: [
      { en: "Deep anchoring of 2x4 timber sole plates and wall sill framing directly into concrete floors.", ar: "التثبيت العميق لمدادات وقواعد الأخشاب 2×4 مباشرة في الأرضيات الخرسانية." },
      { en: "Fastening thick acoustic isolation wood batten systems.", ar: "تثبيت أنظمة العوارض الخشبية السميكة الخاصة بالعزل الصوتي للأرضيات." },
      { en: "Securing heavy machinery wood mounting blocks to solid concrete foundations.", ar: "تثبيت كتل التثبيت الخشبية للمعدات الثقيلة في القواعد الخرسانية الصماء." }
    ],
    productSpecs: [
      { specification: { en: "Fastener Type", ar: "نوع المثبّت" }, value: { en: "ST Hardened Steel Concrete Pin", ar: "مسمار فولاذي مقسّى للخرسانة فئة ST" } },
      { specification: { en: "Shank Diameter", ar: "قطر الساق" }, value: { en: "2.20 mm (14 Gauge)", ar: "2.20 مم (عيار 14)" } },
      { specification: { en: "Length", ar: "الطول" }, value: { en: "50 mm (2\")", ar: "50 مم (2 بوصة)" } },
      { specification: { en: "Head Diameter", ar: "قطر الرأس" }, value: { en: "6.8 mm", ar: "6.8 مم" } },
      { specification: { en: "Core Hardness", ar: "درجة صلابة المعدن" }, value: { en: "50 – 55 HRC", ar: "50 – 55 HRC (مقياس روكويل C)" } },
      { specification: { en: "Finish / Coating", ar: "المعالجة السطحية" }, value: { en: "Zinc Galvanized", ar: "مجلفن بالزنك" } },
      { specification: { en: "Carton Weight", ar: "وزن الكرتون" }, value: { en: "15.0 kg", ar: "15.0 كجم" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Tool Compatibility", ar: "توافق الأدوات والمعدات" },
        description: {
          en: "Requires an ST-series heavy pneumatic concrete nailer with minimum 50 mm capacity (e.g., ST64 series nailers).",
          ar: "يتطلب مسدس مسامير خرسانة هوائي ثقيل من فئة ST يستوعب أطوال حتى 50 مم أو أكثر (مثل مسدسات فئة ST64)."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "ST50", type: "ST Hardened Steel Pin", volume: "50 mm", boxQty: "1,000 pcs/box × 10 boxes/carton" }
    ],
    images: ["/images/all-products/category-1792073082887/steel-nails-st50_1792250628229_mangqy.png"]
  },

  // ==========================================
  // ADHESIVES & CHEMICALS
  // ==========================================
  "sultan-spray-glue-400ml": {
    isNew: true,
    description: {
      en: "Industrial-grade contact aerosol spray adhesive (400 ml + 100 g booster) delivering fast tack, variable web-spray atomization, and high-strength bonding for upholstery, laminate, and acoustic foam.",
      ar: "بخاخ غراء تلامسي صناعي (400 مل + 100 غرام إضافية) يمتاز بسرعة الالتصاق ونمط رش شبكي دقيق، مخصص لتثبيت أقمشة التنجيد، والفوم الصوتي، والرقائق الخشبية."
    },
    properties: [
      { en: "High-volume packaging: 400 ml liquid content + 100 g propellant booster.", ar: "عبوة ذات سعة اقتصادية: 400 مل محتوى سائل + 100 غرام غاز دافع إضافي." },
      { en: "Fast initial grab within 30 to 90 seconds of application.", ar: "التصاق أولي فائق السرعة خلال 30 إلى 90 ثانية من الرش." },
      { en: "Adjustable 3-way nozzle provides controlled web spray pattern without overspray mist.", ar: "فوهة ثلاثية متطورة توفر نمط رش شبكي منتظم يمنع الهدر وتطاير الرذاذ." },
      { en: "Thermal resistance up to 70°C; resistant to plasticizer migration.", ar: "مقاومة درجات حرارة تصل حتى 70 مئوية؛ مقاوم لتسرب الملدنات." }
    ],
    applications: [
      { en: "Bonding flexible polyurethane foams, fabric, leather, and felt in furniture upholstery.", ar: "لصق إسفنج البولي يوريثان المرن، والأقمشة، والجلود، واللباد في تنجيد الأثاث." },
      { en: "Installing acoustic pyramid foam and soundproofing insulation panels.", ar: "تركيب ألواح الفوم الهرمي العازل للصوت وألواح امتصاص الترددات الصوتية." },
      { en: "Automotive headliner restoration and parcel shelf textile relining.", ar: "ترميم بطانات أسقف السيارات وتجديد أقمشة الرفوف الخلفية والديكورات." },
      { en: "Laminating decorative veneer and HPL edge-banding to composite boards.", ar: "تثبيت شرائح القشرة الخشبية وحواف الميلامين على ألواح الخشب المضغوط." }
    ],
    productSpecs: [
      { specification: { en: "Chemical Base", ar: "القاعدة الكيميائية" }, value: { en: "Synthetic Polymer (Polychloroprene Rubber)", ar: "بوليمر صناعي (مطاط بولي كلوروبرين)" } },
      { specification: { en: "Container Volume / Weight", ar: "حجم ووزن العبوة" }, value: { en: "400 ml + 100 g net", ar: "400 مل + 100 غرام صافي" } },
      { specification: { en: "Open Tack Time", ar: "وقت الجفاف والالتصاق الأولي" }, value: { en: "30 – 90 seconds (at 20°C / 50% RH)", ar: "30 - 90 ثانية (عند 20° مئوية / 50% رطوبة)" } },
      { specification: { en: "Bonding Window", ar: "فترة العمل المتاحة" }, value: { en: "Up to 15 minutes", ar: "حتى 15 دقيقة" } },
      { specification: { en: "Spray Pattern", ar: "نمط الرش" }, value: { en: "Variable Web Spray", ar: "رش شبكي متغير (Web Spray)" } },
      { specification: { en: "Temperature Resistance", ar: "مقاومة درجات الحرارة" }, value: { en: "-20°C to +70°C", ar: "-20° إلى +70° مئوية" } },
      { specification: { en: "Recommended Application Temp", ar: "درجة حرارة الاستخدام الموصى بها" }, value: { en: "+15°C to +25°C", ar: "+15° إلى +25° مئوية" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Application Guidelines", ar: "إرشادات الاستخدام والتطبيق" },
        description: {
          en: "Shake can vigorously for 30 seconds before use. Spray from a distance of 15–20 cm. For permanent bonds, coat both mating surfaces. For repositionable bonds, apply to one substrate only.",
          ar: "رج العبوة جيداً لمدة 30 ثانية قبل الاستخدام. رش من مسافة 15-20 سم. للالتصاق الدائم، رش كلا السطحين. للالتصاق المؤقت القابل للتعديل، رش سطحاً واحداً فقط."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "sultan-spray-glue-400ml", type: "Contact Spray Adhesive", volume: "400 ml + 100 g", boxQty: "12 cans/carton" }
    ],
    images: ["/images/all-products/adhesives/subcategory-1792074317951/sultan-spray-glue-400ml_1792299763076_bsvah4.jpg"]
  },

  "sultan-pu-foam-750ml": {
    isNew: true,
    description: {
      en: "Professional-grade, one-component, moisture-curing polyurethane expanding foam (750 ml / 800 g) engineered for high-yield gap filling, acoustic isolation, and door/window perimeter thermal sealing.",
      ar: "رغوة بولي يوريثان متمددة احترافية أحادية المكون معالجة بالرطوبة (750 مل / 800 غرام)، مصممة لملء الفراغات والشقوق والعزل الصوتي والحراري حول إطارات الأبواب والنوافذ."
    },
    properties: [
      { en: "High net fill weight (800 g) produces up to 42 liters of cured free-expansion foam.", ar: "وزن تعبئة صافي عالي (800 غرام) ينتج حتى 42 لتراً من الرغوة المتمددة المعالجة." },
      { en: "High thermal insulation value with low thermal conductivity (0.036 W/m·K).", ar: "عزل حراري ممتاز بفضل معامل التوصيل الحراري المنخفض (0.036 واط/متر·كلفن)." },
      { en: "Tack-free surface within 8–10 minutes; fully cuttable and sandable within 45 minutes.", ar: "جفاف السطح الخارجي خلال 8-10 دقائق؛ قابلة للقص والصنفرة خلال 45 دقيقة." },
      { en: "Closed-cell structure resists moisture absorption and water vapor permeability.", ar: "بنية خلوية مغلقة تقاوم امتصاص الرطوبة ونفاذية بخار الماء." }
    ],
    applications: [
      { en: "Installing, fixing, and insulating perimeter gaps around timber, PVC, and aluminum window/door frames.", ar: "تثبيت وعزل الفواصل المحيطة بإطارات النوافذ والأبواب الخشبية والألمنيوم وPVC." },
      { en: "Acoustic and thermal sealing of pipe pass-throughs, electrical service entries, and wall penetrations.", ar: "العزل الصوتي والحراري لمسارات الأنابيب وتمديدات الكهرباء وفتحات الجدران." },
      { en: "Sealing roof joints, corrugated sheet junctions, and partition wall interfaces.", ar: "عزل فواصل الأسقف، والتقاء الألواح المعدنية، وفواصل الجدران القاطعة." }
    ],
    productSpecs: [
      { specification: { en: "Chemical Base", ar: "القاعدة الكيميائية" }, value: { en: "Polyurethane Prepolymer", ar: "بوليمر بولي يوريثان مسبق" } },
      { specification: { en: "Curing Mechanism", ar: "آلية المعالجة والتصلب" }, value: { en: "Moisture-curing (Atmospheric)", ar: "معالجة بالرطوبة الجوية" } },
      { specification: { en: "Can Volume / Net Weight", ar: "حجم العبوة / الوزن الصافي" }, value: { en: "750 ml / 800 g", ar: "750 مل / 800 غرام" } },
      { specification: { en: "Expansion Yield", ar: "حجم الرغوة المتمددة" }, value: { en: "Up to 42 Liters (Free Foam)", ar: "حتى 42 لتر (تمدد حر)" } },
      { specification: { en: "Tack-free Time", ar: "زمن جفاف السطح" }, value: { en: "8 – 10 minutes (+23°C / 50% RH)", ar: "8 - 10 دقائق (+23° مئوية / 50% رطوبة)" } },
      { specification: { en: "Cuttable Time", ar: "زمن قابلية القص" }, value: { en: "40 – 50 minutes", ar: "40 - 50 دقيقة" } },
      { specification: { en: "Thermal Conductivity", ar: "معامل التوصيل الحراري" }, value: { en: "0.036 W/(m·K)", ar: "0.036 واط / (متر·كلفن)" } },
      { specification: { en: "Fire Class", ar: "تصنيف مقاومة الحريق" }, value: { en: "DIN 4102-1 B3", ar: "DIN 4102-1 B3" } },
      { specification: { en: "Temperature Resistance", ar: "مقاومة درجات الحرارة بعد الجفاف" }, value: { en: "-40°C to +90°C", ar: "-40° إلى +90° مئوية" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Application Method", ar: "طريقة الاستخدام والتطبيق" },
        description: {
          en: "Moisten substrate with water spray to accelerate cell curing and maximize expansion yield. Screw nozzle adapter firmly, invert can upside-down during extrusion. Fill voids to approximately 50% to allow for post-expansion.",
          ar: "يُرش السطح برذاذ ماء خفيف لتسريع التصلب الخلوي وزيادة حجم الرغوة. ركّب الفوهة بإحكام واقلب العبوة رأساً على عقب أثناء الرش. املأ الفراغات بنسبة 50% تقريباً لترك مساحة للتمدد اللاحق."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "sultan-pu-foam-750ml", type: "Expanding PU Foam", volume: "750 ml / 800 g", boxQty: "12 cans/carton" }
    ],
    images: ["/images/all-products/adhesives/subcategory-1792074350245/sultan-pu-foam-750ml_1792299752263_qx7a28.jpg"]
  },

  "sultan-wood-glue-370kg": {
    isNew: true,
    description: {
      en: "High-performance polyvinyl acetate (PVA) wood adhesive formulated to DIN EN 204 D2/D3 moisture resistance standards. Delivers superior shear strength, transparent dry seams, and easy sanding for industrial carpentry and furniture manufacturing.",
      ar: "غراء خشب بولي فينيل أسيتات (PVA) عالي الأداء مطابق لمواصفات مقاومة الرطوبة DIN EN 204 D2/D3. يوفر قوة قص فائقة، ولحام شفاف غير مرئي بعد الجفاف، وسهولة في الصنفرة لمصانع وورش النجارة."
    },
    properties: [
      { en: "High solids content delivers bond strength surpassing the natural shear strength of wood.", ar: "نسبة مواد صلبة عالية توفر قوة التصاق تفوق قوة ألياف الخشب الطبيعية نفسها." },
      { en: "Dries to a transparent, non-staining seam that does not dull carving or planer blades.", ar: "يجف إلى خط لحام شفاف لا يترك بقعاً ولا يسبب تآكل شفرات الفأرة والرندة." },
      { en: "Compliant with DIN EN 204 D2 (and D3 in climate-controlled indoor assemblies).", ar: "مطابق للمواصفة القياسية DIN EN 204 D2 (و D3 في التجميعات الداخلية المحمية)." },
      { en: "Water-based, low-VOC formulation, non-toxic, and non-flammable.", ar: "تركيبة مائية منخفضة المركبات العضوية المتطايرة (Low-VOC)، غير سامة وغير قابلة للاشتعال." }
    ],
    applications: [
      { en: "Edge-gluing solid wood boards, finger-jointing, and mortise-and-tenon timber joinery.", ar: "لصق حواف الألواح الخشبية المصمتة، ووصلات الأصابع (Finger-jointing)، ووصلات النقر واللسان." },
      { en: "Hot-press and cold-press wood veneering and decorative HPL surface laminating.", ar: "كبس القشور الخشبية والشرائح الديكورية (HPL) بالمكابس الحارة والباردة." },
      { en: "Dowel assembly in commercial cabinet carcasses and chair frames.", ar: "تجميع الكوايل الخشبية في هياكل الخزائن التجارية وأطر الكراسي." },
      { en: "Gluing MDF, chipboard, hardboard, blockboard, and solid hardwoods.", ar: "لصق ألواح MDF والخشب الحبيبي وخشب الأبلكاش والأخشاب الصلبة." }
    ],
    productSpecs: [
      { specification: { en: "Chemical Base", ar: "القاعدة الكيميائية" }, value: { en: "Polyvinyl Acetate (PVA) Dispersion", ar: "مستحلب بولي فينيل أسيتات (PVA)" } },
      { specification: { en: "Net Bucket Weight", ar: "وزن السطل الصافي" }, value: { en: "3.70 kg", ar: "3.70 كجم" } },
      { specification: { en: "Carton Packaging", ar: "التعبئة في الكرتون" }, value: { en: "4 buckets / carton (14.8 kg net)", ar: "4 سطول / كرتون (14.8 كجم صافي)" } },
      { specification: { en: "Moisture Resistance Class", ar: "تصنيف مقاومة الرطوبة" }, value: { en: "DIN EN 204 D2 / D3", ar: "DIN EN 204 D2 / D3" } },
      { specification: { en: "Solid Content", ar: "نسبة المواد الصلبة" }, value: { en: "48% – 52%", ar: "48% - 52%" } },
      { specification: { en: "Viscosity (Brookfield)", ar: "اللزوجة" }, value: { en: "10,000 – 16,000 mPa·s (at 20°C)", ar: "10,000 - 16,000 mPa·s (عند 20° مئوية)" } },
      { specification: { en: "Open Assembly Time", ar: "وقت التجميع المفتوح" }, value: { en: "8 – 12 minutes (at 20°C / 65% RH)", ar: "8 - 12 دقيقة (عند 20° مئوية / 65% رطوبة)" } },
      { specification: { en: "Clamping / Press Time", ar: "زمن الضغط والتثبيت (القمطات)" }, value: { en: "25 – 35 min (Softwood) / 45 – 60 min (Hardwood)", ar: "25 - 35 دقيقة (خشب لين) / 45 - 60 دقيقة (خشب صلب)" } },
      { specification: { en: "Full Curing Time", ar: "زمن التصلب النهائي التام" }, value: { en: "24 hours", ar: "24 ساعة" } }
    ],
    technicalSpecs: [
      {
        title: { en: "Instructions for Use", ar: "تعليمات الاستخدام والتشغيل" },
        description: {
          en: "Surfaces must be dry, flat, and free from oil or sawdust. Apply adhesive evenly with roller, brush, or spreader. Join surfaces and clamp within the open time. Maintain pressure until initial handling strength is achieved.",
          ar: "يجب أن تكون الأسطح مستوية وجافة ونظيفة تماماً من الغبار ونشارة الخشب. يُفرد الغراء بالتساوي باستخدام رول أو فرشاة. تُجمع القطع وتُضغط بالقمطات قبل انتهاء وقت العمل المفتوح وتترك حتى تحقق قوة الالتصاق الأولية."
        }
      }
    ],
    packaging: [
      { stockCode: "-", productCode: "sultan-wood-glue-370kg", type: "PVA Wood Glue", volume: "3.70 kg", boxQty: "4 buckets/carton" }
    ],
    images: ["/images/all-products/adhesives/subcategory-1792074373839/sultan-wood-glue-370kg_1792299740632_6uwrpl.jpg"]
  }
};