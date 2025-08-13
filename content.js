chrome.storage.sync.get(["enabled"], (result) => {
  if (result.enabled ?? true) {
    console.log("Extension is enabled. Listening for fullscreen changes...");
    document.addEventListener("fullscreenchange", handleFullscreenChange);
  } else {
    console.log("Extension is disabled.");
  }
});

function handleFullscreenChange() {
  if (document.fullscreenElement) {
    removeFullscreenElements();
  }
}

function removeFullscreenElements() {
  const titleElement = document.querySelector(".ytp-title-text");
  const gradientElement = document.querySelector(".ytp-gradient-top");

  if (titleElement) {
    titleElement.remove();
  }
  if (gradientElement) {
    gradientElement.remove();
  }
}
