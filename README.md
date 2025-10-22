# 💪 FitTrack — Fitness Tracker App

FitTrack is a modern fitness tracking web app built with **React** and **Tailwind CSS**.  
It allows users to **log workouts**, **track progress over time**, and **manage their fitness profile** in a simple and beautiful interface.

---

## Features

### Log Workouts
- Add new exercises with **name, sets, reps, and weight**.
- Automatically saves progress in **localStorage**.
- Displays a list of all exercises logged for the day.

### Progress Tracking
- Dynamic **line chart** showing workout trends using **Chart.js**.
- Tracks **total workouts**, **average reps**, and **total weight lifted**.
- Responsive layout that looks great on all devices.

### User Profile
- Users can add their **name**, **email**, **age**, and **profile photo**.
- Profile data is stored locally and shown after sign-in.

### Workout History
- Displays all previously logged exercises along with dates.
- Allows users to review their progress over time.

### Simple Navigation
- Fixed top navigation bar with dropdown menu.
- Links to Dashboard, Exercises, History, and Profile pages.

---

## 🛠️ Tech Stack

| Technology 
|-------------|
| **React (Vite)** | 
| **Tailwind CSS** |
| **Chart.js + React ChartJS 2** |
| **LocalStorage API** |
| **JavaScript (ES6)** |
| **Vite** |

---

## 📂 Folder Structure

```

fitness-tracker-app/
│
├── public/
│   └── logo.png
│
├── src/
│   ├── assets/           # Images & static files
│   ├── components/       # Reusable UI components
│   ├── pages/            # Dashboard, Exercises, History, Profile
│   ├── api/              # API helpers (if using external exercise data)
│   ├── App.jsx           # Main app layout and router
│   ├── main.jsx          # React entry point
│   ├── index.css         # Tailwind imports
│   └── styles.css        # Custom global styles
│
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.cjs    # PostCSS setup
├── package.json          # Dependencies and scripts
└── README.md             # You're reading this file

````

---

## Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Annabel-Ogango/fitness-tracker-app.git
cd fitness-tracker-app
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

Then open your browser and go to:

```
http://localhost:5173/
```

---

## 📸 Pages

### 🏠 Dashboard Page

Displays current workouts, progress chart, and workout summary.

### 🧍 Profile Page

Shows user profile form with name, email, age, and photo upload.

### 📊 History Page

Lists all previously logged exercises with timestamps.

---

## 🧑‍💻 Author

**Annabel Ogango**

---

Made using **React + Tailwind + Chart.js**

```
