# 🎬 MoviePulse

MoviePulse is a full-stack movie discovery and rating web application built with **Node.js, Express.js, EJS, HTML, CSS, and JavaScript**.

Users can register, log in, browse movies, search the catalogue, view movie details, rate movies, and receive genre-based recommendations.

---

## ✨ Features

* User registration and login
* Movie browsing and search
* Movie details with metadata
* Personal movie ratings
* Updating existing ratings
* Genre-based recommendations
* Dynamic movie-card generation
* EJS server-side rendering
* JSON-based local data storage

---

## 🏗️ Architecture

```text
Browser
   │
   ▼
Express Server
   │
   ├── HTML / EJS pages
   ├── Client-side JavaScript
   └── JSON movie/user data
```

The main flow is:

```text
search.html
    ↓
server.js
    ↓
main.ejs + main3.js
    ↓
Movie Selection
    ↓
beast.ejs
    ↓
Rating
```

---

## 📁 Project Structure

```text
MovieMania/
│
├── python-files/
├── views/
├── .gitignore
├── README.md
├── Register.html
├── alpha.html
├── javascript.js
├── package-lock.json
├── package.json
├── search.css
├── search.html
├── server.js
└── top100_k.json
```

---

## 🧩 File-by-File

### `server.js`

The **main backend** of the application.

Handles:

* Express server setup
* Routes and form submissions
* Registration and login
* Movie selection
* Movie data lookup
* Rating storage and updates
* EJS rendering

The server runs on **port 4000**.

---

### `search.html`

The **landing and login page**.

Contains:

* MoviePulse branding
* Login form
* Registration link
* Login interface

It loads `javascript.js` for browser-side interactions.

---

### `Register.html`

The **user registration page**.

Collects user information and sends it to:

```text
POST /Register
```

which is handled by `server.js`.

---

### `javascript.js`

Client-side JavaScript for the **landing/login interface**.

It controls interactive behaviour on `search.html`, such as the login interface and related UI actions.

---

# 🖥️ `views/`

The `views` directory contains the main EJS pages and their frontend assets.

### `views/main.ejs`

The **main dashboard template** shown after login.

Contains:

* Welcome message
* Search bar
* Recommendation button
* Logout control
* Movie-card template

It loads `main3.js`.

### `views/main1.css`

CSS for the dashboard.

Controls:

* Header
* Search bar
* Movie-card grid
* Poster styling
* Hover effects
* Rating stars
* Recommendation and logout buttons

### `views/main3.js`

The **main dashboard JavaScript**.

Responsible for:

* Loading movie data from `top100_k.json`
* Creating movie cards dynamically
* Handling movie selection
* Client-side movie search
* Generating genre-based recommendations

The recommendation system uses the user's ratings to estimate preferred genres and rank movies accordingly.

### `views/main2.js`

An **earlier/alternative dashboard implementation**.

It uses a different movie/template structure and is not the main script currently loaded by `main.ejs`, which uses `main3.js`.

### `views/beast.ejs`

The **movie details page**.

Displays:

* Movie title
* Poster
* Plot
* Genre
* IMDb rating
* Year
* Director
* Writers
* Cast
* User rating

It also provides the movie-rating interface.

### `views/beaststyle.css`

CSS styling for the movie details page.

### `views/beastmind.js`

Client-side JavaScript for the movie details page, including interactions related to the rating/details interface.

---

## 🐍 `python-files/`

Contains Python scripts used during the **movie-data preparation stage**.

### `extract.py`

Used for extracting/preparing movie data.

### `extractingimages.py`

Used for extracting/preparing movie images.

These scripts support the data-generation process rather than the Node.js runtime.

---

## 📄 `top100_k.json`

The application's **movie catalogue**.

Contains movie information such as:

* Title
* Year
* Runtime
* IMDb rating
* Genre
* Director
* Writers
* Cast
* Plot
* Poster information

`main3.js` uses it to build movie cards, while `server.js` uses it when preparing movie details.

---

## 📦 `package.json`

Defines the Node.js project and its dependencies, including:

* Express
* EJS
* body-parser
* dotenv
* nodemon

Dependencies can be installed with:

```bash
npm install
```

### `package-lock.json`

Locks the dependency versions so the project can be installed consistently.

---

## 🔒 `.gitignore`

Prevents files such as:

```text
node_modules/
.env
.DS_Store
*.log
```

from being committed to Git.

---

## 🔄 Application Flow

```text
             User
              │
              ▼
        search.html
         │       │
      Login    Register
         │       │
         └───┬───┘
             ▼
         server.js
             │
             ▼
          main.ejs
             │
             ▼
          main3.js
             │
      ┌──────┼──────┐
      ▼      ▼      ▼
    Search  Movie  Recommend
             │
             ▼
          beast.ejs
             │
             ▼
           Rating
             │
             ▼
          server.js
```

---

## 🚀 Running the Project

### Install dependencies

```bash
npm install
```

### Start the server

```bash
node server.js
```

### Open the application

```text
http://localhost:4000
```

---

## ⚠️ Current Limitations

This is primarily an academic/learning project.

Current limitations include:

* JSON-based persistence instead of a database
* Passwords are not hashed
* Authentication is not production-grade
* Application state relies on local files
* Limited validation and security

---

## 🔮 Future Improvements

Possible extensions include:

* MongoDB/PostgreSQL integration
* Password hashing with `bcrypt`
* Proper session/JWT authentication
* Improved search and filtering
* More advanced recommendation algorithms
* User profiles and watchlists
* Production deployment

---

## 📜 License

This project is licensed under the **ISC License**.

---

## 👨‍💻 Project

**MoviePulse** — a lightweight movie discovery, rating, and recommendation application built with Node.js and Express.
