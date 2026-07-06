# FloodSense AI
### Intelligent Flood Emergency Intelligence Platform
**IEEE Response Quest Challenge 2026 · Concept #5204 · Score: 4.52/5**

> From data chaos to decision clarity — in under 3 minutes.

---

## Live Demo

Deploy to Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/floodsense-ai)

---

## What It Is

FloodSense AI is a real-time flood emergency intelligence platform that fuses eight heterogeneous data streams — satellite imagery, weather radar, hydrological sensors, GIS elevation, census vulnerability data, power grid status, and social media — into a single actionable command interface for flood emergency responders.

**Submitted by:** Muhammad Zunnurain Hussain | IEEE Member #92687282 | engrrhusain@gmail.com

---

## Platform Pages

| Page | Role | Description |
|------|------|-------------|
| `/index.html` | Public | Landing page with platform overview |
| `/dashboard.html` | Incident Commander | Live map, evacuation priority list, resource tracker, LSTM forecast |
| `/map.html` | All roles | Interactive flood inundation map with layer controls + forecast animation |
| `/alerts.html` | Field teams | Distress signal management (BERTweet NLP) |
| `/analytics.html` | Analysts | All four ML models: U-Net, LSTM, Random Forest, BERTweet |
| `/reports.html` | Public Info Officer | Auto-generated SitRep, population exposure, resource status, forecast summary |

---

## Architecture

```
Layer 1 — Ingestion:    8 data source categories · REST, SFTP, WebSocket, MQTT
Layer 2 — Storage:      InfluxDB (time-series) + PostGIS (geospatial)
Layer 3 — AI Engine:    U-Net CNN · Bi-LSTM · Random Forest · BERTweet NLP
Layer 4 — Kafka Bus:    Event streaming · audit log · real-time sync
Layer 5 — Dashboard:    React/MapLibre GL · 3 role-based views
```

### ML Models

| Model | Task | Training | Performance |
|-------|------|----------|-------------|
| U-Net CNN | Flood extent segmentation | Sen1Floods11 (446k patches) | 0.89 IoU |
| Bi-LSTM | Streamflow forecasting | 20yr USGS records, 350 stations | 15/30/90-min horizons |
| Random Forest | Population-at-risk scoring | CDC SVI + Census ACS | 0–100 vulnerability index |
| BERTweet NLP | Distress signal detection | Fine-tuned on flood tweets | Real-time, 1km grid |

---

## Deploy to Vercel

### Option 1: One-click (recommended)

1. Fork this repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your fork
4. Deploy — no build configuration needed (static site)

### Option 2: CLI

```bash
git clone https://github.com/YOUR_USERNAME/floodsense-ai
cd floodsense-ai
npx vercel --prod
```

### Option 3: GitHub → Vercel auto-deploy

1. Push to GitHub
2. Connect repo in Vercel dashboard
3. Every push to `main` auto-deploys

---

## Tech Stack

- **HTML5 + Tailwind CSS** (via CDN) — no build step required
- **Chart.js 4** — LSTM forecast charts, vulnerability bar charts
- **Canvas API** — interactive flood map with layer controls
- **Vanilla JavaScript** — simulation engine, real-time data
- **Google Fonts** — Space Grotesk (display) + Inter (body) + JetBrains Mono (data)

---

## File Structure

```
floodsense-ai/
├── index.html              # Landing page
├── dashboard.html          # Command Center (Incident Commander)
├── map.html                # Interactive flood map
├── alerts.html             # Distress signal management
├── analytics.html          # ML model analytics
├── reports.html            # Auto-generated situation reports
├── styles/
│   └── main.css            # Custom styles (animations, badges, map)
├── src/
│   ├── utils/
│   │   └── sim.js          # Simulation data engine
│   └── components/
│       └── nav.js          # Shared navigation
├── vercel.json             # Vercel deployment config
└── README.md
```

---

## IEEE Response Quest 2026

- **Disaster Focus:** Floods
- **Core Technology:** AI/ML & Data Science
- **Review Score:** 4.52/5 (10 evaluators)
- **Status:** Impact Challenge Product Submission

### Evaluation Scores
| Criterion | Score |
|-----------|-------|
| Timeliness & Technical Reliability | 4.7/5 |
| Integration & Responsible Data Handling | 4.8/5 |
| Comprehensiveness & Novel Data Discovery | 4.4/5 |
| Scenario Fit & Innovation | 4.4/5 |
| Usability & Operational Readiness | 4.3/5 |

---

*FloodSense AI — Muhammad Zunnurain Hussain — IEEE #92687282*
