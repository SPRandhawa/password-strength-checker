# 🔐 Password Strength Checker

A lightweight JavaScript package to check password strength using basic cybersecurity rules.

---

## 🚀 Features

* ✔ Checks password length
* ✔ Detects uppercase letters
* ✔ Detects numbers
* ✔ Detects special characters
* ✔ Returns: **Weak / Medium / Strong**

---

## 📦 Installation

Install via npm:

```bash
npm install password-strength-checker-s
```

---

## 💻 Usage

```javascript
import checkPassword from "password-strength-checker-s";

console.log(checkPassword("abc"));        // Weak
console.log(checkPassword("abc123"));     // Medium
console.log(checkPassword("Abc@12345"));  // Strong
```

---

## 🧰 Alternative (Clone Repository)

If you want to use or modify the source code:

```bash
git clone https://github.com/SPRandhawa/password-strength-checker.git
cd password-strength-checker
```

---

## 📊 Strength Criteria

| Condition         | Check |
| ----------------- | ----- |
| Length ≥ 8        | ✔     |
| Uppercase letter  | ✔     |
| Number            | ✔     |
| Special character | ✔     |

---

## 📁 Project Structure

```
password-strength-checker/
 ├── index.js
 ├── package.json
 ├── README.md
```

---

## 📦 GitHub Package

This package is also available via GitHub Packages:

```bash
npm install @SPRandhawa/password-strength-checker
```

---

## 🛡️ Use Case

* Form validation
* User authentication systems
* Basic cybersecurity checks

---

## 👨‍💻 Author

**SPRandhawa**

---

## 📄 License

This project is licensed under the MIT License.

---
