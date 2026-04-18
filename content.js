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
  const titleElement = document.querySelector(
    ".ytPlayerOverlayVideoDetailsRendererTitle, .ytPlayerOverlayVideoDetailsRendererSingleLineTitle",
  );
  const subTitleElement = document.querySelector(
    ".ytPlayerOverlayVideoDetailsRendererSubtitle, .ytPlayerOverlayVideoDetailsRendererHideSubtitle",
  );
  // const gradientElement = document.querySelector(".ytp-gradient-top");

  if (titleElement) {
    titleElement.style.setProperty("opacity", "0", "important");
  }
  if (subTitleElement) {
    subTitleElement.style.setProperty("opacity", "0", "important");
  }
  // if (gradientElement) {
  //   gradientElement.remove();
  // }
}
