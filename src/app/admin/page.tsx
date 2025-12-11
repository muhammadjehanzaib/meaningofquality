"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import { categories, newProducts, mostVisited, type Category, type Item } from "@/data/catalog";
import { productDetailsById, type ProductDetail } from "@/data/productDetails";
import { productImageByItemId } from "@/data/assets";

export default function AdminPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [activeTab, setActiveTab] = useState<"products" | "categories" | "details">("products");
  
  // Form states
  const [categoriesData, setCategoriesData] = useState<Category[]>(categories);
  const [newProductsData, setNewProductsData] = useState<Item[]>(newProducts);
  const [mostVisitedData, setMostVisitedData] = useState<Item[]>(mostVisited);
  const [productDetailsData, setProductDetailsData] = useState<Record<string, ProductDetail>>(productDetailsById);
  const [productImagesData, setProductImagesData] = useState<Record<string, string>>(productImageByItemId);

  // Derived products list for details tab (includes newly added items)
  const allItemsState = [...newProductsData, ...mostVisitedData];

  // Check if we're in development
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      setMessage({ type: "error", text: "Admin panel is only available in development mode" });
    }
  }, []);

  const showMessage = (type: "success" | "error", text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  };

  const saveCatalog = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/catalog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "updateCatalog",
          data: {
            categories: categoriesData,
            newProducts: newProductsData,
            mostVisited: mostVisitedData,
          },
        }),
      });

      const result = await response.json();
      if (result.success) {
        showMessage("success", "Catalog saved successfully! Restart dev server to see changes.");
      } else {
        showMessage("error", result.error || "Failed to save catalog");
      }
    } catch (error) {
      showMessage("error", error instanceof Error ? error.message : "Failed to save");
    } finally {
      setLoading(false);
    }
  };

  const saveProductDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/catalog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "updateProductDetails",
          data: { productDetailsById: productDetailsData },
        }),
      });

      const result = await response.json();
      if (result.success) {
        showMessage("success", "Product details saved successfully! Restart dev server to see changes.");
      } else {
        showMessage("error", result.error || "Failed to save product details");
      }
    } catch (error) {
      showMessage("error", error instanceof Error ? error.message : "Failed to save");
    } finally {
      setLoading(false);
    }
  };

  const saveAssets = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/catalog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "updateAssets",
          data: { productImageByItemId: productImagesData },
        }),
      });

      const result = await response.json();
      if (result.success) {
        showMessage("success", "Assets saved successfully! Restart dev server to see changes.");
      } else {
        showMessage("error", result.error || "Failed to save assets");
      }
    } catch (error) {
      showMessage("error", error instanceof Error ? error.message : "Failed to save");
    } finally {
      setLoading(false);
    }
  };

  const addProduct = (list: "new" | "mostVisited") => {
    const newId = list === "new" ? `np-${Date.now()}` : `mv-${Date.now()}`;
    const newProduct: Item = {
      id: newId,
      name: { en: "New Product", ar: "منتج جديد" },
      categoryId: categoriesData[0]?.id || "adhesives",
      tags: [],
    };

    if (list === "new") {
      setNewProductsData([...newProductsData, newProduct]);
    } else {
      setMostVisitedData([...mostVisitedData, newProduct]);
    }

    // Add empty product detail
    setProductDetailsData({
      ...productDetailsData,
      [newId]: { isNew: list === "new" },
    });

    // Add empty image mapping
    setProductImagesData({
      ...productImagesData,
      [newId]: "/images/all-products/adhesives/placeholder.png",
    });
  };

  const deleteProduct = (id: string, list: "new" | "mostVisited") => {
    if (list === "new") {
      setNewProductsData(newProductsData.filter(p => p.id !== id));
    } else {
      setMostVisitedData(mostVisitedData.filter(p => p.id !== id));
    }

    // Remove from details and images
    const newDetails = { ...productDetailsData };
    delete newDetails[id];
    setProductDetailsData(newDetails);

    const newImages = { ...productImagesData };
    delete newImages[id];
    setProductImagesData(newImages);
  };

  const updateProduct = (id: string, updates: Partial<Item>, list: "new" | "mostVisited") => {
    if (list === "new") {
      setNewProductsData(newProductsData.map(p => p.id === id ? { ...p, ...updates } : p));
    } else {
      setMostVisitedData(mostVisitedData.map(p => p.id === id ? { ...p, ...updates } : p));
    }
  };

  const addCategory = () => {
    const newId = `category-${Date.now()}`;
    const newCategory: Category = {
      id: newId,
      title: { en: "New Category", ar: "فئة جديدة" },
    };
    setCategoriesData([...categoriesData, newCategory]);
  };

  const deleteCategory = (id: string) => {
    setCategoriesData(categoriesData.filter(c => c.id !== id));
  };

  const updateCategory = (id: string, updates: Partial<Category>) => {
    setCategoriesData(categoriesData.map(c => c.id === id ? { ...c, ...updates } : c));
  };

  if (process.env.NODE_ENV === "production") {
    return (
      <Container className="py-10">
        <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
          <h1 className="text-xl font-bold text-red-800">Admin Panel Unavailable</h1>
          <p className="mt-2 text-sm text-red-600">
            This admin panel is only available in development mode for security reasons.
          </p>
        </div>
      </Container>
    );
  }

  return (
    <div className="min-h-screen bg-muted py-10">
      <Container className="max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Admin Panel</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Manage products, categories, and product details locally
            </p>
          </div>
          {message && (
            <div
              className={`rounded-lg px-4 py-2 text-sm ${
                message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              {message.text}
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-2 border-b">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "products"
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("categories")}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "categories"
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Categories
          </button>
          <button
            onClick={() => setActiveTab("details")}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "details"
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Product Details
          </button>
        </div>

        {/* Products Tab */}
        {activeTab === "products" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Products</h2>
              <button
                onClick={saveCatalog}
                disabled={loading}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:brightness-110 disabled:opacity-50"
              >
                {loading ? "Saving..." : "Save Catalog"}
              </button>
            </div>

            {/* New Products */}
            <div className="rounded-lg border bg-background p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">New Products</h3>
                <button
                  onClick={() => addProduct("new")}
                  className="rounded bg-primary px-3 py-1 text-sm text-white hover:brightness-110"
                >
                  + Add Product
                </button>
              </div>
              <div className="space-y-3">
                {newProductsData.map((product) => (
                  <ProductEditor
                    key={product.id}
                    product={product}
                    categories={categoriesData}
                    onUpdate={(updates) => updateProduct(product.id, updates, "new")}
                    onDelete={() => deleteProduct(product.id, "new")}
                    image={productImagesData[product.id]}
                    onImageChange={(img) =>
                      setProductImagesData({ ...productImagesData, [product.id]: img })
                    }
                  />
                ))}
              </div>
            </div>

            {/* Most Visited */}
            <div className="rounded-lg border bg-background p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Most Visited Products</h3>
                <button
                  onClick={() => addProduct("mostVisited")}
                  className="rounded bg-primary px-3 py-1 text-sm text-white hover:brightness-110"
                >
                  + Add Product
                </button>
              </div>
              <div className="space-y-3">
                {mostVisitedData.map((product) => (
                  <ProductEditor
                    key={product.id}
                    product={product}
                    categories={categoriesData}
                    onUpdate={(updates) => updateProduct(product.id, updates, "mostVisited")}
                    onDelete={() => deleteProduct(product.id, "mostVisited")}
                    image={productImagesData[product.id]}
                    onImageChange={(img) =>
                      setProductImagesData({ ...productImagesData, [product.id]: img })
                    }
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={saveAssets}
                disabled={loading}
                className="rounded-lg border px-4 py-2 text-sm hover:bg-muted disabled:opacity-50"
              >
                {loading ? "Saving..." : "Save Images"}
              </button>
            </div>
          </div>
        )}

        {/* Categories Tab */}
        {activeTab === "categories" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Categories</h2>
              <div className="flex gap-2">
                <button
                  onClick={addCategory}
                  className="rounded bg-primary px-4 py-2 text-sm font-medium text-white hover:brightness-110"
                >
                  + Add Category
                </button>
                <button
                  onClick={saveCatalog}
                  disabled={loading}
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:brightness-110 disabled:opacity-50"
                >
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {categoriesData.map((category) => (
                <CategoryEditor
                  key={category.id}
                  category={category}
                  onUpdate={(updates) => updateCategory(category.id, updates)}
                  onDelete={() => deleteCategory(category.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Product Details Tab */}
        {activeTab === "details" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Product Details</h2>
              <button
                onClick={saveProductDetails}
                disabled={loading}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:brightness-110 disabled:opacity-50"
              >
                {loading ? "Saving..." : "Save Details"}
              </button>
            </div>

            <div className="space-y-4">
              {allItemsState.map((item) => {
                const detail = productDetailsData[item.id] || {};
                return (
                  <ProductDetailEditor
                    key={item.id}
                    productName={item.name}
                    detail={detail}
                    onUpdate={(updates) =>
                      setProductDetailsData({
                        ...productDetailsData,
                        [item.id]: { ...detail, ...updates },
                      })
                    }
                  />
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

// Product Editor Component
function ProductEditor({
  product,
  categories,
  onUpdate,
  onDelete,
  image,
  onImageChange,
}: {
  product: Item;
  categories: Category[];
  onUpdate: (updates: Partial<Item>) => void;
  onDelete: () => void;
  image?: string;
  onImageChange: (img: string) => void;
}) {
  return (
    <div className="rounded border p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block text-xs font-medium text-muted-foreground">ID</label>
          <input
            type="text"
            value={product.id}
            onChange={(e) => onUpdate({ id: e.target.value })}
            className="mt-1 w-full rounded border px-2 py-1 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground">Category</label>
          <select
            value={product.categoryId}
            onChange={(e) => onUpdate({ categoryId: e.target.value })}
            className="mt-1 w-full rounded border px-2 py-1 text-sm"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.title.en}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground">Name (EN)</label>
          <input
            type="text"
            value={product.name.en}
            onChange={(e) => onUpdate({ name: { ...product.name, en: e.target.value } })}
            className="mt-1 w-full rounded border px-2 py-1 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground">Name (AR)</label>
          <input
            type="text"
            value={product.name.ar}
            onChange={(e) => onUpdate({ name: { ...product.name, ar: e.target.value } })}
            className="mt-1 w-full rounded border px-2 py-1 text-sm"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-medium text-muted-foreground">Image Path</label>
          <input
            type="text"
            value={image || ""}
            onChange={(e) => onImageChange(e.target.value)}
            className="mt-1 w-full rounded border px-2 py-1 text-sm"
            placeholder="/images/all-products/category/product.png"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground">Min Price</label>
          <input
            type="number"
            value={product.priceRange?.min || ""}
            onChange={(e) =>
              onUpdate({
                priceRange: {
                  min: Number(e.target.value) || 0,
                  max: product.priceRange?.max || 0,
                },
              })
            }
            className="mt-1 w-full rounded border px-2 py-1 text-sm"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground">Max Price</label>
          <input
            type="number"
            value={product.priceRange?.max || ""}
            onChange={(e) =>
              onUpdate({
                priceRange: {
                  min: product.priceRange?.min || 0,
                  max: Number(e.target.value) || 0,
                },
              })
            }
            className="mt-1 w-full rounded border px-2 py-1 text-sm"
            placeholder="0"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-medium text-muted-foreground">Tags (comma-separated)</label>
          <input
            type="text"
            value={product.tags?.join(", ") || ""}
            onChange={(e) =>
              onUpdate({
                tags: e.target.value.split(",").map((t) => t.trim()).filter(Boolean),
              })
            }
            className="mt-1 w-full rounded border px-2 py-1 text-sm"
          />
        </div>
      </div>
      <div className="mt-3 flex justify-end">
        <button
          onClick={onDelete}
          className="rounded bg-red-100 px-3 py-1 text-sm text-red-700 hover:bg-red-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

// Category Editor Component
function CategoryEditor({
  category,
  onUpdate,
  onDelete,
}: {
  category: Category;
  onUpdate: (updates: Partial<Category>) => void;
  onDelete: () => void;
}) {
  return (
    <div className="rounded border bg-background p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <label className="block text-xs font-medium text-muted-foreground">ID</label>
          <input
            type="text"
            value={category.id}
            onChange={(e) => onUpdate({ id: e.target.value })}
            className="mt-1 w-full rounded border px-2 py-1 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground">Title (EN)</label>
          <input
            type="text"
            value={category.title.en}
            onChange={(e) => onUpdate({ title: { ...category.title, en: e.target.value } })}
            className="mt-1 w-full rounded border px-2 py-1 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground">Title (AR)</label>
          <input
            type="text"
            value={category.title.ar}
            onChange={(e) => onUpdate({ title: { ...category.title, ar: e.target.value } })}
            className="mt-1 w-full rounded border px-2 py-1 text-sm"
          />
        </div>
      </div>
      <div className="mt-3 flex justify-end">
        <button
          onClick={onDelete}
          className="rounded bg-red-100 px-3 py-1 text-sm text-red-700 hover:bg-red-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

// Product Detail Editor Component
function ProductDetailEditor({
  productName,
  detail,
  onUpdate,
}: {
  productName: { en: string; ar: string };
  detail: ProductDetail;
  onUpdate: (updates: Partial<ProductDetail>) => void;
}) {
  const descEn = typeof detail.description === "string" ? detail.description : detail.description?.en || "";
  const descAr = typeof detail.description === "string" ? "" : detail.description?.ar || "";

  const propsEn = (detail.properties ?? []).map((p) => (typeof p === "string" ? p : p.en || "")).join("\n");
  const propsAr = (detail.properties ?? []).map((p) => (typeof p === "string" ? "" : p.ar || "")).join("\n");

  const appsEn = (detail.applications ?? []).map((a) => (typeof a === "string" ? a : a.en || "")).join("\n");
  const appsAr = (detail.applications ?? []).map((a) => (typeof a === "string" ? "" : a.ar || "")).join("\n");

  const mergeDualList = (enText: string, arText: string) => {
    const enLines = enText.split("\n");
    const arLines = arText.split("\n");
    const max = Math.max(enLines.length, arLines.length);
    const result: Array<{ en: string; ar: string }> = [];
    for (let i = 0; i < max; i++) {
      const en = (enLines[i] || "").trim();
      const ar = (arLines[i] || "").trim();
      if (en || ar) result.push({ en, ar });
    }
    return result;
  };

  return (
    <div className="rounded border bg-background p-4">
      <h3 className="mb-3 font-semibold">{productName.en}</h3>
      <div className="space-y-4">
        <div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={detail.isNew || false}
              onChange={(e) => onUpdate({ isNew: e.target.checked })}
            />
            <span className="text-sm">Mark as New Product</span>
          </label>
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground">Description (EN)</label>
          <textarea
            value={descEn}
            onChange={(e) => onUpdate({ description: { en: e.target.value, ar: descAr } })}
            className="mt-1 w-full rounded border px-2 py-1 text-sm"
            rows={3}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground">Description (AR)</label>
          <textarea
            value={descAr}
            onChange={(e) => onUpdate({ description: { en: descEn, ar: e.target.value } })}
            className="mt-1 w-full rounded border px-2 py-1 text-sm"
            rows={3}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground">Properties (EN, one per line)</label>
          <textarea
            value={propsEn}
            onChange={(e) =>
              onUpdate({
                properties: mergeDualList(e.target.value, propsAr),
              })
            }
            className="mt-1 w-full rounded border px-2 py-1 text-sm"
            rows={4}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground">Properties (AR, one per line)</label>
          <textarea
            value={propsAr}
            onChange={(e) =>
              onUpdate({
                properties: mergeDualList(propsEn, e.target.value),
              })
            }
            className="mt-1 w-full rounded border px-2 py-1 text-sm"
            rows={4}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground">Applications (EN, one per line)</label>
          <textarea
            value={appsEn}
            onChange={(e) =>
              onUpdate({
                applications: mergeDualList(e.target.value, appsAr),
              })
            }
            className="mt-1 w-full rounded border px-2 py-1 text-sm"
            rows={4}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground">Applications (AR, one per line)</label>
          <textarea
            value={appsAr}
            onChange={(e) =>
              onUpdate({
                applications: mergeDualList(appsEn, e.target.value),
              })
            }
            className="mt-1 w-full rounded border px-2 py-1 text-sm"
            rows={4}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground">TDS URL</label>
          <input
            type="text"
            value={detail.tdsUrl || ""}
            onChange={(e) => onUpdate({ tdsUrl: e.target.value })}
            className="mt-1 w-full rounded border px-2 py-1 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground">SDS URL</label>
          <input
            type="text"
            value={detail.sdsUrl || ""}
            className="mt-1 w-full rounded border px-2 py-1 text-sm"
            onChange={(e) => onUpdate({ sdsUrl: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}

