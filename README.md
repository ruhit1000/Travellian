# 🌍 Travellian | Premium Travel & Tour Platform

**Travellian** is a high-performance, modern travel booking web application designed for discovering global city tours. Built with a focus on **Fluid UX**, it features custom-engineered animations and a mobile-first responsive architecture.

---

## 🚀 Key Features

* **Interactive Trip Planner:** Dynamic tour cards featuring a "Sliding Door" reveal animation on desktop and a static, readable layout for touch devices.
* **Auto-Scrolling Blog & Gallery:** A custom-built, interval-based carousel with smooth transitions, `useRef` scroll control, and manual navigation overrides.
* **Tactile UI Elements:** Buttons with realistic "click" scaling, hover-lifts, and sliding icon transitions.
* **Smart Modal System:** Independent testimonial modals built with React `useRef` to handle unique data instances and "click-outside-to-close" functionality.
* **Optimized Performance:** Clean JSON-driven data architecture and efficient state management to prevent memory leaks in intervals.

---

## 🛠️ Tech Stack

* **Frontend:** [React.js](https://reactjs.org/) (Hooks, Refs, Context)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Custom utilities, Group-hover animations, Responsive design)
* **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
* **Build Tool:** Vite

---

## 📦 Installation & Setup

To run Travellian locally, follow these steps:

1.  **Clone the repository:**
	```bash
	git clone https://github.com/your-username/travellian.git
	```

2.  **Navigate to the project folder:**
	```bash
	cd travellian
	```

3.  **Install dependencies:**
	```bash
	npm install
	```

4.  **Start the development server:**
	```bash
	npm run dev
	```

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Blog/           # Auto-scrolling carousel logic
│   ├── GuidedTours/    # Sliding-reveal destination cards
│   ├── Reviews/        # Testimonial cards with modal portals
│   └── Shared/         # Reusable buttons and navigation components
├── data/               # Verified JSON data for tours and blogs
└── App.jsx             # Main application entry
```

---

## 🎨 UI Highlights

* **Premium Hover Effects:** Image scaling and container lifting for a luxurious agency feel.
* **Touch Compatibility:** Hybrid interaction logic that switches between `hover` for mouse users and `click` for iPad/Tablet users.
* **Typography:** Elegant use of `Playfair Display` for headings and `Rubik` for body text to ensure maximum readability.

---

## 👨‍💻 Author

**Ruhit**
* Student at **Comilla University**
* Full-Stack Web Development Enthusiast
* [GitHub](https://github.com/your-profile) | [LinkedIn](https://linkedin.com/in/your-profile)

---
