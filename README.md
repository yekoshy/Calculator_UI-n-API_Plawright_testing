# 🎭 Playwright Testing: Server-Side Calculator API

Welcome to the Playwright testing suite for the [**Server-Side Calculator API**](https://testpages.eviltester.com/apps/calculator-api/form-calculator/) micro app! This repository demonstrates how to set up Playwright, record/write test scripts for both UI and API testing, run them with HTML reporting, debug using trace viewers, and scale your tests from simple recorded scripts to data-driven, parallel execution across multiple browsers.

<a id="home"></a>
## 🔗 Jump to important sections
* [Project Structure & Files Explanation](#project-structure)
* [Step 1: Project Setup](#step-1)
* [Step 2: Record a Test Session (Codegen)](#step-2-codegen)
* [Step 2.1: Writing API Test Scripts](#step-2-1-api)
* [Step 2.2: Scaling to Data-Driven & Parallel Execution](#step-2-2)
* [Step 3: Running Tests & Generating Reports](#step-3)
* [Step 4: Debugging with Traces (Video & Playback)](#step-4)
* [Step 5: Git Commands & Workflow](#step-5)

<a id="project-structure"></a>
## 📂 Project Structure & Files Explanation

Here is an overview of the files included in this repository and what they do:

### Core Files
* **`package.json` & `package-lock.json`**: Standard Node.js configuration files managing project dependencies (like Playwright).
* **`node_modules/`**: Directory containing all installed NPM packages.

### Test Data & Documentation
* **`AIGeneratedTestcases.md`**: Comprehensive markdown documentation containing AI-generated test cases for the calculator app, including UI, functional, boundary, and security test scenarios.
* **`testcases.json`**: A structured JSON file containing test data (number inputs, operations, and expected results). Used in versions 2 and 3 of our tests to loop through various scenarios dynamically.

### Test Scripts - UI Testing
* **`calc_test.spec.ts` (v1)**: The simple, basic recorded steps for UI testing generated directly from Playwright's Codegen tool. Tests basic calculator operations through the web interface.
* **`calc_v2_test.spec.ts` (v2)**: Advanced UI test script using the recorded steps to dynamically loop through all test cases provided in `testcases.json`.

### Test Scripts - API Testing
* **`calc-api.spec.ts`**: Basic API test for the calculator backend endpoint. Tests the API directly without UI interaction.
* **`calc_v2_api.spec.ts` (v2)**: Data-driven API test script that loops through `testcases.json` to test various calculation scenarios via HTTP **Post** request.
* **`calc_v3-api.spec.ts` (v3)**: Data-driven API test script that loops through `testcases.json` to test various calculation scenarios via HTTP **Get** request.

### Configuration
* **`config/playwright.config.ts`**: Shared Playwright configuration for cross-browser execution, device emulation, retries, parallel workers, and reporting.

### Reports & Results
* **`test-results/`**: Contains trace files (videos, DOM snapshots, network requests) for debugging test execution.
* [**`playwright-report_v2/index.html`**](https://yekoshy.github.io/Calculator_UI-n-API_Plawright_testing/playwright-report_v2/): HTML test report generated from the v2 UI test script (`calc_v2_test.spec.ts`) for all environments.
* [**`playwright-API-report_v2/index.html`**](https://yekoshy.github.io/Calculator_UI-n-API_Plawright_testing/playwright-API-report_v2/): HTML test report generated from the v2 API Post request- test script (`calc_v2_api.spec.ts`).
* [**`playwright-API-report_v3/index.html`**](https://yekoshy.github.io/Calculator_UI-n-API_Plawright_testing/playwright-API-report_v3/): HTML test report generated from the v3  API Gest request - test script (`calc_v3_api.spec.ts`).

---
[back](#home)
<a id="step-1"></a>
## 🚀 Step 1: Project Setup

Before you begin, make sure you have [Node.js](https://nodejs.org/) installed. Run the following commands in your terminal to initialize the project and install Playwright.

```bash
# Initialize a new Node.js project
npm init -y

# Install Playwright Test runner as a dev dependency
npm install -D @playwright/test

# Install supported browsers (Chromium, Firefox, WebKit)
npx playwright install

# Install Node.js type definitions for TypeScript support in Playwright
npm install --save-dev @types/node

# Install cross-env so environment variables work across Windows/macOS/Linux
npm install -D cross-env
```

---
[back](#home)
<a id="step-2-codegen"></a>
## 🎥 Step 2: Record a Test Session (Codegen)

Playwright can generate test code for you by recording your browser actions.

### For UI Testing
Run the following command, replacing `<urllink>` with the actual URL of the [Calculator micro app](https://testpages.eviltester.com/apps/calculator-api/form-calculator/):

```bash
npx playwright codegen <urllink> -o calc_test.spec.ts
```

* **`-o <filename>`**: Tells Playwright to output the generated code directly into a specific file.

---
[back](#home)
<a id="step-2-1-api"></a>
## 📝 Step 2.1: Writing API Test Scripts

While Playwright Codegen works great for UI testing, API scripts are typically written manually since you're making HTTP requests directly to the backend. Here are the approaches for creating API tests:

### Basic API Test
You'll need to identify the API endpoint,request type and parameters, then write the test manually:
####API Details for Calculator Project:
**API endpoint**: [Calculator micro app API](https://testpages.eviltester.com/apps/api/calculator/calculate)

**Request Types:**
V2 (calc_v2_api.spec.ts): POST
V3 (calc_v3-api.spec.ts): GET

**Parameters:**
Operation: The mathematical operation (plus, minus, times, divide)
left: The first operand/number
right: The second operand/number


For API testing, you can use Playwright's built-in `request` fixture to make HTTP calls directly:

####Post Request 
```typescript
const response = await request.post('https://testpages.eviltester.com/apps/calculator-api/calculate', {
    data: {
        operation: 'plus',
        left: 5,
        right: 3
    }
  });
```
####Get Request 
```typescript
const response = await request.get('https://testpages.eviltester.com/apps/api/calculator/calculate', {
    headers: {
      'accept': 'application/json'
    },
    params: {
      operation: 'plus',
      left: 5,
      right: 3
    }
}
```

### Key Differences: POST vs GET Requests

| Method | Usage | Parameters |
| :--- | :--- | :--- |
| **POST** | Send data in request body | Use `data` property for form-encoded or JSON payloads |
| **GET** | Send data via URL query string | Use `params` property for URL parameters |

### Testing HTTP Response
When writing API tests, always verify:
1. **Response Status**: Is the HTTP response code 200 (OK)?
2. **Response Body**: Does the JSON contain the expected values?
3. **Data Types**: Are the returned values of the correct type?

```typescript

// Check status
expect(response.ok()).toBeTruthy();  // Status 2xx
expect(response.status()).toBe(200);  // Exact status

// Check response body
const json = await response.json();
expect(json.answer).toBe(expectedValue);
expect(json.status).toBe('success');
```

---
[back](#home)
<a id="step-2-2"></a>
## 🤖 Step 2.2: Scaling to Data-Driven & Parallel Execution

Once you have your basic recorded steps (from Step 2), you can scale your tests to run multiple scenarios automatically instead of writing a new test for every single scenario.

### Version 2: Data-Driven Testing (DDT)
Instead of hardcoding the test data, we created a `testcases.json` file. We can then wrap our recorded Playwright steps inside a standard JavaScript `for` loop. This allows Playwright to run the exact same steps over and over, replacing the input with data from the JSON file for each iteration.

**For UI/API Testing:**
```typescript

test.describe('Calculator UI Tests', () => {
  
  for (const data of testData) {
    //Your code
  }
});
```



### Config file: Parallel, Cross-Browser, and Device Execution 
Running a loop for many test cases one by one can be slow. By default, Playwright runs tests in a single file sequentially (one after the other), but you can speed it up by running the loop iterations simultaneously so the same data-driven scenario executes across different browsers and devices while Playwright handles retries for flaky failures.

The configuration in `config/playwright.config.ts` controls:

* **Browsers**: which browsers to launch (Chromium, Firefox, WebKit).
* **Devices**: Mobile or Desktop device emulation profiles.
* **Retries**: how many times to retry failed tests automatically.
* **Workers**: how many tests can run in parallel at the same time.

*Note: **API tests** are not browser-specific.*


---
[back](#home)
<a id="step-3"></a>
## 🏃 Step 3: Running Tests & Generating Reports

### Basic Execution (UI Tests)
To run a UI test in headless mode (background):
```bash
npx playwright test calc_test.spec.ts
```

### Basic Execution (API Tests)
To run an API test:
```bash
npx playwright test calc-api.spec.ts
```

### Visual Execution (Headed Mode)
To actually see the browser opening and clicking through the steps:
```bash
npx playwright test calc_test.spec.ts --headed
```

### Config Execution
Run the test using the shared Playwright config file so it applies the defined browsers, devices, retries, and workers:
```bash
npx playwright test calc_v2_test.spec.ts --config=config/playwright.config.ts
```

### Generating an HTML Report
To create a detailed HTML report of your test run:
```bash
npx playwright test calc_v2_test.spec.ts --reporter=html
```

### Custom Report Folders (For V2 and V3)
By default, reports go to `playwright-report/`. If you want to run your v2 or v3 scripts and save their reports in separate folders, use the environment variable command (PowerShell example):

**For UI Tests V2:**
```powershell
cross-env PLAYWRIGHT_HTML_OUTPUT_DIR=playwright-report_v2 npx playwright test calc_v2_test.spec.ts --reporter=html --config=config/playwright.config.ts
```

**For API Tests V2:**
```powershell
cross-env PLAYWRIGHT_HTML_OUTPUT_DIR=playwright-API-report_v2 npx playwright test calc_v2_api.spec.ts --reporter=html
```

**For API Tests V3:**
```powershell
cross-env PLAYWRIGHT_HTML_OUTPUT_DIR=playwright-API-report_v3 npx playwright test calc_v3-api.spec.ts --reporter=html
```

### Using NPM Scripts (Recommended)
The project includes predefined scripts in `package.json` for convenience:

```bash
# Run UI tests (V2 with data-driven scenarios)
npm run test

# Run API tests (V2 with data-driven scenarios)
npm run test-api

# Run API tests (V3 with parallel execution and retries)
npm run test-api-v3
```

### Viewing the Report
To open the standard default report:
```bash
npx playwright show-report
```

To open a custom folder report (e.g., API v2):
```bash
npx playwright show-report playwright-API-report_v2
```

To open a custom folder report (e.g., API v3):
```bash
npx playwright show-report playwright-API-report_v3
```

---
[back](#home)
<a id="step-4"></a>
## 🐛 Step 4: Debugging with Traces (Video & Playback)

When a test fails (or you want to verify a specific test case), you can record a "trace". A trace captures a video, network requests, console logs, and a step-by-step DOM snapshot.

### Generate a Trace
Run your test with the `--trace on` flag:
```bash
npx playwright test calc_test.spec.ts --trace on
```
*This will generate a zip file inside the `test-results/` folder.*

### View the Trace
There are two ways to view the captured trace:

**Option 1: View Locally via Command Line**
```bash
npx playwright show-trace test-results/calc_test-test/trace.zip
```

**Option 2: View Online in the Browser**
1. Open [https://trace.playwright.dev/](https://trace.playwright.dev/)
2. Drag and drop your `trace.zip` file directly into the webpage.

---
[back](#home)
<a id="step-5"></a>
## 🔄 Step 5: Git Commands & Workflow

This section contains the commands used to initialize the local project as a Git repository, connect it to GitHub, and push code updates.

### 1. First-Time Setup

**Create New Repository on Github**
1. Click "New Repository" on GitHub  
2. Create a new repository with an appropriate name (e.g., `Calculator_UI-n-API_Playwright_testing`)
3. This creates an empty "remote" folder on GitHub's servers.

**Run these commands in your terminal one by one. Make sure you are inside your project's root folder:**

```bash
# Initialize a new local Git repository
git init

# Add all files to the staging area
git add .

# Create your first commit
git commit -m "Initial commit: Calculator UI and API tests with Playwright"

# Add the remote repository URL (replace USERNAME and REPO_NAME)
git remote add origin https://github.com/USERNAME/Calculator_UI-n-API_Playwright_testing.git

# Push your code to the remote repository on the main branch
git branch -M main
git push -u origin main
```

### 2. Subsequent Updates

After your initial setup, whenever you make changes and want to push them to GitHub:

```bash
# See which files have changed
git status

# Stage all changes
git add .

# Create a commit with a descriptive message
git commit -m "Add new test cases for boundary values"

# Push to GitHub
git push origin main
```

### 3. Useful Git Commands

```bash
# View commit history
git log

# View detailed changes in files
git diff

# Undo unstaged changes in a specific file
git checkout -- <filename>

# Undo the last commit (but keep changes)
git reset --soft HEAD~1

# View remote repository URL
git remote -v
```

---
[back](#home)

## 📚 Additional Resources

* [Playwright Official Documentation](https://playwright.dev/)
* [Playwright API Testing Guide](https://playwright.dev/docs/api-testing)
* [Server-Side Calculator API](https://testpages.eviltester.com/apps/calculator-api/form-calculator/)
* [AI-Generated Test Cases](./AIGeneratedTestcases.md)
* [Test Data (testcases.json)](./testcases.json)

---

**Happy Testing! 🚀**
