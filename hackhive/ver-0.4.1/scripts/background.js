
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log("Background 1 working")
    // Checks if the URL has changed
    if (changeInfo.url) {
        chrome.tabs.query({}, function(tabs) {
            const isMeetPage = tabs.some(tab => tab.url && tab.url.includes("meet.google.com"));
            chrome.storage.local.set({isMeetPage: isMeetPage});
        });
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['scripts/contentScript.js']
        });
    }
});

// Optional: Listen for tab removal if you want to handle something specific when tabs are closed.
chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
    console.log("Background 2 working")

    chrome.tabs.query({}, function(tabs) {
        const anyMeetPageOpen = tabs.some(tab => tab.url && tab.url.includes("meet.google.com"));
        chrome.storage.local.set({isMeetPage: anyMeetPageOpen});
    });
    
});