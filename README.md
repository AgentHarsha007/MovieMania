# 🎬 MoviePulse

MoviePulse is a movie discovery and rating web application built with Node.js and Express. It allows users to register, sign in, browse a large movie catalog, view detailed information about a selected title, and rate movies based on their personal experience.

This project is designed as a lightweight, full-stack demonstration app using static files and JSON-based persistence for users and ratings.

## ✨ Features

- User registration and login
- Movie browsing interface with poster-based movie cards
- Detailed movie information page
- IMDb-style metadata such as genre, cast, director, writers, and release year
- Personalized movie rating system
- User-specific rating storage in JSON files
- Genre-based recommendation suggestions
- Clean front-end experience using HTML, CSS, and JavaScript

## 🛠️ Tech Stack

- Node.js
- Express.js
- EJS Templates
- JavaScript
- HTML & CSS
- JSON file storage

## 🧩 Project Structure

```text
CS-Project/
├── database/
│   ├── user_data.json
│   └── <user>_rating.json
├── movie_img/
│   └── movie posters
├── python-files/
│   ├── extract.py
│   └── extractimages.py
├── views/
│   ├── beast.ejs
│   ├── main.ejs
│   ├── beastmind.js
│   ├── beaststyle.css
│   ├── main1.css
│   └── main2.js
├── .env
├── .gitignore
├── Register.html
├── alpha.html
├── current_movie.json
├── current_user.json
├── javascript.js
├── package.json
├── search.css
├── search.html
├── server.js
├── top100_k.json
├── top100_m.json
├── top100_n.json
├── output.json
├── hello.json
├── README.md
└── package-lock.json
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the application

```bash
node server.js
```

Or use the development script:

```bash
npm run devStart
```

### 3. Open the app in your browser

```text
http://localhost:4000
```

## 📁 Key Files

- `server.js` — main Express server and route handling
- `search.html` — login landing page
- `Register.html` — registration form
- `views/main.ejs` — main user dashboard
- `views/beast.ejs` — movie details and rating page
- `database/user_data.json` — registered users
- `top100_k.json` — movie metadata used across the app

## 🔐 How It Works

1. A user registers with their name, date of birth, email, and password.
2. The app stores the user data in `database/user_data.json`.
3. The user logs in with email and password.
4. The system loads the user dashboard and movie catalog.
5. When a movie is selected, the details page shows relevant metadata and allows rating.
6. Each user's movie ratings are saved in a separate JSON file such as `database/<user>_rating.json`.

## 📊 Data Model

The app stores the following kinds of data:

- User information: `name`, `date_of_birth`, `email`, `password`
- Movie ratings: `movie_name`, `rating`, `genre`
- Current user and current movie values used to manage active session state

## ⚠️ Notes

- This is a learning/demo project rather than a production-ready application.
- Data is stored in local JSON files instead of a database such as MongoDB or MySQL.
- The app is best suited for academic and personal project use.

## 📜 License

This project is licensed under the ISC License.

## 🙌 Project Purpose

MoviePulse demonstrates how to build a complete web application with:

- backend routing
- UI rendering with templates
- front-end interactivity
- JSON-based persistence
- data-driven movie browsing

If you are preparing to push this project to GitHub, this README is structured to look clean and professional in a repository.
