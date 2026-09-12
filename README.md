
# 🧱 Dev Stack Builder                       

A modern and responsive **Dev Stack Builder** website built with React.js. It allows developers to explore popular web development technologies and create their own technology stack by adding and removing technologies.

The project focuses on a clean UI, responsive design, reusable React components, JSON-based data, and interactive stack management.



## ✨ Project Overview

**Dev Stack Builder** is a technology discovery and stack-building application where users can explore different development technologies such as React, Node.js, PostgreSQL, Docker, TypeScript, and more.

Users can add technologies to their personal stack, remove individual technologies, or clear the complete stack. Toast notifications provide feedback for important actions.

The project is fully responsive and works across **mobile, tablet, and desktop devices**.

---

## 🛠️ Technologies Used

* ⚛️ **React.js**
* ⚡ **Vite**
* 🟨 **JavaScript (ES6+)**
* 🎨 **Tailwind CSS**
* 🔔 **React-Toastify**
* 📄 **JSON**
* 🌐 **HTML5**
* 🎨 **CSS3**
* 📦 **npm**

---

## 🌟 Key Features

### 1. 🧰 Build Your Own Technology Stack

Users can add technologies to their personal **Your Stack** section.

* Add technologies with one click
* Prevent duplicate technologies
* Remove individual technologies
* Remove all technologies at once
* Display the number of selected technologies

### 2. 🔎 Explore Development Technologies

The application loads technology information from a separate JSON file.

Each technology contains:

* Technology name
* Category
* Description
* Technology icon
* Rating
* Difficulty level
* Badge

This makes it easy to maintain and update the technology data without changing the React components.

### 3. 🔔 Interactive Toast Notifications

**React-Toastify** is used to provide user-friendly notifications.

Toast messages appear when users:

* Add a technology
* Try to add a duplicate technology
* Remove a technology
* Remove all technologies

---

## 📱 Responsive Design

The website is designed to provide a good experience on different screen sizes.

* 💻 Desktop
* 📱 Mobile
* 📟 Tablet

The navigation bar, technology cards, stack section, hero section, and footer adjust according to the screen size.

---

## 📂 Project Structure

```text
devstack/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── TechnologyCard.tsx
│   │   ├── Technologies.tsx
│   │   ├── YourStack.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── technologies.json
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig*.json
```




```

The application will then be available through the local Vite development URL.

---

# 📚 React Questions & Answers

## 1. What is JSX, and why is it used in React?

**JSX** stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript.

React uses JSX because it makes UI code easier to read and allows us to combine JavaScript logic with the UI structure.

Example:

```jsx
const title = <h1>Dev Stack Builder</h1>;
```

---

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component. Props are read-only.

**State** is data managed inside a component. When state changes, React updates the UI.

For example:

```text
Props → Parent → Child

State → Component's own changing data
```

In this project, technology information is passed to technology card components using props, while the selected stack is managed using state.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` allows a React component to store and update data.

I used `useState` to manage the technologies selected by the user.

For example:

```jsx
const [stack, setStack] = useState([]);
```

When a user clicks **Add to Stack**, the selected technology is added to the `stack` state.

When the user removes a technology, the state is updated again.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component.

I used `useEffect` to load the technology data from the JSON file when the application starts.

For example:

```jsx
useEffect(() => {
  fetch("/technologies.json")
    .then(response => response.json())
    .then(data => setTechnologies(data));
}, []);
```

The empty dependency array `[]` means the effect runs when the component is loaded.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

It helps React understand which items were added, removed, or changed, so it can update the UI efficiently.

Example:

```jsx
technologies.map(technology => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))
```

Here, `technology.id` is used because every technology has a unique ID.

---

## 6. What is conditional rendering? Show one place you used it.

**Conditional rendering** means displaying different UI depending on a condition.

I used it in the **Your Stack** section.

If there are no selected technologies, an empty message is displayed:

```jsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  stack.map(item => (
    <StackItem key={item.id} technology={item} />
  ))
)}
```

So, the user sees an empty-state message when the stack has no technologies.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child using **props**.

For example:

```jsx
<TechnologyCard technology={technology} />
```

The child receives the data:

```jsx
const TechnologyCard = ({ technology }) => {
  return <h2>{technology.name}</h2>;
};
```

To send something back to the parent, the parent can pass a **function as a prop**.

Parent:

```jsx
<TechnologyCard
  technology={technology}
  onAdd={handleAdd}
/>
```

Child:

```jsx
<button onClick={() => onAdd(technology)}>
  Add to Stack
</button>
```

When the child calls `onAdd()`, the parent function runs and updates the parent's state.

---

# 🎯 Learning Outcomes

Through this project, I practiced:

* React component creation
* JSX
* Props
* State management
* `useState`
* `useEffect`
* Conditional rendering
* Rendering lists with `.map()`
* Unique React keys
* Passing data between components
* Loading JSON data
* Responsive UI development
* React-Toastify
* Git and GitHub

---

## 👨‍💻 Developer

**Md. Shafi Reza**

Built with ❤️ using React.js.

---

## 📄 License

This project was created for educational and learning purposes.
