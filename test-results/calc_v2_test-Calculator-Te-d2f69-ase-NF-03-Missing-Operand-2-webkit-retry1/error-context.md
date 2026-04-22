# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: calc_v2_test.spec.ts >> Calculator Tests >> Testcase NF-03: Missing Operand 2
- Location: calc_v2_test.spec.ts:8:10

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#answer')
Expected substring: "Error: Empty input"
Received string:    "5"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#answer')
    3 × locator resolved to <span id="answer"></span>
      - unexpected value ""
    6 × locator resolved to <span id="answer">5</span>
      - unexpected value "5"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - navigation [ref=e3]:
      - generic [ref=e4]:
        - link [ref=e5]:
          - /url: /
          - img [ref=e7]:
            - generic "Test Pages" [ref=e10]
            - generic "PRACTICE SOFTWARE TESTING" [ref=e11]
        - list [ref=e13]:
          - listitem [ref=e14]:
            - link "Pages" [ref=e15]:
              - /url: /pages/
          - listitem [ref=e16]:
            - link "Apps" [ref=e17]:
              - /url: /apps/
          - listitem [ref=e18]:
            - link "Challenges" [ref=e19]:
              - /url: /challenges/
          - listitem [ref=e20]:
            - link "Reference Information and Tutorials" [ref=e21]:
              - /url: /reference/
    - generic [ref=e22]:
      - text: Support this site by joining our Patreon. For as little as $1 a month you receive exclusive ad-free content, ebooks and online training courses. —
      - link "Learn more" [ref=e23]:
        - /url: https://patreon.com/eviltester
  - generic [ref=e24]:
    - generic [ref=e26]:
      - complementary [ref=e27]:
        - generic [ref=e28]:
          - text: 
          - navigation [ref=e29]:
            - list [ref=e30]:
              - listitem [ref=e31]:
                - link "Practice Pages" [ref=e32]:
                  - /url: /
                - list [ref=e33]:
                  - listitem [ref=e34]:
                    - generic [ref=e35]:
                      - text: 
                      - link "Pages" [ref=e36]:
                        - /url: /pages/
                    - text:                                                               
                  - listitem [ref=e37]:
                    - generic [ref=e38]:
                      - text: 
                      - link "Apps" [ref=e39]:
                        - /url: /apps/
                    - list [ref=e40]:
                      - listitem [ref=e41]:
                        - generic [ref=e42]:
                          - text: 
                          - link "Triangle" [ref=e43]:
                            - /url: /apps/triangle/
                      - listitem [ref=e44]:
                        - generic [ref=e45]:
                          - text: 
                          - link "7 Char Val" [ref=e46]:
                            - /url: /apps/7-char-val/
                      - listitem [ref=e47]:
                        - generic [ref=e48]:
                          - text: 
                          - link "Shopping Cart" [ref=e49]:
                            - /url: /apps/basiccart/
                      - listitem [ref=e50]:
                        - generic [ref=e51]:
                          - text: 
                          - link "Button Calculator" [ref=e52]:
                            - /url: /apps/button-calculator/
                      - listitem [ref=e53]:
                        - generic [ref=e54]:
                          - text: 
                          - link "Canvas Draw" [ref=e55]:
                            - /url: /apps/canvas-draw/
                      - listitem [ref=e56]:
                        - generic [ref=e57]:
                          - text: 
                          - link "Canvas Scribble" [ref=e58]:
                            - /url: /apps/canvas-scribble/
                      - listitem [ref=e59]:
                        - generic [ref=e60]:
                          - text: 
                          - link "Validated Client Server Form" [ref=e61]:
                            - /url: /apps/client-server-form-validation/
                      - listitem [ref=e62]:
                        - generic [ref=e63]:
                          - text: 
                          - link "HTML Table Generator" [ref=e64]:
                            - /url: /apps/html-table-generator/
                      - listitem [ref=e65]:
                        - generic [ref=e66]:
                          - text: 
                          - link "Countdown Timer" [ref=e67]:
                            - /url: /apps/countdown-timer/
                      - listitem [ref=e68]:
                        - generic [ref=e69]:
                          - text: 
                          - link "Server Side Calculator" [ref=e70]:
                            - /url: /apps/server-side-calculator/
                      - listitem [ref=e71]:
                        - generic [ref=e72]:
                          - text: 
                          - link "Simple Calculator API" [ref=e73]:
                            - /url: /apps/calculator-api/
                        - list [ref=e74]:
                          - listitem [ref=e75]:
                            - link "Form UI" [ref=e77]:
                              - /url: /apps/calculator-api/form-calculator/
                          - listitem [ref=e78]:
                            - link "Swagger UI" [ref=e80]:
                              - /url: /apps/calculator-api/swagger/
                          - listitem [ref=e81]:
                            - link "Redoc UI" [ref=e83]:
                              - /url: /apps/calculator-api/redoc/
                          - listitem [ref=e84]:
                            - link "Instructions" [ref=e86]:
                              - /url: /apps/calculator-api/calculator-api-instructions/
                      - listitem [ref=e87]:
                        - generic [ref=e88]:
                          - text: 
                          - link "Text Transformer" [ref=e89]:
                            - /url: /apps/text-transformer/
                      - listitem [ref=e90]:
                        - generic [ref=e91]:
                          - text: 
                          - link "Cookie Controlled Login" [ref=e92]:
                            - /url: /apps/simulated-login/
                      - listitem [ref=e93]:
                        - generic [ref=e94]:
                          - text: 
                          - link "Numbers to Text" [ref=e95]:
                            - /url: /apps/numbers-to-text/
                      - listitem [ref=e96]:
                        - generic [ref=e97]:
                          - text: 
                          - link "Note Taker" [ref=e98]:
                            - /url: /apps/note-taker/
                  - listitem [ref=e99]:
                    - generic [ref=e100]:
                      - text: 
                      - link "Challenges" [ref=e101]:
                        - /url: /challenges/
                    - text:             
                  - listitem [ref=e102]:
                    - generic [ref=e103]:
                      - text: 
                      - link "Reference Information and Tutorials" [ref=e104]:
                        - /url: /reference/
                    - text:   
      - complementary [ref=e105]:
        - generic [ref=e107]:
          - paragraph [ref=e108]: Support this site by joining our Patreon. As little as $1 a month, and you receive exclusive content, ebooks and videos.
          - paragraph [ref=e109]:
            - link "Learn More" [ref=e110]:
              - /url: https://patreon.com/eviltester
        - generic [ref=e111]:
          - paragraph [ref=e112]: Tag Cloud
          - list [ref=e113]:
            - listitem [ref=e114]:
              - link "Alerts 2" [ref=e115]:
                - /url: /tags/alerts/
                - text: Alerts
                - generic [ref=e116]: "2"
            - listitem [ref=e117]:
              - link "API 20" [ref=e118]:
                - /url: /tags/api/
                - text: API
                - generic [ref=e119]: "20"
            - listitem [ref=e120]:
              - link "Attributes 2" [ref=e121]:
                - /url: /tags/attributes/
                - text: Attributes
                - generic [ref=e122]: "2"
            - listitem [ref=e123]:
              - link "Authentication 1" [ref=e124]:
                - /url: /tags/authentication/
                - text: Authentication
                - generic [ref=e125]: "1"
            - listitem [ref=e126]:
              - link "Automating 3" [ref=e127]:
                - /url: /tags/automating/
                - text: Automating
                - generic [ref=e128]: "3"
            - listitem [ref=e129]:
              - link "Components 1" [ref=e130]:
                - /url: /tags/components/
                - text: Components
                - generic [ref=e131]: "1"
            - listitem [ref=e132]:
              - link "Cookies 3" [ref=e133]:
                - /url: /tags/cookies/
                - text: Cookies
                - generic [ref=e134]: "3"
            - listitem [ref=e135]:
              - link "CSS 4" [ref=e136]:
                - /url: /tags/css/
                - text: CSS
                - generic [ref=e137]: "4"
            - listitem [ref=e138]:
              - link "Elements 19" [ref=e139]:
                - /url: /tags/elements/
                - text: Elements
                - generic [ref=e140]: "19"
            - listitem [ref=e141]:
              - link "Errors 4" [ref=e142]:
                - /url: /tags/errors/
                - text: Errors
                - generic [ref=e143]: "4"
            - listitem [ref=e144]:
              - link "Exploratory Testing 43" [ref=e145]:
                - /url: /tags/exploratory-testing/
                - text: Exploratory Testing
                - generic [ref=e146]: "43"
            - listitem [ref=e147]:
              - link "Files 2" [ref=e148]:
                - /url: /tags/files/
                - text: Files
                - generic [ref=e149]: "2"
            - listitem [ref=e150]:
              - link "Forms 8" [ref=e151]:
                - /url: /tags/forms/
                - text: Forms
                - generic [ref=e152]: "8"
            - listitem [ref=e153]:
              - link "Frames 4" [ref=e154]:
                - /url: /tags/frames/
                - text: Frames
                - generic [ref=e155]: "4"
            - listitem [ref=e156]:
              - link "HTML 1" [ref=e157]:
                - /url: /tags/html/
                - text: HTML
                - generic [ref=e158]: "1"
            - listitem [ref=e159]:
              - link "HTTP 1" [ref=e160]:
                - /url: /tags/http/
                - text: HTTP
                - generic [ref=e161]: "1"
            - listitem [ref=e162]:
              - link "Images 1" [ref=e163]:
                - /url: /tags/images/
                - text: Images
                - generic [ref=e164]: "1"
            - listitem [ref=e165]:
              - link "Input 7" [ref=e166]:
                - /url: /tags/input/
                - text: Input
                - generic [ref=e167]: "7"
            - listitem [ref=e168]:
              - link "Interaction 48" [ref=e169]:
                - /url: /tags/interaction/
                - text: Interaction
                - generic [ref=e170]: "48"
            - listitem [ref=e171]:
              - link "Java 1" [ref=e172]:
                - /url: /tags/java/
                - text: Java
                - generic [ref=e173]: "1"
            - listitem [ref=e174]:
              - link "JavaScript 34" [ref=e175]:
                - /url: /tags/javascript/
                - text: JavaScript
                - generic [ref=e176]: "34"
            - listitem [ref=e177]:
              - link "JSON 1" [ref=e178]:
                - /url: /tags/json/
                - text: JSON
                - generic [ref=e179]: "1"
            - listitem [ref=e180]:
              - link "Local Storage 1" [ref=e181]:
                - /url: /tags/local-storage/
                - text: Local Storage
                - generic [ref=e182]: "1"
            - listitem [ref=e183]:
              - link "Locators 18" [ref=e184]:
                - /url: /tags/locators/
                - text: Locators
                - generic [ref=e185]: "18"
            - listitem [ref=e186]:
              - link "Mobile 1" [ref=e187]:
                - /url: /tags/mobile/
                - text: Mobile
                - generic [ref=e188]: "1"
            - listitem [ref=e189]:
              - link "Navigation 7" [ref=e190]:
                - /url: /tags/navigation/
                - text: Navigation
                - generic [ref=e191]: "7"
            - listitem [ref=e192]:
              - link "Security Testing 1" [ref=e193]:
                - /url: /tags/security-testing/
                - text: Security Testing
                - generic [ref=e194]: "1"
            - listitem [ref=e195]:
              - link "Shadow Dom 3" [ref=e196]:
                - /url: /tags/shadow-dom/
                - text: Shadow Dom
                - generic [ref=e197]: "3"
            - listitem [ref=e198]:
              - link "Storage 3" [ref=e199]:
                - /url: /tags/storage/
                - text: Storage
                - generic [ref=e200]: "3"
            - listitem [ref=e201]:
              - link "Synchronization 12" [ref=e202]:
                - /url: /tags/synchronization/
                - text: Synchronization
                - generic [ref=e203]: "12"
            - listitem [ref=e204]:
              - link "Table 1" [ref=e205]:
                - /url: /tags/table/
                - text: Table
                - generic [ref=e206]: "1"
            - listitem [ref=e207]:
              - link "WebDriver 2" [ref=e208]:
                - /url: /tags/webdriver/
                - text: WebDriver
                - generic [ref=e209]: "2"
        - generic [ref=e210]:
          - paragraph [ref=e211]: Categories
          - list [ref=e212]:
            - listitem [ref=e213]:
              - link "Advanced 11" [ref=e214]:
                - /url: /categories/advanced/
                - text: Advanced
                - generic [ref=e215]: "11"
            - listitem [ref=e216]:
              - link "Basics 22" [ref=e217]:
                - /url: /categories/basics/
                - text: Basics
                - generic [ref=e218]: "22"
            - listitem [ref=e219]:
              - link "Challenges 12" [ref=e220]:
                - /url: /categories/challenges/
                - text: Challenges
                - generic [ref=e221]: "12"
            - listitem [ref=e222]:
              - link "Intermediate 17" [ref=e223]:
                - /url: /categories/intermediate/
                - text: Intermediate
                - generic [ref=e224]: "17"
            - listitem [ref=e225]:
              - link "Micro App 24" [ref=e226]:
                - /url: /categories/micro-app/
                - text: Micro App
                - generic [ref=e227]: "24"
            - listitem [ref=e228]:
              - link "Reference 6" [ref=e229]:
                - /url: /categories/reference/
                - text: Reference
                - generic [ref=e230]: "6"
      - main [ref=e231]:
        - navigation "breadcrumb" [ref=e232]:
          - list [ref=e233]:
            - listitem [ref=e234]:
              - link "Apps" [ref=e235]:
                - /url: /apps/
            - listitem [ref=e236]:
              - text: /
              - link "Simple Calculator API" [ref=e237]:
                - /url: /apps/calculator-api/
            - listitem [ref=e238]: / Form UI
        - generic [ref=e239]:
          - heading "Server Side Calculator Using API" [level=1] [ref=e240]
          - generic [ref=e241]:
            - generic [ref=e242]:
              - paragraph [ref=e243]: "Tags:"
              - list [ref=e244]:
                - listitem [ref=e245]:
                  - link "Exploratory Testing" [ref=e246]:
                    - /url: https://testpages.eviltester.com/tags/exploratory-testing/
                - listitem [ref=e247]:
                  - link "Interaction" [ref=e248]:
                    - /url: https://testpages.eviltester.com/tags/interaction/
                - listitem [ref=e249]:
                  - link "JavaScript" [ref=e250]:
                    - /url: https://testpages.eviltester.com/tags/javascript/
                - listitem [ref=e251]:
                  - link "API" [ref=e252]:
                    - /url: https://testpages.eviltester.com/tags/api/
            - generic [ref=e253]:
              - paragraph [ref=e254]: "Categories:"
              - list [ref=e255]:
                - listitem [ref=e256]:
                  - link "Micro App" [ref=e257]:
                    - /url: https://testpages.eviltester.com/categories/micro-app/
          - paragraph [ref=e259]: When you submit the calculation the request is sent to the calculate api and the result is returned to this web page and rendered as the answer.
          - separator [ref=e260]
          - generic [ref=e261]:
            - generic [ref=e263]:
              - textbox [ref=e264]: "5"
              - combobox [ref=e265]:
                - option "plus" [selected]
                - option "times"
                - option "minus"
                - option "divide"
              - textbox [ref=e266]
            - button "Calculate" [ref=e268] [cursor=pointer]
            - paragraph [ref=e270]: "Answer : 5"
    - contentinfo [ref=e271]:
      - generic [ref=e272]:
        - paragraph [ref=e273]:
          - text: Help keep this site free by joining our
          - link "Patreon Membership site" [ref=e274]:
            - /url: https://patreon.com/eviltester
          - text: . Membership costs as little as $1 a month and includes access to exclusive
          - link "e-books and online training courses" [ref=e275]:
            - /url: https://www.testerhq.com/
          - text: .
        - paragraph [ref=e276]:
          - text: If you'd like to see your advertising message here or learn about corporate sponsorship then
          - link "Contact Us" [ref=e277]:
            - /url: https://linkedin.com/in/eviltester
          - text: .
      - generic [ref=e279]:
        - list [ref=e281]:
          - listitem "Twitter" [ref=e282]:
            - link "Twitter" [ref=e283]:
              - /url: https://twitter.com/eviltester
              - generic [ref=e284]: 
          - listitem "LinkedIn" [ref=e285]:
            - link "LinkedIn" [ref=e286]:
              - /url: https://linkedin.com/in/eviltester
              - generic [ref=e287]: 
        - list [ref=e289]:
          - listitem "GitHub" [ref=e290]:
            - link "GitHub" [ref=e291]:
              - /url: https://github.com/eviltester
              - generic [ref=e292]: 
        - generic [ref=e293]:
          - generic [ref=e294]: © 2025–2026 Compendium Developments Ltd
          - link "Privacy Policy" [ref=e296]:
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