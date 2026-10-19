# ⚡ Shubham Kharbad — Modern Developer Portfolio

A responsive, high-performance personal portfolio website built with **React 18 + Vite** on the frontend and **Node.js + Express + MongoDB** on the backend. Designed with an electric blue/violet dark theme, smooth scroll navigation, subtle Framer Motion animations, interactive project modals, and a contact system with database persistence and email alerts.

---

## 🌟 Highlights & Features

- **Theme Engine**: Sleek dark mode by default with electric blue/violet gradient accents (`#38BDF8` → `#6366F1` → `#8B5CF6`) and a toggle for light mode (persisted via `localStorage`).
- **Interactive Single-Page Architecture**:
  - **Hero**: Typing animation for roles, real portrait image, quick-action CTA buttons, resume download, and social links.
  - **About**: Academic timeline (KIT Kolhapur CGPA 8.74, Vaidyanath College, Shri Jagmitra Naga Vidyalaya SSC 99.60%), statistics, languages, and technical philosophy.
  - **Skills**: Categorized competencies (Languages, Frontend, Backend, Databases, Tools, Core CS) with interactive filter tabs and animated proficiency indicators.
  - **Projects**: Category filter (Web, AI/ML, Extensions), honest "In Progress" badges for unfinished builds, direct GitHub/Live links, and an in-depth **Architecture & Benchmark Modal**.
  - **GitHub Stats Live Widget**: Real-time public repo and follower count via GitHub's public REST API with graceful offline fallback.
  - **Achievements & Hackathons**: Milestone cards (BGMIT 2nd Runner-Up, Zonal Finals Mumbai, INVENTRA 2025).
  - **Certifications**: NPTEL (DSA in Java) and Udemy (Complete Web Development Bootcamp) with verified badges.
  - **Contact Form**: Direct messaging validated by `express-validator`, rate-limited against abuse, stored in MongoDB with email notifications dispatched via Nodemailer.
- **Fail-Safe Data Layer**: The frontend automatically queries the Express REST API, but seamlessly falls back to local data if the server or network is unreachable.
- **Graceful Image Fallbacks**: Any missing or corrupted image displays a clean gradient placeholder box with a category icon.

---

## 🛠️ Tech Stack

### Frontend (`/client`)
- **React 18** + **Vite 5** (Fast HMR & optimized production builds)
- **Tailwind CSS 3** (Custom electric color tokens & glassmorphism)
- **Framer Motion 11** (Scroll reveals, layout transitions, modal physics)
- **React Icons** (Feather, Simple Icons, FontAwesome, Tabler, VS Code)
- **React Router DOM 6**

### Backend (`/server`)
- **Node.js** + **Express 4** (ES Modules)
- **MongoDB** with **Mongoose 8** (Schema validation & persistence)
- **Nodemailer** (HTML email notification templates)
- **express-validator** (Input sanitization & type enforcement)
- **helmet** & **cors** (HTTP security headers and origin controls)
- **express-rate-limit** (DDoS and spam protection on API and contact endpoints)
- **dotenv** (Environment variable isolation)

---

## 📂 Project Structure

```text
portfolio/
├── client/                     # Frontend Vite + React application
│   ├── public/
│   │   ├── favicon.svg         # Modern gradient monogram SVG
│   │   └── resume.pdf          # Downloadable resume document
│   ├── src/
│   │   ├── assets/
│   │   │   └── images/         # Profile, project, and achievement media
│   │   │       ├── profile.jpg
│   │   │       ├── projects/   # skillzy.png, purepic.png, silentshield.png
│   │   │       ├── achievements/ # bgmit.jpg, zonal-finals.jpg, inventra.jpg
│   │   │       └── certificates/ # nptel.png, udemy.png
│   │   ├── components/
│   │   │   ├── Navbar.jsx      # Sticky navbar with active-section tracking
│   │   │   ├── Hero.jsx        # Typing animation and CTA buttons
│   │   │   ├── About.jsx       # Bio and education timeline
│   │   │   ├── Skills.jsx      # Categorized skill cards
│   │   │   ├── Projects.jsx    # Projects grid with category filters
│   │   │   ├── ProjectModal.jsx # Detailed modal dialog
│   │   │   ├── GitHubStats.jsx # Live GitHub profile stats
│   │   │   ├── Achievements.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Contact.jsx     # Form with validation and toasts
│   │   │   ├── Footer.jsx
│   │   │   ├── ScrollToTop.jsx
│   │   │   └── ImageWithFallback.jsx
│   │   ├── context/
│   │   │   └── ThemeContext.jsx # Dark / Light mode provider
│   │   ├── data/
│   │   │   └── portfolioData.js # Single source of truth for portfolio content
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
├── server/                     # Backend Express API
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js           # Mongoose connection with fallback handling
│   │   ├── controllers/
│   │   │   ├── portfolioController.js
│   │   │   └── contactController.js
│   │   ├── data/
│   │   │   └── portfolioData.js # Backend data representation
│   │   ├── middleware/
│   │   │   ├── errorHandler.js
│   │   │   └── rateLimiter.js
│   │   ├── models/
│   │   │   └── ContactMessage.js
│   │   ├── routes/
│   │   │   ├── portfolioRoutes.js
│   │   │   └── contactRoutes.js
│   │   └── server.js           # Server bootstrap & middleware chain
│   ├── .env.example
│   ├── .env
│   └── package.json
│
├── run-all.js                  # Concurrent local runner script
├── package.json                # Monorepo root scripts
└── README.md
```

---

## 🚀 Quickstart & Local Setup

### Prerequisites
- **Node.js**: v18+ (tested on v22.14.0)
- **npm**: v9+
- *(Optional)* **MongoDB**: Running locally on `mongodb://localhost:27017` or a free MongoDB Atlas connection string. If MongoDB is not running, the backend seamlessly switches to an in-memory fallback store so testing is uninterrupted.

