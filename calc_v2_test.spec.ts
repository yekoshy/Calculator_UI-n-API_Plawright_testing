import { test, expect } from '@playwright/test';
import testData from './testcases.json';

test.describe('Calculator Tests', () => {

  // Loop through each test case in your JSON file
  for (const data of testData) {
     test(`Testcase ${data.id}: ${data.description}`, async ({ page }) => {
      await page.goto('https://testpages.eviltester.com/apps/calculator-api/form-calculator/');
      await page.locator('#number1').click();
      await page.locator('#number1').fill(data.operand1);
      await page.locator('#function').selectOption(data.operator);
      await page.locator('#number2').click();
      await page.locator('#number2').fill(data.operand2);

      await page.getByRole('button', { name: 'Calculate' }).click();
      await expect(page.locator('#answer')).toContainText(data.expectedResult);
     });
  }
});