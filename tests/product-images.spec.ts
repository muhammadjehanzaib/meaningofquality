
import { test, expect } from "@playwright/test";

test("U Nails 5540 main product image loads", async ({ page }) => {
  await page.goto("https://www.moq.com.sa/p/u-nails-5540", {
    waitUntil: "domcontentloaded",
  });

  const productImage = page.locator(
    'img[src*="u-nails-5540_"]'
  ).first();

  await expect(productImage).toBeVisible();
  await expect
    .poll(
      () =>
        productImage.evaluate((element) => {
          const img = element as HTMLImageElement;
          return img.complete && img.naturalWidth > 0;
        }),
      { timeout: 15000 }
    )
    .toBe(true);

  console.log(
    "Main product image:",
    await productImage.getAttribute("src")
  );
});
