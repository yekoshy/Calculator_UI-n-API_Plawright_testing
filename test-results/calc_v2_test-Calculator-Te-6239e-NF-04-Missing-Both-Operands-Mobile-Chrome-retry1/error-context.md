# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: calc_v2_test.spec.ts >> Calculator Tests >> Testcase NF-04: Missing Both Operands
- Location: calc_v2_test.spec.ts:8:10

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#answer')
Expected substring: "Error: Empty input"
Received string:    "0"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#answer')
    3 × locator resolved to <span id="answer"></span>
      - unexpected value ""
    6 × locator resolved to <span id="answer">0</span>
      - unexpected value "0"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - navigation [ref=e3]:
      - generic [ref=e4]:
        - link [ref=e5] [cursor=pointer]:
          - /url: /
          - img [ref=e7]:
            - generic "Test Pages" [ref=e10]
            - generic "PRACTICE SOFTWARE TESTING" [ref=e11]
        - list [ref=e13]:
          - listitem [ref=e14]:
            - link "Pages" [ref=e15] [cursor=pointer]:
              - /url: /pages/
          - listitem [ref=e16]:
            - link "Apps" [ref=e17] [cursor=pointer]:
              - /url: /apps/
          - listitem [ref=e18]:
            - link "Challenges" [ref=e19] [cursor=pointer]:
              - /url: /challenges/
          - listitem [ref=e20]:
            - link "Reference Information and Tutorials" [ref=e21] [cursor=pointer]:
              - /url: /reference/
    - generic [ref=e22]:
      - text: Support this site by joining our Patreon. For as little as $1 a month you receive exclusive ad-free content, ebooks and online training courses. —
      - link "Learn more" [ref=e23] [cursor=pointer]:
        - /url: https://patreon.com/eviltester
  - generic [ref=e24]:
    - generic [ref=e26]:
      - complementary [ref=e27]:
        - generic [ref=e28]:
          - button "Toggle section navigation" [ref=e31] [cursor=pointer]: 
          - text:                                                                                                  
      - main [ref=e32]:
        - navigation "breadcrumb" [ref=e33]:
          - list [ref=e34]:
            - listitem [ref=e35]:
              - link "Apps" [ref=e36] [cursor=pointer]:
                - /url: /apps/
            - listitem [ref=e37]:
              - text: /
              - link "Simple Calculator API" [ref=e38] [cursor=pointer]:
                - /url: /apps/calculator-api/
            - listitem [ref=e39]: / Form UI
        - generic [ref=e40]:
          - heading "Server Side Calculator Using API" [level=1] [ref=e41]
          - generic [ref=e42]:
            - generic [ref=e43]:
              - paragraph [ref=e44]: "Tags:"
              - list [ref=e45]:
                - listitem [ref=e46]:
                  - link "Exploratory Testing" [ref=e47] [cursor=pointer]:
                    - /url: https://testpages.eviltester.com/tags/exploratory-testing/
                - listitem [ref=e48]:
                  - link "Interaction" [ref=e49] [cursor=pointer]:
                    - /url: https://testpages.eviltester.com/tags/interaction/
                - listitem [ref=e50]:
                  - link "JavaScript" [ref=e51] [cursor=pointer]:
                    - /url: https://testpages.eviltester.com/tags/javascript/
                - listitem [ref=e52]:
                  - link "API" [ref=e53] [cursor=pointer]:
                    - /url: https://testpages.eviltester.com/tags/api/
            - generic [ref=e54]:
              - paragraph [ref=e55]: "Categories:"
              - list [ref=e56]:
                - listitem [ref=e57]:
                  - link "Micro App" [ref=e58] [cursor=pointer]:
                    - /url: https://testpages.eviltester.com/categories/micro-app/
          - paragraph [ref=e60]: When you submit the calculation the request is sent to the calculate api and the result is returned to this web page and rendered as the answer.
          - separator [ref=e61]
          - generic [ref=e62]:
            - generic [ref=e64]:
              - textbox [ref=e65]
              - combobox [ref=e66]:
                - option "plus" [selected]
                - option "times"
                - option "minus"
                - option "divide"
              - textbox [ref=e67]
            - button "Calculate" [active] [ref=e69] [cursor=pointer]
            - paragraph [ref=e71]: "Answer : 0"
    - contentinfo [ref=e72]:
      - generic [ref=e73]:
        - paragraph [ref=e74]:
          - text: Help keep this site free by joining our
          - link "Patreon Membership site" [ref=e75] [cursor=pointer]:
            - /url: https://patreon.com/eviltester
          - text: . Membership costs as little as $1 a month and includes access to exclusive
          - link "e-books and online training courses" [ref=e76] [cursor=pointer]:
            - /url: https://www.testerhq.com/
          - text: .
        - paragraph [ref=e77]:
          - text: If you'd like to see your advertising message here or learn about corporate sponsorship then
          - link "Contact Us" [ref=e78] [cursor=pointer]:
            - /url: https://linkedin.com/in/eviltester
          - text: .
      - generic [ref=e80]:
        - list [ref=e82]:
          - listitem "Twitter" [ref=e83]:
            - link "Twitter" [ref=e84] [cursor=pointer]:
              - /url: https://twitter.com/eviltester
              - generic [ref=e85]: 
          - listitem "LinkedIn" [ref=e86]:
            - link "LinkedIn" [ref=e87] [cursor=pointer]:
              - /url: https://linkedin.com/in/eviltester
              - generic [ref=e88]: 
        - list [ref=e90]:
          - listitem "GitHub" [ref=e91]:
            - link "GitHub" [ref=e92] [cursor=pointer]:
              - /url: https://github.com/eviltester
              - generic [ref=e93]: 
        - generic [ref=e94]:
          - generic [ref=e95]: © 2025–2026 Compendium Developments Ltd
          - link "Privacy Policy" [ref=e97] [cursor=pointer]:
            - /url: https://www.eviltester.com/page/privacy/
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import testData from './testcases.json';
  3  | 
  4  | test.describe('Calculator Tests', () => {
  5  | 
  6  |   // Loop through each test case in your JSON file
  7  |   for (const data of testData) {
  8  |      test(`Testcase ${data.id}: ${data.description}`, async ({ page }) => {
  9  |       await page.goto('https://testpages.eviltester.com/apps/calculator-api/form-calculator/');
  10 |       await page.locator('#number1').click();
  11 |       await page.locator('#number1').fill(data.operand1);
  12 |       await page.locator('#function').selectOption(data.operator);
  13 |       await page.locator('#number2').click();
  14 |       await page.locator('#number2').fill(data.operand2);
  15 | 
  16 |       await page.getByRole('button', { name: 'Calculate' }).click();
> 17 |       await expect(page.locator('#answer')).toContainText(data.expectedResult);
     |                                             ^ Error: expect(locator).toContainText(expected) failed
  18 |      });
  19 |   }
  20 | });
```