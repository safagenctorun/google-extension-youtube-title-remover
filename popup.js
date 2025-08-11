const switchEl = document.getElementById("extensionSwitch");
const reloadSection = document.getElementById("reloadSection");
const reloadBtn = document.getElementById("reloadBtn");

let initialState = true; // default

// Load saved state (default ON)
chrome.storage.sync.get(["enabled"], (result) => {
  initialState = result.enabled ?? true;
  switchEl.checked = initialState;
});

// When checkbox changes
switchEl.addEventListener("change", () => {
  const currentState = switchEl.checked;

  // Save new state
  chrome.storage.sync.set({ enabled: currentState });

  // Show/hide reload section based on change from initialState
  if (currentState !== initialState) {
    reloadSection.style.display = "block";
  } else {
    reloadSection.style.display = "none";
  }
});

// Reload the current active tab
reloadBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]?.id) {
      chrome.tabs.reload(tabs[0].id, () => {
        window.close(); // Close popup after reload
      });
    }
  });
});
