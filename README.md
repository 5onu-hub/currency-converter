# 💱 Currency Converter

A simple and responsive **Currency Converter** built using **React.js**.
It allows users to convert an amount from one currency to another using real-time exchange rates fetched from a currency API.

## 🚀 Features

* 💱 Convert currencies easily
* 🔄 Swap From and To currencies
* 🌍 Supports multiple currencies
* 📡 Fetches exchange rates from an API
* ⚡ Fast and responsive interface
* 🎨 Clean and simple UI
* ⚛️ Built with React Hooks
* 🧩 Custom `useCurrencyInfo` hook

## 🛠️ Tech Stack

* **React.js**
* **JavaScript**
* **CSS**
* **Vite**
* **Currency API**

## 📂 Project Structure

```text
currency-converter/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Inputs.jsx
│   │   └── input.css
│   │
│   ├── hooks/
│   │   └── useCurrencyInfo.js
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## 🔧 Installation

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/currency-converter.git
```

Move into the project directory:

```bash
cd currency-converter
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will run locally on the Vite development server.

## 💡 How It Works

The application uses a custom React hook called `useCurrencyInfo` to fetch currency exchange rates from the API.

The selected **From Currency** is used to fetch its exchange rates.

For example:

```js
currencyInfo[from]?.[to]
```

gets the exchange rate between the selected currencies.

The converted amount is calculated using:

```js
amount * currencyInfo[from]?.[to]
```

## 🔄 Currency Swap

The swap button exchanges the selected currencies.

For example:

```text
USD → INR
```

becomes:

```text
INR → USD
```



## 📚 Learning Outcomes

While building this project, I practiced:

* React `useState`
* React `useEffect`
* Custom Hooks
* Props
* Controlled Components
* Event Handling
* API Fetching
* Optional Chaining
* Conditional Rendering
* Component Reusability

## 👨‍💻 Author

**Sonu Kumar**

GitHub: `https://github.com/5onu-hub`

---

⭐ If you found this project useful, feel free to give it a star!
