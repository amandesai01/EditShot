document.getElementById('edit').addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
        chrome.tabs.sendMessage(tabs[0].id, "MAKE_ALL_EDITABLE");
    });
});

document.getElementById('capture').addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
        chrome.tabs.sendMessage(tabs[0].id, "CAPTURE_SCREEN");
    });
})