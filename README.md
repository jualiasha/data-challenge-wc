# 🚀 Lit Element Project

## 📌 Overview
This project is built using **Lit** to create lightweight and efficient Web Components. It includes:
- **Button** (`<data-button>`) with different variants and themes.
- **Input** (`<data-input>`) for manual input.
- **Number Input** (`<data-number-input>`) for controlled number selection.
- **Slider** (`<data-slider>`) with a range selector.


## 📂 Project Structure
```
📦 src
 ┣ 📂 components
 ┃ ┣ 📜 button
 ┃ ┣ 📜 input
 ┃ ┣ 📜 slider
 ┃ ┗ 📜 number-input
 ┣ 📜 index.ts
 ┣ 📜 styles.css
 ┗ 📜 tsconfig.json
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Development Server
```sh
npm run dev
```


## 🎨 Components Breakdown
### **🔹 Custom Button (`<data-button>`)**
A reusable button component with multiple variations.
#### Props:
| Prop     | Type    | Description |
|----------|--------|-------------|
| `size`   | `small` \| `medium` | Sets the button size |
| `variant` | `contained` \| `outlined` | Defines button styling |
| `theme`  | `primary` \| `secondary` | Sets button color |
| `disabled` | `boolean` | Disables the button when `true` |

✅ **Usage**:
```html
<data-button size="medium" variant="contained" theme="primary">
  Click Me
</data-button>
```

### **🔹 Number Input (`<data-number-input>`)**
A numeric input field allowing users to manually enter or adjust numbers with buttons.
#### Props:
| Prop     | Type    | Description |
|----------|--------|-------------|
| `value`  | `number` | Current value |
| `range`  | `[number, number]` | Defines min-max range |
| `disabled` | `boolean` | Disables input when `true` |

✅ **Usage**:
```html
<number-input value="50" range="[0,100]"></number-input>
```

### **🔹 Custom Slider (`<data-slider>`)**
A slider component for selecting a numeric value within a range.
#### Props:
| Prop     | Type    | Description |
|----------|--------|-------------|
| `value`  | `number` | Current slider value |
| `range`  | `[number, number]` | Defines min-max range |

✅ **Usage**:
```html
<data-slider value="50" range="[0,100]"></data-slider>
```
