const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const stravaStatusLabel = document.getElementById("strava-status-label");
const stravaFocusValue = document.getElementById("strava-focus-value");
const stravaFocusLabel = document.getElementById("strava-focus-label");

if (stravaStatusLabel && stravaFocusValue && stravaFocusLabel) {
  const widgetStates = [
    { status: "Recent rides on profile", focusValue: "Endurance", focusLabel: "Training focus" },
    { status: "Consistency check-in", focusValue: "Tempo", focusLabel: "Current block" },
    { status: "Momentum tracking", focusValue: "Race prep", focusLabel: "Season objective" },
    { status: "Progress snapshots", focusValue: "Climbing", focusLabel: "Performance theme" },
  ];

  let stateIndex = 0;
  setInterval(() => {
    stateIndex = (stateIndex + 1) % widgetStates.length;
    const current = widgetStates[stateIndex];
    stravaStatusLabel.textContent = current.status;
    stravaFocusValue.textContent = current.focusValue;
    stravaFocusLabel.textContent = current.focusLabel;
  }, 3200);
}
