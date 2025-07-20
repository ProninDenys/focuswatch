function hideYouTubeDistractions() {
  const selectors = [
    '#comments',
    '#secondary', 
    'ytd-merch-shelf-renderer',
    'ytd-watch-next-secondary-results-renderer',
    '#related',
    'ytd-rich-section-renderer',
    'ytd-reel-shelf-renderer',
    'ytd-item-section-renderer[section-identifier="related-items"]'
  ];

  selectors.forEach(selector => {
    const el = document.querySelector(selector);
    if (el) el.style.display = 'none';
  });
}

// Следим за изменениями в DOM YouTube
const observer = new MutationObserver(() => {
  chrome.storage.sync.get(['focusMode'], (result) => {
    if (result.focusMode === true) {
      hideYouTubeDistractions();
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });