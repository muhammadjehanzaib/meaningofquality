import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Carousel from "@/components/ui/Carousel";
import ProductTile from "@/components/ui/ProductTile";
import ImageGallery from "@/components/pdp/ImageGallery";
import AddToCart from "@/components/pdp/AddToCart";
import { allItems, categories } from "@/data/catalog";
import {
  categoryIconById,
  categoryThemeById,
  productImageByItemId,
} from "@/data/assets";
import { productDetailsById } from "@/data/productDetails";
import L from "@/components/i18n/L";
import { LKey } from "@/components/i18n/L";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  // Pre-render all known product detail pages for static export
  return allItems.map((i) => ({ id: i.id }));
}

export const sampleProduct = {
  id: "ethanol-99",
  name: { en: "Ethanol 99.9%", ar: "إيثانول 99.9%" },
  categoryId: "industrial-chemicals",
  priceRange: { min: 50, max: 100 }, // optional for RFQ
  description: {
    en: "High-purity ethanol suitable for industrial applications.",
    ar: "إيثانول عالي النقاء مناسب للتطبيقات الصناعية."
  },

  // Technical Specifications
  technicalSpecs: {
    casNumber: "64-17-5",
    purity: "≥ 99.9%",
    appearance: "Clear liquid",
    density: "0.789 g/cm³",
    storage: "Cool, dry place"
  },

  // Packaging
  packaging: [
    {
      stockCode: "ETH-001",
      productCode: "ET-100L",
      type: "Drum",
      volume: "100 L",
      boxQty: "1"
    },
    {
      stockCode: "ETH-002",
      productCode: "ET-200L",
      type: "Drum",
      volume: "200 L",
      boxQty: "1"
    }
  ],

  // Attachments
  attachments: {
    tdsUrl: "/attachments/ethanol-tds.pdf",
    sdsUrl: "/attachments/ethanol-sds.pdf"
  },

  // Use Cases
  useCases: [
    "Industrial cleaning",
    "Laboratory use",
    "Manufacturing applications"
  ],

  // Metadata for SEO
  metadata: {
    title: "Ethanol 99.9% | Industrial Grade Chemical Supplier",
    description:
      "High-purity ethanol 99.9% for industrial and manufacturing applications. SDS and TDS available. Request a quote today.",
    keywords: ["ethanol", "industrial ethanol", "chemical supplier"],
    canonical: "/p/ethanol-99"
  },

  // Images
  images: [
    "/images/products/ethanol-1.jpg",
    "/images/products/ethanol-2.jpg"
  ],

  // Optional: mark new product
  isNew: true
};

