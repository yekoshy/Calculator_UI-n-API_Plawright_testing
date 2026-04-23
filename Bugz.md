# 🐛 Calculator App - Bug Report Summary

**Generated:** April 23, 2026  
**Test Framework:** Playwright  
**Target App:** [Server-Side Calculator Using API](https://testpages.eviltester.com/apps/calculator-api/form-calculator/)
**App API:** [Simple Calculator API - Swagger UI](https://testpages.eviltester.com/apps/calculator-api/swagger/) 

---

## 📊 Executive Summary

| Metric | Count |
|--------|-------|
| **Total Tests Run** | 154 |
| **Tests Passed** | 128 (83%) |
| **Tests Failed** | 26 (17%) |
| **Unique Bugs Found** | 4 |
| **Severity Levels** | Medium (3), Low (1) |

---

## 🪲 Bug Reports

### Bug #1: Division by Zero - Incorrect Error Handling
**Testcase ID:** NF-01  
**Severity:** Medium  

**Description:**
The calculator fails to properly handle division by zero operations. The app returns inconsistent error messages and HTTP status codes.

**Expected Behavior:**
- **UI:** Display `∞` (infinity symbol)
- **API:** Return HTTP 200 with response `{ "type": "VALUE", "value": "∞" }`

**Actual Behavior:**
- **UI:** Displays "Error: Division by zero" 
- **API:** Returns HTTP 400 Bad Request instead of 200

---

### Bug #2: Missing 1st, 2nd or both Operands - No Input Validation
**Testcase ID:** NF-02, NF-03, NF-04 
**Severity:** Medium  

**Description:**
The calculator allows form submission with empty first, second or both operand without proper validation or error handling.

**Expected Behavior:**
- **UI:** Display "Empty input" error message
- **API:** Return HTTP 400 with response `{ "type": "INPUT_ERROR", "value": "Empty input" }`

**Actual Behavior:**
- Form accepts empty values without validation
- API returns HTTP 200 instead of proper error response

---

### Bug #3: Special Characters Input - Improper Validation
**Testcase ID:** NF-06  
**Severity:** Medium  

**Description:**
The calculator does not properly sanitize or reject special character inputs (`!@#`, `$%%`, etc.).

**Expected Behavior:**
- **UI:** Display "Unknown token: !@#$%%" error message
- **API:** Return HTTP 400 with response `{ "type": "INPUT_ERROR", "value": "Unknown token: !@#$%%" }`

**Actual Behavior:**
- Special characters are not properly handled
- Validation fails or produces incorrect error messages

---

### Bug #4: Floating-Point Precision Loss in Decimal Arithmetic
**Testcase ID:** BV-02  
**Severity:** LOW  

**Description:**
High-precision decimal operations produce inaccurate results due to floating-point rounding errors.

**Expected Behavior:**
```
0.00000000001 + 0.00000000002 = 0.00000000003
```

**Actual Behavior:**
```
Result = 0 
```

**Root Cause:** IEEE 754 floating-point arithmetic limitations  
**Workaround:** Implement decimal arithmetic library or BigDecimal for high-precision operations

---

## ✅ Passing Test Cases

The following test cases **pass successfully** across all test types and browsers:

| Test ID | Description | Status |
|---------|-------------|--------|
| PF-01 | Addition of positive integers | ✅ PASS |
| PF-02 | Addition of negative integers | ✅ PASS |
| PF-03 | Subtraction resulting in positive | ✅ PASS |
| PF-04 | Subtraction resulting in negative | ✅ PASS |
| PF-05 | Multiplication of positive numbers | ✅ PASS |
| PF-06 | Multiplication with negative numbers | ✅ PASS |
| PF-07 | Multiplication by Zero | ✅ PASS |
| PF-08 | Division with exact integer result | ✅ PASS |
| PF-09 | Division resulting in decimal | ✅ PASS |
| PF-10 | Floating-point (Decimal) arithmetic | ✅ PASS |
| BV-01 | Very Large Numbers | ✅ PASS |
| BV-03 | Max length input validation | ✅ PASS |
| SEC-01 | Cross-Site Scripting (XSS) Injection | ✅ PASS |
| SEC-02 | SQL Injection Attempt | ✅ PASS |
| NF-05 | Alphabetical characters input | ✅ PASS |
| NF-07 | Whitespace-only input | ✅ PASS |

---

## 🔧 Recommended Fixes

### For Input Validation (Bugs #2-3)
Implement client-side and server-side validation:
```javascript
// Validate operands are not empty
if (!operand1 || operand1.trim() === '') {
  return { type: "INPUT_ERROR", value: "Empty input" };
}

if (!operand2 || operand2.trim() === '') {
  return { type: "INPUT_ERROR", value: "Empty input" };
}

// Validate operands contain only valid characters
const validNumberRegex = /^-?\d+(\.\d+)?$/;
if (!validNumberRegex.test(operand1)) {
  return { type: "INPUT_ERROR", value: `Unknown token: ${operand1}` };
}

if (!validNumberRegex.test(operand2)) {
  return { type: "INPUT_ERROR", value: `Unknown token: ${operand2}` };
}
```

### For Division by Zero (Bug #1)
Handle division by zero gracefully:
```javascript
if (operator === 'divide' && right === 0) {
  return { type: "VALUE", value: "∞" };
}
```

### For Floating-Point Precision (Bug #4)
Consider using a decimal arithmetic library:
```javascript
const Decimal = require('decimal.js');
const num1 = new Decimal(operand1);
const num2 = new Decimal(operand2);
```
