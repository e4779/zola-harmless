import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/4779/);
  });

  test('has navigation to sections', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('nav a:has-text("блог")')).toBeVisible();
    await expect(page.locator('nav a:has-text("заметки")')).toBeVisible();
    await expect(page.locator('nav a:has-text("граф")')).toBeVisible();
  });

  test('nav links work', async ({ page }) => {
    await page.goto('/');
    await page.click('nav a:has-text("блог")');
    await expect(page).toHaveURL(/\/p\//);
    await page.goto('/');
    await page.click('nav a:has-text("заметки")');
    await expect(page).toHaveURL(/\/w\//);
    await page.goto('/');
    await page.click('nav a:has-text("граф")');
    await expect(page).toHaveURL(/\/graph\//);
  });
});
