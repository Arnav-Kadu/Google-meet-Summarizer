
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     if (request.notMeetPage) {
//         chrome.storage.local.set({notMeetPage: true});
//     }
// });


// background.js
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     chrome.storage.local.set({isMeetPage: request.isMeetPage});
// });


// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     chrome.storage.local.set({isMeetPage: request.isMeetPage});
// });

// changeInfo.url.includes("meet.google.com");

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log("Background 1 working")
    // Checks if the URL has changed
    if (changeInfo.url) {
        chrome.tabs.query({}, function(tabs) {
            const isMeetPage = tabs.some(tab => tab.url && tab.url.includes("meet.google.com"));
            chrome.storage.local.set({isMeetPage: isMeetPage});
        });
    }
});

// Optional: Listen for tab removal if you want to handle something specific when tabs are closed.
chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
    console.log("Background 2 working")
    // Handle tab close if necessary. For example, check if the closed tab affects your conditions.
    // This might be more complex because you need to know if the closed tab was a Meet tab and if any Meet tabs are still open.
    chrome.tabs.query({}, function(tabs) {
        const anyMeetPageOpen = tabs.some(tab => tab.url && tab.url.includes("meet.google.com"));
        chrome.storage.local.set({isMeetPage: anyMeetPageOpen});
    });
});


