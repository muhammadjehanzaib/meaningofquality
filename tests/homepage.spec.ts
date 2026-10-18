
import { test, expect } from "@playwright/test";

test("MOQ homepage loads correctly", async ({ page }) => {
  const pageErrors: string[] = [];

  page.on("pageerror", (error) => {
    pageErrors.push(error.message);
  });

  const response = await page.goto("https://www.moq.com.sa/", {
    waitUntil: "domcontentloaded",
  });

  expect(response, "Homepage should return a response").not.toBeNull();
  expect(response!.status()).toBeLessThan(400);

  await expect(page.locator("body")).toBeVisible();

  // Confirm the homepage has a meaningful document title.
  await expect(page).toHaveTitle(/\S+/);

  // Print the title to the test report for inspection.
  console.log("Homepage title:", await page.title());

  // Confirm the intended New Products section exists.
  await expect(
    page.getByText("New Products", { exact: true }).first()
  ).toBeVisible({ timeout: 15000 });

  // Fail if the browser encounters uncaught JavaScript errors.
  expect(pageErrors, "Unexpected browser JavaScript errors").toEqual([]);
});
