// FloodSense AI — Simulation Engine
// Generates realistic flood emergency data for the demo platform

const SIM = {
  // Current incident state
  incident: {
    name: 'Operation: Sindh Response Alpha',
    id: 'INC-2026-0703-001',
    started: new Date(Date.now() - 2.5 * 3600000),
    level: 'CRITICAL',
    commander: 'Brig. (R) Asif Nawaz',
    eoс: 'Hyderabad Provincial EOC',
    activeSectors: 7,
    evacuated: 14280,
    atRisk: 81500,
    distressSignals: 47
  },

  // Census blocks with vulnerability scores
  censusBlocks: [
    { id: 'CB-001', name: 'Qasimabad North', district: 'Hyderabad', lat: 25.41, lng: 68.37, pop: 12400, vuln: 87, age65: 18, disabled: 12, noVehicle: 64, lowIncome: 71, floodDepth: 1.8, status: 'EVACUATE', priority: 1 },
    { id: 'CB-002', name: 'Latifabad Unit-8', district: 'Hyderabad', lat: 25.39, lng: 68.33, pop: 9800, vuln: 79, age65: 15, disabled: 9, noVehicle: 58, lowIncome: 65, floodDepth: 1.2, status: 'EVACUATE', priority: 2 },
    { id: 'CB-003', name: 'Tando Allahyar Central', district: 'Tando', lat: 25.47, lng: 68.72, pop: 8200, vuln: 74, age65: 21, disabled: 14, noVehicle: 71, lowIncome: 68, floodDepth: 0.9, status: 'WARNING', priority: 3 },
    { id: 'CB-004', name: 'Matiari Riverside', district: 'Matiari', lat: 25.60, lng: 68.46, pop: 6100, vuln: 68, age65: 19, disabled: 11, noVehicle: 55, lowIncome: 60, floodDepth: 0.6, status: 'WARNING', priority: 4 },
    { id: 'CB-005', name: 'Hala Old Town', district: 'Matiari', lat: 25.79, lng: 68.43, pop: 5400, vuln: 61, age65: 16, disabled: 8, noVehicle: 49, lowIncome: 54, floodDepth: 0.3, status: 'WATCH', priority: 5 },
    { id: 'CB-006', name: 'Jhangara Colony', district: 'Hyderabad', lat: 25.35, lng: 68.28, pop: 7300, vuln: 55, age65: 13, disabled: 7, noVehicle: 43, lowIncome: 48, floodDepth: 0.2, status: 'WATCH', priority: 6 },
    { id: 'CB-007', name: 'Sindh Industrial Zone', district: 'Hyderabad', lat: 25.43, lng: 68.41, pop: 3200, vuln: 32, age65: 5, disabled: 3, noVehicle: 28, lowIncome: 31, floodDepth: 0.1, status: 'MONITOR', priority: 7 },
  ],

  // Stream gauge readings (USGS-equivalent)
  gauges: [
    { id: 'G-INDUS-01', name: 'Indus at Kotri', river: 'Indus', current: 487230, threshold: { watch: 280000, warning: 380000, critical: 450000 }, unit: 'cusecs', trend: 'rising', changePct: +23 },
    { id: 'G-PHULELI-01', name: 'Phuleli Canal Head', river: 'Phuleli', current: 18400, threshold: { watch: 12000, warning: 15000, critical: 18000 }, unit: 'cusecs', trend: 'rising', changePct: +31 },
    { id: 'G-AKRAM-01', name: 'Akram Wah at Tando', river: 'Akram Wah', current: 9200, threshold: { watch: 5000, warning: 7000, critical: 8500 }, unit: 'cusecs', trend: 'steady', changePct: +4 },
  ],

  // LSTM 90-minute forecasts
  forecasts: {
    'G-INDUS-01': [
      { t: 0, val: 487230, lo: 472000, hi: 502000 },
      { t: 15, val: 498000, lo: 479000, hi: 517000 },
      { t: 30, val: 511000, lo: 488000, hi: 534000 },
      { t: 45, val: 524000, lo: 496000, hi: 552000 },
      { t: 60, val: 538000, lo: 504000, hi: 572000 },
      { t: 75, val: 551000, lo: 511000, hi: 591000 },
      { t: 90, val: 563000, lo: 517000, hi: 609000 },
    ]
  },

  // Social media distress signals
  distressSignals: [
    { id: 'DS-001', platform: 'Twitter/X', time: '03:47', text: 'Flooding in qasimabad need help family of 6 trapped second floor #flood #hyderabad', lat: 25.412, lng: 68.371, confidence: 0.94, responded: false, severity: 'CRITICAL' },
    { id: 'DS-002', platform: 'Twitter/X', time: '03:52', text: 'Water level rising fast in Unit 8 Latifabad cant leave elderly parents need rescue', lat: 25.388, lng: 68.334, confidence: 0.91, responded: false, severity: 'CRITICAL' },
    { id: 'DS-003', platform: 'Telegram', time: '03:58', text: 'Matiari: 4 children stuck near railway bridge water 3 feet and rising urgent help required', lat: 25.601, lng: 68.461, confidence: 0.88, responded: true, severity: 'HIGH' },
    { id: 'DS-004', platform: 'Twitter/X', time: '04:03', text: 'Hala road completely blocked cant reach hospital my mother needs dialysis #sindh #flood2026', lat: 25.789, lng: 68.428, confidence: 0.85, responded: false, severity: 'HIGH' },
    { id: 'DS-005', platform: 'Twitter/X', time: '04:11', text: 'anyone in tando allahyar? streets underwater animals stuck need help', lat: 25.472, lng: 68.718, confidence: 0.79, responded: false, severity: 'MEDIUM' },
    { id: 'DS-006', platform: 'Telegram', time: '04:15', text: 'Jhangara: Pump station flooded, generator room at risk, utility workers evacuated', lat: 25.351, lng: 68.282, confidence: 0.83, responded: true, severity: 'MEDIUM' },
    { id: 'DS-007', platform: 'Twitter/X', time: '04:22', text: 'Unit 2 Latifabad: mosque maulvi says 200 people sheltering inside requesting food water', lat: 25.382, lng: 68.331, confidence: 0.77, responded: false, severity: 'MEDIUM' },
  ],

  // Resource deployment
  resources: [
    { id: 'R-001', type: 'Rescue Boat', unit: 'NDMA Team Alpha', status: 'DEPLOYED', sector: 'Qasimabad North', eta: null, lat: 25.414, lng: 68.374 },
    { id: 'R-002', type: 'Rescue Boat', unit: 'NDMA Team Bravo', status: 'EN_ROUTE', sector: 'Latifabad Unit-8', eta: '04:35', lat: 25.395, lng: 68.340 },
    { id: 'R-003', type: 'Medical Unit', unit: 'Civil Hospital Mobile', status: 'STAGED', sector: 'Hyderabad EOC', eta: null, lat: 25.380, lng: 68.360 },
    { id: 'R-004', type: 'Helicopter', unit: 'Pak Army Aviation', status: 'DEPLOYED', sector: 'Matiari Riverside', eta: null, lat: 25.598, lng: 68.458 },
    { id: 'R-005', type: 'Relief Camp', unit: 'Red Crescent Team', status: 'ACTIVE', sector: 'Tando Allahyar Central', eta: null, lat: 25.475, lng: 68.720 },
    { id: 'R-006', type: 'Rescue Boat', unit: 'NDMA Team Charlie', status: 'EN_ROUTE', sector: 'Hala Old Town', eta: '04:58', lat: 25.780, lng: 68.432 },
  ],

  // Data source statuses
  dataSources: [
    { name: 'Sentinel-1 SAR', type: 'Satellite', status: 'ACTIVE', lastUpdate: '03:51', refreshRate: '90s', quality: 98 },
    { name: 'NOAA NEXRAD', type: 'Radar', status: 'ACTIVE', lastUpdate: '04:28', refreshRate: '5m', quality: 95 },
    { name: 'USGS Gauges (3)', type: 'Hydrological', status: 'ACTIVE', lastUpdate: '04:30', refreshRate: '15m', quality: 100 },
    { name: 'NASA SRTM DEM', type: 'Elevation', status: 'CACHED', lastUpdate: 'Static', refreshRate: 'Static', quality: 100 },
    { name: 'OpenStreetMap', type: 'GIS', status: 'CACHED', lastUpdate: 'Static', refreshRate: 'Static', quality: 100 },
    { name: 'CDC SVI / Census', type: 'Demographics', status: 'CACHED', lastUpdate: 'Static', refreshRate: 'Annual', quality: 100 },
    { name: 'Twitter/X Stream', type: 'Social Media', status: 'ACTIVE', lastUpdate: '04:30', refreshRate: 'Real-time', quality: 87 },
    { name: 'Telegram Channels', type: 'Social Media', status: 'ACTIVE', lastUpdate: '04:29', refreshRate: 'Real-time', quality: 82 },
  ],

  // Generate hourly discharge history for chart
  generateGaugeHistory(baseVal, points = 12) {
    const vals = [];
    let v = baseVal * 0.52;
    for (let i = 0; i < points; i++) {
      v = v * (1 + (Math.random() * 0.12 + 0.04));
      vals.push(Math.round(v));
    }
    return vals;
  },

  // Format numbers
  fmt(n) {
    if (n >= 1000000) return (n/1000000).toFixed(1) + 'M';
    if (n >= 1000) return (n/1000).toFixed(0) + 'k';
    return n.toLocaleString();
  },

  // Get alert level color class
  alertColor(level) {
    const map = { CRITICAL: 'badge-critical', HIGH: 'badge-high', MEDIUM: 'badge-medium', LOW: 'badge-low', WATCH: 'badge-medium', WARNING: 'badge-high', EVACUATE: 'badge-critical', MONITOR: 'badge-low', ACTIVE: 'badge-active' };
    return map[level] || 'badge-low';
  },

  // Get time elapsed since incident
  elapsed() {
    const ms = Date.now() - this.incident.started;
    const h = Math.floor(ms / 3600000);
    const m = Math.floor((ms % 3600000) / 60000);
    return `${h}h ${m}m`;
  },

  // Live clock
  clock() {
    return new Date().toLocaleTimeString('en-PK', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  }
};

// Expose globally
window.SIM = SIM;
