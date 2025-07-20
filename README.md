# PFAS India Map

A simple interactive web application to visualize PFAS (Per- and polyfluoroalkyl substances) contamination data across India. Built with React, Vite, and React-Leaflet.

---

## Features

- Informative landing page about PFAS: history, uses, health risks, and the Indian scenario
- Interactive India map using OpenStreetMap tiles
- Markers color-coded by severity (low, moderate, high) in different shades of blue
- Clickable markers open a sidebar with detailed contamination info
- Sidebar shows risk level, water source, affected population, test date, compound concentrations, EPA comparison, and data sources
- “Go Back” button for returning to the landing page from map view
- No authentication required

---

## Getting Started

git clone https://github.com/R1NCwasUnavailable/PFAS-map-IN.git
cd PFAS-map-IN
npm install
npm run dev


Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure
```
pfas-india-map/
├── public/
│   └── ... # (static assets, optional Netlify redirect files)
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── components/
│   │   ├── LandingPage.jsx
│   │   ├── MapPage.jsx
│   │   └── Sidebar.jsx
│   └── data/
│       └── pfasData.json
├── package.json
├── vite.config.js
└── README.md
```

## Data Source

- All PFAS sample data is in `src/data/pfasData.json`.
- Data covers Indian locations with fields for site name, lat/lon, compound levels, risk, water source, affected population, date, EPA comparison, and sources.

---

## Credits

- PFAS data compiled from Indian environmental studies (IIT Madras, TERIIN, CPCB, NGT, UNESCO, and others)
- Map tiles by [OpenStreetMap](https://www.openstreetmap.org/)
- Built using [React](https://react.dev/), [Vite](https://vitejs.dev/), and [React-Leaflet](https://react-leaflet.js.org/)
- Contributors: [R1NCwasUnavailable](https://github.com/R1NCwasUnavailable) and collaborators

---

## License

Open source under the [MIT License](LICENSE).

---

*Explore the interactive map and learn about PFAS contamination in India's water resources!*
