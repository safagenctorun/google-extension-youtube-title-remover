chrome.storage.sync.get(["enabled"], (result) => {
  if (result.enabled ?? true) {
    console.log("Extension is enabled. Running content script...");
    runScript();
  } else {
    console.log("Extension is disabled. Doing nothing.");
  }
});

const titleElement = document.querySelector(".ytp-title-text");
const gradientElement = document.querySelector(".ytp-gradient-top");
function runScript() {
  if (titleElement) {
    titleElement.remove();
  }
  if (gradientElement) {
    gradientElement.remove();
  }
}