const sampleProduct2 =  {productSpecifications: [
  {
    name: "Grade",
    value: "Industrial / Laboratory"
  },
  {
    name: "Molecular Formula",
    value: "C₂H₆O"
  },
  {
    name: "Molecular Weight",
    value: "46.07 g/mol"
  },
  {
    name: "Boiling Point",
    value: "78.37 °C"
  },
  {
    name: "Melting Point",
    value: "-114.1 °C"
  },
  {
    name: "Solubility",
    value: "Miscible with water"
  }
]
}
export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const item = allItems.find((i) => i.id === id);

  if (!item) {
    return (
      <div className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <h1 className="text-2xl font-bold"><LKey k="productNotFound" /></h1>
          <p className="mt-2 text-sm text-muted-foreground">
            <LKey k="productNotFoundDesc" />
          </p>
          <Link href="/" className="mt-4 inline-block text-sm text-primary hover:underline">
            ← <LKey k="backToHome" />
          </Link>
        </Container>
      </div>
    );
  }

  const img = productImageByItemId[item.id];
  const cat = categories.find((c) => c.id === item.categoryId);
  const icon = categoryIconById[item.categoryId];
  type CatTheme = (typeof categoryThemeById)[keyof typeof categoryThemeById];
  const defaultTheme: CatTheme = { bg: "bg-slate-50", ring: "ring-slate-200", text: "text-slate-700", hoverBg: "group-hover:bg-slate-100", hoverRing: "group-hover:ring-slate-300", hoverText: "group-hover:text-slate-800" };
  const theme: CatTheme = categoryThemeById[item.categoryId] ?? defaultTheme;

  const detail = productDetailsById[item.id] ?? {};
  const galleryImages = detail.images && detail.images.length ? detail.images : (img ? [img] : []);

  // Simple related products: same category, different id
  const related = allItems.filter(
    (i) => i.categoryId === item.categoryId && i.id !== item.id
  );

  return (
    <div className="py-10 sm:py-12">
      <Container className="max-w-5xl">
        {/* Breadcrumb */}
        <nav className="text-xs text-muted-foreground">
          <Link href="/" className="hover:underline"><LKey k="home" /></Link>
          <span className="mx-1">/</span>
          <Link href="/categories" className="hover:underline"><LKey k="products" /></Link>
          {cat && (
            <>
              <span className="mx-1">/</span>
              <Link href="" className="hover:underline">
                <L value={cat.title} />
              </Link>
            </>
          )}
        </nav>

        {/* Title */}
        <header className="mt-3 flex flex-wrap items-center gap-3">
          {icon && (
            <span className={`h-9 w-9 rounded-lg ring-1 ${theme.ring} ${theme.bg} grid place-items-center`}>
              <span className="relative h-5 w-5">
                <Image src={icon} alt={`${item.categoryId} icon`} fill sizes="20px" className="object-contain" />
              </span>
            </span>
          )}
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            <L value={item.name} />
          </h1>
        </header>

        {/* Main content grid */}
        <section className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
          {/* Image card */}
          <div className="relative rounded-xl bg-background overflow-hidden 
                h-[320px] sm:h-[420px] lg:h-full max-h-[600px]">


            <ImageGallery images={galleryImages} isNew={detail.isNew} />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-foreground/10" />
          </div>

          {/* Info panel */}
          <div>
            {/* Category chip */}
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 text-xs font-medium capitalize">
              <span className={`inline-flex h-6 w-6 items-center justify-center rounded ${theme.bg} ${theme.ring} ring-1`}>
                <span className="relative h-4 w-4">
                  {icon && (
                    <Image src={icon} alt="" fill sizes="16px" className="object-contain" />
                  )}
                </span>
              </span>
              <span className={theme.text}><L value={cat?.title || { en: item.categoryId.replace("-", " "), ar: item.categoryId.replace("-", " ") }} /></span>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              <L value={detail.description || { en: "High-performance product.", ar: "منتج عالي الأداء." }} />
            </p>

            {/* Price range */}
            {typeof item.priceRange?.min === "number" &&
              typeof item.priceRange?.max === "number" && (
                <div className="mt-4">
                  <div className="inline-flex items-center gap-2 rounded-lg border border-foreground/10 bg-muted/40 px-4 py-2">
                    <span className="text-sm text-muted-foreground">
                      <LKey k="priceRange" />
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      <LKey k="currency" /> {item.priceRange.min} – {item.priceRange.max}
                    </span>
                  </div>
                </div>
              )}



            <div className="mt-6 flex flex-wrap gap-3">
              {detail.tdsUrl && (
                <a className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-white text-sm hover:brightness-110" href={detail.tdsUrl} role="button">
                  <LKey k="downloadTDS" />
                </a>
              )}
              {detail.sdsUrl && (
                <a className="inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm hover:bg-muted" href={detail.sdsUrl} role="button">
                  <LKey k="downloadSDS" />
                </a>
              )}
            </div>

            {/* Add to cart / inquiry */}
            <AddToCart productId={item.id} name={item.name} img={img} packaging={detail.packaging} priceRange={item.priceRange} />

            {/* Properties */}
            {detail.properties && detail.properties.length > 0 && (
              <div className="mt-8 rounded-2xl border border-foreground/10 bg-background p-5">
                <h2 className="text-base font-semibold text-foreground"><LKey k="properties" /></h2>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {detail.properties.map((p, i) => (
                    <p key={i}><L value={p} /></p>
                  ))}
                </ul>
              </div>
            )}

            {/* Applications */}
            {detail.applications && detail.applications.length > 0 && (
              <div className="mt-5 rounded-2xl border border-foreground/10 bg-background p-5">
                <h2 className="text-base font-semibold text-foreground"><LKey k="applicationAreas" /></h2>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {detail.applications.map((p, i) => (
                    <li key={i}><L value={p} /></li>
                  ))}
                </ul>
              </div>
            )}

{/* Product Specifications */}
{sampleProduct2.productSpecifications &&
  sampleProduct2.productSpecifications.length > 0 && (
    <div className="mt-5 rounded-2xl border border-foreground/10 bg-background p-5">
      <h2 className="text-base font-semibold text-foreground">
        Product Specifications
      </h2>

      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="text-muted-foreground">
            <tr className="border-b border-foreground/10">
              <th className="py-2 pr-3">Title</th>
              <th className="py-2 pr-3">Description / Notes</th>
            </tr>
          </thead>

          <tbody>
            {sampleProduct2.productSpecifications.map((row, i) => (
              <tr key={i} className="border-b border-foreground/10">
                <td className="py-2 pr-3">{row.name}</td>
                <td className="py-2 pr-3">{row.value ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )}



            {/* Technical Specifications */}
            {sampleProduct.technicalSpecs && Object.keys(sampleProduct.technicalSpecs).length > 0 && (
              <div className="mt-5 rounded-2xl border border-foreground/10 bg-background p-5">
                <h2 className="text-base font-semibold text-foreground">Technical Specifications</h2>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="text-muted-foreground">
                      <tr className="border-b border-foreground/10">
                        <th className="py-2 pr-3">Specification</th>
                        <th className="py-2 pr-3">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(sampleProduct.technicalSpecs).map(([key, value], i) => (
                        <tr key={i} className="border-b border-foreground/10">
                          <td className="py-2 pr-3">{key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}</td>
                          <td className="py-2 pr-3">{value ?? "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}


            {/* Packaging table */}
            {detail.packaging && detail.packaging.length > 0 && (
              <div className="mt-5 rounded-2xl border border-foreground/10 bg-background p-5">
                <h2 className="text-base font-semibold text-foreground"><LKey k="packaging" /></h2>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="text-muted-foreground">
                      <tr className="border-b border-foreground/10">
                        <th className="py-2 pr-3"><LKey k="stockCode" /></th>
                        <th className="py-2 pr-3"><LKey k="productCode" /></th>
                        <th className="py-2 pr-3"><LKey k="type" /></th>
                        <th className="py-2 pr-3"><LKey k="volume" /></th>
                        <th className="py-2 pr-3"><LKey k="boxQty" /></th>
                      </tr>
                    </thead>
                    <tbody>
                      {detail.packaging.map((row, i) => (
                        <tr key={i} className="border-b border-foreground/10">
                          <td className="py-2 pr-3">{row.stockCode ?? "-"}</td>
                          <td className="py-2 pr-3">{row.productCode ?? "-"}</td>
                          <td className="py-2 pr-3">{row.type ?? "-"}</td>
                          <td className="py-2 pr-3">{row.volume ?? "-"}</td>
                          <td className="py-2 pr-3">{row.boxQty ?? "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold tracking-tight"><LKey k="relatedIn" /> {cat && <L value={cat.title} />}</h2>
            <Carousel className="mt-6">
              {related.slice(0, 8).map((r) => (
                <ProductTile key={r.id} title={r.name} imgSrc={productImageByItemId[r.id]} href={`/p/${r.id}`} priceRange={r.priceRange} />
              ))}
            </Carousel>
          </section>
        )}
      </Container>
    </div>
  );
}

