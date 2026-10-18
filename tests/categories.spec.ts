
import { test, expect } from "@playwright/test";

test("Adhesives category loads successfully", async ({ page }) => {
  const response = await page.goto(
    "https://www.moq.com.sa/categories/adhesives",
    { waitUntil: "domcontentloaded" }
  );

  expect(response).not.toBeNull();
  expect(response!.status()).toBe(200);

  await expect(page.locator("body")).toBeVisible();

  // Allow client-side rendering to complete.
  await expect(
    page.getByText(/Adhesives|Glues/i).first()
  ).toBeVisible({ timeout: 15000 });

  // Fail if the page remains stuck in a loading state.
  await expect(
    page.getByText(/^Loading\.\.\.$/)
  ).toHaveCount(0, { timeout: 15000 });

  console.log("Category page title:", await page.title());
});

test("Category page does not show a browser-level error", async ({
  page,
}) => {
  const errors: string[] = [];

  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto("https://www.moq.com.sa/categories/adhesives", {
    waitUntil: "domcontentloaded",
  });

  await expect(page.locator("body")).toBeVisible();

  expect(errors).toEqual([]);
});
