
import { test, expect } from "@playwright/test";

test("U Nails 5540 product page loads correctly", async ({ page }) => {
  const response = await page.goto(
    "https://www.moq.com.sa/p/u-nails-5540",
    { waitUntil: "domcontentloaded" }
  );

  expect(response).not.toBeNull();
  expect(response!.status()).toBe(200);

  await expect(page.locator("body")).toBeVisible();

  await expect(
    page.getByText(/U Nails 5540/i).first()
  ).toBeVisible();

  console.log("Product page title:", await page.title());
});

test("Nonexistent product ID does not display a valid product", async ({
  page,
}) => {
  const response = await page.goto(
    "https://www.moq.com.sa/p/np-2",
    { waitUntil: "domcontentloaded" }
  );

  expect(response).not.toBeNull();

  // The route must not display a real product as though this ID were valid.
  await expect(
    page.getByText(/Product not found|Page not found|404/i).first()
  ).toBeVisible();
});
