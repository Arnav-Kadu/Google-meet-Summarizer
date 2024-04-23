chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.url && changeInfo.url.includes("meet.google.com")) {
        // Inject contentScript.js into the updated tab if it's a Google Meet page
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['scripts/contentScript.js']
        });
    }
});




