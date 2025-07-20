const button = document.getElementById('toggleButton');

chrome.storage.sync.get(['focusMode'], (result) => {
  const isOn = result.focusMode === true;
  updateButton(isOn);
});

button.addEventListener('click', () => {
  chrome.storage.sync.get(['focusMode'], (result) => {
    const isOn = result.focusMode === true;
    const newValue = !isOn;

    chrome.storage.sync.set({ focusMode: newValue }, () => {
      updateButton(newValue);
    });
  });
});

function updateButton(isOn) {
  button.textContent = isOn ? 'Focus Mode: ON' : 'Focus Mode: OFF';
  button.className = isOn ? '' : 'off';
}