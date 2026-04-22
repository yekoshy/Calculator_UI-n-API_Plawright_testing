# 🧪 Test Suite: Server Side Calculator API Micro App

**Target Application:** [Server Side Calculator Using API](https://testpages.eviltester.com/apps/calculator-api/form-calculator/)  
**App Description:** A form-based micro-app that takes two inputs and an arithmetic operation (`plus`, `minus`, `times`, `divide`), sends an API request to the backend, and renders the result on the webpage.

---

## 📋 Table of Contents
1. [UI & Accessibility Tests](#1-ui--accessibility-tests)
2. [Positive Functional Tests](#2-positive-functional-tests)
3.[Negative Functional Tests](#3-negative-functional-tests)
4. [Boundary & Extreme Value Tests](#4-boundary--extreme-value-tests)
5. [Security & API Resiliency Tests](#5-security--api-resiliency-tests)

---

## 1. 🖥️ UI & Accessibility Tests

| TC ID | Test Scenario | Steps to Execute | Expected Result |
| :--- | :--- | :--- | :--- |
| **UI-01** | Verify all UI elements are present | 1. Navigate to the app URL. | Page should display: Input 1, Operator Dropdown, Input 2, "Calculate" button, and an "Answer" section. |
| **UI-02** | Verify default state of the form | 1. Open the app. | Inputs should be empty. Operator should default to `plus`. Answer section should have no result. |
| **UI-03** | Verify operator dropdown values | 1. Click on the operator dropdown. | The options displayed must exactly be: `plus`, `minus`, `times`, `divide`. |
| **UI-04** | Verify keyboard accessibility (Tab Order) | 1. Click on the first input.<br>2. Press `Tab` repeatedly. | Focus should move logically: Input 1 -> Dropdown -> Input 2 -> Calculate Button. |
| **UI-05** | Verify button triggers on `Enter` key | 1. Fill Input 1 and Input 2.<br>2. Press the `Enter` key. | The form should submit and the result should be calculated. |

---

## 2. ✅ Positive Functional Tests
*Testing valid, expected mathematical operations.*

| TC ID | Test Scenario | Test Data | Steps to Execute | Expected Result |
| :--- | :--- | :--- | :--- | :--- |
| **PF-01** | Addition of positive integers | `5`, `plus`, `7` | 1. Enter inputs and select operator.<br>2. Click Calculate. | Answer : `12` |
| **PF-02** | Addition of negative integers | `-5`, `plus`, `-10` | 1. Enter inputs and select operator.<br>2. Click Calculate. | Answer : `-15` |
| **PF-03** | Subtraction resulting in positive | `15`, `minus`, `5` | 1. Enter inputs and select operator.<br>2. Click Calculate. | Answer : `10` |
| **PF-04** | Subtraction resulting in negative | `4`, `minus`, `10` | 1. Enter inputs and select operator.<br>2. Click Calculate. | Answer : `-6` |
| **PF-05** | Multiplication of positive numbers | `8`, `times`, `4` | 1. Enter inputs and select operator.<br>2. Click Calculate. | Answer : `32` |
| **PF-06** | Multiplication with negative numbers | `-5`, `times`, `4` | 1. Enter inputs and select operator.<br>2. Click Calculate. | Answer : `-20` |
| **PF-07** | Multiplication by Zero | `99`, `times`, `0` | 1. Enter inputs and select operator.<br>2. Click Calculate. | Answer : `0` |
| **PF-08** | Division with exact integer result | `20`, `divide`, `4` | 1. Enter inputs and select operator.<br>2. Click Calculate. | Answer : `5` |
| **PF-09** | Division resulting in decimal | `10`, `divide`, `4` | 1. Enter inputs and select operator.<br>2. Click Calculate. | Answer : `2.5` |
| **PF-10** | Floating-point (Decimal) arithmetic | `2.5`, `plus`, `1.2` | 1. Enter inputs and select operator.<br>2. Click Calculate. | Answer : `3.7` |

---

## 3. ❌ Negative Functional Tests
*Testing the application's error handling with invalid inputs.*

| TC ID | Test Scenario | Test Data | Steps to Execute | Expected Result |
| :--- | :--- | :--- | :--- | :--- |
| **NF-01** | Division by Zero | `5`, `divide`, `0` | 1. Enter inputs.<br>2. Click Calculate. | Handled gracefully. Should display `ERR`, `Infinity`, or an appropriate error message (Backend should not crash). |
| **NF-02** | Missing Operand 1 | `[Empty]`, `plus`, `5` | 1. Leave Input 1 empty.<br>2. Click Calculate. | Form validation error prevents submission OR server returns a readable error message. |
| **NF-03** | Missing Operand 2 | `5`, `plus`, `[Empty]` | 1. Leave Input 2 empty.<br>2. Click Calculate. | Form validation error prevents submission OR server returns a readable error message. |
| **NF-04** | Missing Both Operands | `[Empty]`, `plus`, `[Empty]` | 1. Leave both empty.<br>2. Click Calculate. | Should not calculate. Error message should be displayed. |
| **NF-05** | Alphabetical characters input | `abc`, `plus`, `5` | 1. Enter non-numeric text.<br>2. Click Calculate. | Input should be rejected (HTML5 validation) OR server returns a "Bad Request/Invalid Input" error. |
| **NF-06** | Special characters input | `!@#`, `plus`, `$%%` | 1. Enter special characters.<br>2. Click Calculate. | Input should be rejected OR server returns an error. |
| **NF-07** | Whitespace-only input | `   `, `plus`, `5` | 1. Enter spacebars.<br>2. Click Calculate. | Treated as empty/invalid. Error message expected. |

---

## 4. ⚠️ Boundary & Extreme Value Tests
*Testing the limits of the data types and API handling.*

| TC ID | Test Scenario | Test Data | Steps to Execute | Expected Result |
| :--- | :--- | :--- | :--- | :--- |
| **BV-01** | Very Large Numbers | `999999999999999`, `plus`, `1` | 1. Enter large numbers.<br>2. Click Calculate. | Should calculate successfully (possibly rendering in scientific notation) without integer overflow errors. |
| **BV-02** | Very Small / High Precision Decimals | `0.00000000001`, `plus`, `0.00000000002` | 1. Enter small floating values.<br>2. Click Calculate. | Should return `0.00000000003` (check for floating-point precision loss issues like `...00004`). |
| **BV-03** | Max length input validation | A string of 100+ numbers | 1. Paste long number.<br>2. Click Calculate. | Input field should either truncate the input or API should handle/reject cleanly without crashing. |

---

## 5. 🛡️ Security & API Resiliency Tests
*Checking how the server API and frontend respond to malicious/unexpected traffic.*

| TC ID | Test Scenario | Test Data | Steps to Execute | Expected Result |
| :--- | :--- | :--- | :--- | :--- |
| **SEC-01** | Cross-Site Scripting (XSS) Injection | `<script>alert(1)</script>`, `plus`, `5` | 1. Enter script tag in Input 1.<br>2. Click Calculate. | Application must sanitize input. No alert box should execute on the page. |
| **SEC-02** | SQL Injection Attempt | `' OR 1=1 --`, `plus`, `5` | 1. Enter SQL payload.<br>2. Click Calculate. | API should reject the input safely. Database should not throw raw SQL error traces. |
| **API-01** | Network Disconnection (Offline) | `2`, `plus`, `2` | 1. Enter inputs.<br>2. Disconnect internet.<br>3. Click Calculate. | App should show a frontend error indicating the API could not be reached. |
| **API-02** | Concurrent Requests (Double Click) | `5`, `plus`, `5` | 1. Enter inputs.<br>2. Rapidly double/triple-click "Calculate". | The button should disable upon first click to prevent redundant API calls, OR only the final result should elegantly display. |
| **API-03** | Intercept & Modify Operator | `5`, `[Intercept]`, `5` | 1. Enter inputs.<br>2. Use a tool like Burp Suite/Postman to change the operator to `exponent`. | The API should return a "400 Bad Request" or "Unsupported Operator" message. |

---
*Generated for the[Evil Tester API App Testing Challenges](https://testpages.eviltester.com).*