### 1. Clone & Install Dependencies
From the repository root:
```bash
# Install root, client, and server dependencies in one command
npm run install:all
```
*(Or install them individually: `cd client && npm install` then `cd ../server && npm install`)*

### 2. Configure Environment Variables
Inside `server/`, create or adjust `.env` (a template is provided in `server/.env.example`):
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/portfolio
CLIENT_URL=http://localhost:5173

# Optional: Nodemailer SMTP configuration (e.g. Gmail App Password)
EMAIL_SERVICE=gmail
EMAIL_USER=shubhamkharbad15@gmail.com
EMAIL_PASS=your_gmail_app_password_here
TO_EMAIL=shubhamkharbad15@gmail.com
```

### 3. Run the Monorepo (Client + Server)
From the root directory:
```bash
npm run dev
```
This concurrently starts:
- 🌐 **Frontend (Vite)**: `http://localhost:5173`
- ⚙️ **Backend API (Express)**: `http://localhost:5000`

You can also run them in separate terminal windows:
```bash
# Terminal 1: Backend
cd server
npm run dev

# Terminal 2: Frontend
cd client
npm run dev
```

---

## 🖼️ How to Replace Images & Resume

All images are centralized in `/client/src/assets/images/`:
1. **Profile Photo**: Replace `/client/src/assets/images/profile.jpg`
2. **Project Screenshots**:
   - `/client/src/assets/images/projects/skillzy.png`
   - `/client/src/assets/images/projects/purepic.png`
   - `/client/src/assets/images/projects/silentshield.png`
3. **Achievements & Hackathons**:
   - `/client/src/assets/images/achievements/bgmit.jpg`
   - `/client/src/assets/images/achievements/zonal-finals.jpg`
   - `/client/src/assets/images/achievements/inventra.jpg`
4. **Certificates**:
   - `/client/src/assets/images/certificates/nptel.png`
   - `/client/src/assets/images/certificates/udemy.png`
5. **Resume PDF**:
   - Replace `/client/public/resume.pdf` with your updated resume file.

> **Tip**: All project links, descriptions, and metrics can be edited in a single file: `client/src/data/portfolioData.js`.

---

## 📡 REST API Documentation

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Server uptime, environment, and DB status |
| `GET` | `/api/profile` | Personal summary, education, and social URLs |
| `GET` | `/api/projects` | List of projects (supports `?category=web` filter) |
| `GET` | `/api/skills` | Categorized technical competencies |
| `GET` | `/api/achievements`| Competition recognitions and hackathons |
| `GET` | `/api/certifications`| Course certifications |
| `POST` | `/api/contact` | Submits contact inquiry (Rate limited, validated) |

### Sample Contact Request Body:
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "message": "Hi Shubham, I would love to connect regarding an internship opportunity."
}
```

---

## ☁️ Deployment Guide

### 1. Database: MongoDB Atlas
1. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Go to **Network Access** and add `0.0.0.0/0` (allow access from anywhere) or your cloud host's IP.
3. Under **Database Access**, create a database user and password.
4. Click **Connect** → **Drivers** and copy your connection string:
   `mongodb+srv://<username>:<password>@cluster0.mongodb.net/portfolio?retryWrites=true&w=majority`

### 2. Backend: Render / Railway
#### Option A: Render
1. Create a new **Web Service** connected to your GitHub repository.
2. Set **Root Directory**: `server`
3. Set **Build Command**: `npm install`
4. Set **Start Command**: `npm start`
5. Add the Environment Variables:
   - `PORT`: `5000`
   - `NODE_ENV`: `production`
   - `MONGO_URI`: `your_mongodb_atlas_connection_string`
   - `CLIENT_URL`: `https://your-frontend-domain.vercel.app`
   - `EMAIL_USER`: `shubhamkharbad15@gmail.com`
   - `EMAIL_PASS`: `your_16_char_gmail_app_password`
   - `TO_EMAIL`: `shubhamkharbad15@gmail.com`

#### Option B: Railway
1. Select "Deploy from GitHub repo" and select `/server` directory.
2. Add the environment variables from your `.env`.

### 3. Frontend: Vercel / Netlify
#### Option A: Vercel
1. Import your repository into [Vercel](https://vercel.com).
2. Set **Root Directory**: `client`
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Add environment variable or rewrite in `vercel.json` to proxy `/api` calls to your Render backend URL:
```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://your-backend-service.onrender.com/api/:path*"
    }
  ]
}
```

#### Option B: Netlify
1. Connect repo on [Netlify](https://www.netlify.com).
2. Base directory: `client`
3. Build command: `npm run build`
4. Publish directory: `client/dist`

---

## 🔒 Security & Best Practices

- **Helmet**: Secures HTTP response headers against clickjacking, sniffing, and XSS.
- **CORS Whitelist**: Configured to accept requests from your verified client domain only.
- **Express Rate Limiting**: Prevents brute force and denial of service attacks by restricting endpoints to safe window thresholds.
- **Input Sanitization**: `express-validator` sanitizes and escapes all inbound text inputs.
- **Semantic HTML & A11y**: Proper headings, ARIA attributes, keyboard accessibility, and image alt text throughout.

---

## 👤 Author
**Shubham Kharbad**
- **Email**: [shubhamkharbad15@gmail.com](mailto:shubhamkharbad15@gmail.com)
- **LinkedIn**: [linkedin.com/in/shubham-kharbad](https://linkedin.com/in/shubham-kharbad)
- **GitHub**: [github.com/shubhamkharbad15-afk](https://github.com/shubhamkharbad15-afk)
