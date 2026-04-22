import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testpages.eviltester.com/apps/calculator-api/form-calculator/');
  await page.locator('#number1').click();
  await page.locator('#number1').fill('5');
  await page.locator('#function').selectOption('times');
    await page.locator('#number2').click();
  await page.locator('#number2').fill('5');
  await page.getByRole('button', { name: 'Calculate' }).click();
  await expect(page.locator('#answer')).toContainText('25');
});