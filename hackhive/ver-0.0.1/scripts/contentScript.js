// contentScript.js
// chrome.tabs.onUpdated.addListener((tabId, tab)=> {
//     if(tab.url && tab.url.includes("meet.google.com")){
//         chrome.runtime.sendMessage({notMeetPage: true});
//     }
//     else{
//         chrome.runtime.sendMessage({notMeetPage: false})
//     }
// })

// document.addEventListener('DOMContentLoaded', () => {
//     if (!location.href.includes("meet.google.com")) {
//         // Selects the body of the hello_world.html and changes its content
//         // Note: This assumes that you have direct access to modify hello_world.html, which might not work as expected due to Chrome extension isolated worlds
//         // For demonstration purposes only
//         chrome.runtime.sendMessage({notMeetPage: true});
//     }
//     else{
//         chrome.runtime.sendMessage({notMeetPage: false})
//     }
// });


// contentScript.js
chrome.runtime.sendMessage({isMeetPage: location.href.includes("meet.google.com")});
